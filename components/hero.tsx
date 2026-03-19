import React from 'react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="relative w-full py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight">
              Xe điện VinFast
              <span className="text-accent block">Tương lai của giao thông</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Khám phá dòng xe điện hiện đại của VinFast với công nghệ tiên tiến, thiết kế sang trọng và hiệu suất tuyệt vời.
            </p>

            <div className="flex gap-4 flex-wrap">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                Xem mẫu xe
              </Button>
              <Button size="lg" variant="outline" className="border-border hover:bg-muted">
                Tư vấn miễn phí
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
              <div>
                <p className="text-2xl font-bold text-accent">50+</p>
                <p className="text-sm text-muted-foreground">Mẫu xe</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-accent">626km</p>
                <p className="text-sm text-muted-foreground">Quãng đường tối đa</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-accent">100%</p>
                <p className="text-sm text-muted-foreground">Điện thọc</p>
              </div>
            </div>
          </div>

          <div className="relative h-96 lg:h-full flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10 rounded-3xl blur-3xl"></div>
            <div className="relative z-10 text-center">
              <div className="text-9xl font-bold text-accent/20 select-none">⚡</div>
              <p className="text-xl font-semibold text-foreground mt-4">Năng lượng sạch, Hiệu suất cao</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
