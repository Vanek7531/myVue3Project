<script setup lang="ts">
import { cachedNotifications, markAlerts } from "@/use/alerts";
</script>
<template>
  <div class="alert-window__container">
    <!-- <pre>{{ cachedNotifications  }}</pre> -->
    <div v-if="cachedNotifications && cachedNotifications.length > 0">
      <div
        class="alert-window__body"
        v-for="alert in cachedNotifications"
        :key="alert.count.ticket_id"
      >
        <div class="alert-window__notification">{{ alert.count.notification }}</div>
        <q-btn
          round
          flat
          icon="clear"
          @click="markAlerts(alert.count.ticket_id)"
        >
          <q-tooltip> Удалить уведомление </q-tooltip>
        </q-btn>
      </div>
    </div>
    <div v-else>Уведомлений нету</div>
  </div>
</template>
<style scoped lang="scss">
.alert-window {
  &__container {
    position: absolute;
    right: 15%;
    z-index: 10;
    background: #f8f8fb;
    top: 91px;
    width: 300px;
    // height: 200px;
    border-radius: 20px;
    padding: 20px;
  }
  &__body {
    display: flex;
    gap: 10px;
    padding: 5px;
    margin-bottom: 20px;
    &:hover {
      background: #a5a5a51a;
    }
  }
}
</style>
