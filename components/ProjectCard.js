import Modal from "components/Modal";
import { useState } from "react";

const ProjectCard = ({
  title = "Project Name",
  desc = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, dolore.",
  bg = "bg-project3",
}) => {
  const [activeModal, setActiveModal] = useState(false);
  return (
    <>
      {activeModal ? (
        <Modal closeModal={() => setActiveModal(false)} />
      ) : (
        <div
          className={`w-full min-h-screen flex flex-col justify-end bg-cover bg-center bg-no-repeat ${bg}`}
        >
          <div className="p-4 sm:p-0 bg-white">
            <h3 className="p-2 font-poppins text-darkBlue font-black text-xl text-center">
              {title}
            </h3>
            <p className="p-2 font-nunito text-darkBlue font-bold text-lg">
              {desc}
            </p>
            <button
              onClick={() => setActiveModal(true)}
              className="btn bg-rose text-white"
            >
              Ver más
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
