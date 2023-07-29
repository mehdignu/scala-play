CREATE SCHEMA IF NOT EXISTS "books";

CREATE TABLE IF NOT EXISTS "books"."Book" (
  "isbn" VARCHAR PRIMARY KEY,
  "title" VARCHAR NOT NULL,
  "appendix_page" INTEGER NOT NULL
);

INSERT INTO "books"."Book" ("isbn", "title", "appendix_page") VALUES 
  ('9780300267662', 'Why Architecture Matters', 15),
  ('9783110914672', 'Reallexikon der deutschen Literaturwissenschaft', 27),
  ('9783110914675', 'The Death Penalty', 7),
  ('9783110545982', 'Qualitative Interviews', 33),
  ('9780520392304', 'Equality within Our Lifetimes', 19),
  ('9780520392314', 'A General Theory of Crime', 21),
  ('9780300268478', 'The Great New York Fire of 1776', 64);
