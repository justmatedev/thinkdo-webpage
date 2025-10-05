import CTASection from "@/components/landing/CTASection"
import DeveloperSection from "@/components/landing/developerSection"
import FeaturesSection from "@/components/landing/featuresSection"
import Footer from "@/components/landing/footer"
import Gallery from "@/components/landing/gallery"
import Header from "@/components/landing/header"
import HeroSection from "@/components/landing/heroSection"
import ProblemSoluctionSection from "@/components/landing/problemSoluctionSection"

export default function Home() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4">
        <HeroSection />
        <ProblemSoluctionSection />
        <FeaturesSection />
        <Gallery />
        <DeveloperSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
