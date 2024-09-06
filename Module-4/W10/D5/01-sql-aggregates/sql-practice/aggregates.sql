-- select * from cats;

-- select * from toys;

-- select toys.id,toys.name,toys.cat_id,cats.id,cats.name
-- from toys
-- join cats
-- on toys.cat_id = cats.id
select * from cats
where birth_year = (select min(birth_year) from cats);

select * from cats
where birth_year = (select max(birth_year) from cats);