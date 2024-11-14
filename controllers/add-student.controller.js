const Student = require("../models/student.schema")
const moment = require("moment");

class AddNewStudentController {
    async main(req, res){
        const student = new Student({...req.body, age: moment().diff(moment(req.body.dob), 'years')})
        await student.save()
        .then(() => {
            res.redirect('/students')
        })
        // await Student.create(student)
    }
}
const addNewStudentController = new AddNewStudentController()
const addNewStudent = addNewStudentController.main.bind(this)
module.exports = addNewStudent