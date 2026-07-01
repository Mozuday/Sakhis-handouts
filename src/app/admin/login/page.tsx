"use client";

import {useState} from "react";
import {useRouter} from "next/navigation";


export default function Login(){

const router = useRouter();

const [password,setPassword]=useState("");
const [loading,setLoading]=useState(false);



async function login(){

setLoading(true);


const res = await fetch(
"/api/admin/login",
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
password
})
}
);


const data = await res.json();


if(data.success){

router.replace("/admin");

}

else{

alert("Wrong password");

}


setLoading(false);

}



return (

<div className="
min-h-screen
flex
items-center
justify-center
bg-[#faf7f2]
">


<div className="
rounded-[32px]
bg-white
border
p-8
w-full
max-w-md
">


<h1 className="
text-3xl
mb-6
">

Admin Login

</h1>



<input

type="password"

placeholder="Password"

value={password}

onChange={(e)=>setPassword(e.target.value)}

className="
w-full
border
rounded-xl
p-4
"

/>



<button

onClick={login}

disabled={loading}

className="
mt-5
w-full
rounded-full
bg-black
text-white
py-4
"

>

{
loading
?
"Checking..."
:
"Login"
}


</button>


</div>


</div>

)

}