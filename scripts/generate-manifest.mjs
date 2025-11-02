import { readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const root = "public/projects";
const exts = new Set([".jpg",".jpeg",".png",".webp",".gif",".JPG",".JPEG",".PNG",".WEBP",".GIF"]);

const toTitle = (slug) =>
  slug.replace(/[-_]/g," ").replace(/\b\w/g, c => c.toUpperCase());

const dirs = readdirSync(root, { withFileTypes: true }).filter(d => d.isDirectory());
const manifest = [];

for (const d of dirs) {
  const folder = join(root, d.name);
  const files = readdirSync(folder, { withFileTypes: true })
    .filter(f => f.isFile() && exts.has(f.name.slice(f.name.lastIndexOf("."))))
    .map(f => `${d.name}/${f.name}`);
  if (!files.length) continue;

  manifest.push({
    name: toTitle(d.name),
    blurb: "",
    tags: [],
    gallery: files
  });
}

writeFileSync(join(root, "manifest.json"), JSON.stringify(manifest, null, 2));
console.log("Wrote", join(root, "manifest.json"));
