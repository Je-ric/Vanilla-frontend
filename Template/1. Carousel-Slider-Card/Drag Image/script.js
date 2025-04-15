class Carousel {

    constructor(element) {

        this.board = element

        this.push()
        this.push()

        this.handle()

    }

    handle() {

        this.cards = this.board.querySelectorAll('.card')

        this.topCard = this.cards[this.cards.length - 1]

        this.nextCard = this.cards[this.cards.length - 2]

        if (this.cards.length > 0) {

            this.topCard.style.transform =
                'translateX(-50%) translateY(-50%) rotate(0deg) rotateY(0deg) scale(1)'

            if (this.hammer) this.hammer.destroy()

            this.hammer = new Hammer(this.topCard)
            this.hammer.add(new Hammer.Tap())
            this.hammer.add(new Hammer.Pan({
                position: Hammer.position_ALL,
                threshold: 0
            }))

            this.hammer.on('tap', (e) => {
                this.onTap(e)
            })
            this.hammer.on('pan', (e) => {
                this.onPan(e)
            })

        }

    }

    onTap(e) {
        let propX = (e.center.x - e.target.getBoundingClientRect().left) / e.target.clientWidth

        let rotateY = 15 * (propX < 0.05 ? -1 : 1)

        this.topCard.style.transition = 'transform 100ms ease-out'

        this.topCard.style.transform =
            'translateX(-50%) translateY(-50%) rotate(0deg) rotateY(' + rotateY + 'deg) scale(1)'
        setTimeout(() => {
            this.topCard.style.transform =
                'translateX(-50%) translateY(-50%) rotate(0deg) rotateY(0deg) scale(1)'
        }, 100)

    }

    onPan(e) {

        if (!this.isPanning) {

            this.isPanning = true

            this.topCard.style.transition = null
            if (this.nextCard) this.nextCard.style.transition = null

            let style = window.getComputedStyle(this.topCard)
            let mx = style.transform.match(/^matrix\((.+)\)$/)
            this.startPosX = mx ? parseFloat(mx[1].split(', ')[4]) : 0
            this.startPosY = mx ? parseFloat(mx[1].split(', ')[5]) : 0
            let bounds = this.topCard.getBoundingClientRect()

            this.isDraggingFrom =
                (e.center.y - bounds.top) > this.topCard.clientHeight / 2 ? -1 : 1

        }

        let posX = e.deltaX + this.startPosX
        let posY = e.deltaY + this.startPosY
        let propX = e.deltaX / this.board.clientWidth
        let propY = e.deltaY / this.board.clientHeight

        let dirX = e.deltaX < 0 ? -1 : 1

        let deg = this.isDraggingFrom * dirX * Math.abs(propX) * 45

        let scale = (95 + (5 * Math.abs(propX))) / 100

        this.topCard.style.transform =
            'translateX(' + posX + 'px) translateY(' + posY + 'px) rotate(' + deg + 'deg) rotateY(0deg) scale(1)'

        if (this.nextCard) this.nextCard.style.transform =
            'translateX(-50%) translateY(-50%) rotate(0deg) rotateY(0deg) scale(' + scale + ')'

        if (e.isFinal) {

            this.isPanning = false

            let successful = false
            this.topCard.style.transition = 'transform 200ms ease-out'
            if (this.nextCard) this.nextCard.style.transition = 'transform 100ms linear'

            if (propX > 0.25 && e.direction == Hammer.DIRECTION_RIGHT) {

                successful = true
                posX = this.board.clientWidth

            } else if (propX < -0.25 && e.direction == Hammer.DIRECTION_LEFT) {

                successful = true
                posX = -(this.board.clientWidth + this.topCard.clientWidth)

            } else if (propY < -0.25 && e.direction == Hammer.DIRECTION_UP) {

                successful = true
                posY = -(this.board.clientHeight + this.topCard.clientHeight)

            }

            if (successful) {

                this.topCard.style.transform =
                    'translateX(' + posX + 'px) translateY(' + posY + 'px) rotate(' + deg + 'deg)'

                setTimeout(() => {
                    this.board.removeChild(this.topCard)

                    this.push()

                    this.handle()
                }, 200)

            } else {


                this.topCard.style.transform =
                    'translateX(-50%) translateY(-50%) rotate(0deg) rotateY(0deg) scale(1)'
                if (this.nextCard) this.nextCard.style.transform =
                    'translateX(-50%) translateY(-50%) rotate(0deg) rotateY(0deg) scale(0.95)'

            }

        }

    }

    push() {

        let card = document.createElement('div')

        card.classList.add('card')

        card.style.backgroundImage =
            "url('https://picsum.photos/320/320/?random=" + Math.round(Math.random() * 1000000) + "')"

        this.board.insertBefore(card, this.board.firstChild)

    }

}

let board = document.querySelector('#board')

let carousel = new Carousel(board)