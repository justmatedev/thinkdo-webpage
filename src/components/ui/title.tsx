import React from "react"

interface TitleProps {
  text: string
}

export default function Title({ text }: TitleProps) {
  return (
    <h1 className="text-foreground-dark font-semibold text-center text-xl md:text-2xl lg:text-4xl py-5">
      {text}
    </h1>
  )
}
