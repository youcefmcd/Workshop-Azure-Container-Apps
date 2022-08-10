# Lab_6: Pipeline CD
<img width='800' src='../images/Lab_6/Lab_6_00.png'/><br>
## Objectif:
L'objectif de ce Lab 6 c'est de ...<br>

## Prération de l'environnement
Affectation des variables:<br>
```
RESOURCE_GROUP="RG-Lab6"
LOCATION="eastus2"
ACR_NAME="acrlab6"
LOG_ANALYTICS_NAME="pierrc-workspace-lab-6"
CONTAINERAPPS_ENVIRONMENT="environment-lab-6"

```
Installation de l'environnement:<br>
```
az extension add --name containerapp --upgrade
az provider register --namespace Microsoft.App
az provider register --namespace Microsoft.OperationalInsights

az group create \
  --name ${RESOURCE_GROUP} \
  --location ${LOCATION}

az acr create \
  --resource-group ${RESOURCE_GROUP} \
  --name ${ACR_NAME} \
  --sku Basic \
  --admin-enabled true

az monitor log-analytics workspace create \
  --resource-group ${RESOURCE_GROUP} \
  --workspace-name ${LOG_ANALYTICS_NAME} \
  --location ${LOCATION}
LOG_ANALYTICS_WORKSPACE_CLIENT_ID=`az monitor log-analytics workspace show --query customerId -g ${RESOURCE_GROUP} -n ${LOG_ANALYTICS_NAME} --out tsv`
LOG_ANALYTICS_WORKSPACE_PRIMARY_KEY=`az monitor log-analytics workspace get-shared-keys --query primarySharedKey -g ${RESOURCE_GROUP} -n ${LOG_ANALYTICS_NAME} --out tsv`

az containerapp env create \
  --name ${CONTAINERAPPS_ENVIRONMENT} \
  --resource-group ${RESOURCE_GROUP} \
  --location ${LOCATION} \
  --logs-workspace-id $LOG_ANALYTICS_WORKSPACE_CLIENT_ID \
  --logs-workspace-key $LOG_ANALYTICS_WORKSPACE_PRIMARY_KEY
```