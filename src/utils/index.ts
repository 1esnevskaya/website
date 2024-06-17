import { createMarkdownProcessor as coreCreateMarkdownProcessor } from '@astrojs/markdown-remark';
import rehypeSlug from 'rehype-slug';
import remarkDirective from 'remark-directive';

const baseURL = (import.meta.env.NOCOBASE_URL || process.env.NOCOBASE_URL) + 'api/';
const token = import.meta.env.NOCOBASE_TOKEN || process.env.NOCOBASE_TOKEN;

console.log(baseURL);
console.log(token);

export function url(path: string) {
  return (import.meta.env.NOCOBASE_URL || process.env.NOCOBASE_URL) + path
}

const processor = await createMarkdownProcessor();

export async function createMarkdownProcessor() {
  return await coreCreateMarkdownProcessor({
    shikiConfig: {
      theme: 'github-light'
    },
    syntaxHighlight: 'shiki',
    remarkPlugins: [remarkDirective],
    rehypePlugins: [rehypeSlug
      //   [rehypeToc, { headings: ['h1', 'h2', 'h3', 'h4', 'h5'] }]
    ]
  });
}

export async function listTaskCategories() {
  const res = await fetch(`${baseURL}taskCategories:list?pageSize=200&appends=tasks,tasks.status&token=${token}`);
  const { data } = await res.json() as { data: any[] };
  return data;
}

export async function listPluginCategories() {
  const res = await fetch(`${baseURL}pluginCategories:list?pageSize=200&appends=plugins&token=${token}`);
  const { data } = await res.json() as { data: any[] };
  return data;
}

export async function listArticles(options?: { tagSlug?: string, page?: number }) {
  const { tagSlug, page = 1 } = options || { page: 1 };
  let url = `${baseURL}articles:list?page=${page}&pageSize=9&appends=cover&sort=-publishedAt&token=${token}&filter[hideOnListPage.$isFalsy]=true&filter[status]=published`;
  if (tagSlug) {
    url += `&filter[tags.slug]=${tagSlug}`;
  }
  const res = await fetch(url);
  const { data, meta } = await res.json() as { data: any[], meta: any };
  return { data, meta };
}

export async function getArticleTag(slug?: string) {
  if (!slug) {
    return {};
  }
  const res = await fetch(`${baseURL}articleTags:get?filter[slug]=${slug}&token=${token}`);
  const body = await res.json();
  const data = body.data || {};
  return data;
}

const articles: Record<string, any> = {};

export async function getArticle(slug?: string, locale = 'en') {
  if (!slug) {
    return {};
  }
  const res = await fetch(`${baseURL}articles:get?appends=tags&filter[slug]=${slug}&token=${token}`);
  const body = await res.json();
  const data = body.data || {};
  const key = `${data.id}-${data.updatedAt}-${locale}`;
  if (articles[key]) {
    return articles[key];
  }
  let content = data?.content || '';
  if (locale === 'cn' && data?.content_cn) {
    content = data?.content_cn;
  }
  const { code, metadata } = await processor.render(content);
  const headings: any[] = metadata.headings || [];
  articles[key] = { data, headings, html: code };
  return articles[key];
}

export async function listReleases(options?: any) {
  const { page = 1, tagSlug } = options || {};
  let url = `${baseURL}releases:list?page=${page}&pageSize=20&sort=-publishedAt&token=${token}&filter[status]=published`;
  if (tagSlug) {
    url += `&filter[tags.slug]=${tagSlug}`;
  }
  const res = await fetch(url);
  const { data, meta } = await res.json() as { meta?: any; data: any[] };
  return { data, meta };
}

const releases: Record<string, any> = {};

export async function getRelease(slug?: string, locale = 'en') {
  const res = await fetch(`${baseURL}releases:get?appends=tags&filter[slug]=${slug}&token=${token}`);
  const body = await res.json();
  const data = body.data || {};
  const key = `${data.id}-${data.updatedAt}-${locale}`;
  if (releases[key]) {
    return releases[key];
  }
  let content = data?.content || '';
  if (locale === 'cn' && data?.content_cn) {
    content = data?.content_cn;
  }
  const { code, metadata } = await processor.render(content);
  const headings: any[] = metadata.headings || [];
  releases[key] = { data, headings, html: code };
  return releases[key];
}

export async function getReleaseTag(slug?: string) {
  if (!slug) {
    return {};
  }
  const res = await fetch(`${baseURL}releaseTags:get?filter[slug]=${slug}&token=${token}`);
  const body = await res.json();
  const data = body.data || {};
  return data;
}

export async function getSitemapLinks() {
  const items1 = await fetch(`${baseURL}releases:list?token=${token}`).then(res => res.json()).then(body => body.data);
  const items2 = await fetch(`${baseURL}articles:list?token=${token}`).then(res => res.json()).then(body => body.data);
  return [
    {
      url: '/en/releases',
      links: [
        { lang: 'en-US', url: `/en/releases` },
        { lang: 'zh-CN', url: `/cn/releases` },
      ],
    },
    {
      url: '/en/blog',
      links: [
        { lang: 'en-US', url: `/en/blog` },
        { lang: 'zh-CN', url: `/cn/blog` },
      ],
    },
    {
      url: '/en/plugins',
      links: [
        { lang: 'en-US', url: `/en/plugins` },
        { lang: 'zh-CN', url: `/cn/plugins` },
      ],
    },
    {
      url: '/en/plugins-commercial',
      links: [
        { lang: 'en-US', url: `/en/plugins-commercial` },
        { lang: 'zh-CN', url: `/cn/plugins-commercial` },
      ],
    },
    {
      url: '/en/commercial',
      links: [
        { lang: 'en-US', url: `/en/commercial` },
        { lang: 'zh-CN', url: `/cn/commercial` },
      ],
    },
    {
      url: '/en/community',
      links: [
        { lang: 'en-US', url: `/en/community` },
        { lang: 'zh-CN', url: `/cn/community` },
      ],
    },
    {
      url: '/en/contact',
      links: [
        { lang: 'en-US', url: `/en/contact` },
        { lang: 'zh-CN', url: `/cn/contact` },
      ],
    },
    {
      url: '/en/roadmap',
      links: [
        { lang: 'en-US', url: `/en/roadmap` },
        { lang: 'zh-CN', url: `/cn/roadmap` },
      ],
    },
    {
      url: '/en/agreement',
      links: [
        { lang: 'en-US', url: `/en/agreement` },
        { lang: 'zh-CN', url: `/cn/agreement` },
      ],
    },
  ].concat(items1.map((item: any) => {
    return {
      url: `/en/releases/${item.slug}`,
      lastmod: item.updatedAt,
      links: [
        { lang: 'en-US', url: `/en/releases/${item.slug}` },
        { lang: 'zh-CN', url: `/cn/releases/${item.slug}` },
      ],
    }
  })).concat(items2.map((item: any) => {
    return {
      url: `/en/blog/${item.slug}`,
      lastmod: item.updatedAt,
      links: [
        { lang: 'en-US', url: `/en/blog/${item.slug}` },
        { lang: 'zh-CN', url: `/cn/blog/${item.slug}` },
      ],
    }
  }));
}