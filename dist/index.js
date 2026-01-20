// server/index.ts
import express2 from "express";

// server/routes.ts
import { createServer } from "http";

// server/storage.ts
import { randomUUID } from "crypto";
var MemStorage = class {
  products;
  articles;
  contactSubmissions;
  newsletterSubscriptions;
  constructor() {
    this.products = /* @__PURE__ */ new Map();
    this.articles = /* @__PURE__ */ new Map();
    this.contactSubmissions = /* @__PURE__ */ new Map();
    this.newsletterSubscriptions = /* @__PURE__ */ new Map();
    this.seedData();
  }
  seedData() {
    const products2 = [
      {
        name: "\u041A\u0443\u0440\u0438\u043D\u044B\u0439 \u043F\u0435\u043F\u0442\u0438\u0434\u043D\u044B\u0439 \u0431\u0443\u043B\u044C\u043E\u043D",
        slug: "chicken-broth",
        description: "\u041B\u0435\u0433\u043A\u0438\u0439 \u0438 \u043F\u0438\u0442\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0431\u0443\u043B\u044C\u043E\u043D \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0435 \u043A\u0443\u0440\u0438\u043D\u043E\u0433\u043E \u0431\u0435\u043B\u043A\u0430",
        protein: 25,
        composition: "\u0413\u0438\u0434\u0440\u043E\u043B\u0438\u0437\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u043A\u0443\u0440\u0438\u043D\u044B\u0439 \u043A\u043E\u043B\u043B\u0430\u0433\u0435\u043D, \u0430\u043C\u0438\u043D\u043E\u043A\u0438\u0441\u043B\u043E\u0442\u044B, \u043C\u0438\u043D\u0435\u0440\u0430\u043B\u044B",
        benefits: ["\u041F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430 \u0441\u0443\u0441\u0442\u0430\u0432\u043E\u0432", "\u0423\u043B\u0443\u0447\u0448\u0435\u043D\u0438\u0435 \u043A\u043E\u0436\u0438", "\u0411\u044B\u0441\u0442\u0440\u043E\u0435 \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435", "\u0423\u043A\u0440\u0435\u043F\u043B\u0435\u043D\u0438\u0435 \u0438\u043C\u043C\u0443\u043D\u0438\u0442\u0435\u0442\u0430"],
        usageInstructions: "\u0420\u0430\u0437\u0432\u0435\u0441\u0442\u0438 \u0432 200-250 \u043C\u043B \u0433\u043E\u0440\u044F\u0447\u0435\u0439 \u0432\u043E\u0434\u044B",
        imageUrl: "/images/chicken-broth.png",
        category: "broth",
        availability: "available"
      },
      {
        name: "\u0413\u043E\u0432\u044F\u0436\u0438\u0439 \u043F\u0435\u043F\u0442\u0438\u0434\u043D\u044B\u0439 \u0431\u0443\u043B\u044C\u043E\u043D",
        slug: "beef-broth",
        description: "\u041D\u0430\u0441\u044B\u0449\u0435\u043D\u043D\u044B\u0439 \u0431\u0443\u043B\u044C\u043E\u043D \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0435 \u0433\u043E\u0432\u044F\u0436\u044C\u0435\u0433\u043E \u0431\u0435\u043B\u043A\u0430",
        protein: 25,
        composition: "\u0413\u0438\u0434\u0440\u043E\u043B\u0438\u0437\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0433\u043E\u0432\u044F\u0436\u0438\u0439 \u043A\u043E\u043B\u043B\u0430\u0433\u0435\u043D, \u0430\u043C\u0438\u043D\u043E\u043A\u0438\u0441\u043B\u043E\u0442\u044B, \u043C\u0438\u043D\u0435\u0440\u0430\u043B\u044B",
        benefits: ["\u041D\u0430\u0431\u043E\u0440 \u043C\u044B\u0448\u0435\u0447\u043D\u043E\u0439 \u043C\u0430\u0441\u0441\u044B", "\u041F\u043E\u0432\u044B\u0448\u0435\u043D\u0438\u0435 \u0432\u044B\u043D\u043E\u0441\u043B\u0438\u0432\u043E\u0441\u0442\u0438", "\u0423\u043A\u0440\u0435\u043F\u043B\u0435\u043D\u0438\u0435 \u043A\u043E\u0441\u0442\u0435\u0439", "\u041F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430 \u043C\u0435\u0442\u0430\u0431\u043E\u043B\u0438\u0437\u043C\u0430"],
        usageInstructions: "\u0420\u0430\u0437\u0432\u0435\u0441\u0442\u0438 \u0432 200-250 \u043C\u043B \u0433\u043E\u0440\u044F\u0447\u0435\u0439 \u0432\u043E\u0434\u044B",
        imageUrl: "/images/beef-broth.png",
        category: "broth",
        availability: "available"
      }
    ];
    products2.forEach((p) => this.createProduct(p));
    const articles2 = [
      {
        title: "\u041A\u0430\u043A \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E \u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u044C \u0431\u0435\u043B\u043E\u043A \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 \u0434\u043D\u044F",
        slug: "protein-distribution",
        excerpt: "\u041D\u0430\u0443\u0447\u043D\u044B\u0439 \u043F\u043E\u0434\u0445\u043E\u0434 \u043A \u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u044E \u0431\u0435\u043B\u043A\u0430 \u0434\u043B\u044F \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0439 \u043F\u043E\u043B\u044C\u0437\u044B \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u043C\u0443",
        content: "\u041F\u043E\u043B\u043D\u044B\u0439 \u0442\u0435\u043A\u0441\u0442 \u0441\u0442\u0430\u0442\u044C\u0438 \u043E \u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0438 \u0431\u0435\u043B\u043A\u0430...",
        category: "science",
        author: "\u0414\u0440. \u0420\u0443\u0431\u043B\u0435\u0432 \u041C.\u0421.",
        imageUrl: null
      },
      {
        title: "\u041F\u0435\u043F\u0442\u0438\u0434\u044B vs \u043E\u0431\u044B\u0447\u043D\u044B\u0439 \u0431\u0435\u043B\u043E\u043A: \u0432 \u0447\u0435\u043C \u0440\u0430\u0437\u043D\u0438\u0446\u0430?",
        slug: "peptides-vs-protein",
        excerpt: "\u0420\u0430\u0437\u0431\u0438\u0440\u0430\u0435\u043C\u0441\u044F \u0432 \u043E\u0442\u043B\u0438\u0447\u0438\u044F\u0445 \u043F\u0435\u043F\u0442\u0438\u0434\u043D\u043E\u0433\u043E \u0431\u0435\u043B\u043A\u0430 \u043E\u0442 \u043E\u0431\u044B\u0447\u043D\u043E\u0433\u043E",
        content: "\u041F\u043E\u043B\u043D\u044B\u0439 \u0442\u0435\u043A\u0441\u0442 \u0441\u0442\u0430\u0442\u044C\u0438 \u043E \u043F\u0435\u043F\u0442\u0438\u0434\u0430\u0445...",
        category: "science",
        author: "\u0414\u0440. \u0420\u0443\u0431\u043B\u0435\u0432 \u041C.\u0421.",
        imageUrl: null
      },
      {
        title: "\u041F\u0438\u0442\u0430\u043D\u0438\u0435 \u0434\u043B\u044F \u0448\u043A\u043E\u043B\u044C\u043D\u0438\u043A\u0430: \u043A\u0430\u043A \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0442\u044C \u0440\u043E\u0441\u0442 \u0438 \u0438\u043C\u043C\u0443\u043D\u0438\u0442\u0435\u0442?",
        slug: "school-nutrition",
        excerpt: "\u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u0438 \u043F\u043E \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E\u043C\u0443 \u043F\u0438\u0442\u0430\u043D\u0438\u044E \u0434\u0435\u0442\u0435\u0439 \u0448\u043A\u043E\u043B\u044C\u043D\u043E\u0433\u043E \u0432\u043E\u0437\u0440\u0430\u0441\u0442\u0430",
        content: "\u041F\u043E\u043B\u043D\u044B\u0439 \u0442\u0435\u043A\u0441\u0442 \u0441\u0442\u0430\u0442\u044C\u0438 \u043E \u0434\u0435\u0442\u0441\u043A\u043E\u043C \u043F\u0438\u0442\u0430\u043D\u0438\u0438...",
        category: "science",
        author: "\u041D\u0443\u0442\u0440\u0438\u0446\u0438\u043E\u043B\u043E\u0433 \u041F\u0435\u0442\u0440\u043E\u0432\u0430 \u0410.\u0418.",
        imageUrl: null
      }
    ];
    articles2.forEach((a) => this.createArticle(a));
  }
  // Products
  async getProducts() {
    return Array.from(this.products.values());
  }
  async getProduct(id) {
    return this.products.get(id);
  }
  async getProductBySlug(slug) {
    return Array.from(this.products.values()).find((p) => p.slug === slug);
  }
  async createProduct(insertProduct) {
    const id = randomUUID();
    const product = {
      ...insertProduct,
      id,
      createdAt: /* @__PURE__ */ new Date()
    };
    this.products.set(id, product);
    return product;
  }
  // Articles
  async getArticles(category) {
    const articles2 = Array.from(this.articles.values());
    if (category) {
      return articles2.filter((a) => a.category === category);
    }
    return articles2;
  }
  async getArticle(id) {
    return this.articles.get(id);
  }
  async getArticleBySlug(slug) {
    return Array.from(this.articles.values()).find((a) => a.slug === slug);
  }
  async createArticle(insertArticle) {
    const id = randomUUID();
    const article = {
      ...insertArticle,
      id,
      publishedAt: /* @__PURE__ */ new Date(),
      createdAt: /* @__PURE__ */ new Date()
    };
    this.articles.set(id, article);
    return article;
  }
  // Contact Submissions
  async createContactSubmission(insertSubmission) {
    const id = randomUUID();
    const submission = {
      ...insertSubmission,
      id,
      createdAt: /* @__PURE__ */ new Date()
    };
    this.contactSubmissions.set(id, submission);
    return submission;
  }
  // Newsletter Subscriptions
  async createNewsletterSubscription(insertSubscription) {
    const id = randomUUID();
    const subscription = {
      ...insertSubscription,
      id,
      subscribedAt: /* @__PURE__ */ new Date()
    };
    this.newsletterSubscriptions.set(id, subscription);
    return subscription;
  }
};
var storage = new MemStorage();

