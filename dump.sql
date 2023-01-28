--
-- PostgreSQL database dump
--

-- Dumped from database version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: classifications; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.classifications (
    id integer NOT NULL,
    name text NOT NULL
);


--
-- Name: classifications_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.classifications_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: classifications_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.classifications_id_seq OWNED BY public.classifications.id;


--
-- Name: curiosities; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.curiosities (
    id integer NOT NULL,
    author text NOT NULL,
    title text NOT NULL,
    description text NOT NULL,
    "classificationsId" integer NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


--
-- Name: curiosities_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.curiosities_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: curiosities_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.curiosities_id_seq OWNED BY public.curiosities.id;


--
-- Name: classifications id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.classifications ALTER COLUMN id SET DEFAULT nextval('public.classifications_id_seq'::regclass);


--
-- Name: curiosities id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.curiosities ALTER COLUMN id SET DEFAULT nextval('public.curiosities_id_seq'::regclass);


--
-- Data for Name: classifications; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.classifications VALUES (1, 'Cotidiano');
INSERT INTO public.classifications VALUES (2, 'Ciência');
INSERT INTO public.classifications VALUES (3, 'Universo');
INSERT INTO public.classifications VALUES (4, 'Profissional');
INSERT INTO public.classifications VALUES (5, 'Social');
INSERT INTO public.classifications VALUES (6, 'Natureza');


--
-- Data for Name: curiosities; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.curiosities VALUES (1, 'Nicolas', 'Porquê o ceu é azul?', 'Por causa da atmosfera e do sol...', 2, '2023-01-21 22:52:44.18532');
INSERT INTO public.curiosities VALUES (2, 'Nicolas', 'Do que o cérebro é formado?', 'Ele é formado por aproximadamente, 75% de água...', 2, '2023-01-21 22:52:52.871085');
INSERT INTO public.curiosities VALUES (3, 'Nicolas', 'Qual o tamanho do universo?', 'oito deitado...', 3, '2023-01-21 22:53:00.245597');


--
-- Name: classifications_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.classifications_id_seq', 6, true);


--
-- Name: curiosities_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.curiosities_id_seq', 4, true);


--
-- Name: classifications classifications_name_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.classifications
    ADD CONSTRAINT classifications_name_key UNIQUE (name);


--
-- Name: classifications classifications_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.classifications
    ADD CONSTRAINT classifications_pkey PRIMARY KEY (id);


--
-- Name: curiosities curiosities_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.curiosities
    ADD CONSTRAINT curiosities_pkey PRIMARY KEY (id);


--
-- Name: curiosities curiosities_title_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.curiosities
    ADD CONSTRAINT curiosities_title_key UNIQUE (title);


--
-- Name: curiosities curiosities_classificationsId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.curiosities
    ADD CONSTRAINT "curiosities_classificationsId_fkey" FOREIGN KEY ("classificationsId") REFERENCES public.classifications(id);


--
-- PostgreSQL database dump complete
--

