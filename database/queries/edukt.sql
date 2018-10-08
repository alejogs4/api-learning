-- DDL - EDUKT                                   
-------------------------------------------------------------------------------------------------------------------

-- career

create table career (
  id_career serial,
  name varchar(100) not null,
  constraint pk_career primary key(id_career)
);

-- speciality

create table speciality (
  id_speciality serial,
  name varchar(100) not null,
  constraint pk_speciality primary key(id_speciality)
);

-- subject

create table subject (
  id_subject serial,
  name varchar(100) not null,
  level varchar(40) not null,
  constraint pk_subject primary key(id_subject)
);

-------------------------------------------------------------------------------------------------------------------

-- student

create table student (
  dni_student varchar(20),
  name varchar(100) not null,
  lastname varchar(50) not null,
  birthday date not null,
  degree varchar(50) not null,
  email varchar(100) not null,
  password varchar(200),
  constraint pk_student primary key(dni_student)
);

create table contacto_student (
  dni_student varchar(20),
  phone varchar(20)
);

alter table contacto_student add constraint pk_contacto_student primary key(dni_student, phone);
alter table student add constraint fk_student foreign key(dni_student) references student(dni_student);

create table note (
  id_note serial,
  dni_student varchar(20) not null,
  note text not null,
  constraint pk_note primary key(id_note),
  constraint fk_student foreign key(dni_student) references student(dni_student)
);

create table career_student (
  dni_student varchar(20),
  id_career serial,
  constraint fk_career foreign key(id_career) references career(id_career),
  constraint fk_student foreign key(dni_student) references student(dni_student),
  constraint pk_career_student primary key(dni_student, id_career)
);

create table student_subject (
  dni_student varchar(20),
  id_subject int,
  constraint fk_student foreign key(dni_student) references student(dni_student),
  constraint fk_subject foreign key(id_subject) references subject(id_subject),
  constraint pk_student_subject primary key(dni_student, id_subject)
);

-------------------------------------------------------------------------------------------------------------------

-- teacher

create table teacher (
  dni_teacher varchar(20),
  name varchar(100) not null,
  lastname varchar(100) not null,
  birthday date not null,
  email varchar(100) not null,
  password varchar(100) not null,
  constraint pk_teacher primary key(dni_teacher)
);

create table contacto_teacher (
  dni_teacher varchar(20),
  phone varchar(20),
  constraint fk_teacher foreign key(dni_teacher) references teacher(dni_teacher),
  constraint pk_contacto_teacher primary key(dni_teacher, phone)
);

create table speciality_teacher (
  dni_teacher varchar(20),
  id_speciality int,
  constraint fk_teacher foreign key(dni_teacher) references teacher(dni_teacher),
  constraint fk_speciality foreign key(id_speciality) references speciality(id_speciality),
  constraint pk_speciality_teacher primary key(dni_teacher, id_speciality)
);

create table teacher_subject (
  dni_teacher varchar(20),
  id_subject int,
  constraint fk_teacher foreign key(dni_teacher) references teacher(dni_teacher),
  constraint fk_subject foreign key(id_subject) references subject(id_subject),
  constraint pk_teacher_subject primary key(dni_teacher, id_subject)
);

create table score_teacher (
  dni_teacher varchar(20),
  dni_student varchar(20),
  score int not null,
  constraint fk_teacher foreign key(dni_teacher) references teacher(dni_teacher),
  constraint fk_student foreign key(dni_student) references student(dni_student),
  constraint pk_score_teacher primary key(dni_teacher, dni_student)
);

-------------------------------------------------------------------------------------------------------------------

-- article

create table article (
  id_article serial unique,
  dni_teacher varchar(20) not null,
  id_subject int,
  fecha date not null default now(),
  body text not null,
  title varchar(100) not null,
  image varchar(500) not null,
  description varchar(200) not null,
  constraint fk_teacher foreign key(dni_teacher) references teacher(dni_teacher),
  constraint fk_subject foreign key(id_subject) references subject(id_subject),
  constraint pk_article primary key(id_article, dni_teacher, fecha)
);

create table score_article (
  id_article int,
  dni_student varchar(20),
  score int not null,
  constraint fk_article foreign key(id_article) references article(id_article),
  constraint fk_student foreign key(dni_student) references student(dni_student),
  constraint pk_score_article primary key(id_article, dni_student)
);

-------------------------------------------------------------------------------------------------------------------

-- advisory

create table advisory (
  dni_student varchar(20),
  dni_teacher varchar(20),
  id_subject int,
  fecha date not null,
  constraint fk_student foreign key(dni_student) references student(dni_student),
  constraint fk_teacher foreign key(dni_teacher) references teacher(dni_teacher),
  constraint fk_subject foreign key(id_subject) references subject(id_subject),
  constraint pk_advisory primary key(dni_student, dni_teacher, fecha)
);