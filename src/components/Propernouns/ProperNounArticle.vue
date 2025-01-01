<template>
  <div id="modal-bg" class="modal">

    <!-- Modal content -->
    <div class="modal-content">
      <span class="close" @click="close()">&times;</span>
      <h2>{{ propernoun.currentName }}</h2>
        <div style="display: flex; padding: 10px;">
          <div class="etymoInfo">
                <div>
                    <img :src="imageURL" />
                </div>
                <div style="display: flex; flex-direction: column;">
                <div style="padding: 30px;">
                    <h2 style="padding-bottom: 20px;">{{ propernoun.currentName }} </h2>
                    <div class="description" style="font-size: larger; font-weight: bold;">{{ propernoun.descr }}</div>
                </div>
                <div style="margin-top: auto; text-align: left; padding: 5px; max-width: 250px;">
                    <div class="description">{{ propernoun.imgCaption }}</div>
                </div>
            </div>
            </div></div>
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

  }
}

</script>