-- Table: public.flights

-- DROP TABLE public.flights;

CREATE TABLE public.flights
(
    takeofftime timestamp with time zone,
    takeoffdate date NOT NULL,
    startcity character varying(50) COLLATE pg_catalog."default" NOT NULL,
    id integer NOT NULL,
    endcity character varying(50) COLLATE pg_catalog."default" NOT NULL,
    businessrate double precision,
    arrivaldate date NOT NULL,
    airline character varying(50) COLLATE pg_catalog."default" NOT NULL,
    coachrate double precision NOT NULL,
    arrivaltime timestamp with time zone NOT NULL,
    CONSTRAINT flights_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE public.flights
    OWNER to ugcuvkvpcdaixu;
