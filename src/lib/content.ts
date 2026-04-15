import fs from "fs";
import path from "path";
import matter from "gray-matter";

function getFiles(dir: string) {
  const folder = path.join(process.cwd(), "content", dir);
  if (!fs.existsSync(folder)) return [];
  return fs.readdirSync(folder).filter((f) => f.endsWith(".md"));
}

export type Case = {
  slug: string;
  bedrijf: string;
  titel: string;
  uitdaging: string;
  oplossing: string;
  image: string;
  order: number;
};

export type NieuwsItem = {
  slug: string;
  titel: string;
  datum: string;
  image: string;
  body: string;
};

export function getCases(): Case[] {
  return getFiles("cases")
    .map((file) => {
      const slug = file.replace(".md", "");
      const raw = fs.readFileSync(path.join(process.cwd(), "content", "cases", file), "utf-8");
      const { data } = matter(raw);
      return { slug, ...data } as Case;
    })
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}

export function getNieuws(): NieuwsItem[] {
  return getFiles("nieuws").map((file) => {
    const slug = file.replace(".md", "");
    const raw = fs.readFileSync(path.join(process.cwd(), "content", "nieuws", file), "utf-8");
    const { data, content } = matter(raw);
    return { slug, body: content, ...data } as NieuwsItem;
  });
}

export function getNieuwsBySlug(slug: string): NieuwsItem | null {
  const file = path.join(process.cwd(), "content", "nieuws", `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf-8");
  const { data, content } = matter(raw);
  return { slug, body: content, ...data } as NieuwsItem;
}
