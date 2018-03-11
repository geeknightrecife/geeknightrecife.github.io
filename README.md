# GeekNight Recife [![Status das Dependências](https://gemnasium.com/geeknightrecife/geeknightrecife.github.io.svg)](https://gemnasium.com/geeknightrecife/geeknightrecife.github.io)

Website do GeekNight Recife.

__No momento o status do build é:__

[![Build Status](https://travis-ci.org/geeknightrecife/geeknightrecife.github.io.svg?branch=master)](https://travis-ci.org/geeknightrecife/geeknightrecife.github.io)

Este site utiliza o `Project Zeppelin` com diversas customizações. Para informações específicas do template [clique aqui](https://github.com/gdg-x/zeppelin).

## Instalando

1. Instale o [Git](http://git-scm.com/downloads) e [Ruby](https://www.ruby-lang.org/en/downloads/), caso ainda não tenha.

2. Clone o projeto

  ```bash
    $ git clone https://github.com/geeknightrecife/geeknightrecife.github.io
  ```

3. Troque o branch para `source`

  ```bash
    $ git checkout source
  ```

4. Instale as dependências

  ```bash
    $ bundle install
  ```

5. Ative o watcher para que o site seja recompilado a cada alteração

  ```bash
    $ bundle exec jekyll serve --watch
  ```  

## Atualizando

Antes de começar a modificar a versão atual para adicionar informações de um novo evento, crie uma tag para o último

  ```bash
    $ git tag yyyy-MM-DD # E.x.: 2015-07-05
  ```

1. Para cadastrar um novo evento, atualize os arquivos `location.yml`, `organizers.yml`, `schedule.yml`, `sessions.yml` e `speakers.yml` com as informações do próximo evento.

2. Caso o participante da edição passada tenha enviado o link para os slides, adicionar o link para a apresentação, inserindo uma key `presentation:` no arquivo `sessions.yml` copiado no passo anterior.

3. Substituir `heroButtons` no arquivo ```_config.yml```para o link do novo evento do Sympla.

4. Garanta que o parâmetro `preparingNextEvent` do arquivo `_config.yml` esteja setado para false.

5. Adicione as fotos dos palestrantes e patrocinadores de acordo com as guidelines da seção [Guidelines](https://github.com/geeknightrecife/geeknightrecife.github.io#guidelines) TBD

6. Commit e push bara o branch `source`

  ```bash
    $ git push origin source
  ```

7. O Travis CI irá detectar o novo push no branch `source`, e fará o build e publicação do hotsite.

8. O progresso do build pode ser acompanhado [aqui](https://travis-ci.org/geeknightrecife/geeknightrecife.github.io)

9. Após a finalização do build com sucesso, a nova versão do site estará disponível [aqui](http://geeknightrecife.github.io) 

## Mover os dados do evento anterior para o histórico

1. Criar uma pasta no formato `yyyy-MM-DD` dentro de `_data/archive`

2. Copiar os arquivos `schedule.yml`, `speakers.yml`, `sessions.yml`, `organizers.yml` e `location.yml` para dentro da pasta criada antes de começar a editá-los.

3. Caso o participante da edição passada tenha enviado o link para os slides, adicionar o link para a apresentação, inserindo uma key `presentation:` no arquivo `sessions.yml` copiado no passo anterior.

4. Fazer commit das modificações, gerar uma nova tag com o mesmo nome da pasta e em seguida, push para o repositório remoto

  ```bash
    $ git commit -am 'Archive yyyy/MM event'

    $ git tag 'yyyy-MM-DD'

    $ git push origin source

    $ git push --tags
  ```

## TODO (Mover as atividades abaixo para issues no GitHub)

- [ ] Cadastrar o histórico de todos os eventos passados
- [ ] Adicionar convenções de tamanhos de imagem e nomenclatura de arquivos aqui no README
- [ ] Form de "quero palestrar inline"
- [ ] Adicionar Gulp para minificação, geração da build, watch etc.
