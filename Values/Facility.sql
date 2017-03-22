CREATE TABLE facility (
	FacilityID int NOT NULL,
	Name varchar(255) NOT NULL,
	CountyID int NOT NULL,
	City varchar(20),
	Zipcode int,
	PRIMARY KEY (FacilityID)
  /*FOREIGN KEY (CountyID) references county(CountyID)*/
);
SET DEFINE OFF;
INSERT ALL
	INTO facility VALUES (1,'ALABAMA','68',NULL,NULL)
	INTO facility VALUES (2,'APALACHEE EAST UNIT',31,'SNEADS',32460)
	INTO facility VALUES (3,'APALACHEE WEST UNIT',31,'SNEADS',32460)
	INTO facility VALUES (4,'ARIZONA',68,NULL,NULL)
	INTO facility VALUES (5,'ARKANSAS',68,NULL,NULL)
	INTO facility VALUES (6,'ATLANTIC C.R.C.',50,'WEST PALM BEACH',33411)
	INTO facility VALUES (7,'AVON PARK C.I.',53,'AVON PARK',33825)
	INTO facility VALUES (8,'AVON PARK WORK CAMP',53,'AVON PARK',33825)
	INTO facility VALUES (9,'BAKER C.I.',2,'SANDERSON',32087)
	INTO facility VALUES (10,'BAKER RE-ENTRY CENTR',2,'SANDERSON',32087)
	INTO facility VALUES (11,'BAKER ROK CAMP',2,'SANDERSON',32087)
	INTO facility VALUES (12,'BAY C.F.',3,'PANAMA CITY',32404)
	INTO facility VALUES (13,'BERRYDALE FRSTRY CMP',16,'JAY',32565)
	INTO facility VALUES (14,'BIG PINE KEY R.P.',44,'BIG PINE KEY',33043)
	INTO facility VALUES (15,'BLACKWATER C.F.',57,'MILTON',32583)
	INTO facility VALUES (16,'BRADENTON BRIDGE',40,'BRADENTON',34203)
	INTO facility VALUES (17,'BREVARD',5,'COCOA',32927)
	INTO facility VALUES (18,'BRIDGES OF COCOA',5,'COCOA',32927)
	INTO facility VALUES (19,'BRIDGES OF JACKSONVI',15,'JACKSONVILLE',32254)
	INTO facility VALUES (20,'BRIDGES OF LAKE CITY',12,'LAKE CITY',32055)
	INTO facility VALUES (21,'BRIDGES OF ORLANDO',48,'ORLANDO',32808)
	INTO facility VALUES (22,'BRIDGES OF SANTA FE',1,'GAINESVILLE',32609)
	INTO facility VALUES (23,'BROWARD',6,'FORT LAUDERDALE',33301)
	INTO facility VALUES (24,'CALHOUN C.I.',7,'BLOUNTSTOWN',32424)
	INTO facility VALUES (25,'CALHOUN WORK CAMP',7,'BLOUNTSTOWN',32424)
	INTO facility VALUES (26,'CALIFORNIA',68,NULL,NULL)
	INTO facility VALUES (27,'CENTRAL OFFICE',36,'TALLAHASSEE',32399)
	INTO facility VALUES (28,'CENTURY C.I.',16,'CENTURY',32535)
	INTO facility VALUES (29,'CENTURY WORK CAMP',16,'CENTURY',32535)
	INTO facility VALUES (30,'CFRC-EAST',48,'ORLANDO',32808)
	INTO facility VALUES (31,'CFRC-MAIN',48,'ORLANDO',32808)
	INTO facility VALUES (32,'CFRC-SOUTH',48,'ORLANDO',32808)
	INTO facility VALUES (33,'CHARLOTTE C.I.',8,'PUNTA GORDA',33955)
	INTO facility VALUES (34,'COLORADO',68,NULL,NULL)
	INTO facility VALUES (35,'COLUMBIA ANNEX',12,'LAKE CITY',32025)
	INTO facility VALUES (36,'COLUMBIA C.I.',12,'LAKE CITY',32025)
	INTO facility VALUES (37,'COLUMBIA WORK CAMP',12,'LAKE CITY',32025)
	INTO facility VALUES (38,'CONNECTICUT',68,NULL,NULL)
	INTO facility VALUES (39,'CROSS CITY C.I.',14,'CROSS CITY',32628)
	INTO facility VALUES (40,'CROSS CITY EAST UNIT',14,'CROSS CITY',32628)
	INTO facility VALUES (41,'CROSS CITY WORK CAMP',14,'CROSS CITY',32628)
	INTO facility VALUES (42,'DADE C.I.',43,'FLORIDA CITY',33034)
	INTO facility VALUES (43,'DELAWARE',68,NULL,NULL)
	INTO facility VALUES (44,'DEPT OF JUV. JUSTICE',36,'TALLAHASSEE',32399)
	INTO facility VALUES (45,'DESOTO ANNEX',13,'ARCADIA',34266)
	INTO facility VALUES (46,'DESOTO WORK CAMP',13,'ARCADIA',34266)
	INTO facility VALUES (47,'FL.WOMENS RECPN.CTR',41,'OCALA',34482)
	INTO facility VALUES (48,'FLORIDA STATE PRISON',4,'RAIFORD',32084)
	INTO facility VALUES (49,'FORT PIERCE C.R.C.',56,'FORT PIERCE',34982)
	INTO facility VALUES (50,'FRANKLIN C.I.',18,'CARRABELLE',32322)
	INTO facility VALUES (51,'FRANKLIN CI WORK CMP',18,'CARRABELLE',32322)
