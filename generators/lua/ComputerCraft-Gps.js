/**
 * Blockly Lua: ComputerCraft Gps API
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Generating Lua for ComputerCraft Gps API
 * @author Edgar (AnotherFoxGuy)
 */

/* global Blockly*/


goog.provide('Blockly.Lua.Gps');

goog.require('Blockly.Lua');


Blockly.Lua['gps_locate'] = function(block) {
  var dropdown_debug = block.getFieldValue('debug');
  var value_timeout = Blockly.Lua.valueToCode(block, 'timeout', Blockly.Lua.ORDER_ATOMIC);

  if (value_timeout == 0)
    value_timeout = 10;

  var code = "gps.locate(";
  code += value_timeout;
  code += " , ";
  code += dropdown_debug;
  code += ")";

  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Lua.ORDER_NONE];
};