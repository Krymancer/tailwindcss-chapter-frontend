import { Component, JSXElement, For, Show } from "solid-js";

import { BellIcon, ChatIcon, TeamsIcon, CalendarIcon, CallIcon, HelpIcon, IconProps } from "../icons";

interface SideBarItem {
    name: string;
    icon: Component<IconProps>;
    selected: boolean;
}

const items: Array<SideBarItem> = [
    {
        name: 'Activity',
        icon: BellIcon,
        selected: false,
    },
    {
        name: 'Chat',
        icon: ChatIcon,
        selected: true,
    },
    {
        name: 'Teams',
        icon: TeamsIcon,
        selected: false,
    },
    {
        name: 'Calendar',
        icon: CalendarIcon,
        selected: false,
    },
    {
        name: 'Calls',
        icon: CallIcon,
        selected: false,
    },
];

const Sidebar: Component = () => {

    function getItem(item: SideBarItem): JSXElement {
        return  <Show 
                    when={item.selected} 
                    fallback={
                    <div class="text-gray-300 flex flex-col items-center justify-center w-[68px] h-14">
                        <item.icon size={40} color={'#616161'} fill={false} />
                        <div class="text-subcaption mt-[-0.6rem]">{item.name}</div>
                    </div>
                }>
                        <div class="text-brand-650 flex flex-col items-center justify-center w-[68px] h-14 border-l-2 border-brand-650">                            
                            <item.icon size={40} color={'#5b5fc7'} fill={true} />
                            <div class="text-subcaption mt-[-0.6rem]">{item.name}</div>
                        </div>
                </Show>
    }    


    return <div class="w-16 bg-gray-150 h-full flex flex-col justify-between">
        <div class="p-[1px]">
            <For each={items}>{
                (item) => getItem(item)
            }</For>
        </div>
        {getItem({name: 'Help', icon: HelpIcon, selected: false})}
    </div>;
}

export default Sidebar;