import Image from 'next/image';

const Stories = () => {
    return (
        // Remoção de  
        <div className="p-4 bg-white rounded-lg overflow-scroll shadow-md text-xs scrollbar-hide">
            <div className="flex gap-8 w-max">
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                    <Image src="https://images.pexels.com/photos/31120801/pexels-photo-31120801/free-photo-of-paisagem-de-praia-cenica-com-ilha-rochosa.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2"/>
                    <span className='font-medium'>Luiz</span>
                </div>
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                    <Image src="https://images.pexels.com/photos/31120801/pexels-photo-31120801/free-photo-of-paisagem-de-praia-cenica-com-ilha-rochosa.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2"/>
                    <span className='font-medium'>Luiz</span>
                </div>
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                    <Image src="https://images.pexels.com/photos/31120801/pexels-photo-31120801/free-photo-of-paisagem-de-praia-cenica-com-ilha-rochosa.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2"/>
                    <span className='font-medium'>Luiz</span>
                </div>
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                    <Image src="https://images.pexels.com/photos/31120801/pexels-photo-31120801/free-photo-of-paisagem-de-praia-cenica-com-ilha-rochosa.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2"/>
                    <span className='font-medium'>Luiz</span>
                </div>
            </div>
        </div>
    )
}

export default Stories;