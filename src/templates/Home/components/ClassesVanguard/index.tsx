import Link from "next/link";
import { useState } from "react";

import ServerIcon from "../../../../../public/backend.svg";
import DataIcon from "../../../../../public/database.svg";
import DesignIcon from "../../../../../public/design.svg";
import FrontendIcon from "../../../../../public/frontend.svg";
import { IServerSidePropsTrails } from "../../interfaces";
import { CardTechnology } from "../Card";
import * as S from "./styles";

export const ClassesVanguard = ({ trails }: IServerSidePropsTrails) => {
  const [selectedTrail, setSelectedTrail] = useState("Front-end");

  function changeTrail(newTrail: string) {
    setSelectedTrail(newTrail);
  }
  const icons = {
    frontendIcon: FrontendIcon,
    designIcon: DesignIcon,
    backendIcon: ServerIcon,
    databaseIcon: DataIcon,
  };

  const iconsHandler = (icon: keyof typeof icons) => {
    return icons[icon];
  };

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
                Icon={iconsHandler(item.icon)}
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
