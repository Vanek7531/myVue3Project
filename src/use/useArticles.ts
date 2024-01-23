import httpService from "@/api/server";
import { userMe } from "@/use/useUserAccount";
import { type allArticlesInt } from "../interfaces/intMainApp";
import { type Ref, ref, computed, onMounted } from "vue";
import router from "@/router";
import { Notify } from "quasar";
import type { allDigestsInt } from "@/interfaces/intMainApp";
import { inputSearchValue } from "./useMainPage";

// import { editedArticle } from "./useUserCrm";
export const article: any = ref();
export const openComentAnswers = ref(false);

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
const goTo = (slug: string, type = "article") => {
  router.push(`/${type}/${slug}`);
};

export const useArticles = () => {
  const allArticles: Ref<allArticlesInt[] | []> = ref([]);
  const allUserArticles = ref();

  const a: Ref<[]> = ref([]);

  const open = ref(false);

  const refAllArticles: Ref<allArticlesInt[] | [] | string> = computed(() => {
    if (allArticles.value?.length > 0 && inputSearchValue.value?.length > 0) {
      let searchRes = allArticles.value.filter((el: any) =>
        el.short_description.includes(inputSearchValue.value)
      );
      return searchRes.length > 0 ? searchRes : "Совпадений нету";
    }
    if (allArticles.value?.length > 0 && inputSearchValue.value?.length <= 0) {
      return allArticles.value;
    } else return [];
  });

  const getArticles = async () => {
    try {
      const { data } = await httpService.get("/api/articles/");
      allArticles.value = data.results;
    } catch (error: any) {
      console.log(error);
    }
  };
  const getUserArticles = async () => {
    console.log("here?", userMe.value.user.id);
    try {
      // userMe.value.user.id
      const { data } = await httpService.get(
        `/api/articles/?author__id=${userMe.value.user.id}`
      );
      console.log("data", data);
      allUserArticles.value = data.results;
    } catch (error) {
      console.log(error);
    }
  };

  // const goTo = (slug: string) => {
  //   router.push(`/article/${slug}`);
  // };

  return {
    itemsColor,
    goTo,
    getArticles,
    allArticles,
    open,
    getUserArticles,
    refAllArticles,
    allUserArticles,
  };
};

