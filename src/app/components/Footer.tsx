// src/app/components/Footer.tsx

import React from 'react';
import { Box, Container, Grid, Typography, Divider } from '@mui/material';
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <Box
            sx={{
                background: 'linear-gradient(135deg, #0A2C56, #122f64)',
                color: '#ffffff',
                py: 4,
                boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.3)',
                borderTopLeftRadius: '20px',
                borderTopRightRadius: '20px',
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4} justifyContent="space-between" alignItems="flex-start">
                    <Grid item xs={12} md={7}>
                        <Grid container spacing={4} justifyContent="flex-end">
                            {[
                                { title: 'لینک‌های مرتبط', links: ['صفحه اصلی', 'قیمت رمز ارزها', 'مقالات و وبلاگ', 'انجمن', 'درباره ما'] },
                                { title: 'تبادل ارز', links: ['خرید بیت کوین', 'خرید اتریوم', 'خرید ریپل', 'خرید سولانا'] },
                                { title: 'خدمات دیگر', links: ['سوالات متداول', 'شرایط و قوانین', 'فرصت‌های شغلی'] },
                                { title: 'خرید ارز', links: ['خرید یواس‌دی‌کوین', 'خرید چین لینک', 'خرید دوج کوین', 'خرید تتر'] },
                            ].map((section, index) => (
                                <Grid item xs={6} sm={3} key={index}>
                                    <Typography
                                        variant="h6"
                                        gutterBottom
                                        textAlign="right"
                                        sx={{
                                            fontSize: '1.25rem',
                                            fontWeight: 'bold',
                                            color: '#ffffff',
                                            transition: 'color 0.3s',
                                            '&:hover': { color: '#d1d1d1' },
                                        }}
                                    >
                                        {section.title}
                                    </Typography>
                                    <Box textAlign="right">
                                        {section.links.map((link, idx) => (
                                            <Typography
                                                variant="body2"
                                                key={idx}
                                                sx={{
                                                    fontSize: '1rem',
                                                    mb: 0.5,
                                                    transition: 'color 0.3s',
                                                    '& a': { color: '#d1d1d1', textDecoration: 'none' },
                                                    '& a:hover': { color: '#ffffff' },
                                                }}
                                            >
                                                <a href="#">{link}</a>
                                            </Typography>
                                        ))}
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Box display="flex" flexDirection="column" alignItems="flex-end" textAlign="right">
                            <Typography
                                variant="body2"
                                color="#d1d1d1"
                                mt={2}
                                maxWidth={600}
                                sx={{ fontSize: '1rem', lineHeight: '1.6' }}
                            >
                                راهکارهای پرداخت ری در سال 2009 فعالیت خود را در زمینه سیستم‌های پرداخت بین المللی با وبسایت wallet.ir آغاز کرد. ری پرداخت با نام تجاری MGY INVESTMENT LTD با شماره ثبت 736504 در کشور انگلستان به ثبت رسیده و ضوابط رسمی آغاز نمود.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>

                <Divider sx={{ my: 3, borderColor: 'rgba(255, 255, 255, 0.3)', borderStyle: 'dashed' }} />

                <Box display="flex" justifyContent="space-between" alignItems="center" flexDirection={{ xs: 'column', md: 'row' }} textAlign="right">
                    <Box display="flex" gap={2} mt={{ xs: 2, md: 0 }} justifyContent="flex-start">
                        {[
                            { icon: <FaInstagram size={32} />, link: '#' },
                            { icon: <FaFacebook size={32} />, link: '#' },
                            { icon: <FaTwitter size={32} />, link: '#' },
                            { icon: <FaLinkedin size={32} />, link: '#' },
                            { icon: <FaYoutube size={32} />, link: '#' },
                        ].map((social, idx) => (
                            <a
                                key={idx}
                                href={social.link}
                                style={{
                                    color: '#d1d1d1',
                                    transition: 'color 0.3s',
                                }}
                                className="social-link"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </Box>
                    <Typography variant="body2" color="#d1d1d1" textAlign="right" sx={{ fontSize: '1rem', mt: { xs: 2, md: 0 } }}>
                        تمامی حقوق این سرویس متعلق به مجموعه{' '}
                        <span style={{ fontWeight: 'bold', color: '#ffffff' }}>ری پیمنت</span> است
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
