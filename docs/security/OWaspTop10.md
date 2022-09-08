---
sidebar_position: 4
---

# OWASP TOP 10 2021

## Contrôle d'accès brisé : 3.81%

### Description

Blocage de l’action des utilisateurs hors de leurs autorisations défaillant :

* Violation du principe de moindre privilège, ou refus par défaut

* Contournement des contrôles d’accès en modifiant l’url

* Possibilité de visualiser ou modifier le compte d’une autre personne

* Élévation de privilège

* Mauvaise configuration CORS

* Forcer la navigation vers des pages sécurisé sans être authentifié

### Prévention

* Refuser par défaut, sauf pour les ressources publiques

* Centraliser le contrôle d’accès dans l’application

* Log les échecs d’accès et alerter les administrateurs

* Limiter le taux d’accès aux API

* Invalider les sessions sur le serveur après déconnexion

* Privilégier des tokens JWT de courte durée de vie

## Échecs cryptographiques : 4.49%

### Description

Pour toute données sensibles :

* Données transmises en texte clair

* Utilisation d’algorithme de crypto ancien ou faible

* Utilisation de la clé de chiffrement par défaut

* Certificat de serveur non validé

* Utilisation de fonction de hachage obsolètes


### Prévention

* Identifier les données sensibles et les crypter au repos

* Ne pas stocker de données sensibles inutilement, cache compris

* Utiliser des algorithmes et des clés de hachage à jour

* Chiffrer les données en transit

* Bcrypt

## Injections : 3.37%

### Description

Saisies utilisateurs non validées, non filtrées ou non nettoyées

### Prévention

* Utiliser un ORM

* Valider les entrées côté serveur

* Échapper les caractères spéciaux

* Utiliser LIMIT pour réduire la divulgation

## Dépendances vulnérables : 8.77%

### Description

Vous êtes probablement vulnérable si :

* Vous ne connaissez pas les versions de vos dépendances

* Vous utilisez des dépendances obsolètes ou vulnérables

* Vous ne recherchez pas régulièrement les vulnérabilités

* Vous ne mettez pas vos dépendances à jour

* Vous ne tester par la compatibilité des mises à jour

### Prévention

* Supprimer les dépendances non utilisées

* Inventorier en permanence leurs versions

* Utiliser des outils d’analyse de vulnérabilités

* Surveiller les sources telles que CVE ou NVD

* Utiliser des dépendances provenant de sources officielles

## Faiblesses d’authentification : 2.55%

### Description

* L’attaquant dispose d’identifiants valides

* Les attaques brute-force sont possibles

* Les mots de passes faible ou connus sont possibles

* Processus de récupération faible ou inefficace

* Réutilisation d’identifiant de session après une connexion réussie

* Les identifiants de sessions ne sont pas invalidés après déconnexion

### Prévention

* Si possible, utiliser une authentification multifactorielle

* Ne déployez pas d’identification par défaut

* Contrôle de mot de passe faible (liste des 10 000)

* Alignez les politiques de MDP sur le NIST

* Sécuriser la récupération de mot de passe

* Limiter ou retarder les tentatives de connexion échouées

* Alerter les admins en cas de brute-force détecté

## Défauts d'intégrité : 2.05%

### Description

Défaut d’intégrité des applications ou des données :

* Utilisation de plugins ou librairies de sources non reconnues

* CI/CD non sécurisée

* Mise à jour automatisée sans vérification d’intégrité

### Prévention

* Utilisez des signatures numériques

* Envisagez d’héberger un référentiel en interne

* Utiliser un outil de vérification de vulnérabilité

## Surveillance défaillante : 6.51%

### Description

Défaillances de la journalisation et de la surveillance de la sécurité :

* Connexions, transaction de valeur non logués

* Erreurs ne sont pas journalisés, ou pas claires

* Logs ne sont pas surveillés pour détecter des activités suspectes

* Logs uniquement stockés localement

* L’application ne peut pas détecter ou alerter les attaques actives

### Prévention

* Logs les échecs de connexion, de contrôle d’accès

* Permettre aux gestionnaire de logs de facilement les consommer

* Prévenir les attaques sur les systèmes de logs

* Assurer que les transactions de valeur soit auditables

* Mettre en place des alertes efficaces en temps réel

* Établir un plan de réponse aux indicents

## Falsification de requête : 2.72%

### Description

URL fournie non-validée

L’attaquant peut contraindre l’application à envoyer une requête préconstruite à une destination inattendue, même avec un pare-feu ou un VPN

Ce type d’attaque est plus courant et sa sévérité plus élevée

### Prévention

* Nettoyer et valider les données utilisateurs

* N’envoyez pas de réponse brute aux applications clients

* Désactiver les redirection HTTP

* Veillez à la cohérence de l’url

## Sécurité mal configurée : 4.51%

### Description

* Fonctionnalités inutiles actives ou installées

* Comptes et mots de passe par défaut actifs

* Le traitement des erreurs révèle trop d’informations

* Les mises à jour de sécurité ne sont pas activées

* Le serveur n’envoi pas d’en-tête de sécurité

### Prévention

* Supprimez ou n’installez pas les fonctionnalités inutilisées

* Envoyer des en-têtes de sécurité aux applications clientes

* Automatiser une vérification de la configuration

## Conception non sécurisée : 3.00%

### Prévention

* Intégrer les contrôles de sécurité dans les users stories

* Rédiger des tests unitaires pour valider la résistance

* Limiter la consommation de ressources



