<template>
  <div class="social-media">
    <div>
      <span>
      <i class="fab fa-twitter fa-2x"></i>
      </span>
      <span>@NetBaires</span>
    </div>
    <div>
      <span>
        <i class="fab fa-slack-hash fa-2x"></i>
      </span>
      <span>slack.net-baires.com.ar</span>
    </div>
    <div>
      <span>
        <i class="fas fa-globe fa-2x"></i>
      </span>
      <span>net-baires.com.ar</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import { SpeakerModel } from "../models/Speaker";

@Component
export default class SocialMedia extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.social-media {
    position: absolute;
    bottom: 5px;
    left: 0px;
    width: 90%;
    text-align: center;
    font-family: "Roboto", sans-serif;
    color: black;
    font-weight: bold;

    div {
      display: inline-block;
      margin: 10px;

      span {
        display: block;
        margin: 5px;
      }
    }
  }
</style>
