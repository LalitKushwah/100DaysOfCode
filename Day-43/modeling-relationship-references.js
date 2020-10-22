
/**
 * 
 * This is the approach for modeling relationship with connected data using
 * ** REFERENCES/NORMALIZATION  **
 * 
 * Note: MongoDB doesn't care about data integrity which means after assocation if we change reference value 
 * to some invalid or non-existant value then it will allow to change
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
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Authore'
    }
});

const CourseModel = mongoose.model('Course', courseSchema);

const AuthorModel = mongoose.model('Authore', authorSchema);

async function createCourse(authorId) {
    const course = new CourseModel({
        name: 'Angular',
        author: authorId
    })
    await course.save();
}

async function createAuthor () {
    const author = new AuthorModel({
        name: 'Lalit Kushwah',
        bio: 'I am a full stack developer',
        website: 'http://fake-link.com'
    });
    await author.save()
}

async function fetchCourses () {
    const courses = await CourseModel.find().populate('author');
    console.log(courses)
}

// createAuthor();
// createCourse('5f91a17c8f6f9a28a0347b07');
fetchCourses();
