import React from 'react';
import {Metadata} from 'next';

export const metadata: Metadata = {
	title: 'Weather Forecast',
	description: 'Weather forecast with current conditions, wind, air quality, and what to expect for the next 3 days',
};

export default function RootLayout({
	children,
}: {
  children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
