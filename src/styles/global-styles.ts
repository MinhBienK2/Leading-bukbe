import { createGlobalStyle } from 'styled-components';
import media from '@media';

/* istanbul ignore next */
export const GlobalStyle = createGlobalStyle`
  :root{
    --primary-1: #EC5938;
    --primary-2: #FFCF26;
    --primary-after-1: #f36a4c;

    --secondary-1:#FFDBD2;
    --secondary-2:#04B200;
    --secondary-3:#FF0000;
    --secondary-4:#EC5938;


    --whileL: #F3F3F3;
    --shadow: 0px 40px 70px 0px #EC5938;
    --shadow-black: 0px 2px 4px rgba(0, 0, 0, 0.25);

    --white: #ffffff;
    --white-light: #f3f3f3;
    --light: #eaeaea;
    --grey-light: #d6d6d6;
    --grey-medium: #bfbfbf;
    --grey: #a9a9a9;
    --grey-1: #a9a9a9;
    --grey-dark: #929292;
    --grey-black: #424242;
    --black: #000000;

  }

 *,*::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    user-select: none;
    font-family: 'Mulish', sans-serif;

  }

  *::-webkit-scrollbar {
    width: 0px;
  }
  *::-webkit-scrollbar-thumb {
    width: 0px;
  }
  *::-webkit-scrollbar-track {
    width: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

/* Firefox */
  input[type=number] {
    appearance: textfield;
  }
  html,
  body{
    height: 100%;
    width: 100%;
  }

  body{
    line-height: 1.3;
    font-family: 'Mulish', sans-serif;
  }

  #root {
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: 'Mulish', sans-serif;
  }

  input, select, button {
    font-family: inherit;
    font-size: inherit;
  }

  // somethings
  .cursor-pointer {
    cursor : pointer
  }

  .transition-all {
    transition : all 0.3s linear;
  }

  .radius-8 {
    border-radius: 8px;
  }

  /* font family */
  .heading_1 {
    font-family: 'Mulish ExtraBold';
    font-size: 64px;
    line-height: 80.32px;
  }
  .heading_2 {
    font-family: 'Mulish';
    font-size: 64px;
    line-height: 80.32px;
  }
  .heading_3 {
    font-family: 'Mulish ExtraBold';
    font-size: 48px;
    line-height: 60.24px;
  }
  .heading_4 {
    font-family: 'Mulish';
    font-size: 48px;
    line-height:60.24px;
  }

  .title_1 {
    font-family: 'Mulish ExtraBold';
    font-size: 32px;
    line-height: 40.16px;
  }
  .title_2 {
    font-family: 'Mulish SemiBold';
    font-size: 32px;
    line-height: 40.16px;
  }
  .title_3 {
      font-family: 'Mulish';
      font-size: 32px;
      line-height: 40.16px;
  }

  .subtitle_1 {
    font-family: 'Mulish ExtraBold';
    font-size: 24px;
    line-height: 30.12px;
  }
  .subtitle_2 {
    font-family: 'Mulish SemiBold';
    font-size: 24px;
    line-height: 30.12px;
  }
  .subtitle_3 {
    font-family: 'Mulish';
    font-size: 24px;
    line-height: 30.12px;
  }

  .body_1 {
    font-family: 'Mulish ExtraBold';
    font-size: 18px;
    line-height: 22.59px;
  }
  .body_2 {
    font-family: 'Mulish SemiBold';
    font-size: 18px;
    line-height: 22.59px;
  }
  .body_3 {
    font-family: 'Mulish';
    font-size: 18px;
    line-height: 22.59px;
  }
  .body_4 {
    font-family: 'Mulish ExtraBold';
    font-size: 16px;
    line-height: 20.08px;
  }
  .body_5 {
    font-family: 'Mulish SemiBold';
    font-size: 16px;
    line-height: 20.08px;
  }
  .body_6 {
    font-family: 'Mulish';
    font-size: 16px;
    line-height: 20.08px;
  }

  .small_1 {
    font-family: 'Mulish ExtraBold';
    font-size: 14px;
    line-height: 17.57px;
  }
  .small_2 {
    font-family: 'Mulish SemiBold';
    font-size: 14px;
    line-height: 17.57px;
  }
  .small_3 {
    font-family: 'Mulish';
    font-size: 14px;
    line-height: 17.57px;
  }
  .small_4 {
    font-family: 'Mulish ExtraBold';
    font-size: 12px;
    line-height: 15.06px;
  }
  .small_5 {
    font-family: 'Mulish SemiBold';
    font-size: 12px;
    line-height: 15.06px;
  }
  .small_6 {
    font-family: 'Mulish';
    font-size: 12px;
    line-height: 15.06px;
  }
  .small_7 {
    font-family: 'Mulish';
    font-size: 10px;
    line-height: 12.55px;
  }

  /* mobile */
  .mb-heading_1 {
    ${media.small} {
      font-family: 'Mulish ExtraBold';
      font-size: 64px;
      line-height: 80.32px;
    }
  }
  .mb-heading_2 {
    ${media.small} {
      font-family: 'Mulish';
      font-size: 64px;
      line-height: 80.32px;
    }
  }
  .mb-heading_3 {
    ${media.small} {
      font-family: 'Mulish ExtraBold';
      font-size: 48px;
      line-height: 60.24px;
    }
  }
  .mb-heading_4 {
    ${media.small} {
      font-family: 'Mulish';
      font-size: 48px;
      line-height:60.24px;
    }
  }

  .mb-title_1 {
    ${media.small} {
      font-family: 'Mulish ExtraBold';
      font-size: 32px;
      line-height: 40.16px;
    }
  }
  .mb-title_2 {
    ${media.small} {
      font-family: 'Mulish SemiBold';
      font-size: 32px;
      line-height: 40.16px;
    }
  }
  .mb-title_3 {
    ${media.small} {
        font-family: 'Mulish';
        font-size: 32px;
        line-height: 40.16px;
      }
  }

  .mb-subtitle_1 {
    ${media.small} {
      font-family: 'Mulish ExtraBold';
      font-size: 24px;
      line-height: 30.12px;
    }
  }
  .mb-subtitle_2 {
    ${media.small} {
      font-family: 'Mulish SemiBold';
      font-size: 24px;
      line-height: 30.12px;
    }
  }
  .mb-subtitle_3 {
    ${media.small} {
      font-family: 'Mulish';
      font-size: 24px;
      line-height: 30.12px;
    }
  }

  .mb-body_1 {
    ${media.small} {
      font-family: 'Mulish ExtraBold';
      font-size: 18px;
      line-height: 22.59px;
    }
  }
  .mb-body_2 {
    ${media.small} {
      font-family: 'Mulish SemiBold';
      font-size: 18px;
      line-height: 22.59px;
    }
  }
  .mb-body_3 {
    ${media.small} {
      font-family: 'Mulish';
      font-size: 18px;
      line-height: 22.59px;
    }
  }
  .mb-body_4 {
    ${media.small} {
      font-family: 'Mulish ExtraBold';
      font-size: 16px;
      line-height: 20.08px;
    }
  }
  .mb-body_5 {
    ${media.small} {
      font-family: 'Mulish SemiBold';
      font-size: 16px;
      line-height: 20.08px;
    }
  }
  .mb-body_6 {
    ${media.small} {
      font-family: 'Mulish';
      font-size: 16px;
      line-height: 20.08px;
    }
  }

  .mb-small_1 {
    ${media.small} {
      font-family: 'Mulish ExtraBold';
      font-size: 14px;
      line-height: 17.57px;
    }
  }
  .mb-small_2 {
    ${media.small} {
      font-family: 'Mulish SemiBold';
      font-size: 14px;
      line-height: 17.57px;
    }
  }
  .mb-small_3 {
    ${media.small} {
      font-family: 'Mulish';
      font-size: 14px;
      line-height: 17.57px;
    }
  }
  .mb-small_4 {
    ${media.small} {
      font-family: 'Mulish ExtraBold';
      font-size: 12px;
      line-height: 15.06px;
    }
  }
  .mb-small_5 {
    ${media.small} {
      font-family: 'Mulish SemiBold';
      font-size: 12px;
      line-height: 15.06px;
    }
  }
  .mb-small_6 {
    ${media.small} {
      font-family: 'Mulish';
      font-size: 12px;
      line-height: 15.06px;
    }
  }
  .mb-small_7 {
    ${media.small} {
      font-family: 'Mulish';
      font-size: 10px;
      line-height: 12.55px;
    }
  }
`;
