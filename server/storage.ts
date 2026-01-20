import { 
  type Product, 
  type InsertProduct,
  type Article,
  type InsertArticle,
  type ContactSubmission,
  type InsertContactSubmission,
  type NewsletterSubscription,
  type InsertNewsletterSubscription
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Products
  getProducts(): Promise<Product[]>;
  getProduct(id: string): Promise<Product | undefined>;
  getProductBySlug(slug: string): Promise<Product | undefined>;
  createProduct(product: InsertProduct): Promise<Product>;

  // Articles
  getArticles(category?: string): Promise<Article[]>;
  getArticle(id: string): Promise<Article | undefined>;
  getArticleBySlug(slug: string): Promise<Article | undefined>;
  createArticle(article: InsertArticle): Promise<Article>;

  // Contact Submissions
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  
  // Newsletter Subscriptions
  createNewsletterSubscription(subscription: InsertNewsletterSubscription): Promise<NewsletterSubscription>;
}

export class MemStorage implements IStorage {
  private products: Map<string, Product>;
  private articles: Map<string, Article>;
  private contactSubmissions: Map<string, ContactSubmission>;
  private newsletterSubscriptions: Map<string, NewsletterSubscription>;

  constructor() {
    this.products = new Map();
    this.articles = new Map();
    this.contactSubmissions = new Map();
    this.newsletterSubscriptions = new Map();
    
    this.seedData();
  }

  private seedData() {
    // Seed products
    const products: InsertProduct[] = [
      {
        name: "Куриный пептидный бульон",
        slug: "chicken-broth",
        description: "Легкий и питательный бульон на основе куриного белка",
        protein: 25,
        composition: "Гидролизованный куриный коллаген, аминокислоты, минералы",
        benefits: ["Поддержка суставов", "Улучшение кожи", "Быстрое восстановление", "Укрепление иммунитета"],
        usageInstructions: "Развести в 200-250 мл горячей воды",
        imageUrl: "/images/chicken-broth.png",
        category: "broth",
        availability: "available",
      },
      {
        name: "Говяжий пептидный бульон",
        slug: "beef-broth",
        description: "Насыщенный бульон на основе говяжьего белка",
        protein: 25,
        composition: "Гидролизованный говяжий коллаген, аминокислоты, минералы",
        benefits: ["Набор мышечной массы", "Повышение выносливости", "Укрепление костей", "Поддержка метаболизма"],
        usageInstructions: "Развести в 200-250 мл горячей воды",
        imageUrl: "/images/beef-broth.png",
        category: "broth",
        availability: "available",
      },
    ];

    products.forEach(p => this.createProduct(p));

    // Seed articles
    const articles: InsertArticle[] = [
      {
        title: "Как правильно распределить белок в течение дня",
        slug: "protein-distribution",
        excerpt: "Научный подход к распределению белка для максимальной пользы организму",
        content: "Полный текст статьи о распределении белка...",
        category: "science",
        author: "Др. Рублев М.С.",
        imageUrl: null,
      },
      {
        title: "Пептиды vs обычный белок: в чем разница?",
        slug: "peptides-vs-protein",
        excerpt: "Разбираемся в отличиях пептидного белка от обычного",
        content: "Полный текст статьи о пептидах...",
        category: "science",
        author: "Др. Рублев М.С.",
        imageUrl: null,
      },
      {
        title: "Питание для школьника: как обеспечить рост и иммунитет?",
        slug: "school-nutrition",
        excerpt: "Рекомендации по правильному питанию детей школьного возраста",
        content: "Полный текст статьи о детском питании...",
        category: "science",
        author: "Нутрициолог Петрова А.И.",
        imageUrl: null,
      },
    ];

    articles.forEach(a => this.createArticle(a));
  }

  // Products
  async getProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getProduct(id: string): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async getProductBySlug(slug: string): Promise<Product | undefined> {
    return Array.from(this.products.values()).find(p => p.slug === slug);
  }

  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const id = randomUUID();
    const product: Product = {
      ...insertProduct,
      id,
      createdAt: new Date(),
    };
    this.products.set(id, product);
    return product;
  }

  // Articles
  async getArticles(category?: string): Promise<Article[]> {
    const articles = Array.from(this.articles.values());
    if (category) {
      return articles.filter(a => a.category === category);
    }
    return articles;
  }

  async getArticle(id: string): Promise<Article | undefined> {
    return this.articles.get(id);
  }

  async getArticleBySlug(slug: string): Promise<Article | undefined> {
    return Array.from(this.articles.values()).find(a => a.slug === slug);
  }

  async createArticle(insertArticle: InsertArticle): Promise<Article> {
    const id = randomUUID();
    const article: Article = {
      ...insertArticle,
      id,
      publishedAt: new Date(),
      createdAt: new Date(),
      imageUrl: insertArticle.imageUrl ?? null,
    };
    this.articles.set(id, article);
    return article;
  }

  // Contact Submissions
  async createContactSubmission(insertSubmission: InsertContactSubmission): Promise<ContactSubmission> {
    const id = randomUUID();
    const submission: ContactSubmission = {
      ...insertSubmission,
      id,
      createdAt: new Date(),
      message: insertSubmission.message ?? null,
    };
    this.contactSubmissions.set(id, submission);
    return submission;
  }

  // Newsletter Subscriptions
  async createNewsletterSubscription(insertSubscription: InsertNewsletterSubscription): Promise<NewsletterSubscription> {
    const id = randomUUID();
    const subscription: NewsletterSubscription = {
      ...insertSubscription,
      id,
      subscribedAt: new Date(),
    };
    this.newsletterSubscriptions.set(id, subscription);
    return subscription;
  }
}

export const storage = new MemStorage();
