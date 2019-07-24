Blockly.Python['linear_reg'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'regr = linear_model.LinearRegression()\n';
  return code;
};

Blockly.Python['fit'] = function(block) {
  var variable_x = Blockly.Python.variableDB_.getName(block.getFieldValue('x'), Blockly.Variables.NAME_TYPE);
  var variable_y = Blockly.Python.variableDB_.getName(block.getFieldValue('y'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = 'regr.fit(' + variable_x + ', ' + variable_y + ')\n';
  return code;
};

Blockly.Python['predict'] = function(block) {
  var variable_x = Blockly.Python.variableDB_.getName(block.getFieldValue('x'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = 'regr.predict(' + variable_x + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['predict'] = function(block) {
  var variable_x = Blockly.Python.variableDB_.getName(block.getFieldValue('x'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = 'Prediction = regr.predict(' + variable_x + ')\n';
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
  var text_feat = block.getFieldValue('feat');
  // TODO: Assemble Python into code variable.
  var code = 'X["' + text_feat + '"].fillna(X["' + text_feat + '"].mean(), inplace=True)\n';
  return code;
};

Blockly.Python['std_features'] = function(block) {
  var variable_x = Blockly.Python.variableDB_.getName(block.getFieldValue('x'), Blockly.Variables.NAME_TYPE);
  var variable_y = Blockly.Python.variableDB_.getName(block.getFieldValue('y'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = 'sc_X = StandardScaler()\n' + variable_x + ' = sc_X.fit_transform(' + variable_x + ')\nsc_y = StandardScaler()\n' + variable_y + ' = sc_y.fit_transform(' + variable_y + '.reshape(-1, 1))\n';
  return code;
};

Blockly.Python['diabetes_data'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'pd.DataFrame(diabetes_dataset.data, columns=diabetes_dataset.feature_names)';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['boston_data'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'pd.DataFrame(boston_dataset.data, columns=boston_dataset.feature_names)';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['split_data'] = function(block) {
  var variable_x = Blockly.Python.variableDB_.getName(block.getFieldValue('X'), Blockly.Variables.NAME_TYPE);
  var variable_y = Blockly.Python.variableDB_.getName(block.getFieldValue('Y'), Blockly.Variables.NAME_TYPE);
  var number_thresh = block.getFieldValue('thresh');
  // TODO: Assemble Python into code variable.
  var code = 'X_train, X_test, Y_train, Y_test = train_test_split(' + variable_x + ', ' + variable_y + ', test_size = ' + number_thresh + '*0.01)\n';
  return code;
};

Blockly.Python['import_temp'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'import numpy as np\nimport pandas as pd\nfrom sklearn import linear_model\nfrom sklearn.datasets import load_boston, load_diabetes\nfrom sklearn.metrics import mean_squared_error, r2_score\nboston_dataset = load_boston()\ndiabetes_dataset = load_diabetes()\nfrom sklearn.datasets import load_boston, load_diabetes\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.preprocessing import StandardScaler\n';
  return code;
};

Blockly.Python['get_coefficients'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'regr.coef_';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['get_mean2error'] = function(block) {
  var variable_train = Blockly.Python.variableDB_.getName(block.getFieldValue('train'), Blockly.Variables.NAME_TYPE);
  var variable_pred = Blockly.Python.variableDB_.getName(block.getFieldValue('pred'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = 'mean_squared_error(' + variable_train + ', ' + variable_pred + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['get_accuracy'] = function(block) {
  var variable_train = Blockly.Python.variableDB_.getName(block.getFieldValue('train'), Blockly.Variables.NAME_TYPE);
  var variable_pred = Blockly.Python.variableDB_.getName(block.getFieldValue('pred'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = 'r2_score(' + variable_train + ', ' + variable_pred + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['remove_data_feature'] = function(block) {
  var text_feat = block.getFieldValue('feat');
  // TODO: Assemble Python into code variable.
  var code = 'del X["' + text_feat + '"]\n';
  return code;
};

Blockly.Python['diabetes_target'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'diabetes_dataset.target';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['boston_target'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'boston_dataset.target';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};