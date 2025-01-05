import { teachersData } from "../../libs/TeachersList.js"
import { FaRegEye } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";
import { IoOptionsOutline } from "react-icons/io5";
import { FaArrowDownShortWide } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
function TeachersList() {
    return (
        <div className="overflow-x-auto bg-white">
            {/*Headers */}
            <div className="flex justify-between p-4">
                {/* Title */}
                <h1 className="text-2xl font-semibold">ALL Teachers</h1>
                {/* Actions */}
                <div className="flex justify-center items-center gap-4">
                    {/* Search Input */}
                    <div className="ring-1 ring-slate-300 w-56 h-8 rounded-3xl flex justify-center items-center gap-2">
                        <IoIosSearch className="text-2xl text-slate-400" />
                        <input type="search" className="focus:ring-0 focus:outline-none" placeholder="Search...." />
                    </div>
                    {/* Header Action Buttons */}
                    <div className="flex gap-4">
                        <div className="h-10 w-10 bg-yellow-300 flex items-center justify-center rounded-full opacity-80">
                            <IoOptionsOutline className="text-xl" />
                        </div>
                        <div className="h-10 w-10 bg-yellow-300 flex items-center justify-center rounded-full opacity-80">
                            <FaArrowDownShortWide className="text-xl" />
                        </div>
                        <div className="h-10 w-10 bg-yellow-300 flex items-center justify-center rounded-full opacity-80">
                            <FaPlus className="text-xl cursor-pointer"
                                onClick={() => document.getElementById('my_modal_3').showModal()} />
                            <dialog id="my_modal_3" className="w-[800px] p-8 rounded-md">
                                <div className="">
                                    <form method="dialog">
                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                    </form>
                                    <h3 className="font-bold text-lg">Create a new teacher</h3>
                                    <div className="flex flex-col gap-6">
                                    {/* 1 */}
                                    <div className="flex flex-col gap-4">
                                            <p className="ml-3">Lorem, ipsum dolor sit amet consectetur adip</p>
                                            <form className="flex items-center">
                                                <div className="flex flex-row gap-6 w-full justify-around">
                                                    <div className="flex flex-col gap-2">
                                                        <h3 className="text-gray-500 font-semibold">Username</h3>
                                                        <input type="text" className="border w-30 h-10 rounded-md p-2" required/>
                                                    </div>
                                                    <div className="flex flex-col gap-2">
                                                        <h3 className="text-gray-500 font-semibold">Email</h3>
                                                        <input type="email" className="border w-30 h-10 rounded-md p-2" required/>
                                                    </div>
                                                    <div className="flex flex-col gap-2">
                                                        <h3 className="text-gray-500 font-semibold">Password</h3>
                                                        <input type="password" className="border w-30 h-10 rounded-md p-2" required/>
                                                    </div>
                                                </div>
                                        </form>
                                    </div>
                                    {/* 2 */}
                                    <div className="flex flex-col gap-4">
                                            <p className="ml-3">Lorem, ipsum dolor sit amet consectetur adip</p>
                                            <form className="flex items-center">
                                                <div className="flex flex-row gap-6 w-full justify-around">
                                                    <div className="flex flex-col gap-2">
                                                        <h3 className="text-gray-500 font-semibold">First Name</h3>
                                                        <input type="text" className="border w-30 h-10 rounded-md p-2"/>
                                                    </div>
                                                    <div className="flex flex-col gap-2">
                                                        <h3 className="text-gray-500 font-semibold">Last Name</h3>
                                                        <input type="text" className="border w-30 h-10 rounded-md p-2"/>
                                                    </div>
                                                    <div className="flex flex-col gap-2">
                                                        <h3 className="text-gray-500 font-semibold">Phone</h3>
                                                        <input type="number" className="border w-30 h-10 rounded-md p-2"/>
                                                    </div>
                                                </div>
                                            </form>
                                            <form className="flex items-center">
                                                <div className="flex flex-row gap-6 w-full justify-around">
                                                    <div className="flex flex-col gap-2">
                                                        <h3 className="text-gray-500 font-semibold">Address</h3>
                                                        <textarea type="text" className="border w-30 h-10 rounded-md p-2"/>
                                                    </div>
                                                    <div className="flex flex-col gap-2">
                                                        <h3 className="text-gray-500 font-semibold">Blood Type</h3>
                                                        <input type="text" className="border w-30 h-10 rounded-md p-2"/>
                                                    </div>
                                                    <div className="flex flex-col gap-2">
                                                        <h3 className="text-gray-500 font-semibold">Birth Day</h3>
                                                        <input type="date" className="border w-30 h-10 rounded-md p-2"/>
                                                    </div>
                                                </div>
                                            </form>
                                            <form className="flex items-center">
                                                <div className="flex flex-row w-full justify-between">
                                                    <div className="flex flex-col gap-2 ml-3">
                                                        <h3 className="text-gray-500 font-semibold">Sex</h3>
                                                        <select className="border w-30 h-10 rounded-md p-2">
                                                            <option value="Male">Male</option>
                                                            <option value="Male">Female</option>
                                                            <option value="Male">Others</option>
                                                        </select>
                                                    </div>
                                                    <div className="flex flex-col gap-2 mr-2">
                                                        <h3 className="text-gray-500 font-semibold">Choose a Photo</h3>
                                                        <input type="file" className="border w-30 h-10 rounded-md p-2"/>
                                                    </div>
                                                </div>
                                            </form>
                                            <div className="bg-blue-500 text-white font-semibold p-2 text-center rounded-sm mt-6"><button type="submit">Submit</button></div>
                                    </div>
                                    </div>
                                </div>
                            </dialog>
                        </div>
                    </div>
                </div>
            </div>
            {/* Table */}
            <table className="table">
                <thead>
                    <tr>
                        <th>Info</th>
                        <th>TeacherID</th>
                        <th>Subjects</th>
                        <th>Classes</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {teachersData.map(teacher => {
                        return (
                            <tr key={teacher.id}>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    className="rounded-full"
                                                    src={teacher.photo}
                                                    alt="Profile pic" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{teacher.name}</div>
                                            <div className="text-sm opacity-50">{teacher.email}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {teacher.teacherId}
                                </td>
                                <td>
                                    {teacher.subjects.toString()}
                                </td>
                                <td>
                                    {teacher.classes.toString()}
                                </td>
                                <td>
                                    {teacher.phone}
                                </td>
                                <td>
                                    {teacher.address}
                                </td>
                                {/* Action Buttons */}
                                <td>
                                    <div className="flex gap-2">
                                        <div className="bg-slate-400 h-10 w-10 flex justify-center items-center
                                         rounded-full opacity-70 cursor-pointer">
                                            <FaRegEye className="text-2xl" />
                                        </div>
                                        <div className="bg-red-400 h-10 w-10 flex justify-center items-center
                                         rounded-full opacity-70 cursor-pointer">
                                            <RiDeleteBin5Line className="text-2xl" />
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default TeachersList