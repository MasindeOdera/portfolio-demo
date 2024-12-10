import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    background-color: #212327;
    color: #f4f4f9;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }

  h1 {
    animation: glow 10s linear infinite;
  }

  @keyframes glow {
    0% {
        text-shadow: 0 0 5px #6666ff, 0 0 10px #6666ff, 0 0 15px #6666ff;
      }
      10% {
        text-shadow:0 0 8px  #0099ff;
      }
      50% {
        text-shadow:0 0 5px  #00ff00, 0 0 10px #00ff00, 0 0 15px  #00ff00;
      }
      75% {
        text-shadow:0 0 10px  #ff3399;
      }
      100% {
        text-shadow: 0 0 5px #6666ff, 0 0 10px #6666ff, 0 0 15px #6666ff;
      }
  }
`;