// shared/schema.ts
import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
var products = pgTable("products", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description").notNull(),
  protein: integer("protein").notNull(),
  // grams
  composition: text("composition").notNull(),
  benefits: text("benefits").array().notNull(),
  usageInstructions: text("usage_instructions").notNull(),
  imageUrl: text("image_url").notNull(),
  category: text("category").notNull(),
  // 'broth', 'shake', 'yogurt', 'snack'
  availability: text("availability").notNull(),
  // 'available', 'coming-soon'
  createdAt: timestamp("created_at").defaultNow().notNull()
});
var insertProductSchema = createInsertSchema(products).omit({
  id: true,
  createdAt: true
});
var articles = pgTable("articles", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  excerpt: text("excerpt").notNull(),
  content: text("content").notNull(),
  category: text("category").notNull(),
  // 'science', 'recipes', 'interviews', 'stories'
  author: text("author").notNull(),
  imageUrl: text("image_url"),
  publishedAt: timestamp("published_at").defaultNow().notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull()
});
var insertArticleSchema = createInsertSchema(articles).omit({
  id: true,
  createdAt: true,
  publishedAt: true
});
var contactSubmissions = pgTable("contact_submissions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  phone: text("phone").notNull(),
  email: text("email").notNull(),
  message: text("message"),
  type: text("type").notNull(),
  // 'contact', 'consultation', 'newsletter'
  createdAt: timestamp("created_at").defaultNow().notNull()
});
var insertContactSubmissionSchema = createInsertSchema(contactSubmissions).omit({
  id: true,
  createdAt: true
}).extend({
  name: z.string().min(2, "\u0418\u043C\u044F \u0434\u043E\u043B\u0436\u043D\u043E \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u043C\u0438\u043D\u0438\u043C\u0443\u043C 2 \u0441\u0438\u043C\u0432\u043E\u043B\u0430"),
  phone: z.string().min(10, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430"),
  email: z.string().email("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0439 email")
});
var newsletterSubscriptions = pgTable("newsletter_subscriptions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  email: text("email").notNull().unique(),
  subscribedAt: timestamp("subscribed_at").defaultNow().notNull()
});
var insertNewsletterSubscriptionSchema = createInsertSchema(newsletterSubscriptions).omit({
  id: true,
  subscribedAt: true
}).extend({
  email: z.string().email("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0439 email")
});

