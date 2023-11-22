import { Group, Level, Student, Direction, School} from './classes'

(function (){
    console.time('The build has been successfully executed. Time')

    const student = new Student(
        'Bob',
        'John',
        1985
    );

    const level = new Level('starter', 'program');

    const direction = new Direction('frontend');
    direction.addLevel(level)

    const group = new Group(direction.name, level.name);
    group.addStudent(student)

    level.addGroup(group)

    const school = new School();
    school.addDirection(direction)

    console.log(direction)
    console.log(level)
    console.log(group)
    console.log(student)
    console.log(school)


    console.timeEnd('The build has been successfully executed. Time')
}())

