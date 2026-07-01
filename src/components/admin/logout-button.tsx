"use client";


export default function LogoutButton(){


async function logout(){


await fetch("/api/admin/logout");


window.location.href="/admin/login";


}



return (

<button

onClick={logout}

className="
rounded-full
bg-black
text-white
px-6
py-3
"

>

Logout

</button>

)


}