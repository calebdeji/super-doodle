import { css } from '@emotion/react';
import styled from '@emotion/styled';
import convertPixelToRem from '../../utils/pxconverter';

export interface TextStyleProps {
	fontSize?: number;
	fontWeight?: number;
	textAlign?: 'center' | 'left' | 'right';
	color?: string;
	lineHeight?: number;
}

const TextStyle = styled.p<TextStyleProps>`
	font-size: ${convertPixelToRem(16)};
	color: #000000;

	${(props) =>
		props.fontWeight &&
		css`
			font-weight: ${props.fontWeight};
		`}

	${(props) =>
		props.fontSize &&
		css`
			font-size: ${convertPixelToRem(props.fontSize)};
		`}
	${(props) =>
		props.textAlign &&
		css`
			text-align: ${props.textAlign};
		`}

  ${(props) =>
		props.color &&
		css`
			color: ${props.color};
		`}
  
  ${(props) =>
		props.lineHeight &&
		css`
			line-height: ${convertPixelToRem(props.lineHeight)};
		`}
`;

export default TextStyle;
