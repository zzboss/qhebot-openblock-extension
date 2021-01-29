const softwareSerial = formatMessage => ({
    name: formatMessage({
        id: 'softwareSerial.name',
        default: 'Software serial',
        description: 'Name of software serial'
    }),
    extensionId: 'softwareSerial',
    version: '1.0.0',
    type: 'arduino',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoLeonardo', 'arduinoMega2560'],
    author: 'ArthurZheng',
    iconURL: `asset/softwareSerial.png`,
    description: formatMessage({
        id: 'softwareSerial.description',
        default: 'Allow serial communication on other digital pins of the Arduino.',
        description: 'Description of software serial'
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
