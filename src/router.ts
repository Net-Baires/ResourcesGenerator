import Vue from "vue";
import Router from "vue-router";
import MeetupBanner from "./views/MeetupBanner.vue";
import SpeakerCard from "./views/SpeakerCard.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Meetup Banners",
      component: MeetupBanner,
    },
    {
      path: "/speakercard",
      name: "Speaker Card",
      component: SpeakerCard,
    },
  ],
});
