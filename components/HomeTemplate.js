import Header from "components/Header";

const HomeTemplate = () => {
  return (
    <section id="home" className="bg-hero bg-center bg-cover bg-no-repeat">
      <Header />
      <div className="min-h-screen flex-center">
        <div>
          <h1 className="homeTitle">Lorem, ipsum dolor.</h1> <br />
          <h2 className="homeTitle">Lorem, ipsum.</h2> <br />
          <h2 className="homeTitle">Lorem ipsum dolor sit.</h2> <br />
          <h2 className="homeTitle">Lorem, ipsum.</h2>
        </div>
      </div>
    </section>
  );
};

export default HomeTemplate;
