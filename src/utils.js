export const Utils = {
    getBookmark:() => {
        const bookmark = localStorage.getItem('bookmark')
        if(bookmark) return JSON.parse(bookmark)
    },
    setBookmark:(value) => {
        localStorage.setItem('bookmark', JSON.stringify(value))
    },
    removeBookmark:() => {
        localStorage.removeItem('bookmark')
    }
}