import React, {ChangeEvent, FC, useState} from 'react';
import { TextField } from '@radix-ui/themes';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';

type SearchPropsType = {
	searchValue: string
}
export const Search: FC<SearchPropsType> = ({searchValue}) => {
	const [value, setValue] = useState(searchValue);

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.currentTarget.value);
	};

	return (
		<TextField.Root>
			<TextField.Slot>
				<MagnifyingGlassIcon height="16" width="16" />
			</TextField.Slot>
			<TextField.Input onChange={onChangeHandler} defaultValue={value} placeholder="Search city..." />
		</TextField.Root>
	);
};

