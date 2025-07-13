class AdminLogin {
    selectors = {
        root: '[data-js-admin]',
        inputUsername: '[data-js-admin-username]',
        inputPassword: '[data-js-admin-password]',
        buttonSubmit: '[data-js-admin-button]'
    }

    constructor() {
        this.rootElement = document.querySelector(this.selectors.root)
        if (!this.rootElement) return
        this.inputUsernameElement = this.rootElement.querySelector(this.selectors.inputUsername)
        this.inputPasswordElement = this.rootElement.querySelector(this.selectors.inputPassword)
        this.buttonSubmitElement = this.rootElement.querySelector(this.selectors.buttonSubmit)
        this.adminLogin()
    }

    postData(userData) {
        fetch('https://pdfcloud-server.onrender.com/api/adminLogin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        }).then(response => {
            if (!response.ok) throw new Error(`Ошибка: ${response.status}`)
            return response.json();
        }).then(data => {
            console.log('Ответ от сервера:', data)
            if (data.success) {
                alert('Вход выполнен успешно!')
                localStorage.setItem('isAdmin', 'true')
                window.location.href = '/PDFCloud-frontend/build/admin.html'
            } else {
                alert('Ошибка: ' + data.message)
            }
        }).catch(err => {
            console.error('Ошибка при отправке:', err)
        })
    }

    clickButton = (e) => {
        e.preventDefault()

        const username = this.inputUsernameElement.value
        const password = this.inputPasswordElement.value

        const userData = {
            username,
            password
        }

        this.postData(userData)
    }

    adminLogin() {
        this.buttonSubmitElement.addEventListener('click', this.clickButton)
    }
}

export default AdminLogin