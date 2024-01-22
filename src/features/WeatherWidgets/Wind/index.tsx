import React, {FC} from 'react';
import ToolBox from '@/shared/ui/ToolBox/ToolBox';
import {WindInfo} from '@/entities/WeatherWidgets';

type WindPropsType = {
	wind_speed: number
	wind_deg: number
}
export const Wind: FC<WindPropsType> = ({wind_speed, wind_deg}) => {

	return (
		<ToolBox className="order-4 h-48 xl:order-2" header="Wind">
			<WindInfo wind_speed={wind_speed} wind_deg={wind_deg}/>
		</ToolBox>
	);
};

