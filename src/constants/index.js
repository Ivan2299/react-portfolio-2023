import {
	logos,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	git,
	figma,
	threejs,
	epam,
	upwork,
	scss,
	pizza,
	restaurant,
	farmvest,
	shareme,
	youtube,
} from '../assets';

export const navLinks = [
	{
		id: 'about',
		title: 'About',
	},
	{
		id: 'work',
		title: 'Work',
	},
	{
		id: 'contact',
		title: 'Contact',
	},
];

const services = [
	{
		title: 'Web Developer',
		icon: web,
	},
	{
		title: 'Java Script Developer',
		icon: javascript,
	},
	{
		title: 'React Applications',
		icon: reactjs,
	},
	{
		title: 'Responsive design',
		icon: figma,
	},
	{
		title: 'Redux',
		icon: redux,
	},
	{
		title: 'typescript',
		icon: typescript,
	},
	{
		title: 'git',
		icon: git,
	},
	{
		title: 'threejs',
		icon: threejs,
	},
];

const technologies = [
	{
		name: 'HTML 5',
		icon: html,
	},
	{
		name: 'CSS 3',
		icon: css,
	},
	{
		name: 'JavaScript',
		icon: javascript,
	},
	{
		name: 'TypeScript',
		icon: typescript,
	},
	{
		name: 'React JS',
		icon: reactjs,
	},
	{
		name: 'Redux Toolkit',
		icon: redux,
	},
	{
		name: 'Tailwind CSS',
		icon: tailwind,
	},
	{
		name: 'Node JS',
		icon: nodejs,
	},

	{
		name: 'Three JS',
		icon: threejs,
	},
	{
		name: 'git',
		icon: git,
	},
	{
		name: 'figma',
		icon: figma,
	},
	{
		name: 'SCSS',
		icon: scss,
	},
];

const experiences = [
	{
		title: 'Professional studying',
		company_name: 'Logos IT Academy',
		icon: logos,
		iconBg: '#383E56',
		date: 'March 2021 - April 2022',
		points: [
			'Implementing responsive design and ensuring cross-browser compatibility.',
			'A comprehensive study of JavaScript with a focus on in-depth learning, and enhancing  understanding through regular project-based assignments completed on a weekly basis.',
			'full working with git/gitHub/gitLub',
			'Developing and maintaining web applications using React.js and other related technologies.',
			'At the conclusion of my studies, I have successfully created numerous projects utilizing the latest front-end technologies, including the use of Three.js for 3D graphics rendering. Through these projects, I have gained practical experience and a strong understanding of how to apply modern web development techniques to build engaging and dynamic user interfaces.',
		],
	},
	{
		title: 'self learning program',
		company_name: 'epam',
		icon: epam,
		iconBg: '#050816',
		date: 'April 2022 - September 2022',
		points: [
			'making more projects, using modern libraries',
			'got some knowledge about algorithms,additionally i have also gained knowledge of Object-Oriented Programming (OOP)',
			'increase my english to B1',
			'got a good soft skills',
			'learned how to work in a team with many developers on one big project',
		],
	},
	{
		title: 'Web Developer',
		company_name: 'freelance',
		icon: upwork,
		iconBg: '#e6dedd',
		date: 'September 2022 - Present',
		points: [
			'working with a small projects, and making  fixed other apllications',
			'Collaborating with teams including designers and other developers to create high-quality products.',
			'Implementing responsive design and ensuring cross-browser compatibility.',
			'Participating in code reviews and providing constructive feedback to other developers.',
		],
	},
];

const testimonials = [
	{
		testimonial:
			'Зарекомендував себе як аналітичний студент, який пильно ставиться до всього що робить',
		name: 'iryna Koval',
		designation: 'Seo',
		company: 'Logos Academy',
		image: 'https://randomuser.me/api/portraits/women/4.jpg',
	},
	{
		testimonial:
			'хороший спеціаліст, підтримуємо контакт, обмінюємось досвідом, я був ментором у нього певний період часу і можу скзати що він допоміг мені у моїх оплачуваних проектах',
		name: 'Anton Filipov',
		designation: 'COO',
		company: 'DEF Corp',
		image: 'https://randomuser.me/api/portraits/men/5.jpg',
	},
];

const projects = [
	{
		name: 'pizza-shop',
		description:
			'Pizza-shop that shows my skills of making most common skills for react front end developer. All this done with React and some packages which you can see on my repo',
		tags: [
			{
				name: 'react',
				color: 'blue-text-gradient',
			},
			{
				name: 'typeScript',
				color: 'green-text-gradient',
			},
			{
				name: 'axios',
				color: 'pink-text-gradient',
			},
			{
				name: 'Scss',
				color: 'blue-text-gradient',
			},
			{
				name: 'redux',
				color: 'green-text-gradient',
			},
		],
		image: pizza,
		source_code_link: 'https://ivan2299.github.io/pizza-shop/',
	},
	{
		name: 'restaurant',
		description:
			'a simple landing page with delicious food, also using react, and some libraries. Using scss and redux storage',
		tags: [
			{
				name: 'react',
				color: 'blue-text-gradient',
			},

			{
				name: 'scss',
				color: 'pink-text-gradient',
			},
			{
				name: 'redux',
				color: 'blue-text-gradient',
			},
		],
		image: restaurant,
		source_code_link: 'https://ivan2299.github.io/restaurant/',
	},
	{
		name: 'farmvest',
		description:
			'a landing page with only nessesary libraries  using javaScrapt Scss, also with many custom animations , modern and responsive for all devices',
		tags: [
			{
				name: 'JavaScript',
				color: 'blue-text-gradient',
			},
			{
				name: 'Scss',
				color: 'green-text-gradient',
			},
			{
				name: 'Webpack',
				color: 'pink-text-gradient',
			},
		],
		image: farmvest,
		source_code_link: 'https://ivan2299.github.io/farmvest/',
	},
	{
		name: 'shareme',
		description: 'a social media app for sharing and downloading photo',
		tags: [
			{
				name: 'JavaScript',
				color: 'blue-text-gradient',
			},
			{
				name: 'react',
				color: 'green-text-gradient',
			},
			{
				name: 'sanity(CMS)',
				color: 'pink-text-gradient',
			},
		],
		image: shareme,
		source_code_link: 'https://ivan2299.github.io/shareme/',
	},
	{
		name: 'youtubeclone',
		description: 'a clone of popular media videosharing platform',
		tags: [
			{
				name: 'JavaScript',
				color: 'blue-text-gradient',
			},
			{
				name: 'react',
				color: 'green-text-gradient',
			},
			{
				name: 'restAPI',
				color: 'pink-text-gradient',
			},
		],
		image: youtube,
		source_code_link: 'https://ivan2299.github.io/youtubeclone/',
	},
];

export { services, technologies, experiences, testimonials, projects };
