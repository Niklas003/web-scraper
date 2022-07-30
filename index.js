const PORT = 8000
const axios = require('axios')
const expess = require('express')
const cheerio = require('cheerio')

const app = expess()

app.listen(PORT, () => console.log('listening to PORT'))

url = 'https://www.tagesschau.de/'

axios(url).then(response => {
    const html = response.data
    const $ = cheerio.load(html)
    const dataArray = []

    $('.teaser__link' ,html).each(function(){
        const title = $(this).find('.teaser__headline').text()
        const topic = $(this).find('.teaser__topline').text()
        const short = $(this).find('p').html()
        const image = $(this).find('img').attr('src')

        dataArray.push({
            topic,
            title,
            short,
            image
        })
    })

    console.log(dataArray)
}).catch(err => console.log(err))