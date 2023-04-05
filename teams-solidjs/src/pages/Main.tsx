import {Component} from 'solid-js';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import ChatList from '../components/ChatList';
import Chat from '../components/Chat';

const Main : Component = () => {
    return <div class="flex flex-col w-screen h-screen overflow-hidden">
        <Header />
        <div class="flex flex-row grow">
            <Sidebar />
            <div class="flex flex-row w-full">
                <ChatList />
                <Chat />
            </div>
        </div>
    </div>;
}

export default Main;