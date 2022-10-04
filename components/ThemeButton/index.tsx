import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import * as S from "./styles";

export const ThemeButton = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  function switchTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <>
      <S.ThemeButton onClick={switchTheme}>Button theme</S.ThemeButton>
    </>
  );
};
