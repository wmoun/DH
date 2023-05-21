import { CommandType } from "../../../command";
import { defineAsyncComponent } from "vue";
import ComponentOutputType = YuTerminal.ComponentOutputType;

/**

 */
const coinCommand: CommandType = {
  func: coin",
  name: "价格行情",
  desc: "基于最新价格和用户行为数据产生的加密货币榜单",
  options: [],
  collapsible: true,
  action(options, terminal) {
    const output: ComponentOutputType = {
      type: "component",
      component: defineAsyncComponent(() => import("./IkunTestBox.vue")),
      props: {},
    };
    terminal.writeResult(output);
  },
};

export default coinCommand;
