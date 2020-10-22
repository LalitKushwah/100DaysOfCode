const { up } = require('inquirer/lib/utils/readline');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Practice', 
    { 
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    })
    .then(() => console.log('connected with MongoDB succesfully...'))
    .catch(err => console.error('Error while connecting DB: ', err));

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [ String ],
    createdDate: {
        type: Date,
        default: Date.now()
    },
    isPublished: Boolean
});

const Course = mongoose.model('Course', courseSchema);


async function saveDocument () {
    const newCourse = new Course({
        name: 'Angular',
        author: 'Badri',
        tags: ['Frontend', 'JS-Framework'],
        isPublished: true
    });
    await newCourse.save()
}

async function fetchRecords () {
const results = await Course.find({ author : /Lal/})
                                .limit(10)
                                .and([
                                    {
                                        author: 'Lalit'
                                    },
                                    {
                                        isPublished: true
                                    }
                                ])
                                .select({ _id: 0, name: 1, tags: 1, author: 1});
    console.log(results);
}

async function updateRecord (id) {
    // update first approach
    await Course.update({ _id: id}, { $set : {
        author: 'Narayan'
    }})
}

// first document update approach
updateRecord('5f918837d90e1e23c4fab943')


// uncomment to store data in db
// saveDocument();

fetchRecords();