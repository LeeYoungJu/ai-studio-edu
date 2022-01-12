// @flow
import { useEffect, useRef, useState } from 'react';
import color from 'styles/color';
import CheckImg from 'assets/images/check.png';

type Props = {
	steps: Array<string>, // Step 별 텍스트를 배열로 넘겨야함
	curStep: number, // 현재 Step 몇단계인지
	circleSize: number, // Step을 나타내는 원의 크기
};

const StepComponent = ({ steps, curStep, circleSize }) => {
	return (
		<div
			style={{
				position: 'relative',
				display: 'flex',
				margin: '0 auto',
				justifyContent: 'center',
				padding: '20px 0 40px 0',
			}}
		>
			{steps &&
				steps.length > 0 &&
				steps.map((stepTxt, idx) => (
					<StepCircle
						key={`${stepTxt}_${idx}`}
						txt={stepTxt}
						curStep={curStep}
						idx={idx}
						length={steps.length}
						size={circleSize}
					/>
				))}
		</div>
	);
};

const StepCircle = ({ txt, curStep, idx, length, size }) => {
	const stepLineHeight = 6;
	const circleBorderWidth = stepLineHeight;

	const isComplete = idx + 1 < curStep;
	const isLast = idx === length - 1;
	const isSelected = idx + 1 === curStep;

	const circleRef = useRef();
	const txtRef = useRef();

	const [txtLeft, setTxtLeft] = useState(0);

	const spaceLen = txt.split(' ').length - 1;

	useEffect(() => {
		if (circleRef && circleRef.current && txtRef && txtRef.current) {
			const rect = circleRef.current.getBoundingClientRect();
			const txtRect = txtRef.current.getBoundingClientRect();
			setTxtLeft(rect.width / 2 - txtRect.width / 2 - 3);
		}
	}, [circleRef, txtRef]);

	return (
		<>
			<div
				style={{
					position: 'relative',
				}}
			>
				<div
					ref={circleRef}
					style={{
						width: size,
						height: size,
						background: isComplete
							? color.step_complete
							: isSelected
							? color.white
							: color.step_not_complete,
						color: isComplete ? color.white : isSelected ? color.step_complete : color.step_not_complete,
						borderRadius: '50%',
						border: `${circleBorderWidth}px solid ${
							isComplete || isSelected ? color.step_complete : color.step_not_complete
						}`,
						textAlign: 'center',
						lineHeight: `${size}px`,
						fontSize: '20px',
					}}
				>
					{isComplete ? (
						<img
							src={CheckImg}
							style={{
								width: `${size / 2}px`,
								verticalAlign: 'middle',
								marginTop: -5,
							}}
						/>
					) : isSelected ? (
						`${idx + 1}`
					) : (
						''
					)}
				</div>
				<div
					ref={txtRef}
					style={{
						position: 'absolute',
						fontSize: '16px',
						width: (txt.length - spaceLen) * 16 + spaceLen * 6,
						left: txtLeft,
						bottom: -25,
						fontWeight: 'bold',
						color: isSelected ? color.step_complete : color.step_not_complete,
					}}
				>
					{txt}
				</div>
			</div>
			{!isLast && (
				<div
					style={{
						width: 100,
						height: stepLineHeight,
						background: isComplete ? color.step_complete : color.step_not_complete,
						marginTop: `${size / 2 - stepLineHeight / 2 + circleBorderWidth}px`,
					}}
				></div>
			)}
		</>
	);
};

export default StepComponent;
