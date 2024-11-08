// src/app/components/Description.tsx

import React from 'react';
import Image from 'next/image';

const TITLE = "توضیحات کلی در مورد رمز ارزها";
const IMAGE_SRC = "/images/btc.webp";
const IMAGE_ALT = "Crypto Description";
const IMAGE_WIDTH = 600;
const IMAGE_HEIGHT = 400;
const PARAGRAPH_CLASS = "text-sm md:text-base text-gray-600 mb-6 leading-7";

const Description = () => {
    return (
        <div className="container mx-auto px-4 py-6 md:py-8 text-right">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
                {TITLE}
            </h2>
            <p className={PARAGRAPH_CLASS}>
                رمز ارزها از پروتکل‌های رمزنگاری و با کدهای فوق العاده پیچیده برای ذخیره‌سازی دارایی‌های دیجیتال و انتقال آن‌ها استفاده می‌کنند تا معاملات ایمن و آسانی را فراهم کنند. توسعه‌دهندگان رمز ارزها این پروتکل‌ها را با طراحی اصولی به وجود آورده‌اند که امنیت داده‌ها و تراکنش‌ها را تضمین می‌کند.
            </p>
            <p className={PARAGRAPH_CLASS}>
                با استفاده از این ارزهای دیجیتال، معاملات به راحتی و بدون نیاز به نظارت مرکزی انجام می‌شوند. این نوع از ارزها به کاربران این امکان را می‌دهند که دارایی‌های خود را به‌صورت دیجیتال و در بستری امن انتقال دهند.
            </p>
            <div className="flex justify-center my-8">
                <Image
                    src={IMAGE_SRC}
                    alt={IMAGE_ALT}
                    width={IMAGE_WIDTH}
                    height={IMAGE_HEIGHT}
                    className="rounded-lg shadow-lg"
                />
            </div>
            <p className={PARAGRAPH_CLASS}>
                رمز ارزها همچنین به کاربرانی که به دنبال استفاده از یک روش غیرمتمرکز برای تراکنش‌های خود هستند، یک جایگزین مناسب فراهم می‌کنند. این سیستم‌های مالی جدید، قابلیت انجام معاملات بدون نیاز به بانک‌ها و نهادهای واسطه را دارند و به کاربران امکان می‌دهند دارایی‌های خود را به طور مستقیم و امن انتقال دهند.
            </p>
            <p className={PARAGRAPH_CLASS}>
                امنیت این سیستم‌ها نیز به دلیل استفاده از الگوریتم‌های رمزنگاری پیشرفته به شدت بالا است و کاربران می‌توانند با اطمینان خاطر از این روش برای انجام تراکنش‌های خود استفاده کنند.
            </p>
        </div>
    );
};

export default Description;
