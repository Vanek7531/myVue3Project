import type { navMenuInt } from "@/interfaces/intMainApp";
import router from "@/router";
import { useRoute } from "vue-router";

export const useApp = () => {
	const route = useRoute();
  const navMenu: navMenuInt[] = [
    {
      route: "/",
      name: "главная",
    },
    {
      route: "article",
      name: "статьи",
    },
    {
      route: "questions",
      name: "вопросы",
    },
    {
      route: "specialists",
      name: "специалисты",
    },
  ];

  const activeClass = (item: any) => {
    if (item.name === "главная") return;
    if (route) {
			let a = String(route.name)
      return a.includes(`${item.route}`) ? "active" : "";
    }
  };

  const headerBtns = ["выбрать тариф", "задать вопрос", "написать пост"];
  return { navMenu, headerBtns, activeClass };
};
