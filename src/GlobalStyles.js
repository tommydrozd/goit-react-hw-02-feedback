import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Arial', sans-serif;
    background: linear-gradient(135deg, #f5a623, #f76b1c);
    color: #333;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    flex-direction: column;
  }
  
  h1, p {
    margin: 50;
  }
  
  section {
    margin-bottom: 50px;
  }
  
  .feedback-section {
    margin-bottom: 50px;
  }
  
  .statistics-section {
    margin-bottom: 50px;
  }
  
  .notification-section {
    margin-bottom: 20px;
  }

  
`;

export default GlobalStyle;
