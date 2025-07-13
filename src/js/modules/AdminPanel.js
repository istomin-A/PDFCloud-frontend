class AdminPanel {
    selectors = {
        root: '[data-js-admin-panel]',
        logOut: '[data-js-admin-log-out]',
        formUploadingPDF: '[data-js-uploading-pdf]',
        formAddUser: '[data-js-add-user]',
        formDeleteUser: '[data-js-delete-user]',
        formEditUser: '[data-js-edit-user]',
        formAdminSearch: '[data-js-admin-search]'
    }

    constructor() {
        this.rootElement = document.querySelector(this.selectors.root)
        if (!this.rootElement) return
        if (localStorage.getItem('isAdmin') !== 'true') window.location.href = '/adminLogin.html'
        this.buttonLogOut = document.querySelector(this.selectors.logOut)
        this.logOut()
        this.formUploadingPDF = this.rootElement.querySelector(this.selectors.formUploadingPDF)
        this.uploadPdf()
        this.formAddUser = this.rootElement.querySelector(this.selectors.formAddUser)
        this.addUser()
        this.formDeleteUser = this.rootElement.querySelector(this.selectors.formDeleteUser)
        this.deleteUser()
        this.formEditUser = this.rootElement.querySelector(this.selectors.formEditUser)
        this.editUser()
        this.formAdminSearch = this.rootElement.querySelector(this.selectors.formAdminSearch)
        this.search()
    }

    logOut() {
        this.buttonLogOut.addEventListener('click', (e) => {
            localStorage.removeItem('isAdmin')
            window.location.href = '/adminLogin.html'
        })
    }

    uploadPdf() {
        this.formUploadingPDF.addEventListener('submit', (e) => {
            e.preventDefault()

            const fileInput = this.formUploadingPDF.querySelector('input[type="file"]')
            const file = fileInput.files[0];

            const formData = new FormData()
            formData.append('pdf', file)

            fetch('http://localhost:3000/api/upload-pdf', {
                method: 'POST',
                body: formData
            })
                .then(res => res.json())
                .then((json) => {
                    if (json.success) alert('Документ успешно загружен в базу')
                })
                .catch(console.error);
        })
    }

    addUser() {
        this.formAddUser.addEventListener('submit', (e) => {
            e.preventDefault()

            const addUserName = this.formAddUser.querySelector('[data-js-add-user-login]')
            const addUserPassword = this.formAddUser.querySelector('[data-js-add-user-password]')

            fetch('http://localhost:3000/api/admin/add-user', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: addUserName.value,
                    password: addUserPassword.value
                })
            })
                .then(res => res.json())
                .then((json) => {
                    if (json.success) alert('Пользователь успешно загружен в базу')
                })
                .catch(console.error);
        })
    }

    deleteUser() {
        this.formDeleteUser.addEventListener('submit', (e) => {
            e.preventDefault()

            const inputDeleteUser = this.formDeleteUser.querySelector('[data-js-input-delete-user]')

            fetch(`http://localhost:3000/api/admin/delete-user/${encodeURIComponent(inputDeleteUser.value)}`, {
                method: 'DELETE',
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    alert(data.message)
                })
                .catch(error => {
                    console.error('Ошибка:', error)
                })
        })
    }

    editUser() {
        this.formEditUser.addEventListener('submit', (e) => {
            e.preventDefault()

            const inputEditUserNameOld = this.formEditUser.querySelector('[data-js-edit-user-old]')
            const inputEditUserName = this.formEditUser.querySelector('[data-js-edit-user-login]')
            const inputEditPassword = this.formEditUser.querySelector('[data-js-edit-user-password]')

            fetch(`http://localhost:3000/api/admin/update-user/${encodeURIComponent(inputEditUserNameOld.value)}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ newUsername: inputEditUserName.value || undefined, newPassword: inputEditPassword.value || undefined })
            })
                .then(res => res.json())
                .then(data => alert(data.message))
                .catch(console.error);
        })
    }

    search() {
        this.formAdminSearch.addEventListener('submit', (e) => {
            e.preventDefault()

            const inputSearch = this.formAdminSearch.querySelector('[data-js-input-search]')
            const searchOut = this.formAdminSearch.querySelector('[data-js-admin-search-out]')

            fetch(`http://localhost:3000/api/users/search?login=${encodeURIComponent(inputSearch.value)}`)
                .then(res => {
                    if (!res.ok) throw new Error('Ошибка поиска');
                    return res.json();
                })
                .then(data => {
                    if (data.length === 0) {
                        searchOut.classList.add('_active')
                        searchOut.innerHTML = 'Пользователь не найден'
                    } else {
                        searchOut.classList.add('_active')
                        searchOut.innerHTML = `Пользователь найден. id: ${data[0].id} username: ${data[0].Username} password: ${data[0].password}`
                    }
                })
                .catch(console.error);
        })
    }
}

export default AdminPanel