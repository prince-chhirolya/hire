"use client"
import React,{useState} from "react"
import { signIn } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import axios from "axios"
// import { UserDetails} from '@/app/Server/UserDetails'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function UserInfo() {
    const screen = 1;
    const [currentScreen, setCurrentScreen] = useState(screen);
    const [UserInfo, setUserInfo] = useState({name:"",projectName:"",projectDescription:"",projectLinks:"",skills:"",socials:"",technology:""});


    const handleChange = (e) => {
        setUserInfo({...UserInfo,[e.target.name]: e.target.value});
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        await axios.post("http://localhost:3000/api",UserInfo);
    }

    const nextScreen = () => {
        setCurrentScreen(currentScreen + 1);
    }

    const previousScreen = () => {
        setCurrentScreen(currentScreen - 1);
    }
    
  return (
    <>
   
    {/* {currentScreen === 1 && (<Card className="w-[350px] bg-[#09090b]   border-[#27272a] m-auto mt-20 rounded-xl">
      <CardHeader>
        <CardTitle className="text-[#fafafa]">Basic Details</CardTitle>
        <CardDescription className="text-[#96969f]">Enter your details.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name" className="text-[#fafafa]">Username</Label>
              <Input id="name" placeholder="Joe de bruin" name="name" value={UserInfo.name} onChange={handleChange} className="text-[#96969f] bg-transparent border-[#27272a] rounded-xl" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button className="bg-white text-black hover:bg-slate-50 rounded-xl" onClick={nextScreen}>Next</Button>
      </CardFooter>
    </Card>
    )}

    {currentScreen === 2 && (
    <Card className="w-[350px] bg-[#09090b]  border-[#27272a] m-auto mt-20 rounded-xl">
    <CardHeader>
      <CardTitle className="text-[#fafafa]">Project Details</CardTitle>
      <CardDescription className="text-[#96969f]">Enter your details.</CardDescription>
    </CardHeader>
    <CardContent>
      <form>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name"  className="text-[#fafafa]">Projects Name</Label>
            <Input id="name" name="projectName" onChange={handleChange} value={UserInfo.projectName} placeholder="project1 , project2" className="rounded-xl text-[#96969f] bg-transparent border-[#27272a]" />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name" className="text-[#fafafa]">Projects Description</Label>
            <Input id="name" name="projectDescription" onChange={handleChange} value={UserInfo.projectDescription} placeholder="project1 des , project2 des" className="rounded-xl text-[#96969f] bg-transparent border-[#27272a]" />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name" className="text-[#fafafa]">Projects Links</Label>
            <Input id="name" name="projectLinks" onChange={handleChange} value={UserInfo.projectLinks} placeholder="https://project1, https://project2" className="rounded-xl text-[#96969f] bg-transparent border-[#27272a]" />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name" className="text-[#fafafa]">Skills</Label>
            <Input id="name" name="skills" onChange={handleChange} value={UserInfo.skills} placeholder="React,AI/ML,MongoDB" className="rounded-xl text-[#96969f] bg-transparent border-[#27272a]" />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name" className="text-[#fafafa]">Socials</Label>
            <Input id="name" name="socials" onChange={handleChange} value={UserInfo.socials} placeholder="https://www.linkedin.com/in/hfhf/" className="rounded-xl text-[#96969f] bg-transparent border-[#27272a]" />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name" className="text-[#fafafa]">Technology</Label>
            <Input id="name" name="technology" onChange={handleChange} value={UserInfo.technology} placeholder="Frontend or Backend" className="rounded-xl text-[#96969f] bg-transparent border-[#27272a]" />
          </div>
        </div>
      </form>
    </CardContent>
    <CardFooter className="flex justify-between">
    <Button variant="outline" className="text-[#fafafa] bg-transparent rounded-xl hover:bg-white" onClick={previousScreen}>Previos</Button>
      <Button className="bg-white text-black hover:bg-slate-50 rounded-xl" onClick={handleSubmit}>Submit</Button>
    </CardFooter>
  </Card>
    )} */}


{currentScreen === 1 && (
 <Card className="w-[350px] bg-[#09090b]  border-[#27272a] m-auto mt-20 rounded-xl">
    <CardHeader>
      <CardTitle className="text-[#fafafa]">Authentication</CardTitle>
      <CardDescription className="text-[#96969f] ">Authenticate your github.</CardDescription>
    </CardHeader>
    <CardContent>
    <Button onClick={()=>signIn("github")} className="bg-white text-black hover:bg-slate-50 rounded-xl">
        <GitHubLogoIcon className="mr-2 h-4 w-4 "/>Authenticate with Github
    </Button>
    </CardContent>
    <CardFooter className="flex justify-between">
    <Button variant="outline" className="text-[#fafafa] bg-transparent rounded-xl hover:bg-white" onClick={previousScreen}>Previous</Button>
    </CardFooter>
  </Card> 
)} 
</>
  )
}
