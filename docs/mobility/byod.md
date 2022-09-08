# BYOD

Le phénomène du BYOD (Bring your own Device) ou la consumération de l'informatique en français est la pratique d'utiliser ses périphériques personnelles pour travailler. Ansi on utilise son ordinateur, son téléphone ou tout autres appareils pour réaliser ses tâches profesionnelles.


## Enjeux 

Les enjeux du BYOD sont multiples:

* Réduction des coups
    * Achat du matériel
    * Entretien du matériel
    * Diminuer les charges fixes avec des plus petits locaux
* Sécurité
    * Fiabilité du système
* Mobilité
    * Flexibilité des horaires
    * Travailler n'importe où, lieu de vacance, espace de coworking, à la maison
    * Amélioration des conditions de travail du collaborateur
    * Tracances, travailler en vacances et oui ! En vrai c'est des semaines de télétravail en + des congés
* Législation
    * Respecter la législation en vigueur pour être dans le cadre de la loi


## Ce qu'il faut savoir dans une entreprise

Comme le télétravail, voir les recommendations du gouvernement sur la mise en place du télétravail dans ce [PDF](https://travail-emploi.gouv.fr/IMG/pdf/qr-teletravail-deconfinement.pdf), il en vient d'un commun accord entre l'employeur et le collaborateur. 

Soit c'est dans la philosophie de l'entreprise donc quasiment imposé, et indiqué dans les fiches de postes, soit l'employé peut demander à utiliser son propre matériel c'est alors à l'employeur de décider s'il autorise ou non l'utilisation de son propre ordinateur.

L'employeur reste cependant soumis au code du travail et doit fournir les moyens nécessaires à l'employé pour exécuter ses tâches qui lui sont confiés.

## Axes

Les axes sur lesquelles on peut travailler pour la mise en place dans une entreprise

### Sécurité

L'objectif et de garantir la sécurité des données sur l'appareil du collaborateur, peut importe où la donnée est stocké c'est à la société de garantir.

On peut envisager plusieurs solutions:

* Une partition dédiée aux données profesionnelles
    * Toutes les données concernant l'entreprise seront à enregistrer dedans
    * Elle doit être systématiquement chiffré par exemaple avec VeraCrypt
    * Elle doit-être accessible par l'entreprise, notament pour être effacée en cas de perte ou de vol du terminal
* Accès uniquement aux documents de la société via un stockage CLOUD
    * Aucun document sauvegardé physiquement sur l'ordinateur personnel
    * Sauvegarde automatique en fonction de la politique de plan de reprise
    * Connexion internet requise, sauf si mise nen place d'un espace tampon, attention l'endroit où est sauvegardé le dossier tampon doit-être chiffré.

L'entreprise doit aussi garantir la sécurité des connexions aux applications métiers ou externes.

* Mise en place d'un VPN pour accéder au réseau de l'entreprise
    * Par exemple WireGuard, OpenVpn
    * Faire attention à la compatibilité des systèmes
* Au niveau du proxy du VPN retranscrire toutes les URL du protocole HTTP en HTTPS

### Application Métier

N'oublions pas que le code du travail impose à l’employeur de fournir les moyens nécessaires à l’employé pour exécuter ses tâches qui lui sont confiés.

Dans l'objectif de la BYOD c'est de travailler avec son propre appareil, il faut que les collaborateurs puissent accèder à leur environnement de travail et à leurs applications habituelles. Il ne faut pas diminuer la qualité du ou des services.

La mutualisation des applications est aussi une approche efficace dans la BYOD car une même application ou un regroupement d'applications d'un même fournisseur, simplifie la mise en place dans le SI. 

Par exemple pour toute la partie communication interne de la société on peut citer:

* Google Workplace
    * Propriétaire
    * Cloud only
    * 9$/user/month
* Facebook Workplace
    * Propriétaire
    * Cloud Only
    * 4$/user/month
* Mattermost
    * OpenSource
    * Self-Hosted
    * 10$/user/month
* Office365
    * Propriétaire
    * Cloud Only
    * 6$/user/month

Ces outils fournissent un ensemble d'outils pour la communication interne de la société, chat, partage de fichiers, DRIVE pour les documents.


### Législation

D'un point de vue de la législation le BYOD ne pose pas de problème selon la CNIL qui ne considère pas le faite d'utiliser son équipement personnel comme un "traitement de données". Cependant son implémentation dans le SI impose quelques règles à suivre.

**Vie Privée**

Le contrôle et les accès aux terminaux privée n’est pas autorisé par l’article 9 du code civil « Chacun a droit au respect de sa vie privée ». Il n’est en aucun possible de restreindre l’usage de ses terminaux en empêchant la consultation de site en ligne (en dehors des temps de travail ) ou prodiguant une liste d’applications autorisées. 

Cependant il est possible de mettre en place une charte pour demander l'utilisation du VPN quand le collaborateur travail et restreindre les accès directement sur le réseau de l'entreprise.

Il faut aussi comme sur un PC professionnel, que l'employeur ait accès pour supprimer/ effacer la partition reservé.

**Droit à la déconnexion**

L'usage de son ordinateur personnel peut rendre invisible la limite entre temps de travail et temps personnel. C'est d'ailleurs ce qui a conduit la loi travail el khomri sortie en 2016, à inscrire dans le code du travail un article définissant les temps de travail et le droit de l'employé de ne pas être joignable pour éviter les Burn-out.


## Sources

* Recommandations pour le télétravail: https://travail-emploi.gouv.fr/IMG/pdf/qr-teletravail-deconfinement.pdf
* Guide de la CNIL pour le BYOD: https://www.cnil.fr/fr/byod-quelles-sont-les-bonnes-pratiques
* Code Civile: https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006419288/
* Tracances: https://www.francetvinfo.fr/economie/emploi/carriere/vie-professionnelle/tendances-travailler-pendant-les-vacances-une-pratique-qui-se-developpe-en-france_5307601.html
* Mattermost CERN: https://home.cern/news/news/computing/cern-ends-trial-facebook-workplace









