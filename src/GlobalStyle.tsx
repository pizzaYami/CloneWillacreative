import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    /* 색상코드 */
    --color-main: #FFBB00;
    --color-bg: #F7F7FB;
    --color-line: #F0F0F6;
    --font-color1: #111111;
    --font-color2: #505050;
    --font-color3: #767676;
    --system-red: #DC0000;
    --color-disabled1: #999999;
    --color-disabled2: #E5E5EC;
    --system-green: #04B014;
    --color-white: #ffffff;

    /* 가로 폭 */
    --width-mobile: 375px;
    --width-my-mission: 11.25rem;
    --width-max: 500px;
    --width-min: 20rem;

    /* 세로 폭 */
    --height-header: 3.5rem;
    --height-gap: 0.5rem;

    /* 폰트 크기 */
    --welcome: 1.75rem;
    --header: 1.25rem;
    --head-a: 1.5rem;
    --head-b: 1.125rem;
    --head-c: 1rem;
    --body-a: 1rem;
    --body-b: 0.875rem;
    --body-c: 0.75rem;
    --button-big: 1rem;
    --button-mid: 0.875rem;
    --button-mid-bold: 0.875rem;  // 볼드 속성 
    --button-small: 0.6875rem;

    &::-webkit-scrollbar {
      display: none;
    }
  }
  
  

  *{
    margin: 0;
    border: 0;
    box-sizing: border-box;
  }

  h1, h2, h3, p, li, div{
    white-space: pre-line;
    font-weight: 500;
  }

  html, body{
    width:100%;
    height:100vh;
  }
  
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
`;

export default GlobalStyle;
