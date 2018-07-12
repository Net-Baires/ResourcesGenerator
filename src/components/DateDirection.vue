<template>
  <div class="address">
        <p>
          <i class="far fa-calendar-alt fa-2x"></i>
          <i class="far fa-clock fa-2x"></i> 
          <i class="fas fa-map-marker-alt fa-2x"></i>
        </p>
        <p>
          {{ model.Date }}
        </p>
        <p>
          {{ model.Direction }}
        </p>
      </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import { DateDirectionModel } from "../models/DateDirection";

@Component
export default class DateDirection extends Vue {
  @Prop() private model!: DateDirectionModel;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.address {
    position: absolute;
    bottom: 5px;
    left: 0px;
    width: 100%;
    text-align: center;
    font-family: "Roboto", sans-serif;
    color: black;
    font-weight: bold;

    p {
      margin: 0px;
      margin-bottom: 5px;

      i {
        margin-left: 5px;
        margin-right: 5px;
      }
    }
  }
</style>
