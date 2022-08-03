# Lab_3: Déploiement d’une application dans Azure Container Apps
## Objectif:
L'objectif de ce Lab 3 c'est de déployer une appliacation (en micro-services) dans le service "Azure Container Apps"

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

Création d'un ressource group<br>
```
az group create \
  --name $RESOURCE_GROUP \
  --location $LOCATION -o table
``` 

Création d'un Log Analytics Workspace<br>
```
az monitor log-analytics workspace create \
 --resource-group $RESOURCE_GROUP \
 --workspace-name $LOG_ANALYTICS_NAME \
 --location $LOCATION \
 -o jsonc

LOG_ANALYTICS_WORKSPACE_CLIENT_ID=`az monitor log-analytics workspace show --query customerId -g $RESOURCE_GROUP -n $LOG_ANALYTICS_NAME --out tsv`

LOG_ANALYTICS_WORKSPACE_PRIMARY_KEY=`az monitor log-analytics workspace get-shared-keys --query primarySharedKey -g $RESOURCE_GROUP -n $LOG_ANALYTICS_NAME --out tsv`
```

Création d'un environnement<br>
```
az containerapp env create \
  --name $CONTAINERAPPS_ENVIRONMENT \
  --resource-group $RESOURCE_GROUP \
  --location $LOCATION \
  --logs-workspace-id $LOG_ANALYTICS_WORKSPACE_CLIENT_ID \
  --logs-workspace-key $LOG_ANALYTICS_WORKSPACE_PRIMARY_KEY \
  -o jsonc
```


