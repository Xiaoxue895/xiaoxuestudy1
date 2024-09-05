-- Step 1
-- JOIN the tables, matching FOREIGN KEYs to the corresponding PRIMARY KEY.
-- Your code here 
select bands.name as band_name,albums.title as album_title
from bands
join albums
on bands.id = albums.band_id;