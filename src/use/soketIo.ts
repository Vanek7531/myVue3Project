import { computed, ref, type Ref, watch } from "vue";
import httpService from "@/api/server";
import axios from "axios";
import { io, Socket } from "socket.io-client";
import { userMe } from "./useUserAccount";
export let socket: any;
export const textMsg = ref("");
export const socketIoIsLoad = ref(false);
export const allChatMsg = ref();
export const allChats = ref();
export const currentChatUserId = ref();

export const socketIo = () => {
  const newChatShortId = ref();
  const currentChatUser = ref();
  const cloudSpace = ref();

  const takeNewMsg = () => {
    let response;
    socket.on("new_message", (data: any) => {
      response = data;
      if (data && data.type === "remaining_space") {
        cloudSpace.value = JSON.parse(data.message);
      }
      return response;
    });
    return response;
  };

  const getAllMsg = async (chatId: number) => {
    try {
      const { data } = await httpService.get(`/chat/${chatId}/`);
      currentChatUser.value = data;
      allChatMsg.value = data.messages;
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const postChatShortId = async (id: number) => {
    newChatShortId.value = null;
    try {
      const { data } = await httpService.post("/chat/", {
        acceptor: id,
      });

      newChatShortId.value = data;
      return data;
    } catch (error) {
      allChatMsg.value = null;
      console.log(error);
    }
  };
  const getAllChats = async () => {
    try {
      const { data } = await httpService.get(
        // `/chat/?search=${userMe.value.user.id}`
        `/chat/`
      );
      allChats.value = data;
    } catch (error) {
      console.log(error);
    }
  };

  const openSoketIo = async () => {
    if (socket && socket.connected) return;
    const accessToken = sessionStorage
      ?.getItem("tokenAccess")
      ?.slice(1, 5)
      .includes("ey")
      ? sessionStorage.getItem("tokenAccess")?.slice(1, -1)
      : sessionStorage.getItem("tokenAccess");

    if (!accessToken) return;
    // let URL = "http://localhost:8008";
    let URL = import.meta.env.VITE_APP_BACK_URL;

    socket = io(URL, {
      transports: ["websocket", "polling", "flashsocket"],
      auth: {
        token: accessToken,
      },
    });
    // const chatShortId = await getChatShortId();

    socket.on("connect", (data: any) => {
      console.log("Connected to the server");
      // Ensure the event name and payload match what the server expects
      // setTimeout(() => {
      //   takeNewMsg();
      //   socket.emit("remaining_space", {});
      //   setTimeout(() => {
      //     socket.emit("remaining_space", {});
      //   }, 3000);
      // }, 100);
    });
    socket.on("disconnect", () => {
      console.log("Disconnected from the server");
    });
  };

  const takeCloudSpaceInfo = () => {
    socket.emit("remaining_space", {});
    takeNewMsg();
  };
  const closeUserChatRoom = async () => {
    if (!socket) return;

    if (!newChatShortId.value.short_id) return;
    socket.emit("leave_room", {
      chat_short_id: newChatShortId.value.short_id,
    });
  };

  const openUserChatRoom = async () => {
    if (!socket) return;

    console.log("newChatShortId", newChatShortId.value);
    if (newChatShortId.value) {
      closeUserChatRoom();
    }
    const accessToken = sessionStorage
      ?.getItem("tokenAccess")
      ?.slice(1, 5)
      .includes("ey")
      ? sessionStorage.getItem("tokenAccess")?.slice(1, -1)
      : sessionStorage.getItem("tokenAccess");

    // await getChatShortId();
    await postChatShortId(currentChatUserId.value);

    socket.emit("join_room", {
      room: newChatShortId.value.short_id,
      token: accessToken,
    });
    getAllMsg(newChatShortId.value.id);
    socket.on("new_message", (data: any) => {
      if (data.chat_short_id == newChatShortId.value.short_id) {
        getAllMsg(newChatShortId.value.id);
        socket.emit("status_message", {
          message_id: data.message_id,
        });
        console.log("allChatMsg.value", allChatMsg.value);
      }
      textMsg.value = data;
    });
  };

  const statusS = ref("");
  const getUserStatus = async (id: number) => {
    if (!socket) return;
    socket.emit("status_acceptor", {
      acceptor: id,
    });
    socket.on("new_message", (data: any) => {
      if (data && data.type === "user_status") {
        statusS.value = data && data.status ? data.status : "offline";
      }
    });
  };

  const newMessage = async (msg: string) => {
    // const chatShortId = await getChatShortId();

    // const chatShortId = await postChatShortId(
    //   currentChatUser.value.acceptor == userMe.value.user.id
    //     ? currentChatUser.value.initiator
    //     : userMe.value.user.id
    // );
    // console.log('allChatMsg',currentChatUser.value.short_id);
    // const chatShortId = await postChatShortId(83);

    let newMsg = {
      chat_short_id: currentChatUser.value.short_id,
      text: `${msg}`,
      sender_id: userMe.value.user.id,
    };

    socket.emit("message", newMsg);
    getAllMsg(currentChatUser.value.id);
  };

  return {
    openSoketIo,
    openUserChatRoom,
    newMessage,
    textMsg,
    getUserStatus,
    statusS,
    allChatMsg,
    postChatShortId,
    currentChatUserId,
    getAllChats,
    allChats,
    getAllMsg,
    currentChatUser,
    takeCloudSpaceInfo,
    cloudSpace,
    closeUserChatRoom,
  };
};
