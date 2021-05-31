import Header from "components/Header";
import TeamMember from "./TeamMember";

const OurTeam = () => {
  return (
    <section id="our-team" className="min-h-screen">
      <Header sectionName="our team" />
      <div className="my-16 flex-center">
        <div className="flex flex-col lg:flex-row w-4/5 justify-between">
          <TeamMember role="CEO" />
          <TeamMember role="Team leader" />
          <TeamMember role="Administration" />
          <TeamMember />
          <TeamMember />
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
