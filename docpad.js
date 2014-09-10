module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "Geek Night Recife",
      description: "É Agosto e mais um Geek Night está chegando! O Geek Night \
        Recife começou com a intenção de ser um encontro informal com o \
        objetivo de discutir sobre tecnologia. O evento vem cada vez mais se \
        firmando como um espaço para produção e compartilhamento de \
        conhecimento. Tendo a idéia de ser um espaço democrático e aberto, a \
        Geek Night vem recebendo palestras, práticas e fóruns, tendo como \
        assunto os mais diversos temas relacionados ao universo geek.\nNão \
        deixe de conferir o blog do Geek Night: http://geeknightrecife.github.io .",
      date: "26 de Agosto",
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
        link: "https://docs.google.com/forms/d/1IKSSegVsqWIJC76pZuLtAIOBApSlCp12o5phDR9FQOc/viewform?usp=send_form"
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
        name: "Johann Lima",
        photo: "themes/yellow-swan/img/johann-lima.png",
        bio: "Desenvolvedor poliglota, apaixonado por linguagens de script. \
          Formado em Sistemas de Informação pela UFRPE. Trabalho com \
          desenvolvimento de software desde 2011. Durante esse tempo, ajudei a \
          construir plataformas de rede social (Aqui Tem Natura, Natura), \
          jogos educacionais (Turma do Som, D'Accord Music Software) e \
          sistemas de constrole acadêmico (Abanet, Associação Brasil América), \
          utilizando Java, ActionScript, Python, PHP, dentre outras linguagens.",
        link: {
          text: "blog",
          href: "http://codeorbecoded.wordpress.com"
        },
        presentation: {
          title: "Uma aplicação de impacto social com aprendizado de máquina",
          description: "Com o propósito de empoderar as minorias, dando-nas o \
            poder de gerar uma cultura de boycott e mudança social através de \
            denúncias de situações discriminatórias associadas a lugares. O \
            'Boca no Trombone' vem para mudar o jogo. O preenchimento do \
            formulário de denúncia é facilitado por meio de um experimento que \
            classifica o tipo de denúncia automaticamente por meio de \
            algoritmos de classificação.",
          time: "19h10"
        }
      },
      {
        name: "Luiz Castro",
        photo: "themes/yellow-swan/img/luiz-castro.jpg",
        bio: "Analista, programador, roteirista e empreendedor, também já foi \
          blogueiro e podcaster! Possui Bacharelado em Sistemas de Informação, \
          pela Faculdade Santa Maria. Atualmente trabalha como \
          Analista/Programador na Petroquímica de Suape (através da empresa \
            Qualidados). Também é sócio em duas startups, são elas o Pague Pra \
            Ver (www.paguepraver.net.br), site de Crowdfunding totalmente \
            Nordestino e o Teach (www.teach.com.br), projeto de rede social \
            voltada para o meio acadêmico. Foi Roteirista num projeto de jogo \
            da (extinta) PXL Games Studio, startup da área de games em PE.",
        link: {
          text: "twitter",
          href: "http://twitter.com/castro_luiz"
        },
        presentation: {
          title: "Aplicação da técnica A Jornada do Héroi na \
            construção da narrativa de um jogo.",
          description: "Abordaremos como podemos aplicar as técnicas de \
            narrativa literária, presentes no guia a Jornada do Herói, do \
            livro A Jornada do Escritor, na construção da narrativa de um jogo \
            digital. Apresentararemos uma discursão da técnica citada e um \
            breve estudo de seus estágios, com exemplos da aplicação dos \
            mesmos, para que a construção narrativa de um jogo seja criada com \
            base na Jornada do Herói. Assim, vamos mostrar uma forma de \
            adaptar as técnicas da Jornada do Herói, para aconstrução da \
            narrativa de um jogo digital.",
          time: "19h30"
        }
      },
      {
        name: "Coffe Break",
        time: "19h50"
      },
      {
        name: "Vitor Albuquerque",
        photo: "themes/yellow-swan/img/vitor_albuquerque.jpg",
        bio: "Programador de software desde o auge da internet discada, já \
          passou por linguagens como mIRC Scripting, Object Pascal, C# e PHP. \
          Atualmente trabalha com Java e vem otimizando seu ambiente de \
          trabalho com ferramentas como Vagrant, Flyway, Puppet, Jenkins e \
          outras.",
        link: {
          text: "twitter",
          href: "http://twitter.com/vrcca"
        },
        presentation: {
          title: "Evoluindo bancos de dados com Flyway - Uma alternativa ao uso \
            do banco de dados centralizado.",
          description: "Várias empresas tem seus projetos impactados por \
            mudanças no banco de dados, gerando improdutividade da equipe e \
            atraso na entrega. Os dois maiores sintomas são: centralização e \
            mudança manual do banco de dados. Nessa palestra veremos como o \
            Flyway nos ajuda a resolver alguns desses problemas e nos dá uma \
            base para implantar o modelo 'um BD por programador' com a \
            utilização de máquinas virtuais.​",
          time: "20h10"
        }
      },
      {
        name: "Marcos Brizeno",
        photo: "themes/yellow-swan/img/marcos_brizeno.png",
        bio: "Ciêntista da Computação pela Universidade Estadual do Ceará e \
          atualmente Consultor Desenvolvedor na ThoughtWorks Recife. Trabalha \
          basicamente com projeto Ruby e Rails, e também executa atividades de \
          pesquisa sobre novas tecnologias e tendências no Desenvolvimento de \
          Software. Apaixonado por Engenharia de Software e Metodologias Ágeis.",
        presentation: {
          title: "Comunidade e Carreira: você ganha, todos ganham",
          description: "O que é melhor para sua carreira: experiência ou \
            certificação? Devo largar a Universidade? Devo sair do meu emprego \
            pra fazer um Mestrado? E se houvesse uma terceira opção que todos \
            ganham? Sim, existe! Construir e participar de comunidades é talvez \
            a melhor coisa que você possa fazer para sua carreira.",
          time: "20h30"
        }
      }
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
