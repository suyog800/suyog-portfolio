import { readFileSync, writeFileSync } from "node:fs";
const p = "public/projects/manifest.json";
const data = JSON.parse(readFileSync(p, "utf8"));
for (const proj of data) {
  proj.gallery = proj.gallery.map(item =>
    typeof item === "string" ? { src: item, caption: "" } : item
  );
  proj.blurb ??= "";
  proj.tags ??= [];
}
writeFileSync(p, JSON.stringify(data, null, 2));
console.log("Manifest migrated:", p);
