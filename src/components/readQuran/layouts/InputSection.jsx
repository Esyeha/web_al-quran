const InputSection = ({quickSearch}) => {
    return (
        <div className="mt-28 text-center flex flex-col gap-y-1">
            <span className="text-sm">Quick surah & ayat finder</span>
            <input placeholder="Search Surah..." className=" bg-gray-400 p-2 shadow-lg rounded-xl placeholder-slate-700"
            onChange={(e) => quickSearch(e.target.value)}/>
        </div>
    )
}

export default InputSection