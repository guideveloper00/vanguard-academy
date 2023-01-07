import { useTheme } from "next-themes";
import { Moon, Sun } from "phosphor-react";
import { useEffect, useState } from "react";

import * as S from "./styles";

export const ThemeButton = () => {
  const [mounted, setMounted] = useState(false);
  const {theme, setTheme} = useTheme();
  const [checked, setChecked] = useState<boolean>();
  const [touched, setTouched] = useState(false);

  // o setTheme do next-themes já vem com Broadcast api
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setTheme((savedTheme as string) || "dark");
    if (savedTheme === "light") setChecked(true);
    else setChecked(false);
    setMounted(true);
  }, [theme, setTheme]);

  function switchTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
    setChecked((prev) => !prev);
    setTouched(true);
  }

  if (!mounted) {
    return null;
  }

  return (
    <>
      {!touched && (
        <S.ThemeButtonWithoutAnimation title="Tema" onClick={switchTheme}>
          {checked && <Sun color="black" height={26} width={26} />}
          {!checked && <Moon color="white" height={26} width={26} />}
        </S.ThemeButtonWithoutAnimation>
      )}
      {touched && (
        <S.ThemeButton title="Tema" onClick={switchTheme}>
          {checked && <Sun color="black" height={26} width={26} />}
          {!checked && <Moon color="white" height={26} width={26} />}
        </S.ThemeButton>
      )}
    </>
  );
};
