import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const contacts = pgTable("contacts", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  fullName: text("full_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  company: text("company"),
  title: text("title"),
  inquiryType: text("inquiry_type").notNull(),
  serviceArea: text("service_area"),
  timeline: text("timeline"),
  budget: text("budget"),
  message: text("message").notNull(),
  accessibilityNeeds: text("accessibility_needs"),
  howDidYouHear: text("how_did_you_hear"),
  marketingConsent: boolean("marketing_consent").default(false),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertContactSchema = createInsertSchema(contacts).pick({
  fullName: true,
  email: true,
  phone: true,
  company: true,
  title: true,
  inquiryType: true,
  serviceArea: true,
  timeline: true,
  budget: true,
  message: true,
  accessibilityNeeds: true,
  howDidYouHear: true,
  marketingConsent: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertContact = z.infer<typeof insertContactSchema>;
export type Contact = typeof contacts.$inferSelect;
