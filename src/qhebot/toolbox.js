/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox() {
    return `
<category name="%{BKY_QHEBOT_CATEGORY}" id="QHEBOT_CATEGORY" colour="#079992" secondaryColour="#079992">
    <block type="qhebot_rgb" id="qhebot_rgb">
        <value name="r">
            <shadow type="math_number">
                <field name="NUM">100</field>
            </shadow>    
        </value>
        <value name="g">
            <shadow type="math_number">
                <field name="NUM">100</field>
            </shadow>    
        </value>
        <value name ="b">
            <shadow type="math_number">
                <field name="NUM">100</field>
            </shadow>    
        </value>
    </block>
    <block type="qhebot_piano_init" id="qhebot_piano"></block>
    <block type="qhebot_piano" id="qhebot_piano">
        <value name ="delay_time">
            <shadow type="math_number">
                <field name="NUM">1000</field>
            </shadow>    
        </value>
    </block>
    <block type="qhebot_car_base" id="qbot_car_base">
        <value name="car_velocity">
            <shadow type="math_number">
                <field name="NUM">30</field>
            </shadow>    
        </value>
    </block>
</category>`;
}

exports = addToolbox;
