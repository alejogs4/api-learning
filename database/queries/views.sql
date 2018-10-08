#																viewS

-- view student: Serán los datos que un teacher podrá conocer de un student

CREATE VIEW view_student
AS
SELECT
name, lastname, email, contacto_student.phone, career.name
FROM
student, contacto_student, career_student, career
WHERE
student.dni_student = contacto_student.dni_student AND career_student.dni_student = student.dni_student AND career_student.id_career = career.id_career

-- view teacher: Serán los datos que un student podrá conocer de un teacher

CREATE VIEW view_teacher
AS
SELECT
name, lastname, email, speciality.name, contacto_teacher.phone, subject.name
FROM
teacher, speciality_teacher, speciality, contacto_teacher, teacher_subject, subject
WHERE
speciality_teacher.dni_teacher = teacher.dni_teacher AND speciality.id_speciality = speciality_teacher.id_speciality AND teacher.dni_teacher = contacto_teacher.dni_teacher AND teacher_subject.dni_teacher = teacher.dni_teacher AND subject.id_subject = teacher_subject.id_subject

-- view asesoría: Será la información que podrán ver los students y teacheres de una asesoría concretada

CREATE VIEW view_advisory
AS
SELECT
student.name, teacher.name, fecha, hora, subject.name
FROM
advisory, student, teacher, subject
WHERE
esesoria.dni_student = student.dni_student AND advisory.dni_teacher = teacher.dni_teacher AND advisory.id_subject = subject.id_subject

-- view artículo: Serán los datos que se mostrarán al student y al teacher al ser publicados

CREATE VIEW view_article
AS
SELECT
teacher.name, title, subject.name, fecha, descripcion, image, body
FROM
article, teacher, subject
WHERE
article.dni_teacher = teacher.dni_teacher AND article.id_subject = subject.id_subject
