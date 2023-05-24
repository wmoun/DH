import { CommandType } from "../../command";

/**
 * 查梗（小鸡词典）命令
 * @author yupi
 */
const gengCommand: CommandType = {
  func: "yt",
  name: "YouTube搜索",
  alias: ["YouTube"],
  params: [
    {
      key: "word",
      desc: "搜索内容",
      required: true,
    },
  ],
  options: [
    {
      key: "self",
      desc: "是否当前页面打开",
      alias: ["s"],
      type: "boolean",
      defaultValue: false,
    },
  ],
  action(options, terminal) {
    const { _, self } = options;
    const word = _.length > 0 ? _[0] : "";
    const targetLink = `https://www.youtube.com/results?search_query=${word}`;
    if (self) {
      window.location.href = targetLink;
    } else {
      window.open(targetLink);
    }
  },
};

export default gengCommand;
