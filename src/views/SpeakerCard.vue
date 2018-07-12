<template>
  <div class="home">
    <div class="form-style-5">
      <form @submit.prevent="generateBanner">
        <fieldset>
          <legend>
            <span class="number">1</span> Speaker
          </legend>
          <input type="text" v-model="model.Nombre" placeholder="Nombre Speaker">
          <input type="text" v-model="model.DescripcionSpeaker" placeholder="Breve Descripcion Speaker">
          <input type="file" id="photoS1" @change="getFileSpeaker"/>
          <label for="photoS1">Seleccionar foto</label>
          <span>Para generar correctamente la imagen, la misma deberá ser cuadrada</span>
        </fieldset>
        <input type="submit" value="Generar" />
      </form>
    </div>
    <div class="speaker-card" id="speaker-card">
      <img class="speaker-photo" :src="model.Photo"/>
      <div class="speaker-data">
        <h1>{{ model.Nombre }}</h1>
        <h3>{{ model.DescripcionSpeaker }}</h3>
      </div>
      <div class="social-media">
        <img class="logo" src="../assets/logo.png">
        <p>
          http://net-baires.com.ar
        </p>
        <p>
          @NetBaires
        </p>
        <p>
          http://slack.net-baires.com.ar
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import { SpeakerModel } from "../models/Speaker";

import * as domtoimage from "../../node_modules/dom-to-image/dist/dom-to-image.min.js";

@Component
export default class SpeakerCard extends Vue {
  private model: SpeakerModel;

  constructor() {
    super();
    this.model = new SpeakerModel();
  }

  public getFileSpeaker(event: any) {
    const file = event.target.files[0];

    if (!file || !file.type.match("image.*")) {
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e: any) => this.model.Photo = e.target.result;
  }

  public generateBanner() {
    domtoimage
      .toJpeg(document.getElementById("speaker-card"))
      .then((dataUrl: any) => {
        const link = document.createElement("a");
        link.download = "speaker-card.jpeg";
        link.href = dataUrl;
        link.click();
      })
      .catch(console.error);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.speaker-card {
  width: 600px;
  height: 338px;
  background-image: url(../assets/bg-speaker.png);
  background-repeat: round;
  position: relative;
  font-family: "Roboto", sans-serif;
  color: black;

  .speaker-photo{
    position: absolute;
    top: 10px;
    right: 10px;
    border-radius: 50%;
    width: 225px;
    z-index:10;
  }

  .speaker-data{
    background-color: RGBA(255, 255, 255, 0.5);
    position: absolute;
    left: 40px;
    top: 40px;
    width: 400px;
    border-radius: 10px;
    height: 140px;

    h1{
      width: 325px;
      padding: 0px 10px;
    }

    h3{
      width: 325px;
      padding: 0px 10px;
    }
  }

  .social-media{
    background-color: RGBA(255,255,255, 0.5);
    position: absolute;
    left: 40px;
    bottom: 40px;
    width: 360px;
    border-radius: 10px;
    height: 80px;

    p {
      margin: 5px 0px 5px 90px;
      font-weight: bold;
      text-align: left;
    }

    .logo {
      position: absolute;
      bottom: 5px;
      left: 5px;
      width: 80px;
    }
  }
}

.form-style-5 {
  max-width: 500px;
  padding: 10px 20px;
  background: #f4f7f8;
  margin: 10px auto;
  padding: 20px;
  background: #f4f7f8;
  border-radius: 8px;
  font-family: "Roboto", sans-serif;

  fieldset {
    border: none;
  }
  legend {
    font-size: 1.4em;
    margin-bottom: 10px;
  }
  label {
    display: block;
    margin-bottom: 8px;
  }
  input[type="text"],
  input[type="date"],
  input[type="datetime"],
  input[type="email"],
  input[type="number"],
  input[type="search"],
  input[type="time"],
  input[type="url"],
  textarea,
  select {
    font-family: "Roboto", sans-serif;
    background: rgba(255, 255, 255, 0.1);
    border: none;
    border-radius: 4px;
    font-size: 16px;
    margin: 0;
    outline: 0;
    padding: 7px;
    width: 100%;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    background-color: #e8eeef;
    color: #8a97a0;
    -webkit-box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03) inset;
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03) inset;
    margin-bottom: 30px;
    &:focus {
      background: #d2d9dd;
    }
  }
  input[type="file"],
  input[type="checkbox"] {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }
  input[type="file"] + label,
  input[type="checkbox"] + label {
    font-family: "Roboto", sans-serif;
    background: rgba(255, 255, 255, 0.1);
    border: none;
    border-radius: 4px;
    font-size: 16px;
    margin: 0;
    outline: 0;
    padding: 7px;
    width: 100%;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    background-color: #e8eeef;
    color: #8a97a0;
    -webkit-box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03) inset;
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03) inset;
    margin-bottom: 30px;
    cursor: pointer;

    &:hover {
      background: #d2d9dd;
    }

    &.active {
      background: #1abc9c;
      color: white;

      &:hover {
        background: #109177;
      }
    }
  }

  input[type="file"] + label {
    margin-bottom: 0;
  }
  select {
    -webkit-appearance: menulist-button;
    height: 35px;
  }
  .number {
    background: #1abc9c;
    color: #fff;
    height: 30px;
    width: 30px;
    display: inline-block;
    font-size: 0.8em;
    margin-right: 4px;
    line-height: 30px;
    text-align: center;
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.2);
    border-radius: 15px 15px 15px 0px;
  }

  input[type="submit"],
  input[type="button"] {
    position: relative;
    display: block;
    padding: 19px 39px 18px 39px;
    color: #fff;
    margin: 0 auto;
    background: #1abc9c;
    font-size: 18px;
    text-align: center;
    font-style: normal;
    width: 100%;
    border: 1px solid #16a085;
    border-width: 1px 1px 3px;
    margin-bottom: 10px;

    &:hover {
      background: #109177;
    }
  }

  span {
    font-size: small;
  }
}
</style>
