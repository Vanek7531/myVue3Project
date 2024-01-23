import httpService from "@/api/server";
import router from "@/router";
import axios from "axios";
import { isUserAuthLogin, isUserAuth } from "./helper";
import { socketIo } from "@/use/soketIo";
// import { showNotif } from "@/use/alerts";
// import { useQuasar } from "quasar";
import { Notify } from "quasar";
import { onMounted, ref } from "vue";

const { openSoketIo } = socketIo();
// export const login = async (email:string, password:string) => {
//   try {
//     const response = await httpService.post(`/api/token/`, {
//       email: "admin@admin.admin",
//       password: "12345678",
//     });

//     return response;
//   } catch (error) {}
// };

const saveTokens = (token: any) => {
  sessionStorage.setItem("tokenAccess", JSON.stringify(token.access));
  // sessionStorage.setItem("tokenAuthorization", JSON.stringify(token.access));
  sessionStorage.setItem("tokenRefresh", JSON.stringify(token.refresh));
};

export const login = async (email: string, password: string) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_APP_BACK_URL}/api/token/`,
      {
        email: email,
        password: password,
      }
    );
    saveTokens(response.data);
    isUserAuthLogin.value = true;
    sessionStorage.setItem("isUserAuth", "yes");

    if (response.status === 200) {
      openSoketIo();
      router.push("/userAccount/UserAllBase");
    }
    return response;
  } catch (error) {}
};

export const logOut = async () => {
  const token = sessionStorage
    ?.getItem("tokenAccess")
    ?.slice(1, 5)
    .includes("ey")
    ? sessionStorage.getItem("tokenAccess")?.slice(1, -1)
    : sessionStorage.getItem("tokenAccess");
  // socket?.close();
  // if (socket) {
  //   // .then(() => {
  //   socket.onclose = function (event: any) {
  //     if (event.wasClean) {
  //       console.log("Соединение закрыто чисто");
  //     } else {
  //       console.log("Обрыв соединения");
  //     }
  //     console.log("Код: " + event.code + " причина: " + event.reason);
  //   };
  // }

  // });
  try {
    axios.post(
      `${import.meta.env.VITE_APP_BACK_URL}/api/users/verify/logout/`,
      {
        token: token,
      }
    );
    isUserAuthLogin.value = false;

    sessionStorage.setItem("isUserAuth", "no");
    sessionStorage.removeItem("tokenAccess");
    sessionStorage.removeItem("tokenRefresh");
    // Notify.create({
    //   message: "Вы успешно вышли из системы.",
    //   type: "info",
    //   color: "primary",
    //   position: "bottom-right",
    // });
    router.push("/login");
  } catch (er) {
    console.log("er", er);
  }
};

export const registrations = () => {
  const uprove = () => {
    disable.value = false;
  };

  const roles = [
    {
      role: "Specialist",
      name: "Специалист",
    },
    {
      role: "Urist",
      name: "Юрист",
    },
    {
      role: "Organization",
      name: "Organization",
    },
    {
      role: "Content_maker",
      name: "Контент менджер",
    },
    {
      role: "DefaultUser",
      name: "Обычный пользователь",
    },
  ];

  const chooseRole = (role: string) => {
    currentRole.value = role;
    disable.value = false;
  };

  const dense = ref(true);
  const email = ref("");
  const number = ref();
  const currentRole = ref("");
  const codeSMS = ref(null);
  const model = ref(true);
  const codeInput = ref(false);
  const password = ref("");
  const patronymic = ref("");
  const last_name = ref("");
  const first_name = ref("");
  const role = ref("");
  const isPwd = ref(true);
  const disable = ref(true);
  const currentStep = ref("newEmail");

  const verifyRegistration = async (type = "email") => {
    let formData = new FormData();
    console.log("number.value", number.value);
    formData.append(`verified_field `, `${type}`);
    formData.append(
      `${type} `,
      `${type === "email" ? email.value : `79${number.value}`}`
    );

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_BACK_URL}/api/users/`,
        formData
      );
      console.log("response.status", response);
      if (response.status === 200) {
        Notify.create({
          message: `Потвердите регестрацию на ${
            type === "email" ? "почте" : "телефоне"
          }!`,
          type: "warning",
          color: "green",
          position: "right",
        });
        if (type === "email") {
          localStorage.setItem("regEmail", email.value);
          setTimeout(() => {
            router.push("/");
          }, 200);
        } else {
          localStorage.setItem("regNumber", `79${number.value}`);
          codeInput.value = true;
        }
      }
    } catch (er) {}
  };
  const verifyNumber = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_BACK_URL}/api/users/verify/${
          // убрать
          localStorage.getItem("regNumber")
        }/${codeSMS.value}/phone_confirm/`
      );
      console.log("response.status", response);
      if (response.status === 200 || response.status === 201) {
        localStorage.setItem("regEmail", email.value);
        Notify.create({
          message: "Телефон потвежден!",
          type: "warning",
          color: "green",
          position: "right",
        });
        router.push(`${Object.values(response.data)[0]}`);
      }
    } catch (er: any) {
      console.log("er", er);
      Notify.create({
        message: `${er.response?.data?.slice(0, 100)}`,
        type: "warning",
        color: "red",
        position: "bottom-right",
      });
      codeInput.value = false;
    }
  };

  const registration = async () => {
    let formData = new FormData();
    // formData.append(`email`, `${localStorage.getItem("regEmail")}`);
    formData.append(`first_name`, `${first_name.value}`);
    formData.append(`password`, `${password.value}`);
    formData.append(`role`, `${currentRole.value}`);
    formData.append(`last_name`, `${last_name.value}`);
    formData.append(`patronymic`, `${patronymic.value}`);
    formData.append(`token`, `${router.currentRoute.value.query.token}`);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_BACK_URL}/api/users/registration/`,
        formData
      );
      // saveToken(response.data.access);
      // console.log("response.status", response);
      if (response.status === 201) {
        Notify.create({
          message: "Регистрация успешно выполнена!",
          type: "info",
          color: "primary",
          position: "bottom-right",
        });
        router.push("/");
      }
      return response;
    } catch (error) {}
  };

  return {
    dense,
    email,
    currentRole,
    model,
    password,
    patronymic,
    last_name,
    first_name,
    role,
    isPwd,
    disable,
    currentStep,
    roles,
    chooseRole,
    registrations,
    registration,
    uprove,
    verifyRegistration,
    number,
    codeInput,
    codeSMS,
    verifyNumber,
  };
};
