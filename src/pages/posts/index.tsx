import Head from "next/head";
import { GetStaticProps } from "next";

import Prismic from "@prismicio/client";
import { getPrismicClient } from "../../services/prismic";

import styles from "./styles.module.scss";

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ig.news</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>12 de março de 2022</time>
            <strong>
              Obtendo o status de progresso do envio de dados com Axios
            </strong>
            <p>
              Vamos mostrar na prática como obter o progresso de cada
              requisição HTTP sendo feita através do método POST, do front end
              para o back end utilizando o Axios.
            </p>
          </a>
          <a href="#">
            <time>12 de março de 2022</time>
            <strong>
              Obtendo o status de progresso do envio de dados com Axios
            </strong>
            <p>
              Vamos mostrar na prática como obter o progresso de cada
              requisição HTTP sendo feita através do método POST, do front end
              para o back end utilizando o Axios.
            </p>
          </a>
          <a href="#">
            <time>12 de março de 2022</time>
            <strong>
              Obtendo o status de progresso do envio de dados com Axios
            </strong>
            <p>
              Vamos mostrar na prática como obter o progresso de cada
              requisição HTTP sendo feita através do método POST, do front end
              para o back end utilizando o Axios.
            </p>
          </a>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const client = getPrismicClient();

  const documents = await client.getAllByType("post-type", {
    fetch: ["post-type.title, post-type.description"],
    pageSize: 100,
  });

  console.log(JSON.stringify(documents, null, 2));

  return {
    props: {},
  };
};
