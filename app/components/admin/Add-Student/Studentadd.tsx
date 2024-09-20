"use client"
import React, { useState } from 'react'

const Studentadd = () => {
    const [inputValues, setInputValues] = useState<string[]>([])
    const [newInput, setNewInput] = useState('')
    const [selectedItems, setSelectedItems] = useState<number[]>([])

    const handleAdd = () => {
        if (newInput.trim() !== '') {
            setInputValues((prevValues) => [...prevValues, newInput])
            setNewInput('')
        }
    }

    const handleSelect = (index: number) => {
        if (selectedItems.includes(index)) {
            setSelectedItems(selectedItems.filter((i) => i !== index))
        } else {
            setSelectedItems([...selectedItems, index])
        }
    }

    const handleDelete = () => {
        setInputValues((prevValues) =>
            prevValues.filter((_, index) => !selectedItems.includes(index))
        )
        setSelectedItems([])
    }

    return (
        <div className="flex flex-col h-full">
            <div className="mt-4 flex justify-end">
                <button className="bg-black text-white text-sm rounded-full h-8 w-28 flex justify-center items-center mr-8">
                    🔗 Copy Link
                </button>
                <button className="bg-black text-white text-sm rounded-full h-[35px] w-[35px] flex justify-center items-center mr-8">
                    ❌
                </button>
            </div>
            <div className="flex-grow my-4">
                <div className="flex flex-col">
                    <div className="flex justify-end">
                        <input
                            type="text"
                            className="bg-transparent text-white text-sm rounded-full h-[54px] w-[951px] px-4 ml-8 mr-8 border-2 border-white outline-none focus:border-white"
                            placeholder="Add student mail ids and a group mail id"
                            value={newInput}
                            onChange={(e) => setNewInput(e.target.value)}
                        />
                        <button
                            className="bg-[#AED69F] text-white text-sm rounded-full h-[38px] w-[145px] flex justify-center items-center float-right mr-8"
                            onClick={handleAdd}
                        >
                            ADD
                        </button>
                    </div>
                    <ul className="list-disc list-inside mt-4 mb-2 ml-10">
                        {inputValues.map((value, index) => (
                            <li key={index} className="flex items-center justify-between mb-2">
                                <span className="text-lg">{value}</span>
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        className="h-6 w-6 mr-4"
                                        checked={selectedItems.includes(index)}
                                        onChange={() => handleSelect(index)}
                                    />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="flex justify-center items-end">
                <div className="flex space-x-4">
                    <button className="bg-[#AED69F] text-white text-sm rounded-full h-8 w-20 flex justify-center items-center float-right mr-8">
                        Invite
                    </button>
                    <button className="bg-[#F67678] text-white text-sm rounded-full h-8 w-20 flex justify-center items-center float-right mr-8" onClick={handleDelete}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Studentadd