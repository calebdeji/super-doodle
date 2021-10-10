import { FC } from 'react';
import Buttonstyle, { ButtonstyleProps } from './styles';

interface ButtonProps extends ButtonstyleProps {
	className?: string;
}

const Button: FC<ButtonProps> = (props) => {
	return <Buttonstyle {...props}> {props.children} </Buttonstyle>;
};

export default Button;
