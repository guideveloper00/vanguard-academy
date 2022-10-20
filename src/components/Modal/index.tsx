import Link from "next/link";

import { Portal } from "../Portal";
import * as S from "./styles";

type ModalProps = {
  isModalOpen: boolean;
  handleCloseModal: () => void;
};

const signatures = [
  {
    signatureTime: "1 mês",
    price: 50,
    link: "/teste",
  },
  {
    signatureTime: "3 mêses",
    price: 200,
    link: "/teste",
  },
  {
    signatureTime: "1 ano",
    price: 500,
    link: "/teste",
  },
];

export const Modal = ({ isModalOpen, handleCloseModal }: ModalProps) => {
  return (
    <Portal id="modal-root">
      {isModalOpen && (
        <S.Container>
          <S.Overlay onClick={handleCloseModal} />
          <S.Content>
            <h2>Selecione seu plano!</h2>
            <h3>
              Com a nossa assinatura você tem acesso a todo nosso conteudo.
            </h3>
            {signatures.map((signature, key) => (
              <S.CardModalSignatures key={key}>
                <div>
                  <div>{signature.signatureTime}</div>
                  <div>
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(signature.price)}
                  </div>
                </div>
                <Link href={signature.link}>
                  <S.AssignLink>Assinar</S.AssignLink>
                </Link>
              </S.CardModalSignatures>
            ))}
          </S.Content>
        </S.Container>
      )}
    </Portal>
  );
};