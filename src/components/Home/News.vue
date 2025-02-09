<template>
  <section class="news">Derniers ajouts techniques:


    <p>
      <b>- 28/05/24:</b> Restructuration des données affichées lors des sessions de jeu.<br>
      - ajout d'une légende décrivant succintement l'illustration
      - système de "cache" permettant d'afficher l'indice étymologique seulement si désiré
    </p>
    <p>
      <b>- 25/05/24:</b> Ajout d'une nouvelle rubrique: <i>Noms de Famille Bretons</i>.
    </p>
    <p>
      <b>- 15/05/24:</b> Mise en place d'un système de points de vie (3 essai avant échec sur une série de 10 fiches).
    </p>
    <p>
      <b>- 30/04/24:</b> Implémentation des formulaires permettant de proposition des termes pour le lexique, ou des
      noms propres (lieux, personnages historiques, mythiques...) pour le Jeu Gerdarzh. Les fomulaires sont accessibles
      en bas des tableaux et leur soumission sera analysée et acceptée (ou non) par un administrateur (outils accessible
      uniquement via la version "standard" du site, accessible depuis le port :8081).
    </p>
    <p>
      <b>- 10/04/24:</b> Ajout d'images pour chaque noms propre du jeu Gerdarzh ainsi qu'une jauge de progression.<br>
      Accès anticipé aux fiches consultatives de mots du lexique.
      Ajout d'une illustration représentant la filiation des langues celtique en page d'accueil.
    </p>

    <p>
      <b>- 15/03/24:</b> Ajout de textes et de fiches de noms par default en page d'accueil avant gestion des comptes
      utilisateurs<br>
      Possibilité de consulter la partie lexique et jeu.
    </p>
    <p>Projet Java Spring (architecture monolithique MVC) consultable sur <span style="color: blue;"><b><u><a
              href="https://github.com/riwalld/Geriadur">GitHub</a></u></b></span>.</p>
    <p>
      <b>- 28/02/24:</b> Mise en place d'une architecture MVC avec:<br><br>
      Un template front (html/css/javascript) intégré à un projet Java <br>
      Une couche Controller/logique (application Java Spring)<br>
      Une base de donnée (mysql).<br>
    </p>
  </section>
</template>