import React from "react"

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
      className="bg-primary text-foreground-light px-4 py-2 rounded-md flex flex-1 justify-center items-center h-full text-center md:text-lg"
    >
      {text}
    </a>
  )
}
