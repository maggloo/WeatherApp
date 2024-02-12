export const setToLocalStorage = (value: object, key: string) => {
	const serializedState = JSON.stringify(value);
	localStorage.setItem(key, serializedState);
};
