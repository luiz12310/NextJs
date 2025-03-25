import Image from "next/image";

const Ad = ({size}:{size:"sm" | "md" | "lg"}) =>{
    return (
        <div className="p-4 bg-white rounded-lg shadow-md text-sm">
            {/* TOP */}
            <div className="flex items-center justify-between text-gray-500 font-medium">
                <span>Sponsored ads</span>
                <Image src="/more.png" alt="" width={16} height={16} />
            </div>
            {/* BOTTOM */}
            <div className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-1"}`}>
                <div className={`relative w-full ${size === "sm" ? "h-24" : size === "md" ? "h-36" : "h-48"}`}>
                    <Image src="https://images.pexels.com/photos/18166547/pexels-photo-18166547/free-photo-of-mar-ferias-mulher-costa.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" fill className="rounded-lg object-cover"/>
                </div>
                <div className="flex items-center gap-4">
                    <Image src="https://images.pexels.com/photos/18166547/pexels-photo-18166547/free-photo-of-mar-ferias-mulher-costa.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" width={24} height={24} alt="" className="rounded-full w-6 h-6 object-cover"/>
                    <span className="text-blue-500 font-medium">BigChef Lounge</span>
                </div>
                <p className={size === "sm" ? "text-xs" : "text-sm"}>
                    {size === "sm" ? "Lore ipsum dolor sit amet, consectetur adipiscing elit." : size === "md" ? "Lore  ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." : "Lore ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                </p>
                <button className="bg-gray-200 text-gray-500 p-2 text-xs rounded-lg">Learn more</button>
            </div>
        </div>
        //Teste
    )
}

export default Ad;