const showNotif = (msg = "Вы уже оставляли такую оценку!") => {
  Notify.create({
    message: `${msg}`,
    color: "blue",
    position: "bottom-right",
  });
};
export const useArticle = () => {
  const commentText = ref("");
  const commentArticleText = ref("");
  const showInput = ref(false);
  const isCnangeComment = ref(false);
  const articleInputText = ref("");

  const stages = [
    {
      id: 0,
      thresholdPoints: 0,
    },
    {
      id: 1,
      thresholdPoints: 1,
    },
    {
      id: 2,
      thresholdPoints: 2,
    },
    {
      id: 3,
      thresholdPoints: 3,
    },
    {
      id: 4,
      thresholdPoints: 4,
    },
  ];
  const rating = ref(0);
  const isRated = ref(false);
  const message = ref("");
  const imagesFiles = ref();
  const localStoreRatInfo: Ref<any[]> = ref([]);

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

  const backgroundStar = (holdPoints: any) => {
    return rating.value - 1 >= holdPoints ? "#FFC702" : "none";
  };

  const chooseRating = async (id: number) => {
    // article/его id/add_rating/
    try {
      const data = await httpService.post(
        `api/rating/article/${article.value.id}/add_rating/`,
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
      return article.value.rating;
    }
  };

  const rateArticle = async (type: string) => {
    let formData = new FormData();
    let id = article.value[type];
    // console.log("id", id);
    // formData.append(`${type}`, `${id + 1}`);
    // console.log("?", userMe.value.user.id);

    let itIslike = type === "like" ? true : false;

    let addLocalLikeInfo = {
      userId: userMe.value.user.id,
      articleId: article.value.id,
      like: itIslike,
      dislike: !itIslike,
    };

    const findCurrentElInLocalStore = localStoreRatInfo.value.find(
      (el) =>
        el.userId === userMe.value.user.id && el.articleId === article.value.id
    );
    console.log("findCurrentElInLocalStore", findCurrentElInLocalStore);
    if (!findCurrentElInLocalStore) {
      // Этот пользователь не оставлял оценку на этой статье
      console.log("Этот пользователь не оставлял оценку на этой статье");
      formData.append(`${type}`, `${id + 1}`);
      localStoreRatInfo.value.push(addLocalLikeInfo);
    } else {
      // Этот пользователь оставлял оценку на этой статье
      console.log("Этот пользователь оставлял оценку на этой статье");
      if (findCurrentElInLocalStore.like === true && type === "like") {
        // if()
        console.log("ЕСЛИ ЛАЙКНУЛ ПОВТОРНО!");
        showNotif();
        // alert("вы уже лайкали это");
        return;
      }
      if (findCurrentElInLocalStore.dislike === true && type === "dislike") {
        showNotif();
        return;
      } else {
        console.log("Меняем оценку одну на другую");
        if (type == "like") {
          formData.append(`${type}`, `${id + 1}`);
          formData.append(`${"dislike"}`, `${article.value["dislike"] - 1}`);
        } else {
          formData.append(`${type}`, `${id + 1}`);
          formData.append(`${"like"}`, `${article.value["like"] - 1}`);
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
        `/api/articles/${article.value.slug}/`,
        formData
      );
      article.value = data;
      console.log("data", data);
    } catch (er) {
      console.log("er", er);
    }
  };

  const deletedImg = async (id: any) => {
    let formData = new FormData();
    formData.append("deleted_images", `[${id}]`);
    try {
      const { data } = await httpService.patch(
        `/api/articles/${article.value.slug}/`,
        formData
      );
      article.value = data;
      console.log("data", data);
    } catch (error) {
      console.log(error);
    }
  };
  const addImg = async () => {
    let formData = new FormData();
    const files = imagesFiles.value.files;
    if (files) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        formData.append("images", file); // Добавляем каждый файл в FormData
      }
    }

    try {
      const { data } = await httpService.patch(
        `/api/articles/${article.value.slug}/`,
        formData
      );
      console.log("data", data);
      article.value = data;
      imagesFiles.value.files = [];
    } catch (error) {
      console.log(error);
    }
  };

  const getArticle = async (slug: string | string[]) => {
    try {
      const { data } = await httpService.get(`/api/articles/${slug}`);
      article.value = data;
      rating.value = article.value.rating;
    } catch (error: any) {
      console.log(error);
      if (error?.response?.data?.detail.includes("не найдена")) {
        showNotif("Статья не найденна");
        router.push(`/articles/`);
      }
    }
  };

  const addArticel = async (article: any) => {
    let formData = new FormData();
    console.log("imagesFiles.value", imagesFiles.value);
    const files = imagesFiles.value.files;
    if (files) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        formData.append("images", file); // Добавляем каждый файл в FormData
      }
    }
    formData.append("author", article.author);
    formData.append("title", article.title);
    formData.append("full_description", article.full_description);
    formData.append("short_description", article.short_description);
    formData.append("category", "9");
    try {
      const { data } = await httpService.post(
        `/api/articles/`,
        // {
        //   article,
        // }
        formData
      );
      article.value = data;
      console.log("data", data);
    } catch (er) {
      console.log("er", er);
    }
  };

  const editArticle = async (article: any) => {
    console.log("article", article);
    let formData = new FormData();
    console.log("imagesFiles.value", imagesFiles.value);
    const files = imagesFiles.value.files;
    if (files) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        formData.append("images", file); // Добавляем каждый файл в FormData
      }
    }
    formData.append("author", article.author);
    formData.append("title", article.title);
    formData.append("full_description", article.full_description);
    formData.append("short_description", article.short_description);
    formData.append("category", "9");
    try {
      const { data } = await httpService.patch(
        `/api/articles/${article.slug}/`,
        // {
        //   article,
        // }
        formData
      );
      article.value = data;
      showNotif("Статья успешно обновленна!");
    } catch (er) {
      console.log("er", er);
    }
  };
  const chooseCurrentComment = (comment: any, change = false) => {
    commentText.value = "";
    commentArticleText.value = "";
    if (change) {
      isCnangeComment.value = true;
      // if (!comment.parent) {
      //   commentArticleText.value = comment.content;
      // } else {
      //   commentText.value = comment.content;
      // }
      console.log("?");
    } else {
      isCnangeComment.value = false;
    }

    if (currentComment.value && currentComment.value.id === comment.id) {
      showInput.value = !showInput.value;
      return;
    }
    showInput.value = true;
    currentComment.value = comment;
  };
  const currentComment = ref();
  const sendComment = async (isParent: boolean = false) => {
    let formData = new FormData();
    if (isParent) {
      formData.append("content", commentArticleText.value);
      formData.append("content_type", "11");
      formData.append("object_id", article.value.id);
    } else {
      formData.append("parent", currentComment.value.id);
      formData.append("content", commentText.value);
      formData.append("content_type", currentComment.value.content_type);
      formData.append("object_id", currentComment.value.object_id);
    }
    try {
      const { data } = await httpService.post(
        `/api/comments/`,
        // {
        //   article,
        // }
        formData
      );
      getArticle(article.value.slug);
      // openComentAnswers.value = true;
    } catch (error: any) {
      console.log("er", error);
      console.log("era", typeof error);
      if (error && error.response.data.error.includes("limit")) {
        console.log("Лимитик");
        Notify.create({
          message: `Достигнут лимит уровня оставляемых комментариев!`,
          type: "negative",
          position: "bottom-right",
        });
      }
    } finally {
      commentArticleText.value = "";
      commentText.value = "";
      currentComment.value = "";
      showInput.value = false;
    }
  };
  const changeComment = async () => {
    let formData = new FormData();
    // formData.append("parent", currentComment.value.id);
    formData.append("content", commentText.value);
    formData.append("content_type", currentComment.value.content_type);
    formData.append("object_id", currentComment.value.object_id);
    try {
      const { data } = await httpService.patch(
        `/api/comments/${currentComment.value.id}/`,
        formData
      );
      getArticle(article.value.slug);
      // openComentAnswers.value = true;
    } catch (error: any) {
      console.log("er", error);
    } finally {
      commentArticleText.value = "";
      commentText.value = "";
      currentComment.value = "";
      showInput.value = false;
    }
  };
  const delCurrentComment = async (id: number) => {
    try {
      const { data } = await httpService.delete(`/api/comments/${id}`);
      getArticle(article.value.slug);
      console.log("data", data);
    } catch (er) {
      console.log("er", er);
    }
  };

  return {
    itemsColor,
    article,
    articleInputText,
    getArticle,
    rating,
    stages,
    chooseRating,
    backgroundStar,
    isRated,
    message,
    addImg,
    imagesFiles,
    rateArticle,
    deletedImg,
    addArticel,
    showInput,
    sendComment,
    editArticle,
    commentText,
    chooseCurrentComment,
    currentComment,
    delCurrentComment,
    commentArticleText,
    openComentAnswers,
    isCnangeComment,
    changeComment,
  };
};

