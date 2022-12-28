use open2job;

select * from cv_contacto;
select * from cv_experiencias;
select * from cv_hardskills;


select con.iduser, con.email2, con.telf1, con.telf2, con.direccion, con.poblacion, con.cp, con.provincia, con.permiso_conducir, 
	con.estado_civil, con.fnacimiento, con.genero, con.linkedin, con.facebook, con.instagram, con.twitter,con.web,
	exp.idcv_experiencia, exp.funcion, exp.empresa, exp.lugar, exp.finicio, exp.ffin, exp.actual, exp.experiencia,
    har.idcv_hardskills, har.centro, har.diploma, har.lugar, har.fgraduacion, har.formacion, har.actual    
	from cv_contacto con 
		left join cv_experiencias exp
			on con.iduser = exp.iduser
		left join cv_hardskills har
			on con.iduser = har.iduser
	where con.iduser=2
;