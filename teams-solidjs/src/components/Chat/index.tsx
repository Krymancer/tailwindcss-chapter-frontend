import { Component } from "solid-js";

import { AiOutlinePlus } from 'solid-icons/ai'
import { FiUserPlus } from 'solid-icons/fi'
import { BsCameraVideo, BsTelephone } from 'solid-icons/bs'
import { IoText } from 'solid-icons/io'
import { FaSolidExclamation } from 'solid-icons/fa'
import { ImAttachment } from 'solid-icons/im'
import { BsEmojiSmileFill } from 'solid-icons/bs'
import { AiOutlineGif } from 'solid-icons/ai'
import { BiRegularSticker } from 'solid-icons/bi'
import { FaSolidCalendarDay } from 'solid-icons/fa'
import { AiOutlineSend } from 'solid-icons/ai'

const ChatHeader : Component = () => {
    return <div class="bg-gray-25 w-full h-[65px]">
        <div class="flex flex-row justify-between border-b px-6 h-full">
            <div class="flex flex-row gap-3 items-center h-full">
                <div class="text-headline font-bold gap-2 flex flex-row items-cent">
                    <img class="rounded-full w-7 h-7" src="https://letters.noticeable.io/C0.png" />
                    Chapter Frontend
                </div>
                <div class="border-b-2 border-brand-750 h-full flex items-center">
                    Chat
                </div>
                <div>
                    Files
                </div>
                <div>
                    <AiOutlinePlus />
                </div>
            </div>
            <div class="flex flex-row items-center gap-3 text-gray-300">
                <div class="bg-brand-650 hover:bg-brand-800 cursor-pointer w-24 h-8 flex items-center justify-center text-white font-bold text-body1 flex-row rounded-md">
                    Join
                </div>
                <FiUserPlus />
            </div>
        </div>
    </div>;
}

const ChatMessages : Component = () => {
    return <div class="w-full grow p-4 gap-3 flex flex-col text-gray-450">
        <div class="text-body1 w-full flex justify-end px-6">
            <div class="bg-brand-100 p-3 w-96 rounded-md">
                <div class="text-caption text-gray-350"> 3/9 10:03 AM</div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad vero dolorem voluptatum reiciendis autem! Distinctio doloribus porro, numquam ad, nihil aliquid quibusdam quia, iusto facere impedit nostrum consequuntur obcaecati sunt.
            </div>
        </div>
        <div class="text-body1 w-full flex justify-start px-6 ">
            <img class="rounded-full w-7 h-7 mt-3 mr-3" src="https://letters.noticeable.io/C0.png" />
            <div class="w-80 bg-white p-3 rounded-md">
                <div class="text-caption font-bold flex flex-row gap-3 pb-3">
                    Chapter Backend
                    <div class="text-caption text-gray-350 font-normal"> 3/9 10:03 AM</div>
                </div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad vero dolorem voluptatum reiciendis autem! Distinctio doloribus porro, numquam ad, nihil aliquid quibusdam quia, iusto facere impedit nostrum consequuntur obcaecati sunt.
            </div>    
        </div>
    </div>
}

const ChatMessageBar : Component = () => {
    return <div class="w-full grow-0 px-9 pt-2 pb-3">
        <div class="bg-white p-1 text-gray-350 text-body1 border border-gray-200 h-[38px] flex items-center px-2">
            Type a new Message
        </div>
        <div class="flex items-center justify-between pt-2 text-gray-400">
            <div class="flex flex-row gap-3">
                <IoText  />
                <FaSolidExclamation  />
                <ImAttachment  />
                <BsEmojiSmileFill  />
                <AiOutlineGif  />
                <BiRegularSticker  />
                <FaSolidCalendarDay  />
            </div>
            <div class="flex flex-row gap-3 text-gray-400">
                <BsCameraVideo />
                <AiOutlineSend />
            </div>
        </div>
    </div>
}

const Chat : Component = () => {
    return <div class="flex w-full flex-col h-full bg-gray-25">
        <div class="flex grow-0">
            <ChatHeader />
        </div>
        <div class="flex grow flex-col mx-auto min-w-[60%]">
            <ChatMessages />
            <ChatMessageBar />
        </div>
    </div>
}

export default Chat;