<template>
  <div class="home">
    <div class="form-style-5">
      <form @submit.prevent="generateBanners">
        <fieldset>
          <legend>
            <span class="number">1</span> Speaker
          </legend>
          <input type="text" v-model="Model.Speaker1.Nombre" placeholder="Nombre Speaker">
          <input type="text" v-model="Model.Speaker1.NombreCharla" placeholder="Nombre Charla">
          <input type="file" id="photoS1" @change="getFileSpeaker1"/>
          <label for="photoS1">Seleccionar foto</label>
          <span>Para generar correctamente la imagen, la misma deberá ser cuadrada</span>
        </fieldset>
        <fieldset>
          <legend>
            <span class="number">2</span> Speaker
          </legend>
          <input type="checkbox" id="activeS2" @change="toggleSpeaker2Active"/>
          <label for="activeS2" :class="{ active: Model.Speaker2.Active }">Lleva segundo speaker</label>
          <div v-if="Model.Speaker2.Active">
            <input type="text" v-model="Model.Speaker2.Nombre" placeholder="Nombre Speaker">
            <input type="text" v-model="Model.Speaker2.NombreCharla" placeholder="Nombre Charla">
            <input type="file" id="photoS2" @change="getFileSpeaker2"/>
            <label for="photoS2">Seleccionar foto</label>
            <span>Para generar correctamente la imagen, la misma deberá ser cuadrada</span>
          </div>
        </fieldset>
        <fieldset>
          <legend>
            <span class="number">3</span> Fecha y Dirección
          </legend>
          <input type="text" v-model="Model.DateDir.Date" placeholder="Fecha">
          <input type="text" v-model="Model.DateDir.Direction" placeholder="Dirección">
        </fieldset>
        <input type="submit" value="Generar" />
      </form>
    </div>
    <div class="promotional-banner" id="meetup-banner">
      <speaker :model="Model.Speaker1" :position="'left'"></speaker>
      <speaker :model="Model.Speaker2" :position="'right'"  v-if="Model.Speaker2.Active"></speaker>
      <date-direction :model="Model.DateDir"></date-direction>
      <img class="logo" src="../assets/logo.png">
    </div>
    <div class="promotional-banner" id="social-banner">
      <speaker :model="Model.Speaker1" :position="'left'"></speaker>
      <speaker :model="Model.Speaker2" :position="'right'"  v-if="Model.Speaker2.Active"></speaker>
      <social-media></social-media>
      <img class="logo" src="../assets/logo.png">
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Model } from "vue-property-decorator";

import Speaker from "../components/Speaker.vue";
import SocialMedia from "../components/SocialMedia.vue";
import DateDirection from "../components/DateDirection.vue";

import { MeetupBannerModel } from "../models/MeetupBanner";
import { SpeakerModel } from "../models/Speaker";

import * as domtoimage from 'dom-to-image';

@Component({
  components: {
    "speaker": Speaker,
    "social-media": SocialMedia,
    "date-direction": DateDirection,
  },
})
export default class MeetupBanner extends Vue {
  private Model: MeetupBannerModel;

  constructor() {
    super();
    this.Model = new MeetupBannerModel();
  }

  public toggleSpeaker2Active() {
    this.Model.Speaker2.Active = !this.Model.Speaker2.Active;
  }

  public getFileSpeaker1(event: any) {
    this.getFile(event, this.Model.Speaker1);
  }

  public getFileSpeaker2(event: any) {
    this.getFile(event, this.Model.Speaker2);
  }

  public getFile(event: any, speaker: SpeakerModel) {
    const file = event.target.files[0];

    if (!file || !file.type.match("image.*")) {
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e: any) => speaker.Photo = e.target.result;
  }

  public generateBanners() {
    domtoimage
      .toJpeg(document.getElementById("meetup-banner"))
      .then((dataUrl: any) => {
        const link = document.createElement("a");
        link.download = "meetup-banner.jpeg";
        link.href = dataUrl;
        link.click();
      })
      .catch(console.error);
    domtoimage
      .toJpeg(document.getElementById("social-banner"))
      .then((dataUrl: any) => {
        const link = document.createElement("a");
        link.download = "social-banner.jpeg";
        link.href = dataUrl;
        link.click();
      })
      .catch(console.error);
  }
}
</script>


<style scoped lang="scss">
.promotional-banner {
  width: 600px;
  height: 338px;
  background-image: url(../assets/bg.png);
  background-repeat: round;
  position: relative;

  .logo {
    position: absolute;
    bottom: 5px;
    right: 5px;
    width: 100px;
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