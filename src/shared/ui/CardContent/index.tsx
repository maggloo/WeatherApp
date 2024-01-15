import React, {FC} from 'react';

type CardContentPropsType = {
    children: React.ReactNode
	className?: string
}
const CardContent: FC<CardContentPropsType> = ({children, className = ''}) => {
	return (
		<div className={`font-semibold text-lg ${className}`}>
			{children}
		</div>
	);
};

export default CardContent;
