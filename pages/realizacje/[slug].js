import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import MetaTags from "react-meta-tags";
import conf from "../../lib/utils";
import { getPortfolioBySlug, getPortfolioSlugs } from "../../lib/api";
import ReactMarkdown from 'react-markdown'


export default function Projekt(props, context) {
  const router = useRouter();

  if (router.isFallback) {
    return <div> loading data ......</div>;
  }

  let content;
  const pageContent = props.page.content;
  if(pageContent==null){
      content = <p className="text-black">...</p>
  }   else {
      content = props.page.content.toString();
  }

  return (
    <>
      <MetaTags>
        <title key={"title"}>
          {conf.PageTitle} // {"adsa"}
        </title>
      </MetaTags>

      <p className="text-black">{props.slug}</p>

      {content}

      <ReactMarkdown className="text-black">{content}</ReactMarkdown>

     



    </>
  );
}

export const getStaticProps = async (context) => {
  const slug = context.params.slug || [];

  const pagea = await getPortfolioBySlug(slug);
  const page = pagea[0];

  if(page.content){ page.content = page.content.replace('/uploads/', `${conf.api_url}/uploads/`);
}

  return {
    props: { slug, page },
  };
};
export const getStaticPaths = async (context) => {
  const slugs = await getPortfolioSlugs();
  const slugsList = slugs.map((el) => {
    return { params: { slug: el.slug.toString() } };
  });
  return {
    paths: slugsList,
    fallback: "blocking",
  };
};