import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body {
    height: 100%;
  }

  #root {
    min-height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    font: 14px 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  #bg {
    height: 100%;
    min-height: 100vh;
    background: linear-gradient(-90deg, #7159c1, #ab59c1);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #content {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgba(0, 0, 0, 0.1);
    border: 0;
    border-radius: 4px;
    font-family: Arial, Helvetica, sans-serif;
    padding: 10px 15px 10px 15px;
    margin: auto 5px auto 5px;
    text-align: center;
  }
  #content-h1 {
    color: #fff;
    margin-bottom: 10px;
    margin-top: 10px;
  }
  #content-h2 {
    color: #fff;
    margin-bottom: 10px;
  }
`;
