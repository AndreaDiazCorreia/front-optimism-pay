import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Wallet, Shield, Zap, Lock, Coins } from "lucide-react";
import Link from "next/link";

interface FeatureCardProps {
  icon: React.ElementType; // Tipo para componentes o iconos
  title: string; // Título debe ser string
  description: string; // Descripción debe ser string
}

function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <Card className="p-6 bg-zinc-900 border-zinc-800">
      <Icon className="w-12 h-12 text-[#ff0420] mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-zinc-400">{description}</p>
    </Card>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-6 text-center">
        <Wallet className="w-16 h-16 text-[#ff0420] mb-6 mx-auto" />
        <h1 className="text-5xl font-bold mb-4">
          Welcome to <span className="text-[#ff0420]">Optimism</span> Pay
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-8">
          Experience the future of cross-chain transactions with gasless
          transfers and enhanced privacy on the Optimism Superchain ecosystem.
        </p>
        <Link href="/demo">
          <Button
            size="lg"
            className="bg-[#ff0420] hover:bg-[#cc0319] text-lg px-8"
          >
            Try Demo <ArrowRight className="ml-2" />
          </Button>
        </Link>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-6 bg-black/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              icon={Coins}
              title="Gasless Experience"
              description="No need to hold native tokens for gas. Fees are deducted directly from the transferred token."
            />
            <FeatureCard
              icon={Zap}
              title="Cross-Chain Ready"
              description="Seamlessly transfer tokens across Optimism-compatible chains in the Superchain ecosystem."
            />
            <FeatureCard
              icon={Lock}
              title="Enhanced Privacy"
              description="Utilizing Fully Homomorphic Encryption (FHE) to protect sensitive transaction data."
            />
            <FeatureCard
              icon={Shield}
              title="Secure Architecture"
              description="Built on Optimism's L2StandardBridge with modular and scalable design."
            />
          </div>
        </div>
      </section>
    </div>
  );
}
