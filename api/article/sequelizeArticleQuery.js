module.exports = {
  articleWithAutorData(Teacher) {
    return {
      include: [{
        model: Teacher,
        attributes: ['dni_teacher', 'name', 'lastname', 'email'],
      }],
      order: [['fecha', 'DESC']]
    }
  }
}