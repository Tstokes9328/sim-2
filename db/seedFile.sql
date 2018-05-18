create table if not exists houses (
    id serial primary key,
    name varchar(40),
    address text,
    city varchar(40),
    state varchar(10),
    zipcode integer,
    image text,
    mortgage integer,
    desired_rent integer
);

-- insert into houses
-- (name, address, city, state, zipcode, image, mortgage, desired_rent)
-- values
-- ('Beach House', 'Sunset BLVD', 'Las Angeles', 'California', 84004, 'https://i.ytimg.com/vi/WSttD7FadE8/maxresdefault.jpg', 4300, 1200);