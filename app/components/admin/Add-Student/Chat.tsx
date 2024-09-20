import React from 'react'

const Chat = () => {
    return (
        <div className="border-t border-white border-solid rounded-full pb-4">
            <div className="flex items-center  my-6">
                <div className="w-6 h-6 rounded-full overflow-hidden mr-2 ml-10">
                    <img src="/images/Liftu-Image.jpeg" alt="icon" />
                </div>
                <p>Add students manually</p>
            </div>
            <div className="flex items-center space-x-2 my-4">
                <div className="w-6 h-6 rounded-full overflow-hidden mr-2 ml-10">
                    <img src="/images/liftu-bot.png" alt="icon" />
                </div>
                <p>You can add the student email ids in the above segment or add a group mailing list.</p>
            </div>
        </div>
    )
}

export default Chat