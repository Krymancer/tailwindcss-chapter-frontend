import { Component, For} from "solid-js";

import { AiOutlineDown, AiOutlineCaretDown } from 'solid-icons/ai'
import { CgDetailsMore } from 'solid-icons/cg'
import { FiEdit } from 'solid-icons/fi'

const ChatList : Component = () => {
    function getChats() {
        return [...Array(5)].map((e,i) => 
            <div class="flex flex-row gap-3 items-center text-body1 text-gray-450 py-2">
                <img class="rounded-full w-8 h-8" 
                src={`https://letters.noticeable.io/${String.fromCharCode(i + 65)}${i%18}.png`} />
                Totally a Person
            </div>
        );
    }


    return <div class="h-full bg-gray-100 border-gray-300 w-80">
        <div class="flex flex-row justify-between border-b px-6 py-4 h-[65px]">
            <div class="text-headline font-bold gap-2 flex flex-row items-cent">
                Chat <div class="text-gray-300 flex items-center"><AiOutlineDown size={'16px'}/></div>
            </div>
            <div class="flex flex-row items-center gap-3 text-gray-300">
                <CgDetailsMore />
                <FiEdit />
            </div>
        </div>
        <div class="px-6 pt-3">
            <div class="text-gray-300 flex flex-row gap-3 text-caption">
                <AiOutlineCaretDown />
                Pinned
            </div>
            <div class="flex flex-row gap-3 items-center text-body1 text-gray-450 py-2">
                <img class="rounded-full w-8 h-8" src="https://avatars.githubusercontent.com/u/17505605?v=4" />
                Krymancer
            </div>
        </div>

        <div class="px-6 pt-3">
            <div class="text-gray-300 flex flex-row gap-3 text-caption">
                <AiOutlineCaretDown />
                Recent
            </div>
            <For each={getChats()}>{
                (item) => item
            }</For>
        </div>
    </div>;
}

export default ChatList;