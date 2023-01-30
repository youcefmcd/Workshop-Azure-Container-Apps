
# Lab_9: Pipeline "revision"

## Objectif:
L'objectif de ce Lab 9, c'est blabla


```
RESOURCE_GROUP="RG_Lab_9"
LOCATION="westeurope"
ACR_NAME="acrlab9"
ENVIRONMENT_NAME="Lab-9-env"
APPLICATION="hello-aca"
VERSION_APPLICATION=1.0.0
```
Création du "Resource Group"<br>
```
az group create \
  --name $RESOURCE_GROUP \
  --location $LOCATION
```
test -> Création du "Resource Group":
```
az group show --resource-group $RESOURCE_GROUP -o table
```
Création d'Azure Container Registry
```
az acr create \
  --resource-group $RESOURCE_GROUP \
  --name $ACR_NAME \
  --sku Basic \
  --admin-enabled true
```
test ->  Création d'Azure Container Registry
```
az acr show --name $ACR_NAME --resource-group $RESOURCE_GROUP -o table
```
Création de "Container Apps environment":<br>
```
az containerapp env create \
  --name $ENVIRONMENT_NAME \
  --resource-group $RESOURCE_GROUP \
  --location $LOCATION \
  --logs-destination none
```
test et visualisation de "Container Apps environment"
```
az containerapp env list --resource-group $RESOURCE_GROUP -o jsonc
```

Build & Push Application
```
cd ./Lab_9/App
az acr build -t $ACR_NAME.azurecr.io/$APPLICATION:$VERSION_APPLICATION -r $ACR_NAME .
```

Deploiement de l'application "hello-aca"
```
REGISTRY_PASSWORD=$(az acr credential show --name $ACR_NAME -o tsv --query "passwords[0].value")

az containerapp create \
  --name $APPLICATION \
  --resource-group $RESOURCE_GROUP \
  --environment $ENVIRONMENT_NAME \
  --image $ACR_NAME.azurecr.io/$APPLICATION:$VERSION_APPLICATION \
  --registry-server $ACR_NAME.azurecr.io \
  --registry-username $ACR_NAME \
  --registry-password $REGISTRY_PASSWORD \
  --target-port 3000 \
  --ingress 'external' \
  --query properties.configuration.ingress.fqdn \
  -o jsonc
```
Test de l'application<br>
Ouvrir un navigateur 


Modification de l'App

Dans le fichier ./App/index.html -> ligne 21<br>
Modifiez v1 en v2
```
Welcome to Azure Container Apps! (v1)
en
Welcome to Azure Container Apps! (v2)
```
Build & Push de la nouvelle version de l'application<br>

```
az acr build -t $ACR_NAME.azurecr.io/$APPLICATION:2.0.0 -r $ACR_NAME .
``` 
