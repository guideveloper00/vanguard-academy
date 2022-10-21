/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

import Link from "next/link";
import { useState } from "react";

import * as S from "./styles";

export const SignaturePlans = () => {
  const [userHasActiveSubscription, setUserHasActiveSubscription] =
    useState(false);

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

  return (
    <S.Container>
      <S.Content>
        <h1>Comece hoje mesmo!</h1>
        <S.SignatureArea>
          {signatures.map((signature, key) => (
            <S.SignatureCard key={key}>
              <h3>Assinatura por {signature.signatureTime}</h3>
              <div>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(signature.price)}
              </div>
              {userHasActiveSubscription && (
                <Link href={signature.link}>
                  <S.AssignLink>Assinar</S.AssignLink>
                </Link>
              )}
              {!userHasActiveSubscription && (
                <Link href={"/register"}>
                  <S.AssignLink>Assinar</S.AssignLink>
                </Link>
              )}
            </S.SignatureCard>
          ))}
        </S.SignatureArea>
      </S.Content>
    </S.Container>
  );
};
