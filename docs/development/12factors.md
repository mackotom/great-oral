---
sidebar_position: 3
---

# 12 FACTORS

Les applications d'aujourd'hui sont souvent délivrées en tant que SaaS (software as a service).

La méthodologie 12 facteurs est une méthodologie qui permet de concevoir des applications en SaaS, dans tout languages et utilisant tout type de services et qui :

* Utilisent des formats déclaratifs pour mettre en oeuvre l’automatisation, pour minimiser le temps et les coûts pour que de nouveaux développeurs rejoignent le projet;

* Ont un contrat propre avec le système d’exploitation sous-jacent, offrant une portabilité maximum entre les environnements d’exécution;

* Sont adaptés à des déploiements sur des plateformes cloud modernes, rendant inutile le besoin de serveurs et de l’administration de systèmes;

* Minimisent la divergence entre le développement et la production, ce qui permet le déploiement continu pour une agilité maximum;

* et peuvent grossir verticalement sans changement significatif dans les outils, l’architecture ou les pratiques de développement;

## 1 - Base de Code

*Une base de code suivie avec un système de contrôle de version, plusieurs déploiements*

L'application doit être suivie dans une base de code utilisant un système de versionnement type Git (ou autre).

Si plusieurs applications partagent ce code, il doit être factorisé et partagé comme dépendance.

Cette application sera déployée plusieurs fois. Un déploiement est une instance en fonctionnement de l'application.

La base de code est la même au travers de chaque déploiement, mais peut correspondre à des versions différentes de cette base selon chaques déploiements.

## 2 - Dépendances

*Déclarez explicitement et isolez les dépendances*

L'application ne doit dépendre d'aucune dépendances système.

Si elle a besoin d'une dépendance système pour fonctionner, celle-ci doit être distribuée avec l'application. On ne supposera jamais sa disponibilité préalable.

Les dépendances de l'application doivent être isolées des dépendances systèmes.

Elles doivent être déclarées dans un manifeste, comme package.json pour une application node.js ou POM.xml pour une application Java.

Elles doivent être uniformes entre les environnements de dev et de prod.

## 3 - Configuration

*Stockez la configuration dans l’environnement*

La configuration concerne tout ce qui peut varier entre les déploiements : ressources BDD, ID de services externes, valeurs spécifique en fonction de l'environnement ou de la version de l'application.

