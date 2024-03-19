'use client'
import { MenuFunc } from "./menuProps";
import Menu from "./menu";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";

const Sidebar = () => {
    const [open, setOpen] = useState(false);
    const Data = MenuFunc();
    
    return (
        <>
        <div className="fixed right-0 p-4 md:hidden">
            <BiMenu size={30} onClick={() => setOpen(!open)}/>
        </div>
        <header className={`w-[35vh] bg-secondary md:bg-transparent border hidden md:block md:static`}>
                <div className="sticky h-[100vh] transition-all duration-300 top-0 z-10 flex flex-col lg:py-4">
                    <div className="mx-auto text-2xl font-bold my-2">
                        Calculator
                    </div>
                    <Menu list={Data}/>
                </div>
        </header>
        <header className={`w-[35vh] bg-secondary md:bg-transparent border ${open ? 'fixed' : 'hidden'} md:hidden md:static`}>
                <div className="sticky h-[100vh] transition-all duration-300 top-0 z-10 flex flex-col lg:py-4">
                    <div className="mx-auto text-2xl font-bold my-2">
                        Calculator
                    </div>
                    <Menu list={Data}/>
                </div>
        </header>
        </>
    )
}

export default Sidebar;
