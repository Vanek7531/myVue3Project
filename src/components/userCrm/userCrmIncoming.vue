<script setup lang="ts">
import iconHeart from "@/components/icons/iconHeart.vue";
import iconComment from "@/components/icons/iconComment.vue";
import iconLike from "@/components/icons/iconLike.vue";
import iconDisLike from "@/components/icons/iconDisLike.vue";
import { socketIo, textMsg, allChatMsg } from "@/use/soketIo";
import { onMounted, onUnmounted, ref } from "vue";
import { userMe } from "@/use/useUserAccount";

const {
  newMessage,
  getUserStatus,
  statusS,
  openUserChatRoom,
  getAllChats,
  allChats,
  getAllMsg,
  currentChatUserId,
  closeUserChatRoom,
  currentChatUser,
} = socketIo();

const textMessage = ref("");
onMounted(async () => {
  setTimeout(() => {
    getAllChats();
  }, 100);
});
onUnmounted(() => {
  closeUserChatRoom();
});
</script>

<template>
  <div class="user-crm--in-coming in-coming">
    <!-- <pre>{{ allChats ? allChats : "" }}</pre> -->
    <div
      class="in-coming__container"
      v-if="allChats && userMe && allChats.length > 0"
    >
      <!-- <div class="in-coming__chats-body" > -->
      <div class="in-coming__chats" v-for="(chat, idx) in allChats" :key="idx">
        <div class="in-coming__chats-head">
          <div class="in-coming__chats-head--fio">
            <img src="@/assets/img/beardedMan.png" alt="beardedMan" />
            ФИО будет -
            {{
              chat.acceptor !== userMe.user.id ? chat.acceptor : chat.initiator
            }}
          </div>
          <div>
            <img src="@/assets/svg/checkMark.svg" alt="checkMark" />
            добавить на доску
          </div>
        </div>
        <div class="in-coming__chats-date">21.03.2023</div>
        <div class="in-coming__chats-text">
          {{ chat.id }}
        </div>
        <div class="in-coming__reactions">
          <div>
            <icon-heart />
            5
          </div>
          <div>
            <icon-comment />
            5
          </div>
          <div>
            <icon-like />
            5
          </div>
          <div>
            <icon-dis-like />
            5
          </div>
        </div>
        <div class="in-coming__action">
          <img src="@/assets/svg/checkMark.svg" alt="checkMark" />
          <div
            @click="
              getAllMsg(chat.id),
                (currentChatUserId =
                  chat.acceptor === userMe.user.id
                    ? chat.initiator
                    : chat.acceptor),
                openUserChatRoom()
            "
          >
            Ответить
          </div>
        </div>
      </div>
      <!-- </div> -->
    </div>
    <div class="in-coming__container" v-else>
      <div class="in-coming__chats">Чатов пока нету...</div>
    </div>
    <div class="in-coming__chat-container" v-if="allChatMsg && currentChatUser">
      <div class="in-coming__chat-head">
        <div class="in-coming__chat-name">
          <img src="/src/assets/img/beardedMan.png" alt="" />
          {{ currentChatUser.acceptor_fio }}
        </div>
        <div class="in-coming__chat-date">дата</div>
      </div>
      <div class="in-coming__first-msg">
        {{ currentChatUser?.messages[0]?.text }}
      </div>
      <div class="in-coming__reactions">
        <div>
          <icon-heart />
          5
        </div>
        <div>
          <icon-comment />
          5
        </div>
        <div>
          <icon-like />
          5
        </div>
        <div>
          <icon-dis-like />
          5
        </div>
      </div>
      <div class="in-coming__chat-messages" v-if="allChatMsg.length > 0">
        <div v-for="msg in allChatMsg" :key="msg.id">
          <div
            class="msg__sender"
            v-if="msg.sender === userMe.user.id && msg.text.length > 0"
            v-html="msg.text"
          ></div>
          <div
            class="msg__recipient"
            v-if="msg.sender === currentChatUserId && msg.text.length > 0"
            v-html="msg.text"
          ></div>
        </div>
      </div>
      <div class="in-coming__chat-messages" v-else>
        <div style="margin: 0 auto">сообщений пока нету</div>
      </div>

      <q-editor
        v-model="textMessage"
        :definitions="{
          bold: { label: 'Bold', icon: undefined, tip: 'My bold tooltip' },
        }"
      />
      <q-btn
        color="primary"
        label="отправить сообщение"
        :disable="textMessage.length <= 0"
        @click="newMessage(textMessage), (textMessage = '')"
      />
    </div>
    <div class="in-coming__chat-container" v-else>
      <RouterLink to="/specialists">
        Начните свое общение на странице с любым специалистом
      </RouterLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/styles/articlesStyle.scss";

.in-coming {
  display: flex;
  gap: 20px;
  // align-items: center;
  padding: 20px;

  &__container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    flex: 0 1 35%;
    max-height: 900px;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 0 10px 10px 0;
    height: fit-content;
  }
  &__chats {
    padding: 20px;
    border-radius: 12px;
    background: var(--WhiteCompas, #fff);
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  &__chats-head {
    display: flex;
    justify-content: space-between;

    & div {
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }
  &__chats-head--fio {
    img {
      border-radius: 50%;
    }
  }
  &__chats-date {
    color: #d7dbe5;
  }
  &__chats-text {
    color: #121212;
  }
  &__reactions {
    display: flex;
    // justify-content: space-between;
    gap: 10px;
    align-items: center;
    & > div {
      gap: 5px;
      display: flex;
      align-items: center;
    }
  }
  &__action {
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > div {
      text-decoration: underline;
      cursor: pointer;
    }
  }
  &__chat-container {
    border-radius: 12px;
    background: #fff;
    padding: 30px;
    flex: 0 1 60%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__chat-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__chat-name {
    display: flex;
    align-items: center;
    gap: 20px;
    img {
      border-radius: 20px;
    }
  }
  &__chat-date {
    color: #d7dbe5;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 110%; /* 17.6px */
  }
  &__first-msg {
    color: var(--BlackCompas, #121212);
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 22.4px */
  }
  &__chat-messages {
    border-radius: 12px;
    background: #f8f8fb;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 15px;
    height: 400px;
    overflow-y: auto;
  }
}

@media (max-width: 1023px) {
  .in-coming {
    &__container {
      justify-content: space-around;
    }
  }
}
</style>
