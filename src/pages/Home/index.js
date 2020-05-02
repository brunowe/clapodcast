import React from "react";
import { Content, Bg } from "./styles";

// import { Container } from './styles';

export default class Home extends React.Component {
  render() {
    return (
      <Bg>
        <Content>
          <h1>Olá Mundo! Esta será a página do Clã Podcast!</h1>
          <h2>Ou seja lá o nome que a gente for dar pra isso.</h2>
        </Content>
      </Bg>
    );
  }
}
