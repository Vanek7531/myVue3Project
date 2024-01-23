<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useUser, userMe } from "@/use/useUserAccount";
import httpService from "@/api/server";
import { registrations } from "@/use/useAuthorization";
import iconEdit from "@/components/icons/iconEdit.vue";

const password = ref("");
const isPwd = ref(true);
const dense = ref(true);
const text = ref("");
const lockInput = ref(true);
const city = ref("");
const { getUserMe, addPhoneOrEmail, addValue, codeWindow, codeValue } =
  useUser();

const { verifyNumber, codeSMS } = registrations();

const UserFirstName = ref("");
const edit = ref(true);
const userInfo = {
  first_name: UserFirstName.value,
  last_name: "Ivanov",
  avatar: null,
  phone_number: "+022026876",
};

const changeUserMe = async () => {
  try {
    const { data } = await httpService.patch("/api/profile/me/", {
      // experience: {
      //   total_experience: 11,
      // },

      user: {
        first_name: userMe.value.user.first_name,
        last_name: userMe.value.user.last_name,
        patronymic: userMe.value.user.patronymic,
        // phone_number: userMe.value.user.phone_number,
      },
      address: userMe.value.address,
      about_me: userMe.value.about_me,
      website: `${userMe.value.website}`,
      // website: `https://${userMe.value.website}`,
    });
    userMe.value = data;

    // getUserMe();

    // userMe.value = data;
    // console.log("userMe.value", userMe.value);
  } catch (error) {
    console.log(error);
  }
};

// onMounted(() => {
//   getUserMe();
// });
</script>

