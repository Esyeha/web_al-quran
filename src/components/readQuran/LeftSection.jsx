import { useEffect, useState } from 'react'
import ListSurah from './ListSurah'
import InputSeacrh from '../../pages/read_quran/InputSearch'
import { query } from '../../data'


const LeftSection = ({listSurah, getDetailSurah}) => {
    const [search, setSearch] = useState('')

    const onChangehandler = (event) => {
        event.preventDefault()
        setSearch(event.target.value)
    }

    const filteredSurah  = listSurah.filter((surah) => {
        return surah.nama_latin.toLowerCase().includes(search.toLowerCase())
    })

    useEffect(() => {
       if(query.length > 2) {
        setSearch(query[query.length - 1])
       }
    })

    return (
        <div className='bg-slate-400 basis-1/4 flex flex-col'>
            {/* cari surah */}
            <InputSeacrh value={search} onChange={onChangehandler}/>

            {/* list surah */}
            {
                listSurah.length > 0 ?
                <ListSurah listSurah={filteredSurah} getDetailSurah={getDetailSurah}/>
                : <div className='w-full h-full flex justify-center items-center'>
                    <img src="no-wifi.png" alt="no-wifi" width={50}/>
                </div>
            }
        </div>

    )
}

export default LeftSection
