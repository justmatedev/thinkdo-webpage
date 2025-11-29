import ThemeImage from "../ui/themeImage"
import Title from "../ui/title"

const IMAGE_WIDTH = 1817 / 10
const IMAGE_HEIGHT = 964 / 10

export default function Gallery() {
  return (
    <section id="gallery" className="py-10 scroll-mt-16">
      <div className="container mx-auto text-center">
        <Title text="Simplicity, Visualized" />

        <p className="text-foreground-dark lg:text-lg py-5">
          Explore the screenshots and see how a clean, distraction-free
          interface can boost your productivity.
        </p>

        <div className="py-5 grid grid-cols-2 lg:grid-cols-4 lg:px-40 gap-5 justify-items-center">

          <ThemeImage
            lightSrc="/assets/prints/1light.svg"
            darkSrc="/assets/prints/1dark.svg"
            alt="Capture thoughts in a second"
            width={IMAGE_WIDTH}
            height={IMAGE_HEIGHT}
            className="rounded-md "
          />
          <ThemeImage
            lightSrc="/assets/prints/2light.svg"
            darkSrc="/assets/prints/2dark.svg"
            alt="Create and manage easily"
            width={IMAGE_WIDTH}
            height={IMAGE_HEIGHT}
            className="rounded-md"
          />
          <ThemeImage
            lightSrc="/assets/prints/3light.svg"
            darkSrc="/assets/prints/3dark.svg"
            alt="Customize to fit your needs an style"
            width={IMAGE_WIDTH}
            height={IMAGE_HEIGHT}
            className="rounded-md"
          />
          <ThemeImage
            lightSrc="/assets/prints/4light.svg"
            darkSrc="/assets/prints/4dark.svg"
            alt="Organize your chaos"
            width={IMAGE_WIDTH}
            height={IMAGE_HEIGHT}
            className="rounded-md"
          />
        </div>


      </div>
    </section>
  )
}
