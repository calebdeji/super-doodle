import { useState } from 'react';
import { ReactComponent as MenuIcon } from 'src/assets/icons/menu.svg';

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
	const [isMobileNavVisible, setisMobileNavVisible] = useState(false);

	const toggleNavVisibility = () => {
		setisMobileNavVisible((val) => !val);
	};

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
				<NavStyles.LinksContainer className="hide-mobile">
					{links.map((link) => {
						return (
							// @ts-ignore
							<Text as="a" fontSize={17} href={link.to} key={link.text.toLocaleLowerCase()}>
								{link.text}
							</Text>
						);
					})}
				</NavStyles.LinksContainer>
			</NavStyles.LogoLinks>
			<Button color="#000000" bgColor="#ffffff" className="hide-mobile">
				Contact Us
			</Button>
			<NavStyles.MobileNavButton onClick={toggleNavVisibility}>
				<MenuIcon />
			</NavStyles.MobileNavButton>
			{isMobileNavVisible ? (
				<NavStyles.MobileNav>
					{[...links, { text: 'Contact', to: '' }].map((link) => {
						return (
							// @ts-ignore
							<Text as="a" fontSize={17} href={link.to} key={link.text.toLocaleUpperCase()}>
								{link.text}
							</Text>
						);
					})}
				</NavStyles.MobileNav>
			) : (
				''
			)}
		</NavStyles.Body>
	);
};

export default Nav;
