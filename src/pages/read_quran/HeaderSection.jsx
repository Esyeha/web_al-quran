const Header = ({namaSurah}) => {
    return (
        <div className="flex bg-slate-200 w-full justify-center items-center h-[94px]">
               <div className="flex bg-slate-100 w-3/4 py-2 rounded-3xl justify-between px-10 shadow-xl">
                    <h1 className="text-3xl font-semibold text-gray-800">{namaSurah}</h1>
                    <img src="sound.png" alt="sound" width={25} height={18}/>
               </div>
            </div>
    )
}


export default Header