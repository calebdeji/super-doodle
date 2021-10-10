import Bubble from 'src/components/Bubble';
import Text from 'src/components/Text';
import Button from 'src/components/Button';
import NavStyles from './styles';

type Link = {
	text: string;
	to: string;
};
const links: Array<Link> = [
	{ text: 'Home', to: '' },
	{ text: 'Service', to: '' },
	{ text: 'Resource', to: '' },
];

const Nav = () => {
	return (
		<NavStyles.Body>
			<NavStyles.LogoLinks>
				<NavStyles.Logo>
					<Bubble color="#4287f5">
						<Text as="h1" color="#ffffff">
							D
						</Text>
					</Bubble>
					<Text as="h1" fontSize={20}>
						Studio
					</Text>
				</NavStyles.Logo>
				<NavStyles.LinksContainer>
					{links.map((link) => {
						return (
							// @ts-ignore
							<Text as="a" fontSize={17} href={link.to}>
								{link.text}
							</Text>
						);
					})}
				</NavStyles.LinksContainer>
			</NavStyles.LogoLinks>
			<Button color="#000000" bgColor="#ffffff">
				Contact Us
			</Button>
		</NavStyles.Body>
	);
};

export default Nav;
