# Lab_3: Déploiement d’une application dans Azure Container Apps
## Objectif:
L'objectif de ce Lab 3 c'est de déployer une appliacation (en micro-services) dans le service "Azure Container Apps"

## Préparation de l'environnement 

### Prérequis
Créez un Service Principal Azure Cli ou Cloud Shell:<br>
```
az ad sp create-for-rbac --name "mySPN" --role "Contributor" --scopes /subscriptions/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx --sdk-aut -o jsonc
```
Copiez les informations dans un "notepad" ou autres<br>
Gardez cette structure:<br>
```
{
  "clientId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "clientSecret": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "subscriptionId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "tenantId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
}
```
Dans GitHub, allez dans le service secret:<br>
<img width='800' src='../images/Lab_3/Lab_3_00.png'/><br>
Dans le service secret, créez un secret "AZURE_CREDENTIALS"<br>
Et mettez le "Service Principal" comme ci-dessous:<br>
<img width='800' src='../images/Lab_3/Lab_3_01.png'/><br>

### Déploiement de l'environnement
Le déploiement de l'environnement se fera avec un "Workflow Github" (Pipeline), il déploiera:<br>
- un "resource group"
- un service "Azure Database for MySQL single server"
- une base de donnée + 2 tables + règle de pare-feu
- une "Azure Container Registry"
- un "Log Analytics workspace"
- un "Container Apps Environment"

Le workflow est ici: `.github/workflows/Lab_3_deployment_environnment.yaml`<br>
Paramatrez le bloc de variable du workflows, lignes 6 -> 18 <br>
```
env:
  RESOURCE_GROUP: "RG-Lab3"
  LOCATION: "eastus2"
  CONTAINERAPPS_ENVIRONMENT: "environment-lab-3"
  LOG_ANALYTICS_NAME: "pierrc-workspace-lab-3"
  ACR_NAME: "acrlab3xxx"
  DB_HOST_NAME: "DB-lab-3-xxx"
  DB_NAME: "rugby_api" # ne pas modifier
  DB_ADMIN: "pierrc"
  DB_ADMIN_PASSWORD: Password123$       
```
**Informations importantes**<br>
**Nous sommes dans un Workshop !**<br>
**Toutes la informations liées à la base de données sont à mettre dans un coffre à secret dans les bonnes pratiques (service secrets GitHub, KeyVault, ...)**<br>

Pour déclancher le workflow:<br>
<img width='800' src='../images/Lab_3/Lab_3_03.png'/><br>
Pour suivre l'exécution du workflows:<br>
<img width='800' src='../images/Lab_3/Lab_3_04.png'/><br>
<br>
<img width='800' src='../images/Lab_3/Lab_3_05.png'/><br>
<br>
<img width='800' src='../images/Lab_3/Lab_3_06.png'/><br>
<br>
<img width='800' src='../images/Lab_3/Lab_3_07.png'/><br>

Test du déploiement<br>
"Resource Group":<br>
```
az group list -o table
```
"MySQL"<br>
```
az mysql server list -g RG-Lab3
```
"Environement Azure Container Apps"<br>
```
az containerapp env list -g RG-Lab3
```
"Azure Container Registry"<br>
```
az acr list -g RG-Lab3
```
## "Build and Push" Applications
### API
En Azure Cli ou Cloud Shell:<br>
```
cd ./Lab_3/App/api
az acr build -t acrlab3xxx.azurecr.io/api:1.0.0 -r acrlab3xxx .
```

Déploiement de l'application "api":<br>
```
az containerapp create \
  --name api \
  --resource-group RG-Lab3 \
  --environment environment-lab-3 \
  --image acrlab3xxx.azurecr.io/api:1.0.0 \
  --env-vars DB_HOST=db-lab-3-xxx.mysql.database.azure.com DB_USER=pierrc@db-lab-3-xxx DB_PASSWORD=Password123$ DB_DATABASE=rugby_api \
  --target-port 3000 \
  --ingress 'external' \
  --registry-server acrlab3xxx.azurecr.io \
  --query configuration.ingress.fqdn
```












