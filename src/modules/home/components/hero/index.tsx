import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="h-[100vh] w-full relative">
      <div className="text-white absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:text-left small:justify-end small:items-start small:p-32">
        <div className="bg-black bg-opacity-40 backdrop-blur-sm px-6 py-6">
          <h1 className="text-2xl-semi mb-4 drop-shadow-md shadow-black">
            Winter styles are finally here
          </h1>
          <p className="text-base-regular max-w-[32rem] mb-6">
            This year, our new winter collection will shelter you from the harsh
            elements of a world that doesn&apos;t care if you live or die.
          </p>
          <UnderlineLink href="/collections/winter">
            Explore products
          </UnderlineLink>
        </div>
      </div>
      <Image
        src="/hero-3.webp"
        layout="fill"
        loading="eager"
        priority={true}
        quality={90}
        objectFit="cover"
        alt="Ladies with bags"
        className="absolute inset-0"
        draggable="false"
      />
    </div>
  )
}

export default Hero
