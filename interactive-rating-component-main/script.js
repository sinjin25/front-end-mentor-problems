console.log('rating component script running')

// GET DOM ELEMENTS
function getButton() {
    return document.querySelector('#submit-btn')
}
function getRatings() {
    return document.querySelectorAll('.card-rating')
}
function getSelected() {
    const found = document.querySelectorAll('.card-rating[activated]') // element list or undefined
    if (found) return found[0]
    return false
}

// EVENT LISTENERS
function setupRatings() {
    const found = getRatings()
    found.forEach((i) => {
        i.addEventListener('click', enableSubmit)
        i.addEventListener('click', () => {
            const val = i.getAttribute('data-value')
            return selectRating(val)
        })
    })
}
function setupButton() {
    const button = getButton()
    button.addEventListener('click', submit)
}

// EVENTS
function selectRating(val) {
    const found = getRatings()
    found.forEach((i) => {
        if (i.getAttribute('data-value') == val) {
            i.setAttribute('activated', true)
        } else {
            i.removeAttribute('activated')
        }
    })
}
function enableSubmit() {
    const btn = getButton()
    btn.removeAttribute('disabled')
}
function submit() {
    const button = getButton()
    if (button.attributes['disabled']) {
        alert('Please select a rating')
        return
    }
    const active = getSelected()
    showResults(active.getAttribute('data-value'))
}

// PAGE 2
function updateScore(score) {
    const node = document.getElementById('final-rating')
    node.textContent = score
}
function showResults(score) {
    console.log('score', score)
    const page1 = document.querySelector('.card-page[visible]')
    page1.removeAttribute('visible')
    const page2 = document.querySelector('.card-page-2')
    page2.setAttribute('visible', true)
    updateScore(score)
}


// MAIN
function setupCard() {
    setupButton()
    setupRatings()
}
setupCard()