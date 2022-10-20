import Link from "next/link";
import { useState } from "react";

import { Modal } from "../../../../components/Modal";
import useWindowDimensions from "../../../../shared/utils/WindowWidth";
import * as S from "./styles";
export const Introduction = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { width } = useWindowDimensions();

  return (
    <S.Container>
      <Modal
        isModalOpen={isModalOpen}
        handleCloseModal={() => setIsModalOpen(false)}
      />
      <S.Content>
        {width! > 960 && (
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
              <S.IntroductionImage />
            </Link>
          </>
        )}
        {width! < 960 && (
          <S.IntroductionTextMin>
            <S.Title>Vanguard - Academy</S.Title>
            <S.Subtitle>
              Deseja se tornar um mestre em tecnologia? com a assinatura
              Vanguard você terá acesso a todas as nossas aulas!
            </S.Subtitle>
            <S.AssignButton onClick={() => setIsModalOpen(true)}>
              Assinar&nbsp;<div>Vanguard</div>
            </S.AssignButton>
          </S.IntroductionTextMin>
        )}
      </S.Content>
    </S.Container>
  );
};
