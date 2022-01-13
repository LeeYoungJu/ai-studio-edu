// @flow
import { useState, forwardRef, useRef, useImperativeHandle, useEffect } from 'react';
import color from 'styles/color';
import { logout } from 'store/login/loginReducer';
import { useDispatch } from 'react-redux';

type Props = {
	handleToggleNav: () => void,
};

const LeftNav = forwardRef(({ handleToggleNav }: Props, ref) => {
	const [isExpand, setIsExpand] = useState(true);

	const navRef = useRef(null);

	const dispatch = useDispatch();

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
				top: 0,
				left: 0,
				height: '100%',
				padding: '10px',
				background: color.left_nav_background,
				color: color.white,
			}}
		>
			<div>
				<button onClick={() => dispatch(logout())}>logout</button>
			</div>
			<div>
				<button onClick={handleClickToggleBtn}>toggle</button>
			</div>
			{isExpand ? <div>네비바 확장~~~~~~~~!</div> : <div style={{}}>숨김</div>}
		</div>
	);
});

export default LeftNav;
