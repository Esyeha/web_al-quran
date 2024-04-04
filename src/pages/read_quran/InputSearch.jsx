const InputSeacrh = ({ value,  onChange}) => {
    return (
        <div className="bg-gray-600 w-full h-24 flex justify-center items-center">
                <div className="relative w-10/12">
                    <div className="absolute right-0 flex justify-center items-center bg-slate-400 border border-white w-10 h-10  rounded-e-xl cursor-pointer">
                        <img src="find.png" alt="cari" width={20} height={20} />
                    </div>
                    <input 
                    className="w-full bg-slate-200 rounded-xl p-2 " placeholder="Cari Surah..."
                    value={value} 
                    onChange={(e) => onChange(e)}
                    />
                </div>
            </div>
    )
}

export default InputSeacrh