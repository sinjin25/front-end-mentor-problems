class Project {
    constructor(title, description, tech, href, img) {
        if (!title
            || !description
            || !tech
            || !href
            || !img
        ) throw 'Improper project format'
        this.title = title
        this.description = description
        this.tech = tech
        this.href = href
        this.img = img
    }
}

export const projects = [
    // qr
    new Project(
        'QR Code Card Component',
        'Implementing a card-like design for a QR Code',
        ['vue components', 'etc.'],
        'qr-code.html',
        ['qr-mobile.png'],
    ),
    new Project(
        'Perfume Product Card',
        'Implementing a card-like design for a QR Code',
        ['vue components', 'etc.'],
        'product-preview.html',
        ['perfume-mobile.png'],
    ),
    new Project(
        'Mult-Part Rating Component',
        'Implementing a card-like design for a QR Code',
        ['vue components', 'etc.'],
        'rating-component.html',
        ['rating-mobile.png'],
    ),
    new Project(
        'NFT Product Card w/ Active States',
        'Implementing a card-like design for a QR Code',
        ['vue components', 'etc.'],
        'nft-preview-card.html',
        ['nft-mobile-2.png'],
    ),
    new Project(
        'Statistics Eye-Catch',
        'Implementing a card-like design for a QR Code',
        ['vue components', 'etc.'],
        'stats-preview.html',
        ['stats-preview-mobile.png'],
    ),
    new Project(
        'Three-Column Product Card w/ Reusable Components',
        'Implementing a card-like design for a QR Code',
        ['vue components', 'flexbox', 'slots'],
        '3-column-card.html',
        ['3-column-mobile.png'],
    )
]