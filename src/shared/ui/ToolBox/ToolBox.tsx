import React, {FC, ReactNode} from 'react';

type ToolBoxPropsType = {
    children: ReactNode
	className?: string
}
const ToolBox:FC<ToolBoxPropsType> = ({children, className}) => {
	return (
		<div className={`rounded-xl border bg-card p-4 text-card-foreground shadow-sm md:p-6 relative h-fit shrink-0 ${className}`}>
			{children}
		</div>
	);
};

export default ToolBox;
