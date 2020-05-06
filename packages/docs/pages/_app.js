import React from 'react';
import App from 'next/app';
import Link from 'next/link';
import Head from 'next/head';
import Router from 'next/router';
import { ChattyForm, Input, Select, MultiSelect } from 'chatty-form';

import { Layout, NavLinks, Pagination } from 'mdx-docs';

import { ThemeProvider } from 'theme-ui';

import theme from '../src/theme';
import Header from '../src/components/header';

import * as gtag from '../src/lib/gtag';

const routes = [
  { name: 'Getting Started', path: '/docs' },
  { name: 'API', path: '/docs/api' },
  { name: 'Styling', path: '/docs/styling' },
  { name: 'ChattyForm', path: '/docs/components/chatty-form' },
  { name: 'Common Props', path: '/docs/common-props' },
  { name: 'Input', path: '/docs/components/input' },
  { name: 'Select', path: '/docs/components/select' },
  { name: 'MultiSelect', path: '/docs/components/multi-select' },
];

const components = {
  a: ({ href, ...props }) => (
    <Link href={href}>
      <a {...props} />
    </Link>
  ),
  ChattyForm,
  Input,
  Select,
  MultiSelect,
};

Router.events.on('routeChangeComplete', (url) => gtag.pageview(url));

export default class MyApp extends App {
  render() {
    const { Component, pageProps, ...props } = this.props;
    return (
      <>
        <Head>
          <title>Chatty Form</title>
          <meta
            name="description"
            content="A highly theme-able and customisable form in the shape of a chat based interface for React."
          />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link
            rel="icon"
            href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💬</text></svg>"
          ></link>

          <meta name="keywords" content="react, chat, ui, form, chatty-form" />
          <meta name="author" content="Soumik Sur" />

          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content="A highly theme-able and customisable form in the shape of a chat based interface for React."
          />
          <meta
            property="og:image"
            content="https://chatty-form.netlify.app/og-image-1200x630.jpg"
          />
        </Head>
        {props.router.route === '/' ? (
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        ) : (
          <Layout {...props} components={components} routes={routes}>
            <Layout.MenuToggle />
            <Layout.Sidebar>
              <NavLinks />
            </Layout.Sidebar>
            <Layout.Main>
              <Header />
              <Component {...pageProps} />
              <Pagination />
            </Layout.Main>
          </Layout>
        )}
      </>
    );
  }
}
