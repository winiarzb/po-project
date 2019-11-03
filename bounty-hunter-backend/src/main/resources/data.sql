-- DICT --
INSERT INTO dict(value, type, version) VALUES ('CREATED', 'CONTRACT_STATUS', 0)
INSERT INTO dict(value, type, version) VALUES ('ACCEPTED', 'CONTRACT_STATUS', 0)
INSERT INTO dict(value, type, version) VALUES ('COMPLETED', 'CONTRACT_STATUS', 0)
INSERT INTO dict(value, type, version) VALUES ('APPROVED', 'CONTRACT_STATUS', 0)
INSERT INTO dict(value, type, version) VALUES ('CANCELED', 'CONTRACT_STATUS', 0)
INSERT INTO dict(value, type, version) VALUES ('ICY', 'PLANET_TYPE', 0)
INSERT INTO dict(value, type, version) VALUES ('OCEAN', 'PLANET_TYPE', 0)
INSERT INTO dict(value, type, version) VALUES ('HOT', 'PLANET_TYPE', 0)
INSERT INTO dict(value, type, version) VALUES ('COLD', 'PLANET_TYPE', 0)
INSERT INTO dict(value, type, version) VALUES ('DESERT', 'PLANET_TYPE', 0)
INSERT INTO dict(value, type, version) VALUES ('EXTREME', 'PRIORITY', 0)
INSERT INTO dict(value, type, version) VALUES ('HIGH', 'PRIORITY', 0)
INSERT INTO dict(value, type, version) VALUES ('MEDIUM', 'PRIORITY', 0)
INSERT INTO dict(value, type, version) VALUES ('LOW', 'PRIORITY', 0)
INSERT INTO dict(value, type, version) VALUES ('ADMIN', 'USER_ROLE', 0)
INSERT INTO dict(value, type, version) VALUES ('HUNTER', 'USER_ROLE', 0)
INSERT INTO dict(value, type, version) VALUES ('CLIENT', 'USER_ROLE', 0)
INSERT INTO dict(value, type, version) VALUES ('IMPOSSIBLE', 'THREAT_LEVEL', 0)
INSERT INTO dict(value, type, version) VALUES ('EXTREME', 'THREAT_LEVEL', 0)
INSERT INTO dict(value, type, version) VALUES ('HIGH', 'THREAT_LEVEL', 0)
INSERT INTO dict(value, type, version) VALUES ('MEDIUM', 'THREAT_LEVEL', 0)
INSERT INTO dict(value, type, version) VALUES ('LOW', 'THREAT_LEVEL', 0)
INSERT INTO dict(value, type, version) VALUES ('NONE', 'THREAT_LEVEL', 0)
-- GALAXY --
<<<<<<< HEAD
INSERT INTO galaxy(name) VALUES ('Galaxy Far, Far Away')
INSERT INTO galaxy(name) VALUES ('Eye of Sauron Galaxy')
INSERT INTO galaxy(name) VALUES ('Ymielinium Galaxy')
INSERT INTO galaxy(name) VALUES ('Cosmos Redshift 7')
-- PLANET --
INSERT INTO planet(name, planet_type, galaxy_id) VALUES ('Tatooine', '1','1')
INSERT INTO planet(name, planet_type, galaxy_id) VALUES ('Alderan', '2','1')
INSERT INTO planet(name, planet_type, galaxy_id) VALUES ('Hoth', '3','1')
INSERT INTO planet(name, planet_type, galaxy_id) VALUES ('Bespin', '4','1')
INSERT INTO planet(name, planet_type, galaxy_id) VALUES ('Coruscant', '5','1')

INSERT INTO planet(name, planet_type, galaxy_id) VALUES ('Middle-Earth', '1','2')

INSERT INTO planet(name, planet_type, galaxy_id) VALUES ('Ymielin', '6','3')

