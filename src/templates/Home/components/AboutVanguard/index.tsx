import Link from "next/link";

import * as S from "./styles";

export const AboutVanguard = () => {
  return (
    <S.Container>
      <S.Content>
        <S.Title>
          Nossas trilhas foram pensadas para levar você do total zero ao
          nível&nbsp;
          <div>mestre</div>.
        </S.Title>
        <S.OurMethodology>
          <S.OurMethodologySubtitle>A escolha é sua</S.OurMethodologySubtitle>
          <S.OurMethodologyContent>
            <S.OurMethodologyText>
              As aulas são dividas em trilhas e em tecnologias, se não quiser
              seguir a trilha sinta-se livre para ir direto para a tecnologia
              que quiser aprender.
              <Link href="/aulas">Acessar aulas</Link>
            </S.OurMethodologyText>
            <S.OurMethodologyImage alt="class" />
          </S.OurMethodologyContent>
        </S.OurMethodology>

        <S.Assemble>
          <S.AssembleSubtitle>Avance na tecnologia!</S.AssembleSubtitle>
          <S.AssembleText>
            Ao concluir uma tecnologia você poderá gerar o certificado de
            conclusão da tecnologia e ao atingir o nivel mestre de uma trilha, o
            certificado de conlusão dessa trilha virá com uma exclusiva medalha
            Vanguard!
          </S.AssembleText>
          <S.Medals>
            <S.ImageMasterMedal alt="class" />
            <S.ImageVanguardMedal alt="class" />
          </S.Medals>
        </S.Assemble>
      </S.Content>
    </S.Container>
  );
};
