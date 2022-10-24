import Head from "next/head";
import Link from "next/link";
import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import VanguardLogo from "../../../public/V-grande.png";
import { schema } from "../../shared/utils/schemas";
import * as S from "./styles";

type Form = {
  name: string;
  email: string;
  password: string;
};

export const RegisterTemplate = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>({
    resolver: yupResolver(schema),
  });

  const recaptchaRef = React.createRef<ReCAPTCHA>();

  const onReCAPTCHAChange = (token: string | null) => {
    if (!token) {
      return;
    }
    recaptchaRef.current?.reset();
  };

  const onSubmitHandler = async ({ name, email, password }: Form) => {
    const token = await recaptchaRef.current?.executeAsync();
    console.log(token);
    console.log([name, email, password]);
  };

  return (
    <>
      <Head>
        <title>Register</title>
      </Head>
      <S.Container>
        <S.Content>
          <S.RegisterForm>
            <h2>Crie sua conta</h2>
            <form onSubmit={handleSubmit(onSubmitHandler)}>
              <input placeholder="Nome" {...register("name")}></input>
              <span>{errors.name?.message || ""}</span>
              <input placeholder="Email" {...register("email")}></input>
              <span>{errors.email?.message || ""}</span>
              <input
                placeholder="Senha"
                {...register("password")}
                type={"password"}
              ></input>
              <span>{errors.password?.message || ""}</span>
              <S.Captcha>
                <ReCAPTCHA
                  sitekey="6LdJ86QiAAAAAJ4y08SIyBnsVLpSvAtyiSeiRL_i"
                  onChange={onReCAPTCHAChange}
                  size="invisible"
                  ref={recaptchaRef}
                />
              </S.Captcha>
              <S.CreateAccount type="submit">Criar conta</S.CreateAccount>
              <S.LinkHome>
                <S.BackIcon />
                <Link href="/">Voltar para tela inicial</Link>
              </S.LinkHome>
            </form>
          </S.RegisterForm>
          <S.RegisterInfos>
            <h2>
              Crie sua conta e assine a plataforma para ter acesso a todos os
              nossos conteudos.
            </h2>
            <S.LogoContent>
              <S.Logo src={VanguardLogo} alt="Logo" />
            </S.LogoContent>
          </S.RegisterInfos>
        </S.Content>
      </S.Container>
    </>
  );
};
