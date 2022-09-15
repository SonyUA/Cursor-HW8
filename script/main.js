class Student {
    constructor(university, course, fullName, rating) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.rating = rating;
        this.arrRating = rating;
    }

    getInfo() {
        return `${this.university} , ${this.course} , ${this.fullName}`;
    }

    get marks() {
        return this.rating;
    }

    set marks(value) {
        if (value === null) {
            this.rating = null;
        } else if (value === true) {
            this.rating = this.arrRating;
        } else if (value !== null && this.rating !== null) {
            return this.rating.push(value);
        } else {
            return (this.rating = null);
        }
    }

    getAverageMark() {
        let result;
        result = this.rating.reduce(function (acc, item) {
            return acc + item;
        }, 0);
        return result / this.rating.length;
    }

    dismiss() {
        return (this.marks = null);
    }

    recover() {
        return (this.marks = true);
    }
}
let newStudent = new Student("Вища Школа Психотерапії м.Одеса", "Студент 1го курсу", "Остап Родоманський Бендер", [5, 4, 4, 5]);

console.log(newStudent.getInfo());
// newStudent.marks;
//newStudent.marks = 5;
console.log(newStudent.getAverageMark());
//newStudent.dismiss();
//newStudent.recover();
