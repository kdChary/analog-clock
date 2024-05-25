import React from 'react';

import * as S from './styleClock';
import useTime from './useTime';

// const values = Array.from({ length: 12 }, (v, i) => i);

const Clock = () => {
	const time = useTime();

	return (
		<S.Main>
			<S.Header>
				<S.Heading>Analog Clock</S.Heading>
			</S.Header>
			<S.Frame>
				{Array.from({ length: 12 }, (v, i) => (
					<S.Nums val={i + 1} key={i}>
						<S.Digit val={i + 1}>{i + 1}</S.Digit>
					</S.Nums>
				))}
				<S.HoursHand rotation={time.hours} />
				<S.MinutesHand rotation={time.minutes} />
				<S.SecondsHand rotation={time.seconds} />
			</S.Frame>
		</S.Main>
	);
};

export default Clock;
