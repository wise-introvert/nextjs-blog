import * as React from "react";
import Head from "next/head";
import { GetStaticPropsResult } from "next";
import spacetime from "spacetime";
import { isEmpty } from "lodash";

interface Article {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  parts: number[];
  score: number;
  text: string;
  time: number;
  title: string;
  type: string;
  url: string;
}
interface HomeProps {
  articles: Article[];
}
const Home: React.FC<HomeProps> = (
  props: HomeProps
): React.ReactElement<HomeProps> => {
  const [flag, setFlag] = React.useState<boolean>(true);

  React.useEffect(() => {
    document.addEventListener("scroll", (ev: Event) => {
      if (window.scrollY >= 28) {
        setFlag(false);
      } else if (window.scrollY === 0) {
        setFlag(true);
      }
    });
  }, []);

  return (
    <>
      <Head>
        <title>Home</title>
        <link rel={"icon"} href={"/favicon.ico"} />
      </Head>
      <header className={"fixed top-0 right-0 left-0 "}>
        <div
          className={`relative m-1 mt-3 h-8 md:h-14 grid md:w-4/5 md:mx-auto`}
        >
          <span
            className={`absolute ${
              flag ? "right-0 left-0 mx-auto my-auto" : "left-3"
            } font-logo font-bold text-xl md:text-3xl rounded-full border-2 border-black h-8 w-8 md:h-14 md:w-14 grid place-items-center`}
          >
            W
          </span>
        </div>
      </header>
      <main>
        <span
          className={
            "h-screen bg-white grid grid-cols-1 p-6 divide-y-2 divide-gray-100 place-items-center mt-12 md:mt-24"
          }
        >
          {props.articles.map(
            (article: Article, i: number) =>
              !isEmpty(article) && (
                <span
                  onClick={() => {
                    window.open(article.url, "_blank");
                  }}
                  key={article.id}
                  className={`w-full ${
                    i === 0 ? "pb-12" : "py-12"
                  } grid md:w-3/5 md:h-auto cursor-pointer`}
                >
                  <span
                    className={
                      "font-sans text-gray-600 text-center text-xs hover:underline mb-4 md:mb-7"
                    }
                  >
                    <span className={"font-mono uppercase"}>
                      {spacetime(article.time).format("nice")}
                    </span>
                  </span>
                  <span
                    className={
                      "font-serif font-extralight text-black text-center text-2xl h-full w-full md:text-3xl hover:underline "
                    }
                  >
                    {article.title}
                  </span>
                </span>
              )
          )}
        </span>
      </main>
    </>
  );
};

export const getStaticProps = async (): Promise<
  GetStaticPropsResult<HomeProps>
> => {
  const idResponse: Response = await fetch(
    "https://hacker-news.firebaseio.com/v0/topstories.json"
  );
  const ids: number[] = await idResponse.json();

  const getArticleFromId = async (id: number): Promise<Article> => {
    const articleResponse: Response = await fetch(
      `https://hacker-news.firebaseio.com/v0/item/${id}.json`
    );
    const article: Article = await articleResponse.json();
    return article;
  };

  let promises: Promise<Article>[] = [];
  ids.forEach((id: number) => promises.push(getArticleFromId(id)));

  const articles: Article[] = await Promise.all(promises);
  return { props: { articles } };
};

export default Home;
