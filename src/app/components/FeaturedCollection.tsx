import Image from "next/image";

const FeaturedCollection = ({ imageUrl }: any) => {
  return (
    <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96">
      <Image
        src={imageUrl}
        alt="Image"
        layout="fill"
        objectFit="cover"
        className="rounded-xl"
      />
    </div>
  );
};

export default FeaturedCollection;
