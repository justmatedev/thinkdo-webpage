import ThemeImage from "../ui/themeImage"
import CTAButton from "../ui/CTAButton"
import Title from "../ui/title"

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="py-10 flex flex-col items-center scroll-mt-16"
    >
      <Title text="Bring your ideas to life. Where simplicity meets productivity" />

      <div className="max-w-4xl flex flex-col xl:flex-row items-center justify-center py-5 gap-2 md:gap-10 ">
        <p className="text-foreground-dark/80 text-lg md:text-xl lg:w-2/3 mb-5 leading-relaxed">
          A minimalist app for notes and brainstorming, crafted for creative
          minds, students, and professionals who value efficiency.
        </p>

        <ThemeImage
          lightSrc="/assets/hero/3pagesLight.svg"
          darkSrc="/assets/hero/3pagesDark.svg"
          alt="Pages of the Thinkdo app"
          width={1481 / 3}
          height={1277 / 3}
        />
      </div>

      <div className="my-5 md:w-96 mx-auto">
        <CTAButton text="Available on the Play Store" />
      </div>
    </section>
  )
}
