import httpService from "@/api/server";
import { computed, ref } from "vue";
import { inputSearchValue } from "./useMainPage";

export const useSpecialists = () => {
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
  const allSpecialists = ref();
  const specialist = ref();
  const rating = ref(0);
  const isRated = ref(false);
  const message = ref("");

  const refAllSpecialists = computed(() => {
    if (
      allSpecialists.value?.length > 0 &&
      inputSearchValue.value?.length > 0
    ) {
      let searchRes = allSpecialists.value.filter((el: any) =>
        el.user_full_name.includes(inputSearchValue.value)
      );
      return searchRes.length > 0 ? searchRes : "Совпадений нету";
    }
    if (
      allSpecialists.value?.length > 0 &&
      inputSearchValue.value?.length <= 0
    ) {
      return allSpecialists.value;
    } else return [];
  });

  const getSpecialists = async () => {
    try {
      const { data } = await httpService.get("/api/specialists/");
      // console.log("allSpecialists.value", allSpecialists.value);
      allSpecialists.value = data.results;
    } catch (error) {
      console.log(error);
    }
  };

  const getSpecialist = async (id: number) => {
    try {
      const { data } = await httpService.get(`/api/specialists/${id}`);
      specialist.value = data;
      rating.value = specialist.value.rating;
    } catch (error) {
      console.log(error);
    }
  };

  const backgroundStar = (holdPoints: any) => {
    return rating.value - 1 >= holdPoints ? "#FFC702" : "none";
  };

  const chooseRating = async (id: number) => {
    // article/его id/add_rating/
    try {
      const data = await httpService.post(
        `api/rating/specialist/${specialist.value.user.id}/add_rating/`,
        {
          rating: id + 1,
        }
      );
      isRated.value = true;
      message.value = data.data.message;
      return (rating.value = id + 1);
    } catch (er: any) {
      if (er && er.response.data.message.includes("уже")) {
        isRated.value = true;
        message.value = er.response.data.message;
      }
      return specialist.value.rating;
    }
  };

  return {
    getSpecialists,
    allSpecialists,
    getSpecialist,
    specialist,
    backgroundStar,
    chooseRating,
    rating,
    message,
    isRated,
    refAllSpecialists,
    stages,
  };
};
