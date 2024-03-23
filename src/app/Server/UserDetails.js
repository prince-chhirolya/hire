import mongoose from "mongoose";
import UserDetail from "@/lib/mongo_schema";

export default async function UserDetails(user_req) {
    const { name,  projectName, projectDescription, projectLinks, skills, socials, technology } = user_req;
    try{
    const user = await new UserDetail({
      name,
      projectName,
      projectDescription,
      projectLinks,
      skills,
      socials,
      technology,
    });
    await user.save();
    console.log("user saved")
    }catch(err){
        console.log(err);
    }
}