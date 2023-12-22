import dayjs from 'dayjs';

export const dayOfWeekCalculation = (dt: number) =>  dayjs.unix(dt).format('ddd');
