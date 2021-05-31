import AboutUs from "components/AboutUs";
import Contact from "components/Contact";
import HomeTemplate from "components/HomeTemplate";
import OurTeam from "components/OurTeam";
import Projects from "components/Projects";
import Head from "next/head";

const Home = () => {
  return (
    <div className="min-h-screen max-w-screen">
      <Head>
        <title>Airchitect - Home</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="AIRchitect company website" />
        <meta
          property="og:description"
          content="This is the website of AIRchitect, a compnay dedicated to architecture based in México."
        />
        <meta property="og:image" content="/images/project2.jpg" />
        <meta
          property="og:url"
          content="http://airchitect-example.vercel.app/"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:site_name" content="AIRchitect." />
      </Head>
      <HomeTemplate />
      <AboutUs />
      <Projects />
      <OurTeam />
      <Contact />
    </div>
  );
};

export default Home;
