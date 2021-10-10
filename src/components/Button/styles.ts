import styled from '@emotion/styled';
import convertPixelToRem from '../../utils/pxconverter';

export interface ButtonstyleProps {
	color?: string;
	bgColor?: string;
	height?: number;
	width?: number;
}

const Buttonstyle = styled.button<ButtonstyleProps>`
	border-radius: ${convertPixelToRem(50)};
	background-color: ${(props) => props.bgColor || '#000000'};
	color: ${(props) => props.color || '#ffffff'};
	height: ${(props) => convertPixelToRem(props.height || 50)};
	width: ${(props) => convertPixelToRem(props.width || 150)};

	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
`;

export default Buttonstyle;
