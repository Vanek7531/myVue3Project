import { ref } from "vue";

export const useMain = () => {
  const inputSearchValue = ref("");

  const words = ref([
		"долги",
    "ЕНВД",
    "финансирование",
    "земля",
    "автоущерб/ГИБДД",
    "арбитраж",
    "банкротство",
    "бюджет",
    "налоги",
    "финансирование",
    "ЖКХ/ТСЖ",
    "арбитраж",
    "автоущерб/ГИБДД",
    "земля",
    "банкротство",
    "бюджет",
    "ЖКХ/ТСЖ",
    "налоги",
		"бюджет",
    "налоги",
    "финансирование",
    "ЖКХ/ТСЖ",
    "арбитраж",
    "автоущерб/ГИБДД",
    "земля",
  ]);

  const questions = [
    {
      fio: "Владислав Cтепанович Елисейь",
      text: "Здравствуйте, я пенсионер имею ли я право ездит в пригородных электричках бесплатно? (больше никаких льгот ",
      like: 5,
      disLike: 7,
      comment: 125,
      hearts: 5,
      date: "21.03.2023",
    },
    {
      fio: "Владислав Cтепанович Елисейь",
      text: "Здравствуйте, я пенсионер имею ли я право ездит в пригородных электричках бесплатно? (больше никаких льгот ",
      like: 5,
      disLike: 7,
      comment: 125,
      hearts: 5,
      date: "21.03.2023",
    },
    {
      fio: "Владислав Cтепанович Елисейь",
      text: "Здравствуйте, я пенсионер имею ли я право ездит в пригородных электричках бесплатно? (больше никаких льгот ",
      like: 5,
      disLike: 7,
      comment: 125,
      hearts: 5,
      date: "21.03.2023",
    },
    {
      fio: "Владислав Cтепанович Елисейь",
      text: "Здравствуйте, я пенсионер имею ли я право ездит в пригородных электричках бесплатно? (больше никаких льгот ",
      like: 5,
      disLike: 7,
      comment: 125,
      hearts: 5,
      date: "21.03.2023",
    },
    {
      fio: "Владислав Cтепанович Елисейь",
      text: "Здравствуйте, я пенсионер имею ли я право ездит в пригородных электричках бесплатно? (больше никаких льгот ",
      like: 5,
      disLike: 7,
      comment: 125,
      hearts: 5,
      date: "21.03.2023",
    },
    {
      fio: "Владислав Cтепанович Елисейь",
      text: "Здравствуйте, я пенсионер имею ли я право ездит в пригородных электричках бесплатно? (больше никаких льгот ",
      like: 5,
      disLike: 7,
      comment: 125,
      hearts: 5,
      date: "21.03.2023",
    },
    {
      fio: "Владислав Cтепанович Елисейь",
      text: "Здравствуйте, я пенсионер имею ли я право ездит в пригородных электричках бесплатно? (больше никаких льгот ",
      like: 5,
      disLike: 7,
      comment: 125,
      hearts: 5,
      date: "21.03.2023",
    },
    {
      fio: "Владислав Cтепанович Елисейь",
      text: "Здравствуйте, я пенсионер имею ли я право ездит в пригородных электричках бесплатно? (больше никаких льгот ",
      like: 5,
      disLike: 7,
      comment: 125,
      hearts: 5,
      date: "21.03.2023",
    },
    {
      fio: "Владислав Cтепанович Елисейь",
      text: "Здравствуйте, я пенсионер имею ли я право ездит в пригородных электричках бесплатно? (больше никаких льгот ",
      like: 5,
      disLike: 7,
      comment: 125,
      hearts: 5,
      date: "21.03.2023",
    },
    {
      fio: "Владислав Cтепанович Елисейь",
      text: "Здравствуйте, я пенсионер имею ли я право ездит в пригородных электричках бесплатно? (больше никаких льгот ",
      like: 5,
      disLike: 7,
      comment: 125,
      hearts: 5,
      date: "21.03.2023",
    },
    {
      fio: "Владислав Cтепанович Елисейь",
      text: "Здравствуйте, я пенсионер имею ли я право ездит в пригородных электричках бесплатно? (больше никаких льгот ",
      like: 5,
      disLike: 7,
      comment: 125,
      hearts: 5,
      date: "21.03.2023",
    },
    {
      fio: "Владислав Cтепанович Елисейь",
      text: "Здравствуйте, я пенсионер имею ли я право ездит в пригородных электричках бесплатно? (больше никаких льгот ",
      like: 5,
      disLike: 7,
      comment: 125,
      hearts: 5,
      date: "21.03.2023",
    },
    {
      fio: "Владислав Cтепанович Елисейь",
      text: "Здравствуйте, я пенсионер имею ли я право ездит в пригородных электричках бесплатно? (больше никаких льгот ",
      like: 5,
      disLike: 7,
      comment: 125,
      hearts: 5,
      date: "21.03.2023",
    },
    {
      fio: "Владислав Cтепанович Елисейь",
      text: "Здравствуйте, я пенсионер имею ли я право ездит в пригородных электричках бесплатно? (больше никаких льгот ",
      like: 5,
      disLike: 7,
      comment: 125,
      hearts: 5,
      date: "21.03.2023",
    },
    {
      fio: "Владислав Cтепанович Елисейь",
      text: "Здравствуйте, я пенсионер имею ли я право ездит в пригородных электричках бесплатно? (больше никаких льгот ",
      like: 5,
      disLike: 7,
      comment: 125,
      hearts: 5,
      date: "21.03.2023",
    },
    {
      fio: "Владислав Cтепанович Елисейь",
      text: "Здравствуйте, я пенсионер имею ли я право ездит в пригородных электричках бесплатно? (больше никаких льгот ",
      like: 5,
      disLike: 7,
      comment: 125,
      hearts: 5,
      date: "21.03.2023",
    },
    {
      fio: "Владислав Cтепанович Елисейь",
      text: "Здравствуйте, я пенсионер имею ли я право ездит в пригородных электричках бесплатно? (больше никаких льгот ",
      like: 5,
      disLike: 7,
      comment: 125,
      hearts: 5,
      date: "21.03.2023",
    },
    {
      fio: "Владислав Cтепанович Елисейь",
      text: "Здравствуйте, я пенсионер имею ли я право ездит в пригородных электричках бесплатно? (больше никаких льгот ",
      like: 5,
      disLike: 7,
      comment: 125,
      hearts: 5,
      date: "21.03.2023",
    },
  ];
  const specialists = [
    {
      fio: "Александр Станиславович Малютин",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et...",
      like: 8,
      disLike: 3,
      hearts: 11,
    },
    {
      fio: "Александр Станиславович Малютин",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et...",
      like: 8,
      disLike: 3,
      hearts: 11,
    },
    {
      fio: "Александр Станиславович Малютин",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et...",
      like: 8,
      disLike: 3,
      hearts: 11,
    },
    {
      fio: "Александр Станиславович Малютин",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et...",
      like: 8,
      disLike: 3,
      hearts: 11,
    },
    {
      fio: "Александр Станиславович Малютин",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et...",
      like: 8,
      disLike: 3,
      hearts: 11,
    },
    {
      fio: "Александр Станиславович Малютин",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et...",
      like: 8,
      disLike: 3,
      hearts: 11,
    },
    {
      fio: "Александр Станиславович Малютин",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et...",
      like: 8,
      disLike: 3,
      hearts: 11,
    },
    {
      fio: "Александр Станиславович Малютин",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et...",
      like: 8,
      disLike: 3,
      hearts: 11,
    },
    {
      fio: "Александр Станиславович Малютин",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et...",
      like: 8,
      disLike: 3,
      hearts: 11,
    },
    {
      fio: "Александр Станиславович Малютин",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et...",
      like: 8,
      disLike: 3,
      hearts: 11,
    },
    {
      fio: "Александр Станиславович Малютин",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et...",
      like: 8,
      disLike: 3,
      hearts: 11,
    },
    {
      fio: "Александр Станиславович Малютин",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et...",
      like: 8,
      disLike: 3,
      hearts: 11,
    },
    {
      fio: "Александр Станиславович Малютин",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et...",
      like: 8,
      disLike: 3,
      hearts: 11,
    },
    {
      fio: "Александр Станиславович Малютин",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et...",
      like: 8,
      disLike: 3,
      hearts: 11,
    },
    {
      fio: "Александр Станиславович Малютин",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et...",
      like: 8,
      disLike: 3,
      hearts: 11,
    },
    {
      fio: "Александр Станиславович Малютин",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et...",
      like: 8,
      disLike: 3,
      hearts: 11,
    },
    {
      fio: "Александр Станиславович Малютин",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et...",
      like: 8,
      disLike: 3,
      hearts: 11,
    },
    {
      fio: "Александр Станиславович Малютин",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et...",
      like: 8,
      disLike: 3,
      hearts: 11,
    },
    {
      fio: "Александр Станиславович Малютин",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et...",
      like: 8,
      disLike: 3,
      hearts: 11,
    },
    {
      fio: "Александр Станиславович Малютин",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et...",
      like: 8,
      disLike: 3,
      hearts: 11,
    },
    {
      fio: "Александр Станиславович Малютин",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et...",
      like: 8,
      disLike: 3,
      hearts: 11,
    },
    {
      fio: "Александр Станиславович Малютин",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et...",
      like: 8,
      disLike: 3,
      hearts: 11,
    },
  ];

	const articles = [
		{
			text:'Новое в правоведении, банкротство, налогах, финансах',
			size: {
				width: 2,
				height: 2
			}
		},
		{
			text:'Новое в правоведении, банкротство, налогах, финансах',
			size: {
				width: 1,
				height: 2
			}
		},
		{
			text:'Новое в правоведении, банкротство, налогах, финансах',
			size: {
				width: 1,
				height: 1
			}
		},
		{
			text:'Новое в правоведении, банкротство, налогах, финансах',
			size: {
				width: 1,
				height: 1
			}
		},
		{
			text:'Новое в правоведении, банкротство, налогах, финансах',
			size: {
				width: 1,
				height: 1
			}
		},
		{
			text:'Новое в правоведении, банкротство, налогах, финансах',
			size: {
				width: 1,
				height: 2
			}
		},
		{
			text:'Новое в правоведении, банкротство, налогах, финансах',
			size: {
				width: 2,
				height: 2
			}
		},
		{
			text:'Новое в правоведении, банкротство, налогах, финансах',
			size: {
				width: 3,
				height: 1
			}
		},
	]

	const gridSize = (articleSize:any) => {
		return articleSize.width === 2 && articleSize.height === 2 
			? 'two-by-two' 
				: articleSize.width === 1 && articleSize.height === 2 
					? 'two-by-one' :
							articleSize.width === 3 && articleSize.height === 1 
								? 'three-by-one'
									: 'one-by-one'
	}

  const targetInput = (value: string) => {
    inputSearchValue.value = value;
  };

  return { inputSearchValue, words, targetInput, questions, specialists, articles, gridSize };
};
