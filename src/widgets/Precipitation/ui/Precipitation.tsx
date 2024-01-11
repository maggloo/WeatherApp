import React from 'react';
import ToolBox from '@/shared/ui/ToolBox/ToolBox';
import PrecipitationInfo from '@/entities/ToolBox/ui/PrecipitationInfo/ui/PrecipitationInfo';

const Precipitation = () => {
	return (
		<ToolBox header="Precipitation" className="order-6 flex h-48 flex-col justify-between">
			<PrecipitationInfo/>
		</ToolBox>
	);
};

export default Precipitation;
