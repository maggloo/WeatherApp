import React from 'react';
import {useAppSelector} from '@/app/store/store';
import {windSelector} from '@/shared/selectors/weatherSelectors';
import ToolBox from '@/shared/ui/ToolBox/ToolBox';
import WindInfo from '@/entities/ToolBox/ui/WindInfo/ui/WindInfo';
const Windrose = () => {
	const wind = useAppSelector(windSelector);

	return (
		<ToolBox className="h-48">
			<WindInfo wind={wind}/>
		</ToolBox>
	);
};

export default Windrose;
