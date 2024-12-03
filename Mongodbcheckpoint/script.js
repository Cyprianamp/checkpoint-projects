use contact;  // Switch to the "contact" database
db.createCollection("contactlist");  // Create the "contactlist" collection


db.contactlist.insertMany([
    {
        lastName: "Ben", firstName: "Moris", email: "ben@gmail.com", age: 26
    },
    {
        lastName: "Kefi", firstName: "Seif", email: "kefi@gmail.com", age: 15
    },
    {
        lastName: "Emilie", firstName: "Brouge", email: "emilie.b@gmail.com", age: 40
    },
    {
        lastName: "Alex", firstName: "Brown", age: 4
    },
    {
        lastName: "Denzel", firstName: "Washington", age: 3
    }
]);


db.contactlist.find().pretty();

// Replace <ID> with the actual _id of the person you want to display
db.contactlist.find({_id: ObjectId("<ID>")}).pretty();



db.contactlist.find({age: {$gt: 18}}).pretty();


db.contactlist.find({
    age: {$gt: 18},
    $or: [
        {firstName: /ah/i},  // case-insensitive search for "ah" in firstName
        {lastName: /ah/i}     // case-insensitive search for "ah" in lastName
    ]
}).pretty();


db.contactlist.updateOne(
    {firstName: "Seif", lastName: "Kefi"},
    {$set: {firstName: "Anis"}}
);

db.contactlist.deleteMany({age: {$lt: 5}});


db.contactlist.find().pretty();
