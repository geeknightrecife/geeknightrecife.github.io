module.exports = {

  plugins: {
    ghpages: {
      deployRemote: 'origin',
      deployBranch: 'master'
    }
  },

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "Geek Night Recife",
      theme: "",
      description: "Mais um Geek Night rolando em Recife, e dessa vez irá acontecer no auditório do CESAR.EDU. Teremos apresentações de pessoas da comunidade fortalecendo a discussão dentro de assuntos diversos voltados para a área de TI. Não é necessário nenhum conhecimento prévio, todo estão convidados. A intenção é fazer um encontro informal com o objetivo de discutir sobre tecnologia. O evento vem cada vez mais se firmando como um espaço para produção e compartilhamento de informação. Tendo a idéia de ser um espaço democrático, aberto e diverso, a Geek Night vem recebendo palestras, práticas e fóruns, tendo todo o tipo de assunto relacionados ao universo geek.",
      date: "27 de Agosto",
      // If your event is free, just comment this line
      //price: "$100",
      venue: "CESAR.EDU",
      address: "Rua do Brum, 77, Bairro do Recife, CEP 50030-260",
      details: "No Auditório",
      city: "Recife",
      state: "PE"
    },

    // The Call To Action button at the header,
    // If you don't want this, just remove the callToAction property.
    callToAction: {
        text: "Eu vou!",
        link: "https://www.facebook.com/events/1695833857314825/?ref=4&action_history=null"
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
        name: "Mateus Revoredo",
        photo: "themes/yellow-swan/img/presenters/mateus_geek.jpeg",
        bio: "",
        link: {
          text: "Github",
          href: "https://github.com/mateusrevoredo"
        },
        presentation: {
          title: "Bootstrapping web applications without Bootstrap",
          description: "E se eu lhe disesse que você pode fazer o bootstrapping de uma aplicação web sem utilizar o Twitter Bootstrap? E mais, e se essa alternativa fosse mais organizada, mais fácil, mais flexível, e proporcionasse a você escrever um HTML muito mais semântico? Parece utópico? Nesse lightning talk, vamos fazer um overview nos frameworks de front-end da Thoughtbot(Bourbon, Neat, Bitters & Refills) e como em conjunto eles podem ser uma alternativa ao Twitter Bootstrap em diversas ocasiões.",
          time: "19h20"
        }
      },
      {
        name: "Andrei Tognolo",
        photo: "themes/yellow-swan/img/presenters/andrei_geek.jpeg",
        bio: "",
        link: {
          text: "Github",
          href: "https://github.com/andreitognolo"
        },
        presentation: {
          title: "Testes de UI: não aceite mais falso negativos",
          description: "Um teste falha em sua ferramenta de CI. Você lê o nome do teste e já sabe: é só rodar novamente que ele deve passar. Se você está nesse cenário, não se sinta sozinho, muitos times enfrentam o mesmo problema. Não podemos admitir que falso negativos atrapalhem o feedback da nossa integração contínua.",
          time: "19h40"
        }
      },
      {
        name: "Coffe Break",
        time: "20h00"
      },
      {
        name: "Pós Geek Night",
        time: "20h20"
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
      },
      {
        name: "CESAR.EDU",
        logo: "themes/yellow-swan/img/cesar_edu.png",
        url: "http://www.cesar.edu.br/"
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
