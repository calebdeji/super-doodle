import styled from '@emotion/styled';
import convertPixelToRem from 'src/utils/pxconverter';

const Body = styled.section`
	display: flex;
	column-gap: ${convertPixelToRem(70)};
	align-items: center;
	justify-content: space-between;
	padding: ${convertPixelToRem(50)} ${convertPixelToRem(50)};
	margin-top: ${convertPixelToRem(40)};

	row-gap: ${convertPixelToRem(50)};
	@media all and (max-width: 1000px) {
		flex-wrap: wrap;
	}
`;

const Card = styled.div`
	padding: ${convertPixelToRem(30)} ${convertPixelToRem(60)} ${convertPixelToRem(30)} ${convertPixelToRem(40)};
	display: grid;
	row-gap: ${convertPixelToRem(30)};

	border-radius: 17px;
	background: #ffffff;
	box-shadow: -9px 9px 24px #ededed, 9px -9px 24px #ffffff;
	max-width: ${convertPixelToRem(400)};

	@media all and (max-width: 400px) {
		padding: ${convertPixelToRem(30)};
		width: 100%;
	}
`;

const Plain = styled.div`
	display: grid;
	row-gap: ${convertPixelToRem(30)};
	max-width: ${convertPixelToRem(500)};
`;

const FeatureStyles = { Body, Card, Plain };

export default FeatureStyles;
