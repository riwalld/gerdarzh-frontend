<template>
  <div id="modal-bg" class="modal">

    <!-- Modal content -->
    <div class="modal-content">
      <span class="close" @click="close()">&times;</span>
        <div style="display: flex; padding: 10px;">
          <div class="etymoInfo">
            <div>
                  <img :src="getImagePath()" />
                </div>
                <div style="display: flex; flex-direction: column;">
                <div style="padding: 30px;">
                    <h2 style="padding-bottom: 20px;">{{ propernoun.currentName }} </h2>
                    <div style="font-size: larger; font-weight: bold;">{{ propernoun.descrFr }}</div>
                </div>
                <div> Sens littéral: {{ propernoun.litTrans.litTransFr }}</div>
                <div> Forme étymologique: {{ propernoun.etymoName }}</div>
                <div> Lieu: {{ propernoun.place }}, {{ propernoun.country }}</div>
                <div> Période: {{ propernoun.period }}</div>

            </div>
            </div>
          </div>
    </div>
  </div>

</template>

<script>

import { host } from '../Config/Config';
export default {

  props: {
    currentName :{ type: String, required: true },
  },

  data() {
    return {
      propernoun : { type: Object, required: true },
    };
  },

  created() {
    fetch(host + '/properNouns/propernoun?current_name=' + this.currentName, {
                method: "GET"
            }
            )
                .then(response => response.json())
                .then(propernoun => {
                    this.propernoun = propernoun;
                });

  },
  methods:{
    close() {
      this.$emit('handleShowProperNoun', null);
    },
    getImagePath() {
      console.log(new URL('../../images/nouns/'+ this.propernoun.image + '.jpg', import.meta.url).href)
    return new URL(`../../images/nouns/${this.propernoun.image}.jpg`, import.meta.url).href;
    }
  }
}

</script>