--
-- PostgreSQL database dump
--

-- Dumped from database version 16.4 (Postgres.app)
-- Dumped by pg_dump version 16.4 (Postgres.app)

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

--
-- Data for Name: User; Type: TABLE DATA; Schema: public; Owner: kingsleythomas
--

INSERT INTO public."User" (id, name, email, password, "emailVerified", role, "createdAt", "updatedAt", "stripeCustomerId") VALUES (59, 'Kingsley Thomas', 'kingsleythomas33@gmail.com', NULL, NULL, 'USER', '2024-08-12 10:34:52.48', '2024-08-12 10:34:52.927', 'cus_QeE2M0kSstiQPY');
INSERT INTO public."User" (id, name, email, password, "emailVerified", role, "createdAt", "updatedAt", "stripeCustomerId") VALUES (49, NULL, 'root@gmail.com', 'test', NULL, 'USER', '2024-08-06 09:53:08.433', '2024-08-06 10:24:46.987', NULL);
INSERT INTO public."User" (id, name, email, password, "emailVerified", role, "createdAt", "updatedAt", "stripeCustomerId") VALUES (55, NULL, 'roxana.viman321@gmail.com', '$2a$10$OEB8WVRGuAwaFrs.EqnKYegggwYzexPZALhDZdHg1cVAEZEmmrvtC', NULL, 'USER', '2024-08-07 14:30:14.867', '2024-08-07 14:30:15.285', 'cus_QcPh2pz0LtBeN5');
INSERT INTO public."User" (id, name, email, password, "emailVerified", role, "createdAt", "updatedAt", "stripeCustomerId") VALUES (58, 'John Doe', 'noreply@example.com', '$2a$10$OjXPmr3ZyWsomzG7AQ11Ze2F5emzM4MQ.9Xp47O4uAbuQcTmoUNUG', NULL, 'USER', '2024-08-08 12:40:15.453', '2024-08-08 12:40:15.868', 'cus_Qcl9NC82yfi5QX');
INSERT INTO public."User" (id, name, email, password, "emailVerified", role, "createdAt", "updatedAt", "stripeCustomerId") VALUES (56, 'Thomas Kingsley', 'kingsleypros@icloud.com', NULL, NULL, 'ADMIN', '2024-08-08 11:46:13.111', '2024-08-08 15:44:53.501', 'cus_QckHW7YijeNBje');


--
-- Data for Name: Account; Type: TABLE DATA; Schema: public; Owner: kingsleythomas
--

