import { studentService } from "../db/studentDB";

class StudentController {

    async getAllStudent() {
        const student = await studentService.getStudent();
        
        const resultados = student.map(student => {
            const resultado = {
                Matricula: student.Matricula
            };

            
            if (student.Adeudos) { // Tiene adeudos
                if (student.Calificacion>=90){return {...resultado, Mensaje:"Tenias honores, pero tienes un adeudo"}}
                else if (student.Calificacion < 70) {return {...resultado, Mensaje:"Expulsado"}}
            } 
            else if (student.Calificacion < 90 && student.Calificacion > 70) {return {...resultado, Mensaje: "Pasaste apenas"}} // Con o sin adeudos
            else { // No tiene adeudos
                if (student.Calificacion >= 90) {return {...resultado, Mensaje:"Te graduaste con honores"}}
                else if (student.Calificacion < 70) {return {...resultado, Mensaje:"Como no tienes adeudo, tienes derecho a un examen de recuperacion"}}
            }
        });

        return resultados;
    }
}

export default StudentController;