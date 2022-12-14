PGDMP         :            
    z            otr %   12.12 (Ubuntu 12.12-0ubuntu0.20.04.1) #   14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)     ?           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            ?           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            ?           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            ?           1262    16384    otr    DATABASE     X   CREATE DATABASE otr WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'pt_BR.UTF-8';
    DROP DATABASE otr;
                postgres    false            ?            1259    24578    tasks    TABLE     ?   CREATE TABLE public.tasks (
    id integer NOT NULL,
    name text NOT NULL,
    description text,
    responsable integer,
    issue_date timestamp without time zone NOT NULL,
    done boolean DEFAULT false
);
    DROP TABLE public.tasks;
       public         heap    postgres    false            ?            1259    24576    tasks_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.tasks_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.tasks_id_seq;
       public          postgres    false    205            ?           0    0    tasks_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.tasks_id_seq OWNED BY public.tasks.id;
          public          postgres    false    204            ?            1259    16387    users    TABLE     O   CREATE TABLE public.users (
    id integer NOT NULL,
    name text NOT NULL
);
    DROP TABLE public.users;
       public         heap    postgres    false            ?            1259    16385    users_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    203            ?           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    202                       2604    24581    tasks id    DEFAULT     d   ALTER TABLE ONLY public.tasks ALTER COLUMN id SET DEFAULT nextval('public.tasks_id_seq'::regclass);
 7   ALTER TABLE public.tasks ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    205    204    205                       2604    16390    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    203    202    203            ?          0    24578    tasks 
   TABLE DATA           U   COPY public.tasks (id, name, description, responsable, issue_date, done) FROM stdin;
    public          postgres    false    205   ?       ?          0    16387    users 
   TABLE DATA           )   COPY public.users (id, name) FROM stdin;
    public          postgres    false    203   t       ?           0    0    tasks_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.tasks_id_seq', 5, true);
          public          postgres    false    204            ?           0    0    users_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.users_id_seq', 4, true);
          public          postgres    false    202                        2606    24587    tasks tasks_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.tasks
    ADD CONSTRAINT tasks_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.tasks DROP CONSTRAINT tasks_pkey;
       public            postgres    false    205                       2606    16395    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    203            !           2606    24588    tasks tasks_responsable_fkey    FK CONSTRAINT        ALTER TABLE ONLY public.tasks
    ADD CONSTRAINT tasks_responsable_fkey FOREIGN KEY (responsable) REFERENCES public.users(id);
 F   ALTER TABLE ONLY public.tasks DROP CONSTRAINT tasks_responsable_fkey;
       public          postgres    false    205    2846    203            ?   e   x???1
?0 ?????F\|????؀Ei???"?N­w\?d+??S?|?F7%??Ȼg-?s?
?B?`?????k+?.??MM(???kD? ??9#      ?      x?3??L?/?2?t?LJ,?????? 5B?     