INSERT INTO planet(name, planet_type, galaxy_id) VALUES ('Centax-1', '3','4')
INSERT INTO planet(name, planet_type, galaxy_id) VALUES ('Centax-2', '3','4')
INSERT INTO planet(name, planet_type, galaxy_id) VALUES ('Centax-3', '2','4')
-- DISTRICT --
INSERT INTO district(name, planet_id) VALUES ('Federal District','1')
INSERT INTO district(name, planet_id) VALUES ('CoCo Town','1')
INSERT INTO district(name, planet_id) VALUES ('Senate Plaza','2')
INSERT INTO district(name, planet_id) VALUES ('Mid-Rim','3')
INSERT INTO district(name, planet_id) VALUES ('Old District','4')
INSERT INTO district(name, planet_id) VALUES ('Orowood','4')
INSERT INTO district(name, planet_id) VALUES ('Pillar Zone','5')

INSERT INTO district(name, planet_id) VALUES ('Mordor','6')
INSERT INTO district(name, planet_id) VALUES ('Gondor','6')
INSERT INTO district(name, planet_id) VALUES ('Rohan','6')
INSERT INTO district(name, planet_id) VALUES ('Eriador','6')

INSERT INTO district(name, planet_id) VALUES ('Cisowiec','7')
INSERT INTO district(name, planet_id) VALUES ('Jamnice','7')
INSERT INTO district(name, planet_id) VALUES ('Pasieczki','7')

INSERT INTO district(name, planet_id) VALUES ('Quadrant A-4','8')
INSERT INTO district(name, planet_id) VALUES ('Quadrant A-89','8')
INSERT INTO district(name, planet_id) VALUES ('Sector 2-12','9')
INSERT INTO district(name, planet_id) VALUES ('Sector 1459','9')
INSERT INTO district(name, planet_id) VALUES ('Grid 17','10')
INSERT INTO district(name, planet_id) VALUES ('Grid 19','10')
--PERSON--
INSERT INTO person(alias, birth_date, name) VALUES ('admin1', parsedatetime('01-01-2000', 'dd-MM-yyyy'), 'Staszek')
INSERT INTO person(alias, birth_date, name) VALUES ('hunter1', parsedatetime('01-01-2000', 'dd-MM-yyyy'), 'Jasiek')
INSERT INTO person(alias, birth_date, name) VALUES ('client1', parsedatetime('01-01-2000', 'dd-MM-yyyy'), 'Janusz')
INSERT INTO person(alias, birth_date, name) VALUES ('DarthVader', parsedatetime('01-01-2000', 'dd-MM-yyyy'), 'DarthVader')
INSERT INTO person(alias, birth_date, name) VALUES ('Thanos', parsedatetime('01-01-2000', 'dd-MM-yyyy'), 'Thanos')
INSERT INTO person(alias, birth_date, name) VALUES ('Stormtrooper', parsedatetime('01-01-2000', 'dd-MM-yyyy'), 'Stormtrooper')
--USER_ACCOUNT--
INSERT INTO user_account (enabled, password, user_role, username, person_id) VALUES (true, 'admin', '15', 'admin', '1')
INSERT INTO user_account (enabled, password, user_role, username, person_id) VALUES (true, 'hunter', '16', 'hunter', '2')
INSERT INTO user_account (enabled, password, user_role, username, person_id) VALUES (true, 'client', '17', 'client', '3')
--VICTIM--
INSERT INTO victim(age, force_sensitive, threat_level, person_id) VALUES ('19','true','19','4')
INSERT INTO victim(age, force_sensitive, threat_level, person_id) VALUES ('19','true','20','5')
INSERT INTO victim(age, force_sensitive, threat_level, person_id) VALUES ('19','true','22','6')
--REVIEW--
INSERT INTO review(comment, rating, would_recommend) VALUES ('Wszystko ok polecam huntera','8', 'true')
--CONTRACT--
INSERT INTO contract(contract_status, from_date, name, payment, priority, thru_date, client_id, district_id, hunter_id, review_id, victim_id) VALUES ('3', parsedatetime('01-10-2019', 'dd-MM-yyyy'), 'Quick job', '9000', '13', parsedatetime('30-10-2019', 'dd-MM-yyyy'), '3', '15', '2', '1', '6')
INSERT INTO contract(contract_status, from_date, name, payment, priority, thru_date, client_id, district_id, hunter_id, review_id, victim_id) VALUES ('1', parsedatetime('01-11-2019', 'dd-MM-yyyy'), 'Training Day', '99999999', '11', parsedatetime('30-10-2020', 'dd-MM-yyyy'), '3', '1', null, null, '4')
=======
>>>>>>> backend-initial