INSERT INTO public."Account" ("userId", type, provider, "providerAccountId", refresh_token, access_token, expires_at, token_type, scope, id_token, session_state, "createdAt", "updatedAt") VALUES (56, 'oauth', 'facebook', '3645981192290260', NULL, 'EAAL4uuMjhFMBO4BSqdh7YjmAHFqICnYMGcfZAt0kMUAxas1LiZAbvvXKMIlaVUzxjxgGP2SVhZAZAiMC66FuJfWHEVgLbzTLFpocgX4swNCUduKbuKTVzxv9C2nynLi4F1LCYwnQO7bRwhgCzKOGrbMZAHTgvdbvo2YVlqgFepYYyNO9xyUxfDAcxkM5CgWqEWkjWXrNUa3EbmnOyrvef7DTzZC7JIWR8nMl9ma3cdxxj2lZCqmm8VoO0KjRMhddjcZBtz7xjno7VEnimCCa5WndLvPniR15cu3aodtgD95MmFVZAbwZDZD', 1728301424, 'bearer', NULL, NULL, NULL, '2024-08-08 11:46:13.541', '2024-08-08 11:46:13.541');
INSERT INTO public."Account" ("userId", type, provider, "providerAccountId", refresh_token, access_token, expires_at, token_type, scope, id_token, session_state, "createdAt", "updatedAt") VALUES (59, 'oidc', 'google', '0342d338-b103-4cd0-8d6c-759f10ef69c5', NULL, 'ya29.a0AcM612zbB7z053BZNefK1jkqV5hBDZynMN8bJk29baSHcB4dtfKGvGAyyJtfcthBwqOgAudX__fH8BB8F8zEid_6k7GOeXUY1NXcHmyVFgWL4Qzim1xpA9N24T9qwMpDA3zS8id6duX2EjIwJ3Jgu9Vke_9q7dE_IKnyaCgYKATQSARMSFQHGX2Mis7mbLVbXpkVrChMbIEKCHQ0171', 1723462491, 'bearer', 'https://www.googleapis.com/auth/userinfo.email openid https://www.googleapis.com/auth/userinfo.profile', 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjQ1MjljNDA5Zjc3YTEwNmZiNjdlZTFhODVkMTY4ZmQyY2ZiN2MwYjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI4MzUyOTAwNjg2NjYtZmhsdTBqMHRvcWx2OTk3ZWdzYnVlZzdpaDNlcG5vbHIuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI4MzUyOTAwNjg2NjYtZmhsdTBqMHRvcWx2OTk3ZWdzYnVlZzdpaDNlcG5vbHIuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMTAyOTI0NjAxOTQyNTQwNjMwOTUiLCJlbWFpbCI6ImtpbmdzbGV5dGhvbWFzMzNAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiJ4bFdtLUk1ZVVIVFU3cnFJVE8yVVZ3IiwibmFtZSI6IktpbmdzbGV5IFRob21hcyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NKYUd2Yi1xMVpfTGtvSFM3THIxNExqandFamN0amVTN0VHSGVobEs4cDJkOC1raEE9czk2LWMiLCJnaXZlbl9uYW1lIjoiS2luZ3NsZXkiLCJmYW1pbHlfbmFtZSI6IlRob21hcyIsImlhdCI6MTcyMzQ1ODg5MiwiZXhwIjoxNzIzNDYyNDkyfQ.XoK9_2KV5JxmS6Gldc7KuygCYLXNMEagWDDz7USGVgOAo1jvKitrx5Wwctg63OVQIJ7NnE-Y1FeUCpdoFyYIfSqbLX9V4gkwYESOE-TUe5KYK3Rfvbc3Z_q18CrUE-je6y39M9BGWjU_eojoISOdIKPYoEQMr_O_GnS-9tOlARlpiDt7mDZLH2x2P8hLWq0fha-VVwadpaxtZjhU0xP2sBZvy2e6peyKzFz_r7Om_R4uiZjrg9NbNX7R-ycxAGHEqCKQ38c88Ue_DKPD92WJUzGA0bnAi2eJ9H9GJSLlE48pqITX7r0brSaiIs2q5sLri4cAXwha6Oxu5YmJy11TTg', NULL, '2024-08-12 10:34:52.933', '2024-08-12 10:34:52.933');
INSERT INTO public."Account" ("userId", type, provider, "providerAccountId", refresh_token, access_token, expires_at, token_type, scope, id_token, session_state, "createdAt", "updatedAt") VALUES (59, 'oidc', 'google', '681b0bda-090d-4389-9b11-382c171a7639', NULL, 'ya29.a0AcM612xfnrreVuiBWB2bhhcmC51TjStdFfqXmR6l3m6Fm1gjvktcX-ygbx1D6_r2H3zr4VBpyuawcFuqXYkEnsHk67Sl942-6tX4ZQ6Khsjk0YL_lVIHyf6sXwvSEd6dK1j7Kxaiwr7thFzVV4GFPVWFXNMM05SquBcjaCgYKAT8SARMSFQHGX2MiohTd4kgZoNYYELcYU6C7yA0171', 1723463359, 'bearer', 'https://www.googleapis.com/auth/userinfo.email openid https://www.googleapis.com/auth/userinfo.profile', 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjQ1MjljNDA5Zjc3YTEwNmZiNjdlZTFhODVkMTY4ZmQyY2ZiN2MwYjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI4MzUyOTAwNjg2NjYtZmhsdTBqMHRvcWx2OTk3ZWdzYnVlZzdpaDNlcG5vbHIuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI4MzUyOTAwNjg2NjYtZmhsdTBqMHRvcWx2OTk3ZWdzYnVlZzdpaDNlcG5vbHIuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMTAyOTI0NjAxOTQyNTQwNjMwOTUiLCJlbWFpbCI6ImtpbmdzbGV5dGhvbWFzMzNAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiI2aGxjdTFBY090NjVjcDhDNFdXUGlnIiwibmFtZSI6IktpbmdzbGV5IFRob21hcyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NKYUd2Yi1xMVpfTGtvSFM3THIxNExqandFamN0amVTN0VHSGVobEs4cDJkOC1raEE9czk2LWMiLCJnaXZlbl9uYW1lIjoiS2luZ3NsZXkiLCJmYW1pbHlfbmFtZSI6IlRob21hcyIsImlhdCI6MTcyMzQ1OTc2MCwiZXhwIjoxNzIzNDYzMzYwfQ.GtVmhqQ-nbbuBGX3Fq7-4dLWTAY-Q0UsPEcJngaktevZMxQAI_ZBELRoudKmEMFvIqbenXlZxivVpnbLJhgV1e6EWb4X_XuIRNvrjCLx1nUxhg3Ebr-pe07MLYvf5ya6ol-bDzjj7OfjbYQzuuatd1SgMvZSNoVAvXDr_ZkI5gWoi9CDc9SfJvtsdM2HRAfn46qZow-GAI8xBBiY81ghldCBirKWq6WrGAbZ_9XQOY25PV0rcOEQWVI56I_zwd_mKx9zFcMH_viC8UcJFoQTQ25N6FD11CQNBIyjwun06w5YlVns_tJUa25W0a7PwlcbZIpq1LcayrA4Qye67-bBCg', NULL, '2024-08-12 10:49:20.398', '2024-08-12 10:49:20.398');
INSERT INTO public."Account" ("userId", type, provider, "providerAccountId", refresh_token, access_token, expires_at, token_type, scope, id_token, session_state, "createdAt", "updatedAt") VALUES (59, 'oidc', 'google', 'ebf1e03a-2c92-4963-8fc3-778d05e05bb0', NULL, 'ya29.a0AcM612ynhrysM7OsEuRlewrpfIWD8EZI8rdBBgaS1xuL_TL27SjuqApSqq-kfbpS2hZyuomZIl6Hr3l4v6T4s5m_DeO5UKb0bpXMZN40gGhGPnHxy481Q1ejp2wQhWFIhFXCXGNZpG9xznrPq7NuLi6NJIiqqxccZ2jGaCgYKAUgSARMSFQHGX2MiY3U1P7zusno1OADTVGVJLQ0171', 1723463369, 'bearer', 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email openid', 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjQ1MjljNDA5Zjc3YTEwNmZiNjdlZTFhODVkMTY4ZmQyY2ZiN2MwYjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI4MzUyOTAwNjg2NjYtZmhsdTBqMHRvcWx2OTk3ZWdzYnVlZzdpaDNlcG5vbHIuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI4MzUyOTAwNjg2NjYtZmhsdTBqMHRvcWx2OTk3ZWdzYnVlZzdpaDNlcG5vbHIuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMTAyOTI0NjAxOTQyNTQwNjMwOTUiLCJlbWFpbCI6ImtpbmdzbGV5dGhvbWFzMzNAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiJWUUJySDlZb1JkQzFzdjV6Nk9HZlVBIiwibmFtZSI6IktpbmdzbGV5IFRob21hcyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NKYUd2Yi1xMVpfTGtvSFM3THIxNExqandFamN0amVTN0VHSGVobEs4cDJkOC1raEE9czk2LWMiLCJnaXZlbl9uYW1lIjoiS2luZ3NsZXkiLCJmYW1pbHlfbmFtZSI6IlRob21hcyIsImlhdCI6MTcyMzQ1OTc3MCwiZXhwIjoxNzIzNDYzMzcwfQ.L4vyILhcymwD-c8dQFrDmTDIV9IAa3GmtFF_HX67AP333Fb74fVtRn5j_Etf1WIQFYWoz8ZvVsOEDwU4CXIA4f0yRTqlJpei7J9Hi6MbDqDP_EYklpnoxSW9LAFuwAwwCAhfL8qsTCkyH19qzrteZKn-ZQ-O_OjQeOfLK15E7YsA2RL4inugr4h1RInglpWs6HmHmacwYoY8FtK7wEzzcGXa4nQu5_XOJf7qSebQkmq5oOZ7nx2xEytc8Cz_E4x19gZFDpwWQ6JI1DsJ98dVVn2sD69NYm8-VLT3zyq5Ea6QQnsRE__Y23hbkkNez-Iot0dnG4vHohpVeWXsiW5LhA', NULL, '2024-08-12 10:49:30.921', '2024-08-12 10:49:30.921');
INSERT INTO public."Account" ("userId", type, provider, "providerAccountId", refresh_token, access_token, expires_at, token_type, scope, id_token, session_state, "createdAt", "updatedAt") VALUES (59, 'oidc', 'google', 'ba513a38-059b-4e04-a8fd-4643815ed6cb', NULL, 'ya29.a0AcM612zFo3u3A7Ol2do8AxpWp9XGeaFrseJPv7cf0UjELrnEoZYCKlD4a47nbS_duwoUJuZ4-Mfcj7jNr4pD1esGlbNIC2BHdPFlAn1GEgEqEE_SSMmJf2C3wwY3D1b4gghI-RSyJr02hmFg6g4WLTUBjjPG4GVDXvmDaCgYKAYQSARMSFQHGX2MilxmtOpn49AsMxRMHfMqA2w0171', 1723466005, 'bearer', 'openid https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile', 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjQ1MjljNDA5Zjc3YTEwNmZiNjdlZTFhODVkMTY4ZmQyY2ZiN2MwYjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI4MzUyOTAwNjg2NjYtZmhsdTBqMHRvcWx2OTk3ZWdzYnVlZzdpaDNlcG5vbHIuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI4MzUyOTAwNjg2NjYtZmhsdTBqMHRvcWx2OTk3ZWdzYnVlZzdpaDNlcG5vbHIuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMTAyOTI0NjAxOTQyNTQwNjMwOTUiLCJlbWFpbCI6ImtpbmdzbGV5dGhvbWFzMzNAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiIxZnZ5RHJLNzdtZ0dsOG10ZEdNb3F3IiwibmFtZSI6IktpbmdzbGV5IFRob21hcyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NKYUd2Yi1xMVpfTGtvSFM3THIxNExqandFamN0amVTN0VHSGVobEs4cDJkOC1raEE9czk2LWMiLCJnaXZlbl9uYW1lIjoiS2luZ3NsZXkiLCJmYW1pbHlfbmFtZSI6IlRob21hcyIsImlhdCI6MTcyMzQ2MjQwNiwiZXhwIjoxNzIzNDY2MDA2fQ.UVUNg156gG43YtdFx5yMximHGf-AL6flkssWAPicIaSZfSJv0wIco2-CPDwG3HKTxXDN60MIF52vj9nOwjxsYE2Uq7h8NahTS9gBHieK4encUi5Qjle0oy9VPPT2mJJhJCQICojd9hoH7rr9vj5g9_v4-Iglp9ajkw6XhlrRmuGptV6OURLeXzZgRNJaK50hVG-wGnC3tOh8iQ_2FuOJULbQ-dgptqiZ_5hDXSnqIQ7I6HXIGiZmsbYuHo-p0x2Fbj9JP-3k9CcPdph13vuxEMSeTergCy1CwVRPUcKORT5_1hnwd2RikpmoDgNAxvvUjBBcJF0ZTi9oo_3fZxjmcQ', NULL, '2024-08-12 11:33:26.39', '2024-08-12 11:33:26.39');
INSERT INTO public."Account" ("userId", type, provider, "providerAccountId", refresh_token, access_token, expires_at, token_type, scope, id_token, session_state, "createdAt", "updatedAt") VALUES (55, 'credentials', 'credentials', '55', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-12 11:38:31.592', '2024-08-12 11:38:31.592');
INSERT INTO public."Account" ("userId", type, provider, "providerAccountId", refresh_token, access_token, expires_at, token_type, scope, id_token, session_state, "createdAt", "updatedAt") VALUES (59, 'oidc', 'google', 'ed1c531d-9722-4308-8cbc-23dad86ab419', NULL, 'ya29.a0AcM612ziZ5plngzZB1Vvda2dHVSGHQJn6Dk2_hh-vjFTkVyw8H8uJ5DHh3SXNanylJDEwjVjDPMqWSkIT_y-yTq03HyPg1GnJLgM42LZ2kFR5N6KNdzyPsbBLqoU2rh6GPFxUG0ngZOmF4uHY76LqHrcaDpAs40Lw_p9aCgYKAR0SARMSFQHGX2MifLHJMG_PDgLYxkAV7I9glg0171', 1723469889, 'bearer', 'openid https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email', 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjQ1MjljNDA5Zjc3YTEwNmZiNjdlZTFhODVkMTY4ZmQyY2ZiN2MwYjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI4MzUyOTAwNjg2NjYtZmhsdTBqMHRvcWx2OTk3ZWdzYnVlZzdpaDNlcG5vbHIuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI4MzUyOTAwNjg2NjYtZmhsdTBqMHRvcWx2OTk3ZWdzYnVlZzdpaDNlcG5vbHIuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMTAyOTI0NjAxOTQyNTQwNjMwOTUiLCJlbWFpbCI6ImtpbmdzbGV5dGhvbWFzMzNAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiJSVWUyM01VNUZHVlh0cXU0TWJGM05nIiwibmFtZSI6IktpbmdzbGV5IFRob21hcyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NKYUd2Yi1xMVpfTGtvSFM3THIxNExqandFamN0amVTN0VHSGVobEs4cDJkOC1raEE9czk2LWMiLCJnaXZlbl9uYW1lIjoiS2luZ3NsZXkiLCJmYW1pbHlfbmFtZSI6IlRob21hcyIsImlhdCI6MTcyMzQ2NjI5MCwiZXhwIjoxNzIzNDY5ODkwfQ.hAnocQEnFYJR2OH6vWqVUykAxvHGumhz6A0LbDgzJ_BEDyhcq9KxzJj998vqZh817Hr27euowMKLnujjhdPMz6dsRUXnrC37vuqhLCKXU1F8zLoAo1oqY3abxyDTl5GGj_JL-98ussROGbOAM_5mATKaqtMAkF4sRTfIa1rkf_YFSVcpUxe5Azb8js6HcHT8MtxGIxMoagnVya1dThekCB93lwYXSkYPMb95DNbSPxArY-gNhkEeCaBW0reMM_j3b3LF-DFRuM0ow26Y5iBf5K3mLZnJPRWlq7WHyGYWRIbkX7RpURoH5VzEuLh0_nKAZgu0bkm0_mQ9uCnUJMkdfA', NULL, '2024-08-12 12:38:10.573', '2024-08-12 12:38:10.573');
INSERT INTO public."Account" ("userId", type, provider, "providerAccountId", refresh_token, access_token, expires_at, token_type, scope, id_token, session_state, "createdAt", "updatedAt") VALUES (59, 'oidc', 'google', '84915556-b145-456c-9a37-b668185b5f29', NULL, 'ya29.a0AcM612ySjdBbb2mOsjlyB5xTl_3H_EizFt1Zs7CR8KyCgtFo4kwNGNFSQDwH1wAd9GxMKwOCCBJ6HRbQ0S_ZxLgz7cXr5BWzI70z15USa9-b2yxhH-EEvEq5gaJntAa-HIa0adA69cwgaK729Jvnx8nXXL1D0W4d2BUyaCgYKAXMSARMSFQHGX2MiCH4PJcIFh0b8n91RBMdsLg0171', 1723471218, 'bearer', 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email openid', 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjQ1MjljNDA5Zjc3YTEwNmZiNjdlZTFhODVkMTY4ZmQyY2ZiN2MwYjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI4MzUyOTAwNjg2NjYtZmhsdTBqMHRvcWx2OTk3ZWdzYnVlZzdpaDNlcG5vbHIuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI4MzUyOTAwNjg2NjYtZmhsdTBqMHRvcWx2OTk3ZWdzYnVlZzdpaDNlcG5vbHIuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMTAyOTI0NjAxOTQyNTQwNjMwOTUiLCJlbWFpbCI6ImtpbmdzbGV5dGhvbWFzMzNAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiJtM0hpcmFseEgza2FvS1pwLWRaczB3IiwibmFtZSI6IktpbmdzbGV5IFRob21hcyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NKYUd2Yi1xMVpfTGtvSFM3THIxNExqandFamN0amVTN0VHSGVobEs4cDJkOC1raEE9czk2LWMiLCJnaXZlbl9uYW1lIjoiS2luZ3NsZXkiLCJmYW1pbHlfbmFtZSI6IlRob21hcyIsImlhdCI6MTcyMzQ2NzYxOSwiZXhwIjoxNzIzNDcxMjE5fQ.esGRR1ai_wCNFSoSuovo4MtiEVvwzXnQBGryrYSJr1j8IIpuQIzn3m30-0MzYPn_Y20-QLk8FTkfbLRjy3xc859SuAhctc8rIFKlhm2SA3b8jyl71AAZcN7ZhMfDJ2n3uugJniQFjQNxSWo1R_PrayxWEcwnj4LC6yl_CTJfmfHi_TK90zodWKi5i41WoMehVu15RF8QeAY4RSCj9nWwaKEP04vFT0DTds7YfW57rdrsHUOvkqEbTMGw_1eINZFpW6E6q07IsOIBarJGAuX8Boy9xT2a42wIJcUUFWSXhoCgKbm84-k06MdJkGqlbFw7tNPv15ZmI2jt9QfXI466mA', NULL, '2024-08-12 13:00:19.715', '2024-08-12 13:00:19.715');


--
-- Data for Name: Categories; Type: TABLE DATA; Schema: public; Owner: kingsleythomas
--

INSERT INTO public."Categories" (id, name, description) VALUES (1, 'Pull', 'Tricot de laine ou de coton couvrant le haut du corps, qu''on enfile par la tête.');
INSERT INTO public."Categories" (id, name, description) VALUES (2, 'T-shirt', 'Maillot de coton à manches courtes ou longues, en forme de T.');
INSERT INTO public."Categories" (id, name, description) VALUES (4, 'Harnais', ' Équipement d''un animal de selle ou de trait.');
INSERT INTO public."Categories" (id, name, description) VALUES (3, 'Collier', 'Objet que l''on passe autour du cou d''un animal pour l''attacher ou le harnacher.');


--
-- Data for Name: OrderStripe; Type: TABLE DATA; Schema: public; Owner: kingsleythomas
--

INSERT INTO public."OrderStripe" (id, "customerId", "sessionId", "paymentIntentId", "totalAmount", currency, "paymentStatus", "createdAt", "updatedAt", "userId") VALUES (1, 'cus_QckHW7YijeNBje', 'cs_test_a1blNZoKBOh9HSZwU3IjiwF3Hrcbup8hsXHuXdyiecy0BRzMsJGHWCT459', '', 10, 'eur', '', '2024-08-08 20:25:08.066', '2024-08-08 20:25:08.066', 56);
INSERT INTO public."OrderStripe" (id, "customerId", "sessionId", "paymentIntentId", "totalAmount", currency, "paymentStatus", "createdAt", "updatedAt", "userId") VALUES (2, 'cus_QckHW7YijeNBje', 'cs_test_a1WBDma7fMHsPZE9xemFkxX0IApEKlvCedW9vwNwn9SYB5dZPoEt2CEkzd', '', 10, 'eur', '', '2024-08-08 20:43:43.976', '2024-08-08 20:43:43.976', 56);
INSERT INTO public."OrderStripe" (id, "customerId", "sessionId", "paymentIntentId", "totalAmount", currency, "paymentStatus", "createdAt", "updatedAt", "userId") VALUES (3, 'cus_QckHW7YijeNBje', 'cs_test_a18ypVtsqqcgLEyh1oOZjAbxuyWFN8dr8RF0Qb3R8INW3815gJTQhxUbAd', '', 10, 'eur', '', '2024-08-08 20:45:16.504', '2024-08-08 20:45:16.504', 56);
INSERT INTO public."OrderStripe" (id, "customerId", "sessionId", "paymentIntentId", "totalAmount", currency, "paymentStatus", "createdAt", "updatedAt", "userId") VALUES (4, 'cus_QckHW7YijeNBje', 'cs_test_a1ex8TTwVeb5gL23STOzoTANdtsgS7uj47uNqPiOHkOv7FYD668wYV2Bx6', '', 50, 'eur', '', '2024-08-09 14:58:39.768', '2024-08-09 14:58:39.768', 56);
INSERT INTO public."OrderStripe" (id, "customerId", "sessionId", "paymentIntentId", "totalAmount", currency, "paymentStatus", "createdAt", "updatedAt", "userId") VALUES (5, 'cus_QckHW7YijeNBje', 'cs_test_b1YJdM3sOrKW8ttT7ZZrTma9y5n3daXK23oCZr0AjVFlLCx57BEvmTf25R', '', 23, 'eur', '', '2024-08-09 15:05:44.22', '2024-08-09 15:05:44.22', 56);
INSERT INTO public."OrderStripe" (id, "customerId", "sessionId", "paymentIntentId", "totalAmount", currency, "paymentStatus", "createdAt", "updatedAt", "userId") VALUES (6, 'cus_QeE2M0kSstiQPY', 'cs_test_a1aV5qodK1z3OsW268Nzu5xKDOXGdC4aNBQz3IE6AGwLN2lMasDH3I2fKP', '', 13, 'eur', '', '2024-08-12 12:38:23.95', '2024-08-12 12:38:23.95', 59);
INSERT INTO public."OrderStripe" (id, "customerId", "sessionId", "paymentIntentId", "totalAmount", currency, "paymentStatus", "createdAt", "updatedAt", "userId") VALUES (7, 'cus_QeE2M0kSstiQPY', 'cs_test_a1wTRWXLTAv7IszS1UCJDDag7TPagQNhrr9nhRMd9OrenXvSAjaeoXQynD', '', 10, 'eur', '', '2024-08-12 12:51:13.486', '2024-08-12 12:51:13.486', 59);
INSERT INTO public."OrderStripe" (id, "customerId", "sessionId", "paymentIntentId", "totalAmount", currency, "paymentStatus", "createdAt", "updatedAt", "userId") VALUES (8, 'cus_QckHW7YijeNBje', 'cs_test_a1uV6zCCHGtdFMkIreOJhEqGz8tikfoOMSahopO01YnqXI2QgLVr9mAaee', '', 10, 'eur', '', '2024-08-12 14:02:52.165', '2024-08-12 14:02:52.165', 56);


--
-- Data for Name: OrderItemStripe; Type: TABLE DATA; Schema: public; Owner: kingsleythomas
--

INSERT INTO public."OrderItemStripe" (id, name, description, quantity, price, "orderId", image) VALUES (1, 'Pull rose ', 'Offrez à votre compagnon à quatre pattes un confort et un style incomparables avec ce ravissant pull rose. Conçu pour allier douceur, chaleur et esthétique, ce pull est le choix parfait pour garder votre chien au chaud pendant les journées fraîches tout en le faisant ressembler à une véritable petite star.', 1, 1000, 1, '/items/pull-rose.jpeg');
INSERT INTO public."OrderItemStripe" (id, name, description, quantity, price, "orderId", image) VALUES (2, 'Pull rose ', 'Offrez à votre compagnon à quatre pattes un confort et un style incomparables avec ce ravissant pull rose. Conçu pour allier douceur, chaleur et esthétique, ce pull est le choix parfait pour garder votre chien au chaud pendant les journées fraîches tout en le faisant ressembler à une véritable petite star.', 1, 1000, 2, '/items/pull-rose.jpeg');
INSERT INTO public."OrderItemStripe" (id, name, description, quantity, price, "orderId", image) VALUES (3, 'Pull rose ', 'Offrez à votre compagnon à quatre pattes un confort et un style incomparables avec ce ravissant pull rose. Conçu pour allier douceur, chaleur et esthétique, ce pull est le choix parfait pour garder votre chien au chaud pendant les journées fraîches tout en le faisant ressembler à une véritable petite star.', 1, 1000, 3, '/items/pull-rose.jpeg');
INSERT INTO public."OrderItemStripe" (id, name, description, quantity, price, "orderId", image) VALUES (4, 'Pull rose ', 'Offrez à votre compagnon à quatre pattes un confort et un style incomparables avec ce ravissant pull rose. Conçu pour allier douceur, chaleur et esthétique, ce pull est le choix parfait pour garder votre chien au chaud pendant les journées fraîches tout en le faisant ressembler à une véritable petite star.', 5, 1000, 4, '/items/pull-rose.jpeg');
INSERT INTO public."OrderItemStripe" (id, name, description, quantity, price, "orderId", image) VALUES (5, 'Pull rose ', 'Offrez à votre compagnon à quatre pattes un confort et un style incomparables avec ce ravissant pull rose. Conçu pour allier douceur, chaleur et esthétique, ce pull est le choix parfait pour garder votre chien au chaud pendant les journées fraîches tout en le faisant ressembler à une véritable petite star.', 1, 1000, 5, '/items/pull-rose.jpeg');
INSERT INTO public."OrderItemStripe" (id, name, description, quantity, price, "orderId", image) VALUES (6, 'Harnais noir', 'Garantissez la sécurité et le confort de votre chien avec ce harnais noir élégant et robuste. Conçu pour les promenades quotidiennes et les activités en plein air, ce harnais est l''accessoire parfait pour tout chien actif. Il offre un contrôle optimal et une distribution uniforme de la pression, protégeant ainsi la santé et le bien-être de votre compagnon.', 1, 1300, 5, '/items/harnais-noir.jpeg');
INSERT INTO public."OrderItemStripe" (id, name, description, quantity, price, "orderId", image) VALUES (7, 'Harnais noir', 'Garantissez la sécurité et le confort de votre chien avec ce harnais noir élégant et robuste. Conçu pour les promenades quotidiennes et les activités en plein air, ce harnais est l''accessoire parfait pour tout chien actif. Il offre un contrôle optimal et une distribution uniforme de la pression, protégeant ainsi la santé et le bien-être de votre compagnon.', 1, 1300, 6, '/items/harnais-noir.jpeg');
INSERT INTO public."OrderItemStripe" (id, name, description, quantity, price, "orderId", image) VALUES (8, 'Pull rose ', 'Offrez à votre compagnon à quatre pattes un confort et un style incomparables avec ce ravissant pull rose. Conçu pour allier douceur, chaleur et esthétique, ce pull est le choix parfait pour garder votre chien au chaud pendant les journées fraîches tout en le faisant ressembler à une véritable petite star.', 1, 1000, 7, '/items/pull-rose.jpeg');
INSERT INTO public."OrderItemStripe" (id, name, description, quantity, price, "orderId", image) VALUES (9, 'Pull rose ', 'Offrez à votre compagnon à quatre pattes un confort et un style incomparables avec ce ravissant pull rose. Conçu pour allier douceur, chaleur et esthétique, ce pull est le choix parfait pour garder votre chien au chaud pendant les journées fraîches tout en le faisant ressembler à une véritable petite star.', 1, 1000, 8, '/items/pull-rose.jpeg');


--
-- Data for Name: Orders; Type: TABLE DATA; Schema: public; Owner: kingsleythomas
--



--
-- Data for Name: Products; Type: TABLE DATA; Schema: public; Owner: kingsleythomas
--

INSERT INTO public."Products" (id, name, description, price, image, quantity, size, is_available, "categoriesId") VALUES (2, 'Harnais noir', 'Garantissez la sécurité et le confort de votre chien avec ce harnais noir élégant et robuste. Conçu pour les promenades quotidiennes et les activités en plein air, ce harnais est l''accessoire parfait pour tout chien actif. Il offre un contrôle optimal et une distribution uniforme de la pression, protégeant ainsi la santé et le bien-être de votre compagnon.', 13.000000000000000000000000000000, '/items/harnais-noir.jpeg', 98, '', true, 4);
INSERT INTO public."Products" (id, name, description, price, image, quantity, size, is_available, "categoriesId") VALUES (1, 'Pull rose ', 'Offrez à votre compagnon à quatre pattes un confort et un style incomparables avec ce ravissant pull rose. Conçu pour allier douceur, chaleur et esthétique, ce pull est le choix parfait pour garder votre chien au chaud pendant les journées fraîches tout en le faisant ressembler à une véritable petite star.', 10.000000000000000000000000000000, '/items/pull-rose.jpeg', 91, '', true, 1);
INSERT INTO public."Products" (id, name, description, price, image, quantity, size, is_available, "categoriesId") VALUES (16, 'Harnais bleu', 'Avec ce harnais bleu, votre chien bénéficiera d''un équipement de qualité supérieure qui assure à la fois sécurité et confort. Idéal pour les promenades, les randonnées ou les séances d''entraînement, ce harnais deviendra rapidement un incontournable pour chaque sortie avec votre fidèle compagnon.', 12.000000000000000000000000000000, '/items/harnais-bleu.jpeg', 100, '', true, 4);
INSERT INTO public."Products" (id, name, description, price, image, quantity, size, is_available, "categoriesId") VALUES (3, 'Harnais vert a fleur', 'Avec ce harnais vert à fleurs, votre chien ne passera pas inaperçu. Parfait pour les sorties au parc, les randonnées ou simplement les promenades quotidiennes, ce harnais est l’accessoire idéal pour allier style et praticité. Offrez à votre fidèle compagnon un look rafraîchissant et printanier tout en assurant sa sécurité et son confort.', 14.000000000000000000000000000000, '/items/harnais-vert.jpeg', 100, '', true, 4);
INSERT INTO public."Products" (id, name, description, price, image, quantity, size, is_available, "categoriesId") VALUES (4, 'Harnais rose', ' Harnais Rose pour Chien Ajoutez une touche de charme et de douceur aux promenades de votre chien avec ce harnais rose élégant. Conçu pour allier confort, sécurité et esthétique, ce harnais est l''accessoire idéal pour votre compagnon à quatre pattes, quelle que soit l''occasion.', 8.000000000000000000000000000000, '/items/harnais-rose.jpeg', 100, '', true, 4);
INSERT INTO public."Products" (id, name, description, price, image, quantity, size, is_available, "categoriesId") VALUES (5, 'Collier rouge', 'Apportez une touche de sophistication et de robustesse aux accessoires de votre chien avec ce collier rouge élégant. Conçu pour allier style, confort et durabilité, ce collier est parfait pour les promenades quotidiennes et les occasions spéciales.', 8.000000000000000000000000000000, '/items/collier-rouge.jpeg', 100, '', true, 3);
INSERT INTO public."Products" (id, name, description, price, image, quantity, size, is_available, "categoriesId") VALUES (6, 'Collier rose', 'Offrez à votre chien une touche de charme et de délicatesse avec ce collier rose élégant. Conçu pour être aussi fonctionnel que beau, ce collier est l''accessoire parfait pour votre compagnon à quatre pattes, alliant confort, sécurité et style.', 9.000000000000000000000000000000, '/items/collier-rose.jpeg', 100, '', true, 3);
INSERT INTO public."Products" (id, name, description, price, image, quantity, size, is_available, "categoriesId") VALUES (7, 'Collier bleu', 'Ajoutez une touche de fraîcheur et de sophistication aux accessoires de votre chien avec ce collier bleu élégant. Conçu pour combiner style, confort et durabilité, ce collier est parfait pour toutes les occasions, des promenades quotidiennes aux événements spéciaux.', 12.000000000000000000000000000000, '/items/collier-bleu.jpeg', 100, '', true, 3);
INSERT INTO public."Products" (id, name, description, price, image, quantity, size, is_available, "categoriesId") VALUES (8, 'Collier noir', 'Avec ce collier noir, votre chien se distinguera par son élégance et sa sobriété. Parfait pour les promenades quotidiennes, les sorties au parc ou les événements spéciaux, ce collier combine esthétique et fonctionnalité, assurant que votre compagnon soit toujours à la pointe de la mode tout en étant confortable et en sécurité.', 5.000000000000000000000000000000, '/items/collier-noir.jpeg', 100, '', true, 3);
INSERT INTO public."Products" (id, name, description, price, image, quantity, size, is_available, "categoriesId") VALUES (9, 'T-shirt blanc', 'Donnez à votre chien un look décontracté et stylé avec ce t-shirt blanc classique. Parfait pour les journées chaudes ou comme couche supplémentaire en hiver, ce t-shirt allie confort, praticité et élégance pour que votre compagnon à quatre pattes se sente à l''aise en toute occasion.', 7.000000000000000000000000000000, '/items/tshirt-blanc.jpeg', 100, '', true, 2);
INSERT INTO public."Products" (id, name, description, price, image, quantity, size, is_available, "categoriesId") VALUES (11, 'T-shirt rose', 'Apportez une touche de douceur et de style à la garde-robe de votre chien avec ce t-shirt rose adorable. Idéal pour les journées chaudes ou comme couche légère supplémentaire en intérieur, ce t-shirt allie confort, praticité et élégance, faisant de votre compagnon à quatre pattes la star de toutes les sorties.', 4.000000000000000000000000000000, '/items/tshirt-rose.jpeg', 100, '', true, 2);
INSERT INTO public."Products" (id, name, description, price, image, quantity, size, is_available, "categoriesId") VALUES (12, 'T-shirt rouge', 'Ajoutez une touche de vivacité et de style à la garde-robe de votre chien avec ce t-shirt rouge éclatant. Parfait pour les journées chaudes ou comme couche légère supplémentaire en intérieur, ce t-shirt allie confort, praticité et élégance, faisant de votre compagnon à quatre pattes le centre de l’attention lors de chaque sortie.', 6.000000000000000000000000000000, '/items/tshirt-rouge.jpeg', 100, '', true, 2);
INSERT INTO public."Products" (id, name, description, price, image, quantity, size, is_available, "categoriesId") VALUES (13, 'Pull violet', 'Apportez une touche de chaleur et de style à votre chien avec ce magnifique pull violet. Conçu pour offrir confort et chaleur pendant les journées fraîches, ce pull est parfait pour les promenades automnales ou hivernales, tout en ajoutant une touche de sophistication à l''apparence de votre compagnon à quatre pattes.', 15.000000000000000000000000000000, '/items/pull-violet.jpeg', 100, '', true, 1);
INSERT INTO public."Products" (id, name, description, price, image, quantity, size, is_available, "categoriesId") VALUES (14, 'Pull gris', 'Offrez à votre chien confort et élégance avec ce pull gris classique. Idéal pour les journées fraîches, ce pull est conçu pour garder votre compagnon à quatre pattes au chaud tout en ajoutant une touche de sophistication à son look.', 14.000000000000000000000000000000, '/items/pull-gris.jpeg', 100, '', true, 1);
INSERT INTO public."Products" (id, name, description, price, image, quantity, size, is_available, "categoriesId") VALUES (15, 'T-Shirt vert', 'Apportez une touche de fraîcheur et de vitalité à la garde-robe de votre chien avec ce t-shirt vert vibrant. Parfait pour les journées chaudes ou comme couche légère supplémentaire en intérieur, ce t-shirt allie confort, praticité et élégance, faisant de votre compagnon à quatre pattes une star lors de chaque sortie.', 8.000000000000000000000000000000, '/items/tshirt-vert.jpeg', 100, '', true, 2);
INSERT INTO public."Products" (id, name, description, price, image, quantity, size, is_available, "categoriesId") VALUES (10, 'Pull marron', 'Gardez votre chien au chaud et élégant avec ce pull marron classique. Conçu pour offrir confort et chaleur pendant les journées fraîches, ce pull est parfait pour les promenades automnales ou hivernales, tout en ajoutant une touche de sophistication à l''apparence de votre compagnon à quatre pattes.', 13.000000000000000000000000000000, '/items/pull-marron.jpeg', 100, '', true, 1);


--
-- Data for Name: ProductOnOrder; Type: TABLE DATA; Schema: public; Owner: kingsleythomas
--



--
-- Data for Name: Session; Type: TABLE DATA; Schema: public; Owner: kingsleythomas
--



--
-- Data for Name: VerificationToken; Type: TABLE DATA; Schema: public; Owner: kingsleythomas
--



--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: kingsleythomas
--

INSERT INTO public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) VALUES ('48141aac-a0de-46ab-a0e3-22cb77a37423', '294f67460700bf1b240ed894c37deadcd0db1403e7eaf57990f2069252b948ef', '2024-07-08 14:50:27.027413+02', '20240708125027_initalisation', NULL, NULL, '2024-07-08 14:50:27.010797+02', 1);
INSERT INTO public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) VALUES ('fbbb34fc-9ca2-4076-944f-ae589b6dccd7', '49ae5b573e4214e488c95af95958fea9216ff6e0739f4eaefd2c0fd1ac3eabc5', '2024-08-07 16:04:45.664845+02', '20240807140445_add_to_stripcustomer_id', NULL, NULL, '2024-08-07 16:04:45.662461+02', 1);
INSERT INTO public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) VALUES ('568bac1d-6fe9-44c6-a2ea-b56e8c5a932b', '31ec3359fbaa274e27e28bbbc93012f4a1bbbae2514b2c2317db9a792d300c97', '2024-08-08 21:46:01.351655+02', '20240808194601_add_user_relation_to_order', NULL, NULL, '2024-08-08 21:46:01.341185+02', 1);
INSERT INTO public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) VALUES ('08d64469-86a6-4892-b10f-446821231059', 'a562419f30ecad2c79843c0eb743d7deb4e3a1ea64ad4bb91a6ddb2e4cb3cb9f', '2024-08-08 21:54:37.388523+02', '20240808195437_add_user_relation_to_order_correction', NULL, NULL, '2024-08-08 21:54:37.363512+02', 1);


--
-- Name: Categories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: kingsleythomas
--

SELECT pg_catalog.setval('public."Categories_id_seq"', 4, true);


--
-- Name: OrderItemStripe_id_seq; Type: SEQUENCE SET; Schema: public; Owner: kingsleythomas
--

SELECT pg_catalog.setval('public."OrderItemStripe_id_seq"', 9, true);


--
-- Name: OrderStripe_id_seq; Type: SEQUENCE SET; Schema: public; Owner: kingsleythomas
--

SELECT pg_catalog.setval('public."OrderStripe_id_seq"', 8, true);


--
-- Name: Orders_id_seq; Type: SEQUENCE SET; Schema: public; Owner: kingsleythomas
--

SELECT pg_catalog.setval('public."Orders_id_seq"', 1, false);


--
-- Name: Products_id_seq; Type: SEQUENCE SET; Schema: public; Owner: kingsleythomas
--

SELECT pg_catalog.setval('public."Products_id_seq"', 49, true);


--
-- Name: User_id_seq; Type: SEQUENCE SET; Schema: public; Owner: kingsleythomas
--

SELECT pg_catalog.setval('public."User_id_seq"', 59, true);


--
-- PostgreSQL database dump complete
--

