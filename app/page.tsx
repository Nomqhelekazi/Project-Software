import Header from "@/components/header"
import Hero from "@/components/hero"
import Mission from "@/components/mission"
import Goals from "@/components/goals"
import Help from "@/components/help"
import ExpansionAlt from "@/components/expansion-alt"
import ImpactStats from "@/components/impact-stats"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#eaf4fc] to-white">
      <Header />
      <Hero />
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <ImpactStats />
        <Mission />
        <Goals />
        <Help />
        <ExpansionAlt />
      </div>
      <Footer />
    </main>
  )
}

