'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const cars = [
  {
    id: 1,
    name: 'VF 8 (E-SUV)',
    category: 'E-SUV',
    image: '/vf8.jpg',
    price: '1,499,000,000 VNĐ',
    priceFrom: '1.5 tỷ',
    seats: '6-7 chỗ',
    range: '626 km',
    description: 'SUV cỡ lớn với công nghệ pin mới nhất, được bố trí 6-7 chỗ ngồi thoải mái.',
    colors: ['#1a1a1a', '#ffffff', '#0066cc', '#ff0000'],
    colorNames: ['Đen bóng', 'Trắng', 'Xanh lam', 'Đỏ'],
    features: ['Sạc nhanh DC', 'Camera 360°', 'AI Assistant', 'Tự động lái'],
  },
  {
    id: 2,
    name: 'VF 7 (C-SUV)',
    category: 'C-SUV',
    image: '/vf7.jpg',
    price: '789,000,000 VNĐ',
    priceFrom: '789 triệu',
    seats: '5 chỗ',
    range: '496 km',
    description: 'Mẫu SUV vừa phải kết hợp thiết kế hiện đại và tính năng an toàn đẳng cấp.',
    colors: ['#2c2c2c', '#e8e8e8', '#0066cc', '#ff6600'],
    colorNames: ['Xám đen', 'Bạc', 'Xanh', 'Cam'],
    features: ['Sạc nhanh', 'ADAS', 'Màn hình AMOLED', 'Âm thanh Harman'],
  },
  {
    id: 3,
    name: 'VF 6 (B-SUV)',
    category: 'B-SUV',
    image: '/vf6.jpg',
    price: '689,000,000 VNĐ',
    priceFrom: '689 triệu',
    seats: '5 chỗ',
    range: '480 km',
    description: 'SUV nhỏ gọn, tiết kiệm năng lượng, phù hợp cho gia đình trẻ.',
    colors: ['#1a1a1a', '#f0f0f0', '#004aad', '#ffb400'],
    colorNames: ['Đen', 'Trắng', 'Xanh dương', 'Vàng kim'],
    features: ['Bluetooth 5.0', 'Hệ thống định vị', 'Cửa mở tự động', 'Ghế sưởi'],
  },
  {
    id: 4,
    name: 'VF 5 (A-SUV)',
    category: 'A-SUV',
    image: '/vf5.jpg',
    price: '529,000,000 VNĐ',
    priceFrom: '529 triệu',
    seats: '5 chỗ',
    range: '326 km',
    description: 'Mẫu SUV hạng A với giá cả hợp lý, lý tưởng cho người mới.',
    colors: ['#333333', '#fafafa', '#003da5', '#ff8800'],
    colorNames: ['Đen nước', 'Trắng sữa', 'Xanh navy', 'Cam sáng'],
    features: ['Sạc AC', 'Hệ thống giải trí', 'Khoá thông minh', 'Hỗ trợ lái'],
  },
  {
    id: 5,
    name: 'Fadil (MiniCar)',
    category: 'MiniCar',
    image: '/fadil.jpg',
    price: '302,000,000 VNĐ',
    priceFrom: '302 triệu',
    seats: '4 chỗ',
    range: '210 km',
    description: 'Xe điện mini với kích thước gọn, tiết kiệm điện, hoàn hảo cho đô thị.',
    colors: ['#2a2a2a', '#ffffff', '#0055cc', '#ff5500'],
    colorNames: ['Xám', 'Trắng', 'Xanh', 'Cam'],
    features: ['Bước sạc 30 phút', 'Ghế gập', 'Khoá từ xa', 'Màn hình 7 inch'],
  },
  {
    id: 6,
    name: 'Feliz Plus (MPV)',
    category: 'MPV',
    image: '/feliz.jpg',
    price: '819,000,000 VNĐ',
    priceFrom: '819 triệu',
    seats: '7 chỗ',
    range: '450 km',
    description: 'MPV 7 chỗ tiện nghi, thiết kế tối ưu không gian nội thất, lý tưởng cho gia đình lớn.',
    colors: ['#1f1f1f', '#e5e5e5', '#003c99', '#ff7700'],
    colorNames: ['Đen sâu', 'Ghi sáng', 'Xanh', 'Cam'],
    features: ['Sạc nhanh', 'Hệ thống làm mát', 'Cửa trượt', 'Ghế da cao cấp'],
  },
];

