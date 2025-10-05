import Link from "next/link"
import Image from "next/image"
import CTAButton from "../ui/CTAButton"

export default function Header() {
  return (
    <header className="sticky top-0 bg-background py-2 z-20">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <Link href="#hero">
          <Image
            src="/assets/logo.svg"
            alt="Thinkdo Logo"
            width={80}
            height={80}
            className="h-auto w-24 md:w-28"
          />
        </Link>

        <ul className="hidden md:flex items-center space-x-6">
          <li>
            <Link
              href="#solutions"
              className="text-foreground-dark md:text-base lg:text-lg hover:text-primary transition-colors"
            >
              Solutions
            </Link>
          </li>
          <li>
            <Link
              href="#features"
              className="text-foreground-dark md:text-base lg:text-lg hover:text-primary transition-colors"
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              href="#gallery"
              className="text-foreground-dark md:text-base lg:text-lg hover:text-primary transition-colors"
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              href="#developer"
              className="text-foreground-dark md:text-base lg:text-lg hover:text-primary transition-colors"
            >
              Developer
            </Link>
          </li>
        </ul>

        <div>
          <CTAButton text="Get the App" />
        </div>
      </nav>
    </header>
  )
}
