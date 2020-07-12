const colorOne = 'hotpink';
const colorTwo = 'khaki';
const colorThree = 'royalblue';
const colorFour = 'paleturquoise';
const light = 'ghostwhite';
const theme = {
  colorOne,
  colorTwo,
  colorThree,
  colorFour,
  light,

  vertGrad: 'linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.2))',
  colorGrad: `linear-gradient(to top right, ${colorOne}, ${colorTwo})`,
  altColorGrad: `linear-gradient(to top right, ${colorThree}, ${colorFour})`,

  border: 'inset 0 0 0 1px rgba(0,0,0,0.4)',

  color: '#111',

  spacer: '1rem',
  spacerHalf: '0.5rem',
};

export default theme;
