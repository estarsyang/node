
import { 
  Button,
  Field,
  MessageBox,
  Toast
 } from 'mint-ui';

const uiComponents =  {
  install(Vue) {
    Vue.component(Button.name, Button)
    Vue.component(Field.name, Field)
    Vue.prototype.$toast = Toast;
    Vue.prototype.$messagebox = MessageBox;
  }
}



export default uiComponents