const ListSurah = ({ listSurah, getDetailSurah }) => {
    return (
        <div className=" h-full w-full p-4 overflow-auto scroll-bar">
            {listSurah.map((surah) => (
                <div onClick={() => getDetailSurah(surah.nomor)}  key={surah.nomor} >
                    <ItemSurah 
                    no={surah.nomor} 
                    namaSurah={surah.nama_latin} 
                    artiSurah={surah.arti} 
                    jmlAyat={surah.jumlah_ayat} 
                    tempatSurah={surah.tempat_turun}
                    getDetailSurah={getDetailSurah} />
                </div>
            ))}
      </div>
    )
}

export default ListSurah






const ItemSurah = ({no, namaSurah, artiSurah, jmlAyat, tempatSurah}) => {
    return (
        <div
         className="bg-white h-28 rounded-xl cursor-pointer mb-3">
        <div className="pl-4 pt-3 flex gap-x-2 font-bold text-lg text-gray-800">
            <h2>{no}.</h2>
            <h2>{namaSurah}</h2>
        </div>
        <div className="pl-4">
            <p className="text-md font-medium text-gray-600">{artiSurah}</p>
            <p className="text-sm font-medium text-gray-500">{tempatSurah}, {jmlAyat} ayat</p>
        </div>
      </div>
    )
}