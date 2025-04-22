import { createRouter, createWebHistory } from "vue-router";
import Landing from "./components/Landing.vue";
import PreSurvey from "./components/PreSurvey.vue";
import Treatment from "./components/Treatment.vue";
import Game from "./components/Game.vue";
import Article from "./components/Article.vue";
import PostSurvey from "./components/PostSurvey.vue";
import Thanks from "./components/Thanks.vue";

const routes = [
  { path: "/", component: Landing },
  { path: "/pre-survey/:pid", component: PreSurvey },
  { path: "/treatment/:pid", component: Treatment },
  { path: "/game/:pid", component: Game },
  { path: "/article/:pid", component: Article },
  { path: "/post-survey/:pid", component: PostSurvey },
  { path: "/thanks", component: Thanks },
];

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
