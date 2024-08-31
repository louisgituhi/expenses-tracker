DO $$ BEGIN
 CREATE TYPE "public"."cost_category" AS ENUM('Transport', 'Bills', 'Shopping', 'Food', 'Clothes', 'Subscriptions', 'Footwear', 'Medicine', 'Barber', 'Airtime', 'Other');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "expenses" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"cost_category" "cost_category" DEFAULT 'Other' NOT NULL,
	"details" varchar(255) NOT NULL,
	"paid_on" timestamp DEFAULT now() NOT NULL,
	"amount" integer NOT NULL
);
