import Image from "next/image";
import { useState } from "react";

const ModalImg = () => {
  const [count, setCount] = useState(2);

  const handleNext = () => {
    if (count === 3) {
      setCount(1);
    } else {
      setCount(count + 1);
    }
  };
  const handlePrev = () => {
    if (count === 1) {
      setCount(3);
    } else {
      setCount(count - 1);
    }
  };
  return (
    <div
      className={`w-full md:w-2/3 h-1/2 sm:h-full ${`bg-project${count}`} bg-cover bg-center bg-no-repeat`}
    >
      <div className="h-full flex justify-between items-center">
        <button onClick={handlePrev} className="btn bg-white animate-pulse">
          <Image
            src="/icons/left-arrow.svg"
            alt="Arrow"
            height={25}
            width={25}
          />
        </button>
        <button onClick={handleNext} className="btn bg-white animate-pulse">
          <Image src="/icons/next.svg" alt="Arrow" height={25} width={25} />
        </button>
      </div>
    </div>
  );
};

export default ModalImg;
