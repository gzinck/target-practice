import React from 'react';
import PropTypes from 'prop-types';
import { useSetRecoilState } from 'recoil';
import useMessageHandler from './hooks/useMessageHandler';
import viconSocketState from './state/atoms/viconSocketState';

const url = 'ws://localhost:3456';

function MessageHandler(props) {
	const messageHandler = useMessageHandler();
	const setSocket = useSetRecoilState(viconSocketState);

	React.useEffect(() => {
		const socket = new WebSocket(url);
		socket.onmessage = messageHandler;

		setSocket(socket);
	}, []);

	return props.children;
}

MessageHandler.defaultProps = {
	children: null,
};

MessageHandler.propTypes = {
	children: PropTypes.node,
};

export default MessageHandler;
