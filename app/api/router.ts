import { authRouter } from "./auth-router";
import { notesRouter } from "./notes-router";
import { projectsRouter } from "./projects-router";
import { contactsRouter } from "./contacts-router";
import { createRouter, publicQuery } from "./middleware";

export const appRouter = createRouter({
  ping: publicQuery.query(() => ({ ok: true, ts: Date.now() })),
  auth: authRouter,
  notes: notesRouter,
  projects: projectsRouter,
  contacts: contactsRouter,
});

export type AppRouter = typeof appRouter;
