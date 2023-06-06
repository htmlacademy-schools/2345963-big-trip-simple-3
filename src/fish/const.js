export const pointTypes = ['taxi', 'bus', 'train', 'ship', 'drive',
  'flight', 'check-in', 'sightseeing', 'restaurant'];

export const pullOfDates = [
  {
    dateFrom: '2023-06-15T11:22:13.375Z',
    dateTo: '2023-06-15T14:40:13.375Z'
  },
  {
    dateFrom: '2023-01-21T12:00:17.375Z',
    dateTo: '2023-01-21T15:30:17.375Z'
  },
  {
    dateFrom: '2023-01-25T06:30:15.375Z',
    dateTo: '2023-01-25T09:40:30.375Z'
  },
  {
    dateFrom: '2019-07-15T09:15:13.375Z',
    dateTo: '2019-07-15T12:00:13.375Z'
  },
  {
    dateFrom: '2023-05-21T12:00:17.375Z',
    dateTo: '2023-05-21T15:30:17.375Z'
  },
  {
    dateFrom: '2019-08-03T11:22:13.375Z',
    dateTo: '2019-08-03T11:40:13.375Z'
  },
  {
    dateFrom: '2023-07-17T18:12:13.375Z',
    dateTo: '2023-07-17T21:00:00.375Z'
  },
  {
    dateFrom: '2023-07-21T12:00:17.375Z',
    dateTo: '2023-07-21T15:30:17.375Z'
  },
  {
    dateFrom: '2019-08-05T07:30:13.375Z',
    dateTo: '2019-08-05T09:00:13.375Z'
  },
  {
    dateFrom: '2023-07-30T17:15:15.375Z',
    dateTo: '2023-07-30T18:15:18.375Z'
  }
];

export const pullOfOffers = [
  {
    id: 1,
    title: 'Upgrade a business class',
    price: 120
  },
  {
    id: 2,
    title: 'Add luggage',
    price: 60
  },
  {
    id: 3,
    title: 'Switch to comfort',
    price: 40
  },
  {
    id: 4,
    title: 'Add meal',
    price: 75
  },
  {
    id: 5,
    title: 'Add alcohol',
    price: 90
  },
  {
    id: 6,
    title: 'Choose a seat',
    price: 35
  },
  {
    id: 7,
    title: 'Personal transfer',
    price: 280
  },
  {
    id: 8,
    title: 'Upgrade a car',
    price: 150
  },
  {
    id: 9,
    title: 'Bring a blanket',
    price: 20
  }
];

const taxiOffers = [1, 3];

const busOffers = [2, 6];

const trainOffers = [4, 9];

const shipOffers = [2, 4, 5, 6, 7, 9];

const driveOffers = [1, 3, 8];

const flightOffers = [2, 4, 5, 6, 7, 9];

const checkInOffers = [4];

const sightseeingOffers = [2, 7, 9];

const restaurantOffers = [6, 9];


export const getOffersByType = (type) => {
  switch (type) {
    case 'taxi':
      return taxiOffers;
    case 'bus':
      return busOffers;
    case 'train':
      return trainOffers;
    case 'ship':
      return shipOffers;
    case 'drive':
      return driveOffers;
    case 'flight':
      return flightOffers;
    case 'check-in':
      return checkInOffers;
    case 'sightseeing':
      return sightseeingOffers;
    case 'restaurant':
      return restaurantOffers;
  }
};

export const descriptiveText = [ `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Cras aliquet varius magna, non porta ligula feugiat eget.
  Fusce tristique felis at fermentum pharetra.
  Aliquam id orci ut lectus varius viverra.
  Sed sed nisi sed augue convallis suscipit in sed felis.
  `];

export const cities = [
  'Shanghai', 'New York', 'Tokyo', 'Paris', 'Seoul'
];
