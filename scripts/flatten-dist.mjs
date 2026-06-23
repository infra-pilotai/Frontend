import { existsSync } from "node:fs";
import { cp, rm, rename } from "node:fs/promises";
import { join } from "node:path";

const root = process.cwd();
const dist = join(root, "dist");
const client = join(dist, "client");

if (!existsSync(client)) {
  console.warn("[flatten-dist] dist/client not found; skipping.");
  process.exit(0);
}

const backup = join(root, ".dist-backup");

await rm(backup, { recursive: true, force: true });
await cp(dist, backup, { recursive: true });
await rm(dist, { recursive: true, force: true });
await rename(join(backup, "client"), dist);
await rm(backup, { recursive: true, force: true });

const shell = join(dist, "_shell.html");
const index = join(dist, "index.html");
if (existsSync(shell)) {
  await rename(shell, index);
}

// Keep deploy output minimal: index.html + assets only.
for (const extra of ["videos", "_shell.html"]) {
  await rm(join(dist, extra), { recursive: true, force: true });
}

console.log("[flatten-dist] dist now contains index.html and assets/ only.");
