/*
 * Media queries utility
 */

/*
 * Inspired by https://github.com/DefinitelyTyped/DefinitelyTyped/issues/32914
 */

// Update your breakpoints if you want
export const sizes = {
  '576': 576,
  small: 600,
  '768': 768,
  '992': 992,
  medium: 1024,
  '1184': 1184,
  large: 1440,
  xlarge: 1920,
};

// Iterate through the sizes and create max-width media queries
const media = (Object.keys(sizes) as Array<keyof typeof sizes>).reduce((acc, size) => {
  acc[size] = `@media (max-width:${sizes[size]}px)`;
  return acc;
}, {} as { [key in keyof typeof sizes]: string });

export default media;

// Iterate through the sizes and create min-width media queries
// const media = (Object.keys(sizes) as Array<keyof typeof sizes>).reduce((acc, size) => {
//   acc[size] = () => `@media (min-width:${sizes[size]}px)`;
//   return acc;
// }, {} as { [key in keyof typeof sizes]: () => string });

// export default media;

/* Example
const SomeDiv = styled.div`
  display: flex;
  ....
  ${media.medium} {
    display: block
  }
`;
*/
