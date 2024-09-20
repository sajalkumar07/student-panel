"use client";
import {useState } from "react";
import ChatBar from "@/app/components/student/ChatBar";
import Link from 'next/link';

interface Task {
        title: string;
        dueDate?: string
        status?: string; 
        rank?: number; 
        percentile?: number;
        action?: string;
    }

  function TaskGrid() {
    const tasksData: Task[] = [
      {
        title: 'ReactJS Assessment',
        dueDate: '18/03/24 6pm',
        action: 'Take Test',
        status: 'Due', 
      },
      {
        title: 'College XYZ Prelim Test',
        dueDate: '17/03/24 11:59pm',
        status: 'Due', 
      },
      {
        title: 'College ABC Prelim Test',
        status: 'Completed',
        dueDate: '10/03/24',
        rank: 5,
        percentile: 98,
      },
      {
        title: 'Company XYZ Prelim Test',
        status: 'Completed',
        dueDate: '7/02/24',
        rank: 5,
        percentile: 98,
      },
      {
        title: 'Company CDE Prelim Test',
        status: 'Completed',
        dueDate: '2/02/24',
        rank: 5,
        percentile: 98,
      },
      {
        title: 'Course Item1',
        status: 'Completed',
        dueDate: '1/02/24',
        rank: 5,
        percentile: 98,
      },
    ];

    const [showPending, setShowPending] = useState(false);

    function PendingButtonClick() {
        setShowPending(true);
    };

    function AllButtonClick() {
        setShowPending(false);
    };
  
    return (
    <div className="grid place-items-center rounded-xl sm:px-8">
      <div className="bg-[#F5F5F5] rounded-3xl shadow-md px-8 py-2 w-11/12 ">
        <div className="relative flex items-center pb-2 border-[#BCBCBC] border-b">
        <button className={`${showPending ? 'p-2 flex flex-row': 'bg-[#BCBCBC] rounded-full p-2 flex flex-row'}`} onClick={AllButtonClick}><h2 className={`text-base ${showPending ? 'font-normal':'font-bold'} font-sans`} >All</h2>
            <p className={`${showPending ? 'bg-[#BCBCBC]': 'bg-white'} font-normal text-xs ml-2 pt-1 w-6 h-6 rounded-full`}>7</p>
        </button>
        <button className={`flex flex-row ml-6 ${showPending ? 'bg-[#BCBCBC] rounded-full py-2 px-1' : ''}`} onClick={PendingButtonClick}><h2 className={`text-base ${showPending ? 'font-bold': 'font-normal'} font-sans`}>Pending</h2><p className={` ${showPending ? 'bg-white':'bg-[#BCBCBC]'} font-normal text-xs ml-2 pt-1 h-6 w-6 rounded-full`}>2</p></button>
            <button className="ml-6 px-2 rounded-full bg-white py-1"><i><svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.49962 14.5667C9.53295 14.8167 9.44962 15.0833 9.25795 15.2583C9.18086 15.3356 9.08928 15.3969 8.98847 15.4387C8.88766 15.4805 8.77959 15.502 8.67045 15.502C8.56131 15.502 8.45325 15.4805 8.35243 15.4387C8.25162 15.3969 8.16005 15.3356 8.08295 15.2583L4.74129 11.9167C4.6504 11.8278 4.58129 11.7192 4.53937 11.5992C4.49745 11.4792 4.48384 11.3511 4.49962 11.225V6.95833L0.507954 1.85C0.372628 1.67628 0.311566 1.45605 0.338111 1.23744C0.364656 1.01883 0.47665 0.819622 0.649621 0.683333C0.807954 0.566667 0.982954 0.5 1.16629 0.5H12.833C13.0163 0.5 13.1913 0.566667 13.3496 0.683333C13.5226 0.819622 13.6346 1.01883 13.6611 1.23744C13.6877 1.45605 13.6266 1.67628 13.4913 1.85L9.49962 6.95833V14.5667ZM2.86629 2.16667L6.16629 6.38333V10.9833L7.83295 12.65V6.375L11.133 2.16667H2.86629Z" fill="black"/>
            </svg>
            </i>
            </button>
            <button><svg className="absolute top-0 right-0" width="35" height="36" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="0.5" width="35" height="35" rx="17.5" fill="white"/>
                <path d="M22.7564 12.752C22.6792 12.6746 22.5875 12.6133 22.4865 12.5714C22.3856 12.5295 22.2774 12.508 22.1681 12.508C22.0589 12.508 21.9507 12.5295 21.8497 12.5714C21.7488 12.6133 21.6571 12.6746 21.5799 12.752L17.5 16.8236L13.4201 12.7436C13.3428 12.6664 13.2511 12.6051 13.1502 12.5633C13.0493 12.5215 12.9411 12.5 12.8319 12.5C12.7226 12.5 12.6144 12.5215 12.5135 12.5633C12.4126 12.6051 12.3209 12.6664 12.2436 12.7436C12.1664 12.8209 12.1051 12.9126 12.0633 13.0135C12.0215 13.1144 12 13.2226 12 13.3319C12 13.4411 12.0215 13.5493 12.0633 13.6502C12.1051 13.7511 12.1664 13.8428 12.2436 13.9201L16.3236 18L12.2436 22.0799C12.1664 22.1572 12.1051 22.2489 12.0633 22.3498C12.0215 22.4507 12 22.5589 12 22.6681C12 22.7774 12.0215 22.8856 12.0633 22.9865C12.1051 23.0874 12.1664 23.1791 12.2436 23.2564C12.3209 23.3336 12.4126 23.3949 12.5135 23.4367C12.6144 23.4785 12.7226 23.5 12.8319 23.5C12.9411 23.5 13.0493 23.4785 13.1502 23.4367C13.2511 23.3949 13.3428 23.3336 13.4201 23.2564L17.5 19.1764L21.5799 23.2564C21.6572 23.3336 21.7489 23.3949 21.8498 23.4367C21.9507 23.4785 22.0589 23.5 22.1681 23.5C22.2774 23.5 22.3856 23.4785 22.4865 23.4367C22.5874 23.3949 22.6791 23.3336 22.7564 23.2564C22.8336 23.1791 22.8949 23.0874 22.9367 22.9865C22.9785 22.8856 23 22.7774 23 22.6681C23 22.5589 22.9785 22.4507 22.9367 22.3498C22.8949 22.2489 22.8336 22.1572 22.7564 22.0799L18.6764 18L22.7564 13.9201C23.0734 13.603 23.0734 13.069 22.7564 12.752Z" fill="#F67678"/>
                </svg>
            </button>
        </div>
        <table className="table-fixed w-full relative">
        {tasksData.map((task) => (
            (showPending && task.status === 'Due') || !showPending ? (
          <tr key={task.title} className="bg-[#F5F5F5] border-b border-[#BCBCBC]">
              
              <td><><p className="font-sans font-normal text-base my-4" suppressHydrationWarning>{task.title}</p></></td>
              
              <td>
              <>
                <div className="-ml-20 max-xl:ml-1 max-md:flex flex-wrap" suppressHydrationWarning>
                    <button className={`rounded-full text-white font-sans max-lg:my-1 ${task.status === 'Due' ?  'bg-[#C64446]':'bg-[#414345]'} text-xs font-normal px-2 py-1 ml--10`}>{task.status} </button>
                    <span className="rounded-full text-xs font-sans font-normal bg-white px-2 sm:mx-0 sm:my-2 md:my-1 py-1 mx-2">{task.dueDate?.split(' ')[0]}</span>
                    {task.status === 'Due' ?(
                    <span className="rounded-full text-xs font-sans font-normal bg-white px-2 py-1 sm:my-2">{task.dueDate?.split(' ')[1]}</span>
                    ):(
                        <>
                        <span className="text-base font-sans font-normal sm:mx-2 sm:my-2">Rank: {task.rank}</span>
                        <span className="text-base font-sans font-normal mx-2 sm:my-2">Percentile: {task.percentile}</span>
                        </>
                    )}
                </div>
              </>
              </td>
              <td>
                <>
                {task.status === 'Due' ? (
                    <Link href="/student/test-guide">
                  <button className="float-right px-3 py-2 flex bg-[#AED69F] rounded-full">
                    <span className="text-xs font-normal pr-3">Take Test</span>
                    <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.93476 1.06516C0.795705 1.20393 0.685383 1.36876 0.610111 1.55022C0.534839 1.73168 0.496094 1.9262 0.496094 2.12266C0.496094 2.31911 0.534839 2.51363 0.610111 2.69509C0.685383 2.87655 0.795705 3.04138 0.93476 3.18016L6.75476 9.00015L0.93476 14.8202C0.795887 14.959 0.685728 15.1239 0.61057 15.3053C0.535413 15.4868 0.496729 15.6813 0.496729 15.8777C0.496729 16.074 0.535413 16.2685 0.61057 16.45C0.685728 16.6314 0.795887 16.7963 0.93476 16.9352C1.07363 17.074 1.2385 17.1842 1.41995 17.2593C1.60139 17.3345 1.79586 17.3732 1.99226 17.3732C2.18866 17.3732 2.38313 17.3345 2.56457 17.2593C2.74602 17.1842 2.91089 17.074 3.04976 16.9352L9.93476 10.0502C10.0738 9.91138 10.1841 9.74655 10.2594 9.56509C10.3347 9.38363 10.3734 9.18911 10.3734 8.99265C10.3734 8.7962 10.3347 8.60168 10.2594 8.42022C10.1841 8.23876 10.0738 8.07393 9.93476 7.93515L3.04976 1.05015C2.47976 0.480155 1.51976 0.480155 0.93476 1.06516Z" fill="black"/>
                    </svg>
                  </button>
                     </Link>
                ):(
                    <div className="float-right pr-2">
                    <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.93476 1.06516C0.795705 1.20393 0.685383 1.36876 0.610111 1.55022C0.534839 1.73168 0.496094 1.9262 0.496094 2.12266C0.496094 2.31911 0.534839 2.51363 0.610111 2.69509C0.685383 2.87655 0.795705 3.04138 0.93476 3.18016L6.75476 9.00015L0.93476 14.8202C0.795887 14.959 0.685728 15.1239 0.61057 15.3053C0.535413 15.4868 0.496729 15.6813 0.496729 15.8777C0.496729 16.074 0.535413 16.2685 0.61057 16.45C0.685728 16.6314 0.795887 16.7963 0.93476 16.9352C1.07363 17.074 1.2385 17.1842 1.41995 17.2593C1.60139 17.3345 1.79586 17.3732 1.99226 17.3732C2.18866 17.3732 2.38313 17.3345 2.56457 17.2593C2.74602 17.1842 2.91089 17.074 3.04976 16.9352L9.93476 10.0502C10.0738 9.91138 10.1841 9.74655 10.2594 9.56509C10.3347 9.38363 10.3734 9.18911 10.3734 8.99265C10.3734 8.7962 10.3347 8.60168 10.2594 8.42022C10.1841 8.23876 10.0738 8.07393 9.93476 7.93515L3.04976 1.05015C2.47976 0.480155 1.51976 0.480155 0.93476 1.06516Z" fill="black"/>
                    </svg>
                  </div>
                )}
                </>
              </td>
          </tr>
        ):null
        ))}
        <br /><br />
        </table>
        </div>
      </div>
    );
  }
  
  export default TaskGrid;