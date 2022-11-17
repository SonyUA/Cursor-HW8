class Student {
    constructor(university, course, fullName, rating) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.rating = rating;
        this.arrRating = rating;
        this.turnOff = true;
    }

    getInfo() {
        return `${this.university} , ${this.course} , ${this.fullName}`;
    }

    get marks() {
        if (this.turnOff) {
            return this.rating;
        } else {
            return null;
        }
    }

    /*все гуд, але краще для функції
    dismiss і recover використовувати зміну яка відповідає 
    саме за навчання чи відрахування студента
    також не зрозуміло чому в set marks має попасти 
     тру, якщо маєм передавати лише значення типу намбер */

    set marks(value) {
        if (Number.isInteger(value) && this.turnOff) {
            return this.rating.push(value);
        } else {
            return null;
        }
    }

    getAverageMark() {
        let result;
        if (this.turnOff) {
            result = this.rating.reduce(function (acc, item) {
                return acc + item;
            }, 0);
            return (result / this.rating.length).toFixed(1);
        } else {
            return null;
        }
    }

    dismiss() {
        return (this.turnOff = false);
    }

    recover() {
        return (this.turnOff = true);
    }
}
let newStudent = new Student("Вища Школа Психотерапії м.Одеса", "Студент 1го курсу", "Остап Родоманський Бендер", [5, 4, 4, 5]);

console.log(newStudent.getInfo());
console.log(newStudent.marks);
newStudent.marks = 5;
console.log(newStudent.getAverageMark());
newStudent.dismiss();
//newStudent.recover();
