class User {
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
    viewData(){
        console.log("You can view the Data");
    }
}
let myObject = new User("Muhammad Muntazir Mehdi","mehdikhosa50@gmail.com");
console.log(myObject);
console.log(myObject.name);
console.log(myObject.email);
console.log(myObject.viewData());

class Admin extends User {
    constructor(name,email){
        super(name,email);
    }
    editData(){
        console.log("You can edit the Data");
    }

}
let adminObject = new Admin("cvbn","vbghb");
console.log(adminObject);
console.log(adminObject.editData());
console.log(adminObject.name);
console.log(adminObject.email);
console.log(adminObject.viewData());