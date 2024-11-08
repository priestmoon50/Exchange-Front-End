/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",   // فایل‌های داخل پوشه pages
    "./components/**/*.{js,ts,jsx,tsx,mdx}",  // فایل‌های داخل پوشه components
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // فایل‌های داخل src در صورت استفاده
  ],
  theme: {
    extend: {
      colors: {
        'table-header': '#E3E7EC',  // رنگ سفارشی برای هدر جدول
      },
    },
  },
  plugins: [],
};
