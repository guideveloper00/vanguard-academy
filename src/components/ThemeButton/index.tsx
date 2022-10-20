import { useTheme } from "next-themes";
import { Moon, Sun } from "phosphor-react";
import { useEffect, useState } from "react";
import Switch from "react-switch";

import * as S from "./styles";

export const ThemeButton = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [checked, setChecked] = useState({} as boolean);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setTheme(savedTheme as string);
    if (savedTheme === "light") setChecked(true);
    else setChecked(false);
    setMounted(true);
  }, [theme, setTheme]);

  function switchTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
    setChecked((prev) => !prev);
  }

  if (!mounted) {
    return null;
  }

  return (
    <>
      <S.ThemeButton>Button theme</S.ThemeButton>
      <Switch
        onChange={switchTheme}
        checked={checked}
        checkedHandleIcon={<Sun color="white" height={16} width={20} />}
        uncheckedHandleIcon={<Moon color="black" height={16} width={20} />}
        onHandleColor="#630a66"
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={"#856"}
        onColor={"#259"}
      />
    </>
  );
};
