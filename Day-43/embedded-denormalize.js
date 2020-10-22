
/**
 * 
 * This is the approach for modeling relationship with connected data using
 * ** EMBEDDED/DE-NORMALIZATION  **
 * 
 * Note: In this approach we keep the whole record in then document's record itself
 * 
 */

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Modeling-Relationship', 
    { 
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    })
    .then(() => console.log('connected with MongoDB succesfully...'))
    .catch(err => console.error('Error while connecting DB: ', err));

const authorSchema = new mongoose.Schema({
    name: String,
    bio: String,
    website: String
});

const courseSchema = new mongoose.Schema({
    name: String,
    author: authorSchema
});

const CourseModel = mongoose.model('Course', courseSchema);

const AuthorModel = mongoose.model('Authore', authorSchema);

async function createCourse(authore) {
    const course = new CourseModel({
        name: 'Node.js',
        author: authore
    })
    await course.save();
}

// async function createAuthor () {
//     const author = new AuthorModel({
//         name: 'Lalit Kushwah',
//         bio: 'I am a full stack developer',
//         website: 'http://fake-link.com'
//     });
//     await author.save()
// }

async function fetchCourses () {
    const courses = await CourseModel.find();
    console.log(courses)
}

// createAuthor();
// createCourse('5f91a17c8f6f9a28a0347b07');
createCourse(new AuthorModel({ name: 'Narayan'}))
fetchCourses();
