import Image from "next/image"
import Title from "../ui/title"

export default function Gallery() {
  return (
    <section id="gallery" className="py-10 scroll-mt-16">
      <div className="container mx-auto text-center">
        <Title text="Simplicity, Visualized" />

        <p className="text-foreground-dark lg:text-lg py-5">
          Explore the screenshots and see how a clean, distraction-free
          interface can boost your productivity.
        </p>

        <div className="py-5 flex flex-row gap-5 lg:gap-10 justify-center">
          <Image
            src="/assets/prints/1light.svg"
            alt="Capture thoughts in a second"
            width={1817 / 10}
            height={964 / 10}
            className="rounded-md dark:hidden"
          />
          <Image
            src="/assets/prints/1dark.svg"
            alt="Capture thoughts in a second"
            width={1817 / 10}
            height={964 / 10}
            className="rounded-md hidden dark:block"
          />
          <Image
            src="/assets/prints/2light.svg"
            alt="Create and manage easily"
            width={1817 / 10}
            height={964 / 10}
            className="rounded-md dark:hidden"
          />
          <Image
            src="/assets/prints/2dark.svg"
            alt="Create and manage easily"
            width={1817 / 10}
            height={964 / 10}
            className="rounded-md hidden dark:block"
          />
        </div>
        <div className="py-5 flex flex-row gap-5 lg:gap-10 justify-center">
          <Image
            src="/assets/prints/3light.svg"
            alt="Customize to fit your needs an style"
            width={1817 / 10}
            height={964 / 10}
            className="rounded-md dark:hidden"
          />
          <Image
            src="/assets/prints/3dark.svg"
            alt="Customize to fit your needs an style"
            width={1817 / 10}
            height={964 / 10}
            className="rounded-md hidden dark:block"
          />
          <Image
            src="/assets/prints/4light.svg"
            alt="Organize your chaos"
            width={1817 / 10}
            height={964 / 10}
            className="rounded-md dark:hidden"
          />
          <Image
            src="/assets/prints/4dark.svg"
            alt="Organize your chaos"
            width={1817 / 10}
            height={964 / 10}
            className="rounded-md hidden dark:block"
          />
        </div>
      </div>
    </section>
  )
}
