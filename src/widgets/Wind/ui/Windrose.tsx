import React from 'react';
import {useAppSelector} from '@/app/store/store';
import {windSelector} from '@/shared/selectors/weatherSelectors';
import ToolBox from '@/shared/ui/ToolBox/ToolBox';
import WindInfo from '@/entities/ToolBox/ui/WindInfo/ui/WindInfo';
const Windrose = () => {
	const wind = useAppSelector(windSelector);

	return (
		<ToolBox className="order-4 h-48 xl:order-2" header="Wind">
			<WindInfo wind={wind}/>
		</ToolBox>
	);
};

export default Windrose;
