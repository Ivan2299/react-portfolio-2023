import React from 'react';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';

const Tech = () => {
	return (
		<div className='flex flex-row flex-wrap justify-center items-center gap-10'>
			{technologies.map(technology => (
				<div className='w-28 h-28 flex justify-center items-center' key={technology.name}>
					<BallCanvas icon={technology.icon} />
				</div>
			))}
		</div>
	);
};

export default SectionWrapper(Tech, '');
