export const formattingDate = (isoString: string): string => {
   const date: Date = new Date(isoString);

   const day: number = date.getUTCDate();
   const month: number = date.getUTCMonth();
   const year: number = date.getUTCFullYear();

   const monthNames: string[] = [
      "января",
      "февраля",
      "марта",
      "апреля",
      "мая",
      "июня",
      "июля",
      "августа",
      "сентября",
      "октября",
      "ноября",
      "декабря",
   ];

   return `${day} ${monthNames[month]} ${year}`;
};
