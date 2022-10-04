---
sidebar_position: 3
---

# CI/CD

L'intégration continue (CI) et le déploiement continu (CD) sont deux outils mis en place pour contribuer à la qualité du code et améliorer le cycle de vie du produit. La combinaison de la CI et de la CD est appelée pipeline.


## Intégration Continue

L'intégration continue est le processus pour créer un livrable, son deuxième objectif est de garantir de la qualité du livrable. Un livrable peut-être un exécutable, un artifact, un fichier compressé. La seule condition pour être un livrable est d'être récupérable et installable le + simplement possible.

### Exemple

Dans la société où je travaille nous créons un zip de l'ensemble du code source à la fin du build. Le Zip généré est ensuite récupéré par la CD pour être déployé sur les serveurs.

Prenons l'exemple d'une application PHP qui doit-être déployé dans la phase de CI nous aurons les phases suivantes:

- **Build** : phase durant laquelle nous allons récupérer la dernier version du code, installer les dépendances, supprimer les fichiers non nécessaires à l'exécution du code, créer le ZIP.
- **Test**: durant cette phase nous allons tester le build, récupération du ZIP avec la version du code à tester, configuration de l'environnement de test (docker), exécution des tests, récupération des rapports d'éxécutions. En fonction du résultat obtenu le pipeline peut échouer.
- **Quality**: Nous allons utiliser un utilitaire pour mesurer la qualité du code, erreurs statiques, bugs, mauvaises pratique. En fonction du score obtenu le pipeline peut échouer. (SonarCloud)


## Déploiement continue

Le déploiement continu est l'installation sur les environnements (serveurs) du livrable de l'étape du CI. Le but est d'installer automatiquement la nouvelle version du produit sans avoir à se connecter aux environnements (démo, production, etc).

### Exemple

Reprenons notre exemple à la fin de la CI nous obtenons un ZIP, maintenant nous devons le déployer, on peut imaginer les phases suivantes:

- **Deploy**: Déploiement sur les environnements spécifiés, récupération du ZIP via un Curl, décompréssion du Zip dans le dossier, changement des liens symboliques pour une mise à jour sans coupure de production.


:::tip

En fonction de la plateforme utilisée il est possible de définir des triggers qui vont influencer le déclenchement du pipeline. Par exemple il est possible de définir des contraintes sur des événements de type `push` ou uniquement si un `tag` est créé.

:::


## Bénéfices

Comparé à une solution sans CI et CD nous pouvons affirmer les gains suivants:

* Amélioration de l'efficacité et de la rapidité de la livraison des versions 
* Processus standardisé (moins d'erreur humaine)
* Meilleure qualité du code ce qui améliore implicitement la productivé à produire de nouvelles fonctionnalités
    * Code plus maintenable 
* Diminution des risques en production
* Meilleure isolation des pannes
* Satisfaction des utilisateurs accrue


## KPI

Les indicateurs de performance pour une mise en place d'une CI/CD peuvent-être les suivants:

### Temps de création

Pour définir cet indicateur il faut prendre le temps maximum de création manuel et le temps minimum pour créer manuellement, faire la moyenne et si le temps du stage de **build** est inférieur au temps obtenu alors le KPI est au vert.

### Fréquence des déploiements

Le nombre de déploiement doit-être proportionnel aux fonctionnalités livrées, chaque livraison doit contenir au maximum 10 fonctionnalités. De plus petites livraisons réduit le risque de problème en production.

### Couverture du code

80% est un excellent chiffre en terme de couverture de code, + de 80% est contre production, - de 80% n'est pas assez couvrant pour garantir la qualité du code. Sur les fonctionnalités importantes il est intéressant de tester les cas limites.

### Nombre de déploiements échoués

Un nombre de déploiement échoué élévé est un indicateur d'un pipeline trop complexe ou d'un environnment mal géré.


### MTTR & MTTF

_Mean Time to Recovery (MTTR) Mean Time to Failure (MTTF)_

Le MTTR (temps moyen de retour à la normal) après un incident est un bon indicateur, plus le temps est court plus le pipeline mis en place est efficace, à condition que la correction est apportée rapidement.

Le MTTF (temps moyen de détection de panne), c'est le temps moyen entre le moment où la fonctionnalité est déployée et le moment où l'information est remontée.

Plus le delta entre ces deux métriques est court plus le pipeline est efficace. Cet indicateur peut-être utilisé aussi dans l'évaluation de la mise en place d'une démarche DevOps.


## Outils

Il existe énormément d'outils différents pour mettre en place une CI et une CD. Il convient d'adapter les outils utilisés en fonction des objectifs visés.

On peut citer cependant des outils généralistes qui sont capables de gérer la plus part des cas d'utilisations moyennant un peu de configuration.

* [Gitlab](https://about.gitlab.com/stages-devops-lifecycle/)
    * Intégré à la solution GITLAB permettant la gestion du code via un répertoire GIT, parfait pour le dévelopement WEB
    * Propose des outils supplémentaitre de gestion de projet
    * Self-Hosted & Cloud
    * Plusieurs versions payantes sont disponibles mais avec les fonctionnalités gratuites il est possible de faire bcp de choses (CODE, ISSUES, CI/CD). Gratuit si Self-Hosted sinon 19$/user/month
* [Github Actions](https://github.com/features/actions)
    * Intégré à la solution Github permettant la gestion du code via un répertoire GIT, parfait pour le dévelopement WEB
    * Propose des outils supplémentaitre de gestion de projet
    * Uniquement en Cloud
    * Gratuit pour les fonctionnalités basiques sinon 44$/user/month pour des fonctionnalités de gestion de projet
* [Jenkis](https://www.jenkins.io/)
    * Complémentement indépendant et uniquement pour exécuter un pipeline
    * Self-Hosted
    * Gratuit
* [Travis CI](https://www.travis-ci.com/)
    * Complétement indépendant et uniquement pour exécuter un pipeline
    * Uniquement en ligne, s'intègre dans les dépôts de code Gitlab, Github, Bitbucket
    * Payant pour les projets privés $69/month exécutions illimitées

### Sécurité

Une bonne pratique est de ne pas sauvegarder les variables d'environnements sur les agents ou dans les fichiers `.env` des applications. Pour ce faire il existe des applications qui s'occupent pour nous de sécuriser les clés et de les partager. 

:::info Très utile pour une CD 
Mise à jour avec les derniers identifiants, changement des variables d'environnements applicatives, etc...
:::

* [Vault](https://www.vaultproject.io/): permet de récupérer des variables d'environnements via CLI, HTTP