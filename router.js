

export default async function navigate(route) {
    const contentArea = document.getElementById('app')

    contentArea.innerHTML = 'Loading...'

    try{
        const response = await fetch(`./snippets/${route}.html`)

        if(!response.ok){
            const notFound = await fetch(`./snippets/404.html`)
            const page404 = await notFound.text()
            contentArea.innerHTML = page404
        }

        const htmlSnippet = await response.text()
        contentArea.innerHTML = htmlSnippet
    }catch(error){
        console.error('Navigation Error.', error)
        contentArea.innerHTML ='Something went wrong'
    }
}