import React from "react";
import { Content, Bg } from "./styles";

export default class Casts extends React.Component {
  render() {
    return (
      <Bg>
        <Content>
          <h1>Olá Mundo! Esta será a página do Clã Podcast!</h1>
          <h2>Ou seja lá o nome que a gente for dar pra isso.</h2>
          <h4>(e se funcionar)</h4>
        </Content>
      </Bg>
    );
  }
}
