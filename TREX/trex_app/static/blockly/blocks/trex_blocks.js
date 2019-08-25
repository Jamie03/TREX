Blockly.Blocks['linear_reg'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Create Linear Reg");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(195);
 this.setTooltip("Initializes the linear regression model using default parameters.");
 this.setHelpUrl("https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LinearRegression.html");
  }
};

Blockly.Blocks['fit'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Fit")
        .appendField(new Blockly.FieldVariable("X_train"), "x")
        .appendField("and")
        .appendField(new Blockly.FieldVariable("Y_train"), "y");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(195);
 this.setTooltip("Fit linear model.");
 this.setHelpUrl("https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LinearRegression.html#sklearn.linear_model.LinearRegression.fit");
  }
};

Blockly.Blocks['predict'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Predict")
        .appendField(new Blockly.FieldVariable("X_test"), "x");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(195);
 this.setTooltip("Predict using the linear model.");
 this.setHelpUrl("https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LinearRegression.html#sklearn.linear_model.LinearRegression.predict");
  }
};

Blockly.Blocks['missing_data'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Replace Missing data in Feature")
        .appendField(new Blockly.FieldTextInput("name"), "feat");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(255);
 this.setTooltip("Replaces NaN data with the average value in the selected feature.");
 this.setHelpUrl("https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.fillna.html");
  }
};

Blockly.Blocks['std_features'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Standardize")
        .appendField(new Blockly.FieldVariable("X"), "x");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(255);
 this.setTooltip("Standardize features by removing the mean and scaling to unit variance of the train value and the test value given.");
 this.setHelpUrl("https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.StandardScaler.html");
  }
};

Blockly.Blocks['diabetes_data'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Diabetes Features");
    this.setOutput(true, null);
    this.setColour(0);
 this.setTooltip("Loads Scikit Learn's diabetes dataset features.");
 this.setHelpUrl("https://scikit-learn.org/stable/modules/generated/sklearn.datasets.load_diabetes.html");
  }
};

Blockly.Blocks['split_data'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Split")
        .appendField(new Blockly.FieldVariable("X"), "X")
        .appendField("and")
        .appendField(new Blockly.FieldVariable("Y"), "Y")
        .appendField("at")
        .appendField(new Blockly.FieldNumber(0, 10, 90), "thresh")
        .appendField("%");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(195);
 this.setTooltip("Splits and creates variables for the input X and Y arrays into their respective train and test sets with the input percentage.");
 this.setHelpUrl("https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.train_test_split.html");
  }
};

Blockly.Blocks['import_temp'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Import Libraries");
    this.setNextStatement(true, null);
    this.setColour(15);
 this.setTooltip("Imports necessary libraries for the tool to function.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['get_coefficients'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get Coefficients");
    this.setOutput(true, null);
    this.setColour(160);
 this.setTooltip("Returns the estimated coefficients for the linear regression problem.");
 this.setHelpUrl("https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LinearRegression.html");
  }
};

Blockly.Blocks['get_mean2error'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get MSE")
        .appendField(new Blockly.FieldVariable("Y_train"), "train")
        .appendField(new Blockly.FieldVariable("Prediction"), "pred");
    this.setOutput(true, "Number");
    this.setColour(160);
 this.setTooltip("Returns the mean squared error regression loss for the linear regression problem.");
 this.setHelpUrl("https://scikit-learn.org/stable/modules/generated/sklearn.metrics.mean_squared_error.html#sklearn.metrics.mean_squared_error");
  }
};

Blockly.Blocks['get_accuracy'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get R^2 Score")
        .appendField(new Blockly.FieldVariable("Y_train"), "train")
        .appendField(new Blockly.FieldVariable("Prediction"), "pred");
    this.setOutput(true, "Number");
    this.setColour(160);
 this.setTooltip("Returns the R^2 (coefficient of determination) regression score function for the linear regression problem.");
 this.setHelpUrl("https://scikit-learn.org/stable/modules/generated/sklearn.metrics.r2_score.html#sklearn.metrics.r2_score");
  }
};

Blockly.Blocks['boston_data'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Boston Features");
    this.setOutput(true, null);
    this.setColour(0);
 this.setTooltip("Loads Scikit Learn's boston housing dataset features.");
 this.setHelpUrl("https://scikit-learn.org/stable/modules/generated/sklearn.datasets.load_boston.html");
  }
};

Blockly.Blocks['remove_data_feature'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Remove Feature")
        .appendField(new Blockly.FieldTextInput("name"), "feat");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(255);
 this.setTooltip("Sets two data features for the Linear Regression Model.");
 this.setHelpUrl("https://towardsdatascience.com/linear-regression-on-boston-housing-dataset-f409b7e4a155");
  }
};

Blockly.Blocks['boston_target'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Boston Target");
    this.setOutput(true, null);
    this.setColour(0);
 this.setTooltip("Loads Scikit Learn's boston housing dataset target.");
 this.setHelpUrl("https://scikit-learn.org/stable/modules/generated/sklearn.datasets.load_boston.html");
  }
};

Blockly.Blocks['diabetes_target'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Diabetes Target");
    this.setOutput(true, null);
    this.setColour(0);
 this.setTooltip("Loads Scikit Learn's diabetes dataset.");
 this.setHelpUrl("https://scikit-learn.org/stable/modules/generated/sklearn.datasets.load_diabetes.html");
  }
};