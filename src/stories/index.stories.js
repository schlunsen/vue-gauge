import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import Gauge from "../components/Gauge.vue";

export default {
  title: "Gauge test",
};



export const simpleGaugeTest = () => ({
  components: { Gauge },
  template: '<gauge />',
  methods: { action: action("clicked") },
});


