module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "Geek Night Recife",
      theme: "entrega contínua",
      description: "O Geek Night Recife está de volta e dessa vez o tema será Entrega Contínua! Não é necessário nenhum conhecimento prévio, todo estão convidados.
        A intenção é fazer um encontro informal com o objetivo de discutir sobre tecnologia. O evento vem cada vez mais se firmando como um espaço para produção e compartilhamento de conhecimento. Tendo a idéia de ser um espaço democrático e aberto, a Geek Night vem recebendo palestras, práticas e fóruns, tendo como assunto os mais diversos temas relacionados ao universo geek.",
      date: "08 de Julho",
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
        link: "https://www.facebook.com/events/102069203472323"
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
        name: "Justin Harringa",
        photo: "themes/yellow-swan/img/presenters/justin.jpg",
        bio: "Engenheiro de Sistemas no C.E.S.A.R.",
        link: {
          text: "github",
          href: "https://github.com/justinharringa"
        },
        presentation: {
          title: "Continuous Delivery - fundamentos, benefícios e como começar",
          description: "Justin Harringa vai apresentar os fundamentos e benefícios do Continuous Delivery e como você pode começar a introduzir essa prática nos seus projetos.",
          time: "19h20"
        }
      },
      {
        name: "Coffe Break",
        time: "19h50"
      },
      {
        name: "Renato Oliveira",
        photo: "themes/yellow-swan/img/presenters/renato.jpg",
        bio: "Fundador da Labcodes Software Studio e membro da Django Software Foundation.",
        link: {
          text: "twitter",
          href: "https://twitter.com/_renatooliveira"
        },
        presentation: {
          title: "Testes Pythonicos com Py.test",
          description: "Py.test é um framework maduro e completo de testes em Python. Diferente do Unittest, que é um projeto baseado no JUnit, o Py.test foi um projeto pensado para Python. Criado em 2004 por Holger Krekel, é usado por grandes projetos e empresas como PyPy, Sentry e Mozilla. Nesta palestra apresento uma introdução ao framework, runner, tests discovery, markers, fixtures e compara-lo ao Unittest.",
          time: "20h10"
        }
      },
      {
        name: "Pós Geek Night",
        time: "20h40"
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
      },
      {
        name: "Snap",
        logo: "themes/yellow-swan/img/snap-logo.png",
        url: "https://snap-ci.com/"
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
