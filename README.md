# Ce qui a été fait dans cette branche


Création d'un middleware asynchronous-logger dans le dossier middleware, qui log les actions et dispatch une action qui permet d'incrémenter le nombre d'actions lancées

+ Création d'une action incrementActionCount
+ Ajout d'un reducer action-info.js avec une fonction incrementActionCount
+ Ajout du reducer au root reducer
+ Ajout d'un type
+ Ajout du reducer dans le root reducer.
+ Ajout du middleware pour compter les action
+ Appel du middleware dans index
