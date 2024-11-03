// src/app/components/Description.tsx

import React from 'react';
import Image from 'next/image';
import { Container, Typography, Box } from '@mui/material';

const Description = () => {
    return (
        <Container maxWidth="lg" sx={{ padding: { xs: '1rem 0.5rem', md: '2rem 1rem' }, direction: 'rtl' }}>
            <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 3, textAlign: 'right', color: '#333' }}>
                توضیحات کلی در مورد رمز ارزها
            </Typography>
            <Typography variant="body1" sx={{ fontSize: { xs: '0.85rem', md: '1rem' }, color: '#555', textAlign: 'right', mb: 3, lineHeight: 1.8 }}>
                رمز ارزها از پروتکل‌های رمزنگاری و با کدهای فوق العاده پیچیده برای ذخیره‌سازی دارایی‌های دیجیتال و انتقال آن‌ها استفاده می‌کنند تا معاملات ایمن و آسانی را فراهم کنند. توسعه‌دهندگان رمز ارزها این پروتکل‌ها را با طراحی اصولی به وجود آورده‌اند که امنیت داده‌ها و تراکنش‌ها را تضمین می‌کند.
            </Typography>
            <Typography variant="body1" sx={{ fontSize: { xs: '0.85rem', md: '1rem' }, color: '#555', textAlign: 'right', mb: 3, lineHeight: 1.8 }}>
                با استفاده از این ارزهای دیجیتال، معاملات به راحتی و بدون نیاز به نظارت مرکزی انجام می‌شوند. این نوع از ارزها به کاربران این امکان را می‌دهند که دارایی‌های خود را به‌صورت دیجیتال و در بستری امن انتقال دهند.
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
                <Image src="/images/btc.webp" alt="Crypto Description" width={600} height={400} style={{ borderRadius: '8px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }} />
            </Box>
            <Typography variant="body1" sx={{ fontSize: { xs: '0.85rem', md: '1rem' }, color: '#555', textAlign: 'right', mb: 3, lineHeight: 1.8 }}>
                رمز ارزها همچنین به کاربرانی که به دنبال استفاده از یک روش غیرمتمرکز برای تراکنش‌های خود هستند، یک جایگزین مناسب فراهم می‌کنند. این سیستم‌های مالی جدید، قابلیت انجام معاملات بدون نیاز به بانک‌ها و نهادهای واسطه را دارند و به کاربران امکان می‌دهند دارایی‌های خود را به طور مستقیم و امن انتقال دهند.
            </Typography>
            <Typography variant="body1" sx={{ fontSize: { xs: '0.85rem', md: '1rem' }, color: '#555', textAlign: 'right', mb: 3, lineHeight: 1.8 }}>
                امنیت این سیستم‌ها نیز به دلیل استفاده از الگوریتم‌های رمزنگاری پیشرفته به شدت بالا است و کاربران می‌توانند با اطمینان خاطر از این روش برای انجام تراکنش‌های خود استفاده کنند.
            </Typography>
        </Container>
    );
};

export default Description;
