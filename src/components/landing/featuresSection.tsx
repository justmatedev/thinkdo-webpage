import { IconType } from "react-icons"
import Title from "../ui/title"
import { IoAddCircleOutline } from "react-icons/io5"
import { IoLeafOutline } from "react-icons/io5"
import { IoPricetagsOutline } from "react-icons/io5"
import { IoMoonOutline } from "react-icons/io5"

interface FeatureProps {
  title: string
  description: string
  Icon: IconType
}
const Feature = ({ title, description, Icon }: FeatureProps) => {
  return (
    <div className="w-1/2 max-w-lg py-5 flex flex-col items-center gap-3">
      <h2 className="text-center text-foreground-dark font-semibold text-lg md:text-xl lg:text-2xl">
        {title}
      </h2>
      <p className="text-foreground-dark lg:text-lg">{description}</p>
      <Icon className="text-primary w-1/6 size-10" />
    </div>
  )
}

export default function FeaturesSection() {
  return (
    <section id="features" className="py-10 scroll-mt-16">
      <Title text="Features thoughtfully designed for you" />

      <div className="flex flex-row justify-center gap-10 py-5">
        <Feature
          title="Quick Capture"
          description="Instantly save any insight. Opening the app and typing is a seamless, one-second process."
          Icon={IoAddCircleOutline}
        />
        <Feature
          title="Clean Interface "
          description="A clean space made for pure thought. Navigate intuitively without ever losing your focus."
          Icon={IoLeafOutline}
        />
      </div>
      <div className="flex flex-row justify-center gap-10 py-5">
        <Feature
          title="Find Anything"
          description="Never lose a good idea again. Organize with tags and colors for instant access."
          Icon={IoPricetagsOutline}
        />
        <Feature
          title="Dark Mode"
          description="Easy on your eyes in any light, perfect for those late-night creative bursts."
          Icon={IoMoonOutline}
        />
      </div>
    </section>
  )
}
