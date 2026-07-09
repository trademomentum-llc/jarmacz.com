import { z } from "zod";
import { eq, desc } from "drizzle-orm";
import { createRouter, publicQuery, adminQuery } from "./middleware";
import { getDb } from "./queries/connection";
import { contacts } from "../db/schema";

export const contactsRouter = createRouter({
  submit: publicQuery
    .input(
      z.object({
        name: z.string().min(1, "Name is required"),
        email: z.string().email("Valid email is required"),
        message: z.string().min(1, "Message is required"),
      })
    )
    .mutation(async ({ input }) => {
      const db = getDb();
      const [contact] = await db.insert(contacts).values({
        name: input.name,
        email: input.email,
        message: input.message,
      }).$returningId();
      return contact;
    }),

  list: adminQuery.query(async () => {
    const db = getDb();
    return db.select().from(contacts).orderBy(desc(contacts.createdAt));
  }),

  updateStatus: adminQuery
    .input(
      z.object({
        id: z.number(),
        status: z.enum(["new", "read", "replied"]),
      })
    )
    .mutation(async ({ input }) => {
      const db = getDb();
      await db
        .update(contacts)
        .set({ status: input.status })
        .where(eq(contacts.id, input.id));
      return { success: true };
    }),
});
