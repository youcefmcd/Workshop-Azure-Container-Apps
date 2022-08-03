# Lab_3: Déploiement d’une application dans Azure Container Apps
## Objectif:
L'objectif de ce Lab 3 c'est de déployer une appliacation (en micro-services) dans le service Container Apps simple

## Préparation de l'environnement de déploiement des conteneurs

### Prérequis
Enregistrer le provider<br>
``` 
az provider register --namespace Microsoft.App
az provider show --namespace Microsoft.App
```

Affectation des variables<br>
```
RESOURCE_GROUP="RG-Lab3"
LOCATION="eastus2"
CONTAINERAPPS_ENVIRONMENT="lab3-environment"
LOG_ANALYTICS_NAME="pierrc-workspace-lab"
```
