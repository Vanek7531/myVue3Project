import { computed, defineAsyncComponent, ref } from "vue";
import httpService from "@/api/server";
import router from "@/router";
import { downloadInNewTab, download, copyTextInbuffer } from "@/use/helper";
import { Notify, useQuasar } from "quasar";
import { socketIo } from "@/use/soketIo";

const { takeCloudSpaceInfo } = socketIo();

export const userMe = ref();
export const userCLoudFiles: any = ref();
export const comp = ref();
export const activeTab = ref("");
export const openActionsCloudFile = ref(false);
export const userCurrentTariff = ref();
export const openCreateFolder = ref(true);

export const useUser = () => {
  const getUserMe = async () => {
    try {
      const { data } = await httpService.get("/api/profile/me/");
      userMe.value = data;
      getUserTariff();
    } catch (error) {
      console.log(error);
    }
  };

  const user = {
    name: "Александр Станиславович Малютин",
    place: "Екатеринбург",
    // type: "default",
    type: "lawyer",
    tarif: {
      name: "good",
      city: 1,
      services: 2,
      form: 3,
      cloud: "10Gb",
    },
    rating: {
      position: 5,
      rate: 15,
      feedBack: 5,
    },
    messages: [
      {
        name: "Влад Евсеев",
        text: "Здравствуйте, я пенсионер имею ли я право ездит в пригородных электричках бесплатно?......",
      },
      {
        name: "Влад Евсеев",
        text: "Здравствуйте, я пенсионер имею ли я право ездит в пригородных электричках бесплатно?......",
      },
    ],
    searches: ["банкротство", "наследство", "банк", "бюджет", "долги"],
  };

  const advices = [
    {
      fio: "Владислав Cтепанович Елисейь",
      like: 5,
      disLike: 7,
      comment: 125,
      hearts: 5,
      post: "Юрист",
    },
    {
      fio: "Владислав Cтепанович Елисейь",
      like: 5,
      disLike: 7,
      comment: 125,
      hearts: 5,
      post: "Юрист",
    },
    {
      fio: "Владислав Cтепанович Елисейь",
      like: 5,
      disLike: 7,
      comment: 125,
      hearts: 5,
      post: "Юрист",
    },
  ];

  const isLawyer = computed(() => {
    // return false
    if (!userMe.value) return;
    return userMe.value.user.role === "Specialist" ? true : false;
  });

  const categories = computed(() => {
    return isLawyer.value
      ? [
          {
            name: "Основное",
            comp: "UserAllBase",
          },
          {
            name: "Город",
            comp: "UserAllCity",
          },
          {
            name: "Организационная форма",
            comp: "UserAllForm",
          },
          {
            name: "Услуги",
            comp: "UserAllServices",
          },
          {
            name: "Стаж",
            comp: "UserAllExperience",
          },
          {
            name: "Облако",
            comp: "UserAllCloud",
          },
          {
            name: "Безопасность",
            comp: "UserAllSafety",
          },
          {
            name: "Уведомления",
            comp: "UserAllAlert",
          },
          {
            name: "Платежи",
            comp: "UserAllPayment",
          },
        ]
      : [
          {
            name: "Основное",
            comp: "UserAllBase",
          },
          {
            name: "Мои рекомендации",
            comp: "UserAllAdvice",
          },
          {
            name: "Мое избранное",
            comp: "UserAllFavourites",
          },
          {
            name: "Мои вопросы",
            comp: "UserAllQuestions",
          },
          {
            name: "Безопасность",
            comp: "UserAllSafety",
          },
          {
            name: "Уведомления",
            comp: "UserAllAlert",
          },
          {
            name: "Платежи",
            comp: "UserAllPayment",
          },
        ];
  });

  const activeClass = (item: any) => {
    if (activeTab.value) {
      return activeTab.value.includes(`${item}`) ? "active" : "";
    }
  };

  const swapComp = (item: string) => {
    activeTab.value = item;
    router.push(`/userAccount/${item}`);

    // comp.value = defineAsyncComponent(
    //   () => import(`@/components/userAccount/${item}.vue`)
    // );
    // return import(`@/components/userAccount/${item}.vue`)
  };

  const goOnTatiffs = () => {
    router.push("/userAccount/UserAllTariffs");
    // setTimeout(() => {
    //   swapComp("UserAllTariffs");
    // }, 500);
  };

  const questions = [
    {
      fio: "Владислав Cтепанович Елисейь",
      text: "Здравствуйте, я пенсионер имею ли я право ездит в пригородных электричках бесплатно? (больше никаких льгот , как мне быть и куда обращаться теперь?",
      like: 5,
      disLike: 7,
      comment: 125,
      hearts: 5,
      date: "21.03.2023",
    },
    {
      fio: "Владислав Cтепанович Елисейь",
      text: "Здравствуйте, я пенсионер имею ли я право ездит в пригородных электричках бесплатно? (больше никаких льгот , как мне быть и куда обращаться теперь?",
      like: 5,
      disLike: 7,
      comment: 125,
      hearts: 5,
      date: "21.03.2023",
    },
    {
      fio: "Владислав Cтепанович Елисейь",
      text: "Здравствуйте, я пенсионер имею ли я право ездит в пригородных электричках бесплатно? (больше никаких льгот , как мне быть и куда обращаться теперь?",
      like: 5,
      disLike: 7,
      comment: 125,
      hearts: 5,
      date: "21.03.2023",
    },
    {
      fio: "Владислав Cтепанович Елисейь",
      text: "Здравствуйте, я пенсионер имею ли я право ездит в пригородных электричках бесплатно? (больше никаких льгот , как мне быть и куда обращаться теперь?",
      like: 5,
      disLike: 7,
      comment: 125,
      hearts: 5,
      date: "21.03.2023",
    },
  ];

  const documents: any[] = [
    // {
    //   name: "Сканы паспорта",
    //   date: "02.12.2022",
    //   volume: "1Мб",
    //   action: "Загрузить",
    //   type: "wordSvg",
    // },
    // {
    //   name: "Доверенность",
    //   date: "02.12.2022",
    //   volume: "2Мб",
    //   action: "Загрузить",
    //   type: "pdfSvg",
    // },
  ];
  const disableAdd = ref(true);
  const adresses = ref([]);
  const historySearch = ref();
  const showAdresses = ref(false);
  const currentValue = ref("");
  const chooseAdress = (address: any) => {
    currentValue.value = address;
    cheackAdress(address);
  };
  const cheackAdress = async (adress: string) => {
    disableAdd.value = true;
    try {
      await httpService.post(`/api/data_validation/address/`, {
        data: `${adress}`,
      });
      showAdresses.value = false;
      disableAdd.value = false;
    } catch (error: any) {
      // console.error("error", error);
      showAdresses.value = true;
      adresses.value = error.response.data.data;
      disableAdd.value = true;
    }
    // }
  };
  const getHistorySearch = async () => {
    try {
      const { data } = await httpService.get("/search/history/");
      historySearch.value = data;
      if (historySearch.value.length < 1)
        historySearch.value = ["Истории пока нету"];
    } catch (error) {
      console.log(error);
    }
  };
  const getUserTariff = async () => {
    console.log("userMe.value", userMe.value);
    try {
      const { data } = await httpService.get(`api/usertariff/`);
      if (data.length <= 0) {
        userCurrentTariff.value = {
          tariff_name: "Отсутствует",
        };
      } else {
        userCurrentTariff.value = data.find(
          (el: any) => el.user === userMe.value.user.id
        );
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getUserCLoudFiles = async () => {
    console.log("userMe.value", userMe.value);
    try {
      const { data } = await httpService.get(`api/files/`);
      console.log("data", data);
      userCLoudFiles.value = data.results;
    } catch (error) {
      console.log(error);
    }
  };
  const $q = useQuasar();
  const showNotif = (content = "", type = "info", color = "primary") => {
    $q.notify({
      message: `${content} `,
      type: type,
      color: color,
      position: "bottom-right",
    });
  };
  const copyCloudFileUrl = (url: string) => {
    // info warning negative
    copyTextInbuffer(url);
    showNotif("Сообщение скопиранно");
  };
  const downloadCloudFile = (url: string) => {
    download(url);
    showNotif("Файл загржуен");
  };

  const delCurrentCLoudFile = async (file: any) => {
    let formData = new FormData();
    // if (files) {
    //   for (let i = 0; i < files.length; i++) {
    //     const file = files[i];
    //     console.log("file***", file);
    //     formData.append(`remove_files`, `${file.file_url}`);
    //   }
    // }
    // formData.append(`remove_files`, `${file.file_url}`);

    try {
      const { data } = await httpService.delete(`api/files/${file.id}/`);
      showNotif("Файл удален", "warning", "red");
      getUserCLoudFiles();
      console.log("data", data);
    } catch (error) {
      console.log(error);
    }
  };

  const cloudFile = ref();

  const addCLoudFile = async () => {
    let formData = new FormData();
    const files = cloudFile.value.files;
    if (files) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        console.log("file***", file);
        formData.append("files", file); // Добавляем каждый файл в FormData
      }
    }
    try {
      const { data } = await httpService.post(`/api/files/`, formData);
      console.log("data", data);
      cloudFile.value.files = [];
      getUserCLoudFiles();
      takeCloudSpaceInfo();
    } catch (error) {
      console.log(error);
    } finally {
      openActionsCloudFile.value = false;
    }
  };

  const addValue = ref("");
  const codeWindow = ref(false);
  const codeValue = ref(null);

  const addPhoneOrEmail = async (type: string, value = "") => {
    console.log("value", value);
    value.length <= 0 ? (value = addValue.value) : value;
    let formData = new FormData();
    formData.append("verified_field", type);
    formData.append(type, value);
    localStorage.setItem("regNumber", `${value}`);

    try {
      const { data } = await httpService.post(
        `/api/users/add_phone_or_email/`,
        formData
      );
      if (type === "phone_number") {
        codeWindow.value = true;
      }
      Notify;
      Notify.create({
        message: `${data}`,
        type: "info",
        color: "primary",
        position: "bottom-right",
      });
    } catch (er: any) {
      Notify.create({
        message: `${er.response.data}`,
        type: "warning",
        color: "red",
        position: "bottom-right",
      });
    }
  };

  return {
    codeWindow,
    codeValue,
    addValue,
    addPhoneOrEmail,
    user,
    comp,
    swapComp,
    categories,
    advices,
    questions,
    activeClass,
    activeTab,
    documents,
    isLawyer,
    getUserMe,
    openCreateFolder,
    userMe,
    goOnTatiffs,
    cheackAdress,
    adresses,
    currentValue,
    chooseAdress,
    showAdresses,
    disableAdd,
    getHistorySearch,
    getUserTariff,
    historySearch,
    userCurrentTariff,
    getUserCLoudFiles,
    userCLoudFiles,
    delCurrentCLoudFile,
    addCLoudFile,
    cloudFile,
    openActionsCloudFile,
    copyCloudFileUrl,
    downloadCloudFile,
  };
};
