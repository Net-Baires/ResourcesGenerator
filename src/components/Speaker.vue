<template>
  <div class="speaker"
    v-bind:class="{ 'speaker1': position === 'left', 'speaker2': position === 'right' }">
    <img :src="model.Photo"/>
    <div class="separator"></div>
    <h1>{{ model.NombreCharla }}</h1>
    <h3>{{ model.Nombre }}</h3>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import { SpeakerModel } from "../models/Speaker";

@Component
export default class Speaker extends Vue {
  @Prop() private position!: string;
  @Prop() private model!: SpeakerModel;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.speaker {
  position: absolute;
  width: 585px;

  img {
    position: absolute;
    border-radius: 50%;
    border: 3px solid black;
    box-sizing: border-box;
    width: 75px;
    max-height: 75px;
    top: 0;
  }

  .separator {
    position: absolute;
    width: 500px;
    height: 3px;
    background-color: black;
    top: 72px;
  }

  h1 {
    position: absolute;
    top: 0;
    margin: 0px;
    max-width: 450px;
    font-family: "Roboto", sans-serif;
    color: black;
  }

  h3 {
    position: absolute;
    top: 80px;
    max-width: 450px;
    font-family: "Roboto", sans-serif;
    color: black;
    margin: 0px;
  }
}

.speaker1 {
  top: 15px;
  left: 15px;

  img {
    left: 0;
  }

  .separator {
    left: 40px;
  }

  h1 {
    text-align: left;
    left: 90px;
  }

  h3 {
    text-align: left;
    left: 40px;
  }
}

.speaker2 {
  top: 125px;
  right: 15px;

  img {
    right: 0;
  }

  .separator {
    right: 40px;
  }

  h1 {
    text-align: right;
    right: 90px;
  }

  h3 {
    text-align: right;
    right: 40px;
  }
}
</style>
