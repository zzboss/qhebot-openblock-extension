/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addMsg(Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        QHEBOT_CATEGORY: "QHEBOT LIB",
        CAR_MOTION_TOOLTIP: "control the speed and direction of the car",
        QBOT_RUN_BASE: "The car is moving at a speed of %1 %% %2",
        GO_AHEAD: "go ahead",
        REVERSING: "reversing",
        TURN_LEFT: "turn left",
        TURN_RIGHT: "turn right",
        QHEBOT_RGB: "RGB light setting R: %1 G: %2 B:%3",
        QHEBOT_PIANO_INIT: "init piano pin # %1",
        QHEBOT_PIANO: "click piano key %1 for %2 s",
    });
    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"], {
        QHEBOT_CATEGORY: "沁和智能扩展库",
        CAR_MOTION_TOOLTIP: "控制小车的运动速度和方向",
        QBOT_RUN_BASE: "小车以速度 %1 %%  %2",
        GO_AHEAD: "前进",
        REVERSING: "后退",
        TURN_LEFT: "左转",
        TURN_RIGHT: "右转",
        QHEBOT_RGB: "RGB 灯光设置 R: %1 G: %2 B: %3",
        QHEBOT_PIANO_INIT: "初始化钢琴管脚 # %1",
        QHEBOT_PIANO: "点击琴键 %1 持续 %2 s",
    });
    return Blockly;
}

exports = addMsg;
