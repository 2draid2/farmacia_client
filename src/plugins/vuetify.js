import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import mdi from "./webfontloader" // Ensure you are using css-loader


export default createVuetify({
  components,
  directives,
  mdi,
})


