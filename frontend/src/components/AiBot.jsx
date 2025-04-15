import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Chatbot = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (isOpen) {
      // إنشاء عنصر script
      const script = document.createElement("script");
      script.src =
        "https://cdn.botpress.cloud/webchat/v2.3/shareable.html?configUrl=https://files.bpcontent.cloud/2025/04/13/01/20250413011108-8KGLFUU6.json";
      script.async = true;

      // إضافة الـ script إلى body
      document.body.appendChild(script);

      // تنظيف عند إزالة المكون
      return () => {
        document.body.removeChild(script);
      };
    }
  }, [isOpen]);

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary-dark transition-colors"
      >
        <span className="text-2xl">💬</span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 w-96 bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Header */}
      <div className="bg-primary text-white p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <span className="text-primary text-xl">🤖</span>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Saboba Assistant</h2>
            <p className="text-xs opacity-80">متاح للرد على استفساراتك</p>
          </div>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="text-white hover:opacity-80 transition-opacity"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {/* Chat Container */}
      <div className="h-96 bg-gray-50">
        <div id="botpress-webchat" className="h-full"></div>
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white border-t">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder={t("ai.placeholder")}
            className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors">
            {t("ai.send")}
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-100 p-2 text-center text-xs text-gray-500">
        <p>© 2024 Saboba - جميع الحقوق محفوظة</p>
      </div>
    </div>
  );
};

export default Chatbot;
