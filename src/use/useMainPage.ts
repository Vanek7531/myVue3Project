// import { ref } from "vue";
import httpService from "@/api/server";
// import { type allArticlesInt } from "../interfaces/intMainApp";
import { type Ref, ref, computed } from "vue";
import router from "@/router";
import { useRoute } from "vue-router";

import {
  type allQuestionsInt,
  type allArticlesInt,
} from "@/interfaces/intMainApp";

export const inputSearchValue = ref("");

export const useMain = () => {
  const route = useRoute();
  const words = ref([
    "Арбитраж",
    "Банкротство",
    "Гос.поддержка",
    "Земля",
    "Финансирование",
    "Автоущерб/ГИБДД",
    "Имущество",
    // "арбитраж",
    // "банкротство",
    // "бюджет",
    // "налоги",
    // "финансирование",
    // "ЖКХ/ТСЖ",
    // "арбитраж",
    // "автоущерб/ГИБДД",
    // "земля",
    // "банкротство",
    // "бюджет",
    // "ЖКХ/ТСЖ",
    // "налоги",
    // "бюджет",
    // "налоги",
    // "финансирование",
    // "ЖКХ/ТСЖ",
    // "арбитраж",
    // "автоущерб/ГИБДД",
    // "земля",
  ]);

  const questions = [
    {
      fio: "Владислав Cтепанович Елисейь",
      text: "Здравствуйте, я пенсионер имею ли я право ездит в пригородных электричках бесплатно? (больше никаких льгот ",
      like: 5,
      disLike: 7,
      comment: 125,
      hearts: 5,
      date: "21.03.2023",
    },
    {
      fio: "Владислав Cтепанович Елисейь",
      text: "Здравствуйте, я пенсионер имею ли я право ездит в пригородных электричках бесплатно? (больше никаких льгот ",
      like: 5,
      disLike: 7,
      comment: 125,
      hearts: 5,
      date: "21.03.2023",
    },
    {
      fio: "Владислав Cтепанович Елисейь",
      text: "Здравствуйте, я пенсионер имею ли я право ездит в пригородных электричках бесплатно? (больше никаких льгот ",
      like: 5,
      disLike: 7,
      comment: 125,
      hearts: 5,
      date: "21.03.2023",
    },
    {
      fio: "Владислав Cтепанович Елисейь",
      text: "Здравствуйте, я пенсионер имею ли я право ездит в пригородных электричках бесплатно? (больше никаких льгот ",
      like: 5,
      disLike: 7,
      comment: 125,
      hearts: 5,
      date: "21.03.2023",
    },
    {
      fio: "Владислав Cтепанович Елисейь",
      text: "Здравствуйте, я пенсионер имею ли я право ездит в пригородных электричках бесплатно? (больше никаких льгот ",
      like: 5,
      disLike: 7,
      comment: 125,
      hearts: 5,
      date: "21.03.2023",
    },
    {
      fio: "Владислав Cтепанович Елисейь",
      text: "Здравствуйте, я пенсионер имею ли я право ездит в пригородных электричках бесплатно? (больше никаких льгот ",
      like: 5,
      disLike: 7,
      comment: 125,
      hearts: 5,
      date: "21.03.2023",
    },
    {
      fio: "Владислав Cтепанович Елисейь",
      text: "Здравствуйте, я пенсионер имею ли я право ездит в пригородных электричках бесплатно? (больше никаких льгот ",
      like: 5,
      disLike: 7,
      comment: 125,
      hearts: 5,
      date: "21.03.2023",
    },
    {
      fio: "Владислав Cтепанович Елисейь",
      text: "Здравствуйте, я пенсионер имею ли я право ездит в пригородных электричках бесплатно? (больше никаких льгот ",
      like: 5,
      disLike: 7,
      comment: 125,
      hearts: 5,
      date: "21.03.2023",
    },
    {
      fio: "Владислав Cтепанович Елисейь",
      text: "Здравствуйте, я пенсионер имею ли я право ездит в пригородных электричках бесплатно? (больше никаких льгот ",
      like: 5,
      disLike: 7,
      comment: 125,
      hearts: 5,
      date: "21.03.2023",
    },
    {
      fio: "Владислав Cтепанович Елисейь",
      text: "Здравствуйте, я пенсионер имею ли я право ездит в пригородных электричках бесплатно? (больше никаких льгот ",
      like: 5,
      disLike: 7,
      comment: 125,
      hearts: 5,
      date: "21.03.2023",
    },
    {
      fio: "Владислав Cтепанович Елисейь",
      text: "Здравствуйте, я пенсионер имею ли я право ездит в пригородных электричках бесплатно? (больше никаких льгот ",
      like: 5,
      disLike: 7,
      comment: 125,
      hearts: 5,
      date: "21.03.2023",
    },
    {
      fio: "Владислав Cтепанович Елисейь",
      text: "Здравствуйте, я пенсионер имею ли я право ездит в пригородных электричках бесплатно? (больше никаких льгот ",
      like: 5,
      disLike: 7,
      comment: 125,
      hearts: 5,
      date: "21.03.2023",
    },
    {
      fio: "Владислав Cтепанович Елисейь",
      text: "Здравствуйте, я пенсионер имею ли я право ездит в пригородных электричках бесплатно? (больше никаких льгот ",
      like: 5,
      disLike: 7,
      comment: 125,
      hearts: 5,
      date: "21.03.2023",
    },
    {
      fio: "Владислав Cтепанович Елисейь",
      text: "Здравствуйте, я пенсионер имею ли я право ездит в пригородных электричках бесплатно? (больше никаких льгот ",
      like: 5,
      disLike: 7,
      comment: 125,
      hearts: 5,
      date: "21.03.2023",
    },
    {
      fio: "Владислав Cтепанович Елисейь",
      text: "Здравствуйте, я пенсионер имею ли я право ездит в пригородных электричках бесплатно? (больше никаких льгот ",
      like: 5,
      disLike: 7,
      comment: 125,
      hearts: 5,
      date: "21.03.2023",
    },
    {
      fio: "Владислав Cтепанович Елисейь",
      text: "Здравствуйте, я пенсионер имею ли я право ездит в пригородных электричках бесплатно? (больше никаких льгот ",
      like: 5,
      disLike: 7,
      comment: 125,
      hearts: 5,
      date: "21.03.2023",
    },
    {
      fio: "Владислав Cтепанович Елисейь",
      text: "Здравствуйте, я пенсионер имею ли я право ездит в пригородных электричках бесплатно? (больше никаких льгот ",
      like: 5,
      disLike: 7,
      comment: 125,
      hearts: 5,
      date: "21.03.2023",
    },
    {
      fio: "Владислав Cтепанович Елисейь",
      text: "Здравствуйте, я пенсионер имею ли я право ездит в пригородных электричках бесплатно? (больше никаких льгот ",
      like: 5,
      disLike: 7,
      comment: 125,
      hearts: 5,
      date: "21.03.2023",
    },
  ];
  const specialists = [
    {
      fio: "Александр Станиславович Малютин",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et...",
      like: 8,
      disLike: 3,
      hearts: 11,
    },
    {
      fio: "Александр Станиславович Малютин",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et...",
      like: 8,
      disLike: 3,
      hearts: 11,
    },
    {
      fio: "Александр Станиславович Малютин",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et...",
      like: 8,
      disLike: 3,
      hearts: 11,
    },
    {
      fio: "Александр Станиславович Малютин",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et...",
      like: 8,
      disLike: 3,
      hearts: 11,
    },
    {
      fio: "Александр Станиславович Малютин",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et...",
      like: 8,
      disLike: 3,
      hearts: 11,
    },
    {
      fio: "Александр Станиславович Малютин",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et...",
      like: 8,
      disLike: 3,
      hearts: 11,
    },
    {
      fio: "Александр Станиславович Малютин",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et...",
      like: 8,
      disLike: 3,
      hearts: 11,
    },
    {
      fio: "Александр Станиславович Малютин",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et...",
      like: 8,
      disLike: 3,
      hearts: 11,
    },
    {
      fio: "Александр Станиславович Малютин",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et...",
      like: 8,
      disLike: 3,
      hearts: 11,
    },
    {
      fio: "Александр Станиславович Малютин",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et...",
      like: 8,
      disLike: 3,
      hearts: 11,
    },
    {
      fio: "Александр Станиславович Малютин",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et...",
      like: 8,
      disLike: 3,
      hearts: 11,
    },
    {
      fio: "Александр Станиславович Малютин",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et...",
      like: 8,
      disLike: 3,
      hearts: 11,
    },
    {
      fio: "Александр Станиславович Малютин",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et...",
      like: 8,
      disLike: 3,
      hearts: 11,
    },
    {
      fio: "Александр Станиславович Малютин",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et...",
      like: 8,
      disLike: 3,
      hearts: 11,
    },
    {
      fio: "Александр Станиславович Малютин",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et...",
      like: 8,
      disLike: 3,
      hearts: 11,
    },
    {
      fio: "Александр Станиславович Малютин",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et...",
      like: 8,
      disLike: 3,
      hearts: 11,
    },
    {
      fio: "Александр Станиславович Малютин",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et...",
      like: 8,
      disLike: 3,
      hearts: 11,
    },
    {
      fio: "Александр Станиславович Малютин",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et...",
      like: 8,
      disLike: 3,
      hearts: 11,
    },
    {
      fio: "Александр Станиславович Малютин",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et...",
      like: 8,
      disLike: 3,
      hearts: 11,
    },
    {
      fio: "Александр Станиславович Малютин",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et...",
      like: 8,
      disLike: 3,
      hearts: 11,
    },
    {
      fio: "Александр Станиславович Малютин",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et...",
      like: 8,
      disLike: 3,
      hearts: 11,
    },
    {
      fio: "Александр Станиславович Малютин",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et...",
      like: 8,
      disLike: 3,
      hearts: 11,
    },
  ];

  const articles = [
    {
      text: "Новое в правоведении, банкротство, налогах, финансах",
      size: {
        width: 2,
        height: 2,
      },
    },
    {
      text: "Новое в правоведении, банкротство, налогах, финансах",
      size: {
        width: 1,
        height: 2,
      },
    },
    {
      text: "Новое в правоведении, банкротство, налогах, финансах",
      size: {
        width: 1,
        height: 1,
      },
    },
    {
      text: "Новое в правоведении, банкротство, налогах, финансах",
      size: {
        width: 1,
        height: 1,
      },
    },
    {
      text: "Новое в правоведении, банкротство, налогах, финансах",
      size: {
        width: 1,
        height: 1,
      },
    },
    {
      text: "Новое в правоведении, банкротство, налогах, финансах",
      size: {
        width: 1,
        height: 2,
      },
    },
    {
      text: "Новое в правоведении, банкротство, налогах, финансах",
      size: {
        width: 2,
        height: 2,
      },
    },
    {
      text: "Новое в правоведении, банкротство, налогах, финансах",
      size: {
        width: 3,
        height: 1,
      },
    },
  ];

  const gridSize = (articleSize: any) => {
    return articleSize.width === 2 && articleSize.height === 2
      ? "two-by-two"
      : articleSize.width === 1 && articleSize.height === 2
      ? "two-by-one"
      : articleSize.width === 3 && articleSize.height === 1
      ? "three-by-one"
      : "one-by-one";
  };

  const targetInput = (value: string) => {
    console.log("value", value);
    inputSearchValue.value = value;
  };

  const goTo = (item: any) => {
    console.log("item", item);
    let type;
    if (route.fullPath === "/") {
      console.log("item.full_description", !!item.full_description);
			
      if (!!item.full_description) type = "article";
      else if (!!item.description) type = "digest";
      else if (!!item.question_text) type = "question";
      else type = "specialists";
    } else {
      let types = ["specialists", "article", "digest", "question"];
      type = types.find((el) => route.fullPath.includes(el));
    }

    router.push(`/${type}/${item.slug}`);
  };

  const searchResults = ref();

  const searchAll = async () => {
    let types = ["answer", "article", "digest", "question", "specialist"];
    let type = types.find((el) => route.fullPath.includes(el));
    type = type ? (type == "specialist" ? "users" : type + "s") : "all";
    try {
      const { data } = await httpService.get(
        `/search/${type}/${inputSearchValue.value}`
      );
      if (type !== "all") {
        if (data.results.length > 0) {
          searchResults.value = data.results;
        } else {
          searchResults.value = "Ничего не найдено";
        }
      } else {
        let searchesRes = [];
        for (var key of Object.keys(data)) {
          if (data[key].length >= 1) {
            searchesRes.push(data[key].length);
          }
        }
        if (searchesRes.length > 0) {
          // есть реузультат поиска
          searchResults.value = Object.values(data).flat(1);
        } else {
          // ничего нету
          searchResults.value = "Ничего не найдено";
        }
      }
      // else {
      // 	searchResults.value.map(el=>{
      // 		console.log('el',el);
      // 	})
      // 	searchResults.value = []
      // }
    } catch (error) {
      searchResults.value = "Ошибка, что-то пошло не так...";
      console.log(error);
    }
  };

  return {
    inputSearchValue,
    words,
    targetInput,
    questions,
    specialists,
    articles,
    gridSize,
    searchAll,
    searchResults,
    goTo,
  };
};