export const useDigest = () => {
  const allDigests: Ref<allDigestsInt[] | []> = ref([]);

  const refAllDigests: Ref<allDigestsInt[] | [] | string> = computed(() => {
    if (allDigests.value?.length > 0 && inputSearchValue.value?.length > 0) {
      let searchRes = allDigests.value.filter((el: any) =>
        el.title.includes(inputSearchValue.value)
      );
      return searchRes.length > 0 ? searchRes : "Совпадений нету";
    }
    if (allDigests.value?.length > 0 && inputSearchValue.value?.length <= 0) {
      return allDigests.value;
    } else return [];
  });

  const getDigests = async () => {
    try {
      const { data } = await httpService.get("/api/digests/");
      allDigests.value = data.results;
    } catch (error) {
      console.log(error);
    }
  };
  const digest: any = ref();
  const getDigest = async (slug: string | string[]) => {
    try {
      const { data } = await httpService.get(`/api/digests/${slug}`);
      digest.value = data;
    } catch (error: any) {
      console.log(error);
      if (error?.response?.data?.detail.includes("не найдена")) {
        showNotif("Статья не найденна");
        router.push(`/articles/`);
      }
    }
  };
  return {
    digest,
    allDigests,
    getDigests,
    getDigest,
    goTo,
    refAllDigests,
  };
};
