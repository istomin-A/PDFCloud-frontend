class SignUp {
    selectors = {
        root: '[data-js-sign-up]',
        inputUsername: '[data-js-input-username]',
        inputPassword: '[data-js-input-password]',
        buttonSubmit: '[data-js-button]',
        error: '[data-js-error]'
    }

    constructor() {
        this.rootElement = document.querySelector(this.selectors.root)
        if (!this.rootElement) return
        this.inputUsernameElement = this.rootElement.querySelector(this.selectors.inputUsername)
        this.inputPasswordElement = this.rootElement.querySelector(this.selectors.inputPassword)
        this.buttonSubmitElement = this.rootElement.querySelector(this.selectors.buttonSubmit)
        this.errorElement = this.rootElement.querySelector(this.selectors.error)
        this.signUp()
    }

    postData(userData) {
        fetch('http://localhost:3000/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        }).then(response => {
            if (!response.ok) {
                throw new Error(`Ошибка: ${response.status}`)
            }
            return response.json()
        }).then(data => {
            console.log('Ответ от сервера:', data)
            if (data.id) {
                alert('Регистрация выполнена успешно!');
            } else {
                alert('Ошибка регистрации!');
            }
        }).catch(error => {
            console.error('Ошибка при отправке:', error)
        })
    }

    clickButton = (e) => {
        e.preventDefault()

        this.inputUsernameElement.classList.remove('_error');
        this.inputPasswordElement.classList.remove('_error');
        this.errorElement.classList.remove('_active');

        // validation username
        if (this.inputUsernameElement.value.trim() === '') {
            this.inputUsernameElement.classList.add('_error')
            this.errorElement.classList.add('_active')
            return
        }

        // validation password
        if (this.inputPasswordElement.value.trim() === '') {
            this.inputPasswordElement.classList.add('_error')
            this.errorElement.classList.add('_active')
            return
        }

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

export default SignUp