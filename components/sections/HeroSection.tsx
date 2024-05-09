import Image from "next/image";

interface HeroSectionProps {
  imgSrc: string;
  content: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  imgSrc,
  content,
}) => {
  return (
    <div className="relative h-96  text-white">
      <Image
        src={imgSrc}
        className="w-full object-cover"
        alt="Hero background image"
        fill
      />
      <div className="absolute top-0 left-0 w-full h-96 bg-opacity-30">
        <div className="absolute top-1/3 w-full text-center">
          <h1 className="text-6xl font-bold">{content}</h1>
        </div>
      </div>
    </div>
  );
};
