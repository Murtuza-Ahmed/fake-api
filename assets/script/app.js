async function fetchAndDisplayData() {
    try {
        const reqData = await fetch('https://jsonplaceholder.typicode.com/posts')
        const resData = await reqData.json()
        if (resData) {
            resData.filter((post) => console.log(post.title))
            console.log('DATA', resData)
        }
    } catch (err) { console.error(err) }
}

fetchAndDisplayData()