import Link from "next/link";
import Image from "next/image";
import WhatsappIcon from "@/assets/whatsapp-icon.png";

export default function WhatsappButton() {
  return (
    <Link
      href={" https://api.whatsapp.com/send?phone=5511977779273"}
      className="fixed z-[1000] right-5 bottom-5"
    >
      <Image src={WhatsappIcon} alt="icon whatsapp" className="h-auto w-10" />
    </Link>
  );
}
