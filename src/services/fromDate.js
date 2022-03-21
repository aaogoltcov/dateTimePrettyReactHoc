export default function fromDate(dateString) {
    const date = Date.parse(dateString);
    const dateObject = new Date(date);
    const nowDate = Date.now();
    const monthDays = new Date(dateObject.getFullYear(), dateObject.getMonth(), 0).getDate();
    const datesDifferenceInSeconds = (nowDate - date) / 1000;
    const datesDifferenceInMinutes = datesDifferenceInSeconds / 60;
    const datesDifferenceInHours = datesDifferenceInMinutes / 60;
    const datesDifferenceInDays = datesDifferenceInHours / 24;
    const datesDifferenceInMonths = datesDifferenceInDays / monthDays;
    const datesDifferenceInYears = datesDifferenceInMonths / 12
    let dateFrom = String();
    if (datesDifferenceInMinutes < 60) {
        const minutesFrom = Math.round(datesDifferenceInMinutes)
        dateFrom = minutesFrom + (minutesFrom === 1 ? " минута" : minutesFrom <= 4 ? " минуты" : " минут") + " назад";
    } else if (datesDifferenceInHours < 24) {
        const hoursFrom = Math.round(datesDifferenceInHours);
        dateFrom = hoursFrom + (hoursFrom === 1 ? " час" : hoursFrom <= 4 ? " часа" : " часов") + " назад";
    } else if (datesDifferenceInDays < monthDays) {
        const daysFrom = Math.round(datesDifferenceInDays);
        dateFrom = daysFrom + (daysFrom === 1 ? " день" : daysFrom <= 4 ? " дня" : " дней") + " назад";
    } else if (datesDifferenceInMonths < 12) {
        const monthsFrom = Math.round(datesDifferenceInMonths);
        dateFrom = monthsFrom + (monthsFrom === 1 ? " месяц" : monthsFrom <= 4 ? " месяца" : " месяцев") + " назад";
    } else {
        const yearsFrom = Math.round(datesDifferenceInYears);
        dateFrom = yearsFrom + (yearsFrom === 1 ? " год" : yearsFrom <= 4 ? " года" : " лет") + " назад";
    }
    return dateFrom;
}