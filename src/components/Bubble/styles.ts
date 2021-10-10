import styled from '@emotion/styled';
import convertPixelToRem from '../../utils/pxconverter';

export interface BubbleChildStyleProps {
	color: string;
}

const BubbleBody = styled.div`
	border-radius: 50%;
	background: #fdfcfc;
	box-shadow: -7px -7px 14px #ededed, 7px 7px 14px #ffffff;
	/* border-radius: 50%;
	background: #eff0f0;
	box-shadow: 5px -5px 9px #d0d0d0, -5px 5px 9px #f0f0f0; */
	width: ${convertPixelToRem(50)};
	height: ${convertPixelToRem(50)};
	display: flex;
	align-items: center;
	justify-content: center;
	background: linear-gradient(225deg, #ffffff, #e4e3e3);
`;

const BubbleChild = styled.div<BubbleChildStyleProps>`
	border-radius: 50%;
	background: ${(props) => props.color};

	border-radius: 50%;

	box-shadow: 5px -5px 9px #d0d0d0, -5px 5px 9px #f0f0f0;
	width: ${convertPixelToRem(40)};
	height: ${convertPixelToRem(40)};
	/* background: ${(props) => `linear-gradient(225deg, ${props.color}, ${props.color})`}; */

	display: flex;
	align-items: center;
	justify-content: center;
`;

const BubbleStyle = {
	BubbleBody,
	BubbleChild,
};

export default BubbleStyle;
