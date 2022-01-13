const LoadingBar = ({}) => {
	return (
		<div
			style={{
				position: 'fixed',
				display: 'flex',
				top: 0,
				left: 0,
				width: '100%',
				height: '100%',
				zIndex: '999',
				background: 'rgba(156, 156, 156, 0.7)',
				alignItems: 'center',
				justifyContent: 'center',
				fontSize: 40,
				color: '#fafafa',
			}}
		>
			loading...
		</div>
	);
};

export default LoadingBar;
