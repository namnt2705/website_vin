'use client';

import React, { useState, useEffect } from 'react';
import { ChevronDown, X, Minus } from 'lucide-react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  useEffect(() => {
    // Load Botpress webchat script
    const script = document.createElement('script');
    script.src = 'https://cdn.botpress.cloud/webchat/v3.5/inject.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      setIframeLoaded(true);
    };

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <>
      {/* Chatbot Button */}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          setIsMinimized(false);
        }}
        className={`fixed bottom-6 right-6 w-14 h-14 rounded-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg transition-all z-40 flex items-center justify-center ${
          isOpen ? 'hidden' : ''
        }`}
        aria-label="Open chatbot"
      >
        <div className="flex flex-col items-center gap-0.5">
          <div className="text-lg">💬</div>
          <span className="text-xs font-semibold">Chat</span>
        </div>
      </button>

      {/* Chatbot Window */}
      {isOpen && (
        <div
          className={`fixed z-50 transition-all ${
            isMinimized ? 'bottom-6 right-6 w-80 h-12' : 'bottom-6 right-6 w-96 h-96'
          }`}
        >
          {/* Header */}
          <div className="bg-accent text-accent-foreground rounded-t-lg px-4 py-3 flex items-center justify-between shadow-lg">
            <div className="flex-1">
              <h3 className="font-semibold text-sm">VinFast - Hỗ trợ khách hàng</h3>
              <p className="text-xs opacity-90">Trực tuyến - Hãy hỏi tôi!</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="hover:bg-accent/80 p-1 rounded transition-colors"
                title="Thu nhỏ"
              >
                <Minus size={18} />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-accent/80 p-1 rounded transition-colors"
                title="Đóng"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Chatbot Iframe */}
          {!isMinimized && (
            <iframe
              src="https://cdn.botpress.cloud/webchat/v3.5/shareable.html?configUrl=https://files.bpcontent.cloud/2026/01/28/11/20260128112950-66R4VNA3.json"
              className="w-full h-full border-0 rounded-b-lg bg-background"
              allow="camera; microphone; clipboard-read; clipboard-write"
              title="VinFast Chatbot"
            />
          )}
        </div>
      )}
    </>
  );
}
