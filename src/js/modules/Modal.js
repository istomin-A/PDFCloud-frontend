const rootSelector = '[data-js-modal-target]'

class Modal {
    selectors = {
        modalPath: '[data-js-modal-path]',
        modalButtonClose: '[data-js-modal-close]'
    }

    dataAttributes = {
        modalTarget: 'data-js-modal-target',
        modalPath: 'data-js-modal-path',
    }

    stateClases = {
        isActive: '_active',
        isLock: '_lock'
    }

    constructor(rootElement) {
        this.rootElement = rootElement
        this.modalPath = document.querySelectorAll(this.selectors.modalPath)
        this.modalButtonClose = this.rootElement.querySelector(this.selectors.modalButtonClose)
        this.bindEvents()
    }

    toggleClasses() {
        this.rootElement.classList.toggle(this.stateClases.isActive)
        document.body.classList.toggle(this.stateClases.isLock)
    }

    modalOpen = (e) => {
        let path = e.currentTarget.getAttribute(this.dataAttributes.modalPath)
        let modalTarget = this.rootElement.getAttribute(this.dataAttributes.modalTarget)

        if (modalTarget !== path) return

        this.toggleClasses()
        this.rootElement.showModal()
    }

    modalClose = (e) => {
        if (!this.rootElement.classList.contains('_active')) return

        this.toggleClasses()
        this.rootElement.close()
    }

    modalCancel = (e) => {
        if (!this.rootElement.classList.contains('_active')) return

        this.toggleClasses()
        this.rootElement.close()
    }

    modalCloseOverlay = (e) => {
        const dialog = e.currentTarget
        const isOnOverlayClick = e.target === dialog

        if (!isOnOverlayClick) return

        this.toggleClasses()
        this.rootElement.close()
    }

    bindEvents() {
        this.modalPath.forEach((trigger) => trigger.addEventListener('click', this.modalOpen))
        this.modalButtonClose.addEventListener('click', this.modalClose)
        this.rootElement.addEventListener('cancel', this.modalCancel)
        this.rootElement.addEventListener('click', this.modalCloseOverlay)
    }
}

class ModalCollection {
    constructor() {
        this.init()
    }

    init() {
        document.querySelectorAll(rootSelector).forEach((modal) => new Modal(modal))
    }
}

export default ModalCollection