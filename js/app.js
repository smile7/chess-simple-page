let items = document.querySelectorAll('.grid__item')
let count = 0

for (let i = 1; i <= 8; i++) {   
    for (let j = 1; j <= 8; j++) {
        let item = items[count]
        item.style['-ms-grid-column'] = i
        item.style['-ms-grid-row'] = j
        count++
    }
}
