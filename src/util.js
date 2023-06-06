import dayjs from 'dayjs';

const DATE_FORMAT = 'MMM D';
const TIME_FORMAT = 'H:mm';
const YEARS_FORMAT = 'DD/MM/YY';

export const getRandElement = (items) => items[Math.floor(Math.random() *
  items.length)];

export const getRandPrice = () => Math.floor(Math.random() * 1000) + 100;

export const getRandId = () => Math.floor(Math.random() * 100) + 1;

export const getRandPic = () => `http://picsum.photos/248/152?r=${getRandId()}`;

export const getTimeDate = (date) => date.substring(0, date.indexOf('T'));
export const getDateForm = (date) => dayjs(date).format(DATE_FORMAT);
export const getDateTime = (date) => date.substring(0, date.indexOf(':'));
export const getTimeFormat = (date) => dayjs(date).format(TIME_FORMAT);
export const getYearsFormat = (date) => dayjs(date).format(YEARS_FORMAT);
