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

const generateDates = (startDate, daysForward, daysBack) => {
    const dates = [];
    const start = moment(startDate).subtract(daysBack, 'days').format('YYYY-MM-DD');
    for (let i = 0; i < daysBack + daysForward; i++) {
        dates.push(moment(start).add(i, 'days').format('YYYY-MM-DD'));
    }
    return dates;
}

export {generateDates};
