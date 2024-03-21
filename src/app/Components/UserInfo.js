
import * as React from "react"
import { Button } from "@/components/ui/button"
import { GitHubLogoIcon } from '@radix-ui/react-icons'
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
    
  return (
    // <Card className="w-[350px] bg-[#09090b]  border-[#27272a] m-auto mt-20 rounded-xl">
    //   <CardHeader>
    //     <CardTitle className="text-[#fafafa]">Basic Details</CardTitle>
    //     <CardDescription className="text-[#96969f]">Enter your details.</CardDescription>
    //   </CardHeader>
    //   <CardContent>
    //     <form>
    //       <div className="grid w-full items-center gap-4">
    //         <div className="flex flex-col space-y-1.5">
    //           <Label htmlFor="name" className="text-[#fafafa]">Name</Label>
    //           <Input id="name" placeholder="Your Name" className="text-[#96969f] bg-transparent border-[#27272a] rounded-xl" />
    //         </div>
    //         <div className="flex flex-col space-y-1.5">
    //           <Label htmlFor="name" className="text-[#fafafa]">Email</Label>
    //           <Input id="name" placeholder="Your Email Id" className="text-[#96969f] bg-transparent border-[#27272a] rounded-xl" />
    //         </div>
    //         <div className="flex flex-col space-y-1.5">
    //           <Label htmlFor="name" className="text-[#fafafa]">Phone</Label>
    //           <Input id="name" placeholder="Enter your Phone no." className="text-[#96969f] bg-transparent border-[#27272a] rounded-xl" />
    //         </div>
    //         <div className="flex flex-col space-y-1.5">
    //           <Label htmlFor="name" className="text-[#fafafa]">Password</Label>
    //           <Input id="name" placeholder="set a password" className="text-[#96969f] bg-transparent border-[#27272a] rounded-xl" />
    //           <Input id="name" placeholder="Confirm password" className="text-[#96969f] bg-transparent border-[#27272a] rounded-xl" />
    //         </div>
    //       </div>
    //     </form>
    //   </CardContent>
    //   <CardFooter className="flex justify-between">
    //   <Button variant="outline" className="text-[#fafafa] bg-transparent rounded-xl hover:bg-white">Previos</Button>
    //     <Button className="bg-white text-black hover:bg-slate-50 rounded-xl">Next</Button>
    //   </CardFooter>
    // </Card>

    // 2 nd
    <Card className="w-[350px] bg-[#09090b]  border-[#27272a] m-auto mt-20 rounded-xl">
    <CardHeader>
      <CardTitle className="text-[#fafafa]">Project Details</CardTitle>
      <CardDescription className="text-[#96969f]">Enter your details.</CardDescription>
    </CardHeader>
    <CardContent>
      <form>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name" className="text-[#fafafa]">Projects Name</Label>
            <Input id="name" placeholder="Enter your project name comma seperated" className="rounded-xl text-[#96969f] bg-transparent border-[#27272a]" />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name" className="text-[#fafafa]">Projects Description</Label>
            <Input id="name" placeholder="Enter your project description comma seperated" className="rounded-xl text-[#96969f] bg-transparent border-[#27272a]" />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name" className="text-[#fafafa]">Projects Links</Label>
            <Input id="name" placeholder="Enter your project links comma seperated" className="rounded-xl text-[#96969f] bg-transparent border-[#27272a]" />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name" className="text-[#fafafa]">Skills</Label>
            <Input id="name" placeholder="Enter your skills comma seperated" className="rounded-xl text-[#96969f] bg-transparent border-[#27272a]" />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name" className="text-[#fafafa]">Socials</Label>
            <Input id="name" placeholder="Enter your social links comma seperated" className="rounded-xl text-[#96969f] bg-transparent border-[#27272a]" />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="framework" className="text-[#fafafa]">Technology</Label>
            <Select>
              <SelectTrigger id="framework" className=" text-[#fafafa] border-[#27272a] rounded-xl">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent position="popper" className="rounded-xl bg-[#09090b] text-white ">
                <SelectItem value="next" className="hover:cursor-pointer">Frontend</SelectItem>
                <SelectItem value="sveltekit" className="hover:cursor-pointer">Backend</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </form>
    </CardContent>
    <CardFooter className="flex justify-between">
    <Button variant="outline" className="text-[#fafafa] bg-transparent rounded-xl hover:bg-white">Previos</Button>
      <Button className="bg-white text-black hover:bg-slate-50 rounded-xl">Next</Button>
    </CardFooter>
  </Card>

// 3rd
//  <Card className="w-[350px] bg-[#09090b]  border-[#27272a] m-auto mt-20 rounded-xl">
//     <CardHeader>
//       <CardTitle className="text-[#fafafa]">Authentication</CardTitle>
//       <CardDescription className="text-[#96969f] ">Authenticate your github.</CardDescription>
//     </CardHeader>
//     <CardContent>
//     <Button className="bg-white text-black hover:bg-slate-50 rounded-xl">
//         <GitHubLogoIcon className="mr-2 h-4 w-4 "/>Authenticate with Github
//     </Button>
//     </CardContent>
//     <CardFooter className="flex justify-between">
//     <Button variant="outline" className="text-[#fafafa] bg-transparent rounded-xl hover:bg-white">Previous</Button>
//     </CardFooter>
//   </Card> 
  )
}
