import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import Gauge from "../components/Gauge.vue";

export default {
  title: "Gauge test",
};

export const simpleGaugeTest = () => ({
  components: { Gauge },
  template: "<gauge />",
  methods: { action: action("clicked") },
});

export const customizedGaugeTest = () => ({
  components: { Gauge },
  template: `<gauge :min="0"
  :max="100"
  :dp="0"
  :unit="' €'"
  thickness="30"
  :svgStyle="{ maxWidth: '100%' }"
  inactiveFill="#212121"
  :minThreshold="80"
  :maxThreshold="25"
  :radius="200"
  :pointerGap="5"
  :pivotFill="'#3f3f3f'"
  :pointerStroke="'#3f3f3f'"
  :pivotStroke="'#3f3f3f'"
  :inactiveFill="'#f3f3f3'"
  :activeFill="'red'"
  :pointerStrokeWidth="10"
  pointerGap="0"
  :value="50"  />`,
  methods: { action: action("clicked") },
});
