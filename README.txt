Instructions: Create tables first. Follow exact order of insertions.
Insert Zipcode, county, facility, dcn, offenseCategory.

Insert offender, inmate, offender_offense, inmate_offense (active and inactive), residence. 

Execute command to delete duplicates:
delete from offender where offender.DCNumber in
(select a.DCNumber from inmate a where a.DCNumber in (select b.DCNumber from offender b));

Insert alias, body_mark, incarceration_history, imprisoned 


Note: These values contain approx. half of the original database.
J02397 – cutoff point for inmates
L81155 – cutoff point for offenders
