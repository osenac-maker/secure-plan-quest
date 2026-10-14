import type { ReactNode } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BilanButton from "@/components/BilanButton";
import { motion } from "framer-motion";

interface ProductIntroProps {
  eyebrow: string;
  title: ReactNode;
  children: string;
}

const ProductIntro = ({ eyebrow, title, children }: ProductIntroProps) => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="bg-hero pt-32 pb-12 md:pb-16 border-b border-border">
      <div className="container mx-auto px-4 max-w-3xl">
        <p className="text-copper font-semibold text-xs uppercase mb-3">{eyebrow}</p>
        <motion.h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>{title}</motion.h1>
        <div className="divider-gold mb-6" />
        <p className="text-muted-foreground text-base md:text-lg max-w-2xl mb-6 leading-relaxed">{children}</p>
        <BilanButton />
      </div>
    </main>
    <Footer />
  </div>
);

export default ProductIntro;