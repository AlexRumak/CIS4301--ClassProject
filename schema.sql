

CREATE TABLE general_user(
	PersonID int NOT NULL,
	Username varchar(20) NOT NULL UNIQUE,
	Password varchar(20) NOT NULL.
	PRIMARY KEY (PersonID)
);

CREATE TABLE administrator(
	AdminID int NOT NULL,
	Username varchar(20) NOT NULL UNIQUE,
	Password varchar(20) NOT NULL,
	PRIMARY KEY (AdminID)
);



CREATE TABLE inmate (
	DCNumber varchar(6) NOT NULL,
	LastName varchar(20),
	FistName varchar(20),
	MiddleName varchar(20),
	NameSuffix varchar(5),
	Race varchar(1),
	Sex varchar(1),
	Birthdate date,
	HairColor varchar(10),
	EyeColor varchar(10),
	Height int,
	Weight int,
	PrisonReleaseDate date,
	ReceiptDate date,
	ReleaseDateDescription varchar(255),
	Custody varchar(255),
	PRIMARY KEY (DCNumber)
);

CREATE TABLE offender (
	DCNumber varchar(6) NOT NULL,
	LastName varchar(20),
	FistName varchar(20),
	MiddleName varchar(20),
	NameSuffix varchar(5),
	Race varchar(1),
	Sex varchar(1),
	Birthdate date,
	HairColor varchar(10),
	EyeColor varchar(10),
	Height int,
	Weight int,
	SupervisionTermination date,
	ReceiptDate date,
	SupvType varchar(255),
	SupvStatus varchar(255),
	PRIMARY KEY (DCNumber)
);



CREATE TABLE offense_category (
	Name varchar(255),
	Description varchar(255)
);

CREATE TABLE Zipcode (
	Zipcode int NOT NULL,
	County varchar(20) NOT NULL
);

CREATE TABLE county (
	CountyID int NOT NULL,
	CountyName varchar(20) NOT NULL UNIQUE,
	Population int NOT NULL,
	PRIMARY KEY (CountyID)
);


CREATE TABLE facility (
	FacilityID int NOT NULL,
	Name varchar(255) NOT NULL,
	CountyID int,
	City varchar(20),
	ZipCode int,
	PRIMARY KEY (FacilityID),
	FOREIGN KEY (CountyID) references county(CountyID)
);


CREATE TABLE imprisoned (
	DCNumber varchar(6) NOT NULL,
	FacilityID int NOT NULL,
	FOREIGN KEY (FacilityID) references facility(FacilityID),
	CONSTRAINT fk_dcn1
		FOREIGN KEY (DCNumber) 
		references inmate(DCNumber)
		ON DELETE CASCADE 
);


CREATE TABLE dcn (
	DCNumber varchar(6) NOT NULL UNIQUE
);


CREATE TABLE alias (
	AliasID int NOT NULL,
	DCNumber varchar(6) NOT NULL,
	LastName varchar(20),
	FirstName varchar(20),
	MiddleName varchar(20),
	NameSuffix varchar(5),
	PRIMARY KEY (AliasID),
	CONSTRAINT fk_dcn2
		FOREIGN KEY (DCNumber) 
		references dcn(DCNumber)
		ON DELETE CASCADE
);


CREATE TABLE body_mark (
	MarkID int NOT NULL,
	DCNumber varchar(6) NOT NULL,
	Location varchar(255),
	Description varchar(255),
	PRIMARY KEY (MarkID),
	CONSTRAINT fk_dcn3
		FOREIGN KEY (DCNumber) 
		references inmate(DCNumber)
		ON DELETE CASCADE
);



CREATE TABLE residence (
/*
AddressLine1 can be as normal or:
DEPORTED - county_name............. and all other fields afterwards (except state) are blank
ABSCONDER - county_name.............. and all other fields afterwards (except state) are blank
ABSCONDER....... and City is "ABSCONDER", State is "FL", and Zipcode "99999"
county_name................ and all other fields afterwards are blank
OTHER STATE PRISON........ and AddressLine2 is "OS PRISON" and all the rest are blank
ABSCONDER...... and AddressLine2 is "ABSCONDER", and city, state, and zipcode are filled
*/
	ResidenceID int NOT NULL,
	DCNumber varchar(6) NOT NULL,
	AddressLine1 varchar(255),
	AddressLine2 varchar(255),
	City varchar(20),
	State varchar(20),
	ZipCode int,
	PRIMARY KEY (ResidenceID),
	CONSTRAINT fk_dcn4
		FOREIGN KEY (DCNumber) 
		references offender(DCNumber)
		ON DELETE CASCADE
);


CREATE TABLE inmate_offense (
	OffenseID int NOT NULL,	
	DCNumber varchar(6) NOT NULL,
	sequence int,
	OffenseDate date,
	AdjudicationDate date,
	OffenseCounty varchar(20),
	PrisonTerm varchar(20),
	Adjudication varchar(255),
	isActive varchar(1) NOT NULL,
	PRIMARY KEY (OffenseID),
	FOREIGN KEY (OffenseCounty) references county(CountyName),
	CONSTRAINT fk_dcn5
		FOREIGN KEY (DCNumber) 
		references inmate(DCNumber)
		ON DELETE CASCADE
);

CREATE TABLE offender_offense (
	OffenseID int NOT NULL,	
	DCNumber varchar(6) NOT NULL,
	sequence int,
	OffenseDate date,
	AdjudicationDate date,
	OffenseCounty varchar(20),
	OffenseTerm varchar(20),
	ProbationTerm varchar(20),
	ParoleTerm varchar(20),
	Adjudication varchar(255),
	PRIMARY KEY (OffenseID),
	FOREIGN KEY (OffenseCounty) references county(CountyName),
	CONSTRAINT fk_dcn6
		FOREIGN KEY (DCNumber) 
		references offender(DCNumber)
		ON DELETE CASCADE
);

CREATE TABLE incar_history (
	DCNumber varchar(6) NOT NULL,
	ReceiptDate date NOT NULL,
	ReleaseDate date,
	CONSTRAINT fk_dcn7
		FOREIGN KEY (DCNumber) 
		references inmate(DCNumber)
		ON DELETE CASCADE
);

