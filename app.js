
const URL = `https://jsonplaceholder.typicode.com/photos`

const wrapper = document.querySelector('.wrapper')




const fetchNews = async (url) => {

    try {
        const response = await fetch(url)
        const data = await response.json()
        data.slice(0, 200).forEach(item => {
            const block = document.createElement('div')
            block.setAttribute('class', 'block')
            block.innerHTML = `
            <img src="${item.url}" alt="">
            <h3>${item.title}</h3>
            
        `
            wrapper.append(block)
        })
    } catch {
        console.log('ERROR')
    } finally {
        console.log('FINALLY')
    }
}
fetchNews(URL)

