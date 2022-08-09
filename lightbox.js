function getLightbox() {
    return document.getElementById('lightbox')
}

function closeLightbox() {
    const ele = getLightbox()
    ele.setAttribute('hidden', true)
}

function openLightbox(src) {
    const ele = getLightbox()
    ele.removeAttribute('hidden')
    const img = document.getElementById('lightbox-img')
    img.setAttribute('src', src)
}

function setupPictures() {
    const ele = document.querySelector('img')
    ele.forEach((i) => {
        const imgSrc = i.getAttribute('src')
        i.addEventListener('click', () => openLightbox(src))
        // also set picture
    })
}

function setupLightbox() {
    const ele = getLightbox()
    ele.addEventListener('click', closeLightbox)
    setupPictures()
}