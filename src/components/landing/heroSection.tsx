import Image from "next/image"
import CTAButton from "../ui/CTAButton"
import Title from "../ui/title"

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="py-10 flex flex-col items-center scroll-mt-28"
    >
      <Title text="Bring your ideas to life. Where simplicity meets productivity" />

      <div className="max-w-4xl flex flex-col xl:flex-row items-center justify-center py-5 gap-2 md:gap-10 ">
        <p className="text-foreground-dark lg:text-lg lg:w-2/3 mb-5">
          A minimalist app for notes and brainstorming, crafted for creative
          minds, students, and professionals who value efficiency.
        </p>

        <Image
          src="/assets/hero/3pagesLight.svg"
          alt="Pages of the Thinkdo app"
          width={1481 / 3}
          height={1277 / 3}
          className="dark:hidden"
        />
        <Image
          src="/assets/hero/3pagesDark.svg"
          alt="Pages of the Thinkdo app"
          width={1481 / 3}
          height={1277 / 3}
          className="hidden dark:block"
        />
      </div>

      <div className="my-5 md:w-96 mx-auto">
        <CTAButton text="Available on the Google Play Store" />
      </div>
    </section>
  )
}
