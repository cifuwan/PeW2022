# What To Watch 
![logo](https://user-images.githubusercontent.com/36772483/156192724-18ee066b-89c8-4be8-887f-3d777d7159f4.jpg)

## Idea de negoci
Una aplicació web on l'usuari pot llistar pel·licules, series, documentals i coses similars, saber on es poden veure (cadenes de televiso, plataforma web) i a quin horari si escau. També hi hauria informació sobre la categoria, actors que surten, director de la pel·licual/serie inclus horari si fos necessari. A més a més s'hi assignaria una puntuació mitja donada per el total de puntuacions dels usuaris registrats. Els usuaris podrien veure els comentaris que poden fer els usuaris registrats.
Els usuaris registrats a més de lo descrit anteriorment podrien tenir contactes (altres usuaris registrats) i crear grups entre ells on compartirien les pel·licures, series, documentals i missatges.

## Requeriments funcionals
Com a usuari:
* Poder buscar pel·licules, series, etc.
*  Poder registrar-me

Com a usuari registrat:
* Poder tenir contactes
* Poder afegir, llistar i eliminar usuaris dels meus contactes
* Poder crear un grup amb altres usuaris
* Poder afegir, llistar, compartir, eliminar continguts preferits (la meva llista)
* Poder comentar i puntuar un contingut
* Poder llistar en els gurps en que estic
* Poder llistar totes els contingunts compartits en un grup
* Poder afegir continguts a l'aplicació
* Poder enviar missatges als meus contactes
* Poder editar les meves dades (modificar el meu perfil)

Com a administrador de grup:
* Capacitat d'afegir i eliminar usuaris dels meus contactes del grup
* Poder modificar el grup (fotografia, nom, descripció...)

Com a usuari de grup:
* Poder compartir continguts
* Poder fer comentaris en el grup (xat?)
* Poder llistar usuaris del grup
* Veure missatges compartits al grup

Nota:   Un contingut es una pel·licula, serie, etc. amb totes les seves dades (Nom, data d'estrena, plataforma en que es pot veure, actors, director, etc.


## Diagrama de classes

![classDiagram_v2](https://user-images.githubusercontent.com/36772483/157229529-e5d929d3-2e3a-47e5-aa62-c2418ef99abf.jpg)


## Diagrama de casos d'ús

![diagrama casos us](https://user-images.githubusercontent.com/36772483/156024773-8fa3ea07-511b-417b-8f2c-d60e84b38d1c.jpg)


# mithril + webpack + bootstrap

This application is intended to show good practices when building Single Page Applications with [mithril](https://mithril.js.org/). It is used for educational purposes. The server side is provided by an extended version of [`json-server`](https://github.com/typicode/json-server) that provides authentication, authorization, and a basic integration of [`peerjs-server`](https://github.com/peers/peerjs-server): [`json-server-plus`](https://github.com/udg-einf-pew/json-server-plus) 

It enforces several principles:

* Separation of concerns. This is applied to both client and server:
  * Client: Model View Controller
* Low coupling: each component of the application is designed to be reused

The technologies used are:

* Mithril 2
* Webpack 4
* Bootstrap 4

Prerequisites:

* [Nodejs 14](https://nodejs.org/download/release/v14.18.3/) installed

To run the application:

- Clone and execute [`json-server-plus`](https://github.com/udg-einf-pew/json-server-plus)
- Clone this repo
- Execute `npm install`
- Execute `npm run start`. This starts a [webpack dev server](https://github.com/webpack/webpack-dev-server)
- Load the project at `http://localhost:9000`


## The Home

This is a very simple application that managed two entities:

* Users
* Orders

And Order belongs to a user, and a user can own multiple orders

![User Order relationship](https://raw.githubusercontent.com/neich/mithril-webpack-bootstrap4/master/images/user_order.png)
