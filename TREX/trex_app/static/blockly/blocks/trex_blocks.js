Blockly.Blocks['linear_reg'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Create Linear Reg");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(165);
 this.setTooltip("Ordinary least squares Linear Regression.");
 this.setHelpUrl("https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LinearRegression.html");
  }
};

Blockly.Blocks['fit'] = {
  init: function() {
    this.appendValueInput("x_train")
        .setCheck(null)
        .appendField("Fit X Train");
    this.appendValueInput("y_train")
        .setCheck(null)
        .appendField("Fit Y Train");
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
    this.setNextStatement(true, null);
    this.setColour(105);
 this.setTooltip("Predict using the linear model.");
 this.setHelpUrl("https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LinearRegression.html#sklearn.linear_model.LinearRegression.predict");
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

Blockly.Blocks['diabetes_data'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Diabetes Dataset");
    this.setOutput(true, null);
    this.setColour(0);
 this.setTooltip("Loads Scikit Learn's diabetes dataset.");
 this.setHelpUrl("https://scikit-learn.org/stable/auto_examples/linear_model/plot_ols.html#sphx-glr-auto-examples-linear-model-plot-ols-py");
  }
};

Blockly.Blocks['split_data'] = {
  init: function() {
    this.appendValueInput("data_in")
        .setCheck(null)
        .appendField("Split");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("Split the data into training/testing sets.");
 this.setHelpUrl("https://scikit-learn.org/stable/auto_examples/linear_model/plot_ols.html#sphx-glr-auto-examples-linear-model-plot-ols-py");
  }
};

Blockly.Blocks['import_temp'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Import Libraries");
    this.setNextStatement(true, null);
    this.setColour(15);
 this.setTooltip("Imports necessary libraries from Scikit Learn and Numpy");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['get_coefficients'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get Coefficients");
    this.setOutput(true, null);
    this.setColour(15);
 this.setTooltip("Returns the estimated coefficients for the linear regression problem.");
 this.setHelpUrl("https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LinearRegression.html");
  }
};

Blockly.Blocks['get_mean2error'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get Mean Squared Error");
    this.setOutput(true, "Number");
    this.setColour(15);
 this.setTooltip("Returns the mean squared error regression loss for the linear regression problem.");
 this.setHelpUrl("https://scikit-learn.org/stable/modules/generated/sklearn.metrics.mean_squared_error.html#sklearn.metrics.mean_squared_error");
  }
};

Blockly.Blocks['get_accuracy'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get Variance Score");
    this.setOutput(true, "Number");
    this.setColour(15);
 this.setTooltip("Returns the R^2 (coefficient of determination) regression score function for the linear regression problem.");
 this.setHelpUrl("https://scikit-learn.org/stable/modules/generated/sklearn.metrics.r2_score.html#sklearn.metrics.r2_score");
  }
};