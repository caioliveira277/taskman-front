import React from "react";
import { Link } from "react-router-dom";
import { Container, LabelInput, Button } from "../../components";
import { Content } from "./styles";

export default function Login() {
  const backgroundImage = `${process.env.PUBLIC_URL}/assets/images/ilustracao-login-curvas.svg`;
  return (
    <Container
      maxWidth="515px"
      backgroundImage={backgroundImage}
      bgPosition="right"
    >
      <Content>
        <Link to="/cadastro">Não tem cadastro?</Link>
        <form>
          <figure>
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/ilustracao-relogio-login.png`}
              alt="Ilustracao de um relógio"
            />
          </figure>
          <LabelInput
            type="email"
            placeholder="Informe o seu e-mail"
            id="email"
            title="E-mail:"
          />
          <LabelInput
            type="password"
            placeholder="Informe a sua senha"
            id="password"
            title="Senha:"
          />
          <Button type="submit">Entrar</Button>
        </form>
        <a href="/" className="modalLink">
          Esqueceu sua senha?
        </a>
      </Content>
    </Container>
  );
}
