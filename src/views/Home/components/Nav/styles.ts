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

const NavStyles = {
	Body,
	Logo,
	LogoLinks,
	LinksContainer,
};

export default NavStyles;
