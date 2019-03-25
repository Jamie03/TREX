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
  var code = 'y_pred = regr.predict(' + value_x + ')\nprint(regr.coef_)\nprint(mean_squared_error(y_test, y_pred))\nprint(r2_score(y_test, y_pred))\n';
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

Blockly.Python['diabetes_data'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'datasets.load_diabetes()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['split_data'] = function(block) {
  var value_data_in = Blockly.Python.valueToCode(block, 'data_in', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'd = ' + value_data_in + '\nx = d.data[:, np.newaxis, 2]\nx_train = x[:-20]\nx_test = x[-20:]\ny_train = d.target[:-20]\ny_test = d.target[-20:]\n';
  return code;
};

Blockly.Python['import_temp'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'import numpy as np\nfrom sklearn import datasets, linear_model\nfrom sklearn.metrics import mean_squared_error, r2_score\n';
  return code;
};