<template>
  <!-- {{ userMe ? userMe : 'ниче го(' }} -->
  <div class="user-account--view__user-all--base user-all--base" v-if="userMe">
    <div
      @click="edit = !edit"
      style="position: absolute; cursor: pointer; right: 5px; top: 0"
    >
	<icon-edit/>
	</div>
    <div class="user-all--base__container" v-show="!edit">
      <div class="user-all--base__subtitle">Заполните основную информацию:</div>
      <div class="user-all--base__edit">
        <div class="user-all--base__inputs">
          <div class="user-all--base__body">
            <!-- <div class="user-all--base__body-name">Имя*</div> -->
            <q-input
              class="user-all--base__body-input"
              outlined
              v-model="userMe.user.first_name"
              label="Имя*"
              bg-color="blue-grey-5"
              rounded
              placeholder="Введите ваше имя"
              :dense="dense"
            >
            </q-input>
          </div>
          <div class="user-all--base__body">
            <q-input
              class="user-all--base__body-input"
              outlined
              v-model="userMe.user.last_name"
              label="Фамилия"
              bg-color="blue-grey-5"
              rounded
              placeholder="Введите вашу Фамилию"
              :dense="dense"
            >
            </q-input>
          </div>

          <div class="user-all--base__body">
            <q-input
              class="user-all--base__body-input"
              outlined
              v-model="userMe.user.patronymic"
              label="Отчество"
              bg-color="blue-grey-5"
              rounded
              placeholder="Введите ваше отчество"
              :dense="dense"
            >
            </q-input>
          </div>

          <div
            class="user-all--base__body"
            v-if="userMe.user.role === 'Specialist'"
          >
            <!-- отобображать ли для админов или нет -->
            <!-- v-if="userMe.user.role !== 'DefaultUser'" -->
            <q-input
              class="user-all--base__body-input"
              outlined
              bg-color="blue-grey-5"
              rounded
              v-model="userMe.user.role"
              label="Специалист"
              placeholder="Введите ваше специализацию"
              :dense="dense"
            >
            </q-input>
          </div>
          <div
            class="user-all--base__body"
            v-if="userMe.user.role === 'Specialist'"
          >
            <q-input
              class="user-all--base__body-input"
              outlined
              v-model="userMe.passport_number"
              label="Паспорт"
              bg-color="blue-grey-5"
              rounded
              placeholder="Введите номер паспорта"
              :dense="dense"
            >
            </q-input>
          </div>
          <div
            class="user-all--base__body"
            v-if="userMe.user.role === 'Specialist'"
          >
            <q-input
              class="user-all--base__body-input"
              outlined
              v-model="userMe.languages"
              label="Язык"
              bg-color="blue-grey-5"
              rounded
              placeholder="Укажите ваш язык"
              :dense="dense"
            >
            </q-input>
          </div>
          <div
            class="user-all--base__body"
            style="gap: 10px"
            v-if="userMe.user.email !== null"
          >
            <q-input
              class="user-all--base__body-input"
              outlined
              v-model="userMe.user.email"
              label="email"
              type="email"
              bg-color="blue-grey-5"
              rounded
              placeholder="Введите ваш email"
              :dense="dense"
              :disable="lockInput"
            >
            </q-input>
            <q-btn
              color="primary"
              label="Изменить"
              @click="lockInput = !lockInput"
            />
            <q-btn
              v-if="!lockInput"
              color="primary"
              label="Добавить"
              @click="
                addPhoneOrEmail('email', userMe.user.email), (lockInput = false)
              "
            />
          </div>
          <div v-else class="user-all--base__body" style="gap: 10px">
            <div>У вас нет почты, добавте ее скорее!</div>

            <q-input
              class="user-all--base__body-input"
              outlined
              v-model="addValue"
              label="email"
              type="email"
              placeholder="Введите ваш email"
              :dense="dense"
            >
            </q-input>
            <q-btn
              color="primary"
              label="Добавить"
              @click="addPhoneOrEmail('email')"
            />
          </div>
          <div class="user-all--base__body" v-if="userMe.user.phone_number">
            <q-input
              class="user-all--base__body-input"
              outlined
              v-model="userMe.user.phone_number"
              label="Телефон"
              bg-color="blue-grey-5"
              rounded
              type="tel"
              placeholder="Введите ваш Телефон"
              :dense="dense"
              disable
            >
            </q-input>
          </div>
          <div v-else class="user-all--base__body" style="gap: 10px">
            <div>У вас нет номера, добавте его скорее!</div>
            <q-dialog v-model="codeWindow">
              <q-card>
                <q-card-section>
                  <div class="text-h6">Ввидите код потверждения ниже</div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                  <q-input
                    class="user-all--base__body-input"
                    outlined
                    v-model="codeSMS"
                    bg-color="blue-grey-5"
                    rounded
                    label="Код"
                    type="number"
                    placeholder="Введите код из смс"
                    :dense="dense"
                  />
                </q-card-section>

                <q-card-actions align="right">
                  <q-btn
                    @click="verifyNumber()"
                    flat
                    label="Отправить"
                    color="primary"
                    v-close-popup
                  />
                </q-card-actions>
              </q-card>
            </q-dialog>
            <q-input
              class="user-all--base__body-input"
              outlined
              v-model="addValue"
              label="phone"
              bg-color="blue-grey-5"
              rounded
              type="tel"
              placeholder="Введите ваш phone"
              :dense="dense"
            >
            </q-input>
            <q-btn
              color="primary"
              label="Добавить"
              @click="addPhoneOrEmail('phone_number')"
            />
          </div>
          <div class="user-all--base__body">
            <q-input
              class="user-all--base__body-input"
              outlined
              v-model="userMe.address"
              label="Адрес"
              bg-color="blue-grey-5"
              rounded
              type="email"
              placeholder="Введите ваш Адрес"
              :dense="dense"
            >
            </q-input>
          </div>
          <div
            v-if="userMe.user.role === 'Specialist'"
            class="user-all--base__body"
          >
            <q-input
              class="user-all--base__body-input"
              outlined
              bg-color="blue-grey-5"
              rounded
              v-model="userMe.website"
              label="Сайт"
              type="url"
              placeholder="Укажите сайт"
              :dense="dense"
            >
            </q-input>
          </div>
          <!-- <div class="user-all--base__body">
		        <div class="user-all--base__body-name">Пароль</div>
		        <q-input
		          class="user-all--base__body-input"
		          outlined
		          v-model="password"
		          :type="isPwd ? 'password' : 'text'"
		          label="Текущий пароль"
		          placeholder="Введите текущий пароль"
		          :dense="dense"
		        >
		          <template v-slot:append>
		            <q-icon
		              :name="isPwd ? 'visibility_off' : 'visibility'"
		              class="cursor-pointer"
		              @click="isPwd = !isPwd"
		            /> </template
		        ></q-input>
		      </div> -->
          <div class="user-all--base__body">
            <q-editor
              v-model="userMe.about_me"
              :definitions="{
                bold: {
                  label: 'Bold',
                  icon: undefined,
                  tip: 'My bold tooltip',
                },
              }"
            />
          </div>
        </div>
        <div class="user-all--base__avatar">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="117"
              height="117"
              viewBox="0 0 117 117"
              fill="none"
            >
              <circle cx="58.5" cy="58.5" r="58.5" fill="#D9D9D9" />
            </svg>
          </div>
          <div>Загрузить аватар</div>
          <div
            style="
              border-radius: 10px;
              background: #d9d9d9;
              width: 107px;
              height: 138px;
            "
          ></div>
        </div>
      </div>
      <div style="display: flex; justify-content: flex-start">
        <q-btn
          rounded
          color="primary"
          label="сохранить"
          @click="changeUserMe()"
        />
      </div>
    </div>
    <div class="user-all--base__container" v-show="edit">
      <div class="user-all--base__subtitle">Личная информация:</div>
      <div class="user-all--base__personal">
        <div>ФИО: {{ userMe.user.first_name }}</div>
        <div>Дата рождения: 15 мая 1985 г.</div>
        <div>Контактный телефон: {{ userMe.user.phone_number }}</div>
        <div>Адрес электронной почты: {{ userMe.user.email }}</div>
        <div>Адрес места проживания: {{ userMe.address }}</div>
      </div>
      <div class="user-main--info__views" style="width: 400px">
        <div class="user-main--info__views--statistics">
          статистика просмотров
          <p>за 5 дней</p>
          <p>за Неделю</p>
          <p>за Месяц</p>
        </div>
        <div class="user-main--info__views--graph">
          <img class="image" src="@/assets/img/graph.jpg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/styles/userViewStyle.scss";
</style>