SELECT * FROM dual;

INSERT ALL
	INTO facility VALUES (52,'FSP WEST UNIT',4,'RAIFORD',32084)
	INTO facility VALUES (53,'FT. MYERS WORK CAMP',35,'FORT MYERS',33994)
	INTO facility VALUES (54,'GADSDEN C.F.',19,'QUINCY',32351)
	INTO facility VALUES (55,'GADSDEN RE-ENTRY CTR',19,'HAVANA',32351)
	INTO facility VALUES (56,'GAINESVILLE W.C.',1,'GAINESVILLE',32641)
	INTO facility VALUES (57,'GEORGIA',68,NULL,NULL)
	INTO facility VALUES (58,'GRACEVILLE C.F.',31,'GRACEVILLE',32440)
	INTO facility VALUES (59,'GRACEVILLE WORK CAMP',31,'GRACEVILLE',32440)
	INTO facility VALUES (60,'GULF C.I.',22,'WEWAHITCHKA',32465)
	INTO facility VALUES (61,'GULF C.I. – ANNEX',22,'WEWAHITCHKA',32465)
	INTO facility VALUES (62,'GULF FORESTRY CAMP',22,'WEWAHITCHKA',32465)
	INTO facility VALUES (63,'HAMILTON ANNEX',23,'JASPER',32052)
	INTO facility VALUES (64,'HAMILTON C.I.',23,'JASPER',32052)
	INTO facility VALUES (65,'HAMILTON WORK CAMP',23,'JASPER',32052)
	INTO facility VALUES (66,'HARDEE C.I.',24,'BOWLING GREEN',33834)
	INTO facility VALUES (67,'HARDEE WORK CAMP',24,'BOWLING GREEN',33834)
	INTO facility VALUES (68,'HERNANDO',26,'BROOKSVILLE',34604)
	INTO facility VALUES (69,'HERNANDO C.I.',26,'BROOKSVILLE',34604)
	INTO facility VALUES (70,'HILLSBORO',28,'TAMPA',33619)
	INTO facility VALUES (71,'HOLLYWOOD C.R.C.',6,'PEMBROKE PINES',33025)
	INTO facility VALUES (72,'HOLMES C.I.',29,'BONIFAY',32425)
	INTO facility VALUES (73,'ILLINOIS',68,NULL,NULL)
	INTO facility VALUES (74,'INDIANA',68,NULL,NULL)
	INTO facility VALUES (75,'IOWA',68,NULL,NULL)
	INTO facility VALUES (76,'JACKSON C.I.',31,'MALONE',32445)
	INTO facility VALUES (77,'JACKSON WORK CAMP',31,'MALONE',32445)
	INTO facility VALUES (78,'JACKSONVILLE BRIDGE',15,'JACKSONVILLE',32254)
	INTO facility VALUES (79,'JEFFERSON C.I.',32,'MONTICELLO',32344)
	INTO facility VALUES (80,'KANSAS',68,NULL,NULL)
	INTO facility VALUES (81,'KENTUCKY',68,NULL,NULL)
	INTO facility VALUES (82,'KISSIMMEE C.R.C.',49,'KISSIMMEE',34744)
	INTO facility VALUES (83,'LAKE C.I.',34,'CLERMONT',34715)
	INTO facility VALUES (84,'LAKE CITY C.F.',12,'LAKE CITY',32055)
	INTO facility VALUES (85,'LANCASTER C.I.',20,'TRENTON',32693)
	INTO facility VALUES (86,'LANCASTER W.C.',20,'TRENTON',32693)
	INTO facility VALUES (87,'LARGO R.P.',52,'CLEARWATER',33760)
	INTO facility VALUES (88,'LAWTEY C.I.',4,'LAWTEY',32058)
	INTO facility VALUES (89,'LEON',36,'TALLAHASSEE',32304)
	INTO facility VALUES (90,'LIBERTY C.I.',38,'BRISTOL',32321)
	INTO facility VALUES (91,'LIBERTY SOUTH UNIT',38,'BRISTOL',32321)
	INTO facility VALUES (92,'LOWELL ANNEX',41,'OCALA',34482)
	INTO facility VALUES (93,'LOWELL C.I.',41,'OCALA',34482)
	INTO facility VALUES (94,'LOXAHATCHEE R.P.',50,'WEST PALM BEACH',33411)
	INTO facility VALUES (95,'MADISON C.I.',39,'MADISON',32340)
	INTO facility VALUES (96,'MADISON WORK CAMP',39,'MADISON',32340)
	INTO facility VALUES (97,'MARION C.I.',41,'OCALA',34475)
	INTO facility VALUES (98,'MARION WORK CAMP',41,'OCALA',34475)
	INTO facility VALUES (99,'MARTIN C.I.',42,'INDIANTOWN',34956)
	INTO facility VALUES (100,'MARYLAND',68,NULL,NULL)
	INTO facility VALUES (101,'MASSACHUSETTS',68,NULL,NULL)
