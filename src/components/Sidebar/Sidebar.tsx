import { Logo } from "../../icons/logo";
import { TwitterIcon } from "../../icons/twitter";
import { YouTubeIcon } from "../../icons/YoutubeIcon";
import { SidebarItem } from "./SidebarItem";
//import { Logo} from "../../icons/Logo";
export function Sidebar(){
    return <div className="h-screen bg-white border-r border-blue-800 w-72  absolute  left-0 top-0">
        {/*fixed */}
        <div className="flex text-gray-700 pt-4 pl-4 text-2xl items-center" >
            <div className="pr-2 text-blue-600">
                <Logo />
            </div >
            <h1 className="text-blue-800">Brainly </h1>
        </div>



        <div className="pt-4 ">
            <SidebarItem text="Twitter" icon={<TwitterIcon/>}/>
            <SidebarItem text="YouTube" icon={<YouTubeIcon/>}/>

        </div>
    
    
    </div>
}