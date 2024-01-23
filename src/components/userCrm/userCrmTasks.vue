<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
// import draggable from "vuedraggable";
import draggable from "vuedraggable";
import newTask from "@/components/userCrm/CrmTasks/newTask.vue";
import openTask from "@/components/userCrm/CrmTasks/openTask.vue";
import fastNewTask from "@/components/userCrm/CrmTasks/fastNewTask.vue";
import { userCrm } from "@/use/useUserCrm";

const {
  userTasks,
  getTasks,
  toWork,
  atWork,
  ready,
  changeTaskStatus,
  statusNewTask,
  currentComp,
} = userCrm();

const currentTask = ref({});

const dragOptions = computed(() => {
  return {
    animation: 200,
    group: "tasks",
    disabled: false,
    ghostClass: "ghost",
  };
});

const openCurrentTask = (task: any) => {
  currentTask.value = task;
  currentComp.value = "currentTask";
};
const openNewTask = (status: string) => {
  currentComp.value = "newTask";
  statusNewTask.value = status;
};
const openFastNewTask = () => {
  currentComp.value = "fastNewTask";
};

const myList = ref(["name", "so,e", "funny"]);
// const getList = (list: any) => {
//   return items.value.filter((el) => el.list === list);
// };
const drag = ref();

const changeAtWork = (evt:any) => {
  if (evt.added) {
    changeTaskStatus(evt.added.element.id, "At work");
  }
};
const changeToWork = (evt:any) => {
  if (evt.added) {
    changeTaskStatus(evt.added.element.id, "To work");
  }
};
const changeReady = (evt:any) => {
  if (evt.added) {
    changeTaskStatus(evt.added.element.id, "Ready");
  }
};

onMounted(() => {
  getTasks();
});
</script>

<template>
  <div
    class="user-crm--tasks__container"
    v-if="currentComp === 'allTasks' && userTasks"
  >
    <div class="user-crm--tasks__quick-task" @click="openFastNewTask()">
      +Быстрая задача
    </div>
    <!-- <div class="user-crm--tasks__table">
      <div class="user-crm--tasks__table-to--work"></div>
      <div class="user-crm--tasks__table-at--work"></div>
      <div class="user-crm--tasks__table-ready"></div>
    </div> -->
    <div class="user-crm--tasks__table">
      <draggable
        @change="changeToWork"
        class="user-crm--tasks__table-to--work list-group"
        v-model="toWork"
        item-key="id"
        v-bind="dragOptions"
        @start="drag = true"
        @end="drag = false"
        :component-data="{
          tag: 'ul',
          type: 'transition-group',
          name: !drag ? 'flip-list' : null,
        }"
      >
        <template #header>
          <div class="task-header" role="group">
            <div class="task-header__name">в работу</div>
            <div>
              <div class="task-header__new" @click="openNewTask('To work')">
                <img src="@/assets/svg/plus.svg" alt="plus" />
              </div>
              <div class="task-header__filter">
                <img src="@/assets/svg/filter.svg" alt="filter" />
              </div>
            </div>
          </div>
        </template>
        <template #item="{ element }">
          <div
            class="task-body list-group-item"
            @click="openCurrentTask(element), (element.fixed = !element.fixed)"
            :class="
              element.fixed ? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'
            "
            aria-hidden="true"
          >
            <div class="task-body--head">
              <div><img src="@/assets/img/specialistMan.png" alt="man" /></div>
              <div>{{ element.name }}</div>
            </div>
            <div class="task-body--dates">
              <div>{{ element.dateStart }}</div>
              <div>{{ element.dateEnd }}</div>
            </div>
            <div class="task-body--name">{{ element.taskName }}</div>
          </div>
        </template>
      </draggable>
      <draggable
        @change="changeAtWork"
        class="user-crm--tasks__table-in--work"
        v-model="atWork"
        item-key="id"
        v-bind="dragOptions"
        @start="drag = true"
        @end="drag = false"
        :component-data="{ tag: 'ul', name: 'flip-list', type: 'transition' }"
      >
        <template #header>
          <div class="task-header" role="group">
            <div class="task-header__name">в работе</div>
            <div>
              <div class="task-header__new" @click="openNewTask('At work')">
                <img src="@/assets/svg/plus.svg" alt="plus" />
              </div>
              <div class="task-header__filter">
                <img src="@/assets/svg/filter.svg" alt="filter" />
              </div>
            </div>
          </div>
        </template>
        <template #item="{ element }">
          <div
            class="task-body"
            @click="openCurrentTask(element), (element.fixed = !element.fixed)"
            :class="
              element.fixed ? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'
            "
          >
            <div class="task-body--head">
              <div>
                <div>
                  <img src="@/assets/img/specialistMan.png" alt="man" />
                </div>
                <div>{{ element.name }}</div>
              </div>
              <div>{{ element.dateEnd }}</div>
            </div>
            <div class="task-body--name">{{ element.taskName }}</div>
          </div>
        </template>
      </draggable>
      <draggable
        class="user-crm--tasks__table-readry"
        @change="changeReady"
        v-model="ready"
        item-key="id"
        v-bind="dragOptions"
        @start="drag = true"
        @end="drag = false"
        :component-data="{ tag: 'ul', name: 'flip-list', type: 'transition' }"
      >
        <template #header>
          <div class="task-header" role="group">
            <div class="task-header__name">готовые</div>
            <div>
              <div class="task-header__new" @click="openNewTask('Ready')">
                <img src="@/assets/svg/plus.svg" alt="plus" />
              </div>
              <div class="task-header__filter">
                <img src="@/assets/svg/filter.svg" alt="filter" />
              </div>
            </div>
          </div>
        </template>
        <template #item="{ element }">
          <div
            class="task-body"
            @click="openCurrentTask(element), (element.fixed = !element.fixed)"
            :class="
              element.fixed ? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'
            "
          >
            <div class="task-body--head">
              <div>
                <div>
                  <img src="@/assets/img/specialistMan.png" alt="man" />
                </div>
                <div>{{ element.name }}</div>
              </div>
              <div>{{ element.dateEnd }}</div>
            </div>
            <div class="task-body--name">{{ element.taskName }}</div>
          </div>
        </template>
      </draggable>
      <!-- <draggable
        class="list-group"
        item-key="order"
        tag="transition-group"
        :component-data="{ tag: 'ul', name: 'flip-list', type: 'transition' }"
        v-model="list"
        v-bind="dragOptions"
        @start="isDragging = true"
        @end="isDragging = false"
      >
        <template #item="{ element }">
          <li class="list-group-item">
            <i
              :class="
                element.fixed ? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'
              "
              @click="element.fixed = !element.fixed"
              aria-hidden="true"
            ></i>
            {{ element.name }}
          </li>
        </template>
      </draggable> -->
    </div>
  </div>
  <newTask v-if="currentComp === 'newTask'" />
  <openTask :task="currentTask" v-if="currentComp === 'currentTask'" />
  <fast-new-task v-if="currentComp === 'fastNewTask'" />
