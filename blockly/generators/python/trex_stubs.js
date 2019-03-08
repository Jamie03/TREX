Blockly.Python['linear_reg'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'regr = linear_model.LinearRegression()\n';
  return code;
};

Blockly.Python['fit'] = function(block) {
  var value_x_train = Blockly.Python.valueToCode(block, 'x_train', Blockly.Python.ORDER_ATOMIC);
  var value_y_train = Blockly.Python.valueToCode(block, 'y_train', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'regr.fit(' + value_x_train + ', ' + value_y_train + ')\n';
  return code;
};

Blockly.Python['predict'] = function(block) {
  var value_x = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'y_pred = regr.predict(' + value_x + ')\n';
  return code;
};

Blockly.Python['test_feature'] = function(block) {
  var text_x = block.getFieldValue('x');
  var number_testval = block.getFieldValue('testval');
  // TODO: Assemble Python into code variable.
  var code = 'test_feature(' + text_x + ', '+ number_testval + ')\n';
  return code;
};

Blockly.Python['remove_dups'] = function(block) {
  var dropdown_option_dups = block.getFieldValue('option_dups');
  // TODO: Assemble Python into code variable.
  var code = 'remove' + dropdown_option_dups + '()\n';
  return code;
};

Blockly.Python['outliers'] = function(block) {
  var dropdown_option_ol = block.getFieldValue('option_ol');
  // TODO: Assemble Python into code variable.
  var code = dropdown_option_ol + '()\n';
  return code;
};

Blockly.Python['missing_data'] = function(block) {
  var dropdown_option_md = block.getFieldValue('option_md');
  // TODO: Assemble Python into code variable.
  var code = dropdown_option_md + '()\n';
  return code;
};

Blockly.Python['std_features'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'std_features()\n';
  return code;
};