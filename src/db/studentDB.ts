interface Student {
    Matricula: string;
    Nombre: string;
    Calificacion: number;
    Adeudos: boolean;
}

export const studentDB: Student[] = [
    {Matricula: "A00839731" , Nombre: "Maximo Ramirez" , Adeudos: false , Calificacion: 9.5}
];

class StudentService {
    async getStudent() {}
}

export const studentService = new StudentService();