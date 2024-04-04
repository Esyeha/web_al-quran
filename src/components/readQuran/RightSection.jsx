import Header from "../../pages/read_quran/HeaderSection"
import Loaders from "./Loading"
import ListAyat from '../shered/ListAyat'
import { useEffect, useState } from "react"
import { Utils } from "../../utils"

const RightSection = ({detaiSurah, loadSurah}) => {
    const [onBookmark, setOnBookmark] = useState({})

    const setBookmark = (value) => {
        const bookmark = Utils.getBookmark()

        if(bookmark && bookmark['id'] === value.id) {
            setOnBookmark({})
           return Utils.removeBookmark()
        }
        Utils.setBookmark({...value,namaSurah: detaiSurah.nama_latin})
        setOnBookmark({...value,namaSurah: detaiSurah.nama_latin})
    }

    useEffect(() => {
        const bookmark = Utils.getBookmark()
        if (bookmark) setOnBookmark(bookmark)
    }, [])

    const isNotEmpty = () => {
        return Object.keys(detaiSurah).length > 0
    } 

    return (
        <div className='bg-slate-300 basis-3/4 flex flex-col items-center'>
            {
                loadSurah ? <Loaders /> : <>
                {isNotEmpty() ? (
                    <>
                        <Header namaSurah={detaiSurah.nama_latin} />
                            
                    {/* list ayat */}
                    <div className=" h-full w-full overflow-auto">
                        {detaiSurah.ayat.map((data) => (
                            <ListAyat 
                            key={data.nomor} 
                            data={data}
                            setBookmark={setBookmark}
                            onBookmark={onBookmark}
                            showIconBookmark={true}
                           />
                        ))}
                    </div>
                    </>
                ) : (
                    <></>
                )}
                
                </>
            }
            </div>
    )
}

export default RightSection







