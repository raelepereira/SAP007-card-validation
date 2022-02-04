# Cartão de Crédito Válido

## Sumário

- [1. Proposta do projeto](#1-Proposta-do-projeto)
- [2. Ideação do projeto](#2-Ideação-do-projeto)
- [3. Tecnologias utilizadas](#3-Tecnologias-utilizadas)
- [4. Como funciona?](#2-Como-funciona?)
- [5. Como usar?] (#2-Como-usar?)
---

## 1. Proposta do projeto

Neste projeto foi proposto usar o Algorotimo de luhn para validar números de cartão de credito.


## 2. Ideação do projeto

O site é um validador de número de cartão de crédito. Após o usuário inserir um número a ser testado, retorna válido ou inválido, segundo o algoritmo de Luhn.


## 3. Tecnologias utilizadas

HTML5
CSS3
JavaScript Vanilla
Node.js
Git e GitHub
Trello


## 4. Como funciona?

Primeiro você preenche corretamente todos os campos com suas informações, e os dados do seu cartão passa por toda parte logica no Validator.isValid, eles são jogados para o index.js, onde fica responsável por dividir os números em grupo de 4 e mostrar para o usuário, se o cartão é valido, se não, pede um número de cartão valido. Já o Validator.Maskify fica responsável por transformas os numeros em #(hashtags).

## 5. Como usar?

Você precisará usar o Node.js

Clonar o projeto

$ git clone https://github.com/raelepereira/SAP007-card-validation.git

Instalar as dependências do projeto

$ npm install or yarn

Iniciar a aplicação

$ npm start or yarn start

Realizar os testes unitários

$ npm test or yarn test

