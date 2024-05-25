import styled from 'styled-components';

const hand = `
	height: 9px;
	width: 9px;
	position: absolute;
	top: 50%;
	left: 50%;
	border-radius: 50%;
	box-shadow: 0 4px 12px 2px #077;
`;

const after = `
	content: '';
	border-radius: 2px 2px 50% 50%;
	position: absolute;
	// right: -50%;
	bottom: 0;
	transform: translateX(-50%);
`;

export const Main = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;

	height: 100vh;
	width: 100%;
	background: radial-gradient(
		rgb(143, 248, 243, 0.5) 50%,
		rgb(143, 248, 243, 0.25) ,
		#fafcfa45
	);
	cursor: pointer;
`;

export const Header = styled.header`
	width: 100%;
	height: 44px;
	text-align: center;
	font-family: 'Cartograph CF', Courier, monospace;

	padding: 40px 0 0 0;
`;

export const Heading = styled.h1`
text-shadow: 2px 4px #777;
color: #16f6f0;
`

export const Frame = styled.div`
	background: rgb(141, 243, 165, 0.4);
	height: 400px;
	width: 400px;

	/* border: solid 0.5px #90d60c; */
	border-radius: 50%;
	position: relative;
	margin: auto;
	text-align: center;
	box-shadow: 0 2px 40px 10px rgb(101, 253, 195),
		inset 0 2px 20px 10px rgb(141, 243, 165, 0.75),
		inset 0 -9px 20px 5px rgb(141, 243, 165, 0.5);
`;

export const HoursHand = styled.div`
	${hand}
	border: solid 1px #ff0100;
	background: #ff0000;
	transform: rotate(${(props) => props.rotation}deg);

	&:after {
		height: 130px;
		width: 5px;
		background: #ff0000;
		border: solid 1px #ff0100;
		${after}
	}
`;

export const MinutesHand = styled.div`
	${hand}
	border: solid 1px #f020f0;
	background: #f020f0;
	transform: rotate(${(props) => props.rotation}deg);
	&:after {
		height: 150px;
		width: 4px;
		background: #f020f0;
		border: solid 1px #f020f0;
		${after}/* transform: translateX(-70%); */
	}
`;

export const SecondsHand = styled.div`
	${hand}
	border: solid 1px #7077;
	background: #ff0077;
	transform: rotate(${(props) => props.rotation}deg);
	&:after {
		height: 175px;
		width: 2.4px;
		background: #ff0077;
		border: solid 1px #ff0077;
		${after}/* transform: translateX(-50%); */
	}
`;

export const Nums = styled.span`
	position: absolute;
	inset: 20px;
	text-align: center;
	transform: rotate(calc(30deg * ${(props) => props.val}));

`;

export const Digit = styled.b`
	${Nums} & {font-family: 'Cartograph CF';
	font-size: 17px;
	color: brown;
	opacity: 0.5;
	display: inline-block;
	transform: rotate(calc(-30deg * ${(props) => props.val}));}
`;
