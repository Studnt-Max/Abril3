interface Student {
    Matricula: string;
    Nombre: string;
    Calificacion: number;
    Adeudos: boolean;
}

class StudentService {
    private studentDB: Student[] = [
        {Matricula: "A00839731" , Nombre: "Maximo Ramirez" , Adeudos: false , Calificacion: 95},
        {Matricula: "A00562843" , Nombre: "Ana Sofía Mendoza" , Adeudos: true , Calificacion: 70},
        {Matricula: "A00838972" , Nombre: "Fatima Castillo" , Adeudos: false , Calificacion: 85},
        {Matricula: "A00839731" , Nombre: "Dana Torres" , Adeudos: false , Calificacion: 25},
        {Matricula: "A00462181" , Nombre: "Valeria Jiménez" , Adeudos: false , Calificacion: 38},
        {Matricula: "A00674521" , Nombre: "Daniel Sanchez" , Adeudos: true , Calificacion: 100},
        {Matricula: "A00238496" , Nombre: "Sandino Leon" , Adeudos: true , Calificacion: 43}
    ];

    async getStudent():Promise<Student[]> {
        return [...this.studentDB];
    }
}

export const studentService = new StudentService();