use open2job;

-- Inserts cv_contacto
select * from cv_contacto;

insert into cv_contacto values (default, "correo2@dominio.es", "666666666", null, "Calle Falsa, nº 123", "Barcelona", "08001", "Barcelona", 1, "Soltero", "1984-05-05", "H", "https://linkedin.es", default, default, default, default);
insert into cv_contacto values (default, "correo3@dominio.es", "600000002", "700000002", "Calle Mentirosa, nº 123", "Zaragoza", "50001", "Zárágózá", 0, "Casado", "1985-01-05", "H", "https://linkedin.es", "https://facebook.com", default, default, default);
insert into cv_contacto values (default, "correo4@dominio.es", "600000003", null, "Calle de la Iniquidad, nº 123", "Barcelona", "08001", "Barcelona", 1, "Divorciado", "1884-05-01", "H", "https://linkedin.es", "https://facebook.com", "https://instagram.com", default, default);

-- Inserts cv_experiencias
select * from cv_experiencias;

insert into cv_experiencias values (default, 1, "Jefe", "The Firm", "Barcelona", "2000-01-01", "2015-11-11", 0, "En un lugar de la Mancha de cuyo nombre no quiero acordarme...");
insert into cv_experiencias values (default, 2, "Jefe", "The Firm", "Barcelona", "2000-01-01", "2015-11-11", 0, "En un lugar de la Mancha de cuyo nombre no quiero acordarme...");
insert into cv_experiencias values (default, 2, "No Jefe", "The Firm", "Barcelona", "1999-01-01", "1999-12-31", 0, "En un lugar de la Mancha de cuyo nombre no quiero acordarme...");
insert into cv_experiencias values (default, 3, "Jefe", "The Firm", "Barcelona", "2000-01-01", "2015-11-11", 0, "En un lugar de la Mancha de cuyo nombre no quiero acordarme...");

-- Inserts cv_hardskills
select * from cv_hardskills;

insert into  cv_hardskills values (default, 1, "Universitat de Barcelona", "Ingeniería de Jamones y Quesos", "Barcelona", "2015", "Experto en el conocimiento de jamones y quesos.", 0);
insert into  cv_hardskills values (default, 2, "Universidad de la Vida", "Enología", "Zárágózá", "2015", "Como ser un buen sibarita.", 0);



select * from cv_techs;

select insertTecnologia (123);