'use client';

import { useState } from 'react';
import Header from '@/components/header';
import Hero from '@/components/hero';
import CarShowcase from '@/components/car-showcase';
import Chatbot from '@/components/chatbot';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <CarShowcase />
      <Footer />
      <Chatbot />
    </main>
  );
}
