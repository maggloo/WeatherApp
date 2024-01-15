import React, {FC} from 'react';

type CardFooterPropsType = {
	children: React.ReactNode
	className?: string
}
const CardFooter: FC<CardFooterPropsType> = ({children, className = ''}) => {
	return (
		<div className={`mt-auto flex items-center pt-0 text-xs mt-6 ${className}`}>
			{children}
		</div>
	);
};

export default CardFooter;
