import Vue from 'vue'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import ToastService from 'primevue/toastservice'
import Dropdown from 'primevue/dropdown'
import TabMenu from 'primevue/tabmenu'
import Menu from 'primevue/menu'

import DataTable from 'primevue/datatable'
import Column from 'primevue/column'

Vue.use(ToastService)

Vue.component('InputText', InputText)
Vue.component('Button', Button)
Vue.component('Dropdown', Dropdown)
Vue.component('TabMenu', TabMenu)
Vue.component('Menu', Menu)
Vue.component('DataTable', DataTable)
Vue.component('Column', Column)
