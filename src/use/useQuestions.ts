import httpService from "@/api/server";
import { type allArticlesInt } from "../interfaces/intMainApp";
import { type Ref, ref, onMounted } from "vue";
import router from "@/router";
import { useQuasar } from "quasar";

import { type allQuestionsInt } from "@/interfaces/intMainApp";
import { userMe } from "@/use/useUserAccount";

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

  const getQuestions = async () => {
    try {
      const { data } = await httpService.get("/api/questions/");
      allQuestions.value = data.results;
    } catch (error) {
      console.log(error);
    }
  };

  const openQuestion = (slug: string) => {
    router.push(`/question/${slug}`);
  };

  return { getQuestions, allQuestions, open, itemsColor, openQuestion };
};

export const useQuestion = () => {
  const $q = useQuasar();
  const showNotif = () => {
    $q.notify({
      message: `Вы уже оставляли такую оценку!`,
      color: "blue",
      position: "bottom-right",
    });
  };
  const question = ref();
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
  const localStoreRatInfo: Ref<any[]> = ref([]);
  const isRated = ref(false);
  const message = ref("");
  const questionInputText = ref("");
  const rating = ref(0);

  onMounted(() => {
    if (!localStorage.getItem("rateInfo")) {
      return;
    } else {
      let rateInfo = localStorage.getItem("rateInfo");
      if ((!localStorage && !rateInfo) || rateInfo == null) return;
      else {
        localStoreRatInfo.value = localStorage.getItem("rateInfo")
          ? JSON.parse(rateInfo)
          : [];
        // console.log("onMounted", localStoreRatInfo.value);
      }
    }
  });

  const chooseRating = async (id: number) => {
    // article/его id/add_rating/
    try {
      const data = await httpService.post(
        `api/rating/question/${question.value.id}/add_rating/`,
        {
          rating: id + 1,
        }
      );
      isRated.value = true;
      message.value = data.data.message;
      return (rating.value = id + 1);
    } catch (er: any) {
      if (er && er.response.data.message.includes("уже")) {
        isRated.value = true;
        message.value = er.response.data.message;
      }
      return question.value.rating;
    }
  };

  const rateArticle = async (type: string) => {
    let formData = new FormData();
    let id = question.value[type];

    let itIslike = type === "like" ? true : false;

    let addLocalLikeInfo = {
      userId: userMe.value.user.id,
      questionId: question.value.id,
      like: itIslike,
      dislike: !itIslike,
    };

    const findCurrentElInLocalStore = localStoreRatInfo.value.find(
      (el) =>
        el.userId === userMe.value.user.id &&
        el.questionId === question.value.id
    );
    if (!findCurrentElInLocalStore) {
      // Этот пользователь не оставлял оценку на этой статье
      formData.append(`${type}`, `${id + 1}`);
      localStoreRatInfo.value.push(addLocalLikeInfo);
    } else {
      // Этот пользователь оставлял оценку на этой статье
      if (findCurrentElInLocalStore.like === true && type === "like") {
        // if()
        showNotif();
        // alert("вы уже лайкали это");
        return;
      }
      if (findCurrentElInLocalStore.dislike === true && type === "dislike") {
        showNotif();
        return;
      } else {
        if (type == "like") {
          formData.append(`${type}`, `${id + 1}`);
          formData.append(`${"dislike"}`, `${question.value["dislike"] - 1}`);
        } else {
          formData.append(`${type}`, `${id + 1}`);
          formData.append(`${"like"}`, `${question.value["like"] - 1}`);
        }
        let index = localStoreRatInfo.value.indexOf(findCurrentElInLocalStore);
        if (index !== -1) {
          localStoreRatInfo.value[index] = addLocalLikeInfo;
        }
      }
    }

    localStorage.setItem("rateInfo", JSON.stringify(localStoreRatInfo.value));
    try {
      const { data } = await httpService.patch(
        `/api/questions/${question.value.slug}/`,
        formData
      );
      question.value = data;
    } catch (er) {
      console.log("er", er);
    }
  };

  const getQuestion = async (slug: string | string[]) => {
    try {
      const { data } = await httpService.get(`/api/questions/${slug}`);
      question.value = data;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    getQuestion,
    question,
    itemsColor,
    chooseRating,
    rateArticle,
    questionInputText,
  };
};
