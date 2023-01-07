import type { GetStaticProps, NextPage } from "next";

// import { useEffect, useState } from "react";

// import { useDispatch } from "react-redux";
// import { Reducers } from "../shared/store/reducers";
// import { api } from "../services/api";
import { HomeTemplate } from "../templates/Home";
import { IServerSideProps } from "../templates/Home/interfaces";

// { product }: ServerSideProps

const Home: NextPage<IServerSideProps> = (props: IServerSideProps) => {
  // const dispatch = useDispatch();
  // const authActions = Reducers.authReducer.authActions;
  // product={product}

  return <HomeTemplate trails={props.trails} signatures={props.signatures} />;
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
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

  const trails = [
    {
      title: "Trilhas",
      items: [
        {
          title: "Front-end",
          icon: "frontendIcon",
          text: "O Front-end é a primeira interação entre o usuário e a aplicação, é a camada visual, onde o usuario pode interagir. Nessa trilha você aprenderá a usar tecnologias como: HTML5, CSS3, JavaScript, Typescript, React, Next, Styled-components, Animations, Hooks, Plataformas usadas durante o desenvolvimento profissional e muito mais.",
          link: "/aulas/frontend",
        },
        {
          title: "Back-end",
          icon: "backendIcon",
          text: "O Back-end é o servidor da aplicação, a camada responsavel por gerenciar as regras de negocio e trasnferencia de dados entre os usuarios e a empresa",
          link: "/aulas/backend",
        },

        {
          title: "Dados",
          icon: "databaseIcon",
          text: "O banco de dados é responsavel por armazenar as informações dos usuários",
          link: "/aulas/dados",
        },
        {
          title: "Design",
          icon: "designIcon",
          text: "Parte essencial do desenvolvimento de uma aplicação, o design além de facilitar a navegação do usuário também o mantém na aplicação",
          link: "/aulas/design",
        },
      ],
    },
  ];

  // api
  //   .get("/login", { headers: { origin: "http://localhost:3000" } })
  //   .then((result) => {
  //     console.log(result);
  //   });

  // if (!signatures) {
  //   return { redirect: { destination: "/notfound", permanent: false } };
  // }

  return {
    props: {
      signatures,
      trails,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
