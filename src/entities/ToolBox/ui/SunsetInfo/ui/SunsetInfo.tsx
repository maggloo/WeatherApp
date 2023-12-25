import React, {FC} from 'react';

type SunsetInfoPropsType = {
    sunset: string
    sunrise: string
}

const SunsetInfo: FC<SunsetInfoPropsType> = ({sunset, sunrise}) => {
	return (
		<>
			<div className="font-semibold md:text-lg">
				<p>
					{sunset}
				</p>
			</div>
			<div className="mt-auto flex items-center pt-0 text-xs md:text-sm">
				<p>
					Sunrise: {sunrise}
				</p>
			</div>
		</>
	);
};

export default SunsetInfo;
