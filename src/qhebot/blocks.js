/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks(Blockly) {
    const colour_qhebot = "#079992";
    // RGB 灯控制
    Blockly.Blocks["qhebot_rgb"] = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.QHEBOT_RGB,
                args0: [
                    {
                        type: "input_value",
                        name: "r",
                    },
                    {
                        type: "input_value",
                        name: "g",
                    },
                    {
                        type: "input_value",
                        name: "b",
                    },
                ],
                colour: colour_qhebot,
                extensions: ["shape_statement"],
            });
        },
    };

    // 钢琴管脚初始化
    Blockly.Blocks["qhebot_piano_init"] = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.QHEBOT_PIANO_INIT,
                args0: [
                    {
                        type: "field_dropdown",
                        name: "pin",
                        options: [
                            ["1", "1"],
                            ["2", "2"],
                            ["3", "3"],
                            ["4", "4"],
                            ["5", "5"],
                            ["6", "6"],
                            ["7", "7"],
                            ["8", "8"],
                            ["9", "9"],
                            ["10", "10"],
                            ["11", "11"],
                            ["12", "12"],
                            ["13", "13"],
                            ["A0", "A0"],
                            ["A1", "A1"],
                            ["A2", "A2"],
                            ["A3", "A3"],
                            ["A4", "A4"],
                            ["A5", "A5"],
                        ],
                    },
                ],
                colour: colour_qhebot,
                extensions: ["shape_statement"],
            });
        },
    };
    // 钢琴控制
    Blockly.Blocks["qhebot_piano"] = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.QHEBOT_PIANO,
                args0: [
                    {
                        type: "field_dropdown",
                        name: "key",
                        options: [
                            ["do", "1"],
                            ["#do", "11"],
                            ["re", "2"],
                            ["#re", "12"],
                            ["mi", "3"],
                            ["fa", "4"],
                            ["#fa", "13"],
                            ["so", "5"],
                            ["#so", "14"],
                            ["la", "6"],
                            ["#la", "15"],
                            ["si", "7"],
                        ],
                    },
                    {
                        type: "input_value",
                        name: "delay_time",
                    },
                ],
                colour: colour_qhebot,
                extensions: ["shape_statement"],
            });
        },
    };

    // 小车运动控制
    Blockly.Blocks["qhebot_car_base"] = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.QBOT_RUN_BASE,
                args0: [
                    {
                        type: "input_value",
                        name: "car_velocity",
                    },
                    {
                        type: "field_dropdown",
                        name: "car_dir",
                        options: [
                            [Blockly.Msg.GO_AHEAD, "1"],
                            [Blockly.Msg.REVERSING, "2"],
                            [Blockly.Msg.TURN_LEFT, "3"],
                            [Blockly.Msg.TURN_RIGHT, "4"],
                        ],
                    },
                ],
                colour: colour_qhebot,
                extensions: ["shape_statement"],
            });
        },
    };
    return Blockly;
}

exports = addBlocks;
