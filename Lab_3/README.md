# Lab_3: Déploiement d’une application dans Azure Container Apps
## Objectif:
L'objectif de ce Lab 3 c'est de déployer une appliacation (en micro-services) dans le service "Azure Container Apps"

## Préparation de l'environnement 

### Prérequis
Créez un Service Principal AZ Cli ou Cloud Shell:<br>
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






