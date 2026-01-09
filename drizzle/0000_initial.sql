-- Drizzle migration: Initial schema
-- Run with: pnpm db:migrate
-- Demonstrates: Database migrations

CREATE TABLE IF NOT EXISTS "feedback" (
	"id" text PRIMARY KEY NOT NULL,
	"full_name" text NOT NULL,
	"email" text NOT NULL,
	"ticket_count" integer NOT NULL,
	"agree_to_terms" integer NOT NULL,
	"submitted_at" integer NOT NULL,
	"created_at" integer DEFAULT (unixepoch()) NOT NULL
);

CREATE TABLE IF NOT EXISTS "events" (
	"id" text PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"description" text NOT NULL,
	"date" integer NOT NULL,
	"location" text NOT NULL,
	"capacity" integer,
	"attendees" integer DEFAULT 0,
	"tenant" text DEFAULT 'default' NOT NULL,
	"created_at" integer DEFAULT (unixepoch()) NOT NULL
);
