import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // نادیده گرفتن خطاهای ESLint در زمان ساخت
  },
  /* سایر گزینه‌های پیکربندی */
};

export default nextConfig;
