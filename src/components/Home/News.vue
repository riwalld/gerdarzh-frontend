<template>
  <section class="news">Derniers ajouts techniques:
    <p>
      <b>L'application est actuellement déployée en la version suivante:</b><br>
    <ul>

      <li>Une version "multi-tiers" de type MVVM avec le framework back-end <b>Python Django</b>, (port <span
          style="color: blue;"><b><u><a
                href="http://ec2-51-20-9-64.eu-north-1.compute.amazonaws.com:8082/">:8082</a></u></b></span>), et un
        front-end avec le framework <b>Vue3</b>, accessible au port <span style="color: blue;"><b><u><a
                href="http://ec2-51-20-9-64.eu-north-1.compute.amazonaws.com:8080/">:8080</a></u></b></span><br></li>
    </ul></p>
    <p>Projet <b>Django</b> consultable sur <span style="color: blue;"><b><u><a
              href="https://github.com/riwalld/django_back-end_geriadur">GitHub</a></u></b></span>.</p>
    <p>
      <b>- 10/05/24:</b> Adaptation de l'interface de l'ensemble de site dans une architecture progressive par
      composants via le framework Vue.Js (Vue3).
    </p>
    <p>Projet Vue consultable sur <span style="color: blue;"><b><u><a
              href="https://github.com/riwalld/Vue3-Front-Geriadur">GitHub</a></u></b></span>.</p>
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
<script>
import Schema from '../../images/architecture_project.jpg'
export default {
  components: { Schema },

  data() {
    return {
      schema: Schema
    }
  }
}
</script>