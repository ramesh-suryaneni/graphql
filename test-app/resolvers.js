const db = require('./db');
const Query = {
    test: () => { return "Test Success, GraphQL server is up & running !!";},
    students:() => {return db.students.list();}
 },
 
 //for each single student object returned,resolver is invoked
const Student = {
    fullName:(root,args,context,info) => {
       return root.firstName+":"+root.lastName
    },
    college:(root) => {
        return db.colleges.get(root.collegeId);
     }
 }
 module.exports = {Query, Student}