import React from "react";
import { CrossIcon } from "../../icons/CrossIcon";
import { Button } from "./Button";

export function CreateContent({ open, onClose }: { open: boolean; onClose: () => void }) {
    return (
        <div>
           {open && <div> 
            <div className="w-screen h-screen bg-slate-500 fixed top-0 left-0 opacity-60 flex justify-center">
               
            </div>
            <div className="w-screen h-screen fixed top-0 left-0 flex justify-center">
                <div className="flex flex-col justify-center">
                    <span className="bg-white opacity-100 p-4 rounded fixed">
                        <div className="flex justify-end">
                            <div onClick={onClose} className="cursor-pointer">
                                <CrossIcon />
                            </div>
                        </div>
                            <div>
                                <Input placeholder={"Title"} />
                                <Input placeholder={"Link"} />
                            </div>

                        <div className="flex justify-center">
                            <Button  variant="primary" text="Submit" color="primary" size="md" />
                        </div>
                    </span>
                </div>     
            </div>
            
        </div>}
    </div>
    );
}



function Input({ onChange, placeholder }: { onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; placeholder?: string }) {
    return (
        <div>
            <input
                placeholder={placeholder}
                type="text"
                className="px-4 py-2 border rounded m-2"
                onChange={onChange}
            />
        </div>
    );
}   

