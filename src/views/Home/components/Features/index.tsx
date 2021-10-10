import { FC } from 'react';
import Bubble from 'src/components/Bubble';
import Text from 'src/components/Text';
import FeatureStyles from './styles';

interface CardProps {
	bubbleColor: string;
	title: string;
	description: string;
}

const Card: FC<CardProps> = (props) => {
	const parsedTitle = props.title.split('.');
	return (
		<FeatureStyles.Card>
			<Bubble color={props.bubbleColor}>
				<Text color="#ffffff"> {props.title[0]} </Text>{' '}
			</Bubble>
			<Text fontSize={30} as="h3">
				{parsedTitle[0]}
				<br />
				{parsedTitle[1]}
			</Text>
			<Text color="#49484a">{props.description}</Text>
			<Text fontWeight={700} color="#515152" as="button">
				Learn More
			</Text>
		</FeatureStyles.Card>
	);
};

const Features = () => {
	return (
		<FeatureStyles.Body>
			<Card
				bubbleColor="#290ac7"
				title="User Interface .Design"
				description="We'll provide you the best service to take care of your business "
			/>
			<Card
				bubbleColor="#0ac71a"
				title="Mobile App .Design"
				description="We'll provide you the best service to take care of your business "
			/>
			<FeatureStyles.Plain>
				<Text fontSize={30} as="h1">
					We've best solution for your digital agency
				</Text>
				<Text color="#49484a">
					No commitments, no minimums, and no long term contacts make it easy to hire fearlessly
				</Text>
				<Text fontWeight={700} color="#515152" as="button">
					Learn More
				</Text>
			</FeatureStyles.Plain>
		</FeatureStyles.Body>
	);
};

export default Features;