// server/routes.ts
async function registerRoutes(app2) {
  app2.get("/api/products", async (_req, res) => {
    try {
      const products2 = await storage.getProducts();
      res.json(products2);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch products" });
    }
  });
  app2.get("/api/products/:slug", async (req, res) => {
    try {
      const product = await storage.getProductBySlug(req.params.slug);
      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }
      res.json(product);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch product" });
    }
  });
  app2.get("/api/articles", async (req, res) => {
    try {
      const category = req.query.category;
      const articles2 = await storage.getArticles(category);
      res.json(articles2);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch articles" });
    }
  });
  app2.get("/api/articles/:slug", async (req, res) => {
    try {
      const article = await storage.getArticleBySlug(req.params.slug);
      if (!article) {
        return res.status(404).json({ error: "Article not found" });
      }
      res.json(article);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch article" });
    }
  });
  app2.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      res.status(201).json({
        success: true,
        message: "\u0421\u043F\u0430\u0441\u0438\u0431\u043E \u0437\u0430 \u043E\u0431\u0440\u0430\u0449\u0435\u043D\u0438\u0435! \u041C\u044B \u0441\u0432\u044F\u0436\u0435\u043C\u0441\u044F \u0441 \u0432\u0430\u043C\u0438 \u0432 \u0431\u043B\u0438\u0436\u0430\u0439\u0448\u0435\u0435 \u0432\u0440\u0435\u043C\u044F.",
        submission
      });
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message });
      } else {
        res.status(500).json({ error: "Failed to submit contact form" });
      }
    }
  });
  app2.post("/api/newsletter", async (req, res) => {
    try {
      const validatedData = insertNewsletterSubscriptionSchema.parse(req.body);
      const subscription = await storage.createNewsletterSubscription(validatedData);
      res.status(201).json({
        success: true,
        message: "\u0421\u043F\u0430\u0441\u0438\u0431\u043E \u0437\u0430 \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0443! \u0412\u044B \u0431\u0443\u0434\u0435\u0442\u0435 \u043F\u043E\u043B\u0443\u0447\u0430\u0442\u044C \u043D\u0430\u0448\u0438 \u043D\u043E\u0432\u043E\u0441\u0442\u0438.",
        subscription
      });
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message });
      } else {
        res.status(500).json({ error: "Failed to subscribe to newsletter" });
      }
    }
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path2 from "path";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      ),
      await import("@replit/vite-plugin-dev-banner").then(
        (m) => m.devBanner()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets")
    }
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"]
    }
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(import.meta.dirname, "..", "dist", "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var app = express2();
app.use(express2.json({
  verify: (req, _res, buf) => {
    req.rawBody = buf;
  }
}));
app.use(express2.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path3 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path3.startsWith("/api")) {
      let logLine = `${req.method} ${path3} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = parseInt(process.env.PORT || "5000", 10);
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true
  }, () => {
    log(`serving on port ${port}`);
  });
})();
