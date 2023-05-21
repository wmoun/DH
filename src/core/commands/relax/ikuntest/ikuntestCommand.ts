import { CommandType } from "../../../command";
import { defineAsyncComponent } from "vue";
import ComponentOutputType = YuTerminal.ComponentOutputType;

/**

 */
const noCommand: CommandType = {
  func: "NO",
  name: "notion",
  desc: "notion笔记",
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

export default noCommand;
