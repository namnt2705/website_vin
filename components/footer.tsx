import React from 'react';
import { Separator } from '@/components/ui/separator';

export default function Footer() {
  return (
    <footer className="w-full bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">VinFast</h3>
            <p className="text-sm opacity-90">
              Công ty hàng đầu trong ngành sản xuất xe điện tại Việt Nam.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-sm">Sản phẩm</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li><a href="#" className="hover:opacity-100 transition-opacity">Xe hơi</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Xe máy</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Pin & Sạc</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Phụ kiện</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-sm">Hỗ trợ</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li><a href="#" className="hover:opacity-100 transition-opacity">Liên hệ</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Câu hỏi thường gặp</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Hướng dẫn sử dụng</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Bảo hành</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-sm">Kết nối</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li><a href="#" className="hover:opacity-100 transition-opacity">Facebook</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Instagram</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">YouTube</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <Separator className="bg-primary-foreground/20 my-8" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm opacity-90">
          <div>
            <p>&copy; 2026 VinFast. Tất cả quyền được bảo lưu.</p>
          </div>
          <div className="md:text-right space-x-4">
            <a href="#" className="hover:opacity-100 transition-opacity inline-block">Chính sách bảo mật</a>
            <span>|</span>
            <a href="#" className="hover:opacity-100 transition-opacity inline-block">Điều khoản sử dụng</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
