// @flow
import React, { useEffect, useRef, useState } from 'react';
import LeftNav from './LeftNav';
import styled from 'styled-components';
import StepComponent from 'components/StepComponent';
import { stepsList } from 'constants/common';

type Props = {
	children: React.Node,
	isLeftNavShow?: boolean,
	isStepShow?: boolean,
	curStep?: number,
};

const MainLayout = ({ children, isLeftNavShow, isStepShow, curStep }: Props) => {
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
		<MainWrapper>
			{isLeftNavShow && <LeftNav ref={navRef} handleToggleNav={handleToggleNav} />}
			<ContentWrapper leftMargin={leftMargin}>
				{isStepShow && <StepComponent steps={stepsList} curStep={curStep} size={55} />}
				{children}
			</ContentWrapper>
		</MainWrapper>
	);
};

const MainWrapper = styled.div`
	display: flex;
	width: 100%;
`;

const ContentWrapper = styled.div`
	${({ leftMargin }) => `margin-left: ${leftMargin}px;`}
`;

export default MainLayout;
