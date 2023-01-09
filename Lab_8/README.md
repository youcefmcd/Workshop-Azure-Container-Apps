# Lab_8: Utilisation de stockage persistant

## Objectif:
L'objectif de ce Lab 8, c'est de déployer une Container Apps avec un point de montage SMB avec "Azure Files storage"<br>

#### Etapes:<br>
Pour cet exercice voici les variables:<br>
```
RESOURCE_GROUP="RG_Lab_8"
ENVIRONMENT_NAME="Lab-8-env"
LOCATION="westeurope"
STORAGE_ACCOUNT_NAME="acastorageaccountlab8"
STORAGE_SHARE_NAME="acafileshare00"
STORAGE_MOUNT_NAME="acastoragemount"
CONTAINER_APP_NAME="my-container-app"
```

Création du "Resource Group"<br>
```
az group create \
  --name $RESOURCE_GROUP \
  --location $LOCATION
```
Création de l'environnement "Azure Container App"<br>
```
az containerapp env create \
  --name $ENVIRONMENT_NAME \
  --resource-group $RESOURCE_GROUP \
  --logs-destination none \
  --location $LOCATION
```
Création du "storage account"<br>
```
az storage account create \
  --resource-group $RESOURCE_GROUP \
  --name $STORAGE_ACCOUNT_NAME \
  --location $LOCATION \
  --kind StorageV2 \
  --sku Standard_LRS \
  --enable-large-file-share
``` 
Création du "File Share"<br>
```
az storage share-rm create \
  --resource-group $RESOURCE_GROUP \
  --storage-account $STORAGE_ACCOUNT_NAME \
  --name $STORAGE_SHARE_NAME \
  --quota 1024 \
  --enabled-protocols SMB
````
Récupération de la première "Access Key"<br>
```
STORAGE_ACCOUNT_KEY=`az storage account keys list -n $STORAGE_ACCOUNT_NAME --query "[0].value" -o tsv`
```
Création du point de montage SMB<br>
```
az containerapp env storage set \
  --access-mode ReadWrite \
  --azure-file-account-name $STORAGE_ACCOUNT_NAME \
  --azure-file-account-key $STORAGE_ACCOUNT_KEY \
  --azure-file-share-name $STORAGE_SHARE_NAME \
  --storage-name $STORAGE_MOUNT_NAME \
  --name $ENVIRONMENT_NAME \
  --resource-group $RESOURCE_GROUP \
  --output table
 ```
  

