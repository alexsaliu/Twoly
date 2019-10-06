import moment from 'moment';

// Return an array of dates to load calendar days
const initializeCalendarDays = (startDate, daysForward, daysBack) => {
    const dates = [];
    const equilizeWeeks = weekdaysBeforeAndAfterToday();
    const back = daysBack + equilizeWeeks[0];
    const forward = daysForward + equilizeWeeks[1] + 1;
    const start = moment(startDate).subtract(back, 'days').format('YYYY-MM-DD');
    for (let i = 0; i < back + forward; i++) {
        dates.push(moment(start).add(i, 'days').format('YYYY-MM-DD'));
    }
    return dates;
}

// Return number of days to include behind and in front of current day of week
// to ensure days are loaded in starting Monday as a multiple of 7
const weekdaysBeforeAndAfterToday = () => {
    const todaysDate = moment().day();
    if (todaysDate === 0) {
        return [6, 0];
    }
    else {
        const back = todaysDate - 1;
        const forward = 7 - todaysDate;
        console.log(back, forward);
        return [back, forward];
    }
}

// Returns array of dates before entered date if less than todays date, else dates after entered date.
// Takes in: starting date YYYY-MM-DD,
// number or days to load,
const loadMoreDates = (startDate, days) => {
    const dates = []
    if (moment(startDate) <= moment()) {
        for (let i = days; i > 0; i--) {
            dates.push(moment(startDate).subtract(i, 'days').format('YYYY-MM-DD'));
        }
    }
    else {
        for (let i = 1; i <= days; i++) {
            dates.push(moment(startDate).add(i, 'days').format('YYYY-MM-DD'));
        }
    }
    return dates;
}

export {initializeCalendarDays, loadMoreDates};
