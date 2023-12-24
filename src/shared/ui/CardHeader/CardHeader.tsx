import React, {FC} from 'react';

type CardHeaderPropsType = {
    title: string
}
const CardHeader: FC<CardHeaderPropsType> = ({title}) => {
	return (
		<div className="flex flex-col space-y-1.5 pb-4">
			<h3 className="flex flex-row items-center gap-2 text-sm font-semibold leading-none tracking-tight text-neutral-600 md:text-base md:font-medium">
				{title}
			</h3>
		</div>
	);
};

export default CardHeader;
