import { ElementType, FC } from 'react';
import TextStyle, { TextStyleProps } from './style';

interface TextProps extends TextStyleProps {
	as?: ElementType<any>;
}

const Text: FC<TextProps> = (props) => {
	return <TextStyle {...props}> {props.children} </TextStyle>;
};

export default Text;
