import { Component } from "solid-js";

const Card : Component = () => {
    return <div class="rounded-xl bg-gray-300 max-w-[420px] overflow-hidden">
        <div >
            <img src="beach.png" />
        </div>
        <div class="p-4">
            <div class="text-xl text-gray-500">
                Travel
            </div>
            <div >
                <span class="font-bold">Trip Planning</span>
                <div>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius natus laborum nihil, laboriosam architecto ut veritatis vel impedit quasi fugit nostrum nemo repellat. Eius quo porro aspernatur, ea inventore facilis.
                </div>
            </div>
        </div>
    </div>
};

export default Card;