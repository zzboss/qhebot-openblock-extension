const softwareSerial = formatMessage => ({
    name: formatMessage({
        id: 'cooperativeScheduler.name',
        default: 'Cooperative scheduler',
        description: 'Name of cooperative scheduler'
    }),
    extensionId: 'cooperativeScheduler',
    version: '1.0.0',
    type: 'arduino',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoLeonardo', 'arduinoMega2560'],
    author: 'ArthurZheng',
    iconURL: `asset/cooperativeScheduler.png`,
    description: formatMessage({
        id: 'cooperativeScheduler.description',
        default: 'Allow Arduino run multiple applications.',
        description: 'Description of cooperative scheduler'
    }),
    featured: true,
    blocks: `blocks.js`,
    generator: `generator.js`,
    toolbox: `toolbox.js`,
    msg: `msg.js`,
    location: 'local', // or 'remote'
    tags: ['other'],
    helpLink: 'https://www.baidu.com'
});

module.exports = softwareSerial;
