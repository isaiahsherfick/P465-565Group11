-- Table: public.reviews

-- DROP TABLE public.reviews;

CREATE TABLE public.reviews
(
    review_id integer NOT NULL,
    ownder_id integer NOT NULL,
    unique_location_key character varying(150) COLLATE pg_catalog."default",
    stars_out_of_five integer NOT NULL,
    review_header character varying(50) COLLATE pg_catalog."default",
    review_body character varying(400) COLLATE pg_catalog."default",
    CONSTRAINT reviews_pkey PRIMARY KEY (review_id)
)

TABLESPACE pg_default;

ALTER TABLE public.reviews
    OWNER to ugcuvkvpcdaixu;
