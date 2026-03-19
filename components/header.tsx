import React from 'react';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="text-2xl font-bold text-accent">VinFast</div>
          <span className="text-sm text-muted-foreground">ELECTRIC VEHICLES</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#vehicles" className="text-sm font-medium hover:text-accent transition-colors">Xe</a>
          <a href="#features" className="text-sm font-medium hover:text-accent transition-colors">Tính năng</a>
          <a href="#contact" className="text-sm font-medium hover:text-accent transition-colors">Liên hệ</a>
        </nav>

        <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
          Đặt cọc
        </Button>
      </div>
    </header>
  );
}
