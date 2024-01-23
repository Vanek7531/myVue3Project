<script setup lang="ts">
import { ref } from "vue";
// import { useStagesStore } from "../stores/stages";
import iconStar from "@/components/icons/iconStar.vue";
defineProps({
	stages: {
		type: Object,
		default: {},
	},
})
// const storeStages = useStagesStore();

const backgroundStar = (holdPoints: any) => {
  return sum.value - 1 >= holdPoints ? "#FFC702" : "none";
};

const stages = [
  {
    id: 0,
    thresholdPoints: 0,
  },
  {
    id: 1,
    thresholdPoints: 1,
  },
  {
    id: 2,
    thresholdPoints: 2,
  },
  {
    id: 3,
    thresholdPoints: 3,
  },
  {
    id: 4,
    thresholdPoints: 4,
  },
];

const sum = ref(3);

const showStar = (id: number) => {
  return id === 0 ? false : id + 1 === stages.length ? false : true;
};
const showCup = (id: number) => {
  return id + 1 === stages.length ? true : false;
};
const chooseRating = (id: number) => {
  return (sum.value = id + 1);
};
</script>
<template>
  <div>
    <div class="grid-points">
      <div class="star w" v-for="stage in stages" :key="stage.id">
        <icon-star
          style="cursor: pointer"
          @click="chooseRating(stage.id)"
          :color="backgroundStar(stage.thresholdPoints)"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.grid-points {
  display: flex;
  justify-content: space-between;
  // margin-top: 10px;
  max-width: 200px;
}
.grid-points .f:first-child {
  .w {
    opacity: 0;
  }
}
.yellow {
  color: #ffc702;
}
.grid-points .f:last-child {
  .w::after {
    opacity: 0;
  }
}
.w {
  text-align: center;
  // height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // width: 5px;
  img {
    top: -5px;
    width: 40px;
    position: absolute;
    left: -20px;
  }
}
.stars-points {
  // height: 50px;
  > div:first-child {
    // opacity: 0;
  }
  // div:first-child{
  // 	display: none;
  // }
  @extend .grid-points;
}
.star {
  position: relative;
  // top: -25px;
  // &::after {
  //   content: "";
  //   height: 40px;
  //   z-index: 3;
  //   position: absolute;
  //   right: 0;
  //   top: 30px;
  //   border-right: 1px solid grey;
  // }
}
</style>
