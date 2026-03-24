import React from 'react';
import Header from './header';
import Footer from './footer';
import '../styles/global.css';

const Layout = ({ children, siteName }) => (
  <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    <Header siteName={siteName} />
    <main style={{ flex: 1 }}>{children}</main>
    <Footer />
  </div>
);

export default Layout;
