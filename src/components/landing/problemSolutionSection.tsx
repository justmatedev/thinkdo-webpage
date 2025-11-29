import React from "react"
import { IoArrowForwardOutline } from "react-icons/io5"
import Title from "../ui/title"

interface ProblemSolutionProps {
  problem: string
  solution: string
  solutionTitle: string
}
const ProblemSolution = ({
  problem,
  solution,
  solutionTitle,
}: ProblemSolutionProps) => {
  return (
    <div className="py-5 max-w-3xl flex flex-row items-center gap-4">
      <p className="text-foreground-dark font-medium w-2/6 text-lg md:text-xl">
        {problem}
      </p>
      <IoArrowForwardOutline className="text-primary w-1/6 size-8" />
      <p className="text-foreground-dark/80 w-3/5 text-lg md:text-xl leading-relaxed">
        <strong className="text-foreground-dark font-semibold">
          {solutionTitle}
        </strong>
        : {solution}
      </p>
    </div>
  )
}

export default function ProblemSolutionSection() {
  return (
    <section
      id="solutions"
      className="py-10 flex flex-col items-center scroll-mt-16"
    >
      <Title text="Your best ideas deserve a dedicated space." />

      <ProblemSolution
        problem="Tired of overly complex note-taking apps?"
        solution="A clean, distraction-free interface so you can focus on what truly matters: your ideas."
        solutionTitle="Pure Focus"
      />

      <ProblemSolution
        problem="Losing brilliant ideas on napkins or random apps?"
        solution="Capture a thought in seconds before it slips away."
        solutionTitle="Effortless Speed"
      />

      <ProblemSolution
        problem="Cluttered with features you never use?"
        solution="We concentrate only on the crucial tools for capturing ideas, creating a lighter, more intuitive experience."
        solutionTitle="Essential by Design"
      />
    </section>
  )
}
