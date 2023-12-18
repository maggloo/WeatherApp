import React, {FC} from 'react';

type CurrentTimeInfoPropsType = {
	day: string
	date: string
	time: string
}
const CurrentTimeInfo: FC<CurrentTimeInfoPropsType> = ({day, date, time}) => {

	return (
		<div>
			<div className={'flex justify-between text-lg font-semibold'}>
				<span>{day}</span>
				<div>{time}</div>
				<div>{date}</div>
			</div>
		</div>
	);
};

export default CurrentTimeInfo;
