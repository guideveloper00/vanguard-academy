import Link from "next/link";
import { useRouter } from "next/router";
import { ReactElement } from "react";

import * as S from "./styles";

type ActiveLinkProps = {
  href: string;
  children: ReactElement;
};

export const ActiveLink = ({ href, children }: ActiveLinkProps) => {
  const { asPath } = useRouter();

  const isOnThePage = href === asPath;

  return (
    <>
      {isOnThePage && (
        <Link href={href}>
          <S.ActiveTrail>{children}</S.ActiveTrail>
        </Link>
      )}
      {!isOnThePage && (
        <Link href={href}>
          <S.Trails>{children}</S.Trails>
        </Link>
      )}
    </>
  );
};
