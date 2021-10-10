import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import convertPixelToRem from '../../../../utils/pxconverter';

const Body = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
	padding: ${convertPixelToRem(30)} ${convertPixelToRem(50)};

	&::before {
		content: '';
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		height: ${convertPixelToRem(400)};
		width: ${convertPixelToRem(400)};
		background-color: #f5e942;
		z-index: -9;
		border-bottom-left-radius: 100%;
	}

	&::after {
		content: '';
		display: block;
		position: absolute;
		top: 0;
		right: ${convertPixelToRem(200)};
		height: ${convertPixelToRem(200)};
		background-color: #4842f5;
		width: ${convertPixelToRem(300)};
		z-index: -99;
		border-bottom-left-radius: 100%;
	}

	@media all and (max-width: 1000px) {
		.hide-mobile {
			display: none;
		}

		&::after,
		&::before {
			display: none;
		}
	}
`;

const Logo = styled.div`
	display: flex;
	column-gap: ${convertPixelToRem(10)};
	align-items: center;
`;

const LogoLinks = styled.div`
	display: grid;
	grid-auto-flow: column;
	align-items: center;
	column-gap: ${convertPixelToRem(50)};
`;

const LinksContainer = styled.div`
	display: flex;
	column-gap: ${convertPixelToRem(20)};
	align-items: center;
`;

const MobileNavButton = styled.button`
	@media all and (min-width: 1000px) {
		display: none;
	}
`;

const navanimate = keyframes`
  from{
    transform : scale(0.5);
  }
  to{
    transform : scale(1);
  }
`;

const MobileNav = styled.nav`
	border-radius: 22px;
	background: linear-gradient(225deg, #ffffff, #e1e0e0);
	box-shadow: -9px 9px 12px #dcdbdb, 9px -9px 12px #ffffff;

	display: grid;
	row-gap: ${convertPixelToRem(20)};
	animation: ${navanimate} 700ms ease-in-out;
	width: ${convertPixelToRem(200)};
	padding: ${convertPixelToRem(20)};
	position: absolute;
	top: ${convertPixelToRem(80)};
	right: ${convertPixelToRem(50)};

	@media all and (min-width: 1000px) {
		display: none;
	}
`;

const NavStyles = {
	Body,
	Logo,
	LogoLinks,
	LinksContainer,
	MobileNav,
	MobileNavButton,
};

export default NavStyles;
