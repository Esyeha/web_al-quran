import { useEffect, useState } from "react"
import LeftSection from "../../components/readQuran/layouts/LeftSection"
import ReadQuran from "../read_quran"
import Bookmark from "../bookmark"
import Setting from "../setting"
import Home from "../home"
import { query } from "../../data"
const Layouts = () => {

    const menus = [
        {
            name: "Home",
            page: <Home />
        },
    {
        name: "Read Quran",
        page: <ReadQuran />
    }, {
        name: "Bookmark",
        page: <Bookmark />
    }, {
        name: "Setting",
        page: <Setting />
    }]

    const [selectedPage, setSelectedPage] = useState(menus[0])


    const handleClick = (menu) => {
        setSelectedPage(menu)
    }
    
    const quickSearch = (value) => {
        if(value.length > 0) {
            setSelectedPage(menus[1])
            query.push(value)
        } else {
            setSelectedPage(menus[0])
            query.slice(0, query.length)
        }
    }


    return (
        <div className="flex h-screen w-full bg-slate-300">
          {/* left section (menu) */}
           <LeftSection 
           menus={menus} 
           handleClick={handleClick} 
           selectedPage={selectedPage}
           quickSearch={quickSearch}/>

           {/* right section */}
           <div className="h-full w-full">
               {selectedPage.page}
           </div>

        </div>
    )
}

export default Layouts




