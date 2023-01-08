use open2job;

create index ind_users on cv_users (email, rol);
create index ind_contactos on cv_contacto (id_user, provincia);
create index ind_experiencias on cv_experiencias (id_user, funcion);
create index ind_hardskills on cv_hardskills (id_user);
create index ind_hobbies on cv_hobbies (id_user);
create index ind_idiomas on cv_idiomas (id_user, idioma);
create index ind_objetivos on cv_objetivos (id_user);
create index ind_softskills on cv_softskills (id_user);
create index ind_techs on cv_techs (id_user, tecnologia);