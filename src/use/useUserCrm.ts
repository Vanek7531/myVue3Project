import { computed, defineAsyncComponent, ref } from "vue";
import httpService from "@/api/server";
export const comp = ref();
export const activeTab = ref();
export const editedArticle = ref();
export const statusNewTask = ref("");
export const currentComp = ref("allTasks");
export const toWork = ref();
export const atWork = ref();
export const ready = ref();
export const isLoadArticle = ref(false);

export const userCrm = () => {
  const categories = [
    {
      name: "доска",
      comp: "userCrmBoard",
    },
    {
      name: "мои задачи",
      comp: "userCrmTasks",
    },
    {
      name: "написать статью",
      comp: "userCrmNewArticle",
    },
    {
      name: "мои статьи",
      comp: "userCrmMyArticles",
    },
    {
      name: "мои рекомендации",
      comp: "userCrmMyAdvisory",
    },
    {
      name: "избранное",
      comp: "userCrmMyFavourites",
    },
    {
      name: "тарифы",
      comp: "userCrmRates",
    },
    {
      name: "мои документы",
      comp: "userCrmMyDocuments",
    },
    {
      name: "мои анкеты",
      comp: "userCrmMyForm",
    },
    {
      name: "мои вопросы",
      comp: "userCrmMyQuestions",
    },
    {
      name: "входящие",
      comp: "userCrmIncoming",
    },
    {
      name: "черновики",
      comp: "userCrmDrafts",
    },
    {
      name: "отправленные",
      comp: "userCrmSent",
    },
    {
      name: "архив",
      comp: "userCrmArchive",
    },
    {
      name: "удаленные",
      comp: "userCrmDeleted",
    },
  ];

  const getArticle = async (slug: string | string[]) => {
    isLoadArticle.value = true;
    try {
      const { data } = await httpService.get(`/api/articles/${slug}`);
      editedArticle.value = data;
      isLoadArticle.value = false;
    } catch (error) {
      console.log(error);
    }
  };
  const deletedImg = async (id: any) => {
    let formData = new FormData();
    formData.append("deleted_images", `[${id}]`);
    try {
      const { data } = await httpService.patch(
        `/api/articles/${editedArticle.value.slug}/`,
        formData
      );
      editedArticle.value = data;
    } catch (error) {
      console.log(error);
    }
  };

  const swapComp = (item: string) => {
    activeTab.value = item;
    comp.value = defineAsyncComponent(
      () => import(`@/components/userCrm/${item}.vue`)
    );
    // return import(`@/components/userAccount/${item}.vue`)
  };

  const activeClass = (item: any) => {
    if (activeTab.value) {
      return activeTab.value.includes(`${item}`) ? "active" : "";
    }
  };

  // Задачи
  const userTasks = ref();
  const newTask = ref({
    name: "",
    descrition: "",
    status: "Ready",
  });

  // to_work = 'To work'
  // at_work = 'At work'
  // is_ready = 'Ready'

  const getTasks = async () => {
    try {
      const { data } = await httpService.get(`/api/tasks/`);
      userTasks.value = data;

      atWork.value = userTasks.value.filter(
        (el: any) => el.status === "At work"
      );

      toWork.value = userTasks.value.filter(
        (el: any) => el.status === "To work"
      );
      ready.value = userTasks.value.filter((el: any) => el.status === "Ready");
    } catch (error) {
      console.log(error);
    }
  };

  const changeTaskStatus = async (id: number, status: string) => {
    try {
      await httpService.patch(`/api/tasks/${id}/`, {
        status: `${status}`,
      });
      getTasks();
    } catch (error) {
      console.log(error);
    }
  };
  const changeTask = async (task: any) => {
    try {
      const { data } = await httpService.patch(`/api/tasks/${task.id}/`, {
        status: `${task.status}`,
        descrition: `${task.descrition}`,
        name: `${task.name}`,
      });
      getTasks();
      currentComp.value = "allTasks";
    } catch (error) {
      console.log(error);
    }
  };

  const createNewTask = async () => {
    try {
      await httpService.post(`/api/tasks/`, {
        name: newTask.value.name,
        descrition: newTask.value.descrition,
        status: statusNewTask.value,
      });
      getTasks();
      currentComp.value = "allTasks";
    } catch (error) {
      console.log(error);
    }
  };

  return {
    categories,
    swapComp,
    activeTab,
    comp,
    activeClass,
    editedArticle,
    getArticle,
    deletedImg,
    userTasks,
    getTasks,
    newTask,
    createNewTask,
    toWork,
    atWork,
    ready,
    changeTaskStatus,
    statusNewTask,
    currentComp,
    changeTask,
    isLoadArticle,
  };
};
