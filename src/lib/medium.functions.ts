import { createServerFn } from "@tanstack/react-start";

export type MediumPost = {
  title: string;
  link: string;
  pubDate: string;
  snippet: string;
  image: string | null;
  categories: string[];
};

function decode(s: string) {
  return s
    .replace(/<!\[CDATA\[/g, "")
    .replace(/\]\]>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .trim();
}

function pick(block: string, tag: string): string {
  const re = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`, "i");
  const m = block.match(re);
  return m ? decode(m[1]) : "";
}

function pickAll(block: string, tag: string): string[] {
  const re = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`, "gi");
  const out: string[] = [];
  let m: RegExpExecArray | null;
  while ((m = re.exec(block)) !== null) out.push(decode(m[1]));
  return out;
}

function stripParams(url: string) {
  return url.split("?")[0];
}

export const getMediumPosts = createServerFn({ method: "GET" }).handler(
  async (): Promise<MediumPost[]> => {
    try {
      const res = await fetch("https://ashharn.medium.com/feed", {
        headers: { "User-Agent": "Mozilla/5.0 (compatible; PortfolioBot/1.0)" },
      });
      if (!res.ok) return [];
      const xml = await res.text();
      const items = xml.split(/<item[^>]*>/i).slice(1).map((b) => b.split(/<\/item>/i)[0]);
      return items.map((b) => {
        const description = pick(b, "description");
        const imgMatch = description.match(/<img[^>]+src=["']([^"']+)["']/i);
        const snippetMatch = description.match(/medium-feed-snippet[^>]*>([^<]+)/i);
        return {
          title: pick(b, "title"),
          link: stripParams(pick(b, "link")),
          pubDate: pick(b, "pubDate"),
          snippet: snippetMatch ? decode(snippetMatch[1]) : "",
          image: imgMatch ? imgMatch[1] : null,
          categories: pickAll(b, "category"),
        };
      });
    } catch {
      return [];
    }
  },
);
