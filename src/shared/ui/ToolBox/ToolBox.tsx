import React, {FC, ReactNode} from 'react';
import CardHeader from '@/shared/ui/CardHeader/CardHeader';

type ToolBoxPropsType = {
    children: ReactNode
	className?: string
	header: boolean
}
const ToolBox:FC<ToolBoxPropsType> = ({children, className, header}) => {
	return (
		<div className={`rounded-xl border bg-card p-4 text-card-foreground shadow-sm md:p-6 relative ${className}`}>
			{ header &&
				<CardHeader title={'10-Day Forecast'}/>
			}
			{children}
		</div>
	);
};

export default ToolBox;
