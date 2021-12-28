-- DROP SCHEMA public;

CREATE SCHEMA public AUTHORIZATION postgres;
-- public.users definition

-- Drop table

-- DROP TABLE public.users;

CREATE TABLE public.users (
    "name" varchar NOT NULL,
    email varchar NOT NULL,
    id serial4 NOT NULL,
    CONSTRAINT users_pk PRIMARY KEY (id)
);
