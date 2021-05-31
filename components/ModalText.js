import Image from "next/image";

const ModalText = ({
  title = "Project name",
  text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, remsaepe fugiat qui neque suscipit obcaecati modi aspernatur nisi velit delectus quia nostrum culpa reprehenderit. Consectetur enim ex cupiditate doloremque!.",
  closeModal,
}) => {
  return (
    <div className="w-full md:w-1/3 h-1/2 sm:h-full">
      <div className="flex justify-end m-4">
        <button className="btn" onClick={closeModal}>
          <Image
            src="/icons/close.svg"
            alt="Close modal icon"
            width={15}
            height={15}
          />
        </button>
      </div>
      <div className="flex flex-col">
        <h1 className="p-2 font-poppins text-md lg:text-xl font-bold text-darkBlue text-center">
          {title}
        </h1>
        <p className="p-2 font-nunito text-sm lg:text-lg text-darkBlue">
          {text}
        </p>
      </div>
    </div>
  );
};

export default ModalText;