</template>

<style scoped lang="scss">
.user-crm--tasks {
  &__table {
    display: flex;
    & > div {
      flex: 0 1 33.3%;
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 20px;
      padding: 30px 10px;
      overflow-x: hidden;
      overflow-y: auto;
      height: 800px;
      margin-right: 5px;
    }
    & > div:not(:first-child) {
      .task-body--head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 12px;
        & div:first-child {
          display: flex;
          gap: 10px;
          color: #121212;
          align-items: center;
        }
      }
    }
    .task-header {
      display: flex;
      text-transform: uppercase;
      gap: 10px;
      width: 100%;
      justify-content: space-around;
      // align-items: center;
      & > div {
        display: flex;
        font-weight: 600;
        align-items: center;
      }
      &__new {
        cursor: pointer;
      }
      &__filter {
      }
    }

    .task-body {
      border-radius: 12px;
      background: var(--WhiteCompas, #fff);
      padding: 10px 30px;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      gap: 20px;
      width: 300px;
      img {
        border-radius: 20px;
      }
      & * {
        font-weight: 600;
      }
    }
    .task-body--name {
      font-size: 16px;
      font-weight: 600;
    }
  }
  &__quick-task {
    text-decoration: underline;
    cursor: pointer;
    line-height: 120%;
    padding: 2px;
    &:hover {
      opacity: 0.8;
    }
  }
  &__table-to--work {
    .task-body--head {
      display: flex;
      gap: 20px;
      color: #121212;
      font-size: 12px;
    }
    .task-body--dates {
      display: flex;
      justify-content: space-between;
      gap: 30px;
      font-size: 12px;
      & div:first-child {
        color: #919cb8;
      }
      & div:first-child {
        color: #919cb8;
      }
    }
  }
  &__table-in--work {
    border-left: 3px solid #4b73db;
  }
  &__table-readry {
    border-left: 3px solid #4b73db;
  }
}
@media (max-width: 1023px) {
  .user-crm--tasks {
    &__table {
      .task-body {
        width: 100%;
      }
    }
  }
}
@media (max-width: 767px) {
  .user-crm--tasks {
    &__table {
      flex-direction: column;
    }
  }
}
</style>
<style lang="scss">
.flip-list-move {
  transition: transform 0.5s;
}

.no-move {
  transition: transform 0s;
}

.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}

.list-group {
  min-height: 20px;
}

.list-group-item {
  cursor: move;
}

.list-group-item i {
  cursor: pointer;
}
</style>
