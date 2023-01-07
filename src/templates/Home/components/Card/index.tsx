import * as S from "./styles";

type CardTechnologyProps = {
  title: string;
  Icon: string;
  onClick: (param1: string) => void;
  isSelected: boolean;
};

export const CardTechnology = ({
  title,
  Icon,
  onClick,
  isSelected,
}: CardTechnologyProps) => {
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {isSelected && (
        <S.Container onClick={() => onClick(title)}>
          <S.Content>
            <S.Text>{title}</S.Text>
            <S.Icon>
              <Icon />
            </S.Icon>
          </S.Content>
        </S.Container>
      )}
      {!isSelected && (
        <S.NotSelectedContainer onClick={() => onClick(title)}>
          <S.Content>
            <S.Text>{title}</S.Text>
            <S.Icon>
              <Icon />
            </S.Icon>
          </S.Content>
        </S.NotSelectedContainer>
      )}
    </>
  );
};
