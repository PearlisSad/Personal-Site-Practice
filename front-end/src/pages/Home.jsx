import React from "react"
import Profile from "../component/Profile"
import Sidebar from "../component/Sidebar"

function Home(){
    return(
        <section>
            <div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
                <div>
                    <div class="max-w-prose md:max-w-none">
                    <h2 class="text-2xl font-semibold text-gray-900 sm:text-3xl">
                        Wagwan bro, dont worry about this still. Mans working on it
                    </h2>

                    <p class="mt-4 text-pretty text-gray-700">
                        Stop reading before I cheff you up wasteman.
                    </p>
                    </div>
                </div>

                <div>
                    <img src="https://png.pngtree.com/png-clipart/20221223/original/pngtree-flat-under-construction-sign-background-design-png-image_8801136.png" class="rounded" alt=""></img>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Home