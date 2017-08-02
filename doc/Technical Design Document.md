# Índice

[1. Introdução](#1-introdução)

[2. Visão Geral do Sistema](#2-visão-geral-do-sistema)

[3. Contexto do Sistema](#3-contexto-do-sistema)

[4. Desenho do Sistema](#4-controles)

[5. Descrição das Funcionalidades](#5-descrição-das-funcionalidades)

# 1. Introdução

## 1.1 Objetivo

Este documento tem por objetivo descrever os aspectos técnicos do jogo IHQuiz.

## 1.2 Escopo

<p align="justify">O software consistirá de um jogo de perguntas e respostas, onde as perguntas estarão salvas em um banco de dados e serão fornecidas a aplicação por meio de uma API. A aplicação deverá permitir que o usuário realize login no sistema, e uma vez logado, participe das mecânicas de pergunta e resposta especificadas no Game Design Document. Além disso, a aplicação deverá persistir o desempenho do usuário.</p>

## 1.3 Definições acrônimos e abreviações

* IHC - Interação Humano-Computador
* IHQuiz - Nome da aplicação
* API - Aplication Programming Interface
* endpoints - URL's de acesso a API

## 1.4 Referências

## 1.5 Visão geral do documento


# 2. Visão geral do sistema

## 2.1 Características do Sistema
* Deve ser construída uma API para comunicação com o banco de dados
* A aplicação deverá comunicar com a API para que se faça correta persistência dos dados
* O sistema deverá manter a sessão do usuário

## 2.2 A arquitetura

<p align="justify">A arquitetura do sistema será uma baseada no modelo de n camadas, onde cada camada será responsável por um funcionamento específico da aplicação.

<p align="justify">A primeira camada será a camada de API, que como o próprio nome sugere, deverá fornecer endpoints para correta comunicação com o banco de dados.

<p align="justify">A segunda camada será a camada da Store, que será responsável por fazer tratamento e persistências dos dados na aplicação no lado do cliente. Essa camada também tem como responsabilidade comunicar com a API para recuperação e envio dos dados no banco de dados.

<p align="justify">A terceira e última camada será a camada de Component, que será constituída dos componentes da aplicação em si. Essa camada terá por responsabilidade por mostrar e recuperar dados do usuário, e também por implementar toda a mecânica descrita no Game Design Document. Essa camada comunicará apenas com a camada da Store para correto tratamento e persistência dos dados.

<p align="justify">O diagrama abaixo permite visualizar como funcionará a arquitetura do sistema, bem como a comunicação entre as camadas.



## 2.3 Serviços de infraestrutura

<p align="justify">Para correta funcionamento da aplicação em meio de produção, serão necessários os seguintes serviços:

* Servidor

<p align="justify">Para deploy da API e versão web da aplicação. O servidor deve possuir suporte à plataforma Docker para funcionamento do banco de dados.

* Docker

<p align="justify">Serviço de container para funcionamento do banco de dados independentemente dos outros serviços de infraestrutura

* Lojas de aplicativo

<p align="justify">Para deploy da versão mobile da aplicação.

# 3. Contexto do Sistema

# 4. Desenho do Sistema

# 5. Descrição das Funcionalidades
