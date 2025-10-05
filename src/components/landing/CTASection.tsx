import React from "react"
import Title from "../ui/title"
import CTAButton from "../ui/CTAButton"

export default function CTASection() {
  return (
    <section className="py-10">
      <Title text="Ready to get your ideas organized?" />

      <div className="my-5 md:w-96 mx-auto">
        <CTAButton text="Available on the Google Play Store" />
      </div>
    </section>
  )
}
