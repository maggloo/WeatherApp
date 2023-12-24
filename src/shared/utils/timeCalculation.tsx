import dayjs from 'dayjs';

export const dayOfWeekCalculation = (dt: number) =>  dayjs.unix(dt).format('ddd');
export const hourCalculation = (dt: number) =>  dayjs.unix(dt).format('HH');
