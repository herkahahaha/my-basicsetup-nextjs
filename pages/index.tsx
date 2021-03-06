import Head from "next/head";
import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import { CMS_NAME } from "../lib/constants";
import Post from "../types/post";

interface IndexProps {
  allPosts: Post[];
}

const Index: React.FC<IndexProps> = ({ allPosts }) => {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <Layout>
      <Head>
        <title>Next.js Blog Example with {CMS_NAME}</title>
      </Head>
      <Container>
        <Intro />
        {heroPost ? (
          <HeroPost
            author={heroPost.author}
            coverImage={heroPost.coverImage}
            date={heroPost.date}
            excerpt={heroPost.excerpt}
            slug={heroPost.slug}
            title={heroPost.title}
          />
        ) : null}
        {morePosts.length > 0 ? <MoreStories posts={morePosts} /> : null}
      </Container>
    </Layout>
  );
};

export default Index;

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};
