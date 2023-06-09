import { CommandType } from "../../../command";
import { defineAsyncComponent } from "vue";
import ComponentOutputType = YuTerminal.ComponentOutputType;

/**

 */
const ikuntestCommand: CommandType = {
  func: "coin",
  name: "coin",
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

export default ikuntestCommand;
