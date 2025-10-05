import Image from "next/image"
import Title from "../ui/title"

export default function DeveloperSection() {
  return (
    <section id="developer" className="py-10 scroll-mt-16">
      <Title text="A Note from the Developer" />

      <div className="flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-10 py-5">
        <Image
          src="/assets/justemateicon.svg"
          alt="JustMate, developer of Thinkdo"
          width={100}
          height={100}
        />

        <div className="p-5 max-w-3xl ">
          <p className="text-foreground-dark lg:text-lg">
            &quot;I built Thinkdo as a personal challenge to sharpen my
            development skills. Along the way, I discovered the value of a
            note-taking tool that was genuinely simple and quick.
          </p>
          <p className="text-foreground-dark lg:text-lg">
            Now, my mission is to enhance the app continuously, while always
            staying true to the core principles of simplicity and utility it was
            founded on.&quot; - <strong>JustMate</strong>
          </p>
        </div>
      </div>
    </section>
  )
}
