import Head from "next/head";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import { api } from "../../services/api";
import { schema } from "../../shared/utils/schemas/loginSchema";
import * as S from "./styles";

type Form = {
  email: string;
  password: string;
};



export const LoginTemplate = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>({
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = async ({ email, password }: Form) => {
    api
      .post("/auth/signin", { email: email, password: password })
      .then((result) => {
        console.log(result);
      });
  };

  return (
    <>
      <Head>
        <title>Register</title>
      </Head>
      <S.Container>
        <S.Content>
          <S.RegisterForm>
            <h2>Login</h2>
            <form onSubmit={handleSubmit(onSubmitHandler)}>
              <input placeholder="Email" {...register("email")}></input>
              <span>{errors.email?.message || ""}</span>
              <input
                placeholder="Senha"
                {...register("password")}
                type={"password"}
              ></input>
              <span>{errors.password?.message || ""}</span>
              <S.CreateAccount type="submit">Entrar</S.CreateAccount>
              <div>
                <S.LinkHome>
                  <Link href="/">recuperar senha</Link>
                </S.LinkHome>
                <S.LinkHome>
                  <S.BackIcon />
                  <Link href="/">Voltar para tela inicial</Link>
                </S.LinkHome>
              </div>
            </form>
          </S.RegisterForm>
        </S.Content>
      </S.Container>
    </>
  );
};
