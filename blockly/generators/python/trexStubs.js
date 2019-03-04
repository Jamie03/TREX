Blockly.JavaScript['linear_reg'] = function(block) {
  var statements_linear_param = Blockly.JavaScript.statementToCode(block, 'linear_param');
  // TODO: Assemble JavaScript into code variable.
  var code = 'regr = linear_model.LinearRegression()\n';
  return code;
};

Blockly.JavaScript['fit'] = function(block) {
  var dropdown_train_select = block.getFieldValue('train_select');
  var value_x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = dropdown_train_select + ' = ' + value_x '\n';
  return code;
};

Blockly.JavaScript['predict'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'regr.fit(x_train, y_train)\ndiabetes_y_pred = regr.predict(' + value_x + ')\n';
  return code;
};

Blockly.JavaScript['select_feature'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['test_feature'] = function(block) {
  var text_x = block.getFieldValue('x');
  var number_testval = block.getFieldValue('testval');
  // TODO: Assemble JavaScript into code variable.
  var code = 'test_feature()\n';
  return code;
};

Blockly.JavaScript['remove_dups'] = function(block) {
  var dropdown_option_dups = block.getFieldValue('option_dups');
  // TODO: Assemble JavaScript into code variable.
  var code = 'remove_dupe()\n';
  return code;
};

Blockly.JavaScript['outliers'] = function(block) {
  var dropdown_option_ol = block.getFieldValue('option_ol');
  // TODO: Assemble JavaScript into code variable.
  var code = dropdown_option_ol + '_ol()\n';
  return code;
};

Blockly.JavaScript['missing_data'] = function(block) {
  var dropdown_option_md = block.getFieldValue('option_md');
  // TODO: Assemble JavaScript into code variable.
  var code = dropdown_option_md + '_md()\n';
  return code;
};

Blockly.JavaScript['std_features'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'std_features()\n';
  return code;
};