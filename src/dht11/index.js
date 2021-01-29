const dht11 = formatMessage => ({
    name: 'DHT11',
    extensionId: 'dht11',
    version: '1.0.0',
    type: 'arduino',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoLeonardo', 'arduinoMega2560'],
    author: 'ArthurZheng',
    iconURL: `asset/DTH11.png`,
    description: formatMessage({
        id: 'dht11.description',
        default: 'DHT11 Temperature and humidity sensor module.',
        description: 'Description of dht11'
    }),
    featured: true,
    blocks: `blocks.js`,
    generator: `generator.js`,
    toolbox: `toolbox.js`,
    msg: `msg.js`,
    location: 'local', // or 'remote'
    tags: ['sensor'],
    helpLink: 'https://www.baidu.com'
});

module.exports = dht11;
