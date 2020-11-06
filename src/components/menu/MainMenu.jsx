import React from 'react';
import Menu from './Menu';
import {
	controller1DFixedName,
	controller1DRandName,
	controller1DSemiName,
	controller2DFixedName,
	controller2DRandName,
	controller2DSemiName,
	tapRoute,
} from '../../routes';

const links = [
	{
		name: '1D Random Motion',
		route: tapRoute + controller1DRandName,
	},
	{
		name: '1D Fixed Motion',
		route: tapRoute + controller1DFixedName,
	},
	{
		name: '1D Semi-Random Motion',
		route: tapRoute + controller1DSemiName,
	},
	{
		name: '2D Random Motion',
		route: tapRoute + controller2DRandName,
	},
	{
		name: '2D Fixed Motion',
		route: tapRoute + controller2DFixedName,
	},
	{
		name: '2D Semi-Random Motion',
		route: tapRoute + controller2DSemiName,
	},
];

function MainMenu() {
	return (
		<Menu
			title="Target Practice"
			links={links}
		>
			<p>
				This research analyses how you move when hitting targets.
				Select one of the evaluation modes below.
			</p>
		</Menu>
	);
}

export default MainMenu;
