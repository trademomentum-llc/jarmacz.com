import { z } from "zod";
import { eq, desc, asc } from "drizzle-orm";
import { createRouter, publicQuery, adminQuery } from "./middleware";
import { getDb } from "./queries/connection";
import { projects } from "../db/schema";

export const projectsRouter = createRouter({
  list: publicQuery
    .input(z.object({ status: z.string().optional() }).optional())
    .query(async ({ input }) => {
      const db = getDb();
      const conditions = [];
      if (input?.status) {
        conditions.push(eq(projects.status, input.status as "featured" | "archived" | "completed"));
      }
      const result = await db
        .select()
        .from(projects)
        .where(conditions.length > 0 ? conditions[0] : undefined)
        .orderBy(asc(projects.sortOrder), desc(projects.createdAt));
      return result;
    }),

  getBySlug: publicQuery
    .input(z.object({ slug: z.string() }))
    .query(async ({ input }) => {
      const db = getDb();
      const [project] = await db
        .select()
        .from(projects)
        .where(eq(projects.slug, input.slug));
      return project ?? null;
    }),

  create: adminQuery
    .input(
      z.object({
        title: z.string().min(1),
        slug: z.string().min(1),
        tagline: z.string().optional(),
        domain: z.string().optional(),
        description: z.string().optional(),
        status: z.enum(["featured", "archived", "completed"]).default("featured"),
        sortOrder: z.number().default(0),
        imageUrl: z.string().optional(),
        stats: z.array(z.object({ label: z.string(), value: z.string() })).optional(),
        tags: z.array(z.string()).optional(),
        links: z.array(z.object({ label: z.string(), url: z.string() })).optional(),
      })
    )
    .mutation(async ({ input }) => {
      const db = getDb();
      const [project] = await db.insert(projects).values(input).$returningId();
      return project;
    }),

  delete: adminQuery
    .input(z.object({ id: z.number() }))
    .mutation(async ({ input }) => {
      const db = getDb();
      await db.delete(projects).where(eq(projects.id, input.id));
      return { success: true };
    }),
});
