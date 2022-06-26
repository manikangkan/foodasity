import Head from "next/head";
import Hero from "../components/hero";
import Offer from "../components/offer";

const Home = () => {
  return (
    <div>
      <Head>
        <title>foodasity</title>
        <meta
          name="description"
          content="Best food delivery webapp in the universe"
        />
        <link
          rel="icon"
          href="/favicon.icohttps://media-exp1.licdn.com/dms/image/C4E03AQG0VbBdTFMVfA/profile-displayphoto-shrink_400_400/0/1624563649042?e=1661990400&v=beta&t=NLaIfUer5etnu5O2PCimduBJLPbVp7TOIjlHJlkJWh0"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,regular,500,600,700,800,300italic,italic,500italic,600italic,700italic,800italic"
          rel="stylesheet"
        />
        <link
          href="https://static.canva.com/web/static_font_4.ltr.css"
          rel="stylesheet"
        />
      </Head>
      <Hero/>
      <Offer/>
    </div>
  );
};

export default Home;
