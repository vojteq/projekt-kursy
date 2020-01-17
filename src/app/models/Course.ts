import { TypeOfClasses } from './TypeOfClasses';

export class Course {
    name: string;
    ects: number;
    semester: number;
    type: TypeOfClasses;
    maxStudents: number;
    numberOfRatings: number;
    sumOfRatings: number;
    pictureUrl: string;
    description: string;

    constructor(name:string, ects:number, semester:number, type:TypeOfClasses, maxStudents:number, numberOfRatings:number, sumOfRatings:number, pictureUrl:string, description:string){
        this.name = name;
        this.ects = ects;
        this.semester = semester;
        this.type = type;
        this.maxStudents = maxStudents;
        this.numberOfRatings = numberOfRatings;
        this.sumOfRatings = sumOfRatings;
        this.pictureUrl = pictureUrl;
        this.description = description;
    }
}