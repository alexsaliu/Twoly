import moment from 'moment';

const sayHi = () => {
    return "Say Hi";
}

const dates = [
    moment().add(0, 'days').format('dddd, YYYY MM DD'),
    moment().add(1, 'days').format('dddd, YYYY MM DD'),
    moment().add(2, 'days').format('dddd, YYYY MM DD'),
    moment().add(3, 'days').format('dddd, YYYY MM DD'),
    moment().add(4, 'days').format('dddd, YYYY MM DD'),
]

const initializeCalendarDates = (startDate, daysForward, daysBack) => {
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

export {initializeCalendarDates};
