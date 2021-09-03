import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { LabelInput, Button, Mask, Modal } from "../../components";
import { ContainerModified as Container, Content, FormModal } from "./styles";

export default function Login() {
  const toggleModal = useSelector((state) => state.Toggles.modal);
  const modalDispatch = useDispatch();
  const history = useHistory();

  const HandlerClickForgotPassword = (e) => {
    e.preventDefault();
    modalDispatch({ type: "OPEN_MODAL" });
  };
  const HandlerSubmitLogin = (event) => {
    event.preventDefault();
    history.push("/painel");
  };
  return (
    <Container maxWidth="515px">
      <Content>
        <Link to="/cadastro">Não tem cadastro?</Link>
        <form onSubmit={HandlerSubmitLogin}>
          <figure title="Taskman">
            <img
              src={`${process.env.PUBLIC_URL}/assets/ilustracao-relogio-login.png`}
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
        <a href="/" className="modalLink" onClick={HandlerClickForgotPassword}>
          Esqueceu sua senha?
        </a>
        {toggleModal === "OPEN" ? (
          <Mask>
            <Modal maxWidth="800px" title="Recuperação de senha:">
              <FormModal>
                <figure>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/ilustracao-recuperacao-senha.svg`}
                    alt="Recuperação através do e-mail"
                  />
                </figure>
                <div>
                  <p>
                    Informe o seu <b>e-mail</b> abaixo para que possamos te
                    ajudar a<b> recuperar</b> sua <b>senha</b>
                  </p>
                  <LabelInput
                    id="emailRecuperacao"
                    name="email"
                    placeholder="E-mail cadastrado"
                    type="text"
                  />
                  <Button type="submit">Enviar</Button>
                </div>
              </FormModal>
            </Modal>
          </Mask>
        ) : null}
      </Content>
    </Container>
  );
}
