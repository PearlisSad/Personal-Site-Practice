import React from "react";

function Profile(){
    return(
        <div class="mx-auto flex max-w-sm items-start  gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
        <img class="size-12 shrink-0" src="/src/assets/profile_pic.png" alt="ChitChat Logo" />
      <div>
        <div class="text-xl font-medium text-black dark:text-white">Ralpha</div>
          <p class="text-gray-500 dark:text-gray-400">The G.O.A.T.</p>
        </div>
      </div>
    )
}
export default Profile