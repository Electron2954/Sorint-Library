Sorint-Library

Install Angular 
```
npm install -g @angular/cli
```
Install Launch app
```
cd \app$ npm init -y
npm install --save express body-parser cors pg
node app.js
```
Install Launch client
```
cd \client
npm install
ng serve --open
```
Install Sequalize
```
npm install --save sequelize
npm install --save pg pg-hstore # Postgres
npm install --save-dev sequelize-cli
```
Migrate DB from migrations
```
npx sequelize-cli db:migrate
```
Generate sample seed
```
npx sequelize-cli seed:generate --name sample-users
```
Fill DB based from seeders
```
npx sequelize-cli db:seed:all
```
Add new migration file if there is need to update DB structure
and migrate
```
npx sequelize-cli migration:generate --name addPassword
npx sequelize-cli db:migrate
```