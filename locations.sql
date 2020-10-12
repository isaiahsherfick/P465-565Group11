CREATE TABLE public.locations
(
    city character varying(50) COLLATE pg_catalog."default",
    id integer NOT NULL,
    state character varying(2) COLLATE pg_catalog."default" NOT NULL,
    type character varying(50) COLLATE pg_catalog."default" NOT NULL,
	--type field will be what kind of location it is.
	--ex: "hotel", "restaurant", "city"
    name character varying(50) COLLATE pg_catalog."default",
    CONSTRAINT locations_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE public.locations
    OWNER to ugcuvkvpcdaixu;
