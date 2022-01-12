// @flow
import MainLayout from 'pages/layout/MainLayout';
// import MainBannerImg from 'assets/images/main_banner.jpg';
import SampleImg from 'assets/images/sample.png';
import styled from 'styled-components';
import StepComponent from 'components/StepComponent';
import { stepsList } from 'constants/common';

const HomePage = ({}) => {
	return (
		<MainLayout isLeftNavShow>
			<StepComponent steps={stepsList} curStep={3} circleSize={55} />
			{/* {<MainBanner src={MainBannerImg} />} */}
			<Sample src={SampleImg} />
		</MainLayout>
	);
};

// const MainBanner = styled.img`
// 	width: 100%;
// `;

const Sample = styled.img`
	width: 100%;
`;

export default HomePage;
