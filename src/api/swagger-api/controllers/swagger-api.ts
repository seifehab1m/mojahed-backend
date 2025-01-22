/**
 * A set of functions called "actions" for `swagger-api`
 */
import fs from "fs/promises";
import path from "path";
const docSrc = path.join(
  process.cwd(),
  "src/extensions/documentation/documentation/1.0.0/full_documentation.json"
);

export default {
  exampleAction: async (ctx, next) => {
    try {
      ctx.body = await fs.readFile(docSrc, "utf8");
    } catch (err) {
      ctx.body = err;
    }
  },
};
