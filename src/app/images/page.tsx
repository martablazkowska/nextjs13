import Image from "next/image";
import Img1 from "./img1.jpg";

const Images = () => {
  return (
    <div>
      <div>
        <Image src={Img1} alt={"Img 1"} />
      </div>
      <div>Text Text Text Text Text</div>
      <div>
        <Image
          src={"/assets/images/img1.jpg"}
          alt={"Img 1"}
          width={500}
          height={500}
        />
      </div>
      <div>Text Text Text Text Text</div>
    </div>
  );
};

export default Images;
