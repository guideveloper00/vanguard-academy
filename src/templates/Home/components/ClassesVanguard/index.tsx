import Link from "next/link";
import { useState } from "react";

import ServerIcon from "../../../../../public/backend.svg";
import DataIcon from "../../../../../public/database.svg";
import DesignIcon from "../../../../../public/design.svg";
import FrontendIcon from "../../../../../public/frontend.svg";
import { CardTechnology } from "../Card";
import * as S from "./styles";

export const ClassesVanguard = () => {
  const [selectedTrail, setSelectedTrail] = useState("Front-end");

  function changeTrail(newTrail: string) {
    setSelectedTrail(newTrail);
  }

  const trails = [
    {
      title: "Trilhas",
      items: [
        {
          title: "Front-end",
          icon: FrontendIcon,
          text: "O Front-end é a primeira interação entre o usuário e a aplicação, é a camada visual, onde o usuario pode interagir. Nessa trilha você aprenderá a usar tecnologias como: HTML5, CSS3, JavaScript, Typescript, React, Next, Styled-components, Animations, Hooks, Plataformas usadas durante o desenvolvimento profissional e muito mais.",
          link: "/aulas/frontend",
        },
        {
          title: "Back-end",
          icon: ServerIcon,
          text: "O Back-end é o servidor da aplicação, a camada responsavel por gerenciar as regras de negocio e trasnferencia de dados entre os usuarios e a empresa",
          link: "/aulas/backend",
        },

        {
          title: "Dados",
          icon: DataIcon,
          text: "O banco de dados é responsavel por armazenar as informações dos usuários",
          link: "/aulas/dados",
        },
        {
          title: "Design",
          icon: DesignIcon,
          text: "Parte essencial do desenvolvimento de uma aplicação, o design além de facilitar a navegação do usuário também o mantém na aplicação",
          link: "/aulas/design",
        },
      ],
    },
  ];

  return (
    <S.Container>
      {trails.map((trail, key) => (
        <S.Content key={key}>
          <h2>Trilhas</h2>
          <S.CardArea>
            {trail.items.map((item, key) => (
              <CardTechnology
                key={key}
                isSelected={selectedTrail === item.title}
                onClick={changeTrail}
                title={item.title}
                Icon={item.icon}
              />
            ))}
          </S.CardArea>

          <S.TrailIntroduction>
            {trail.items.map((item, key) => (
              <div key={key}>
                {item.title === selectedTrail && (
                  <S.TrailContent>
                    <div>{item.text}</div>
                    <Link href="/">{`Acessar trilha ${item.title}`}</Link>
                  </S.TrailContent>
                )}
              </div>
            ))}
          </S.TrailIntroduction>
        </S.Content>
      ))}
    </S.Container>
  );
};
