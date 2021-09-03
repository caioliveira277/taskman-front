import React from "react";
import { MdArrowBack } from "react-icons/md";
import { Link } from "react-router-dom";
import { LabelInput, Button } from "../../components";
import {
  ContainerModified,
  ImageContent,
  InfoContent,
  FooterContent,
} from "./styles";

export default function Profile() {
  return (
    <ContainerModified maxWidth="980px">
      <ImageContent>
        <figure>
          <img
            src={`${process.env.PUBLIC_URL}/assets/perfil-padrao.png`}
            alt="Foto de perfil"
          />
          <figcaption>Jhon Smith</figcaption>
        </figure>
      </ImageContent>
      <hr />
      <InfoContent>
        <form>
          <hr />
          <h2>Edição:</h2>
          <LabelInput
            id="name"
            name="name"
            placeholder="Informe o seu nome"
            title="Nome:"
          />
          <LabelInput
            id="password"
            name="password"
            placeholder="Informe uma senha"
            title="Senha:"
          />
          <LabelInput
            id="repeat-password"
            name="repeat-password"
            placeholder="Confirme a sua senha"
            title="Confirmar:"
          />
        </form>
        <ul>
          <li>
            <strong>E-mail cadastrado:</strong>
            <p>jhon@smith.com</p>
          </li>
          <li>
            <strong>Data de cadastro:</strong>
            <p>15/12/2019 15:23hrs</p>
          </li>
          <li>
            <strong>Tarefas finalizadas:</strong>
            <p>128 tarefas</p>
          </li>
          <li>
            <strong>Ciclos completos:</strong>
            <p>68 ciclos</p>
          </li>
        </ul>
      </InfoContent>
      <FooterContent>
        <Link to="/painel">
          <Button>
            <MdArrowBack /> Voltar
          </Button>
        </Link>
        <Button background="success">Salvar</Button>
      </FooterContent>
    </ContainerModified>
  );
}
