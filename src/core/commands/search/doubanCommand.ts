import { CommandType } from "../../command";

/**
 * 豆瓣搜索命令
 * @author yupi
 */
const doubanCommand: CommandType = {
  func: "web",
  name: "Web3 信息搜索",
  alias: [],
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
    const targetLink = `https://foresightnews.pro/search/result?search=${word}`;
    if (self) {
      window.location.href = targetLink;
    } else {
      window.open(targetLink);
    }
  },
};

export default doubanCommand;
