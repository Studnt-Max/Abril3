import { studentService } from "../db/studentDB";

class StudentController {

    async getAllStudent() {
        const student = await studentService.getStudent();
        return 
    }
}

export default StudentController;