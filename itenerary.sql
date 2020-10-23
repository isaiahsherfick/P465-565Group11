-- Table: public.Itenerary

-- DROP TABLE public."Itenerary";

CREATE TABLE public."Itenerary"
(
    "ownerID" integer NOT NULL,
    "iteneraryID" integer NOT NULL,
    "listOfTasks" character varying(400)[] COLLATE pg_catalog."default",
    CONSTRAINT "Itenerary_pkey" PRIMARY KEY ("iteneraryID")
)

TABLESPACE pg_default;

ALTER TABLE public."Itenerary"
    OWNER to ugcuvkvpcdaixu;
