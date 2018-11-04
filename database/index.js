const Teacher = require('./models/Teacher')
const Student = require('./models/Students')
const Article = require('./models/Article')
const Subjects = require('./models/Subjects')
const SubjectTeacher = require('./models/SubjectTeacher')
const TeacherScore = require('./models/TeacherScore')
const ArticleScore = require('./models/ArticleScore')

// Definimos relacion entre profesor y articulo
Teacher.hasMany(Article, { foreignKey: 'dni_teacher' })
Article.belongsTo(Teacher, { foreignKey: 'dni_teacher' })

Teacher.hasMany(SubjectTeacher, { foreignKey: 'dni_teacher' })
SubjectTeacher.belongsTo(Teacher, { foreignKey: 'dni_teacher' })

Subjects.hasMany(SubjectTeacher, { foreignKey: 'id_subject' })
SubjectTeacher.belongsTo(Subjects, { foreignKey: 'id_subject' })

Teacher.hasMany(TeacherScore, { foreignKey: 'dni_teacher' })
TeacherScore.belongsTo(Teacher, { foreignKey: 'dni_teacher' })

Student.hasMany(TeacherScore, { foreignKey: 'dni_student' })
TeacherScore.belongsTo(Student, { foreignKey: 'dni_student' })

Student.hasMany(ArticleScore, { foreignKey: 'dni_student' })
ArticleScore.belongsTo(Student, { foreignKey: 'dni_student' })

Article.hasMany(ArticleScore, { foreignKey: 'id_article' })
ArticleScore.belongsTo(Article, { foreignKey: 'id_article' })


module.exports = {
  Teacher,
  Student,
  Article,
  Subjects,
  SubjectTeacher,
  TeacherScore,
  ArticleScore
}
