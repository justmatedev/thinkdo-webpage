import React from "react"

interface TitleProps {
  text: string
}

export default function Title({ text }: TitleProps) {
  return (
    <h1 className="text-foreground-dark font-bold text-center text-3xl md:text-4xl lg:text-5xl py-5 tracking-tight">
      {text}
    </h1>
  )
}
