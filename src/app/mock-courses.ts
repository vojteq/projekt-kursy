import { Course } from './models/Course';
import { TypeOfClasses } from './models/TypeOfClasses'

export const COURSES: Course[] = [
    new Course( 'Fizyka I', 6, 2, 'Ćwiczenia', 25, 2, 9, 'https://media4.s-nbcnews.com/j/newscms/2018_22/2451826/180601-atomi-mn-1540_f415a90a9f0fcbddc7dfa4cc7b5a36c3.fit-2000w.jpg', 'some description some description' ),
    new Course( 'Fizyka II', 6, 3, 'Labolatoria', 10, 3, 12, 'https://media4.s-nbcnews.com/j/newscms/2018_22/2451826/180601-atomi-mn-1540_f415a90a9f0fcbddc7dfa4cc7b5a36c3.fit-2000w.jpg', 'some description some description' ),
    new Course( 'Wstęp do Informatyki', 6, 1, 'Ćwiczenia', 30, 2, 6, 'https://media4.s-nbcnews.com/j/newscms/2018_22/2451826/180601-atomi-mn-1540_f415a90a9f0fcbddc7dfa4cc7b5a36c3.fit-2000w.jpg', 'some description some description' ),
    new Course( 'Algorytmy i struktury danych', 6, 2, 'Labolatoria', 220, 4, 18, 'https://media4.s-nbcnews.com/j/newscms/2018_22/2451826/180601-atomi-mn-1540_f415a90a9f0fcbddc7dfa4cc7b5a36c3.fit-2000w.jpg', 'some description some description' ),
    new Course( 'Logika matematyczna', 4, 2, 'Wykład', 200, 10, 12, 'https://media4.s-nbcnews.com/j/newscms/2018_22/2451826/180601-atomi-mn-1540_f415a90a9f0fcbddc7dfa4cc7b5a36c3.fit-2000w.jpg', 'some description some description' ),
    new Course( "Elektronika", 4, 2, 'Ćwiczenia', 15, 1, 100, 'https://media4.s-nbcnews.com/j/newscms/2018_22/2451826/180601-atomi-mn-1540_f415a90a9f0fcbddc7dfa4cc7b5a36c3.fit-2000w.jpg', 'gówno jakieś' ),
    new Course( 'Programowanie Obiektowe', 3, 3, 'Wykład', 170, 21, 86, 'https://media4.s-nbcnews.com/j/newscms/2018_22/2451826/180601-atomi-mn-1540_f415a90a9f0fcbddc7dfa4cc7b5a36c3.fit-2000w.jpg', 'wykład z obiektówki taki całkiem oke' )
]