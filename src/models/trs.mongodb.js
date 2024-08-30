use("portfolio")

// db.teachers.insertMany([
//     { "name": "kidada", "code": "1", "school": "66d12e313940680bb09dc3de" },
//     { "name": "rimba", "code": "2", "school": "66d12e313940680bb09dc3de" },
//     { "name": "lha", "code": "3", "school": "66d12e313940680bb09dc3de" },
//     { "name": "beja", "code": "4", "school": "66d12e313940680bb09dc3de" },
//     { "name": "willy", "code": "5", "school": "66d12e313940680bb09dc3de" },
//     { "name": "msyoki", "code": "6", "school": "66d12e313940680bb09dc3de" },
//     { "name": "mwanza", "code": "7", "school": "66d12e313940680bb09dc3de" },
//     { "name": "hamisi", "code": "8", "school": "66d12e313940680bb09dc3de" },
//     { "name": "abraham", "code": "9", "school": "66d12e313940680bb09dc3de" },
//     { "name": "ivy", "code": "10", "school": "66d12e313940680bb09dc3de" },
//     { "name": "osonya", "code": "11", "school": "66d12e313940680bb09dc3de" },
//     { "name": "vivian", "code": "12", "school": "66d12e313940680bb09dc3de" },
//     { "name": "odora", "code": "13", "school": "66d12e313940680bb09dc3de" }
//   ]
//   )

// db.teachers.find()
const d = db.courses.find().sort({createdAt:-1}).count()
console.log({d})