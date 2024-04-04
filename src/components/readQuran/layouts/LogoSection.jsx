const LogoSection = ({handleClick}) => {
    return (
        <div className="text-center pb-3 cursor-pointer" onClick={handleClick}>
                        <img src="quran.png" alt="quran" />
                        <h3 className="text-xl font-bold text-gray-900">Al-Quran App</h3>
                    </div>
    )
}


export default LogoSection