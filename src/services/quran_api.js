export const  quranAPI = {
    getSurah: async () => {
        try {
           const response = await fetch('https://equran.id/api/surat')
           const data = await response.json()
           return data
        } catch (err) {
            console.log(err)
        }
    },

    getDetailSurah: async (no) => {
        try {
            const response = await fetch(`https://equran.id/api/surat/${no}`)
            const data = await response.json()
            return data
        } catch (err) {
            console.log(err)
        }

  }
}