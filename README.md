# Clicker - MEAN Stack

Mini-jeu où le but sera pour vous de cliquer le plus grand nombre de fois avant la fin du temps imparti.

## Installation

You need to install [Node & npm](https://nodejs.org/en/download/) to start this application

Install [MongoDB](https://docs.mongodb.com/manual/installation/) on your system.

Install the Angular CLI and nodemon (watch and build)

```bash
npm install -g @angular/cli
npm install -g nodemon
```

## Usage

Download or clone this repository & run this command to install packages

```bash
git clone https://github.com/florianrambur/Clicker.git

cd Clicker
npm install

cd ANGclient
npm install
```

Then you need to start mongod for the database, node and the angular application

```bash
mongod # Start the database

# Go to the project root file
nodemon serve # Start the server
npm run dev # Start the angular application and build it in the ../www folder
```

Finally, you need to create a .env file with some variable, for example :
```dot
# Bacis
PORT=3000

# Mongo
MONGO_URL='mongodb://127.0.0.1:27017/clicker'

# JWT
JWT_SECRET='fdpgdyzmsdfFSfg3gk665GDFs'

# COOKIES
COOKIE_SECRET='fgklfs24kf56lsjf965vdsfF'
COOKIE_NAME='ClickerToken'
```

## Packages used

- [x] [ngx-cookie-service](https://www.npmjs.com/package/ngx-cookie-service) - J'ai utilisé ce package afin de gérer mes cookies côté client et notamment le cookie comprenant le token d'authentification. Mis à jour régulièrement (il y a 10 jours), et téléchargé de nombreuses fois (~100 000 par semaine), ce package ne comprenant que 2 "open issues" est une valeur sûre, en plus d'être simple d'utilisation.

- [x] [@auth0/angular-jwt](https://www.npmjs.com/package/@auth0/angular-jwt) - Ce package m'a permis de décoder mon token d'authentification afin d'en extraire les données nécessaires me permettant de récupérer les informations de mon utilisateur. En plus d'être simple d'utilisation, ce package peut être utilisé de manières différentes, que ça soit simplement pour décoder un token, ou pour gérer les routes accessibles ou non en fonction du token d'authentification. Utilisé par de nombreuses personnes (~100 000 téléchargement par semaine), ce package est également une valeur sûre.

## Services

#### UtilsService - Un service regroupant diverses fonctions réutilisables dans toute l'application.

- switchImgSrc() : fonction permettant d'intervertir deux images d'une balise \<img>. Cette fonction prend en paramètre __l'élément à modifier__, ainsi que les __noms des deux images__ à intervertir.
- flashMessage() : fonction permettant d'afficher comme son nom l'indique, un flash message pendant une certaine durée. Cette fonction prend en paramètre le __type de message__ (success, warning, error) ainsi que __le contenu du message__.
- sortByKey() : fonction dont le but est tout simplement d'ordonner un tableau selon le __nom de la clé__ passé en paramètre.
- slideDown() & slideUp() : permet d'animer un élément du DOM (a le même but que les fonctions jQuery du même nom).
- getCurrentRoute() : comme son nom l'indique, cette fonction permet de récupérer le nom de la route où nous nous trouvons.

#### DataSharingService - Ce service a pour but d'initialiser toutes les variables dont on souhaite mettre à jour régulièrement et dont on souhaite que celles-ci aient un impact immédiat que ça soit dans le DOM ou dans la logique. Exemple d'utilisation au sein du projet :

```javascript
public isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
```

Il suffira alors d'utiliser les lignes ci-dessous dans les pages concernées pour mettre à jour la valeur et que celle-ci soit automatiquement répercutées sur l'ensemble de l'application :

```javascript
// Dans le constructor
this.DataSharingService.isUserLoggedIn.subscribe( value => {
    this.isUserLoggedIn = value;
}

// Une fois connecté
this.DataSharingService.isUserLoggedIn.next(true);
```

## Description du travail fourni

- [x] Mise en place du serveur

- [x] Création des models

- [x] Création des routes API sécurisées

- [x] Création du client Angular

- [x] Création des services permettant d'appeler les routes API

- [x] Homepage avec formulaire d'inscription et de connexion

- [x] Connexion donnant accès à la page du jeu ainsi qu'au tableau des scores

- [x] Jeu fonctionnel : cliquez le plus de fois possible en 10 secondes (progress bar permettant de voir le temps restant)

- [x] Déconnexion nous ramenant sur la homepage

- [x] L'application est designé pour mobile
