import React from 'react';
import ToolBox from '@/shared/ui/ToolBox/ToolBox';
import UVInfo from '@/entities/ToolBox/ui/UVInfo';
import {useAppSelector} from '@/app/store/store';
import {uvIndexSelector} from '@/shared/selectors/weatherSelectors';

const UVIndex = () => {

	const uvIndex = useAppSelector(uvIndexSelector);

	return (
		<ToolBox header="UV Index" className="order-5 flex h-48 flex-col justify-between">
			<UVInfo uvIndex={uvIndex}/>
		</ToolBox>
	);
};

export default UVIndex;
