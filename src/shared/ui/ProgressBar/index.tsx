import React, {FC} from 'react';
import * as Progress from '@radix-ui/react-progress';

type ProgressBarPropsType = {
    value: number
}
const ProgressBar: FC<ProgressBarPropsType> = ({value}) => {
	return (
		<Progress.Root
			className="relative h-2.5 w-full overflow-hidden rounded-full bg-secondary"
			style={{
				background: 'linear-gradient(90deg, rgba(58,110,180,1) 0%, rgba(126,212,87,1) 20%, rgba(248,212,73,1) 40%, rgba(235,77,96,1) 60%, rgba(180,96,231,1) 80%, rgba(178,34,34,1) 100%)',
			}}
		>
			<Progress.Indicator
				className="h-2.5 w-2.5 flex-1 rounded-full bg-gray-800 shadow-lg shadow-white ring-2 ring-white transition-all dark:ring-black"
				style={{ marginLeft: `${value || 0}%` }}
			/>
		</Progress.Root>
	);
};

export default ProgressBar;
