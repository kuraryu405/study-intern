class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    printfullname() {
        console.log(this.firstname + ' ' + this.lastname);
    }
}

const obj = new Person('kurano', 'ryutaro');
obj.printfullname(); 