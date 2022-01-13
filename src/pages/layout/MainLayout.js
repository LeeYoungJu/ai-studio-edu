// @flow
import React, { useEffect, useRef, useState } from 'react';
import LeftNav from './LeftNav';
import styled from 'styled-components';

type Props = {
	children: React.Node,
	isLeftNavShow?: boolean,
	curStep?: number,
	style?: Object,
};

const MainLayout = ({ children, isLeftNavShow, style }: Props) => {
	const navRef = useRef(null);
	const [leftMargin, setLeftMargin] = useState(0);

	const fixScreen = () => {
		if (navRef && navRef.current) {
			setLeftMargin(navRef.current.getNavWidth());
		}
	};

	useEffect(() => {
		fixScreen();
	}, [navRef]);

	const handleToggleNav = () => {
		fixScreen();
	};

	return (
		<MainWrapper style={style}>
			{isLeftNavShow && <LeftNav ref={navRef} handleToggleNav={handleToggleNav} />}
			<ContentWrapper leftMargin={leftMargin}>{children}</ContentWrapper>
		</MainWrapper>
	);
};

const MainWrapper = styled.div`
	max-width: 1500px;
`;

const ContentWrapper = styled.div`
	${({ leftMargin }) => `margin-left: ${leftMargin}px;`}
`;

export default MainLayout;
