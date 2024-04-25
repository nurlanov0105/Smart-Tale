import { BoardHeadingType, Order } from "./types";

export const BoardData: Order[] = [
   {
      id: 1,
      orderIndex: 1,
      title: "Заказ №2456",
      description: "Сшить 10 штук футболок",
      date: "15 апреля",
      status: "New",
   },
   {
      id: 2,
      orderIndex: 2,
      title: "Заказ №2457",
      description: "Сшить 20 штук носков",
      date: "16 апреля",
      status: "New",
   },
   {
      id: 3,
      orderIndex: 3,
      title: "Заказ №2458",
      description: "Сделать дизайн сайта",
      date: "17 апреля",
      status: "Process",
   },
   {
      id: 4,
      orderIndex: 4,
      title: "Заказ №2459",
      description: "Разработать логотип",
      date: "18 апреля",
      status: "Process",
   },
   {
      id: 5,
      orderIndex: 5,
      title: "Заказ №2460",
      description: "Провести обучающий вебинар",
      date: "19 апреля",
      status: "Checking",
   },
   {
      id: 6,
      orderIndex: 6,
      title: "Заказ №2461",
      description: "Подготовить отчет по проекту",
      date: "20 апреля",
      status: "Checking",
   },
   {
      id: 7,
      orderIndex: 7,
      title: "Заказ №2462",
      description: "Отправить готовый макет заказчику",
      date: "21 апреля",
      status: "Sending",
   },
   {
      id: 8,
      orderIndex: 8,
      title: "Заказ №2463",
      description: "Принять обратную связь от клиента",
      date: "22 апреля",
      status: "Arrived",
   },
];

export const BoardHeading: BoardHeadingType[] = [
   {
      id: 1,
      name: "Новые",
      status: "New",
      color: "#C3FFFB",
   },
   {
      id: 2,
      name: "В работе",
      status: "Process",
      color: "#C5E6FF",
   },
   {
      id: 3,
      name: "Проверка",
      status: "Checking",
      color: "#FFFBA1",
   },
   {
      id: 4,
      name: "Отправка",
      status: "Sending",
      color: "#FFD9A1",
   },
   {
      id: 5,
      name: "Прибыл",
      status: "Arrived",
      color: "#E6FFA1",
   },
];

// export const BoardData2: any = [
//    {
//       id: 1,
//       name: "Новые",
//       status: "New",
//       color: "#C3FFFB",
//       items: [
//          {
//             id: 1,
//             title: "Заказ №2456",
//             description: "Сшить 10 штук футболок",
//             date: "15 апреля",
//          },
//          {
//             id: 2,
//             title: "Заказ №2457",
//             description: "Сшить 20 штук носков",
//             date: "16 апреля",
//          },
//       ],
//    },
//    {
//       id: 2,
//       name: "В работе",
//       status: "Process",
//       color: "#C5E6FF",
//       items: [
//          {
//             id: 3,
//             title: "Заказ №2458",
//             description: "Сделать дизайн сайта",
//             date: "17 апреля",
//          },
//          {
//             id: 4,
//             title: "Заказ №2459",
//             description: "Разработать логотип",
//             date: "18 апреля",
//          },
//       ],
//    },
//    {
//       id: 3,
//       name: "Проверка",
//       status: "Checking",
//       color: "#FFFBA1",
//       items: [
//          {
//             id: 5,
//             title: "Заказ №2460",
//             description: "Провести обучающий вебинар",
//             date: "19 апреля",
//          },
//          {
//             id: 6,
//             title: "Заказ №2461",
//             description: "Подготовить отчет по проекту",
//             date: "20 апреля",
//          },
//       ],
//    },
//    {
//       id: 4,
//       name: "Отправка",
//       status: "Sending",
//       color: "#FFD9A1",
//       items: [
//          {
//             id: 7,
//             title: "Заказ №2462",
//             description: "Отправить готовый макет заказчику",
//             date: "21 апреля",
//          },
//       ],
//    },
//    {
//       id: 5,
//       name: "Прибыл",
//       status: "Arrived",
//       color: "#E6FFA1",
//       items: [
//          {
//             id: 8,
//             title: "Заказ №2463",
//             description: "Принять обратную связь от клиента",
//             date: "22 апреля",
//          },
//          {
//             id: 9,
//             title: "Заказ №2464",
//             description: "Принять обратную связь",
//             date: "24 апреля",
//          },
//          {
//             id: 10,
//             title: "Заказ №2465",
//             description: "от клиента",
//             date: "29 апреля",
//          },
//       ],
//    },
// ];
