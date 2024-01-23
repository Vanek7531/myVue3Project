<script setup lang="ts">
import iconHeart from "@/components/icons/iconHeart.vue";
import iconComment from "@/components/icons/iconComment.vue";
import iconLike from "@/components/icons/iconLike.vue";
import iconDisLike from "@/components/icons/iconDisLike.vue";
</script>

<template>
  <div class="crm-specialists__container">
    <div class="crm-specialists__body" v-for="item in 4">
      <div class="crm-specialists__head">
        <img src="@/assets/img/artSpecialist.png" alt="speac" />
        Александр Станиславович Малютин
      </div>
      <div class="crm-specialists__statuses" v-if="true">
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
        <div><icon-dis-like />6</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.crm-specialists {
  &__container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  &__body {
    border-radius: 12px;
    background: var(--WhiteCompas, #fff);
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 420px;
    padding: 20px;
  }
  &__head {
    display: flex;
    gap: 10px;
    align-items: center;
    img {
      border-radius: 50%;
      width: 50px;
      height: 50px;
    }
    div {
      font-weight: 600;
    }
  }
  &__statuses {
    display: flex;
    gap: 10px;
    & > div {
      display: flex;
      align-items: center;
      gap: 5px;
    }
  }
}
@media (max-width: 1023px) {
  .crm-specialists {
    &__container {
      justify-content: space-around;
    }
  }
}
</style>
