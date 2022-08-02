# Lab_1: Déploiement d’une infrastructure Azure Container Apps à l'aide de la console Azure

## Objectif:
L'objectif de ce Lab 1, c'est de déployer une Container Apps simple et de faire un tour d'horizon de la console "Azure Container Apps"

## Création de la ressource "Azure Container Apps" 
Dans la console Azure:<br>
<img width='800' src='../images/Lab_1/Lab_1_00.png'/><br>
<img width='800' src='../images/Lab_1/Lab_1_01.png'/><br>
https://docs.microsoft.com/en-us/azure/container-apps/environment<br><br>
<img width='800' src='../images/Lab_1/Lab_1_02.png'/><br>
<img width='800' src='../images/Lab_1/Lab_1_03.png'/><br>
<img width='800' src='../images/Lab_1/Lab_1_04.png'/><br>
<img width='800' src='../images/Lab_1/Lab_1_05.png'/><br>
<img width='800' src='../images/Lab_1/Lab_1_06.png'/><br>
https://docs.microsoft.com/en-us/azure/container-apps/networking<br><br>
<img width='800' src='../images/Lab_1/Lab_1_07.png'/><br>
<img width='800' src='../images/Lab_1/Lab_1_08.png'/><br>
<img width='800' src='../images/Lab_1/Lab_1_09.png'/><br>
<img width='800' src='../images/Lab_1/Lab_1_10.png'/><br>

## Navigation dans la console
<img width='800' src='../images/Lab_1/Lab_1_11.png'/><br>
<img width='800' src='../images/Lab_1/Lab_1_12.png'/><br>
<img width='800' src='../images/Lab_1/Lab_1_13.png'/><br>
https://docs.microsoft.com/en-us/azure/container-apps/revisions<br><br>
<img width='800' src='../images/Lab_1/Lab_1_14.png'/><br>
<img width='800' src='../images/Lab_1/Lab_1_15.png'/><br>

### Setting Application
<img width='800' src='../images/Lab_1/Lab_1_16.png'/><br>
<img width='800' src='../images/Lab_1/Lab_1_17.png'/><br>
<img width='800' src='../images/Lab_1/Lab_1_18.png'/><br>
<img width='800' src='../images/Lab_1/Lab_1_19.png'/><br>
Variables d'environnement ex: Connexion à la base de données<br><br>
<img width='800' src='../images/Lab_1/Lab_1_20.png'/><br>
Les sondes sont basées sur celles de Kubernetes<br>
https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/<br><br>
<img width='800' src='../images/Lab_1/Lab_1_21.png'/><br>
https://docs.microsoft.com/en-us/azure/container-apps/scale-app<br><br>

### Settings
#### Authentification
<img width='800' src='../images/Lab_1/Lab_1_22.png'/><br>
https://docs.microsoft.com/en-us/azure/container-apps/authentication<br><br>
<img width='800' src='../images/Lab_1/Lab_1_23.png'/><br>
<img width='800' src='../images/Lab_1/Lab_1_24.png'/><br>
<img width='800' src='../images/Lab_1/Lab_1_25.png'/><br>
<img width='800' src='../images/Lab_1/Lab_1_26.png'/><br>
<img width='800' src='../images/Lab_1/Lab_1_27.png'/><br>
<img width='800' src='../images/Lab_1/Lab_1_28.png'/><br>
<img width='800' src='../images/Lab_1/Lab_1_29.png'/><br>
<img width='800' src='../images/Lab_1/Lab_1_30.png'/><br>

#### Secrets
<img width='800' src='../images/Lab_1/Lab_1_31.png'/><br>
https://docs.microsoft.com/en-us/azure/container-apps/manage-secrets?tabs=arm-template<br><br>

#### Ingress
<img width='800' src='../images/Lab_1/Lab_1_32.png'/><br>
https://docs.microsoft.com/en-us/azure/container-apps/ingress?tabs=bash<br><br>

#### Custom domains
<img width='800' src='../images/Lab_1/Lab_1_33.png'/><br>
https://docs.microsoft.com/en-us/azure/container-apps/custom-domains-certificates<br><br>

### Changement de l'application (container)
<img width='800' src='../images/Lab_1/Lab_1_34.png'/><br>
<img width='800' src='../images/Lab_1/Lab_1_35.png'/><br>
<img width='800' src='../images/Lab_1/Lab_1_36.png'/><br>
<img width='800' src='../images/Lab_1/Lab_1_37.png'/><br>
<img width='800' src='../images/Lab_1/Lab_1_38.png'/><br>
<img width='800' src='../images/Lab_1/Lab_1_39.png'/><br>
<img width='800' src='../images/Lab_1/Lab_1_40.png'/><br>
<img width='800' src='../images/Lab_1/Lab_1_41.png'/><br>
<img width='800' src='../images/Lab_1/Lab_1_42.png'/><br>
<img width='800' src='../images/Lab_1/Lab_1_43.png'/><br>
<img width='800' src='../images/Lab_1/Lab_1_44.png'/><br>

### Fin du lab
Détruire le groupe de ressource
