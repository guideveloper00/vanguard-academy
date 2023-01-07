/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";

import { ISignature } from "../../templates/Home/interfaces";
import { Portal } from "../Portal";
import * as S from "./styles";

type ModalProps = {
  isModalOpen: boolean;
  handleCloseModal: () => void;
  signatures: ISignature[];
};

export const ModalSignatures = ({
  isModalOpen,
  handleCloseModal,
  signatures,
}: ModalProps) => {
  const [userHasActiveSubscription, setUserHasActiveSubscription] =
    useState(false);

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
                {userHasActiveSubscription && (
                    <S.AssignLink href="/register">Assinar</S.AssignLink>
                )}
                {!userHasActiveSubscription && (
                    <S.AssignLink href="/register">Assinar</S.AssignLink>
                )}
              </S.CardModalSignatures>
            ))}
          </S.Content>
        </S.Container>
      )}
    </Portal>
  );
};
