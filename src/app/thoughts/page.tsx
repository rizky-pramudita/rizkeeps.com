'use server'
import Router from "next/router"
import React from "react";

export default async function Thoughts() {
    return (
        <div className="scroll-px-4 flex flex-col items-center justify-center">
        <h1 className="text-center text-5xl font-semibold italic py-12">Thoughts</h1>
        <div className="flex flex-col w-full justify-center items-center py-6">
        <div className="tabs">
            <a className='tab tab-lg tab-lifted tab-active px-4'>⚡️ Projects & Cases</a> 
            <a className='tab tab-lg px-4'>🚶🏻 Stories</a>
        </div>
        <div className="flex flex-row max-w-[80%] md:max-w-[60%] bg-greycard bg-opacity-50 my-6 p-8 rounded-md outline outline-1 outline-greyline">
            <div className="flex flex-col gap-2 md:gap-6">
                <h1 className="text-md md:text-xl font-bold">Multiple Machine-Learning Monolithic Backend Service</h1>
                <p className="w-full md:w-[90%] font-thin text-sm md:text-lg text-greytext">Multiple Machine-Learning Service for an app by managing the advantage of monolithic architecture.</p>
                <div className="flex flex-row">
                <p className="text-xs text-white font-bold bg-pink py-1 px-2 rounded-lg">Software Engineering</p>
                </div>
            </div>
            <img src="https://res.cloudinary.com/dg4b8sell/image/upload/v1692367277/rizkeeps.com/icons/illustration__cloud_server_servers__voqjtj.svg" className="md:block hidden max-w-[100%] h-auto"/>
        </div>
        
        </div>
        </div>
    )
}