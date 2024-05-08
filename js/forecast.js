const KEY = '7a6cb85497f2731dc872ffcadea17627'

//request jo'natish 
const getData = async (city) =>{
    const base = 'https://api.openweathermap.org/data/2.5/weather'
    const query = `?q=${city}&units=metric&appid=${KEY}`
    update()
    const request = await fetch(base + query)
    const data = await request.json()
    update()
    return data
}
function update(){
    const overlay = document.getElementById('overlay')
    overlay.classList.toggle('d-none')
}