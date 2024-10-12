# Affichage des Prix de l'Or et de l'Argent

Ce projet affiche les prix actuels de l'or et de l'argent à l'aide d'une API. Voici une brève description de la structure du code et des relations entre les fichiers.

## Structure des Fichiers
index.html : Le fichier HTML de base qui contient les éléments de redirection vers l'authentification selon le bouton choisi.

login.htlml & profile.html : Les fichiers gèrent la connexion ou l'inscription dans le localStorage.

auth.js : Ce fichier Javascript gère l'authentification via localStorage.

api.js : Ce fichier JavaScript gère les appels à l'API pour récupérer les prix de l'or et de l'argent. Les données récupérées sont ensuite insérées dans le HTML pour être affichées à l'utilisateur.

investment.js : Ce fichier Javascript gère les fonctions pour acheter ou vendre notre or ou argent.

