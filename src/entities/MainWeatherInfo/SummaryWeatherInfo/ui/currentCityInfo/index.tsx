import React, {FC} from 'react';

type CityNamePropsType = {
    name: string
}
export const CityName: FC<CityNamePropsType> = ({ name }) => {
	return (
		<div className='text-xl w-64 whitespace-nowrap overflow-hidden text-ellipsis'>
			{ name }
		</div>
	);
};
