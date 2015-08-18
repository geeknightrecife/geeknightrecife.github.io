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
      theme: "entrega contínua",
      description: "O Geek Night Recife está de volta e dessa vez o tema será Entrega Contínua! Não é necessário nenhum conhecimento prévio, todo estão convidados. A intenção é fazer um encontro informal com o objetivo de discutir sobre tecnologia. O evento vem cada vez mais se firmando como um espaço para produção e compartilhamento de conhecimento. Tendo a idéia de ser um espaço democrático e aberto, a Geek Night vem recebendo palestras, práticas e fóruns, tendo como assunto os mais diversos temas relacionados ao universo geek.",
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
        link: ""
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
        name: "Aleff",
        //photo: "themes/yellow-swan/img/presenters/justin.jpg",
        bio: "",
        link: {
          text: "",
          href: ""
        },
        presentation: {
          title: "",
          description: "",
          time: "19h20"
        }
      },
      {
        name: "Coffe Break",
        time: "19h50"
      },
      {
        name: "Mateus",
        //photo: "themes/yellow-swan/img/presenters/renato.jpg",
        bio: "",
        link: {
          text: "",
          href: ""
        },
        presentation: {
          title: "",
          description: "",
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
