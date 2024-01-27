import React, {FC, MouseEventHandler} from 'react';
import {Table} from '@radix-ui/themes';
import AutocompletePrediction = google.maps.places.AutocompletePrediction;
import styles from './List.module.css';

type ListPropsType = {
	status: string
	data: AutocompletePrediction[]
	handleSelect: (suggestion: AutocompletePrediction) => MouseEventHandler<HTMLTableDataCellElement>
}
export const List: FC<ListPropsType> = ({status, data, handleSelect}) => {
	return (
		<Table.Root variant="surface" className={styles.root}>
			<Table.Body className={styles.body}>
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
	suggestion: AutocompletePrediction
	handleSelect: (suggestion: AutocompletePrediction) => MouseEventHandler<HTMLTableDataCellElement>
}
export const ListItem: FC<ListItemPropsType> = ({suggestion, handleSelect}) => {


	return (
		<Table.Row key={suggestion.place_id} >
			<Table.Cell onClick={handleSelect(suggestion)} className={styles.cell}>
				<strong>{suggestion.description}</strong>
			</Table.Cell>
		</Table.Row>
	);
};
