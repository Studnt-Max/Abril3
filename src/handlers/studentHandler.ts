import { Request, Response, NextFunction } from "express";
import StudentController from '../controllers/studentController';

const studentController = new StudentController();

class StudenthttpHandler {
    async getStudent(request: Request, response: Response, next: NextFunction) {
        try {
            const student = await studentController.getAllStudent();
            response.json(student)
        } catch (error) {
            next(error)
        }
    }
}

export default StudenthttpHandler;