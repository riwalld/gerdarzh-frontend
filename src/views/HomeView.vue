<script setup>
import { ref } from 'vue';
import News from '@/components/home/News.vue';
import UnlockFeatures from '@/components/home/UnlockFeatures.vue';
import EtymoTree from '@/images/flc.jpg';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const etymotree = ref(EtymoTree);
</script>

<template>
    <section>
        <div class="banner">
            <!--<Vue3Lottie style="margin:0"   :animationData="playJSON" :height="300" :width="300" />-->
            <h1>- {{ t('welcome_gerdarzh') }} -</h1>
        </div>
    </section>
    <div class="home">
        <section class="intro">

            <h2>Qu'est ce que le site Gerdarzh ?</h2>
            <h3>Un lexique étymologique</h3>
            <div style="display: flex;
      justify-content: center;">
                <a :href=etymotree><img :src=etymotree width="400" alt="arbre etymologique des langues celtiques"></a>

            </div>
            <div>
                <div>


                </div>
                <p>
                    Geriadur est d'abord un lexique étymologique des langues celtiques. Nous y répertorions et mettons
                    en évidence les éléments linguistiques récurrents présents dans les termes d'origine celtique, afin
                    de parvenir à une meilleure compréhension du sens des mots appartenant à cette branche linguistique
                    de la grande famille des langues indo-européennes.<br />
                    La compréhension des langues celtiques présente un intérêt à plusieurs niveaux :
                </p>
                <div>
                    <ul style="margin: 25px;">
                        <li>Leur omniprésence dans la toponymie française : une grande partie des noms de villes et de
                            régions françaises, belges, suisses et des îles britanniques ont une origine et une
                            signification celtiques.</li>
                        <li>Mieux cerner les fondements de la culture celtique antique et médiévale à travers son champ
                            lexical récurrent.</li>
                        <li>Retrouver le sens profond des mots présents dans les langues celtiques actuelles telles que
                            le breton, le gallois ou l'irlandais moderne.</li>
                    </ul>
                </div>
            </div>
            <div>
                <router-link name="game"><b><u>
                            <h3>Le mini-jeu Gerdarzh</h3>
                        </u></b></router-link>
                <p>
                    Le lexique prend principalement en compte les langues suivantes : le breton, l'irlandais, le
                    gallois, le gaulois et le proto-celtique.<br />
                    À partir de ce lexique, nous proposons un parcours ludique à travers ces termes grâce au mini-jeu
                    <router-link name="game"><b><u>Gerdarzh</u></b></router-link>. Le jeu consiste en des séries
                    de 15 noms propres d'origine celtique, dont vous devrez retrouver la signification
                    étymologique.<br />
                    Pour vous aider, une description ainsi qu'une décomposition étymologique accompagneront chaque terme
                    afin de faciliter la traduction !
                </p>
            </div>
            <unlock-features></unlock-features>
        </section>
        <news></news>
    </div>
</template>
