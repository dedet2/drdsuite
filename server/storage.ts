import { type User, type InsertUser, type Contact, type InsertContact } from "@shared/schema";
import { randomUUID } from "crypto";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Contact methods
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
  getContact(id: string): Promise<Contact | undefined>;
  getContactsByInquiryType(inquiryType: string): Promise<Contact[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private contacts: Map<string, Contact>;

  constructor() {
    this.users = new Map();
    this.contacts = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = randomUUID();
    const createdAt = new Date();
    const contact: Contact = { 
      ...insertContact,
      id, 
      createdAt,
      phone: insertContact.phone || null,
      company: insertContact.company || null,
      title: insertContact.title || null,
      serviceArea: insertContact.serviceArea || null,
      timeline: insertContact.timeline || null,
      budget: insertContact.budget || null,
      accessibilityNeeds: insertContact.accessibilityNeeds || null,
      howDidYouHear: insertContact.howDidYouHear || null,
      marketingConsent: insertContact.marketingConsent || false
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async getContact(id: string): Promise<Contact | undefined> {
    return this.contacts.get(id);
  }

  async getContactsByInquiryType(inquiryType: string): Promise<Contact[]> {
    return Array.from(this.contacts.values())
      .filter(contact => contact.inquiryType === inquiryType)
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }
}

export const storage = new MemStorage();
