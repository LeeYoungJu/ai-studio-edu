// @flow
import MainLayout from 'pages/layout/MainLayout';
import MainBannerImg from 'assets/images/main_banner.jpg';
import SampleImg from 'assets/images/sample.png';
import styled from 'styled-components';

const HomePage = ({}) => {
	return (
		<MainLayout isLeftNavShow isStepShow curStep={3}>
			{/* {<MainBanner src={MainBannerImg} />} */}
			<Sample src={SampleImg} />
		</MainLayout>
	);
};

const MainBanner = styled.img`
	width: 100%;
`;

const Sample = styled.img`
	width: 100%;
`;

export default HomePage;
