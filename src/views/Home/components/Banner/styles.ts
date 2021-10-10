import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import convertPixelToRem from 'src/utils/pxconverter';

const imageAnimation = keyframes`
  from {
    transform : translateY(10px)
    
  }
  to{ 
    transform : translateY(-10px)

  }
`;

const Body = styled.section`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: ${convertPixelToRem(30)} ${convertPixelToRem(50)};

	/* column-gap: ${convertPixelToRem(300)}; */
`;

const TextRep = styled.div`
	display: grid;
	row-gap: ${convertPixelToRem(20)};
	flex: 1;
`;

const ImageRep = styled.div`
	position: relative;
	flex: 2;
	display: flex;
	justify-content: flex-end;

	img {
		width: 80%;
		height: ${convertPixelToRem(500)};
		object-fit: contain;
		position: relative;
		animation: ${imageAnimation} 2000ms ease-in-out infinite alternate;
		z-index: 99;
	}

	&::before {
		position: absolute;
		display: block;
		content: '';
		right: 66%;
		top: ${convertPixelToRem(250)};
		width: 100px;
		height: 100px;
		border-radius: 100%;
		background-color: #1194bf;
	}
	&::after {
		position: absolute;
		display: block;
		content: '';
		right: 37%;
		bottom: ${convertPixelToRem(-50)};
		width: 100px;
		height: 100px;
		border-radius: 100%;
		background-color: #bf7111;
	}
`;

const BannerStyle = {
	Body,
	TextRep,
	ImageRep,
};

export default BannerStyle;
