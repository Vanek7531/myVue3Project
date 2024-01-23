<script setup lang="ts">
import httpService from "@/api/server";
import { type Ref, ref, computed, onMounted } from "vue";
import iconDownArrow from "../icons/iconDownArrow.vue";
import iconUpArrow from "../icons/iconUpArrow.vue";

import { useQuasar } from "quasar";
const $q = useQuasar();
const showNotif = (message: string) => {
  $q.notify({
    message: `${message}`,
    color: "blue",
    position: "bottom-right",
  });
};
const payments = ref();

const getTariffs = async () => {
  try {
    const { data } = await httpService.get(`/api/tariff/`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
const getTariff = async (id: number) => {
  try {
    const { data } = await httpService.get(`/api/pay/${id}/`);
    showNotif(data.message);
  } catch (error) {
    console.log(error);
  }
};

const tableColor = ref("");
let localId: number;
const setTableColor = (id: number) => {
  if (localId === id) {
    tableColor.value = "";
    localId = 0;
  } else {
    let clasess = ["first", "second", "third"];
    localId = id;
    tableColor.value = clasess[id - 1];
  }
};

const tableItems: any = [
  {
    columns: [
      {
        name: "name",
        required: true,
        label: "Доступ к чату",
        align: "left",
        field: (row: any) => row.name,
      },
      { name: "first", align: "center", label: "", field: "first" },
      {
        name: "second",
        align: "center",
        label: "",
        field: "second",
      },
      { name: "third", align: "center", label: "", field: "third" },
    ],
    rows: [
      {
        name: "3 мес.",
        first: "true",
        second: "false",
        third: "false",
      },
      {
        name: "10 мес.",
        first: "false",
        second: "true",
        third: "false",
      },
      {
        name: "безлимит",
        first: "false",
        second: "false",
        third: "true",
      },
    ],
  },
  {
    columns: [
      {
        name: "name",
        required: true,
        label: "Облако",
        align: "left",
        field: (row: any) => row.name,
      },
      { name: "first", align: "center", label: "", field: "first" },
      {
        name: "second",
        align: "center",
        label: "",
        field: "second",
      },
      { name: "third", align: "center", label: "", field: "third" },
    ],
    rows: [
      {
        name: "1Гб",
        first: "true",
        second: "true",
        third: "true",
      },
      {
        name: "4Гб",
        first: "false",
        second: "false",
        third: "false",
      },
      {
        name: "8Гб",
        first: "false",
        second: "false",
        third: "false",
      },
    ],
  },
  {
    columns: [
      {
        name: "name",
        required: true,
        label: "Платные статьи, читать",
        align: "left",
        field: (row: any) => row.name,
      },
      { name: "first", align: "center", label: "", field: "first" },
      {
        name: "second",
        align: "center",
        label: "",
        field: "second",
      },
      { name: "third", align: "center", label: "", field: "third" },
    ],
    rows: [
      {
        name: "4 мес.",
        first: "false",
        second: "true",
        third: "false",
      },
      {
        name: "безлимит",
        first: "false",
        second: "false",
        third: "true",
      },
    ],
  },
  {
    columns: [
      {
        name: "name",
        required: true,
        label: "Кол-во проф. направлений",
        align: "left",
        field: (row: any) => row.name,
      },
      { name: "first", align: "center", label: "", field: "first" },
      {
        name: "second",
        align: "center",
        label: "",
        field: "second",
      },
      { name: "third", align: "center", label: "", field: "third" },
    ],
    rows: [
      {
        name: "Базовое",
        first: "true",
        second: "true",
        third: "true",
      },
      {
        name: "3+",
        first: "false",
        second: "true",
        third: "false",
      },
      {
        name: "5+",
        first: "false",
        second: "false",
        third: "true",
      },
    ],
  },
  {
    columns: [
      {
        name: "name",
        required: true,
        label: "Кол-во городов",
        align: "left",
        field: (row: any) => row.name,
      },
      { name: "first", align: "center", label: "", field: "first" },
      {
        name: "second",
        align: "center",
        label: "",
        field: "second",
      },
      { name: "third", align: "center", label: "", field: "third" },
    ],
    rows: [
      {
        name: "Мой город",
        first: "true",
        second: "true",
        third: "true",
      },
      {
        name: "3",
        first: "false",
        second: "true",
        third: "false",
      },
      {
        name: "5",
        first: "false",
        second: "false",
        third: "true",
      },
    ],
  },
  {
    columns: [
      {
        name: "name",
        required: true,
        label: "Статьи",
        align: "left",
        field: (row: any) => row.name,
      },
      { name: "first", align: "center", label: "", field: "first" },
      {
        name: "second",
        align: "center",
        label: "",
        field: "second",
      },
      { name: "third", align: "center", label: "", field: "third" },
    ],
    rows: [
      {
        name: "Безлимит",
        first: "true",
        second: "true",
        third: "true",
      },
    ],
  },
  {
    columns: [
      {
        name: "name",
        required: true,
        label: "Кол-во рабочих мест",
        align: "left",
        field: (row: any) => row.name,
      },
      { name: "first", align: "center", label: "", field: "first" },
      {
        name: "second",
        align: "center",
        label: "",
        field: "second",
      },
      { name: "third", align: "center", label: "", field: "third" },
    ],
    rows: [
      {
        name: "3",
        first: "true",
        second: "false",
        third: "false",
      },
      {
        name: "6",
        first: "false",
        second: "false",
        third: "false",
      },
      {
        name: "10",
        first: "false",
        second: "false",
        third: "false",
      },
      {
        name: "20",
        first: "false",
        second: "false",
        third: "false",
      },
    ],
  },
  {
    columns: [
      {
        name: "name",
        required: true,
        label: "Обработка лидов",
        align: "left",
        field: (row: any) => row.name,
      },
      { name: "first", align: "center", label: "", field: "first" },
      {
        name: "second",
        align: "center",
        label: "",
        field: "second",
      },
      { name: "third", align: "center", label: "", field: "third" },
    ],
    rows: [
      {
        name: "1\день",
        first: "true",
        second: "false",
        third: "false",
      },
      {
        name: "3\день",
        first: "false",
        second: "true",
        third: "false",
      },
      {
        name: "безлимит",
        first: "false",
        second: "false",
        third: "true",
      },
    ],
  },
  {
    columns: [
      {
        name: "name",
        required: true,
        label: "Счета",
        align: "left",
      },
      { name: "first", align: "center", label: "", field: "first" },
      {
        name: "second",
        align: "center",
        label: "",
        field: "second",
      },
      { name: "third", align: "center", label: "", field: "third" },
    ],
    rows: [
      {
        name: "Счета",
        first: "false",
        second: "true",
        third: "true",
      },
    ],
  },
  {
    columns: [
      {
        name: "name",
        required: true,
        label: "Умная воронка",
        align: "left",
        field: (row: any) => row.name,
      },
      { name: "first", align: "center", label: "", field: "first" },
      {
        name: "second",
        align: "center",
        label: "",
        field: "second",
      },
      { name: "third", align: "center", label: "", field: "third" },
    ],
    rows: [
      {
        name: "Умная воронка",
        first: "false",
        second: "false",
        third: "true",
      },
    ],
  },
  {
    columns: [
      {
        name: "name",
        required: true,
        label: "Доступ к аналитике ЛК",
        align: "left",
        field: (row: any) => row.name,
      },
      { name: "first", align: "center", label: "", field: "first" },
      {
        name: "second",
        align: "center",
        label: "",
        field: "second",
      },
      { name: "third", align: "center", label: "", field: "third" },
    ],
    rows: [
      {
        name: "Доступ к аналитике ЛК",
        first: "false",
        second: "false",
        third: "true",
      },
    ],
  },
  {
    columns: [
      {
        name: "name",
        required: true,
        label: "Сохранение новых вопросов",
        align: "left",
        field: (row: any) => row.name,
      },
      { name: "first", align: "center", label: "", field: "first" },
      {
        name: "second",
        align: "center",
        label: "",
        field: "second",
      },
      { name: "third", align: "center", label: "", field: "third" },
    ],
    rows: [
      {
        name: "1 в день",
        first: "true",
        second: "false",
        third: "false",
      },
      {
        name: "3 в день",
        first: "false",
        second: "true",
        third: "false",
      },
      {
        name: "6 в день",
        first: "false",
        second: "false",
        third: "true",
      },
    ],
  },
  {
    columns: [
      {
        name: "name",
        required: true,
        label: "Реклама/продвижение",
        align: "left",
        field: (row: any) => row.name,
      },
      { name: "first", align: "center", label: "", field: "first" },
      {
        name: "second",
        align: "center",
        label: "",
        field: "second",
      },
      { name: "third", align: "center", label: "", field: "third" },
    ],
    rows: [
      {
        name: "Реферальная программа",
        first: "true",
        second: "true",
        third: "true",
      },
      {
        name: "Seo- текста",
        first: "false",
        second: "false",
        third: "true",
      },
      {
        name: "6 в день",
        first: "false",
        second: "false",
        third: "true",
      },
    ],
  },
  {
    columns: [
      {
        name: "name",
        required: true,
        label: "Размещение на главной",
        align: "left",
        field: (row: any) => row.name,
      },
      { name: "first", align: "center", label: "", field: "first" },
      {
        name: "second",
        align: "center",
        label: "",
        field: "second",
      },
      { name: "third", align: "center", label: "", field: "third" },
    ],
    rows: [
      {
        name: "безлимит",
        first: "true",
        second: "false",
        third: "false",
      },
      {
        name: "2 статьи в месяц на 7 дней",
        first: "false",
        second: "true",
        third: "false",
      },
      {
        name: "2 статьи в месяц на 14 дней",
        first: "false",
        second: "false",
        third: "true",
      },
      {
        name: "2 статьи в месяц на 30 дней",
        first: "false",
        second: "false",
        third: "true",
      },
      {
        name: "Разработка личной страницы +SEO",
        first: "false",
        second: "false",
        third: "true",
      },
      {
        name: "Разработка корпоративной страницы +SEO",
        first: "false",
        second: "false",
        third: "true",
      },
      {
        name: "Добавление ссылки",
        first: "false",
        second: "false",
        third: "true",
      },
      {
        name: "Поднятие рейтинга за баллы",
        first: "false",
        second: "false",
        third: "true",
      },
      {
        name: "Накопительная и бонусная система",
        first: "false",
        second: "false",
        third: "true",
      },
      {
        name: "Платная оценка статьи эксперта",
        first: "false",
        second: "false",
        third: "true",
      },
      {
        name: "Реклама статей под ЦА",
        first: "false",
        second: "false",
        third: "true",
      },
    ],
  },
  {
    columns: [
      {
        name: "name",
        required: true,
        label: "ИИ Цифровой двойник",
        align: "left",
        field: (row: any) => row.name,
      },
      { name: "first", align: "center", label: "", field: "first" },
      {
        name: "second",
        align: "center",
        label: "",
        field: "second",
      },
      { name: "third", align: "center", label: "", field: "third" },
    ],
    rows: [
      {
        name: "Для статей",
        first: "true",
        second: "false",
        third: "false",
      },
      {
        name: "Для ответов",
        first: "false",
        second: "true",
        third: "false",
      },
      {
        name: "Для сбора и создания документов",
        first: "false",
        second: "false",
        third: "true",
      },
      {
        name: "Для парс-запросов",
        first: "false",
        second: "false",
        third: "true",
      },
    ],
  },
];

const tableShow = ref(true);

onMounted(async () => {
  payments.value = await getTariffs();
});
</script>

<template>
  <div class="user-all-long--tariffs" v-if="payments">
    <div class="user-all-long--tariffs__types">
      <div>Пользователи</div>
      <div>Специалисты</div>
      <div>Студенты</div>
      <div>Компании</div>
      <div>Гос. учреждении</div>
    </div>
    <div class="user-all-long--tariffs__container">
      <div>
        <p>Юрист</p>
        <p>Бухгалтер</p>
      </div>
      <div class="user-all-long--tariffs__cards cards">
        <div
          class="user-all-long--tariffs__card card"
          v-for="(payment, idx) in payments"
          :key="payment.type"
        >
          <div class="card__header">
            {{ payment.name }}
          </div>
          <div class="card__payment">{{ payment.cost }}</div>
          <q-btn
            @click="getTariff(payment.id)"
            class="card__button"
            label="Выбрать"
          />
          <q-btn
            @click="setTableColor(idx + 1)"
            class="card__button"
            label="Выделить"
          />
          <!-- color="primary" -->
        </div>
        <div
          class="user-all-long--tariffs__functions"
          @click="tableShow = !tableShow"
        >
          <iconDownArrow v-if="!tableShow" :size="24" />
          <iconUpArrow v-else :size="24" />
          <div>Функции</div>
        </div>
      </div>
      <div
        v-if="tableShow && tableItems"
        class="user-all-long--tariffs__table table"
      >
        <q-table
          v-for="(item, idx) in tableItems"
          :key="idx"
          flat
          :rows="item.rows"
          :columns="item.columns"
          row-key="name"
          hide-bottom
          :class="tableColor"
        >
          <template v-slot:body="props">
            <q-tr :props="props">
              <q-td key="name" :props="props">
                {{ props.row.name }}
              </q-td>
              <q-td key="first" :props="props">
                <div v-if="props.row.first == 'true'">
                  <img src="/src/assets/svg/blueCircle.svg" alt="blueCircle" />
                </div>
                <div v-if="props.row.first == 'false'">
                  <img src="/src/assets/svg/greyCircle.svg" alt="greyCircle" />
                </div>
              </q-td>
              <q-td key="first" :props="props">
                <div v-if="props.row.second == 'true'">
                  <img src="/src/assets/svg/blueCircle.svg" alt="blueCircle" />
                </div>
                <div v-if="props.row.second == 'false'">
                  <img src="/src/assets/svg/greyCircle.svg" alt="greyCircle" />
                </div>
              </q-td>
              <q-td key="first" :props="props">
                <div v-if="props.row.third == 'true'">
                  <img src="/src/assets/svg/blueCircle.svg" alt="blueCircle" />
                </div>
                <div v-if="props.row.third == 'false'">
                  <img src="/src/assets/svg/greyCircle.svg" alt="greyCircle" />
                </div>
              </q-td>
            </q-tr>
          </template>
        </q-table>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.red {
  background: #e71d36 !important;
}
.text-left {
  width: 30%;
}
img {
  width: 25px;
}

.first {
  // .table {
  thead {
    tr {
      & > th:nth-child(3) {
        background: rgba(255, 0, 0, 0.082);
      }
    }
  }
  tbody {
    tr {
      & > td:nth-child(2) {
        background: rgba(255, 0, 0, 0.082);
      }
    }
  }
  // }
}

@import "@/assets/styles/userViewStyle.scss";
</style>
<style lang="scss">
.user-all-long--tariffs {
  .first {
    // .table {
    thead {
      tr {
        & > th:nth-child(2) {
          background: #f3ffc9;
        }
      }
    }
    tbody {
      tr {
        & > td:nth-child(2) {
          background: #f3ffc9;
        }
      }
    }
    // }
  }
  .second {
    // .table {
    thead {
      tr {
        & > th:nth-child(3) {
          background: #d4e0ff;
        }
      }
    }
    tbody {
      tr {
        & > td:nth-child(3) {
          background: #d4e0ff;
        }
      }
    }
    // }
  }
  .third {
    // .table {
    thead {
      tr {
        & > th:nth-child(4) {
          background: #f0d9ff;
        }
      }
    }
    tbody {
      tr {
        & > td:nth-child(4) {
          background: #f0d9ff;
        }
      }
    }
    // }
  }
}
</style>
