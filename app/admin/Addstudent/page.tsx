import React from 'react'
import Header from '@/app/components/admin/Home/header/Header';
import Sidebar from '@/app/components/student/Sidebar';
import Studentadd from '@/app/components/admin/Add-Student/Studentadd';
import Chat from '@/app/components/admin/Add-Student/Chat';
import SearchBar from '@/app/components/admin/Home/search/SearchBar';

const AddStudent = () => {
    return (
        <main >
            <Header />

            <div className="h-screen bg-black text-white flex justify-center items-center  ">
                <Sidebar />
                <div className="flex flex-col justify-center items-center">
                    <div className=" h-[500px] w-[1176px] bg-[#1c1c1c] rounded-2xl">
                        <Studentadd />
                    </div>

                    <div className="h-[68px] w-[1176px] mt-8 ">
                        <Chat />
                    </div>
                    <div className=" h-[68px] w-[1300px] mt-8 ">
                        <SearchBar />
                    </div>
                </div>
            </div>
        </main>
    );
}

export default AddStudent