Blockly.Blocks['linear_reg'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Linear Reg");
    this.appendStatementInput("linear_param")
        .setCheck("Array");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(165);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['fit'] = {
  init: function() {
    this.appendValueInput("X")
        .setCheck("Array")
        .appendField("Fit")
        .appendField(new Blockly.FieldDropdown([["X Train","x_train"], ["y Train","y_train"], ["Weights","weights"]]), "train_select");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("Fit linear model.");
 this.setHelpUrl("https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LinearRegression.html#sklearn.linear_model.LinearRegression.fit");
  }
};

Blockly.Blocks['predict'] = {
  init: function() {
    this.appendValueInput("X")
        .setCheck("Array")
        .appendField("Predict");
    this.setPreviousStatement(true, null);
    this.setColour(105);
 this.setTooltip("Predict using the linear model.");
 this.setHelpUrl("https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LinearRegression.html#sklearn.linear_model.LinearRegression.predict");
  }
};

Blockly.Blocks['select_feature'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("String")
        .appendField("Select");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("Selects feature to be tested.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['test_feature'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Test")
        .appendField(new Blockly.FieldTextInput("feature"), "x")
        .appendField("with")
        .appendField(new Blockly.FieldNumber(0), "testval");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(15);
 this.setTooltip("Predicts the value of a feature specified given a value.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['remove_dups'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Remove")
        .appendField(new Blockly.FieldDropdown([["Zero Variance","zero_v"], ["Duplicate","dups"]]), "option_dups")
        .appendField("Features");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(195);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['outliers'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["Remove","remove_ol"], ["Replace","replace_ol"]]), "option_ol")
        .appendField("Outliers");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(225);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['missing_data'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["Remove","remove_md"], ["Replace","replace_md"]]), "option_md")
        .appendField("Missing Data");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(240);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['std_features'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Standardize Features");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};