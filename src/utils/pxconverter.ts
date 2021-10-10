const convertPixelToRem = (px: number) => {
	const basePixel = 16;
	const remEquivalent = px / basePixel;
	return `${remEquivalent}rem`;
};

export default convertPixelToRem;
