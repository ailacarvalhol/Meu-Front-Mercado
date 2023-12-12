# MERCADO
## Meu Front-end em React

Este projeto contempla os requisitos para entrega do **MVP da Sprint III da disciplina: Desenvolvimento Front-end Avançado**, do curso de Pós-Graduação em Desenvolvimento FullStack pela PUC-Rio.

Este é um MVP de uma aplicação web para venda de produtos frescos, como frutas, legumes e verduras. Foi desenvolvido utilizando React para a interface de usuário e possui uma composição simples para demonstrar funcionalidades básicas.

Acesse o link para visualizar o protótipo de Alta fidelidade no Figma:
> https://www.figma.com/file/s9yBxHdZbblVRw1LYJckdS/Mercado-Saud%C3%A1vel?type=design&node-id=0%3A1&mode=design&t=NwHX9gh0UvvxhLsk-1

## Funcionalidades Principais

- Catálogo de Produtos: Exibe uma lista de produtos disponíveis para compra.
- Categoria de Produtos: Os produtos são separados por categoria.
- Carrinho de Compras: Possibilita adicionar produtos ao carrinho e visualizar o total da compra.
- Histórico de Compras: Todas as suas compras serão armazenadas no histórico de compras de modo que permita ao usuário visualizar e saber quais itens foram comprados.
- Compras Simuladas: Simula o processo de compra de produtos, sem integração com meios de pagamento reais.

## Dados Mockados

Os dados utilizados neste projeto são gerados simulando um banco de dados ou utilizando bibliotecas específicas para mockar dados, proporcionando uma experiência simulada para fins de demonstração.

## Estrutura de Arquivos

A estrutura de arquivos do projeto está organizada da seguinte forma:

1. /node_modules: Pasta que contém as dependências instaladas do Node.js.
2. /público:Contém arquivos estáticos, como HTML, imagens ou favicons.
3. /src: Contém o código-fonte do aplicativo.
    1. /components: Componentes React reutilizáveis.
    2. /constants: Arquivos que armazenam constantes ou dados estáticos.
    3. /pages: Páginas do site.
    4. /service: Serviços ou utilitários para a lógica de negócios.
4. App.css:Estilos CSS para o componente App.js.
5. App.js: Arquivo principal que define a estrutura do aplicativo React.
6. App.test.js: Testes para o componente App.js.
7. index.css: Estilos globais para o aplicativo.
8. index.js: Ponto de entrada do aplicativo React.

## Tecnologias Utilizadas

- Reagir
- HTML/CSS (ou componentes estilizados, etc.)
- JavaScript/ES6
- Outras dependências podem ser encontradas no arquivopackage.json

## Como Executar

Será necessário ter o [Nodejs, ou o npm,](https://nodejs.org/en/download/) instalado.

Após clonar o repositório, é necessário ir ao diretório raiz desse projeto pelo terminal para poder executar os comandos descritos abaixo.

```
$ npm install
```

Este comando instala as dependências/bibliotecas, descritas no arquivo `package.json`. Uma pasta chamada `node_modules` será criada.

Para executar a interface basta executar o comando:

```
$ npm start
```

Abra o [http://localhost:3000/#/](http://localhost:3000/#/) no navegador.

