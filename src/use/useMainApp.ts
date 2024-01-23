import type { navMenuInt } from "@/interfaces/intMainApp";
import router from "@/router";
import { computed, ref } from "vue";
import { useRoute } from "vue-router";

export const showQuestion = ref(false);
export const activaMainPageTab = ref("all");

export const useApp = () => {
  const route = useRoute();
  const navMenu: navMenuInt[] = [
    // {
    //   route: "/",
    //   name: "главная",
    // },
    {
      route: "/articles",
      name: "статьи",
    },
    {
      route: "/questions",
      name: "вопросы",
    },
    {
      route: "/specialists",
      name: "специалисты",
    },
  ];


  const activeClass = (item: any) => {
    // if (item.name === "главная") return;
    if (route) {
      let a = String(route.name);
      return a.includes(`${item.route.slice(1)}`) ? "active" : "";
    }
  };

  const headerBtns = ["выбрать тариф", "задать вопрос", "написать пост"];

  const isUser = computed(() => {
    return route.fullPath.includes("user");
  });

  return { navMenu, headerBtns, activeClass, isUser, activaMainPageTab };
};
