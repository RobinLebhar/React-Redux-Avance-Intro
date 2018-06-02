# Ce qui a été fait dans cette branche


+ Création d'un test simple
+ npm install --save enzyme enzyme-adapter-react-16 ( faire matcher ce nombre avec votre version de react)
+ Ajout de src/setupTests.js pour la configuration d'enzyme ( le nom doit etre exactement celui ci), puis relancer
+ Explication du shallow : celui ci permet du test unitaire pure, contrairement au Render, lui ne déclenchera pas d'erreur si un des composants enfants tombe en erreur
+ Doc enzyme : http://airbnb.io/enzyme/docs/api/#
+ Explication du beforeEach
+ le mount contrairement au shallow, contient tout le dom enfants inclus, donc plusieurs test peuvent s'affecter les uns les autres s'ils partagent le meme dom