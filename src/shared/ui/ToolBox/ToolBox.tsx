import React, {ReactNode} from 'react';

type ToolBoxPropsType = {
    children: ReactNode
}
const ToolBox = (props: ToolBoxPropsType) => {
	const { children } = props;
	return (
		<div className={'rounded-xl border bg-card p-4 text-card-foreground shadow-sm md:p-6 relative flex h-fit w-full shrink-0 flex-col justify-between overflow-hidden md:h-[25rem]'}>
			{children}
		</div>
	);
};

export default ToolBox;
