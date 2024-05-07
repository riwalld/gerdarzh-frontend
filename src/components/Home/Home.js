import News from "./News.js";
import UnlockFeatures from "./UnlockFeatures.js";
import EtymoTree from '../../images/flc.jpg'

export default {
components: {News, UnlockFeatures, EtymoTree},

    template: `
    <section>
    <div class="banner">
        <h1>- Bienvenue sur Celtiadur -</h1>
    </div>
</section>
<div class="home">
    <section class="intro">
        <h2>Qu’est ce que le site Geriadur ?</h2>
        <h3>Un lexique étymologique</h3>
        <div style="display: flex;
      justify-content: center;">
            <a :href=etymotree><img :src=etymotree width="400" alt="arbre etymologique des langues celtiques"></a>

        </div>
        <div>
            <p>
                Geriadur est d’abord un lexique
                etymologique des langues celtiques. Ici nous répéretorions et
                mettons en évidences les éléments linguistiques récurrents présents dans les termes
                d’origine celtique afin d'aboutir à une meilleure compréhension du sens des mots appartenant à cette
                branche
                linguistique de la grande famille des langues indo-européennes. <br />
                La compréhension des langues celtique ont un intérêt sur plusieurs aspects:<br />
            </p>
            <div>
                <p>
                <ul margin="25px">
                    <li> Son omniprésence dans la toponymie française, une grande part des villes et régions française,
                        belges,
                        suisses et des îles brittaniques ont une origine et une signification celtique.
                    </li>
                    <li> Cerner quels sont les fondements de la culture celtique antique et médiévale au travers de son
                        champs
                        lexical réccurrent.
                    </li>
                    <li> Retrouver le sens profond des mots présents dans les langues celtiques actuelles tel que le
                        breton, le
                        gallois ou l'irlandais moderne.
                    </li>
                </ul>
                </p>
            </div>
        </div>
        <div>
            <router-link to="/sessionGame"><b><u>
                        <h3>Le mini-jeu Gerdarzh</h3>
                    </u></b></router-link>
            <p>Le lexique prend principalement en compte les langues suivantes: le
                breton, l’irlandais, le gallois, le gaulois et le proto-celtique.<br />
                Sur la base de ce lexique, nous proposons un parcours ludique de ces
                termes via le mini-jeu <router-link to="/sessionGame"><b><u>Gerdarzh</u></b></router-link>. Le jeu
                consiste en séries de 15
                noms propres d’origine celtique dont vous devrez trouver leur
                signification étymologique.<br />
                En guise d'aide, une description ainsi qu'une décomposition étymologique vous aidera à trouver la
                traduction!
            </p>
        </div>
        <unlock-features></unlock-features>
    </section>
<news></news>
</div>
    `,

    data() {
      return {
        etymotree: EtymoTree
      }
    }
}