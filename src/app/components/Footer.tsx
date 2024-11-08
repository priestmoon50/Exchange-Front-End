// src/app/components/Footer.tsx

import React from "react";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import Image from "next/image";

const LINKS = [
  {
    title: "لینک‌های مرتبط",
    links: [
      "صفحه اصلی",
      "قیمت رمز ارزها",
      "مقالات و وبلاگ",
      "انجمن",
      "درباره ما",
    ],
  },
  {
    title: "تبادل ارز",
    links: ["خرید بیت کوین", "خرید اتریوم", "خرید ریپل", "خرید سولانا"],
  },
  {
    title: "خدمات دیگر",
    links: ["سوالات متداول", "شرایط و قوانین", "فرصت‌های شغلی"],
  },
  {
    title: "خرید ارز",
    links: ["خرید یواس‌دی‌کوین", "خرید چین لینک", "خرید دوج کوین", "خرید تتر"],
  },
];

const SOCIAL_LINKS = [
  { icon: <FaInstagram size={32} />, link: "#" },
  { icon: <FaFacebook size={32} />, link: "#" },
  { icon: <FaTwitter size={32} />, link: "#" },
  { icon: <FaLinkedin size={32} />, link: "#" },
  { icon: <FaYoutube size={32} />, link: "#" },
];

const FooterSection = ({
  title,
  links,
}: {
  title: string;
  links: string[];
}) => (
  <div className="w-1/2 sm:w-1/4 mb-4">
    <h6 className="text-lg font-bold mb-2 hover:text-gray-300 transition-colors text-right">
      {title}
    </h6>
    <div className="space-y-1 text-right">
      {links.map((link, idx) => (
        <p
          key={idx}
          className="text-base text-gray-300 hover:text-white transition-colors"
        >
          <a href="#">{link}</a>
        </p>
      ))}
    </div>
  </div>
);

const SocialIcons = () => (
  <div className="flex space-x-4 rtl:space-x-reverse">
    {SOCIAL_LINKS.map((social, idx) => (
      <a
        key={idx}
        href={social.link}
        className="text-gray-300 hover:text-white transition-colors"
      >
        {social.icon}
      </a>
    ))}
  </div>
);

const Footer = () => {
  // استفاده از نسخه کپی برای جلوگیری از تغییر مستقیم در LINKS
  const reversedLinks = [...LINKS].reverse();

  return (
    <div className="bg-gradient-to-br from-[#0A2C56] to-[#122f64] text-white py-8 shadow-lg rounded-t-2xl">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-7/12 mb-8 md:mb-0">
            <div className="flex flex-wrap justify-start rtl">
              {reversedLinks.map((section, index) => (
                <FooterSection
                  key={index}
                  title={section.title}
                  links={[...section.links].reverse()}
                />
              ))}
            </div>
          </div>

          <div className="w-full md:w-4/12 flex flex-col items-end text-right">
            <div className="flex items-center mb-4">
              <span className="text-3xl font-bold">والت</span>
              <Image
                src="/images/logo.png"
                alt="Wallet Logo"
                width={50}
                height={50}
                className="mr-2 max-w-[50px] max-h-[50px]"
              />
            </div>
            <p className="text-base text-gray-300 mt-2 leading-relaxed">
              راهکارهای پرداخت ری در سال 2009 فعالیت خود را در زمینه سیستم‌های
              پرداخت بین المللی با وبسایت wallet.ir آغاز کرد. ری پرداخت با نام
              تجاری MGY INVESTMENT LTD با شماره ثبت 736504 در کشور انگلستان به
              ثبت رسیده و ضوابط رسمی آغاز نمود.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-500 border-dashed my-6"></div>

        <div className="flex flex-col md:flex-row justify-between items-center text-right space-y-4 md:space-y-0">
          <SocialIcons />
          <p className="text-base text-gray-300">
            تمامی حقوق این سرویس متعلق به مجموعه{" "}
            <span className="font-bold text-white">ری پیمنت</span> است
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
