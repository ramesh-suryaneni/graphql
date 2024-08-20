const db = require('./db');
const Query = {
    test: () => { 
        return "Test Success, GraphQL server is up & running !!";
    },
    //using variable
    sayHello:(root,args,context,info) => { 
        return `Hi ${args.name} GraphQL server says Hello to you!!`;
    },
    
    students:() => db.students.list(),
 
    //resolver function for studentbyId
    studentById:(root,args,context,info) => {
    //args will contain parameter passed in query
        return db.students.get(args.id);
 }
}

//for each single student object returned,resolver is invoked
const Student = {
    fullName:(root,args,context,info) => {
       return root.firstName+"."+root.lastName
    },
    college:(root) => {
        return db.colleges.get(root.collegeId);
     }
 }

 //Note that the function createStudent returns a String type. This is a unique identifier (ID) which is generated after creating a student.
 const Mutation = {
    createStudent:(root,args,context,info) => {
       return db.students.create({
        collegeId:args.collegeId,
        firstName:args.firstName,
        lastName:args.lastName,
        email:args.email,
        password:args.password})
    },
    // new resolver function
    addStudent_returns_object:(root,args,context,info) => {
        const id = db.students.create({
        collegeId:args.collegeId,
        firstName:args.firstName,
        lastName:args.lastName,
        email:args.email,
        password:args.password})

    return db.students.get(id)

    }
 }
 module.exports = {Query, Mutation, Student}