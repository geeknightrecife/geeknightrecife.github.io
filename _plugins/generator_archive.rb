require 'koala'
require 'yaml'

module Jekyll

  class ArchivePage < Page
    def initialize(site, base, dir, speakers, sessions, title, schedule, organizers)
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

      self.data['title'] = "Arquivo: #{title}"
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
      site.data['previous'].each do |archive|
        speakers = site.data['archive'][archive['folder']]['speakers']
        sessions = site.data['archive'][archive['folder']]['sessions']
        schedule = site.data['archive'][archive['folder']]['schedule']
        organizers = site.data['archive'][archive['folder']]['organizers']

        site.pages << ArchivePage.new(site, site.source, File.join(dir, archive['folder']), speakers, sessions, archive['title'], schedule, organizers)
      end
    end
  end
end