export default function CarShowcase() {
  const [selectedCar, setSelectedCar] = useState<typeof cars[0]>(cars[0]);
  const [selectedColor, setSelectedColor] = useState(0);

  return (
    <section id="vehicles" className="w-full py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col gap-2 mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Dòng xe VinFast</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Khám phá bộ sưu tập xe điện đa dạng, từ SUV hạng sang đến mẫu xe gọn nhẹ tiết kiệm.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-4 lg:grid-cols-7 mb-8 bg-background border border-border">
            <TabsTrigger value="all">Tất cả</TabsTrigger>
            <TabsTrigger value="E-SUV">E-SUV</TabsTrigger>
            <TabsTrigger value="C-SUV">C-SUV</TabsTrigger>
            <TabsTrigger value="B-SUV">B-SUV</TabsTrigger>
            <TabsTrigger value="A-SUV">A-SUV</TabsTrigger>
            <TabsTrigger value="MiniCar">Mini</TabsTrigger>
            <TabsTrigger value="MPV">MPV</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {cars.map((car) => (
                <Card 
                  key={car.id}
                  className="cursor-pointer border-border hover:shadow-lg transition-all hover:border-accent"
                  onClick={() => {
                    setSelectedCar(car);
                    setSelectedColor(0);
                  }}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <CardTitle className="text-lg">{car.name}</CardTitle>
                        <CardDescription className="text-sm text-accent font-semibold mt-1">
                          {car.priceFrom}
                        </CardDescription>
                      </div>
                      <Badge variant="secondary" className="bg-accent/10 text-accent">
                        {car.category}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="h-40 bg-gradient-to-br from-accent/5 to-primary/5 rounded-lg flex items-center justify-center overflow-hidden relative">
                      {car.image && car.image.trim() !== '' ? (
                        <img 
                          src={car.image} 
                          alt={car.name}
                          className="object-cover w-full h-full hover:scale-105 transition-transform"
                        />
                      ) : (
                        <div className="text-5xl">🚗</div>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="bg-muted/50 rounded p-2">
                        <p className="text-muted-foreground text-xs">Chỗ ngồi</p>
                        <p className="font-semibold text-foreground">{car.seats}</p>
                      </div>
                      <div className="bg-muted/50 rounded p-2">
                        <p className="text-muted-foreground text-xs">Quãng đường</p>
                        <p className="font-semibold text-foreground">{car.range}</p>
                      </div>
                    </div>

                    <Button 
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedCar(car);
                        setSelectedColor(0);
                      }}
                    >
                      Xem chi tiết
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {['E-SUV', 'C-SUV', 'B-SUV', 'A-SUV', 'MiniCar', 'MPV'].map((category) => (
            <TabsContent key={category} value={category} className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {cars.filter(car => car.category === category).map((car) => (
                  <Card 
                    key={car.id}
                    className="cursor-pointer border-border hover:shadow-lg transition-all hover:border-accent"
                    onClick={() => {
                      setSelectedCar(car);
                      setSelectedColor(0);
                    }}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <CardTitle className="text-lg">{car.name}</CardTitle>
                          <CardDescription className="text-sm text-accent font-semibold mt-1">
                            {car.priceFrom}
                          </CardDescription>
                        </div>
                        <Badge variant="secondary" className="bg-accent/10 text-accent">
                          {car.category}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="h-40 bg-gradient-to-br from-accent/5 to-primary/5 rounded-lg flex items-center justify-center overflow-hidden relative">
                        {car.image && car.image.trim() !== '' ? (
                          <img 
                            src={car.image} 
                            alt={car.name}
                            className="object-cover w-full h-full hover:scale-105 transition-transform"
                          />
                        ) : (
                          <div className="text-5xl">🚗</div>
                        )}
                      </div>

                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div className="bg-muted/50 rounded p-2">
                          <p className="text-muted-foreground text-xs">Chỗ ngồi</p>
                          <p className="font-semibold text-foreground">{car.seats}</p>
                        </div>
                        <div className="bg-muted/50 rounded p-2">
                          <p className="text-muted-foreground text-xs">Quãng đường</p>
                          <p className="font-semibold text-foreground">{car.range}</p>
                        </div>
                      </div>

                      <Button 
                        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedCar(car);
                          setSelectedColor(0);
                        }}
                      >
                        Xem chi tiết
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Detail Section */}
        <div className="mt-16 pt-12 border-t border-border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-foreground">{selectedCar.name}</h3>
                <p className="text-2xl font-bold text-accent mt-2">{selectedCar.price}</p>
              </div>

              <p className="text-base text-muted-foreground leading-relaxed">{selectedCar.description}</p>

              <div>
                <p className="text-sm font-semibold text-foreground mb-4">Màu sắc khả dụng</p>
                <div className="flex gap-3 flex-wrap">
                  {selectedCar.colors.map((color, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedColor(idx)}
                      className={`w-12 h-12 rounded-lg border-2 transition-all ${
                        selectedColor === idx ? 'border-foreground scale-110' : 'border-border'
                      }`}
                      style={{ backgroundColor: color }}
                      title={selectedCar.colorNames[idx]}
                    />
                  ))}
                </div>
                {selectedColor >= 0 && (
                  <p className="text-sm text-muted-foreground mt-2">
                    Màu: <span className="font-semibold text-foreground">{selectedCar.colorNames[selectedColor]}</span>
                  </p>
                )}
              </div>

              <div>
                <p className="text-sm font-semibold text-foreground mb-3">Tính năng chính</p>
                <div className="grid grid-cols-2 gap-2">
                  {selectedCar.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <Button className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground text-base h-11">
                  Đặt cọc
                </Button>
                <Button variant="outline" className="flex-1 border-border h-11">
                  Tư vấn
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="w-full aspect-square bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl flex items-center justify-center overflow-hidden relative">
                {selectedCar?.image && selectedCar.image.trim() !== '' ? (
                  <img 
                    src={selectedCar.image} 
                    alt={selectedCar.name}
                    className="object-contain w-full h-full p-4"
                  />
                ) : (
                  <div className="text-9xl">🚗</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
