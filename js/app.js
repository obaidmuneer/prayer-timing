function getData() {
    let city = document.querySelector('#city').value
    document.querySelector('#result').innerHTML = ''
    document.querySelector('.loader').style.display = 'block'
    document.querySelector('.btn').disabled = true


    prayerTime(city)

}

function prayerTime(city) {
    let prayerTimeApi = `https://dailyprayer.abdulrcs.repl.co/api/${city}`
    axios.get(prayerTimeApi)
        .then(
            function (res) {
                console.log(res.data);
                document.querySelector('.city').innerHTML = `${res.data.city}`

                let today = res.data.today
                for (const key in today) {
                    console.log(`${key}: ${today[key]}`);
                    let item = `<div class="left"><div class="color"></div><div class="name" >${key}</div></div> <div class="time">${today[key]}</div>`
                    document.querySelector('#result').innerHTML += `<li>${item}</li>`
                }
                document.querySelector('.loader').style.display = 'none'
                document.querySelector('.btn').disabled = false
            }
        )
        .catch(
            function (err) {
                console.log(err);
                document.querySelector('.city').innerHTML = err.response.data.message
            }
        )

}