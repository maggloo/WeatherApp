import React, {ChangeEvent, FC, useState} from 'react';
import {TextField} from '@radix-ui/themes';
import {MagnifyingGlassIcon} from '@radix-ui/react-icons';

type SearchPropsType = {
    searchValue: string
	setValue?: (value: string) => void
    disabled: boolean
    placeholder: string
}
export const Input: FC<SearchPropsType> = ({ searchValue, disabled, placeholder, setValue }) => {
	const [value, setCurrentValue] = useState(searchValue);

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setCurrentValue(e.currentTarget.value);
		setValue?.(e.currentTarget.value);
	};

	return (
		<TextField.Root>
			<TextField.Slot>
				<MagnifyingGlassIcon height="16" width="16" />
			</TextField.Slot>
			<TextField.Input radius={'large'} disabled={disabled} onChange={onChangeHandler} defaultValue={value} placeholder={placeholder} />
		</TextField.Root>
	);
};

