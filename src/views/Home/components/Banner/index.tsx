import Button from 'src/components/Button';
import Text from 'src/components/Text';
import BannerImage from 'src/assets/images/banner.png';
import BannerStyle from './styles';

const Banner = () => {
	return (
		<BannerStyle.Body>
			<BannerStyle.TextRep>
				<Text fontSize={40} lineHeight={50} as="h1">
					4 steps to
					<br />
					Create a Good
					<br />
					Project Showcase
				</Text>
				<Text fontSize={14} color="#49484a" lineHeight={20}>
					No commitments, no minimums, and no long term contacts make it easy to hire fearlessly and build your
					customers engagement.
				</Text>
				<Button>Let's Start</Button>
			</BannerStyle.TextRep>
			<BannerStyle.ImageRep>
				<img src={BannerImage} alt="" />
			</BannerStyle.ImageRep>
		</BannerStyle.Body>
	);
};

export default Banner;
