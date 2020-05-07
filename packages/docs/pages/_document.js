import Document, { Head, Main, NextScript } from 'next/document';
import { GA_TRACKING_ID } from '../src/lib/gtag';
const isProduction = process.env.NODE_ENV === 'production';
const BaseCSS = ({ css }) => (
  <style
    dangerouslySetInnerHTML={{
      __html: css,
    }}
  />
);

BaseCSS.defaultProps = {
  css: '*{box-sizing:border-box}body{margin:0}',
};

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="generator" content="mdx-docs" />
          <BaseCSS />
          {isProduction && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', '${GA_TRACKING_ID}', {
                      page_path: window.location.pathname,
                    });
                  `,
                }}
              />
            </>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
