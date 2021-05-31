import Image from "next/image";

const SocialMediaBar = () => {
  return (
    <ul className="flex justify-between w-full">
      <li className="socialMediaBarLi">
        <Image src="/icons/facebook.svg" width={30} height={30} />
      </li>
      <li className="socialMediaBarLi">
        <Image src="/icons/google-plus.svg" width={30} height={30} />
      </li>
      <li className="socialMediaBarLi">
        <Image src="/icons/instagram.svg" width={30} height={30} />
      </li>
      <li className="socialMediaBarLi">
        <Image src="/icons/linkedin-logo.svg" width={30} height={30} />
      </li>
    </ul>
  );
};

export default SocialMediaBar;