Cette définition n'inclu pas la configuration "interne" à l'application (comme la configuration d'une application spring) qui est elle incluse dans le code.

Il faut la stocker dans des variables d'environnements, jamais dans des constantes directement stockées dans le code.

Un test efficace est de se poser la question suivante : est ce que je peux passer on code en open-source sans compromettre d'identifiants ?

Certaines applications regroupe leur configuration par environnement (dev, prod, local ...). Cette pratique ne scale pas proprement, le nombre d'environnement peut exploser (chaque développeur peut vouloir son propre environnement local, on peut rajouter une pre-prod, un environnement QA, etc ...).

L'application doit privilégier un controle granulaire, où les variables d'environnement sont orthoganales entres elles. Chaque déploiement les gèrera alors de façon indépendante.

## 4 - Services externes

*Traitez les services externes comme des ressources attachées*

Tout les services que l'application utilise à travers le réseau sont des services externes : base de donnée, bus de message, mailing ...).

Cela inclu les services tiers, comme les api externes.

Ils sont traités de la même façon par l'application, qu'ils soient locaux ou tiers.

Ils doivent pouvoir être remplacés sans nécessiter de réécriture de code.

## 5 - Assemblez, publiez, exécutez

*Séparez strictement les étapes d’assemblage et d’exécution*

Une base de code devient un déploiement après 3 phases strictement séparées : 

* Un assemblage (ou build, compilation) qui va inclure le code, les dépendances et services externes et qui est initié par le développeur lors d’un déploiement
* Publication (ou release), qui regroupe l'assemblage et la configuration. Chaque releases a un identifiant unique (version ou horodatage), mis à jour à chaque déploiement.
* Execution (ou runtime) qui correspond à l’application en fonctionnement et peut être relancé automatiquement en cas de crash, reboot, sans nécessité de nouveau déploiement.

## 6 - Processus

*Exécutez l’application comme un ou plusieurs processus sans état*

L'application est executée dans son environnement d'execution comme un ou plusieurs processus.

L'espace mémoire doit être utilisé comme cache momentanée. L'application n'a jamais comme prérequis la disponibilité de ressources dans le cache. Il est trop volatil.

Toutes compilations nécessaires le sont lors de l'assemblage, une compilation n'est jamais conservée en cache.

L'application n'utilise jamais de sessions persistantes.

## 7 - Associations de ports

*Exportez les services via des associations de ports*

L'application exporte ses services via des associations de ports.

Les applications doivent être auto-contenue et ne doivent pas dépendre de l'injection d'un serveur web au runtime. L'application expose http comme un service en l'associant à un port.

Une appli peut ainsi devenir le service externe d’une autre en fournissant l’url de celle ci dans la configuration de l’appli qui consommatrice.

## 8 - Concurrence

*Grossissez à l’aide du modèle de processus*

L'application maitrise ses processus. Elle ne les délèguent pas. Par exemple, l'application ne doit pas se reposer sur la gestion native de Java, qui réserve un gros bloc de cpu/ram et gère la concurrence en interne avec des threads.

L'application gère sa charge en associant chaque type de travail à un type de processus (requête http pour un serveur web, tâche background par un worker, tâche plannifiée par une clock).

L’appli utilise le gestionnaire du processus de l’OS pour gérer les flux de sortie, répondre à un processus qui plante et gérer les stop n go initiés par les utilisateurs.

## 9 - Jetable

*Maximisez la robustesse avec des démarrages rapides et des arrêts gracieux*

Les processus de l’application peuvent être démarrés ou stoppés en un instant (idéalement, quelques secondes).

Favorise des processus de release et de scalabilité verticale plus agiles.

Plus robuste, les processus sont facilement déplaçable.

Un arrêt se fait souplement, en arrêtant d’écouter sur le port tout en permettant à la dernière requête de finir.
Un worker renvoie le travail en cours dans sa file d’attente.

Les processus doivent être robustes face aux morts subbites.

L'application doit utiliser un backend de file de message robuste, capable de renvoyer une tache dans la file si le client se deconnecte ou ne répond plus.

## 10 - Parité dev/prod

*Gardez le développement, la validation et la production aussi proches que possible*

L'application est conçue pour un déploiement en continue.

Le temps entre les déploiement est de l'ordre de l'heure.

L'auteur du code est aussi responsable du déploiement.

Les environnements de dev et de prod doivent être aussi similaire que possible : exit l'utilisation d'un SQLite en dev et d'un PortGre en prod par exemple.

## 11 - Logs

*Traitez les logs comme des flux d’évènements*

Les logs sont traités comme des flux d'évènements ordonnés dans le temps.

L'archivage est géré par l'environnement d'exécution.

Ils peuvent être envoyés vers un outil d’indexation ou d’archivage qui permettent de trouver un évènement spécifique dans le passé, de visualiser les tendances par des graphiques ou de lever des alertes définies par l’utilisateur.

## 12 - Processus d'administration

*Lancez les processus d’administration et de maintenance comme des one-off-processes*

Processus qui ne font pas parties des processus normaux de l’application (migration de BDD, inspecter la BDD, exécuter des scripts ponctuels ...).

Ils doivent être lancés dans un environnement identique aux processus standards, sur la même release.

Le code administration doit être livré avec le code de l’application.

La même technique d’isolation de dépendance doit être utilisée pour les dépendances du code d'administration que pour les autres dépendances.

On aura une préférence pour les langages qui fournissent un terminal REPL prêt à l’emploi qui facilite l’execution de script ponctuels.




