import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (window.Webflow) {
                window.Webflow.destroy();
                window.Webflow.ready();
                window.Webflow.require('ix2').init();
                document.dispatchEvent(new Event('readystatechange'));
              }
            `,
          }}
        />
      </body>
    </Html>
  )
}
