CREATE TABLE "education_degrees" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "education_degrees_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"education_id" integer,
	"title" text,
	"description" text
);
--> statement-breakpoint
CREATE TABLE "education" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "education_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"title" text,
	"start" date,
	"end" date,
	"description" text
);
--> statement-breakpoint
ALTER TABLE "education_degrees" ADD CONSTRAINT "education_degrees_education_id_education_id_fk" FOREIGN KEY ("education_id") REFERENCES "public"."education"("id") ON DELETE cascade ON UPDATE no action;