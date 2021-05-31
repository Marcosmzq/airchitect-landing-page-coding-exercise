import Image from "next/image";

const TeamMember = ({
  personName = "Person name",
  role = "Architect",
  desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quae repellat magni officiis deleniti sit.",
}) => {
  return (
    <div className="flex-center flex-col">
      <Image
        src="/icons/user.svg"
        alt="Team member photo"
        width={75}
        height={100}
      />
      <h3 className="text-rose font-poppins text-xl font-extrabold">
        {personName}
      </h3>
      <h5 className="text-rose font-nunito text-lg font-bold">{role}</h5>
      <p className="text-center font-nunito font-light">{desc}</p>
    </div>
  );
};

export default TeamMember;
