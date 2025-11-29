import React from "react"
import { IoLogoGooglePlaystore } from "react-icons/io5";

interface CTAButtonProps {
  text: string
}
export default function CTAButton({ text }: CTAButtonProps) {
  const url =
    "https://play.google.com/store/apps/details?id=com.justmate.thinkdo"

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center bg-primary text-foreground-light px-6 py-3 rounded-lg transition-opacity duration-200 hover:opacity-90 font-medium text-base"
    >
      <IoLogoGooglePlaystore className="size-5 mr-2" /> {text}
    </a>
  )
}
