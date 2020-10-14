-- Table: public.flights

-- DROP TABLE public.flights;

CREATE TABLE public.flights
(
    takeofftime timestamp with time zone,
    takeoffdate date NOT NULL,
    startcity character varying(50) COLLATE pg_catalog."default" NOT NULL,
    "isTwoWay" integer NOT NULL,
    id integer NOT NULL,
    firstclassrate double precision,
    endcity character varying(50) COLLATE pg_catalog."default" NOT NULL,
    coachrate timestamp with time zone,
    businessrate double precision,
    arrivaldate date NOT NULL,
    airline character varying(50) COLLATE pg_catalog."default" NOT NULL,
    arrivaltime timestamp without time zone[],
    CONSTRAINT flights_pkey PRIMARY KEY (id)
	--table seems overcomplicated, room for refactoring later. For now, everything seems necessary.
)

TABLESPACE pg_default;

ALTER TABLE public.flights
    OWNER to ugcuvkvpcdaixu;

