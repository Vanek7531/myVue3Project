import { computed, ref, type Ref } from "vue";
import httpService from "@/api/server";
import axios from "axios";
import { useQuasar } from "quasar";

export const userDeviceMobile = computed(() => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
    ? true
    : false;
});

export const isUserAuthLogin: Ref<null | boolean> = ref(null);

export const isUserAuth = computed(() => {
  let auth = sessionStorage.getItem("isUserAuth");
  return isUserAuthLogin.value !== null
    ? isUserAuthLogin.value
    : auth === "yes"
    ? true
    : false;
});

export const refreshToken = async () => {
  try {
    const tokenRefresh = sessionStorage.getItem("tokenRefresh");
    const tokenAuth = sessionStorage.getItem("tokenAccess");

    if (!tokenRefresh || tokenRefresh?.length < 0) return;

    const response = await axios.post(
      `${import.meta.env.VITE_APP_BACK_URL}/api/token/refresh/`,
      {
        refresh: tokenRefresh?.slice(1, -1),
        // refresh: '132',
        // refresh: tokenRefresh,
      },
      {
        // headers: {
        //   Authorization: `token ${tokenAuth}`,
        // },
      }
    );

    sessionStorage.setItem("tokenAccess", response.data.access);
    return response;
  } catch (er) {
    console.log("er", er);
  }
};

export const downloadInNewTab = (url: string) =>
  window.open(`${url}`, "Download");

export function download(url: string) {
  const a: any = document.createElement("a");
  a.href = url;
  a.download = url.split("/").pop();
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
export function copyTextInbuffer(text: string) {
  navigator.clipboard.writeText(text);
}

// export const showAnyNotif = (
//   content = "",
//   type = "info",
//   color = "primary"
// ) => {
//   const $q = useQuasar();
//   // info warning negative
//   $q.notify({
//     message: `${content} `,
//     type: type,
//     color: color,
//     position: "bottom-right",
//   });
// };
