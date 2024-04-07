// Define routing rules
import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import AboutView from "../views/AboutView.vue"
import NotFoundView from "../views/404View.vue"
import ContactView from "../views/ContactView.vue"
import CarView from "../components/CarView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/home",
      redirect: "/"
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/:catchall(.*)*",
      name: "404View",
      component: NotFoundView
    },
    {
      path: "/cars/:id",
      name: "car",
      component: CarView,
      children: [
        {
          path: "contact",
          component: ContactView
        }
      ]
    }

  ]
})

export default router