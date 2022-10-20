import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

type Props = {
  children: ReactNode;
  id: string;
};

export const Portal = ({ children, id }: Props) => {
  const [element, setElement] = useState<HTMLElement>();

  useEffect(() => {
    setElement(document.getElementById(id)!);
  }, [children, id]);

  return element ? createPortal(children, element) : null;
};
