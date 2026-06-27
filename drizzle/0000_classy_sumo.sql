CREATE TABLE "contact_submissions" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"project_type" text DEFAULT '' NOT NULL,
	"budget" text DEFAULT '' NOT NULL,
	"message" text NOT NULL,
	"handled" boolean DEFAULT false NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "projects" (
	"id" serial PRIMARY KEY NOT NULL,
	"slug" text NOT NULL,
	"name" text NOT NULL,
	"client" text DEFAULT '' NOT NULL,
	"summary" text DEFAULT '' NOT NULL,
	"problem" text DEFAULT '' NOT NULL,
	"approach" text DEFAULT '' NOT NULL,
	"result" text DEFAULT '' NOT NULL,
	"metric" text DEFAULT '' NOT NULL,
	"stack" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"images" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"tags" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"live_url" text DEFAULT '' NOT NULL,
	"published" boolean DEFAULT false NOT NULL,
	"sort_order" integer DEFAULT 0 NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "projects_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "site_settings" (
	"id" integer PRIMARY KEY DEFAULT 1 NOT NULL,
	"hero_headline" text DEFAULT '' NOT NULL,
	"value_prop" text DEFAULT '' NOT NULL,
	"about_snippet" text DEFAULT '' NOT NULL,
	"email" text DEFAULT '' NOT NULL,
	"response_promise" text DEFAULT '' NOT NULL,
	"photo_url" text DEFAULT '' NOT NULL,
	"socials" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
