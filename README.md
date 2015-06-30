# Geek Night Recife
  Hotsite for Geek Night Recife.

  The hostsite uses the `Conf Boilerplate` for documentation about the project [look here](https://github.com/geeknightrecife/geeknightrecife.github.io/tree/source).

## Installing

1. Install [Git](http://git-scm.com/downloads) and [NodeJS](http://nodejs.org/download/), if you don't have it yet.

2. Clone the project

  ```
    $ git clone https://github.com/geeknightrecife/geeknightrecife.github.io
  ```

3. Change for `source` branch

  ```
    $ git checkout source
  ```

4. Install dependencies

  ```
    $ npm install
  ```

## Updating

1. Before init a new event, create a tag for the last one

  ```
    $ git tag yyyy-MM // E.g.: 2015-07
  ```

2. Update the `docpad.json` file

3. Commit and push for `source` branch

  ```
    $ git push origin source
  ```

4. Deploy the github page to master branch

  ```
    $ npm run deploy
  ```
