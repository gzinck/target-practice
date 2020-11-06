import React from 'react';
import Menu from './Menu';

const links = [{
	name: 'Main Menu',
	route: '/',
}];

function DoneMenu() {
	return (
		<Menu
			title="Excercise Complete"
			links={links}
			variant="success"
		>
			<p>
				Great work! You&apos;ve completed this exercise.
				Go back to the main menu to select the next evaluation mode.
			</p>
		</Menu>
	);
}

export default DoneMenu;
