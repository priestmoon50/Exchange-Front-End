// src/app/components/Description.tsx

"use client";

import React from 'react';
import Image from 'next/image';
import styles from './Description.module.css';

const Description = () => {
    return (
        <section className={styles.description}>
            <h2 className={styles.title}>توضیحات کلی در مورد رمز ارزها</h2>
            <p className={styles.text}>
                رمز ارزها از پروتکل‌های رمزنگاری و با کدهای فوق العاده پیچیده برای ذخیره‌سازی دارایی‌های دیجیتال و انتقال آن‌ها استفاده می‌کنند تا معاملات ایمن و آسانی را فراهم کنند. توسعه‌دهندگان رمز ارزها این پروتکل‌ها را با طراحی اصولی به وجود آورده‌اند که امنیت داده‌ها و تراکنش‌ها را تضمین می‌کند.
            </p>
            <p className={styles.text}>
                با استفاده از این ارزهای دیجیتال، معاملات به راحتی و بدون نیاز به نظارت مرکزی انجام می‌شوند. این نوع از ارزها به کاربران این امکان را می‌دهند که دارایی‌های خود را به‌صورت دیجیتال و در بستری امن انتقال دهند.
            </p>
            <div className={styles.imageContainer}>
                <Image src="/images/btc.webp" alt="Crypto Description" width={600} height={400} className={styles.image} />
            </div>
            <p className={styles.text}>
                رمز ارزها همچنین به کاربرانی که به دنبال استفاده از یک روش غیرمتمرکز برای تراکنش‌های خود هستند، یک جایگزین مناسب فراهم می‌کنند. این سیستم‌های مالی جدید، قابلیت انجام معاملات بدون نیاز به بانک‌ها و نهادهای واسطه را دارند و به کاربران امکان می‌دهند دارایی‌های خود را به طور مستقیم و امن انتقال دهند.
            </p>
            <p className={styles.text}>
                امنیت این سیستم‌ها نیز به دلیل استفاده از الگوریتم‌های رمزنگاری پیشرفته به شدت بالا است و کاربران می‌توانند با اطمینان خاطر از این روش برای انجام تراکنش‌های خود استفاده کنند.
            </p>
        </section>
    );
};

export default Description;
