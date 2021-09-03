import React from "react";
import { Link } from "react-router-dom";
import { LabelInput, Button } from "../../components";
import { Content, ContainerModified as Container } from "./styles";

export default function Signin(props) {
  return (
    <Container maxWidth="585px">
      <Content>
        <Link to="/">Já tem cadastro?</Link>
        <form action="">
          <h1>Cadastro:</h1>
          <LabelInput
            type="text"
            placeholder="Informe o seu nome"
            title="Nome:"
            id="name"
          />
          <LabelInput
            type="text"
            placeholder="Informe o seu e-mail"
            title="E-mail:"
            id="email"
          />
          <div>
            <LabelInput
              type="password"
              placeholder="Informe uma senha"
              title="Senha:"
              id="password"
            />
            <LabelInput
              type="password"
              placeholder="Confirme a sua senha"
              title="Confirmar:"
              id="confirm-password"
            />
          </div>
          <Button type="submit">Cadastrar</Button>
        </form>
      </Content>
    </Container>
  );
}
