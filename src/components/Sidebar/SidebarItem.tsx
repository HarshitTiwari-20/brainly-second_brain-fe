import type { ReactElement } from "react";


export function SidebarItem({text, icon}: {
    text: string;
    icon: ReactElement;
}) {
    return <div className="flex text-gray-700 py-2 cursor-pointer  ">
<div className="p-2">
    {icon}
</div>
<div className="p-8 px-1 ">
    {text}
</div>
</div>
}




