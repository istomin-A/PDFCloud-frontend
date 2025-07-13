class SignIn {
    selectors = {
        root: '[data-js-sign-in]',
        inputUsername: '[data-js-input-sign-in-username]',
        inputPassword: '[data-js-input-sign-in-password]',
        buttonSubmit: '[data-js-sign-in-button]'
    }

    constructor() {
        this.rootElement = document.querySelector(this.selectors.root)
        if (!this.rootElement) return
        this.inputUsernameElement = this.rootElement.querySelector(this.selectors.inputUsername)
        this.inputPasswordElement = this.rootElement.querySelector(this.selectors.inputPassword)
        this.buttonSubmitElement = this.rootElement.querySelector(this.selectors.buttonSubmit)
        this.signUp()
    }

    // coutingTime(data) {
    //     const loginTime = Date.now()

    //     localStorage.setItem('userId', data.userId)
    //     localStorage.setItem('loginTime', loginTime)

    //     window.addEventListener('beforeunload', () => {
    //         const logoutTime = Date.now();
    //         const durationSec = Math.floor((logoutTime - loginTime) / 1000);
    //         const userId = data.userId;

    //         fetch('http://localhost:3000/api/track-time', {
    //             method: 'POST',
    //             headers: { 'Content-Type': 'application/json' },
    //             body: JSON.stringify({ userId, durationSec }),
    //             keepalive: true,
    //         });
    //     });
    // }

    postData(userData) {
        fetch('http://localhost:3000/api/login', {
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
                localStorage.setItem('isUser', 'true')
                window.location.href = '/dashboard.html'

                // this.coutingTime(data)
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

    signUp() {
        this.buttonSubmitElement.addEventListener('click', this.clickButton)
    }
}

export default SignIn