# projet-nosql-IF5-ChaimaKacem-SofieneThabet (MongoDB-NodeJs-ExpessJs-ReactNative-Expo)

Description : 

Les Etablissements Français du sang (EFS) disposent de plusieurs officines dans 5 villes en France (Marseille, Paris, Dijon, Nice, Lille).
Chaque officine dispose de son propre stock de poches de sang (catégorie A, B, AB, O).Chaque catégorie possède deux sous-catégories « PLUS » et « MOINS ».
On fera deux niveaux d’autorisation : Admin et Technicien.
Login : Admin ou Technicien
Pass : azerty
- Je me connecte et je vois l’état de mes stocks de poches de sang par ville à l’aide d’un tableau soigneusement affiché. Le tableau affiche chaque ville, le stock de poche total et les stocks de chaque groupe: à Admin + Technicien

-Un petit formulaire dynamique permettant de transférer des poches de sang d’un site A à un site B: à Uniquement Admin
## Front-end : React native
### To run the Front-end Project :

1.Download Expo GO on your phone available on GooglePlay and AppStore.<br />
<br />
2.Open Front-end folder :<br />
- Type 'ipconfig' in terminal to get ipAdress
- open .env file and put your ipAdress in IP_ADRESS

<br />3.In terminal:
```
$yarn install
$expo install
$expo start
```

## Back-end : node-express
### To run the Back-end Project :

Open Back-end folder:
```
$npm install
$npm start
```
## DataBase : MongoDBAtlas

### To connect with MongoDBCompass
```
mongodb+srv://ahmed:123@cluster0.uhwuk.mongodb.net/test?authSource=admin&replicaSet=atlas-h53qpf-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true
```
### To check Cluster with MongoDBAtlas
```
https://account.mongodb.com/account/login
email: nosqlprojet21@gmail.com
password: projetnosql21
```


