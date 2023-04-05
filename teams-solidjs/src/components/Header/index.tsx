import {Component} from 'solid-js';

import { IoAppsSharp } from 'solid-icons/io'
import { FiSearch } from 'solid-icons/fi'
import { BiRegularDotsHorizontalRounded } from 'solid-icons/bi'
import { WaffleIcon, DotsIcon } from '../icons';

const Header : Component = () => {
    return <div class="flex flex-column bg-brand-750 text-white h-12 w-full items-center justify-between">
        <div class="flex flex-row">
            <div class="flex items-center justify-center w-[68px] h-12">
                <WaffleIcon size={32} />
            </div>
            <div class="flex flex-column items-center font-semibold pl-8 text-body1">
                Microsoft Teams
            </div>
        </div>
        <div class="flex flex-column items-center gap-3 px-3 h-8 w-7/12 rounded-sm bg-brand-300 text-brand-750 text-body1">
            <FiSearch />
            Search
        </div>
        <div class="flex flex-column items-center gap-6 px-6">
            <DotsIcon fill />
            <div class="text-body1 2xl:block hidden">Organization</div>
            <img class="rounded-full w-8 h-8" src="https://avatars.githubusercontent.com/u/17505605?v=4" />
        </div>
    </div>;
}

export default Header;