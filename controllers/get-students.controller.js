const Student = require("../models/student.schema");
class GetStudentsController {

    async main(req, res){
        await Student.find()
        .then(students => {
            res.render('students/index',{students})
        }
        )
    }
}
const getStudentsController = new GetStudentsController()
const getStudents = getStudentsController.main.bind(this)
module.exports = getStudents