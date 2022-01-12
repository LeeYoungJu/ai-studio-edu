// @flow
import { useState, forwardRef, useRef, useImperativeHandle, useEffect } from 'react';
import color from 'styles/color';

type Props = {
	handleToggleNav: () => void,
};

const LeftNav = forwardRef(({ handleToggleNav }: Props, ref) => {
	const [isExpand, setIsExpand] = useState(true);
	const toggleNavBar = () => {};

	const navRef = useRef(null);

	useImperativeHandle(ref, () => ({
		getNavWidth: () => {
			return navRef.current.getBoundingClientRect().width;
		},
	}));

	const handleClickToggleBtn = () => {
		setIsExpand(!isExpand);
	};

	useEffect(() => {
		handleToggleNav();
	}, [isExpand]);

	return (
		<div
			ref={navRef}
			style={{
				position: 'fixed',
				height: '100%',
				padding: '10px',
				background: color.left_nav_background,
				color: color.white,
			}}
		>
			<button onClick={handleClickToggleBtn}>toggle</button>
			{isExpand ? <div>네비바 확장~~~!</div> : <div style={{}}>숨김</div>}
		</div>
	);
});

export default LeftNav;
