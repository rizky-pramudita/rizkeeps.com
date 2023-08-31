import Router from "next/router"

export default function About() {
    return (
        <div className="flex flex-col px-36 items-center scroll-px-6 gap-4">
            <div className="flex flex-row scroll-px-6 justify-center items-center">
                <div className="flex flex-col">
                    <img src="https://res.cloudinary.com/dg4b8sell/image/upload/v1679290175/rizkeeps.com/DSCF5352-removebg-preview_v5qpub.png" className=""></img>
                </div>
                <div className="flex flex-col gap-4 w-[70%] py-12">
                    <h1 className="text-3xl py-6 font-semibold text-yellow italic">Rizky Pramudita Setyawan</h1>
                    <h1 className="text-xl py-6 font-bold text-white">Software Engineering & Product Design</h1>
                    <p className="text-xl font-thin text-greytext w-[60%]">Mainly I do Software Engineering both backend and frontend, I also experienced in product design and research. </p>
                    <p className="text-xl font-thin text-greytext w-[60%]">Over these years I have experienced software development, UI/UX, and cloud engineering while continuously learning and growing in both field. I am a proud and confident multiple hat engineer. </p>
                </div>
            </div>
        </div>
    )
}