<template>
  <section class="news">Derniers ajouts techniques:
    <p>
      <b>L'application est actuellement déployée en deux versions:</b><br>
    <ul>
      <li>
        Une version "monolithique" type MVC avec le framewrk <b>Java Spring et JS natif</b>, accessible au port <span
          style="color: blue;"><b><u><a
                href="http://ec2-51-20-9-64.eu-north-1.compute.amazonaws.com:8081/">:8081</a></u></b></span></li>
      <li>Une version "multi-tiers" de type MVVM avec le framework back-end <b>Python Django</b>, (port <span
          style="color: blue;"><b><u><a
                href="http://ec2-51-20-9-64.eu-north-1.compute.amazonaws.com:8082/">:8082</a></u></b></span>), et un
        front-end avec le framework <b>Vue3</b>, accessible au port <span style="color: blue;"><b><u><a
                href="http://ec2-51-20-9-64.eu-north-1.compute.amazonaws.com:8080/">:8080</a></u></b></span><br></li>
    </ul>
    Ces deux versions Vue sont entièrement déliées et indépendantes bien que faisant appel à une même base de donnée
    MySql.<br>
    <br>Le projet est configuré pour envoyer ses requêtes API vers le port 8082 (Django). Mais peut aussi les envoyer
    vers le port 8081 (Java Spring) pour le même résultat. Cette dernière configuration est accessible via le port
    <span style="color: blue;"><b><u><a
            href="http://ec2-51-20-9-64.eu-north-1.compute.amazonaws.com:8083/">:8083</a></u></b></span>
    </p>

    <div style="display: flex;
      justify-content: center;">
      <a :href=schema><img :src=schema width="300" alt="schema technique"></a>
    </div>
    <p>Les trois projets sont consultables sur github:
    <ul>
      <li>
        <span style="color: blue;"><b><u><a href="https://github.com/riwalld/django_back-end_geriadur">Projet back-end
                Django</a></u></b></span>
      </li>
      <li><span style="color: blue;"><b><u><a href="https://github.com/riwalld/Vue3-Front-Geriadur">Projet front-end
                Vue3</a></u></b></span>
      </li>
      <li><span style="color: blue;"><b><u><a href="https://github.com/riwalld/Geriadur">Projet monolithique Java
                Spring</a></u></b></span>.
      </li>
    </ul>
    </p>



    <p>
      <b>- 13/05/24:</b> Les requêtes API ne pointent plus vers le serveur <b>Java Spring</b> (toujours actif au port
      <span style="color: blue;"><b><u><a
              href="http://ec2-51-20-9-64.eu-north-1.compute.amazonaws.com:8081/">:8081</a></u></b></span>)
      mais vers un serveur <b>Python Django</b> (actif au port <span style="color: blue;"><b><u><a
              href="http://ec2-51-20-9-64.eu-north-1.compute.amazonaws.com:8082/">:8082</a></u></b></span>).<br> Les
      fonctionnalités et les données retournées sont
      identiques (les deux serveurs faisant appel à la même base de données MySQL).
    </p>
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