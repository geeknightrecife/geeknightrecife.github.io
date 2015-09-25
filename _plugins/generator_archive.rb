module Jekyll

  class ArchivePage < Page
    def initialize(site, base, dir, speakers, sessions, title, schedule)
      @site = site
      @base = base
      @dir = dir
      @name = 'index.html'

      self.process(@name)
      self.read_yaml(File.join(base, '_layouts'), 'schedule-archive.html')
      self.data['speakers'] = speakers
      self.data['sessions'] = sessions
      self.data['schedule'] = schedule

      self.data['title'] = "Arquivo: #{title}"
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

          site.pages << ArchivePage.new(site, site.source, File.join(dir, archive['folder']), speakers, sessions, archive['title'], schedule)
        end
    end
  end

end
