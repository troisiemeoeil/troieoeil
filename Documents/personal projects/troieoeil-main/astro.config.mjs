import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
// https://astro.build/config
export default defineConfig({
  markdown: {
    drafts: true,
    shikiConfig: {
      theme: "css-variables"
    }
  },
  shikiConfig: {
    wrap: true,
    skipInline: false,
    drafts: true
  },
  site: 'https://troisiemeoeil.io',
  // integrations: [tailwind(), sitemap(), mdx(), react()]
  integrations: [
    tailwind(),
    mdx(),
    sitemap(
      {
        filter: (page) =>
          page !== 'https://troisiemeoeil.io/blog/blog-one/' &&
          page !== 'https://troisiemeoeil.io/blog/blog-two/' &&
          // page !== 'https://troisiemeoeil.io/contact/' &&
          page !== 'https://troisiemeoeil.io/faq/'&&
          page !== 'https://troisiemeoeil.io/infopages/about/' &&
          page !== 'https://troisiemeoeil.io/infopages/faq/'&&
          page !== 'https://troisiemeoeil.io/infopages/privacy/' &&
          page !== 'https://troisiemeoeil.io/infopages/terms/'&&
          page !== 'https://troisiemeoeil.io/posts/1/' &&
          page !== 'https://troisiemeoeil.io/posts/2/'&&
          page !== 'https://troisiemeoeil.io/posts/3/' &&
          page !== 'https://troisiemeoeil.io/posts/4/'&&
          page !== 'https://troisiemeoeil.io/posts/5/' &&
          page !== 'https://troisiemeoeil.io/posts/6/'&&
          page !== 'https://troisiemeoeil.io/system/overview/' &&
          page !== 'https://troisiemeoeil.io/system/style-guide/' &&
          page !== 'https://troisiemeoeil.io/tags/' &&
          page !== 'https://troisiemeoeil.io/tags/Animation/' &&
          page !== 'https://troisiemeoeil.io/tags/ARIA/' &&
          page !== 'https://troisiemeoeil.io/tags/CDN/' &&
          page !== 'https://troisiemeoeil.io/tags/Development/' &&
          page !== 'https://troisiemeoeil.io/tags/Frameworks/' &&
          page !== 'https://troisiemeoeil.io/tags/HTML/' &&
          page !== 'https://troisiemeoeil.io/tags/SVG/' &&
          page !== 'https://troisiemeoeil.io/tags/Tailwind/' &&
          page !== 'https://troisiemeoeil.io/work/all-work/' &&
          page !== 'https://troisiemeoeil.io/work/case-study/' &&


          page !== 'https://stargazers.club/secret-vip-lounge-4/',
      }
    ),
    react({
      include: ['**/react/*'],
    }),
  ],
});