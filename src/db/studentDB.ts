interface Student {
    Matricula: string;
    Nombre: string;
    Calificacion: number;
    Adeudos: boolean;
}

class StudentService {
    private studentDB: Student[] = [
        {Matricula: "A00839731" , Nombre: "Maximo Ramirez" , Adeudos: false , Calificacion: 9.5},
        {Matricula: "A00839731" , Nombre: "Maximo Ramirez" , Adeudos: false , Calificacion: 9.5},
        {Matricula: "A00839731" , Nombre: "Maximo Ramirez" , Adeudos: false , Calificacion: 9.5},
        {Matricula: "A00839731" , Nombre: "Maximo Ramirez" , Adeudos: false , Calificacion: 9.5},
        {Matricula: "A00839731" , Nombre: "Maximo Ramirez" , Adeudos: false , Calificacion: 9.5},
        {Matricula: "A00839731" , Nombre: "Maximo Ramirez" , Adeudos: false , Calificacion: 9.5},
        {Matricula: "A00839731" , Nombre: "Maximo Ramirez" , Adeudos: false , Calificacion: 9.5}
    ];

    async getStudent():Promise<Student[]> {
        return [...this.studentDB];
    }
}

export const studentService = new StudentService();