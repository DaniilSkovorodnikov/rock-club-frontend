export function getWeekRange(date: Date) {
    let dayOfWeek = date.getDay();  
    if (dayOfWeek === 0) {
      dayOfWeek = 7;
    }
    const diffToMonday = dayOfWeek - 1;
    const startOfWeek = new Date(date);
    startOfWeek.setDate(date.getDate() - diffToMonday);
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);
    return [startOfWeek, endOfWeek];
}

export const genitiveMonths = [
    "января", "февраля", "марта", "апреля", "мая", "июня", 
    "июля", "августа", "сентября", "октября", "ноября", "декабря"
];

export function getWeekPickerLabel(dateFrom: Date, dateTo: Date) {
  const dayFrom = dateFrom.getDate();
  const dayTo = dateTo.getDate();
  const monthFrom = dateFrom.getMonth();
  const monthTo = dateTo.getMonth();

  if (monthFrom === monthTo) {
    return `${dayFrom} - ${dayTo} ${genitiveMonths[monthFrom]}`;
  }
  return `${dayFrom} ${genitiveMonths[monthFrom]} - ${dayTo} ${genitiveMonths[monthTo]}`;
}