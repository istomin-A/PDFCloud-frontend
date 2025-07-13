import '../scss/style.scss' // слежка за scss файлом

// ===================================================================

import isWebp from "./modules/isWebp.js"
import Header from "./modules/Header.js"
import ModalCollection from "./modules/Modal.js"
import AdminLogin from "./modules/AdminLogin.js"
import AdminPanel from "./modules/AdminPanel.js"
import User from "./modules/User.js"
import SignUp from "./modules/SignUp.js"
import SignIn from "./modules/SignIn.js"
import SpollerCollection from "./modules/Spoller.js"
// import SliderCollection from "./modules/Slider.js"
// import TabsCollection from "./modules/Tabs.js"
// import MaskPhoneCollection from "./modules/MaskPhone.js"

isWebp()
new Header()
new ModalCollection()
new AdminLogin()
new AdminPanel()
new User()
new SignUp()
new SignIn()
new SpollerCollection()
// new SliderCollection()
// new TabsCollection()
// new MaskPhoneCollection()