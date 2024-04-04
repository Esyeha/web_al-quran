import React, { useEffect, useState } from 'react'
import LeftSection from '../../components/readQuran/LeftSection'
import RightSection from '../../components/readQuran/RightSection'
import { quranAPI } from '../../services/quran_api'
import Loaders from '../../components/readQuran/Loading'

const ReadQuran = () => {
  const [listSurah, setListSurah] = useState([])
  const [detaiSurah, setDetailSurah] = useState({})
  const [loading, setLoading] = useState(true)
  const [loadSurah, setLoadSurah] = useState(false)

  useEffect(() => {
    getSurah()
  },[])

  async function getSurah() {
    quranAPI.getSurah().then(surah => {
      setListSurah(surah) 
      setLoading(false)
    })
  }

  async function getDetailSurah(nomor) {
    setLoadSurah(true)
    setDetailSurah({})
    quranAPI.getDetailSurah(nomor).then(detailSurah => {
      setDetailSurah(detailSurah)
      setLoadSurah(false)
    })
  }


  return (
      <>
          <div className='flex w-full h-screen'>
           {
            loading ? <Loaders /> : 
              <>
                <LeftSection listSurah={listSurah ?? []} getDetailSurah={getDetailSurah} />

                <RightSection detaiSurah={detaiSurah ?? []} loadSurah={loadSurah}/>
              </>
           }
          </div>
      </>
  )
}

export default ReadQuran