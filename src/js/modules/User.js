class User {
    selectors = {
        root: '[data-js-user]',
        logOut: '[data-js-user-log-out]'
    }

    constructor() {
        this.rootElement = document.querySelector(this.selectors.root)
        if (!this.rootElement) return
        if (localStorage.getItem('isUser') !== 'true') window.location.href = '/PDFCloud-frontend/build/index.html'
        this.buttonLogOut = document.querySelector(this.selectors.logOut)
        this.logOut()
        this.displayPDF()
    }

    logOut() {
        this.buttonLogOut.addEventListener('click', (e) => {
            console.log(this.buttonLogOut)
            localStorage.removeItem('isUser')
            window.location.href = '/PDFCloud-frontend/build/index.html'
        })
    }

    renderIntroPDF(documents) {
        const containerPDF = this.rootElement.querySelector('[data-js-inner-pdf]')

        documents.forEach((document) => {
            const articlePdfHTML = `
                    <article class="files__article">
                        <a href="https://pdfcloud-server.onrender.com/api/pdf/${document.DocumentId}" class="files__box">
                            <img class="files__image" src="img/logo/pdf-logo.svg" alt="pdf document" width="120" height="120">
                        </a>
                        <h2><a href="https://pdfcloud-server.onrender.com/api/pdf/${document.DocumentId}" class="files__article-title" target="_blank">${document.FileName}</a></h2>
                        <a href="https://pdfcloud-server.onrender.com/api/pdf/${document.DocumentId}" class="button button_red" target="_blank">View Document</a>
                        <a href="https://pdfcloud-server.onrender.com/api/pdf/${document.DocumentId}/download" class="button button_red" target="_blank">Download</a>
                    </article>`

            containerPDF.insertAdjacentHTML('beforeend', articlePdfHTML)
        })
    }

    displayPDF() {
        fetch(`https://pdfcloud-server.onrender.com/api/documents`)
            .then(res => {
                if (!res.ok) throw new Error('Ошибка при загрузке PDF');
                return res.json();
            })
            .then(json => this.renderIntroPDF(json))
            .catch(console.error);
    }
}

export default User