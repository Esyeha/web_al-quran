import InputSection from "./InputSection"
import LogoSection from "./LogoSection"
import MenuSection from "./MenuSection"

const LeftSection = ({menus, handleClick, selectedPage, quickSearch}) => {
    return (
        <div className="bg-slate-500 basis-1/6">
        <div className="h-full grid grid-rows-3 p-2 place-items-center">
            <LogoSection handleClick={ () => handleClick(menus[0])} />
            <MenuSection 
            menus={menus} 
            handleClick={handleClick} 
            selectedPage={selectedPage}
            />
            <InputSection quickSearch={quickSearch}/>
        </div>
    </div>
    )
}

export default LeftSection