SELECT * FROM DUAL;

INSERT ALL
	INTO facility VALUES (102,'MAYO C.I. ANNEX',33,'MAYO',32066)
	INTO facility VALUES (103,'MAYO WORK CAMP',33,'MAYO',32066)
	INTO facility VALUES (104,'MIAMI NORTH C.R.C.',43,'MIAMI',33166)
	INTO facility VALUES (105,'MIAMI-DADE',43,'FLORIDA CITY',33034)
	INTO facility VALUES (106,'MICHIGAN',68,NULL,NULL)
	INTO facility VALUES (107,'MINNESOTA',68,NULL,NULL)
	INTO facility VALUES (108,'MISSISSIPPI',68,NULL,NULL)
	INTO facility VALUES (109,'MISSOURI',68,NULL,NULL)
	INTO facility VALUES (110,'MONROE',44,'MARATHON',33050)
	INTO facility VALUES (111,'MOORE HAVEN C.F.',21,'MOORE HAVEN',33471)
	INTO facility VALUES (112,'NASSAU',45,'YULEE',32097)
	INTO facility VALUES (113,'NEBRASKA',68,NULL,NULL)
	INTO facility VALUES (114,'NEVADA',68,NULL,NULL)
	INTO facility VALUES (115,'NEW HAMPSHIRE',68,NULL,NULL)
	INTO facility VALUES (116,'NEW JERSEY',68,NULL,NULL)
	INTO facility VALUES (117,'NEW MEXICO',68,NULL,NULL)
	INTO facility VALUES (118,'NORTH CAROLINA',68,NULL,NULL)
	INTO facility VALUES (119,'NWFRC ANNEX.',67,'CHIPLEY',32428)
	INTO facility VALUES (120,'NWFRC MAIN UNIT.',67,'CHIPLEY',32428)
	INTO facility VALUES (121,'OHIO',68,NULL,NULL)
	INTO facility VALUES (122,'OKALOOSA C.I.',46,'CRESTVIEW',32539)
	INTO facility VALUES (123,'OKALOOSA WORK CAMP',46,'CRESTVIEW',32539)
	INTO facility VALUES (124,'OKEECHOBEE C.I.',47,'OKEECHOBEE',34972)
	INTO facility VALUES (125,'OKEECHOBEE WORK CAMP',47,'OKEECHOBEE',34972)
	INTO facility VALUES (126,'OKLAHOMA',68,NULL,NULL)
	INTO facility VALUES (127,'OPA LOCKA C.R.C.',43,'OPA LOCKA',33054)
	INTO facility VALUES (128,'ORANGE',48,'ORLANDO',32802)
	INTO facility VALUES (129,'OREGON',68,NULL,NULL)
	INTO facility VALUES (130,'ORLANDO C.R.C.',68,'ORLANDO',32831)
	INTO facility VALUES (131,'PALM BEACH',50,'WEST PALM BEACH',33406)
	INTO facility VALUES (132,'PANAMA CITY C.R.C',3,'PANAMA CITY',32405)
	INTO facility VALUES (133,'PASCO',51,'LAND O LAKES',34637)
	INTO facility VALUES (134,'PENNSYLVANIA',68,NULL,NULL)
	INTO facility VALUES (135,'PENSACOLA C.R.C.',16,'PENSACOLA',32501)
	INTO facility VALUES (136,'PINELLAS',52,'CLEARWATER',33762)
	INTO facility VALUES (137,'PINELLAS C.R.C.',52,'CLEARWATER',33760)
	INTO facility VALUES (138,'POLK',53,'POLK CITY',33868)
	INTO facility VALUES (139,'POLK C.I.',53,'POLK CITY',33868)
	INTO facility VALUES (140,'POLK WORK CAMP',53,'POLK CITY',33868)
	INTO facility VALUES (141,'PUTNAM',54,'EAST PALATKA',32131)
	INTO facility VALUES (142,'PUTNAM C.I.',54,'EAST PALATKA',32131)
	INTO facility VALUES (143,'QUINCY ANNEX',19,'QUINCY',32351)
	INTO facility VALUES (144,'R.M.C WORK CAMP',63,'LAKE BUTLER',32054)
	INTO facility VALUES (145,'R.M.C. – MAIN UNIT',63,'LAKE BUTLER',32054)
	INTO facility VALUES (146,'R.M.C. - WEST UNIT',63,'LAKE BUTLER',32054)
	INTO facility VALUES (147,'REENTRY CTR OF OCALA',41,'OCALA',34470)
	INTO facility VALUES (148,'RHODE ISLAND',68,NULL,NULL)
	INTO facility VALUES (149,'S.F.R.C SOUTH UNIT',43,'DORAL',33178)
	INTO facility VALUES (150,'S.F.R.C.',43,'DORAL',33178)
	INTO facility VALUES (151,'SAGO PALM RE-ENTRY C',50,'PAHOKEE',33476)
