import { createGlobalStyle } from 'styled-components';
/* istanbul ignore next */
export const GlobalStyle = createGlobalStyle`
  :root{
    --primary-1: #A9CFFF;
    --primary-2: #2B89BD;
    --primary-3: #4AA4D6;
    --primary-4: #277BAA;
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
    font-family: 'Intel Clear', sans-serif;

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
    font-family: 'Intel Clear', sans-serif;
  }

  #root {
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: 'Intel Clear', sans-serif;
  }

  input, select, button {
    font-family: inherit;
    font-size: inherit;
  }

  // somethings
  .cursor-pointer {
    cursor : pointer
  }

  .radius-8 {
    border-radius: 8px;
  }

  /* font family */
  .title_1 {
    font-family: 'Intel Clear Bold';
    font-size: 36px;
    font-weight: 700;
    line-height: 46.44px;
    letter-spacing: 0.5px;
  }
.title_2 {
  font-family: 'Intel Clear Bold';
  font-size: 28px;
  font-weight: 700;
  line-height: 36.12px;
   letter-spacing: 0.5px;
}
.title_3 {
    font-family: 'Intel Clear Bold';
    font-size: 24px;
    font-weight: 700;
    line-height: 30.96px;
    letter-spacing: 0.5px;
}
.title_4 {
  font-family: 'Intel Clear Bold';
  font-size: 18px;
  font-weight: 700;
  line-height: 23.22px;
   letter-spacing: 0.5px;
}
.title_5 {
  font-family: 'Intel Clear Bold';
  font-size: 16px;
  font-weight: 700;
  line-height: 20.64px;
   letter-spacing: 0.5px;
}
.title_6 {
  font-family: 'Intel Clear Bold';
  font-size: 14px;
  font-weight: 700;
  line-height: 18.06px;
   letter-spacing: 0.5px;
}
.title_7 {
  font-family: 'Intel Clear Bold';
  font-size: 12px;
  font-weight: 700;
  line-height: 15.48px;
   letter-spacing: 0.5px;
}

.body_1 {
  font-family: 'Intel Clear';
  font-size: 24px;
  font-weight: 400;
  line-height: 31px;
   letter-spacing: 0.5px;
}
.body_2 {
  font-family: 'Intel Clear';
  font-size: 20px;
  font-weight: 400;
  line-height: 25.8px;
   letter-spacing: 0.5px;
}
.body_3 {
  font-family: 'Intel Clear';
  font-size: 16px;
  font-weight: 400;
  line-height: 20.64px;
   letter-spacing: 0.5px;
}
.body_4 {
  font-family: 'Intel Clear';
  font-size: 14px;
  font-weight: 400;
  line-height: 18.06px;
   letter-spacing: 0.5px;
}
.body_5 {
  font-family: 'Intel Clear';
  font-size: 12px;
  font-weight: 400;
  line-height: 15.48px;
   letter-spacing: 0.5px;
}
.body_6 {
    font-family: 'Intel Clear';
    font-size: 10px;
    font-weight: 400;
    line-height: 12.9px;
    letter-spacing: 0.5px;
}

.mb-title_1 {
   @media (max-width: 576px) {
    font-family: 'Intel Clear Bold';
    font-size: 36px;
    font-weight: 700;
    line-height: 46.44px;
    letter-spacing: 0.5px;
   }
}
.mb-title_2 {
   @media (max-width: 576px) {
    font-family: 'Intel Clear Bold';
    font-size: 28px;
    font-weight: 700;
    line-height: 36.12px;
    letter-spacing: 0.5px;
   }
}
.mb-title_3 {
   @media (max-width: 576px) {
    font-family: 'Intel Clear Bold';
    font-size: 24px;
    font-weight: 700;
    line-height: 30.96px;
    letter-spacing: 0.5px;
   }
}
.mb-title_4 {
   @media (max-width: 576px) {
    font-family: 'Intel Clear Bold';
    font-size: 18px;
    font-weight: 700;
    line-height: 23.22px;
    letter-spacing: 0.5px;
   }
}
.mb-title_5 {
   @media (max-width: 576px) {
    font-family: 'Intel Clear Bold';
    font-size: 16px;
    font-weight: 700;
    line-height: 20.64px;
    letter-spacing: 0.5px;
   }
}
.mb-title_6 {
    @media (max-width: 576px) {
      font-family: 'Intel Clear Bold';
      font-size: 14px;
      font-weight: 700;
      line-height: 18.06px;
      letter-spacing: 0.5px;
    }
}
.mb-title_7 {
    @media (max-width: 576px) {
      font-family: 'Intel Clear Bold';
      font-size: 12px;
      font-weight: 700;
      line-height: 15.48px;
      letter-spacing: 0.5px;
    }
}

.mb-body_1 {
  @media (max-width: 576px) {
      font-family: 'Intel Clear';
      font-size: 24px;
      font-weight: 400;
      line-height: 31px;
      letter-spacing: 0.5px;
  }
}
.mb-body_2 {
  @media (max-width: 576px) {
      font-family: 'Intel Clear';
      font-size: 20px;
      font-weight: 400;
      line-height: 25.8px;
      letter-spacing: 0.5px;
  }

}
.mb-body_3 {
   @media (max-width: 576px) {
      font-family: 'Intel Clear';
      font-size: 16px;
      font-weight: 400;
      line-height: 20.64px;
      letter-spacing: 0.5px;
  }
}
.mb-body_4 {
   @media (max-width: 576px) {
      font-family: 'Intel Clear';
      font-size: 14px;
      font-weight: 400;
      line-height: 18.06px;
      letter-spacing: 0.5px;
  }
}
.mb-body_5 {
   @media (max-width: 576px) {
      font-family: 'Intel Clear';
      font-size: 12px;
      font-weight: 400;
      line-height: 15.48px;
      letter-spacing: 0.5px;
  }
}
.mb-body_6 {
   @media (max-width: 576px) {
      font-family: 'Intel Clear';
      font-size: 10px;
      font-weight: 400;
      line-height: 12.9px;
      letter-spacing: 0.5px;
  }
}

`;
