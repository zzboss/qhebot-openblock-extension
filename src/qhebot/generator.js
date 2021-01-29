/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator(Blockly) {
    // RGB 灯光控制
    Blockly.Arduino["qhebot_rgb"] = function (block) {
        Blockly.Arduino.includes_["qhebot_rgb"] = "#include QhRGBled.h";
        Blockly.Arduino.definitions_["qhebot_rgb"] = "QhBuzzer qhRGBled;";
        const r = Blockly.Arduino.valueToCode(
            block,
            "r",
            Blockly.Arduino.ORDER_ATOMIC
        );
        const g = Blockly.Arduino.valueToCode(
            block,
            "g",
            Blockly.Arduino.ORDER_ATOMIC
        );
        const b = Blockly.Arduino.valueToCode(
            block,
            "b",
            Blockly.Arduino.ORDER_ATOMIC
        );
        return `qhRGBled.setRgbColor(${r}, ${g}, ${b});\n`;
    };

    // 钢琴管脚初始化
    Blockly.Arduino["qhebot_piano_init"] = function () {
        Blockly.Arduino.includes_["qhebot_piano_init"] = "#include QhBuzzer.h";
        const pin = this.getFieldValue("pin");
        Blockly.Arduino.definitions_[
            "qhebot_piano_init"
        ] = `QhBuzzer qhBuzzer(${pin});`;
        return "";
    };

    // 钢琴控制
    Blockly.Arduino["qhebot_piano"] = function (block) {
        const key = this.getFieldValue("key");
        const delayTime = Blockly.Arduino.valueToCode(
            block,
            "delay_time",
            Blockly.Arduino.ORDER_ATOMIC
        );
        return `qhBuzzer.play(${key}, ${delayTime});\n`;
    };

    // 小车运动控制
    Blockly.Arduino["qhebot_car_base"] = function (block) {
        Blockly.Arduino.includes_["qhebot_car_motion"] =
            "#include QhMotionCtrl.h";
        Blockly.Arduino.definitions_["qhebot_car_motion"] =
            "QhMotionCtrl qhMotionCtrl";
        const speed = Blockly.Arduino.valueToCode(
            block,
            "car_velocity",
            Blockly.Arduino.ORDER_ATOMIC
        );
        const dir = this.getFieldValue("car_dir");
        return `qhMotionCtrl.setMotionDir(${dir});\nqhMotionCtrl.setMotionSpeed(${speed});\n`;
    };
    return Blockly;
}

exports = addGenerator;
