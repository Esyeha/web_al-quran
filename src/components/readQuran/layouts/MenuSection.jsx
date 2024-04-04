const MenuSection = ({ menus, handleClick, selectedPage }) => {
    return (
        <div className="flex flex-col w-3/4 text-center gap-y-8 text-gray-800 font-semibold text-xl mt-10">
                        {menus.map((menu,i) => (
                            i !== 0 ?
                             <h1 onClick={() => handleClick(menu)}
                             key={i} 
                             className={`bg-slate-400 p-2 shadow-lg rounded-xl transition ${selectedPage.name === menu.name ? 'scale-110' : ''} cursor-pointer`}>{menu.name}</h1>
                             : null
                             ))}
                    </div>
    )
}

export default MenuSection