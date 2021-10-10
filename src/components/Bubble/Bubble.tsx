import { FC } from 'react';
import BubbleStyle, { BubbleChildStyleProps } from './styles';

interface BubbleProps extends BubbleChildStyleProps {}

const Bubble: FC<BubbleProps> = (props) => {
	return (
		<BubbleStyle.BubbleBody>
			<BubbleStyle.BubbleChild color={props.color}>{props.children}</BubbleStyle.BubbleChild>
		</BubbleStyle.BubbleBody>
	);
};

export default Bubble;
