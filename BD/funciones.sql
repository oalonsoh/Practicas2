use open2job;

delimiter $$
create function insertTecnologia (name varchar(100)) returns int
begin
declare id int default 0;
	insert into cv_techs values (default, name);
    set id = (select idcv_techs from cv_techs order by idcv_techs desc limit 1);
    return id;
end $$

use open2jobs;

delimiter $$
create function insertintereses (name varchar(100)) returns int
begin
declare id int default 0;
	insert into cv_hobbies values (default, name);
    set id = (select idcv_hobbies from cv_hobbies order by idcv_hobbies desc limit 1);
    return id;
end $$