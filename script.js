let url = 'http://localhost:3001/cars'
axios.get(url)
    .then(res => {
        if (res.status == 201 || res.status == 200) {
            reload(res.data)
        }
    }).catch(err => console.log(err))



function reload(data) {
    let items = document.querySelector('.items')
    let items10 = document.querySelector('.items10')
    let items0 = document.querySelector('.items0')

    items.innerHTML = ''
    items10.innerHTML = ''
    items0.innerHTML = ''
    for (let item of data.slice(0, 10)) {
        if (item.year >= 2007) {
            items.innerHTML += `
            <div class="item">
                <h3>${item.manufacturer} ${item.model}</h3>
                <p>Year: ${item.year}</p>
                <p>VIN: ${item.vin}</p>
                <button>Подробнее</button>
            </div>`
        }
        if (item.year >= 1997) {
            items10.innerHTML +=
                `<div class="item">
                <h3>${item.manufacturer} ${item.model}</h3>
                <p>Year: ${item.year}</p>
                <p>VIN: ${item.vin}</p>
                <button>Подробнее</button>
            </div>`
        }
        if (item.year < 1997 ) {
            items0.innerHTML +=
                `<div class="item">
                <h3>${item.manufacturer} ${item.model}</h3>
                <p>Year: ${item.year}</p>
                <p>VIN: ${item.vin}</p>
                <button>Подробнее</button>
            </div>`
        }
    }
    let show = document.querySelector('.show')
    show.onclick = () => {
        for (let item of data) {
            if (item.year <= 2003) {
                let items = document.querySelector('.items')
                items.innerHTML +=
                    `<div class="item">
                        <h3>${item.manufacturer} ${item.model}</h3>
                        <p>Year: ${item.year}</p>
                        <p>VIN: ${item.vin}</p>
                        <button>Подробнее</button>
                    </div>`
            }
            if (item.year > 2003 && item.year < 2011) {
                let items10 = document.querySelector('.items10')
                items10.innerHTML += 
                `<div class="item">
                    <h3>${item.manufacturer} ${item.model}</h3>
                    <p>Year: ${item.year}</p>
                    <p>VIN: ${item.vin}</p>
                    <button>Подробнее</button>
                </div>`
            }
            if (item.year > 2011) {
                let items0 = document.querySelector('.items0')
                items0.innerHTML += 
                `<div class="item">
                    <h3>${item.manufacturer} ${item.model}</h3>
                    <p>Year: ${item.year}</p>
                    <p>VIN: ${item.vin}</p>
                    <button>Подробнее</button>
                </div>`
            }
        }
    }
}