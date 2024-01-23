import { computed, ref, type Ref } from "vue";
import httpService from "@/api/server";
import axios from "axios";
import { useQuasar } from "quasar";
export const message = ref(null);
export const count = ref(0);
export const notification = ref(null);
export const alerts: any = ref([]);
export const cachedNotifications: any = ref([]);
export const statusUserId: Ref<null | any> = ref(null);
import { io } from "socket.io-client";
import { socketIo, socket } from "@/use/soketIo";

const { openSoketIo, openUserChatRoom, newMessage } = socketIo();

let URL = "http://localhost:8008";
let auth = sessionStorage.getItem("tokenAccess");

const getChatShortId = async () => {
  try {
    const { data } = await httpService.post("/chat/", {
      acceptor: 2,
    });
    console.log("data", data);
  } catch (error) {
    console.log(error);
  }
};

export const openNewSocket = () => {
  newMessage("hi");
};

export const createSomething = () => {
  openUserChatRoom();
};

export const markAlerts = (id: number) => {
  if (!socket) return;
  // let a = JSON.stringify({
  //   support_ticket_id: id,
  // });
  socket.emit("status_message", { ticket_id: id, type: "support_ticket" });

  cachedNotifications.value = cachedNotifications.value.filter(
    (el: any) => el.count.ticket_id !== id
  );
  // socket.send(a);
};

export const checkStatusForUserId = async (id: number) => {
  return;
  let msg = JSON.stringify({
    check_status_for_user_id: `${id}`,
  });
  let msg1 = { 0: "123" };
  console.log("here?");
  socket.send(msg1);
  // socket.onmessage = async function (event: any) {
  //   statusUserId.value = await event.data;
  //   statusUserId.value = await JSON.parse(statusUserId.value);
  //   return statusUserId.value;
  // };
  return "offline";
};

const getMessage = () => {
  if (!socket) return;
  socket.addEventListener("message", (m: any) => {
    let msg = JSON.parse(m.data);
    if (msg.type === "count.messages") count.value = msg.count_messages;
    else if (msg.type === "user.notification") {
      if (alerts.value.length <= 0) alerts.value.push(msg);
      else {
        if (
          alerts.value.find((el: any) => {
            return el.support_ticket_id === msg.support_ticket_id;
          })
        )
          return;
        else alerts.value.push(msg);
      }
      notification.value = msg;
    } else message.value = msg;
    showNotif();
  });
  // .then(() => {
  //   showNotif(count.value);
  // });
};

export const newMsg = computed(() => {
  return 0;
  console.log("socketsocket", socket);
  if (!socket) return;
  socket.onmessage = function (event: any) {
    let msg = JSON.parse(event.data);
    console.log("newMsg111", msg);

    if (msg.type === "count.messages") count.value = msg.count_messages;
    else if (msg.type === "user.notification") {
      notification.value = msg;
    } else message.value = msg;
    return msg;
    // getMessage()
    // return message;
  };
});

export const showNotif = async () => {
  const $q = useQuasar();
  $q.notify({
    message: `you have msg: ${1} `,
    color: "blue",
    position: "bottom-right",
  });
};
