import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body against schema
      const contactData = insertContactSchema.parse(req.body);
      
      // Create contact in storage
      const contact = await storage.createContact(contactData);
      
      res.status(201).json({
        success: true,
        message: "Contact form submitted successfully",
        id: contact.id
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: "Validation error",
          errors: error.errors
        });
      } else {
        console.error("Contact form submission error:", error);
        res.status(500).json({
          success: false,
          message: "Internal server error"
        });
      }
    }
  });

  // Get all contacts (admin only - for future use)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json({
        success: true,
        contacts
      });
    } catch (error) {
      console.error("Error fetching contacts:", error);
      res.status(500).json({
        success: false,
        message: "Internal server error"
      });
    }
  });

  // Get contacts by inquiry type (admin only - for future use)
  app.get("/api/contacts/:inquiryType", async (req, res) => {
    try {
      const { inquiryType } = req.params;
      const contacts = await storage.getContactsByInquiryType(inquiryType);
      res.json({
        success: true,
        contacts
      });
    } catch (error) {
      console.error("Error fetching contacts by type:", error);
      res.status(500).json({
        success: false,
        message: "Internal server error"
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
