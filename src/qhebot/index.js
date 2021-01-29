const qbot = (formatMessage) => ({
    name: "QHEBOT",
    extensionId: "qhebot",
    version: "1.0.0",
    type: "arduino",
    supportDevice: ["arduinoUno", "arduinoLeonardo", "arduinoMega2560"],
    author: "zzboss",
    iconURL: `asset/qbot.png`,
    description: formatMessage({
        id: "qhebot.description",
        default: "QHEBOT LIB.",
        description: "Description of qbot",
    }),
    featured: true,
    blocks: `blocks.js`,
    generator: `generator.js`,
    toolbox: `toolbox.js`,
    msg: `msg.js`,
    location: "local", // or 'remote'
    tags: ["other"],
    helpLink: "https://www.baidu.com",
});
module.exports = qbot;
