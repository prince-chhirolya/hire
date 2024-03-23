import mongoose from 'mongoose';
// Define the schema for the blog post
const UserDetailsSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    projectName: {
      type: String,
      required: true
    },
    projectDescription: {
      type: String,
      required: true
    },
    projectLinks:{
        type: String,
        required: true
    },
    skills:{
        type: String,
        required: true
    },
    socials:{
        type: String,
        required: true
    },
    technology:{
        type: String,
        required: true
    },

  });
  
  // Create a model from the schema
  const UserDetail = mongoose.model('UserDetail', UserDetailsSchema);
  export default UserDetail;
  