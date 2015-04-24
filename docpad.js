module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "Geek Night Recife",
      theme: "por mulheres",
      description: "Finalmente o primeiro Geek Night de 2015 está chegando! \
        Buscando cada vez mais aumentar a participação de mulheres no evento, \
        não só como ouvintes, mas como palestrantes, teremos mais uma edição do \
        Geek Night {por mulheres}! \
        Isso quer dizer que teremos apenas apresentações de mulheres. \
        O Geek Night Recife começou com a intenção de ser um encontro informal com o \
        objetivo de discutir sobre tecnologia. O evento vem cada vez mais se \
        firmando como um espaço para produção e compartilhamento de \
        conhecimento. Tendo a idéia de ser um espaço democrático e aberto, a \
        Geek Night vem recebendo palestras, práticas e fóruns, tendo como \
        assunto os mais diversos temas relacionados ao universo geek. Não \
        deixe de conferir o blog do Geek Night: http://geeknightrecife.github.io .",
      date: "28 de Abril",
      // If your event is free, just comment this line
      //price: "$100",
      venue: "ThoughtWorks",
      address: "Av Governador Agamenon Magalhães, 4779",
      details: "12 andar. Empresarial Isaac Newton",
      city: "Recife",
      state: "PE"
    },

    // The Call To Action button at the header,
    // If you don't want this, just remove the callToAction property.
    callToAction: {
        text: "Eu vou!",
        link: "https://www.facebook.com/events/411424865692984"
    },

    // Site info
    site: {
      theme: "yellow-swan",
      url: "http://braziljs.github.io/conf-boilerplate/",
      googleanalytics: "UA-33656081-1"
    },

    // Active sections on the website
    // to deactivate comment out with '//'
    // you can also change order here and it will reflect on page
    sections: [
      'about',
      'location',
      'speakers',
      'schedule',
      //'sponsors',
      'partners'
      // 'contact'
    ],

    // Labels which you can translate to other languages
    labels: {
      about: "Sobre",
      location: "Local",
      speakers: "Palestrantes",
      schedule: "Agenda",
      sponsors: "Sponsors",
      partners: "Parceiros",
      contact: "Contato",
      time: "Hora",
      description: "Descrição",
      slot: "Tema"
    },

    // The entire schedule
    schedule: [
      {
        name: "Check-in",
        time: "19h00"
      },
      {
        name: "Roselma Mendes",
        photo: "themes/yellow-swan/img/presenters/roselma.jpg",
        bio: "Apaixonada por desenvolvimento de software, sou formada em Sistemas de Informação e a 5 anos trabalho na área. Já trabalhei como desenvolvedora e também como analista de testes em projetos Java nas plataformas ME, EE e SE. No momento estou na ThoughtWorks como desenvolvedora, atualmente em um projeto Python.",
        link: {
          text: "github",
          href: "http://github.com/roselmamendes"
        },
        presentation: {
          title: "Desenvolvendo web crawler/scraper com Python",
          description: "Falar o que são webcrawlers e demonstrar como desenvolver um na linguagem Python.",
          time: "19h20"
        }
      },

      {
        name: "Aline Cavalcante",
        photo: "themes/yellow-swan/img/presenters/aline.jpg",
        bio: "17 anos, presidente do Fora da Caixa, embaixadora FazINOVA, \
          graduanda em Psicologia pela UFPE, palestrante, empreendedora, \
          designer e programadora.",
        link: {
          text: "twitter",
          href: "http://twitter.com/cavalcantalines"
        },
        presentation: {
          title: "Pensando Fora da Caixa",
          description: "Um pouco sobre pensar Fora da Caixa e empreender em \
            todas as áreas da vida a partir do case da Aline Cavalcante.",
          time: "19h35"
        }
      },
      {
        name: "Coffe Break",
        time: "20h05"
      },
      {
        name: "Taíse Silva",
        photo: "themes/yellow-swan/img/presenters/taise.png",
        bio: "Taíse é formada em Ciência da Computação pela UFPE, e trabalha com criação de software desde 2006, focando em qualidade e automação de testes. Atualmente, tem focado mais em análise de negócios. Trabalha na ThoughtWorks como analista de qualidade, de negócios e consultoria.",
        link: {
          text: "github",
          href: "https://github.com/taisedias"
        },
        presentation: {
          title: "Três noções básicas essenciais para a criação de uma suíte de automação para aplicativos web",
          description: "Reflexões sobre a combinação de padrões e ferramentas que oferecem testes automatizados com alto valor de negócio e baixo custo de manutenção de código.",
          time: "20h25"
        }
      },
      {
        name: "Pós Geek Night",
        time: "21h00"
      },
    ],

    // List of Sponsors
    sponsors: [
      {
        name: "Eventick",
        logo: "themes/yellow-swan/img/sponsor.png",
        url: "http://eventick.com.br"
      }
    ],

    // List of Partners
    partners: [
      {
        name: "ThoughtWorks",
        logo: "themes/yellow-swan/img/tw-logo.png",
        url: "http://www.thoughtworks.com/pt/"
      }
    ],

    // Theme path
    getTheme: function() {
      return "themes/" + this.site.theme;
    },

    // Site Path
    getUrl: function() {
    	return this.site.url;
    }
  }
};
