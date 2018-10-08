-- Profesor por materia
select teacher.name, lastname, email 
from teacher 
inner join teacher_subject 
on teacher.dni_teacher = teacher_subject.dni_teacher 
inner join subject
on subject.id_subject = teacher_subject.id_subject
where subject.name like '%Ele%';

-- Profesores por calificacion
select teacher.name, lastname, email, score 
from teacher 
inner join score_teacher 
on teacher.dni_teacher = score_teacher.dni_teacher 
order by score_teacher.score desc;

-- Articulos junto a informacion del autor
select t.name, t.lastname, t.email, a.title, a.body, a.description, a.fecha 
from teacher as t 
inner join article as a 
on t.dni_teacher = a.dni_teacher;

-- Articulo por fecha
select title, body, description, fecha 
from article  
order by fecha desc;

-- Articulo por calificacion
select title, body, description, fecha , score
from article
inner join score_article
on article.id_article = score_article.id_article  
order by score desc;

-- Profesores por especialidad
select t.name, t.lastname, t.email, s.name
from teacher as t
inner join speciality_teacher
on speciality_teacher.dni_teacher = t.dni_teacher
inner join speciality as s
on s.id_speciality = speciality_teacher.id_speciality
where lower(s.name) like lower('%Algebra%');

-- Cantidad de asesorias por profesor
select dni_teacher, count(dni_teacher)
from advisory
group by dni_teacher;

-- Cantidad de asesorias por estudiante
select dni_student, count(dni_student)
from advisory
group by dni_student;

-- Articulos por materia
select a.title, a.body, a.description, s.name
from article as a
inner join subject as s
on s.id_subject = a.id_subject
where lower(s.name) like lower('%ba%');

-- Profesores por calificacion minima requerida
select t.name, t.lastname, t.email, s.score
from teacher as t
inner join score_teacher as s
on t.dni_teacher = s.dni_teacher
where s.score > 3;

-- Cantidad de articulos por materia
select s.name, count(a.id_subject)
from article as a
inner join subject as s
on s.id_subject = a.id_subject
group by s.name;