const itemsColor = [
  {
    color: "#1D9B22",
  },
  {
    color: "#3159A6",
  },
  {
    color: "#A63131",
  },
  {
    color: "#6D15A3",
  },
  {
    color: "#4B73DB",
  },
  {
    color: "#B148AC",
  },
];
export const useQuestions = () => {
  const open = ref(false);

  const allQuestions: Ref<allQuestionsInt[] | []> = ref([]);

  const refAllQuestions: Ref<allQuestionsInt[] | [] | string> = computed(() => {
    if (allQuestions.value?.length > 0 && inputSearchValue.value?.length > 0) {
      let searchRes = allQuestions.value.filter((el: any) =>
        el.question_text.includes(inputSearchValue.value)
      );
      return searchRes.length > 0 ? searchRes : "Совпадений нету";
    }
    if (allQuestions.value?.length > 0 && inputSearchValue.value?.length <= 0) {
      return allQuestions.value;
    } else return [];
  });
  const getQuestions = async () => {
    try {
      const { data } = await httpService.get("/api/questions/");
      allQuestions.value = data.results;
    } catch (error) {
      console.log(error);
    }
  };

  return { getQuestions, allQuestions, open, itemsColor, refAllQuestions };
};

// export const useArticles = () => {
// 	const open = ref(false);

//   const allArticles: Ref<allArticlesInt[]| []> = ref([]);

//   const getArticles = async () => {
//     try {
//       const { data } = await httpService.get("/api/articles/");
//       allArticles.value = data.results;
// 			console.log('allArticles.value',allArticles.value.filter(el => el.status !== 'published'));
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   return { getArticles, allArticles, open, itemsColor };

// }
