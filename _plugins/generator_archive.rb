require 'koala'
require 'yaml'
require 'time'

module Jekyll

  class ArchivePage < Page
    def initialize(site, base, dir, speakers, sessions, schedule, organizers, location)
      @site = site
      @base = base
      @dir = dir
      @name = 'index.html'

      self.process(@name)
      self.read_yaml(File.join(base, '_layouts'), 'schedule-archive.html')
      self.data['speakers'] = speakers
      self.data['sessions'] = sessions
      self.data['schedule'] = schedule
      self.data['organizers'] = organizers
      self.data['location'] = location

      #Surely this is not the best way to handle translations
      month_names = [nil, 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
      datetime = Time.parse(location['eventStartTime'])
      self.data['title'] = "Arquivo: #{month_names[datetime.month]} de #{datetime.year}"
      self.data['permalink'] = "/#{dir}/"
      self.data['pictures'] = generate_facebook_albums(schedule[0])
    end

    def generate_facebook_albums(schedule)
      if ENV['JEKYLL_ENV'] != 'production' ||
        site.config['facebookAppId'].empty? ||
        site.config['facebookAppId'].nil? ||
        site.config['facebookApiVersion'].empty? ||
        site.config['facebookApiVersion'].nil? ||
        site.config['facebookAppSecret'].empty? ||
        site.config['facebookAppSecret'].nil? ||
        schedule['facebookAlbumId'].nil? ||
        schedule['facebookAlbumId'].empty?
        return
      end

      Koala.config.api_version = "v#{site.config['facebookApiVersion']}"
      @oauth = Koala::Facebook::OAuth.new(site.config['facebookAppId'], site.config['facebookAppSecret'])
      app_access_token = @oauth.get_app_access_token
      @graph = Koala::Facebook::API.new(app_access_token)
      pictures = []
      @graph.get_connections(schedule['facebookAlbumId'], 'photos').each do |picture|
        pictures.push(
          'id' => @graph.get_picture(picture['id']),
          'link' => @graph.get_connections(picture['id'], '', :fields => 'link')['link']
        )
      end

      set_album_link(schedule['facebookAlbumId'])

      return pictures
    end

    def set_album_link(album_id)
      self.data['facebookAlbum'] = @graph.get_connections(album_id, '', :fields => 'link')['link']
    end

  end

  class ArchivePageGenerator < Generator
    safe true

    def generate(site)
      dir = 'previous'
      site.data['archive'].keys.each do |archive|
        speakers = site.data['archive'][archive]['speakers']
        sessions = site.data['archive'][archive]['sessions']
        schedule = site.data['archive'][archive]['schedule']
        organizers = site.data['archive'][archive]['organizers']
        location = site.data['archive'][archive]['location']

        site.pages << ArchivePage.new(site, site.source, File.join(dir, archive), speakers, sessions, schedule, organizers, location)
      end
    end
  end
end
