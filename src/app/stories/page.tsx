import Router from "next/router"

export default function Stories() {
    return (
        <div className="scroll-px-4 flex flex-col items-center justify-center">
        <h1 className="text-center text-5xl font-semibold italic py-12">STORIES</h1>
        <p className="text-center text-3xl font-thin text-greytext">Thoughts, experiences, & mostly story of anything</p>
        <p className="text-center text-3xl font-thin text-greytext">I want to share. (not so serious writings)</p>
        <div className="flex flex-col w-full justify-center items-center py-6">

        <div className="flex flex-row w-[60%] bg-greycard bg-opacity-50 my-6 p-8 rounded-md outline outline-1 outline-greyline">
            <div className="flex flex-col gap-6 ">
                <h1 className="text-xl font-bold">Multiple Machine-Learning Monolithic Backend Service</h1>
                <p className="w-[90%] font-thin text-lg text-greytext">How i develop Multiple Machine-Learning Service for an app by managing to use the service advantage of monolithic service.</p>
            </div>
            <img src="https://res.cloudinary.com/dg4b8sell/image/upload/v1692367277/rizkeeps.com/icons/illustration__cloud_server_servers__voqjtj.svg"/>
        </div>
        
        </div>

        </div>
    )
}