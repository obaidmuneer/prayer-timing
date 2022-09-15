// let bgImage = document.querySelector('.container')
function getData() {
    let city = document.querySelector('#city').value
    document.querySelector('#result').innerHTML = ''

    prayerTime(city)

}

function prayerTime(city) {
    let prayerTimeApi = `https://dailyprayer.abdulrcs.repl.co/api/${city}`
    axios.get(prayerTimeApi)
        .then(
            function (res) {
                // handleBackground(bgImage)
                console.log(res.data);
                document.querySelector('.city').innerHTML = `${res.data.city}`

                let today = res.data.today
                for (const key in today) {
                    console.log(`${key}: ${today[key]}`);
                    let item  = `<div class="left"><div class="color"></div><div class="name" >${key}</div></div> <div class="time">${today[key]}</div>`
                    document.querySelector('#result').innerHTML += `<li>${item}</li>`
                }

            }
        )
        .catch(
            function (err) {
                console.log(err);
                document.querySelector('.city').innerHTML = err.response.data.message
            }
        )

}

function handleBackground(bgImage) {
    let d = new Date()
    if (d.getHours() < 12) {
        console.log(d.getHours());
        bgImage.style.background = "url('./img/rising.jpg') no-repeat center"
    } else if (d.getHours() < 15) {
        console.log(d.getHours());
        bgImage.style.background = "url('./img/noon.jpg') no-repeat center"
    } else if (d.getHours() < 20) {
        console.log(d.getHours());
        bgImage.style.background = "url('./img/set.jpg') no-repeat center"
    } else {
        console.log(d.getHours());
        bgImage.style.background = "url('./img/night.jpg') no-repeat center"
        document.querySelector('body').style.backgroundColor = '#000a12'
    }
    bgImage.style.backgroundSize = 'cover'
    document.querySelector('#city').style.opacity = 0.5
    document.querySelector('button').style.opacity = 0.5
}