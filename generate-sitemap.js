import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";
import { resolve } from "path";

const smStream = new SitemapStream({ hostname: "https://www.moazx.com/" });

const sitemapPath = resolve("dist/sitemap.xml");
const writeStream = createWriteStream(sitemapPath);

smStream.pipe(writeStream);

smStream.write({
  url: "/",
  changefreq: "daily",
  priority: 1.0,
});

smStream.end();

streamToPromise(smStream)
  .then(() => console.log("Sitemap created successfully."))
  .catch(console.error);
