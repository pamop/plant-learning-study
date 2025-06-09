import { createRouter, createWebHistory } from "vue-router";
import Landing from "./components/Landing.vue";
import PreSurvey from "./components/PreSurvey.vue";
import Treatment from "./components/Treatment.vue";
import Game from "./components/Game.vue";
import Article from "./components/Article.vue";
import PostSurvey from "./components/PostSurvey.vue";
import Thanks from "./components/Thanks.vue";

const routes = [
  { path: "/", name: "Landing", component: Landing },
  { path: "/pre-survey/:pid?", name: "PreSurvey", component: PreSurvey },
  { path: "/treatment/:pid?", name: "Treatment", component: Treatment },
  { path: "/game/:pid?", name: "Game", component: Game },
  { path: "/article/:pid?", name: "Article", component: Article },
  { path: "/post-survey/:pid?", name: "PostSurvey", component: PostSurvey },
  { path: "/thanks", name: "Thanks", component: Thanks },
];

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
