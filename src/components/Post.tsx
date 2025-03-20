import Image from "next/image";

const Post = () => {
    return(
        <div className="flex flex-col gap-4">
            {/* USER */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Image src="https://images.pexels.com/photos/18166547/pexels-photo-18166547/free-photo-of-mar-ferias-mulher-costa.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" width={40} height={40} alt="" className="w-10 h-10 rounded-full"/>
                    <span className="font-medium">Luiz</span>
                </div>
                <Image src="/more.png" width={16} height={16} alt=""/>
            </div>
            
            {/* DESC */}
            <div className="flex flex-col gap-4">
                <div className="w-full min-h-96 relative">
                    <Image 
                        src="https://images.pexels.com/photos/18166547/pexels-photo-18166547/free-photo-of-mar-ferias-mulher-costa.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
                        fill 
                        className="object-cover rounded-md" 
                        alt=""
                    />
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, iure. Obcaecati doloremque, tempore asperiores repudiandae perferendis reiciendis iure, omnis delectus magnam eos quam voluptates repellat fugiat dicta voluptatem reprehenderit harum! 
                </p>
            </div>

            {/* INTERACTION */}
            <div className="flex items-center justify-between text-sm">
                <div className="flex gap-8">
                    <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-xl">
                        <Image 
                            src="/like.png" 
                            width={16}
                            height={16}                            
                            alt=""
                            className="cursor-pointer" 
                        />
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-500">123<span className="hidden md:inline">Likes</span></span>
                    </div>
                    <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-xl">
                        <Image 
                            src="/comment.png" 
                            width={16}
                            height={16}                            
                            alt=""
                            className="cursor-pointer" 
                        />
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-500">123<span className="hidden md:inline">Comments</span></span>
                    </div>  
                </div>
                <div className="">
                <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-xl">
                        <Image 
                            src="/share.png" 
                            width={16}
                            height={16}                            
                            alt=""
                            className="cursor-pointer" 
                        />
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-500">123<span className="hidden md:inline">Shares</span></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post;