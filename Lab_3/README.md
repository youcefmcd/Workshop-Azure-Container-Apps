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
DB_HOST_NAME="Lab-3-DB"
DB_NAME="rugby_api"
DB_ADMIN="pierrc"
DB_ADMIN_PASSWORD=Password123$

```

Création d'un ressource group<br>
```
az group create \
  --name $RESOURCE_GROUP \
  --location $LOCATION -o table
```

Création de la base de données<br>
```
az mysql server create \
  --location $LOCATION \
  --resource-group $RESOURCE_GROUP \
  --name $DB_HOST_NAME \
  --admin-user $DB_ADMIN \
  --admin-password $DB_ADMIN_PASSWORD \
  --sku-name GP_Gen5_2 \
  --ssl-enforcement Disabled \
  -o jsonc  
  
az mysql db create \
  --name $DB_NAME \
  --resource-group $RESOURCE_GROUP \
  --server-name $DB_HOST_NAME

az mysql server firewall-rule create \
  --resource-group $RESOURCE_GROUP \
  --server-name $DB_HOST_NAME \
  --start-ip-address 0.0.0.0 \
  --end-ip-address 255.255.255.255 \
  --name allowip  
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


