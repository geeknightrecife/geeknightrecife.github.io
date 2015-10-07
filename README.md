# Geek Night Recife [![Status das Dependências](https://gemnasium.com/mateusrevoredo/geeknightrecife.github.io.svg)](https://gemnasium.com/mateusrevoredo/geeknightrecife.github.io)

Hotsite do Geek Night Recife.

Esse hotsite tem seu build e deploy orgulhosamente realizados pelo [Snap CI](https://snap-ci.com/).

__No momento o status do build é:__

[![Status do Build](https://snap-ci.com/mateusrevoredo/geeknightrecife.github.io/branch/source/build_image.svg)](https://snap-ci.com/mateusrevoredo/geeknightrecife.github.io/)

O hotsite utiliza o `Project Zeppelin` com diversas customizações. Para informações específicas do template [clique aqui](https://github.com/gdg-x/zeppelin).

## Instalando

1. Instale o [Git](http://git-scm.com/downloads) e [Ruby](https://www.ruby-lang.org/en/downloads/), caso ainda não tenha.

2. Clone o projeto

  ```
    $ git clone https://github.com/geeknightrecife/geeknightrecife.github.io
  ```

3. Troque o branch para `source`

  ```
    $ git checkout source
  ```

4. Instale as dependências

  ```
    $ bundle install
  ```

5. Ative o watcher para que o site seja recompilado a cada alteração

  ```
    $ bundle exec jekyll serve --watch
  ```  

## Atualizando

1. Antes de começar a modificar a versão atual para adicionar informações de um novo evento, crie uma tag para o último

  ```
    $ git tag yyyy-MM-DD // E.x.: 2015-07-05
  ```

2. ####Atualizar o arquivo `_config.yml`

	1. Alterar o `# Location Block` para o novo endereço onde ocorrerá o evento.
	2. Alterar o `eventDate` para a nova data
	3. Substituir `heroButtons` para o link do novo evento do Facebook.

3. ####Mover os dados do evento anterior para o histórico
	1. Criar uma pasta no formato `yyyy-MM-DD` dentro de `_data/archive`
	2. Copiar os arquivos `schedule.yml`, `speakers.yml`, `sessions.yml` e `organizers.yml` para dentro da pasta criada antes de começar a editá-los.
	3. Caso o participante da edição passada tenha enviado o link para os slides, adicionar o link para a apresentação, inserindo uma key `presentation:` no arquivo `sessions.yml` copiado no passo anterior.
	3. Adicionar entrada para o evento anterior no arquivo `_data/previous.yml`

4. Editar os arquivos `schedule.yml`, `speakers.yml`, `sessions.yml` e `organizers.yml` adicionando/alterando as informações para o evento que irá ocorrer.	

5. Commit e push bara o branch `source`

  ```
    $ git push origin source
  ```

6. O Snap CI irá detectar o novo push no branch `source`, e fará o build e publicação do hotsite.

7. O progresso do build pode ser acompanhado [aqui](https://snap-ci.com/mateusrevoredo/geeknightrecife.github.io/branch/source)

8. Após a finalização do build com sucesso, a nova versão do site estará disponível [aqui](http://geeknightrecife.github.io) 

##TODO

- [x] ~~Clean up do layout(seções removidas)~~
- [x] ~~Feed do Twitter~~
- [x] ~~Exibir menos conteúdo quando não tiver evento confirmado~~
- [x] ~~Criar Google Form para receber os candidados a palestrante.~~
- [x] ~~Adicionar task de minificação no build~~
- [x] ~~Fazer o Snap CI deletar a pasta _site inteira e substituir o conteúdo. Ao invés de fazer merge.~~
- [ ] Adicionar time organizador no Analytics, Search, Snap etc.
- [ ] Corrigir issue no delay do load das boxes de eventos anteriores
- [ ] Centralizar as datas do evento em um único ponto da configuração
- [ ] Cadastrar o histórico de todos os eventos passados
- [ ] Enviar o evento anterior para "previous" no daily build do SnapCI
- [ ] Adicionar convenções de tamanhos de imagem e nomenclatura de arquivos aqui no README
