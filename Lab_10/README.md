# Lab_10: Environnement privé
Azure Container Apps s'exécute dans le contexte d'un environnement, qui est pris en charge par un réseau virtuel (VNET).Lorsque vous créez un environnement, vous pouvez fournir un VNET personnalisé, sinon un VNET est automatiquement généré pour vous. Les VNET générés vous sont inaccessibles car ils sont créés dans le locataire de Microsoft. Pour avoir un contrôle total sur votre VNET, fournissez un VNET existant à Container Apps lorsque vous créez votre environnement.<br>
Ils existe deux niveaux accessibilité:
|Niveau d’accessibilité|Description                                          |
|----------------------|-----------------------------------------------------|
|Externe|Les environnements Container Apps déployés en tant que ressources externes sont disponibles pour les demandes publiques. Les environnements externes sont déployés avec une adresse IP virtuelle sur une adresse IP publique externe.|
|Interne|Lorsqu'il est défini comme interne, l'environnement n'a pas de point de terminaison public. Les environnements internes sont déployés avec une IP virtuelle (VIP) mappée sur une adresse IP interne. Le point de terminaison interne est un équilibreur de charge interne Azure (ILB) et les adresses IP proviennent de la liste d'adresses IP privées du VNET personnalisé.|
## Objectif:
L'objectif de ce Lab 10, c'est de déployer une Azure Container App dans un environnement privé (interne) dans un Vnet.<br>
Voici les variables:<br>
```
RESOURCE_GROUP="RG_Lab_010"
ENVIRONMENT_NAME="Lab-010-env"
LOCATION="westeurope"
VNET_NAME="Lab-010-vnet"
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
Création du "Virtual Network"<br>
```
az network vnet create \
  --resource-group $RESOURCE_GROUP \
  --name $VNET_NAME \
  --location $LOCATION \
  --address-prefix 10.0.0.0/16
```
test -> Création du "Virtual Network":
```
az network vnet show --resource-group $RESOURCE_GROUP --name $VNET_NAME -o table
```
Création du "Subnet"<br>
```
az network vnet subnet create \
  --resource-group $RESOURCE_GROUP \
  --vnet-name $VNET_NAME \
  --name infrastructure-subnet \
  --address-prefixes 10.0.0.0/21
```
test -> Création du "subnet":<br>
```
az network vnet subnet show --resource-group $RESOURCE_GROUP   --vnet-name $VNET_NAME --name infrastructure-subnet -o table
```
Récupération des informations de l'id du subnet:
```
INFRASTRUCTURE_SUBNET=`az network vnet subnet show \
                         --resource-group $RESOURCE_GROUP \
                         --vnet-name $VNET_NAME \
                         --name infrastructure-subnet \
                         --query "id" -o tsv | tr -d '[:space:]'`
```
test -> Récupération des informations de l'id du subnet
```
echo $INFRASTRUCTURE_SUBNET
```
Création de "Container Apps environment with the VNET and subnet":<br>
```
az containerapp env create \
  --name $ENVIRONMENT_NAME \
  --resource-group $RESOURCE_GROUP \
  --location "$LOCATION" \
  --logs-destination none
  --infrastructure-subnet-resource-id $INFRASTRUCTURE_SUBNET \
  --internal-only
```
