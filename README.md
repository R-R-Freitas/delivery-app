### Este é um projeto desenvolvido para o curso de desenvolvimento web full-stack da Trybe, módulo back-end.  
  
App de delivery para uma distribuidora de bebidas. Nele é possível para:
* **Cliente**: Cadastrar-se, logar-se, visualizar os produtos, efetuar o pedido, visualizar os pedidos e seus detalhes, incluindo status da entrega;  
* **Pessoa vendedora**: Visualizar os pedidos sob sua responsabilidade, detalhes de cada pedido e alterar o status do pedido;
* **Pessoa administradora**: Cadastrar pessoas com qualquer nível de acesso, visualizar uma lista de pessoas cadastradas, com a possibilidade de excluí-las.
  
  
## Time de desenvolvimento:  
[Rodrigo Rafael Freitas](https://github.com/R-R-Freitas)  
[Alana Correia](https://github.com/AlanaCorreia)  
[Matheus Barcellos](https://github.com/MatheusBarcellosDev)  
[Guilherme Leite](https://github.com/guilherme-leite)  
  
## Minha participação:  
No projeto fiquei responsável pela configuração do Docker, criação do banco de dados através do sequelize (exceto seeders), desenvolvimento de toda a parte de back-end, além dos componentes da tabela de usuários na página da pessoa administradora e dos testes de front-end.  
  
## Tecnologias utilizadas:  
<details>  
  <summary>Clique para expandir</summary>  
  
* JavaScript  
* NodeJS  
* MySQL    
* Express  
* Sequelize  
* React  
* Sinon  
* Chai  
* Jest  
* Docker  

</details>  
  
## Rodando a aplicação
  
<details>  
  <summary>Clique para expandir</summary>
  Você pode rodar a aplicação na sua máquina através do terminal, na pasta onde será instalada:  
  
```
git clone git@github.com:R-R-Freitas/delivery-app.git
cd delivery-app  
npm install  
npm run compose-up-dev
```  
</details>  

### Ponto de partida do desenvolvimento:  
(Ou: créditos à participação da Trybe no projeto)  
<details>  
  <summary>Clique para expandir</summary>  
  A Trybe disponibilizou um projeto apenas com configurações iniciais para o projeto, uma vez que essas configurações eram necessárias para o bom funcionamento das ferramentas de avaliação.  
  Desses arquivos, muitos precisaram ser removidos para publicação em repositório público, em cumprimento ao disposto no Manual da Pessoa Estudante e nos Termos de Uso da Trybe.  
  Os demais arquivos disponibilizados inicialmente e que não foram substancialmente alterados, são portanto de autoria exclusiva da Trybe. Abaixo é possível ver a lista dos mesmos:
  <details>
    <summary>Clique aqui para expandir</summary>
      * .editorconfig  
      * .gitignore  
      * .npmrc  
      * data-testids.txt  
      * pm2.dev.config.yml  
      * pm2.test.config.yml  
      * back-end/.eslintignore  
      * back-end/.eslintrc.json  
      * back-end/.gitignore  
      * back-end/.sequelizerc  
      * back-end/jwt.evaluation.key  
      * back-end/nyc.config.js  
      * back-end/src/api/server.js  
      * back-end/src/database/config/config.js  
      * back-end/src/database/models/index.js  
      * front-end/.env.example  
      * front-end/.eslintignore  
      * front-end/.eslintrc.json  
      * front-end/.gitignore  
      * front-end/.stylelintignore  
      * front-end/.stylelintrc.json  
      * front-end/public/favicon.ico  
      * front-end/public/index.html  
      * front-end/public/logo192.png  
      * front-end/public/logo512.png  
      * front-end/public/manifest.json  
      * front-end/public/robots.txt  
      * front-end/src/images/rockGlass.svg  
      * front-end/src/index.css  
      * front-end/src/reportWebVitals.js  
      * front-end/src/setupTests.js  
      * scripts/*  
  </details>
</details>  
