-- Student
insert into student(dni_student, name, lastname, birthday, degree, email, password)
VALUES('1017345876', 'Jose', 'Charales', '2009-11-09 12:50:35', 'Universitario', 'alejogs4@gmail.com','qwertyu')

insert into student(dni_student, name, lastname, birthday, degree, email, password)
VALUES('1017345875', 'Hiran', 'Martinez', '2000-11-09 12:50:35', 'Universitario', 'hiran@gmail.com','ferio');

insert into student(dni_student, name, lastname, birthday, degree, email, password)
VALUES('1017345874', 'Carmen', 'Serna', '1999-11-09 12:50:35', 'Escolar', 'carmen@gmail.com','sanluis');

insert into student(dni_student, name, lastname, birthday, degree, email, password)
VALUES('1017345877', 'Ary', 'Garcia', '1962-11-09 12:50:35', 'Universitario', 'afq@gmail.com','rewqed');


insert into student(dni_student, name, lastname, birthday, degree, email, password)
VALUES('1017345878', 'Santiago', 'Cañas', '1999-11-09 12:50:35', 'Universitario', 'scb@gmail.com','1234567');
-- TEACHER
insert into teacher(dni_teacher, name, lastname, birthday, email, password)
VALUES('1017345879', 'Jhoan', 'Charales', '2009-11-09 12:50:35', 'Jhoan@gmail.com','qwertyu');

insert into teacher(dni_teacher, name, lastname, birthday, email, password)
VALUES('1017345847', 'Liliana', 'Martinez', '2000-11-09 12:50:35','lili23@gmail.com','ferio');

insert into teacher(dni_teacher, name, lastname, birthday, email, password)
VALUES('1017345812', 'jaime', 'Serna', '1999-11-09 12:50:35', 'jaime78@gmail.com','sanluis');

insert into teacher(dni_teacher, name, lastname, birthday, email, password)
VALUES('1017345865', 'juan', 'Garcia', '1962-11-09 12:50:35', 'juan@gmail.com','rewqed');


insert into teacher(dni_teacher, name, lastname, birthday, email, password)
VALUES('1017345836', 'Dina', 'Cañas', '1999-11-09 12:50:35', 'scbdina@gmail.com','1234567');
-- 

-- Articles
insert into article(dni_teacher,id_subject, fecha, body, title, image, description) values('1017345879', 1, '2018-07-10 00:00:00', 'abcdefg', 'Titulo','Titulo 1', 'Descripcion');
insert into article(dni_teacher,id_subject, fecha, body, title, image, description) values('1017345879', 1, '2018-08-10 00:00:00','abcdefg', 'Titulo','Titulo 2','Descripcion');
insert into article(dni_teacher,id_subject, fecha, body, title, image, description) values('1017345879', 2, '2018-09-10 00:00:00','abcdefg','Titulo','Titulo 3','Descripcion');
insert into article(dni_teacher,id_subject, fecha, body, title, image, description) values('1017345879', 5, '2018-03-10 00:00:00', 'abcdefg', 'Titulo','Titulo 4', 'Descripcion');
insert into article(dni_teacher,id_subject, fecha, body, title, image, description) values('1017345879', 5, '2018-03-10 00:00:00', 'abcdefg', 'Titulo','Titulo 5', 'Descripcion');

-- Career
insert into career(name) values('Ingenieria sistemas');
insert into career(name) values('Ingenieria materiales');
insert into career(name) values('Ingenieria civil');
insert into career(name) values('Ingenieria energia');
insert into career(name) values('Derecho');

-- Speciality
insert into speciality(name) values('Suelos');
insert into speciality(name) values('Algebra lineal');
insert into speciality(name) values('Nodejs');
insert into speciality(name) values('Java');
-- Speciality Teacher
insert into speciality_teacher(dni_teacher,id_speciality) values('1017345865', 1);
insert into speciality_teacher(dni_teacher,id_speciality) values('1017345836', 2);
insert into speciality_teacher(dni_teacher,id_speciality) values('1017345812', 3);
insert into speciality_teacher(dni_teacher,id_speciality) values('1017345847', 1);
insert into speciality_teacher(dni_teacher,id_speciality) values('1017345879', 4);
-- Teacher subject
insert into teacher_subject(dni_teacher,id_subject) values('1017345865', 1);
insert into teacher_subject(dni_teacher,id_subject) values('1017345836', 2);
insert into teacher_subject(dni_teacher,id_subject) values('1017345812', 3);
insert into teacher_subject(dni_teacher,id_subject) values('1017345847', 1);
insert into teacher_subject(dni_teacher,id_subject) values('1017345879', 4);
-- Advisory
insert into advisory(dni_student,dni_teacher,id_subject,fecha) values('1017345876','1017345865', 1,'2018-05-18 00:00:00');
insert into advisory(dni_student,dni_teacher,id_subject, fecha) values('1017345875','1017345836', 2, '2018-05-18 00:00:00');
insert into advisory(dni_student,dni_teacher,id_subject, fecha) values('1017345874','1017345812', 3, '2018-05-18 00:00:00');
insert into advisory(dni_student,dni_teacher,id_subject, fecha) values('1017345877','1017345847', 1, '2018-05-18 00:00:00');
insert into advisory(dni_student,dni_teacher,id_subject, fecha) values('1017345878','1017345879', 4, '2018-05-18 00:00:00');
-- Student career
insert into career_student(dni_student, id_career) values('1017345876',1);
insert into career_student(dni_student, id_career) values('1017345875',2);
insert into career_student(dni_student, id_career) values('1017345874',3);
insert into career_student(dni_student, id_career) values('1017345878',5);
-- score article
insert into score_article(id_article,dni_student, score) values(4,'1017345876',1);
insert into score_article(id_article,dni_student, score) values(5,'1017345875',2);
insert into score_article(id_article,dni_student, score) values(6,'1017345874',3);
insert into score_article(id_article,dni_student, score) values(7,'1017345878',5);
-- score teacher
insert into score_teacher(dni_teacher,dni_student, score) values('1017345879','1017345876',1);
insert into score_teacher(dni_teacher,dni_student, score) values('1017345847','1017345876',2);
insert into score_teacher(dni_teacher,dni_student, score) values('1017345812','1017345876',3);
insert into score_teacher(dni_teacher,dni_student, score) values('1017345865','1017345876',5);