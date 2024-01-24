import React, {FC} from 'react';
import {Table} from '@radix-ui/themes';

type ListPropsType = {
	status: string
	data: any[]
	handleSelect: any
}
export const List: FC<ListPropsType> = ({status, data, handleSelect}) => {
	return (
		<Table.Root variant="surface">
			<Table.Body>
				{status === 'OK' &&
					data.map((suggestion) => (
						<ListItem key={suggestion.place_id} suggestion={suggestion} handleSelect={handleSelect}/>
					))
				}
			</Table.Body>
		</Table.Root>
	);
};

type ListItemPropsType = {
	suggestion: any
	handleSelect: any
}
export const ListItem: FC<ListItemPropsType> = ({suggestion, handleSelect}) => {
	return (
		<Table.Row key={suggestion.place_id} >
			<Table.Cell onClick={handleSelect(suggestion)}>
				<strong>{suggestion.description}</strong>
			</Table.Cell>
		</Table.Row>
	);
};
