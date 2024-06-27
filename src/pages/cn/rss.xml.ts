import rss from '@astrojs/rss';
import { getPage, getRssItems } from '../../utils';

export async function GET() {
  const pageData = await getPage("blog");
  const title = pageData.title_cn || pageData.title;
  const description = pageData.description_cn || pageData.description;
  return rss({
    title,
    description,
    site: 'https://www.nocobase.com/',
    items: await getRssItems('cn'),
    customData: `<language>multi</language>`,
  });
}
