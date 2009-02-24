function executeChapter9(appVersion)
{
    source(findFile("scripts","functions.js"));
  
    //---------Define: Incident Categories----------------
    waitForObjectItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "CRM");
    activateItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "CRM");
    waitForObjectItem(":xTuple ERP: OpenMFG Edition.CRM_QMenu", "Master Information");
    activateItem(":xTuple ERP: OpenMFG Edition.CRM_QMenu", "Master Information");
    waitForObjectItem(":xTuple ERP: OpenMFG Edition.Master Information_QMenu_2", "Incident");
    activateItem(":xTuple ERP: OpenMFG Edition.Master Information_QMenu_2", "Incident");
    waitForObjectItem(":xTuple ERP: OpenMFG Edition.Incident_QMenu", "Categories...");
    activateItem(":xTuple ERP: OpenMFG Edition.Incident_QMenu", "Categories...");
    
    waitForObject(":List Incident Categories.New_QPushButton");
    clickButton(":List Incident Categories.New_QPushButton");
    waitForObject(":_name_XLineEdit_14");
    type(":_name_XLineEdit_14", "Product");
    type(":Incident Category._order_QSpinBox", "<Ctrl+A>");
    type(":Incident Category._order_QSpinBox", "<Del>");
    type(":Incident Category._order_QSpinBox", "10");
    type(":Incident Category._descrip_QTextEdit", "Product related incidents");
    waitForObject(":Incident Category.Save_QPushButton");
    clickButton(":Incident Category.Save_QPushButton");
    waitForObject(":List Incident Categories._incidentCategories_XTreeWidget");
    if(clickItem(":List Incident Categories._incidentCategories_XTreeWidget", "Product", 5, 5, 1, Qt.LeftButton))
        test.pass("Incident Categories created for: Product");
    
   
    waitForObject(":List Incident Categories.New_QPushButton");
    clickButton(":List Incident Categories.New_QPushButton");
    waitForObject(":_name_XLineEdit_14");
    type(":_name_XLineEdit_14", "Customer");
    type(":Incident Category._order_QSpinBox", "<Ctrl+A>");
    type(":Incident Category._order_QSpinBox", "<Del>");
    type(":Incident Category._order_QSpinBox", "20");
    type(":Incident Category._descrip_QTextEdit", "Customer related incidents");
    waitForObject(":Incident Category.Save_QPushButton");
    clickButton(":Incident Category.Save_QPushButton");
    waitForObject(":List Incident Categories._incidentCategories_XTreeWidget");
    if(clickItem(":List Incident Categories._incidentCategories_XTreeWidget", "Customer", 5, 5, 1, Qt.LeftButton))
        test.pass("Incident Categories created for: Customer");
    
    
    waitForObject(":List Incident Categories.New_QPushButton");
    clickButton(":List Incident Categories.New_QPushButton");
    waitForObject(":_name_XLineEdit_14");
    type(":_name_XLineEdit_14", "Vendor");
    type(":Incident Category._order_QSpinBox", "<Ctrl+A>");
    type(":Incident Category._order_QSpinBox", "<Del>");
    type(":Incident Category._order_QSpinBox", "30");
    type(":Incident Category._descrip_QTextEdit", "Vendor related incidents");
    waitForObject(":Incident Category.Save_QPushButton");
    clickButton(":Incident Category.Save_QPushButton");
    waitForObject(":List Incident Categories._incidentCategories_XTreeWidget");
    if(clickItem(":List Incident Categories._incidentCategories_XTreeWidget", "Vendor", 5, 5, 1, Qt.LeftButton))
        test.pass("Incident Categories created for: Vendor");
  
    waitForObject(":List Incident Categories.Close_QPushButton");
    clickButton(":List Incident Categories.Close_QPushButton");

    //--------------Create: Incident Severities----------------
    waitForObjectItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "CRM");
    activateItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "CRM");
    waitForObjectItem(":xTuple ERP: OpenMFG Edition.CRM_QMenu", "Master Information");
    activateItem(":xTuple ERP: OpenMFG Edition.CRM_QMenu", "Master Information");
    waitForObjectItem(":xTuple ERP: OpenMFG Edition.Master Information_QMenu_2", "Incident");
    activateItem(":xTuple ERP: OpenMFG Edition.Master Information_QMenu_2", "Incident");
    waitForObjectItem(":xTuple ERP: OpenMFG Edition.Incident_QMenu", "Severities...");
    activateItem(":xTuple ERP: OpenMFG Edition.Incident_QMenu", "Severities...");
    waitForObject(":List Incident Severities.New_QPushButton");
    clickButton(":List Incident Severities.New_QPushButton");
    waitForObject(":_name_XLineEdit_15");
    type(":_name_XLineEdit_15", "Crash");
    type(":Incident Severity._order_QSpinBox", "<Ctrl+A>");
    type(":Incident Severity._order_QSpinBox", "<Del>");
    type(":Incident Severity._order_QSpinBox", "5");
    type(":Incident Severity._descrip_QTextEdit", "System Down");
    clickButton(":Incident Severity.Save_QPushButton");
    waitForObject(":List Incident Severities._incidentSeverities_XTreeWidget");
    if(!clickItem(":List Incident Severities._incidentSeverities_XTreeWidget", "Crash", 5, 5, 1, Qt.LeftButton))
        test.pass("Incident Severity created : Crash");
    
    waitForObject(":List Incident Severities.Close_QPushButton");
    clickButton(":List Incident Severities.Close_QPushButton");

    
    
    //--------------Create Incident Resolutions----------------
    waitForObjectItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "CRM");
    activateItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "CRM");
    waitForObjectItem(":xTuple ERP: OpenMFG Edition.CRM_QMenu", "Master Information");
    activateItem(":xTuple ERP: OpenMFG Edition.CRM_QMenu", "Master Information");
    waitForObjectItem(":xTuple ERP: OpenMFG Edition.Master Information_QMenu_2", "Incident");
    activateItem(":xTuple ERP: OpenMFG Edition.Master Information_QMenu_2", "Incident");
    waitForObjectItem(":xTuple ERP: OpenMFG Edition.Incident_QMenu", "Resolutions...");
    activateItem(":xTuple ERP: OpenMFG Edition.Incident_QMenu", "Resolutions...");
    
    waitForObject(":List Incident Resolutions.New_QPushButton");
    clickButton(":List Incident Resolutions.New_QPushButton");
    waitForObject(":_name_XLineEdit_16");
    type(":_name_XLineEdit_16", "Replace");
    type(":Incident Resolution._order_QSpinBox", "<Ctrl+A>");
    type(":Incident Resolution._order_QSpinBox", "<Del>");
    type(":Incident Resolution._order_QSpinBox", "40");
    type(":Incident Resolution._descrip_QTextEdit", "Replace Unit");
    waitForObject(":Incident Resolution.Save_QPushButton");
    clickButton(":Incident Resolution.Save_QPushButton");
    waitForObject(":List Incident Resolutions._incidentResolutions_XTreeWidget");
    if(!clickItem(":List Incident Resolutions._incidentResolutions_XTreeWidget", "Replace", 5, 5, 1, Qt.LeftButton))
        test.pass("Incident Resolution created : Replace");
    
    waitForObject(":List Incident Resolutions.Close_QPushButton");
    clickButton(":List Incident Resolutions.Close_QPushButton");
    
  
  
    //------------CRM Oppurtunity Sources---------
    waitForObjectItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "CRM");
    activateItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "CRM");
    waitForObjectItem(":xTuple ERP: OpenMFG Edition.CRM_QMenu", "Master Information");
    activateItem(":xTuple ERP: OpenMFG Edition.CRM_QMenu", "Master Information");
    waitForObjectItem(":xTuple ERP: OpenMFG Edition.Master Information_QMenu_2", "Opportunity");
    activateItem(":xTuple ERP: OpenMFG Edition.Master Information_QMenu_2", "Opportunity");
    waitForObjectItem(":xTuple ERP: *.Opportunity_QMenu", "Sources...");
    activateItem(":xTuple ERP: *.Opportunity_QMenu", "Sources...");
   
    waitForObject(":List Opportunity Sources.New_QPushButton_2");
    clickButton(":List Opportunity Sources.New_QPushButton_2");
    waitForObject(":_name_XLineEdit_27");
    type(":_name_XLineEdit_27", "ADVERT");
    type(":_description_XLineEdit_35", "Advertising");
    clickButton(":Opportunity Source.Save_QPushButton");
 
    waitForObject(":List Opportunity Sources.New_QPushButton_2");
    clickButton(":List Opportunity Sources.New_QPushButton_2");
    waitForObject(":_name_XLineEdit_27");
    type(":_name_XLineEdit_27", "TRADE");
    type(":_description_XLineEdit_35", "Trade Show");
    clickButton(":Opportunity Source.Save_QPushButton");
    
    waitForObject(":List Opportunity Sources.Close_QPushButton_2");
    clickButton(":List Opportunity Sources.Close_QPushButton_2");
    test.log("CRM oppurtunity sources: ADVERT created");
    test.log("CRM oppurtunity sources: TRADE created");
  
  
    //------------CRM Oppurtunity Stages-------------
    waitForObjectItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "CRM");
    activateItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "CRM");
    waitForObjectItem(":xTuple ERP: OpenMFG Edition.CRM_QMenu", "Master Information");
    activateItem(":xTuple ERP: OpenMFG Edition.CRM_QMenu", "Master Information");
    waitForObjectItem(":xTuple ERP: OpenMFG Edition.Master Information_QMenu_2", "Opportunity");
    activateItem(":xTuple ERP: OpenMFG Edition.Master Information_QMenu_2", "Opportunity");
    waitForObjectItem(":xTuple ERP: *.Opportunity_QMenu", "Stages...");
    activateItem(":xTuple ERP: *.Opportunity_QMenu", "Stages...");
   
    waitForObject(":List Opportunity Stages.New_QPushButton_2");
    clickButton(":List Opportunity Stages.New_QPushButton_2");
    waitForObject(":_name_XLineEdit_28");
    type(":_name_XLineEdit_28", "RFQ");
    type(":_description_XLineEdit_36", "Request For Quote");
    clickButton(":Opportunity Stage.Save_QPushButton");
    
    waitForObject(":List Opportunity Stages.New_QPushButton_2");
    clickButton(":List Opportunity Stages.New_QPushButton_2");
    waitForObject(":_name_XLineEdit_28");
    type(":_name_XLineEdit_28", "ORDER");
    type(":_description_XLineEdit_36", "Sales Order");
    clickButton(":Opportunity Stage.Save_QPushButton");
    
    waitForObject(":List Opportunity Stages.New_QPushButton_2");
    clickButton(":List Opportunity Stages.New_QPushButton_2");
    waitForObject(":_name_XLineEdit_28");
    type(":_name_XLineEdit_28", "LOST");
    type(":_description_XLineEdit_36", "Lost Order");
    clickButton(":Opportunity Stage.Save_QPushButton");
        
    waitForObject(":List Opportunity Stages.Close_QPushButton_2");
    clickButton(":List Opportunity Stages.Close_QPushButton_2");
    test.log("CRM oppurtunity stages created");
    
    
    
    //---------------CRM Oppurtunity Types------------
    waitForObjectItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "CRM");
    activateItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "CRM");
    waitForObjectItem(":xTuple ERP: OpenMFG Edition.CRM_QMenu", "Master Information");
    activateItem(":xTuple ERP: OpenMFG Edition.CRM_QMenu", "Master Information");
    waitForObjectItem(":xTuple ERP: OpenMFG Edition.Master Information_QMenu_2", "Opportunity");
    activateItem(":xTuple ERP: OpenMFG Edition.Master Information_QMenu_2", "Opportunity");
    waitForObjectItem(":xTuple ERP: *.Opportunity_QMenu", "Types...");
    activateItem(":xTuple ERP: *.Opportunity_QMenu", "Types...");
   
    waitForObject(":List Opportunity Types.New_QPushButton_2");
    clickButton(":List Opportunity Types.New_QPushButton_2");
    waitForObject(":_name_XLineEdit_29");
    type(":_name_XLineEdit_29", "PRIVATE");
    type(":_description_XLineEdit_37", "Private Label Product");
    clickButton(":Opportunity Type.Save_QPushButton");
    
    waitForObject(":List Opportunity Types.New_QPushButton_2");
    clickButton(":List Opportunity Types.New_QPushButton_2");
    waitForObject(":_name_XLineEdit_29");
    type(":_name_XLineEdit_29", "PRICING");
    type(":_description_XLineEdit_37", "Pricing For Recurring Orders");
    clickButton(":Opportunity Type.Save_QPushButton");

    waitForObject(":List Opportunity Types.New_QPushButton_2");
    clickButton(":List Opportunity Types.New_QPushButton_2");
    waitForObject(":_name_XLineEdit_29");
    type(":_name_XLineEdit_29", "ONETIME");
    type(":_description_XLineEdit_37", "One Time Quote");
    clickButton(":Opportunity Type.Save_QPushButton");
   
    waitForObject(":List Opportunity Types.Close_QPushButton_2");
    clickButton(":List Opportunity Types.Close_QPushButton_2");
    test.log("CRM Oppurtunity Types created");
    
  
  
    //--------------CRM Priorities-----------
    waitForObjectItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "CRM");
    activateItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "CRM");
    waitForObjectItem(":xTuple ERP: OpenMFG Edition.CRM_QMenu", "Master Information");
    activateItem(":xTuple ERP: OpenMFG Edition.CRM_QMenu", "Master Information");
    waitForObjectItem(":xTuple ERP: OpenMFG Edition.Master Information_QMenu_2", "Priorities...");
    activateItem(":xTuple ERP: OpenMFG Edition.Master Information_QMenu_2", "Priorities...");
    
    waitForObject(":List Priorities.New_QPushButton_2");
    clickButton(":List Priorities.New_QPushButton_2");
    waitForObject(":_name_XLineEdit_30");
    type(":_name_XLineEdit_30", "None");
    type(":Priority.qt_spinbox_lineedit_QLineEdit", "60");
    type(":Priority._descrip_QTextEdit", "Priority not set.");
    clickButton(":Priority.Save_QPushButton");
    waitForObject(":List Priorities.Close_QPushButton_2");
    clickButton(":List Priorities.Close_QPushButton_2");
    test.log("CRM Priorities created");
    
    
    
    //-------------CRM Characteristics-----------
    waitForObjectItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "CRM");
    activateItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "CRM");
    waitForObjectItem(":xTuple ERP: OpenMFG Edition.CRM_QMenu", "Master Information");
    activateItem(":xTuple ERP: OpenMFG Edition.CRM_QMenu", "Master Information");
    waitForObjectItem(":xTuple ERP: OpenMFG Edition.Master Information_QMenu_2", "Characteristics...");
    activateItem(":xTuple ERP: OpenMFG Edition.Master Information_QMenu_2", "Characteristics...");
    
    waitForObject(":List Characteristics.New_QPushButton_2");
    clickButton(":List Characteristics.New_QPushButton_2");
    waitForObject(":May be used for:.Opportunity Characteristics_QCheckBox_2");
    type(":_name_XLineEdit_6", "RFP#");
    clickButton(":May be used for:.Opportunity Characteristics_QCheckBox_2");
    type(":_description_QTextEdit_4", "Request For Quote #");
    waitForObject(":Characteristic.Save_QPushButton");
    clickButton(":Characteristic.Save_QPushButton");
    
    waitForObject(":List Characteristics.New_QPushButton_2");
    clickButton(":List Characteristics.New_QPushButton_2");
    waitForObject(":May be used for:.Opportunity Characteristics_QCheckBox_2");
    type(":_name_XLineEdit_6", "START");
    clickButton(":May be used for:.Employee Characteristics_QCheckBox_2");
    type(":_description_QTextEdit_4", "Employee Start Date");
    waitForObject(":Characteristic.Save_QPushButton");
    clickButton(":Characteristic.Save_QPushButton");
    
    waitForObject(":List Characteristics.Close_QPushButton_2");
    clickButton(":List Characteristics.Close_QPushButton_2");
    test.log("CRM Characteristics created");
    
  
  
  
    
    
}