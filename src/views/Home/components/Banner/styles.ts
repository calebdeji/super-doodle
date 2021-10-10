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
	flex-wrap: wrap;
	row-gap: ${convertPixelToRem(100)};

	/* column-gap: ${convertPixelToRem(300)}; */
`;

const TextRep = styled.div`
	display: grid;
	row-gap: ${convertPixelToRem(20)};
	flex: 1;

	@media all and (max-width: 1000px) {
		flex: unset;
		width: 70%;
	}
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

	@media all and (max-width: 1000px) {
		flex: unset;
		width: 100%;
		justify-content: flex-start;

		img {
			width: 100%;
			height: auto;
		}

		&::before {
			position: absolute;
			display: none;
			content: '';
		}
		&::after {
			position: absolute;
			display: none;
			content: '';
		}
	}
`;

const BannerStyle = {
	Body,
	TextRep,
	ImageRep,
};

export default BannerStyle;
