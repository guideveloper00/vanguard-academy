import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { yupResolver } from "@hookform/resolvers/yup";

import VanguardLogo from "../../../public/V-grande.png";
import { api } from "../../services/api";
import { schema } from "../../shared/utils/schemas";
import * as S from "./styles";

type Form = {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

export const RegisterTemplate = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>({
    resolver: yupResolver(schema),
  });

  const router = useRouter();

  const recaptchaRef = React.createRef<ReCAPTCHA>();

  const onReCAPTCHAChange = (token: string | null) => {
    if (!token) {
      return;
    }
    recaptchaRef.current?.reset();
  };
  const onSubmitHandler = async ({
    name,
    email,
    password,
    passwordConfirmation,
  }: Form) => {
    const recaptchaToken = await recaptchaRef.current?.executeAsync();
    const data = {
      name,
      email,
      password,
      passwordConfirmation,
      recaptchaToken,
    };
    api
      .post("/auth/signup", data)
      .then((response) => {
        console.log(response.data);
        recaptchaRef.current?.reset();
        toast.info(response.data);
        if (response.status === 201) {
          router.replace("/");
        }
      })
      .catch((err) => {
        toast.error(err.response.data);
      });
  };

  useEffect(() => {
    // JavaScript anonymous function
    (() => {
      if (window.localStorage) {
        // If there is no item as 'reload'
        // in localstorage then create one &
        // reload the page
        if (!localStorage.getItem("reload")) {
          localStorage["reload"] = true;
          window.location.reload();
        }
      }
    })(); // Calling anonymous function here only
  }, []);

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
              <input
                placeholder="Confirmar senha"
                {...register("passwordConfirmation")}
                type={"password"}
              ></input>
              <span>{errors.passwordConfirmation?.message || ""}</span>
              <div id="html_element"></div>
              <S.Captcha>
                <ReCAPTCHA
                  sitekey="6LdJ86QiAAAAAJ4y08SIyBnsVLpSvAtyiSeiRL_i"
                  onChange={onReCAPTCHAChange}
                  size="invisible"
                  ref={recaptchaRef}
                  id="captcha"
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
