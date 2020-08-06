
import { 
  Button,
  Field
 } from 'mint-ui';

const uiComponents =  {
  install(vue) {
    vue.component(Button.name, Button)
    vue.component(Field.name, Field)
  }
}



export default uiComponents