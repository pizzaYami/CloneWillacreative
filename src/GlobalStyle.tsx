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
  
  * {
  margin: 0; /* margin 초기화 */
  padding: 0; /* padding 초기화 */
  font: inherit; /* font 상속을 못하는 요소(button, input)에게 폰트 적용을 위해 작성 */
  color: inherit; /* a, input, textarea에도 동일한 글자색 적용을 위해 작성 */
}

*,
:after,
:before {
  box-sizing: border-box;
}

:root {
  -webkit-text-size-adjust: 100%; /* 모바일에서도 원래 폰트 사이즈로 출력(사파리) */
  text-size-adjust: 100%; /* 모바일에서도 원래 폰트 사이즈로 출력 */
  overflow-wrap: break-word;
}

html,
body {
  height: 100%;
}

img,
svg,
canvas {
  display: block; /* 하단의 여백 제거를 위해 작성 */
  max-width: 100%; /* 이미지 삐져나가는것 방지하기 위해 작성 */
}

button {
  background: none;
  border: 0;
  cursor: pointer;
}

a {
  text-decoration: none;
}
`;

export default GlobalStyle;
