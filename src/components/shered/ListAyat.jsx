const ListAyat = ({ data, setBookmark, onBookmark, showIconBookmark = false }, props) => {
    const { width = "w-11/12"} = props
    return (
        <>
            <div className="p-5 w-full px-12 flex flex-col">
                <div className="flex justify-end pb-2">
                    <h3 className="text-3xl font-bold text-gray-900">{data.ar}</h3>
                </div>
                <p className="justify-start text-2xl font-light italic">{data.tr}</p>
                <p className="text-sm">{data.nomor}, {data.idn}</p>
            </div>
            <div className="w-full flex justify-center items-center">
                <IconMark data={data} setBookmark={setBookmark} onBookmark={onBookmark} showIconBookmark={showIconBookmark}/>
                <hr className={`${width} border-slate-900`} />
            </div>

        </>
    )
}

export default ListAyat

const IconMark = ({ data, onBookmark, setBookmark, showIconBookmark }) => {
    return (
        <div>
        {
            showIconBookmark ?
                <>
                <div className="w-8 h-8 cursor-pointer" onClick={() => setBookmark(data)}>
                    <img src={onBookmark.id === data.id ? 'bookmarkSelected.png' : 'bookmark.png'} alt="bookmark" />
                </div>
                </>
                : null
        }
    </div>

    )
}