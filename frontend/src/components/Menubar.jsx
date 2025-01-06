import { CiHome } from "react-icons/ci";
import { RiGraduationCapLine } from "react-icons/ri";
import { IoPeopleOutline } from "react-icons/io5";
import { LuNotebookPen } from "react-icons/lu";
import {NavLink} from 'react-router-dom'

function Menubar() {
    return (
        <div className="min-h-screen sticky top-0 z-50 bg-slate-100 shadow-md">
            {/* LOGO */}
            <div className="flex items-center justify-evenly h-20 border-b">
                <img src="" alt="Logo" />
                <h1 className="text-md font-semibold lg:text-2xl">JS HEAVEN</h1>
            </div>
            {/* MENU */}
            <div className="flex flex-col w-full text-center">
                <div>
                    <NavLink to="/" className="btn btn-ghost w-4/5 flex justify-evenly">
                        <CiHome className="inline-block text-2xl" />
                        <span className="hidden lg:inline-block text-xl lg:text-sm font-thin">Home</span>
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/teacher" className="btn btn-ghost w-4/5 flex justify-evenly">
                        <RiGraduationCapLine className="inline-block text-xl" />
                        <span className="hidden lg:inline-block text-xl lg:text-sm font-thin">Teachers</span>
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/student" className="btn btn-ghost w-4/5 flex justify-evenly">
                        <IoPeopleOutline className="inline-block text-xl" />
                        <span className="hidden lg:inline-block text-xl lg:text-sm font-thin">Students</span>
                    </NavLink>
                </div>
                <div>
                    <a href="#" className="btn btn-ghost w-4/5 flex justify-evenly">
                        <LuNotebookPen className="inline-block text-xl" />
                        <span className="hidden lg:inline-block text-xl lg:text-sm font-thin">Subjects</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Menubar;
