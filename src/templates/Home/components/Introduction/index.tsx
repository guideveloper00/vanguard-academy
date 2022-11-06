import Link from "next/link";
import { useState } from "react";

import IntroductionImageSVG from "../../../../../public/Programming-amico1.svg";
import { ModalSignatures } from "../../../../components/ModalSignatures";
import { IServerSidePropsIntroduction } from "../../interfaces";
import * as S from "./styles";

export const Introduction = ({ signatures }: IServerSidePropsIntroduction) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <S.Container>
      <ModalSignatures
        isModalOpen={isModalOpen}
        handleCloseModal={() => setIsModalOpen(false)}
        signatures={signatures}
      />
      <S.Content>
        <>
          <S.IntroductionText>
            <S.Title>Vanguard - Academy</S.Title>
            <S.Subtitle>
              Deseja se tornar um mestre em tecnologia? com a assinatura
              Vanguard você terá acesso a todas as nossas aulas!
            </S.Subtitle>
            <S.AssignButton onClick={() => setIsModalOpen(true)}>
              Assinar&nbsp;<div>Vanguard</div>
            </S.AssignButton>
          </S.IntroductionText>
          <Link href="https://storyset.com/illustration/programming/amico">
            <S.IntroductionImage>
              <IntroductionImageSVG />
            </S.IntroductionImage>
          </Link>
        </>
      </S.Content>
    </S.Container>
  );
};
