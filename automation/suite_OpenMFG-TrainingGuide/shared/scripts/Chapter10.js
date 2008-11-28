function executeChapter10()
{
    waitForObjectItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "Accounting");
    activateItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "Accounting");
    waitForObjectItem(":xTuple ERP: OpenMFG Edition.Accounting_QMenu", "Financial Statements");
    activateItem(":xTuple ERP: OpenMFG Edition.Accounting_QMenu", "Financial Statements");
    waitForObjectItem(":xTuple ERP: OpenMFG Edition.Financial Statements_QMenu", "List Financial Reports...");
    activateItem(":xTuple ERP: OpenMFG Edition.Financial Statements_QMenu", "List Financial Reports...");
    
    //---------------Create Basic Income Statement---------------
    waitForObjectItem(":List Financial Reports._flhead_XTreeWidget", "Basic Income Statement");
    clickItem(":List Financial Reports._flhead_XTreeWidget", "Basic Income Statement", 5, 5, 1, Qt.LeftButton);
    waitForObject(":List Financial Reports.Copy_QPushButton");
    clickButton(":List Financial Reports.Copy_QPushButton");
    waitForObject(":Target Report:_QLineEdit");
    type(":Target Report:_QLineEdit", "Official Income Statement");
    clickButton(":Copy Financial Report.OK_QPushButton");
    waitForObject(":List Financial Reports._flhead_XTreeWidget");
    doubleClickItem(":List Financial Reports._flhead_XTreeWidget", "Official Income Statement", 5, 5, 0, Qt.LeftButton);
    waitForObjectItem(":frame._layout_XTreeWidget", "INCOME");
    clickItem(":frame._layout_XTreeWidget", "INCOME", 5, 5, 1, Qt.LeftButton);
    clickButton(":frame.Delete_QPushButton");
    waitForObject(":frame.Add Top Level Group_QPushButton");
    clickButton(":frame.Add Top Level Group_QPushButton");
    waitForObject(":_name_XLineEdit_20");
    type(":_name_XLineEdit_20", "REVENUE");
    type(":_description_XLineEdit_29", "REVENUE");
    if(!findObject(":Subtotal/Summarize.Show Subtotal_QCheckBox").checked)
        clickButton(":Subtotal/Summarize.Show Subtotal_QCheckBox");
    if(!findObject(":Subtotal/Summarize.Use Alt. Label_QCheckBox").checked)	
        clickButton(":Subtotal/Summarize.Use Alt. Label_QCheckBox");
    if(!findObject(":Subtotal/Summarize.Show % of Group Total_QCheckBox").checked)
        clickButton(":Subtotal/Summarize.Show % of Group Total_QCheckBox");
    type(":_altSubtotalLabel_QLineEdit", "Total Gross Revenue");
    clickButton(":Operation.Add to Group Total_QRadioButton");
    clickButton(":Financial Report Group.Save_QPushButton");
  
    waitForObject(":frame._layout_XTreeWidget");
    clickButton(":frame.Add Top Level Group_QPushButton");
    waitForObject(":_name_XLineEdit_20");
    type(":_name_XLineEdit_20", "EXPENSES");
    type(":_description_XLineEdit_29", "EXPENSES");
   if(!findObject(":Subtotal/Summarize.Show Subtotal_QCheckBox").checked)
        clickButton(":Subtotal/Summarize.Show Subtotal_QCheckBox");
    if(!findObject(":Subtotal/Summarize.Use Alt. Label_QCheckBox").checked)
        clickButton(":Subtotal/Summarize.Use Alt. Label_QCheckBox");
    if(!findObject(":Subtotal/Summarize.Show % of Group Total_QCheckBox").checked)
        clickButton(":Subtotal/Summarize.Show % of Group Total_QCheckBox");  
    type(":_altSubtotalLabel_QLineEdit", "Total Expenses");
    clickButton(":Operation.Subtract from Group Total_QRadioButton");
    clickButton(":Financial Report Group.Save_QPushButton");
 
    
    waitForObject(":frame._layout_XTreeWidget");
    clickItem(":frame._layout_XTreeWidget", "REVENUE", 5, 5, 1, Qt.LeftButton);
    clickButton(":frame.Add Group_QPushButton");
    waitForObject(":_name_XLineEdit_20");
    type(":_name_XLineEdit_20", "Sales");
    type(":_description_XLineEdit_29", "Sales");
    if(!findObject(":Subtotal/Summarize.Show Subtotal_QCheckBox").checked)
        clickButton(":Subtotal/Summarize.Show Subtotal_QCheckBox");
    if(!findObject(":Subtotal/Summarize.Use Alt. Label_QCheckBox").checked)
        clickButton(":Subtotal/Summarize.Use Alt. Label_QCheckBox");
    if(!findObject(":Subtotal/Summarize.Show % of Group Total_QCheckBox").checked)
        clickButton(":Subtotal/Summarize.Show % of Group Total_QCheckBox");
    if(findObject(":_group_XComboBox").currentText!="Parent")
        type(":_group_XComboBox", "Parent");
    type(":_altSubtotalLabel_QLineEdit", "Total Sales");
    clickButton(":Operation.Add to Group Total_QRadioButton");
    clickButton(":Financial Report Group.Save_QPushButton");
   
    
    waitForObject(":frame._layout_XTreeWidget");
    clickItem(":frame._layout_XTreeWidget", "REVENUE", 5, 5, 1, Qt.LeftButton);
    clickButton(":frame.Add Group_QPushButton");
    waitForObject(":_name_XLineEdit_20");
    type(":_name_XLineEdit_20", "Other Revenue");
    type(":_description_XLineEdit_29", "Other Revenue");
    if(!findObject(":Subtotal/Summarize.Show Subtotal_QCheckBox").checked)
        clickButton(":Subtotal/Summarize.Show Subtotal_QCheckBox");
    if(!findObject(":Subtotal/Summarize.Use Alt. Label_QCheckBox").checked)
        clickButton(":Subtotal/Summarize.Use Alt. Label_QCheckBox");
    if(!findObject(":Subtotal/Summarize.Show % of Group Total_QCheckBox").checked)
        clickButton(":Subtotal/Summarize.Show % of Group Total_QCheckBox");
    if(findObject(":_group_XComboBox").currentText!="Parent")
        type(":_group_XComboBox", "Parent");
    type(":_altSubtotalLabel_QLineEdit", "Total Other Revenue");
    clickButton(":Operation.Add to Group Total_QRadioButton");
    clickButton(":Financial Report Group.Save_QPushButton");
    
    
    waitForObject(":frame._layout_XTreeWidget");
    clickItem(":frame._layout_XTreeWidget", "REVENUE", 5, 5, 1, Qt.LeftButton);
    clickButton(":frame.Add Group_QPushButton");
    waitForObject(":_name_XLineEdit_20");
    type(":_name_XLineEdit_20", "Cost of Goods Sold");
    type(":_description_XLineEdit_29", "Cost of Goods Sold");
    if(!findObject(":Subtotal/Summarize.Show Subtotal_QCheckBox").checked)
        clickButton(":Subtotal/Summarize.Show Subtotal_QCheckBox");
    if(!findObject(":Subtotal/Summarize.Use Alt. Label_QCheckBox").checked)
        clickButton(":Subtotal/Summarize.Use Alt. Label_QCheckBox");
    if(!findObject(":Subtotal/Summarize.Show % of Group Total_QCheckBox").checked)
        clickButton(":Subtotal/Summarize.Show % of Group Total_QCheckBox");
    if(findObject(":_group_XComboBox")!= "Parent");
        type(":_group_XComboBox", "Parent");
    type(":_altSubtotalLabel_QLineEdit", "Total COGS");
    clickButton(":Operation.Subtract from Group Total_QRadioButton");
    waitForObject(":Financial Report Group.Save_QPushButton");
    clickButton(":Financial Report Group.Save_QPushButton");
     
    waitForObject(":frame._layout_XTreeWidget");
    clickItem(":frame._layout_XTreeWidget", "EXPENSES", 5, 5, 1, Qt.LeftButton);
    clickButton(":frame.Add Group_QPushButton");
    waitForObject(":_name_XLineEdit_20");
    type(":_name_XLineEdit_20", "General Expenses");
    type(":_description_XLineEdit_29", "General Expenses");
    if(!findObject(":Subtotal/Summarize.Show Subtotal_QCheckBox").checked)
        clickButton(":Subtotal/Summarize.Show Subtotal_QCheckBox");
    if(!findObject(":Subtotal/Summarize.Use Alt. Label_QCheckBox").checked)
        clickButton(":Subtotal/Summarize.Use Alt. Label_QCheckBox");
    if(!findObject(":Subtotal/Summarize.Show % of Group Total_QCheckBox").checked)
        clickButton(":Subtotal/Summarize.Show % of Group Total_QCheckBox");
    if(findObject(":_group_XComboBox")!= "Parent");
        type(":_group_XComboBox", "Parent");
    type(":_altSubtotalLabel_QLineEdit", "Total General Expenses");
    clickButton(":Operation.Add to Group Total_QRadioButton");
    clickButton(":Financial Report Group.Save_QPushButton");
    
    waitForObject(":frame._layout_XTreeWidget");
    clickItem(":frame._layout_XTreeWidget", "EXPENSES", 5, 5, 1, Qt.LeftButton);
    clickButton(":frame.Add Group_QPushButton");
    waitForObject(":_name_XLineEdit_20");
    type(":_name_XLineEdit_20", "Depreciation Expense");
    type(":_description_XLineEdit_29", "Depreciation Expense");
    if(!findObject(":Subtotal/Summarize.Show Subtotal_QCheckBox").checked)
        clickButton(":Subtotal/Summarize.Show Subtotal_QCheckBox");
    if(!findObject(":Subtotal/Summarize.Use Alt. Label_QCheckBox").checked)
        clickButton(":Subtotal/Summarize.Use Alt. Label_QCheckBox");
    if(!findObject(":Subtotal/Summarize.Show % of Group Total_QCheckBox").checked)
        clickButton(":Subtotal/Summarize.Show % of Group Total_QCheckBox");
    if(findObject(":_group_XComboBox")!= "Parent");
        type(":_group_XComboBox", "Parent");
    type(":_altSubtotalLabel_QLineEdit", "Total Depreciation Expenses");
    clickButton(":Operation.Add to Group Total_QRadioButton");
    clickButton(":Financial Report Group.Save_QPushButton");
    
    clickButton(":Financial Report.Save_QPushButton");
    
    waitForObject(":List Financial Reports._flhead_XTreeWidget");
    doubleClickItem(":List Financial Reports._flhead_XTreeWidget", "Official Income Statement", 5, 5, 0, Qt.LeftButton);     waitForObject(":Financial Report.qt_tabwidget_tabbar_QTabBar");
    clickTab(":Financial Report.qt_tabwidget_tabbar_QTabBar", "Options");
    if(!findObject(":_options.Show Grand Total_QCheckBox").checked)
        clickButton(":_options.Show Grand Total_QCheckBox");
    if(!findObject(":Alternate Labels.Alternate Budget:_QCheckBox").checked)
        clickButton(":Alternate Labels.Alternate Budget:_QCheckBox");
    type(":Alternate Labels._altBudgetText_QLineEdit", "Total Budget");
    if(!findObject(":Alternate Labels.Alternate Grand Total:_QCheckBox").checked)
        clickButton(":Alternate Labels.Alternate Grand Total:_QCheckBox");
    type(":Alternate Labels._altTotalText_QLineEdit", "Net Income");
    clickTab(":Financial Report.qt_tabwidget_tabbar_QTabBar", "Row Layout");
    waitForObject(":frame._layout_XTreeWidget");
    
    doubleClickItem(":frame._layout_XTreeWidget", "REVENUE", 5, 5, 0, Qt.LeftButton);
    waitForObject(":_group_XComboBox");
    if(findObject(":_group_XComboBox").currentText!="Sales")
        type(":_group_XComboBox", "Sales");
    clickButton(":Financial Report Group.Save_QPushButton");
    
    doubleClickItem(":frame._layout_XTreeWidget", "REVENUE.Sales", 5, 5, 0, Qt.LeftButton);
    waitForObject(":_group_XComboBox");
    if(findObject(":_group_XComboBox").currentText!="Sales")
        type(":_group_XComboBox", "Sales");
    clickButton(":Financial Report Group.Save_QPushButton");
    
    doubleClickItem(":frame._layout_XTreeWidget", "REVENUE.Other Revenue", 5, 5, 0, Qt.LeftButton);
    waitForObject(":_group_XComboBox");
    if(findObject(":_group_XComboBox").currentText!="Sales")
        type(":_group_XComboBox", "Sales");
    clickButton(":Financial Report Group.Save_QPushButton");
    
    doubleClickItem(":frame._layout_XTreeWidget", "REVENUE.Cost of Goods Sold", 5, 5, 0, Qt.LeftButton);
    waitForObject(":_group_XComboBox");
    if(findObject(":_group_XComboBox").currentText!="Sales")
        type(":_group_XComboBox", "Sales");
    clickButton(":Financial Report Group.Save_QPushButton");
    
    
    doubleClickItem(":frame._layout_XTreeWidget", "EXPENSES", 5, 5, 0, Qt.LeftButton);
    waitForObject(":_group_XComboBox");
    if(findObject(":_group_XComboBox").currentText!="Sales")
        type(":_group_XComboBox", "Sales");
    clickButton(":Financial Report Group.Save_QPushButton");
    
    doubleClickItem(":frame._layout_XTreeWidget", "EXPENSES.General Expenses", 5, 5, 0, Qt.LeftButton);
    waitForObject(":_group_XComboBox");
    if(findObject(":_group_XComboBox").currentText!="Sales")
        type(":_group_XComboBox", "Sales");
    clickButton(":Financial Report Group.Save_QPushButton");
    
    doubleClickItem(":frame._layout_XTreeWidget", "EXPENSES.Depreciation Expense", 5, 5, 0, Qt.LeftButton);
    waitForObject(":_group_XComboBox");
    if(findObject(":_group_XComboBox").currentText!="Sales")
        type(":_group_XComboBox", "Sales");
    clickButton(":Financial Report Group.Save_QPushButton");
    clickButton(":Financial Report.Save_QPushButton");
    
    
    waitForObject(":List Financial Reports._flhead_XTreeWidget");
    doubleClickItem(":List Financial Reports._flhead_XTreeWidget", "Official Income Statement", 5, 5, 0, Qt.LeftButton);
    waitForObject(":frame._layout_XTreeWidget");
    clickItem(":frame._layout_XTreeWidget", "REVENUE.Sales", 5, 5, 1, Qt.LeftButton);
    clickButton(":frame.Add Account_QPushButton");
    waitForObject(":_selection.Select Multiple Accounts by Segment_QGroupBox");
    if(!findObject(":_selection.Select Multiple Accounts by Segment_QGroupBox").checked)
        type(":_selection.Select Multiple Accounts by Segment_QGroupBox"," ");
    waitForObject(":_selection.Select Multiple Accounts by Segment_QGroupBox");
    if(findObject(":Select Multiple Accounts by Segment._type_XComboBox").currentText!= "Revenue")
        type(":Select Multiple Accounts by Segment._type_XComboBox", "Revenue");
    if(findObject(":Select Multiple Accounts by Segment._subType_XComboBox").currentText!="SI-Sales Income");
        type(":Select Multiple Accounts by Segment._subType_XComboBox", "SI");
    clickButton(":Operation.Add to Group Total_QRadioButton_2");
    clickTab(":Financial Report Item.qt_tabwidget_tabbar_QTabBar", "Options");
    waitForObject(":_options.Show % of Group Total_QCheckBox");
    if(!findObject(":_options.Show % of Group Total_QCheckBox").checked)
        clickButton(":_options.Show % of Group Total_QCheckBox");
    if(findObject(":_options._group_XComboBox").currentText!="Sales");
        type(":_options._group_XComboBox", "Sales");
    clickButton(":Financial Report Item.Save_QPushButton");
   
    waitForObject(":frame._layout_XTreeWidget");
    clickItem(":frame._layout_XTreeWidget", "REVENUE.Other Revenue", 5, 5, 1, Qt.LeftButton);
    clickButton(":frame.Add Account_QPushButton");
    waitForObject(":_selection.Select Multiple Accounts by Segment_QGroupBox");
    if(!findObject(":_selection.Select Multiple Accounts by Segment_QGroupBox").checked)
        type(":_selection.Select Multiple Accounts by Segment_QGroupBox"," ");
    waitForObject(":_selection.Select Multiple Accounts by Segment_QGroupBox");
    if(findObject(":Select Multiple Accounts by Segment._type_XComboBox").currentText!= "Revenue")
        type(":Select Multiple Accounts by Segment._type_XComboBox", "Revenue");
    if(findObject(":Select Multiple Accounts by Segment._subType_XComboBox").currentText!="SO-Other Revenue");
        type(":Select Multiple Accounts by Segment._subType_XComboBox", "SO");
    clickButton(":Operation.Add to Group Total_QRadioButton_2");
    clickTab(":Financial Report Item.qt_tabwidget_tabbar_QTabBar", "Options");
    waitForObject(":_options.Show % of Group Total_QCheckBox");
    if(!findObject(":_options.Show % of Group Total_QCheckBox").checked)
        clickButton(":_options.Show % of Group Total_QCheckBox");
    if(findObject(":_options._group_XComboBox").currentText!="Sales");
        type(":_options._group_XComboBox", "Sales");
    clickButton(":Financial Report Item.Save_QPushButton");
    
    waitForObject(":frame._layout_XTreeWidget");
    clickItem(":frame._layout_XTreeWidget", "REVENUE.Cost of Goods Sold", 5, 5, 1, Qt.LeftButton);
    clickButton(":frame.Add Account_QPushButton");
    waitForObject(":_selection.Select Multiple Accounts by Segment_QGroupBox");
    if(!findObject(":_selection.Select Multiple Accounts by Segment_QGroupBox").checked)
        type(":_selection.Select Multiple Accounts by Segment_QGroupBox"," ");
    waitForObject(":_selection.Select Multiple Accounts by Segment_QGroupBox");
    if(findObject(":Select Multiple Accounts by Segment._type_XComboBox").currentText!= "Expense")
        type(":Select Multiple Accounts by Segment._type_XComboBox", "Expense");
    if(findObject(":Select Multiple Accounts by Segment._subType_XComboBox").currentText!="COGS-Cost of Goods Sold");
        type(":Select Multiple Accounts by Segment._subType_XComboBox", "COGS");
    clickButton(":Operation.Subtract from Group Total_QRadioButton_2");
    clickTab(":Financial Report Item.qt_tabwidget_tabbar_QTabBar", "Options");
    waitForObject(":_options.Show % of Group Total_QCheckBox");
    if(!findObject(":_options.Show % of Group Total_QCheckBox").checked)
        clickButton(":_options.Show % of Group Total_QCheckBox");
    if(findObject(":_options._group_XComboBox").currentText!="Sales");
        type(":_options._group_XComboBox", "Sales");
    clickButton(":Financial Report Item.Save_QPushButton");
    
    waitForObject(":frame._layout_XTreeWidget");
    clickItem(":frame._layout_XTreeWidget", "EXPENSES.General Expenses", 5, 5, 1, Qt.LeftButton);
    clickButton(":frame.Add Account_QPushButton");
    waitForObject(":_selection.Select Multiple Accounts by Segment_QGroupBox");
    if(!findObject(":_selection.Select Multiple Accounts by Segment_QGroupBox").checked)
        type(":_selection.Select Multiple Accounts by Segment_QGroupBox"," ");
    waitForObject(":_selection.Select Multiple Accounts by Segment_QGroupBox");
    if(findObject(":Select Multiple Accounts by Segment._type_XComboBox").currentText!= "Expense")
        type(":Select Multiple Accounts by Segment._type_XComboBox", "Expense");
    if(findObject(":Select Multiple Accounts by Segment._subType_XComboBox").currentText!="EXP-Expenses");
        type(":Select Multiple Accounts by Segment._subType_XComboBox", "EXP");
    clickButton(":Operation.Add to Group Total_QRadioButton_2");
    clickTab(":Financial Report Item.qt_tabwidget_tabbar_QTabBar", "Options");
    waitForObject(":_options.Show % of Group Total_QCheckBox");
    if(!findObject(":_options.Show % of Group Total_QCheckBox").checked)
        clickButton(":_options.Show % of Group Total_QCheckBox");
    if(findObject(":_options._group_XComboBox").currentText!="Sales");
        type(":_options._group_XComboBox", "Sales");
    clickButton(":Financial Report Item.Save_QPushButton");
    
    waitForObject(":frame._layout_XTreeWidget");
    clickItem(":frame._layout_XTreeWidget", "EXPENSES.Depreciation Expense", 5, 5, 1, Qt.LeftButton);
    clickButton(":frame.Add Account_QPushButton");
    waitForObject(":_selection.Select Multiple Accounts by Segment_QGroupBox");
    if(!findObject(":_selection.Select Multiple Accounts by Segment_QGroupBox").checked)
        type(":_selection.Select Multiple Accounts by Segment_QGroupBox"," ");
    waitForObject(":_selection.Select Multiple Accounts by Segment_QGroupBox");
    if(findObject(":Select Multiple Accounts by Segment._type_XComboBox").currentText!= "Expense")
        type(":Select Multiple Accounts by Segment._type_XComboBox", "Expense");
    if(findObject(":Select Multiple Accounts by Segment._subType_XComboBox").currentText!="DXP-Depreciation Expense");
        type(":Select Multiple Accounts by Segment._subType_XComboBox", "DXP");
    clickButton(":Operation.Add to Group Total_QRadioButton_2");
    clickTab(":Financial Report Item.qt_tabwidget_tabbar_QTabBar", "Options");
    waitForObject(":_options.Show % of Group Total_QCheckBox");
    if(!findObject(":_options.Show % of Group Total_QCheckBox").checked)
        clickButton(":_options.Show % of Group Total_QCheckBox");
    if(findObject(":_options._group_XComboBox").currentText!="Sales");
        type(":_options._group_XComboBox", "Sales");
    clickButton(":Financial Report Item.Save_QPushButton");
    test.log(Completed creation of Financial Report);
    
    
    //-------------Create Official Balance Sheet------------
    waitForObjectItem(":List Financial Reports._flhead_XTreeWidget", "Basic Balance Sheet");
    clickItem(":List Financial Reports._flhead_XTreeWidget", "Basic Balance Sheet", 5, 5, 1, Qt.LeftButton);
    waitForObject(":List Financial Reports.Copy_QPushButton");
    clickButton(":List Financial Reports.Copy_QPushButton");
    waitForObject(":Target Report:_QLineEdit");
    type(":Target Report:_QLineEdit", "Official Balance Sheet");
    waitForObject(":Copy Financial Report.OK_QPushButton");
    clickButton(":Copy Financial Report.OK_QPushButton");
    waitForObject(":List Financial Reports._flhead_XTreeWidget");
    doubleClickItem(":List Financial Reports._flhead_XTreeWidget", "Official Balance Sheet", 5, 5, 0, Qt.LeftButton);
    waitForObjectItem(":frame._layout_XTreeWidget", "ASSETS");
    clickItem(":frame._layout_XTreeWidget", "ASSETS", 5, 5, 1, Qt.LeftButton);
    clickButton(":frame.Delete_QPushButton");
    clickItem(":frame._layout_XTreeWidget", "LIABILITIES AND OWNERS EQUITY", 81, 10, 1, Qt.LeftButton);
    clickButton(":frame.Delete_QPushButton");
    
    clickButton(":frame.Add Top Level Group_QPushButton");
    waitForObject(":_name_XLineEdit_20");
    type(":_name_XLineEdit_20", "ASSETS");
    type(":_description_XLineEdit_29", "ASSETS");
    if(!findObject(":Subtotal/Summarize.Show Subtotal_QCheckBox").checked)
        clickButton(":Subtotal/Summarize.Show Subtotal_QCheckBox");
    if(!findObject(":Subtotal/Summarize.Use Alt. Label_QCheckBox").checked)	
        clickButton(":Subtotal/Summarize.Use Alt. Label_QCheckBox");
    if(!findObject(":Subtotal/Summarize.Show % of Group Total_QCheckBox").checked)
        clickButton(":Subtotal/Summarize.Show % of Group Total_QCheckBox");
    type(":_altSubtotalLabel_QLineEdit", "Total Assets");
    clickButton(":Operation.Add to Group Total_QRadioButton");
    clickButton(":Financial Report Group.Save_QPushButton");

    waitForObject(":frame.Add Top Level Group_QPushButton");
    clickButton(":frame.Add Top Level Group_QPushButton");
    waitForObject(":_name_XLineEdit_20");
    type(":_name_XLineEdit_20", "LIABILITIES AND OWNERS EQUITY");
    type(":_description_XLineEdit_29", "LIABILITIES AND OWNERS EQUITY");
    if(!findObject(":Subtotal/Summarize.Show Subtotal_QCheckBox").checked)
        clickButton(":Subtotal/Summarize.Show Subtotal_QCheckBox");
    if(!findObject(":Subtotal/Summarize.Use Alt. Label_QCheckBox").checked)	
        clickButton(":Subtotal/Summarize.Use Alt. Label_QCheckBox");
    if(!findObject(":Subtotal/Summarize.Show % of Group Total_QCheckBox").checked)
        clickButton(":Subtotal/Summarize.Show % of Group Total_QCheckBox");
    type(":_altSubtotalLabel_QLineEdit", "Total Liabilities and O.E.");
    clickButton(":Operation.Subtract from Group Total_QRadioButton");
    clickButton(":Financial Report Group.Save_QPushButton");

    
    
    waitForObject(":frame._layout_XTreeWidget");
    clickItem(":frame._layout_XTreeWidget", "ASSETS", 5, 5, 1, Qt.LeftButton);
    clickButton(":frame.Add Group_QPushButton");
    waitForObject(":_name_XLineEdit_20");
    type(":_name_XLineEdit_20", "Cash Assets");
    type(":_description_XLineEdit_29", "Cash Assets");
    if(!findObject(":Subtotal/Summarize.Show Subtotal_QCheckBox").checked)
        clickButton(":Subtotal/Summarize.Show Subtotal_QCheckBox");
    if(!findObject(":Subtotal/Summarize.Use Alt. Label_QCheckBox").checked)
        clickButton(":Subtotal/Summarize.Use Alt. Label_QCheckBox");
    if(!findObject(":Subtotal/Summarize.Show % of Group Total_QCheckBox").checked)
        clickButton(":Subtotal/Summarize.Show % of Group Total_QCheckBox");
    if(findObject(":_group_XComboBox").currentText!="Parent")
        type(":_group_XComboBox", "Parent");
    type(":_altSubtotalLabel_QLineEdit", "Total Cash Assets");
    clickButton(":Operation.Add to Group Total_QRadioButton");
    clickButton(":Financial Report Group.Save_QPushButton");
    
    waitForObject(":frame._layout_XTreeWidget");
    clickItem(":frame._layout_XTreeWidget", "ASSETS", 5, 5, 1, Qt.LeftButton);
    clickButton(":frame.Add Group_QPushButton");
    waitForObject(":_name_XLineEdit_20");
    type(":_name_XLineEdit_20", "Current Assets");
    type(":_description_XLineEdit_29", "Current Assets");
    if(!findObject(":Subtotal/Summarize.Show Subtotal_QCheckBox").checked)
        clickButton(":Subtotal/Summarize.Show Subtotal_QCheckBox");
    if(!findObject(":Subtotal/Summarize.Use Alt. Label_QCheckBox").checked)
        clickButton(":Subtotal/Summarize.Use Alt. Label_QCheckBox");
    if(!findObject(":Subtotal/Summarize.Show % of Group Total_QCheckBox").checked)
        clickButton(":Subtotal/Summarize.Show % of Group Total_QCheckBox");
    if(findObject(":_group_XComboBox").currentText!="Parent")
        type(":_group_XComboBox", "Parent");
    type(":_altSubtotalLabel_QLineEdit", "Total Current Assets");
    clickButton(":Operation.Add to Group Total_QRadioButton");
    clickButton(":Financial Report Group.Save_QPushButton");
    

    waitForObject(":frame._layout_XTreeWidget");
    clickItem(":frame._layout_XTreeWidget", "ASSETS", 5, 5, 1, Qt.LeftButton);
    clickButton(":frame.Add Group_QPushButton");
    waitForObject(":_name_XLineEdit_20");
    type(":_name_XLineEdit_20", "Inventory Assets");
    type(":_description_XLineEdit_29", "Inventory Assets");
    if(!findObject(":Subtotal/Summarize.Show Subtotal_QCheckBox").checked)
        clickButton(":Subtotal/Summarize.Show Subtotal_QCheckBox");
    if(!findObject(":Subtotal/Summarize.Use Alt. Label_QCheckBox").checked)
        clickButton(":Subtotal/Summarize.Use Alt. Label_QCheckBox");
    if(!findObject(":Subtotal/Summarize.Show % of Group Total_QCheckBox").checked)
        clickButton(":Subtotal/Summarize.Show % of Group Total_QCheckBox");
    if(findObject(":_group_XComboBox").currentText!="Parent")
        type(":_group_XComboBox", "Parent");
    type(":_altSubtotalLabel_QLineEdit", "Total Inventory Assets");
    clickButton(":Operation.Add to Group Total_QRadioButton");
    clickButton(":Financial Report Group.Save_QPushButton");
    
    
    waitForObject(":frame._layout_XTreeWidget");
    clickItem(":frame._layout_XTreeWidget", "ASSETS", 5, 5, 1, Qt.LeftButton);
    clickButton(":frame.Add Group_QPushButton");
    waitForObject(":_name_XLineEdit_20");
    type(":_name_XLineEdit_20", "Fixed Assets");
    type(":_description_XLineEdit_29", "Fixed Assets");
    if(!findObject(":Subtotal/Summarize.Show Subtotal_QCheckBox").checked)
        clickButton(":Subtotal/Summarize.Show Subtotal_QCheckBox");
    if(!findObject(":Subtotal/Summarize.Use Alt. Label_QCheckBox").checked)
        clickButton(":Subtotal/Summarize.Use Alt. Label_QCheckBox");
    if(!findObject(":Subtotal/Summarize.Show % of Group Total_QCheckBox").checked)
        clickButton(":Subtotal/Summarize.Show % of Group Total_QCheckBox");
    if(findObject(":_group_XComboBox").currentText!="Parent")
        type(":_group_XComboBox", "Parent");
    type(":_altSubtotalLabel_QLineEdit", "Total Fixed Assets");
    clickButton(":Operation.Add to Group Total_QRadioButton");
    clickButton(":Financial Report Group.Save_QPushButton");
    
    waitForObject(":frame._layout_XTreeWidget");
    clickItem(":frame._layout_XTreeWidget", "LIABILITIES AND OWNERS EQUITY", 5, 5, 1, Qt.LeftButton);
    clickButton(":frame.Add Group_QPushButton");
    waitForObject(":_name_XLineEdit_20");
    type(":_name_XLineEdit_20", "LIABILITIES");
    type(":_description_XLineEdit_29", "LIABILITIES");
    if(!findObject(":Subtotal/Summarize.Show Subtotal_QCheckBox").checked)
        clickButton(":Subtotal/Summarize.Show Subtotal_QCheckBox");
    if(!findObject(":Subtotal/Summarize.Use Alt. Label_QCheckBox").checked)
        clickButton(":Subtotal/Summarize.Use Alt. Label_QCheckBox");
    if(!findObject(":Subtotal/Summarize.Show % of Group Total_QCheckBox").checked)
        clickButton(":Subtotal/Summarize.Show % of Group Total_QCheckBox");
    if(findObject(":_group_XComboBox").currentText!="Parent")
        type(":_group_XComboBox", "Parent");
    type(":_altSubtotalLabel_QLineEdit", "Total Liabilities");
    clickButton(":Operation.Add to Group Total_QRadioButton");
    clickButton(":Financial Report Group.Save_QPushButton");
    
    waitForObject(":frame._layout_XTreeWidget");
    clickItem(":frame._layout_XTreeWidget", "LIABILITIES AND OWNERS EQUITY", 5, 5, 1, Qt.LeftButton);
    clickButton(":frame.Add Group_QPushButton");
    waitForObject(":_name_XLineEdit_20");
    type(":_name_XLineEdit_20", "OWNERS EQUITY");
    type(":_description_XLineEdit_29", "OWNERS EQUITY");
    if(!findObject(":Subtotal/Summarize.Show Subtotal_QCheckBox").checked)
        clickButton(":Subtotal/Summarize.Show Subtotal_QCheckBox");
    if(!findObject(":Subtotal/Summarize.Use Alt. Label_QCheckBox").checked)
        clickButton(":Subtotal/Summarize.Use Alt. Label_QCheckBox");
    if(!findObject(":Subtotal/Summarize.Show % of Group Total_QCheckBox").checked)
        clickButton(":Subtotal/Summarize.Show % of Group Total_QCheckBox");
    if(findObject(":_group_XComboBox").currentText!="Parent")
        type(":_group_XComboBox", "Parent");
    type(":_altSubtotalLabel_QLineEdit", "Total Owners Equity");
    clickButton(":Operation.Add to Group Total_QRadioButton");
    clickButton(":Financial Report Group.Save_QPushButton");
    
    waitForObject(":frame._layout_XTreeWidget");
    clickItem(":frame._layout_XTreeWidget", "LIABILITIES AND OWNERS EQUITY.LIABILITIES", 5, 5, 1, Qt.LeftButton);
    clickButton(":frame.Add Group_QPushButton");
    waitForObject(":_name_XLineEdit_20");
    type(":_name_XLineEdit_20", "Current Liabilities");
    type(":_description_XLineEdit_29", "Current Liabilities");
    if(!findObject(":Subtotal/Summarize.Show Subtotal_QCheckBox").checked)
        clickButton(":Subtotal/Summarize.Show Subtotal_QCheckBox");
    if(!findObject(":Subtotal/Summarize.Use Alt. Label_QCheckBox").checked)
        clickButton(":Subtotal/Summarize.Use Alt. Label_QCheckBox");
    if(!findObject(":Subtotal/Summarize.Show % of Group Total_QCheckBox").checked)
        clickButton(":Subtotal/Summarize.Show % of Group Total_QCheckBox");
    if(findObject(":_group_XComboBox").currentText!="Parent")
        type(":_group_XComboBox", "Parent");
    type(":_altSubtotalLabel_QLineEdit", "Total Current Liabilities");
    clickButton(":Operation.Add to Group Total_QRadioButton");
    clickButton(":Financial Report Group.Save_QPushButton");
    
    
    waitForObject(":frame._layout_XTreeWidget");
    clickItem(":frame._layout_XTreeWidget", "LIABILITIES AND OWNERS EQUITY.LIABILITIES", 5, 5, 1, Qt.LeftButton);
    clickButton(":frame.Add Group_QPushButton");
    waitForObject(":_name_XLineEdit_20");
    type(":_name_XLineEdit_20", "Long Term Liabilities");
    type(":_description_XLineEdit_29", "Long Term Liabilities");
    if(!findObject(":Subtotal/Summarize.Show Subtotal_QCheckBox").checked)
        clickButton(":Subtotal/Summarize.Show Subtotal_QCheckBox");
    if(!findObject(":Subtotal/Summarize.Use Alt. Label_QCheckBox").checked)
        clickButton(":Subtotal/Summarize.Use Alt. Label_QCheckBox");
    if(!findObject(":Subtotal/Summarize.Show % of Group Total_QCheckBox").checked)
        clickButton(":Subtotal/Summarize.Show % of Group Total_QCheckBox");
    if(findObject(":_group_XComboBox").currentText!="Parent")
        type(":_group_XComboBox", "Parent");
    type(":_altSubtotalLabel_QLineEdit", "Total Long Term Liabilities");
    clickButton(":Operation.Add to Group Total_QRadioButton");
    clickButton(":Financial Report Group.Save_QPushButton");
    
    
    waitForObject(":frame._layout_XTreeWidget");
    clickItem(":frame._layout_XTreeWidget", "LIABILITIES AND OWNERS EQUITY.OWNERS EQUITY", 5, 5, 1, Qt.LeftButton);
    clickButton(":frame.Add Group_QPushButton");
    waitForObject(":_name_XLineEdit_20");
    type(":_name_XLineEdit_20", "Capital Stock");
    type(":_description_XLineEdit_29", "Capital Stock");
    if(!findObject(":Subtotal/Summarize.Show Subtotal_QCheckBox").checked)
        clickButton(":Subtotal/Summarize.Show Subtotal_QCheckBox");
    if(!findObject(":Subtotal/Summarize.Use Alt. Label_QCheckBox").checked)
        clickButton(":Subtotal/Summarize.Use Alt. Label_QCheckBox");
    if(!findObject(":Subtotal/Summarize.Show % of Group Total_QCheckBox").checked)
        clickButton(":Subtotal/Summarize.Show % of Group Total_QCheckBox");
    if(findObject(":_group_XComboBox").currentText!="Parent")
        type(":_group_XComboBox", "Parent");
    type(":_altSubtotalLabel_QLineEdit", "Total Capital Stock");
    clickButton(":Operation.Add to Group Total_QRadioButton");
    clickButton(":Financial Report Group.Save_QPushButton");
    
    
    waitForObject(":frame._layout_XTreeWidget");
    clickItem(":frame._layout_XTreeWidget", "LIABILITIES AND OWNERS EQUITY.OWNERS EQUITY", 5, 5, 1, Qt.LeftButton);
    clickButton(":frame.Add Group_QPushButton");
    waitForObject(":_name_XLineEdit_20");
    type(":_name_XLineEdit_20", "Retained Earnings");
    type(":_description_XLineEdit_29", "Retained Earnings");
    if(!findObject(":Subtotal/Summarize.Show Subtotal_QCheckBox").checked)
        clickButton(":Subtotal/Summarize.Show Subtotal_QCheckBox");
    if(!findObject(":Subtotal/Summarize.Use Alt. Label_QCheckBox").checked)
        clickButton(":Subtotal/Summarize.Use Alt. Label_QCheckBox");
    if(!findObject(":Subtotal/Summarize.Show % of Group Total_QCheckBox").checked)
        clickButton(":Subtotal/Summarize.Show % of Group Total_QCheckBox");
    if(findObject(":_group_XComboBox").currentText!="Parent")
        type(":_group_XComboBox", "Parent");
    type(":_altSubtotalLabel_QLineEdit", "Total Retained Earnings");
    clickButton(":Operation.Add to Group Total_QRadioButton");
    clickButton(":Financial Report Group.Save_QPushButton");
    
    waitForObject(":frame._layout_XTreeWidget");
    clickItem(":frame._layout_XTreeWidget", "LIABILITIES AND OWNERS EQUITY.OWNERS EQUITY", 5, 5, 1, Qt.LeftButton);
    clickButton(":frame.Add Group_QPushButton");
    waitForObject(":_name_XLineEdit_20");
    type(":_name_XLineEdit_20", "Year To Date Net Income");
    type(":_description_XLineEdit_29", "Year To Date Net Income");
    if(findObject(":Subtotal/Summarize.Show Subtotal_QCheckBox").checked)
        clickButton(":Subtotal/Summarize.Show Subtotal_QCheckBox");
    if(!findObject(":Subtotal/Summarize.Show % of Group Total_QCheckBox").checked)
        clickButton(":Subtotal/Summarize.Show % of Group Total_QCheckBox");
    if(findObject(":_group_XComboBox").currentText!="Parent")
        type(":_group_XComboBox", "Parent");
    clickButton(":Operation.Add to Group Total_QRadioButton");
    clickButton(":Financial Report Group.Save_QPushButton");
    
    clickButton(":Financial Report.Save_QPushButton");
    
    
    waitForObject(":List Financial Reports._flhead_XTreeWidget");
    doubleClickItem(":List Financial Reports._flhead_XTreeWidget", "Official Balance Sheet", 5, 5, 0, Qt.LeftButton);
  
    waitForObject(":Financial Report.qt_tabwidget_tabbar_QTabBar");
    clickTab(":Financial Report.qt_tabwidget_tabbar_QTabBar", "Options");
    if(!findObject(":_options.Show Grand Total_QCheckBox").checked)
        clickButton(":_options.Show Grand Total_QCheckBox");
    if(findObject(":Alternate Labels.Alternate Budget:_QCheckBox").checked)
        clickButton(":Alternate Labels.Alternate Budget:_QCheckBox");
    if(!findObject(":Alternate Labels.Alternate Grand Total:_QCheckBox").checked)
        clickButton(":Alternate Labels.Alternate Grand Total:_QCheckBox");
    type(":Alternate Labels._altTotalText_QLineEdit", "Balance Sheet Check Total");
    clickTab(":Financial Report.qt_tabwidget_tabbar_QTabBar", "Row Layout");
    waitForObject(":frame._layout_XTreeWidget");
    
    doubleClickItem(":frame._layout_XTreeWidget", "ASSETS", 5, 5, 0, Qt.LeftButton);
    waitForObject(":_group_XComboBox");
    if(findObject(":_group_XComboBox").currentText!="Assets")
        type(":_group_XComboBox", "Assets");
    clickButton(":Financial Report Group.Save_QPushButton");

    doubleClickItem(":frame._layout_XTreeWidget", "ASSETS.Cash Assets", 5, 5, 0, Qt.LeftButton);
    waitForObject(":_group_XComboBox");
    if(findObject(":_group_XComboBox").currentText!="Assets")
        type(":_group_XComboBox", "Assets");
    clickButton(":Financial Report Group.Save_QPushButton");
    
    
    doubleClickItem(":frame._layout_XTreeWidget", "ASSETS.Current Assets", 5, 5, 0, Qt.LeftButton);
    waitForObject(":_group_XComboBox");
    if(findObject(":_group_XComboBox").currentText!="Assets")
        type(":_group_XComboBox", "Assets");
    clickButton(":Financial Report Group.Save_QPushButton");
    
    
    doubleClickItem(":frame._layout_XTreeWidget", "ASSETS.Inventory Assets", 5, 5, 0, Qt.LeftButton);
    waitForObject(":_group_XComboBox");
    if(findObject(":_group_XComboBox").currentText!="Assets")
        type(":_group_XComboBox", "Assets");
    clickButton(":Financial Report Group.Save_QPushButton");
    
    doubleClickItem(":frame._layout_XTreeWidget", "ASSETS.Fixed Assets", 5, 5, 0, Qt.LeftButton);
    waitForObject(":_group_XComboBox");
    if(findObject(":_group_XComboBox").currentText!="Assets")
        type(":_group_XComboBox", "Assets");
    clickButton(":Financial Report Group.Save_QPushButton");
    
    doubleClickItem(":frame._layout_XTreeWidget", "LIABILITIES AND OWNERS EQUITY", 5, 5, 0, Qt.LeftButton);
    waitForObject(":_group_XComboBox");
    if(findObject(":_group_XComboBox").currentText!="Assets")
        type(":_group_XComboBox", "Assets");
    clickButton(":Financial Report Group.Save_QPushButton");
    
    doubleClickItem(":frame._layout_XTreeWidget", "LIABILITIES AND OWNERS EQUITY.LIABILITIES", 5, 5, 0, Qt.LeftButton);    waitForObject(":_group_XComboBox");
    if(findObject(":_group_XComboBox").currentText!="Assets")
        type(":_group_XComboBox", "Assets");
    clickButton(":Financial Report Group.Save_QPushButton");

    doubleClickItem(":frame._layout_XTreeWidget", "LIABILITIES AND OWNERS EQUITY.LIABILITIES.Current Liabilities", 5, 5, 0, Qt.LeftButton);    
    waitForObject(":_group_XComboBox");
    if(findObject(":_group_XComboBox").currentText!="Assets")
        type(":_group_XComboBox", "Assets");
    clickButton(":Financial Report Group.Save_QPushButton");

    doubleClickItem(":frame._layout_XTreeWidget", "LIABILITIES AND OWNERS EQUITY.LIABILITIES.Long Term Liabilities", 5, 5, 0, Qt.LeftButton);    
    waitForObject(":_group_XComboBox");
    if(findObject(":_group_XComboBox").currentText!="Assets")
        type(":_group_XComboBox", "Assets");
    clickButton(":Financial Report Group.Save_QPushButton");

    doubleClickItem(":frame._layout_XTreeWidget", "LIABILITIES AND OWNERS EQUITY.OWNERS EQUITY", 5, 5, 0, Qt.LeftButton);    
    waitForObject(":_group_XComboBox");
    if(findObject(":_group_XComboBox").currentText!="Assets")
        type(":_group_XComboBox", "Assets");
    clickButton(":Financial Report Group.Save_QPushButton");
    
    
    doubleClickItem(":frame._layout_XTreeWidget", "LIABILITIES AND OWNERS EQUITY.OWNERS EQUITY.Capital Stock", 5, 5, 0, Qt.LeftButton);    
    waitForObject(":_group_XComboBox");
    if(findObject(":_group_XComboBox").currentText!="Assets")
        type(":_group_XComboBox", "Assets");
    clickButton(":Financial Report Group.Save_QPushButton");
    
    
    doubleClickItem(":frame._layout_XTreeWidget", "LIABILITIES AND OWNERS EQUITY.OWNERS EQUITY.Retained Earnings", 5, 5, 0, Qt.LeftButton);    
    waitForObject(":_group_XComboBox");
    if(findObject(":_group_XComboBox").currentText!="Assets")
        type(":_group_XComboBox", "Assets");
    clickButton(":Financial Report Group.Save_QPushButton");
    
    doubleClickItem(":frame._layout_XTreeWidget", "LIABILITIES AND OWNERS EQUITY.OWNERS EQUITY.Year To Date Net Income", 5, 5, 0, Qt.LeftButton);    
    waitForObject(":_group_XComboBox");
    if(findObject(":_group_XComboBox").currentText!="Assets")
        type(":_group_XComboBox", "Assets");
    clickButton(":Financial Report Group.Save_QPushButton");
    
    
        waitForObject(":List Financial Reports._flhead_XTreeWidget");
    doubleClickItem(":List Financial Reports._flhead_XTreeWidget", "Official Balance Sheet", 5, 5, 0, Qt.LeftButton);
    
    waitForObject(":frame._layout_XTreeWidget");
    clickItem(":frame._layout_XTreeWidget", "ASSETS.Cash Assets", 5, 5, 1, Qt.LeftButton);
    clickButton(":frame.Add Account_QPushButton");
    waitForObject(":_selection.Select Multiple Accounts by Segment_QGroupBox");
    if(!findObject(":_selection.Select Multiple Accounts by Segment_QGroupBox").checked)
        type(":_selection.Select Multiple Accounts by Segment_QGroupBox"," ");
    waitForObject(":_selection.Select Multiple Accounts by Segment_QGroupBox");
    if(findObject(":Select Multiple Accounts by Segment._type_XComboBox").currentText!= "Asset")
        type(":Select Multiple Accounts by Segment._type_XComboBox", "Asset");
    if(findObject(":Select Multiple Accounts by Segment._subType_XComboBox").currentText!="CA-Cash Asset");
        type(":Select Multiple Accounts by Segment._subType_XComboBox", "CA");
    clickButton(":Operation.Add to Group Total_QRadioButton_2");
    clickTab(":Financial Report Item.qt_tabwidget_tabbar_QTabBar", "Options");
    waitForObject(":_options.Show % of Group Total_QCheckBox");
    if(!findObject(":_options.Show % of Group Total_QCheckBox").checked)
        clickButton(":_options.Show % of Group Total_QCheckBox");
    if(findObject(":_options._group_XComboBox").currentText!="ASSETS");
        type(":_options._group_XComboBox", "ASSETS");
    clickButton(":Financial Report Item.Save_QPushButton");
    
    waitForObject(":frame._layout_XTreeWidget");
    clickItem(":frame._layout_XTreeWidget", "ASSETS.Current Assets", 5, 5, 1, Qt.LeftButton);
    clickButton(":frame.Add Account_QPushButton");
    waitForObject(":_selection.Select Multiple Accounts by Segment_QGroupBox");
    if(!findObject(":_selection.Select Multiple Accounts by Segment_QGroupBox").checked)
        type(":_selection.Select Multiple Accounts by Segment_QGroupBox"," ");
    waitForObject(":_selection.Select Multiple Accounts by Segment_QGroupBox");
    if(findObject(":Select Multiple Accounts by Segment._type_XComboBox").currentText!= "Asset")
        type(":Select Multiple Accounts by Segment._type_XComboBox", "Asset");
    if(findObject(":Select Multiple Accounts by Segment._subType_XComboBox").currentText!="CAS-Current Assets");
        type(":Select Multiple Accounts by Segment._subType_XComboBox", "CAS");
    clickButton(":Operation.Add to Group Total_QRadioButton_2");
    clickTab(":Financial Report Item.qt_tabwidget_tabbar_QTabBar", "Options");
    waitForObject(":_options.Show % of Group Total_QCheckBox");
    if(!findObject(":_options.Show % of Group Total_QCheckBox").checked)
        clickButton(":_options.Show % of Group Total_QCheckBox");
    if(findObject(":_options._group_XComboBox").currentText!="ASSETS");
        type(":_options._group_XComboBox", "ASSETS");
    clickButton(":Financial Report Item.Save_QPushButton");
    
    waitForObject(":frame._layout_XTreeWidget");
    clickItem(":frame._layout_XTreeWidget", "ASSETS.Inventory Assets", 5, 5, 1, Qt.LeftButton);
    clickButton(":frame.Add Account_QPushButton");
    waitForObject(":_selection.Select Multiple Accounts by Segment_QGroupBox");
    if(!findObject(":_selection.Select Multiple Accounts by Segment_QGroupBox").checked)
        type(":_selection.Select Multiple Accounts by Segment_QGroupBox"," ");
    waitForObject(":_selection.Select Multiple Accounts by Segment_QGroupBox");
    if(findObject(":Select Multiple Accounts by Segment._type_XComboBox").currentText!= "Asset")
        type(":Select Multiple Accounts by Segment._type_XComboBox", "Asset");
    if(findObject(":Select Multiple Accounts by Segment._subType_XComboBox").currentText!="IN-Inventory");
        type(":Select Multiple Accounts by Segment._subType_XComboBox", "IN");
    clickButton(":Operation.Add to Group Total_QRadioButton_2");
    clickTab(":Financial Report Item.qt_tabwidget_tabbar_QTabBar", "Options");
    waitForObject(":_options.Show % of Group Total_QCheckBox");
    if(!findObject(":_options.Show % of Group Total_QCheckBox").checked)
        clickButton(":_options.Show % of Group Total_QCheckBox");
    if(findObject(":_options._group_XComboBox").currentText!="ASSETS");
        type(":_options._group_XComboBox", "ASSETS");
    clickButton(":Financial Report Item.Save_QPushButton");
    
    
    waitForObject(":frame._layout_XTreeWidget");
    clickItem(":frame._layout_XTreeWidget", "ASSETS.Fixed Assets", 5, 5, 1, Qt.LeftButton);
    clickButton(":frame.Add Account_QPushButton");
    waitForObject(":_selection.Select Multiple Accounts by Segment_QGroupBox");
    if(!findObject(":_selection.Select Multiple Accounts by Segment_QGroupBox").checked)
        type(":_selection.Select Multiple Accounts by Segment_QGroupBox"," ");
    waitForObject(":_selection.Select Multiple Accounts by Segment_QGroupBox");
    if(findObject(":Select Multiple Accounts by Segment._type_XComboBox").currentText!= "Asset")
        type(":Select Multiple Accounts by Segment._type_XComboBox", "Asset");
    if(findObject(":Select Multiple Accounts by Segment._subType_XComboBox").currentText!="FA-Fixed Assets");
        type(":Select Multiple Accounts by Segment._subType_XComboBox", "FA");
    clickButton(":Operation.Add to Group Total_QRadioButton_2");
    clickTab(":Financial Report Item.qt_tabwidget_tabbar_QTabBar", "Options");
    waitForObject(":_options.Show % of Group Total_QCheckBox");
    if(!findObject(":_options.Show % of Group Total_QCheckBox").checked)
        clickButton(":_options.Show % of Group Total_QCheckBox");
    if(findObject(":_options._group_XComboBox").currentText!="ASSETS");
        type(":_options._group_XComboBox", "ASSETS");
    clickButton(":Financial Report Item.Save_QPushButton");
    
    
    waitForObject(":frame._layout_XTreeWidget");
    clickItem(":frame._layout_XTreeWidget", "LIABILITIES AND OWNERS EQUITY.LIABILITIES.Current Liabilities", 5, 5, 1, Qt.LeftButton);
    clickButton(":frame.Add Account_QPushButton");
    waitForObject(":_selection.Select Multiple Accounts by Segment_QGroupBox");
    if(!findObject(":_selection.Select Multiple Accounts by Segment_QGroupBox").checked)
        type(":_selection.Select Multiple Accounts by Segment_QGroupBox"," ");
    waitForObject(":_selection.Select Multiple Accounts by Segment_QGroupBox");
    if(findObject(":Select Multiple Accounts by Segment._type_XComboBox").currentText!= "Liability")
        type(":Select Multiple Accounts by Segment._type_XComboBox", "Liability");
    if(findObject(":Select Multiple Accounts by Segment._subType_XComboBox").currentText!="AP-Accounts Payable");
        type(":Select Multiple Accounts by Segment._subType_XComboBox", "AP");
    clickButton(":Operation.Add to Group Total_QRadioButton_2");
    clickTab(":Financial Report Item.qt_tabwidget_tabbar_QTabBar", "Options");
    waitForObject(":_options.Show % of Group Total_QCheckBox");
    if(!findObject(":_options.Show % of Group Total_QCheckBox").checked)
        clickButton(":_options.Show % of Group Total_QCheckBox");
    if(findObject(":_options._group_XComboBox").currentText!="ASSETS");
        type(":_options._group_XComboBox", "ASSETS");
    clickButton(":Financial Report Item.Save_QPushButton");
    
    
    waitForObject(":frame._layout_XTreeWidget");
    clickItem(":frame._layout_XTreeWidget", "LIABILITIES AND OWNERS EQUITY.LIABILITIES.Current Liabilities", 5, 5, 1, Qt.LeftButton);
    clickButton(":frame.Add Account_QPushButton");
    waitForObject(":_selection.Select Multiple Accounts by Segment_QGroupBox");
    if(!findObject(":_selection.Select Multiple Accounts by Segment_QGroupBox").checked)
        type(":_selection.Select Multiple Accounts by Segment_QGroupBox"," ");
    waitForObject(":_selection.Select Multiple Accounts by Segment_QGroupBox");
    if(findObject(":Select Multiple Accounts by Segment._type_XComboBox").currentText!= "Liability")
        type(":Select Multiple Accounts by Segment._type_XComboBox", "Liability");
    if(findObject(":Select Multiple Accounts by Segment._subType_XComboBox").currentText!="CL-Current Liabilities");
        type(":Select Multiple Accounts by Segment._subType_XComboBox", "CL");
    clickButton(":Operation.Add to Group Total_QRadioButton_2");
    clickTab(":Financial Report Item.qt_tabwidget_tabbar_QTabBar", "Options");
    waitForObject(":_options.Show % of Group Total_QCheckBox");
    if(!findObject(":_options.Show % of Group Total_QCheckBox").checked)
        clickButton(":_options.Show % of Group Total_QCheckBox");
    if(findObject(":_options._group_XComboBox").currentText!="ASSETS");
        type(":_options._group_XComboBox", "ASSETS");
    clickButton(":Financial Report Item.Save_QPushButton");
    
    
    waitForObject(":frame._layout_XTreeWidget");
    clickItem(":frame._layout_XTreeWidget", "LIABILITIES AND OWNERS EQUITY.LIABILITIES.Long Term Liabilities", 5, 5, 1, Qt.LeftButton);
    clickButton(":frame.Add Account_QPushButton");
    waitForObject(":_selection.Select Multiple Accounts by Segment_QGroupBox");
    if(!findObject(":_selection.Select Multiple Accounts by Segment_QGroupBox").checked)
        type(":_selection.Select Multiple Accounts by Segment_QGroupBox"," ");
    waitForObject(":_selection.Select Multiple Accounts by Segment_QGroupBox");
    if(findObject(":Select Multiple Accounts by Segment._type_XComboBox").currentText!= "Liability")
        type(":Select Multiple Accounts by Segment._type_XComboBox", "Liability");
    if(findObject(":Select Multiple Accounts by Segment._subType_XComboBox").currentText!="LTL-Long Term Liability");
        type(":Select Multiple Accounts by Segment._subType_XComboBox", "LTL");
    clickButton(":Operation.Add to Group Total_QRadioButton_2");
    clickTab(":Financial Report Item.qt_tabwidget_tabbar_QTabBar", "Options");
    waitForObject(":_options.Show % of Group Total_QCheckBox");
    if(!findObject(":_options.Show % of Group Total_QCheckBox").checked)
        clickButton(":_options.Show % of Group Total_QCheckBox");
    if(findObject(":_options._group_XComboBox").currentText!="ASSETS");
        type(":_options._group_XComboBox", "ASSETS");
    clickButton(":Financial Report Item.Save_QPushButton");
    
    waitForObject(":frame._layout_XTreeWidget");
    clickItem(":frame._layout_XTreeWidget", "LIABILITIES AND OWNERS EQUITY.OWNERS EQUITY.Capital Stock", 5, 5, 1, Qt.LeftButton);
    clickButton(":frame.Add Account_QPushButton");
    waitForObject(":_selection.Select Multiple Accounts by Segment_QGroupBox");
    if(!findObject(":_selection.Select Multiple Accounts by Segment_QGroupBox").checked)
        type(":_selection.Select Multiple Accounts by Segment_QGroupBox"," ");
    waitForObject(":_selection.Select Multiple Accounts by Segment_QGroupBox");
    if(findObject(":Select Multiple Accounts by Segment._type_XComboBox").currentText!= "Equity")
        type(":Select Multiple Accounts by Segment._type_XComboBox", "Equity");
    if(findObject(":Select Multiple Accounts by Segment._subType_XComboBox").currentText!="EDC-Do Not Close");
        type(":Select Multiple Accounts by Segment._subType_XComboBox", "EDC");
    clickButton(":Operation.Add to Group Total_QRadioButton_2");
    clickTab(":Financial Report Item.qt_tabwidget_tabbar_QTabBar", "Options");
    waitForObject(":_options.Show % of Group Total_QCheckBox");
    if(!findObject(":_options.Show % of Group Total_QCheckBox").checked)
        clickButton(":_options.Show % of Group Total_QCheckBox");
    if(findObject(":_options._group_XComboBox").currentText!="ASSETS");
        type(":_options._group_XComboBox", "ASSETS");
    clickButton(":Financial Report Item.Save_QPushButton");
    
    
    waitForObject(":frame._layout_XTreeWidget");
    clickItem(":frame._layout_XTreeWidget", "LIABILITIES AND OWNERS EQUITY.OWNERS EQUITY.Retained Earnings", 5, 5, 1, Qt.LeftButton);
    clickButton(":frame.Add Account_QPushButton");
    waitForObject(":_selection.Select Multiple Accounts by Segment_QGroupBox");
    if(!findObject(":_selection.Select Multiple Accounts by Segment_QGroupBox").checked)
        type(":_selection.Select Multiple Accounts by Segment_QGroupBox"," ");
    waitForObject(":_selection.Select Multiple Accounts by Segment_QGroupBox");
    if(findObject(":Select Multiple Accounts by Segment._type_XComboBox").currentText!= "Equity")
        type(":Select Multiple Accounts by Segment._type_XComboBox", "Equity");
    if(findObject(":Select Multiple Accounts by Segment._subType_XComboBox").currentText!="EC-Equity close");
        type(":Select Multiple Accounts by Segment._subType_XComboBox", "EC");
    clickButton(":Operation.Add to Group Total_QRadioButton_2");
    clickTab(":Financial Report Item.qt_tabwidget_tabbar_QTabBar", "Options");
    waitForObject(":_options.Show % of Group Total_QCheckBox");
    if(!findObject(":_options.Show % of Group Total_QCheckBox").checked)
        clickButton(":_options.Show % of Group Total_QCheckBox");
    if(findObject(":_options._group_XComboBox").currentText!="ASSETS");
        type(":_options._group_XComboBox", "ASSETS");
    clickButton(":Financial Report Item.Save_QPushButton");
    
    
    waitForObject(":frame._layout_XTreeWidget");
    clickItem(":frame._layout_XTreeWidget", "LIABILITIES AND OWNERS EQUITY.OWNERS EQUITY.Year To Date Net Income", 5, 5, 1, Qt.LeftButton);
    clickButton(":frame.Add Account_QPushButton");
    waitForObject(":_selection.Select Multiple Accounts by Segment_QGroupBox");
    if(!findObject(":_selection.Select Multiple Accounts by Segment_QGroupBox").checked)
        type(":_selection.Select Multiple Accounts by Segment_QGroupBox"," ");
    waitForObject(":_selection.Select Multiple Accounts by Segment_QGroupBox");
    if(findObject(":Select Multiple Accounts by Segment._type_XComboBox").currentText!= "Revenue")
        type(":Select Multiple Accounts by Segment._type_XComboBox", "Revenue");
    if(findObject(":Select Multiple Accounts by Segment._subType_XComboBox").currentText!="All");
        type(":Select Multiple Accounts by Segment._subType_XComboBox", "All");
    clickButton(":Operation.Add to Group Total_QRadioButton_2");
    clickTab(":Financial Report Item.qt_tabwidget_tabbar_QTabBar", "Options");
    waitForObject(":_options.Show % of Group Total_QCheckBox");
    if(!findObject(":_options.Show % of Group Total_QCheckBox").checked)
        clickButton(":_options.Show % of Group Total_QCheckBox");
    if(findObject(":_options._group_XComboBox").currentText!="ASSETS");
        type(":_options._group_XComboBox", "ASSETS");
    clickButton(":Financial Report Item.Save_QPushButton");
    
     
    waitForObject(":frame._layout_XTreeWidget");
    clickItem(":frame._layout_XTreeWidget", "LIABILITIES AND OWNERS EQUITY.OWNERS EQUITY.Year To Date Net Income", 5, 5, 1, Qt.LeftButton);
    clickButton(":frame.Add Account_QPushButton");
    waitForObject(":_selection.Select Multiple Accounts by Segment_QGroupBox");
    if(!findObject(":_selection.Select Multiple Accounts by Segment_QGroupBox").checked)
        type(":_selection.Select Multiple Accounts by Segment_QGroupBox"," ");
    waitForObject(":_selection.Select Multiple Accounts by Segment_QGroupBox");
    if(findObject(":Select Multiple Accounts by Segment._type_XComboBox").currentText!= "Expense")
        type(":Select Multiple Accounts by Segment._type_XComboBox", "Expense");
    if(findObject(":Select Multiple Accounts by Segment._subType_XComboBox").currentText!="All");
        type(":Select Multiple Accounts by Segment._subType_XComboBox", "All");
    clickButton(":Operation.Subtract from Group Total_QRadioButton_2");
    clickTab(":Financial Report Item.qt_tabwidget_tabbar_QTabBar", "Options");
    waitForObject(":_options.Show % of Group Total_QCheckBox");
    if(!findObject(":_options.Show % of Group Total_QCheckBox").checked)
        clickButton(":_options.Show % of Group Total_QCheckBox");
    if(findObject(":_options._group_XComboBox").currentText!="ASSETS");
        type(":_options._group_XComboBox", "ASSETS");
    clickButton(":Financial Report Item.Save_QPushButton");
    test.log("Official Balance Sheet created");

    
    //-----------Create: Adhoc Income Statement--------------
    waitForObject(":List Financial Reports.New_QPushButton");
    clickButton(":List Financial Reports.New_QPushButton");
    waitForObject(":_name_XLineEdit_21");
    type(":_name_XLineEdit_21", "INCOME_STATEMENT");
    type(":_descrip_XLineEdit", "Income Statement");
    clickButton(":Report Type.Ad Hoc_QRadioButton");
    clickTab(":Financial Report.qt_tabwidget_tabbar_QTabBar", "Options");
    waitForObject(":_options.Show Grand Total_QGroupBox");
    if(!findObject(":_options.Show Grand Total_QGroupBox").checked)
        type(":_options.Show Grand Total_QGroupBox"," ");
    if(findObject(":Show Grand Total.Show Beginning_QCheckBox").checked)
        clickButton(":Show Grand Total.Show Ending_QCheckBox");
    if(!findObject(":Show Grand Total.Show Ending_QCheckBox").checked)
        clickButton(":Show Grand Total.Show Ending_QCheckBox");
    if(findObject(":Show Grand Total.Show Debits/Credits_QCheckBox").checked)
        clickButton(":Show Grand Total.Show Debits/Credits_QCheckBox");
    if(findObject(":Show Grand Total.Show Budget_QCheckBox").checked)
        clickButton(":Show Grand Total.Show Budget_QCheckBox");
    if(!findObject(":Show Grand Total.Show Difference_QCheckBox").checked)
        clickButton(":Show Grand Total.Show Difference_QCheckBox");
    if(!findObject(":Show Grand Total.Show Custom_QCheckBox").checked)
        clickButton(":Show Grand Total.Show Custom_QCheckBox");
    if(!findObject(":Alternate Labels.Alternate Ending Balance:_QCheckBox").checked)
        clickButton(":Alternate Labels.Alternate Ending Balance:_QCheckBox");
    type(":Alternate Labels._altEndText_QLineEdit","Year-To-Date");
    if(!findObject(":Alternate Labels.Alternate Difference:_QCheckBox").checked)
        clickButton(":Alternate Labels.Alternate Difference:_QCheckBox");
    type(":Alternate Labels._altDiffText_QLineEdit", "Current Period");
    if(!findObject(":Alternate Labels.Alternate Grand Total:_QCheckBox").checked)
        clickButton(":Alternate Labels.Alternate Grand Total:_QCheckBox");
    type(":Alternate Labels._altTotalText_QLineEdit", "Net Income");
    type(":_customText_QLineEdit", "Income Statement");
    clickButton(":Financial Report.Save_QPushButton");
    
    
    waitForObject(":List Financial Reports.Close_QPushButton");
    clickButton(":List Financial Reports.Close_QPushButton");
}