SELECT * FROM dual;

INSERT ALL
	INTO facility VALUES (152,'SANTA ROSA',57,'MILTON',32583)
	INTO facility VALUES (153,'SANTA ROSA ANNEX',57,'MILTON',32583)
	INTO facility VALUES (154,'SANTA ROSA C.I.',57,'MILTON',32583)
	INTO facility VALUES (155,'SANTA ROSA WORK CMP',57,'MILTON',32583)
	INTO facility VALUES (156,'SARASOTA',58,'SARASOTA',34237)
	INTO facility VALUES (157,'SHISA HOUSE EAST',36,'TALLAHASSEE',32301)
	INTO facility VALUES (158,'SHISA HOUSE WEST',36,'TALLAHASSEE',32301)
	INTO facility VALUES (159,'SOUTH BAY C.F.',50,'SOUTH BAY',33493)
	INTO facility VALUES (160,'SOUTH CAROLINA',68,NULL,NULL)
	INTO facility VALUES (161,'ST. JOHNS',55,'ST. AUGUSTINE',32084)
	INTO facility VALUES (162,'ST. PETE C.R.C.',52,'ST. PETERSBURG',33711)
	INTO facility VALUES (163,'SUMTER',60,'BUSHNELL',33513)
	INTO facility VALUES (164,'SUMTER  C.I.',60,'BUSHNELL',33513)
	INTO facility VALUES (165,'SUMTER ANNEX',60,'BUSHNELL',33513)
	INTO facility VALUES (166,'SUMTER B.T.U',60,'BUSHNELL',33513)
	INTO facility VALUES (167,'SUMTER WORK CAMP',60,'BUSHNELL',33513)
	INTO facility VALUES (168,'SUNCOAST C.R.C. (FEM)',52,'ST. PETERSBURG',33702)
	INTO facility VALUES (169,'SUWANNEE C.I.',61,'LIVE OAK',32060)
	INTO facility VALUES (170,'SUWANNEE C.I. ANNEX',61,'LIVE OAK',32060)
	INTO facility VALUES (171,'SUWANNEE WORK CAMP',61,'LIVE OAK',32060)
	INTO facility VALUES (172,'TALLAHASSEE C.R.C.',36,'TALLAHASSEE',32305)
	INTO facility VALUES (173,'TAYLOR ANNEX',62,'PERRY',32348)
	INTO facility VALUES (174,'TAYLOR C.I.',62,'PERRY',32348)
	INTO facility VALUES (175,'TAYLOR WORK CAMP',62,'PERRY',32348)
	INTO facility VALUES (176,'TEXAS',68,NULL,NULL)
	INTO facility VALUES (177,'TOMOKA C.I.',64,'DAYTONA BEACH',32124)
	INTO facility VALUES (178,'TOMOKA CRC-285',64,'DAYTONA BEACH',32124)
	INTO facility VALUES (179,'TOMOKA CRC-290',64,'DAYTONA BEACH',32124)
	INTO facility VALUES (180,'TOMOKA CRC-298',64,'DAYTONA BEACH',32124)
	INTO facility VALUES (181,'TOMOKA WORK CAMP',64,'DAYTONA BEACH',32124)
	INTO facility VALUES (182,'TTH OF BARTOW',53,'BARTOW',33830)
	INTO facility VALUES (183,'TTH OF DINSMORE',15,'JACKSONVILLE',32219)
	INTO facility VALUES (184,'TTH OF KISSIMMEE',49,'KISSIMMEE',34744)
	INTO facility VALUES (185,'TTH OF TARPON SPRING',52,'TARPON SPRINGS',34689)
	INTO facility VALUES (186,'TURNING POINT C.R.C',6,'POMPANO BEACH',33060)
	INTO facility VALUES (187,'UNION C.I.',63,'RAIFORD',32083)
	INTO facility VALUES (188,'UNION WORK CAMP',63,'RAIFORD',32083)
	INTO facility VALUES (189,'VERMONT',68,NULL,NULL)
	INTO facility VALUES (190,'VIRGINIA',68,NULL,NULL)
	INTO facility VALUES (191,'VOLUSIA',64,'DAYTONA BEACH',32124)
	INTO facility VALUES (192,'W. PALM BEACH C.R.C.',50,'WEST PALM BEACH',33411)
	INTO facility VALUES (193,'WAKULLA C.I.',65,'CRAWFORDVILLE',32327)
	INTO facility VALUES (194,'WAKULLA WORK CAMP',65,'CRAWFORDVILLE',32327)
	INTO facility VALUES (195,'WALTON C.I.',66,'DEFUNIAK SPRINGS',32433)
	INTO facility VALUES (196,'WASHINGTON STATE',68,NULL,NULL)
	INTO facility VALUES (197,'WEST VIRGINIA',68,NULL,NULL)
	INTO facility VALUES (198,'WISCONSIN',68,NULL,NULL)
	INTO facility VALUES (199,'ZEPHYRHILLS C.I.',51,'ZEPHYRHILLS',33541)
SELECT * FROM dual;
	
