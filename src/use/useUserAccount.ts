export const useUser = () => {
  const user = {
    name: "Александр Станиславович Малютин",
		place:'Екатеринбург',
    tarif: {
			name:'good',
      city: 1,
      services: 2,
      form: 3,
      cloud: "10Gb",
    },
    rating: {
      position: 5,
      rate: 15,
      feedBack: 5,
    },
    messages: [
      {
        name: "Влад Евсеев",
        text: "Здравствуйте, я пенсионер имею ли я право ездит в пригородных электричках бесплатно?......",
      },
      {
        name: "Влад Евсеев",
        text: "Здравствуйте, я пенсионер имею ли я право ездит в пригородных электричках бесплатно?......",
      },
    ],
    subscribe: ["банкротство", "наследство", "банк"],
  };
  return {user};
};