import Image from "next/image";

const ContactInfoList = () => {
  return (
    <ul>
      <li className="flex">
        <Image src="/icons/email.svg" width={20} height={20} />
        <p className="contact_p_li">Lorem ipsum dolor sit.</p>
      </li>
      <li className="flex">
        <Image src="/icons/phone-call.svg" width={20} height={20} />
        <p className="contact_p_li">Lorem ipsum dolor sit.</p>
      </li>
      <li className="flex">
        <Image src="/icons/home.svg" width={20} height={20} />
        <p className="contact_p_li">Lorem ipsum dolor sit.</p>
      </li>
    </ul>
  );
};

export default ContactInfoList;
