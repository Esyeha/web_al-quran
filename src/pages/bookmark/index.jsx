import { useEffect } from "react"
import { useState } from "react"
import ListAyat from "../../components/shered/ListAyat"
import { Utils } from "../../utils"

const Bookmark = () => {
  const [onBookmark, setOnBookmark] = useState({})

  useEffect(() => {
    const bookmark = Utils.getBookmark()
    if(bookmark) setOnBookmark(bookmark)
  }, [])

  const removeBookmark = () => {
    Utils.removeBookmark()
    setOnBookmark({})
  }

  return (
    <>
      <div className="h-full flex justify-center items-center flex-col gap-y-4">
          
          <div className={`flex justify-center relative ${onBookmark && onBookmark.id ? 'w-11/12' : 'w-full'}`}>
            <h2 className="text-2xl font-bold text-gray-800">{onBookmark.namaSurah}
            </h2>

            <div className="w-8 absolute right-11 cursor-pointer active:bg-red-600 rounded-full"
            onClick={() => removeBookmark()}>
              {
                onBookmark && onBookmark.id ? <img src="hapus.png" alt="delete" /> : null
              }
            </div>
        

          </div>

          <div className="w-11/12">
            {onBookmark && onBookmark.id ? <ListAyat data={onBookmark} onBookmark={onBookmark} width="w-full" /> : <h1 className="text-3xl font-bold text-gray-900">
              <p className="text-center">Not bookmark added yet</p>
              </h1>}
          </div>
      </div>
    </>
  )
}

export default Bookmark