import Header from "./Header";

const AboutUs = ({
  exampleShort = "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  exampleLong = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus veritatis adipisci ad quia ducimus hic error harum quibusdam excepturi, iure blanditiis assumenda, eveniet possimus voluptatem sequi? Aliquid mollitia quam quisquam.",
}) => {
  return (
    <section id="about-us" className="bg-darkBlue">
      <Header sectionName="about us" />
      <div className="min-h-screen flex-center">
        <div className="sm:w-3/4">
          <div className="flex-center flex-col">
            <span className="lineRose" />
            <div className="mx-2 sm:w-3/4">
              <p className="text-rose text-center text-xl font-light font-poppins">
                {exampleShort}{" "}
                <span className="font-bold text-2xl">{exampleShort}</span>{" "}
                {exampleShort}
              </p>
            </div>
            <span className="lineRose" />
          </div>
          <div className="mb-8 flex-center flex-col sm:flex-row">
            <p className="aboutUsParagraph">{exampleLong}</p>
            <p className="aboutUsParagraph">{exampleLong}</p>
            <p className="aboutUsParagraph">{exampleLong}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
