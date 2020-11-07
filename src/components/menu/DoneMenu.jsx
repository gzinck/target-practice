import React from 'react';
import Menu from './Menu';
import Link from './Link';

function DoneMenu() {
	return (
		<Menu
			title="Excercise Complete"
		>
			<p>
				Great work! You&apos;ve completed this exercise.
				Go back to the main menu to select the next evaluation mode.
			</p>
			<Link to="/">Main Menu</Link>
		</Menu>
	);
}

export default DoneMenu;
