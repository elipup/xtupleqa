function executeChapter2(appVersion)
{
   source(findFile("scripts","functions.js"));
 
     //-----------Chart Of Accounts-------------------------------
     waitForObjectItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "Accounting");
     activateItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "Accounting");
     waitForObjectItem(":xTuple ERP: OpenMFG Edition.Accounting_QMenu", "Account");
     activateItem(":xTuple ERP: OpenMFG Edition.Accounting_QMenu", "Account");
     waitForObjectItem(":xTuple ERP: OpenMFG Edition.Account_QMenu", "Chart of Accounts...");
     activateItem(":xTuple ERP: OpenMFG Edition.Account_QMenu", "Chart of Accounts...");

     COA("01","01","1250","01","Warehouse 1 Asset","Asset","IN");
     if(!clickItem(":_account_XTreeWidget_2", "Warehouse 1 Asset", 5,5, 1, Qt.LeftButton))
        test.pass("COA created: Warehouse 1 Asset");
  
     COA("01","01","1252","01","Intransit Asset","Asset","IN");
     if(!clickItem(":_account_XTreeWidget_2", "Intransit Asset", 5,5, 1, Qt.LeftButton))
        test.pass("COA created: Intransit Asset");
       
     COA("01","01","1254","01","Warehouse 2 Asset","Asset","IN");
     if(!clickItem(":_account_XTreeWidget_2", "Warehouse 2 Asset", 5,5, 1, Qt.LeftButton))
        test.pass("COA created: Warehouse 2 Asset");
     
     COA("01","01","1210","01","WIP Asset","Asset","IN");
     if(!clickItem(":_account_XTreeWidget_2", "WIP Asset", 5,5, 1, Qt.LeftButton))
        test.pass("COA created: WIP Asset");

     COA("01","01","1620","01","Inventory Cost Variance","Asset","IN");
     if(!clickItem(":_account_XTreeWidget_2", "Inventory Cost Variance", 5,5, 1, Qt.LeftButton))
        test.pass("COA created: Inventory Cost Variance");
     
     COA("01","01","1470","01","Material Usage Variance","Asset","IN");
     if(!clickItem(":_account_XTreeWidget_2", "Material Usage Variance", 5,5, 1, Qt.LeftButton))
        test.pass("COA created: Material Usage Variance");
 
     COA("01","01","1930","01","Transform Clearing","Asset","IN");  
     if(!clickItem(":_account_XTreeWidget_2", "Transform Clearing", 5,5, 1, Qt.LeftButton))
        test.pass("COA created: Transform Clearing");

     COA("01","01","1460","01","Purchase Price Variance","Asset","IN");
     if(!clickItem(":_account_XTreeWidget_2", "Purchase Price Variance", 5,5, 1, Qt.LeftButton))
        test.pass("COA created: Purchase Price Variance");
     
     COA("01","01","8910","01","Inventory Adjustment","Expense","EXP");   
     if(!clickItem(":_account_XTreeWidget_2", "Inventory Adjustment", 5,5, 1, Qt.LeftButton))
        test.pass("COA created: Inventory Adjustment");
     
     COA("01","01","8920","01","Inventory Scrap","Expense","EXP"); 
     if(!clickItem(":_account_XTreeWidget_2", "Inventory Scrap", 5,5, 1, Qt.LeftButton))
        test.pass("COA created: Inventory Scrap");
     
     COA("01","01","8930","01","OpenMFG Scrap","Expense","EXP");  
     if(!clickItem(":_account_XTreeWidget_2", "OpenMFG Scrap", 5,5, 1, Qt.LeftButton))
        test.pass("COA created: OpenMFG Scrap");
     
     COA("01","01","8980","01","Purchase Expense Variance","Expense","EXP");
     if(!clickItem(":_account_XTreeWidget_2", "Purchase Expense Variance", 5,5, 1, Qt.LeftButton))
        test.pass("COA created: Purchase Expense Variance");
     
     COA("01","01","2320","01","Labor and Overhead Costs Accrued","Liability","CL");
     if(!clickItem(":_account_XTreeWidget_2", "Labor and Overhead Costs Accrued", 5,5, 1, Qt.LeftButton))
        test.pass("COA created: Labor and Overhead Costs Accrued");

     COA("01","01","2490","01","P/O Liability Clearing","Liability","CL");
     if(!clickItem(":_account_XTreeWidget_2", "P/O Liability Clearing", 5,5, 1, Qt.LeftButton))
        test.pass("COA created: P/O Liability Clearing");
     
     COA("01","01","2510","01","Sales Tax Liability","Liability","CL");   
     if(!clickItem(":_account_XTreeWidget_2", "Sales Tax Liability", 5,5, 1, Qt.LeftButton))
        test.pass("COA created: Sales Tax Liability");
     
     COA("01","01","1260","01","Shipping Asset","Asset","IN");
     if(!clickItem(":_account_XTreeWidget_2", "Shipping Asset", 5,5, 1, Qt.LeftButton))
        test.pass("COA created: Shipping Asset");
     
     COA("01","01","6000","01","Office Supplies","Expense","EXP");  
     if(!clickItem(":_account_XTreeWidget_2", "Office Supplies", 5,5, 1, Qt.LeftButton))
        test.pass("COA created: Office Supplies");
     
     COA("01","01","6550","01","P/O Line Freight Expense","Expense","EXP");
     if(!clickItem(":_account_XTreeWidget_2", "P/O Line Freight Expense", 5,5, 1, Qt.LeftButton))
        test.pass("COA created: P/O Line Freight Expense");
     
     COA("01","01","2480","01","Transfer Order Liability Clearing","Liability","CL");	  
     if(!clickItem(":_account_XTreeWidget_2", "Transfer Order Liability Clearing", 5,5, 1, Qt.LeftButton))
        test.pass("COA created: Transfer Order Liability Clearing");
     
     COA("01","01","6050","01","State Sales Tax Expense","Expense","EXP");  
     if(!clickItem(":_account_XTreeWidget_2", "State Sales Tax Expense", 5,5, 1, Qt.LeftButton))
        test.pass("COA created: State Sales Tax Expense");
     
     
     COA("01","01","6060","01","Shipping Charge Expense","Expense","EXP");  
     if(!clickItem(":_account_XTreeWidget_2", "Shipping Charge Expense", 5,5, 1, Qt.LeftButton))
        test.pass("COA created: Shipping Charge Expense");
          
    waitForObject(":Chart of Accounts.Close_QPushButton_2");
    clickButton(":Chart of Accounts.Close_QPushButton_2");
 
 
 
    //---------------Create Inventory - new Cost Catergory------------
    waitForObjectItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "Inventory");
    activateItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "Inventory");
    waitForObjectItem(":xTuple ERP: OpenMFG Edition.Inventory_QMenu", "Master Information");
    activateItem(":xTuple ERP: OpenMFG Edition.Inventory_QMenu", "Master Information");
    waitForObjectItem(":xTuple ERP: OpenMFG Edition.Master Information_QMenu_3", "Cost Categories...");
    activateItem(":xTuple ERP: OpenMFG Edition.Master Information_QMenu_3", "Cost Categories...");
    waitForObject(":List Cost Categories.New_QPushButton_2");
    clickButton(":List Cost Categories.New_QPushButton_2");
    waitForObject(":Cost Category._category_XLineEdit");
    type(":Cost Category._category_XLineEdit", "CCWH1");
    type(":Cost Category._description_XLineEdit", "Warehouse 1");
    type(":Cost Category._main_XLineEdit", "01-01-1250-01");
    type(":Cost Category._main_XLineEdit_2", "01-01-1210-01");
    if(appVersion=="manufacturing"||appVersion=="standard")
    type(":Cost Category._main_XLineEdit_3", "01-01-1620-01");
    type(":Cost Category._main_XLineEdit_4", "01-01-1930-01");
    type(":Cost Category._main_XLineEdit_5", "01-01-1460-01");
    type(":Cost Category._main_XLineEdit_6", "01-01-8910-01");
    type(":Cost Category._main_XLineEdit_7", "01-01-8920-01");
    type(":Cost Category._main_XLineEdit_8", "01-01-8930-01");
    type(":Cost Category._main_XLineEdit_9", "01-01-2320-01");
    type(":Cost Category._main_XLineEdit_10", "01-01-2490-01");
    type(":Cost Category._main_XLineEdit_11", "01-01-1260-01");
    if(appVersion=="manufacturing"||appVersion=="standard")
    type(":Cost Category._main_XLineEdit_12", "01-01-6550-01");
    if(appVersion=="manufacturing")
    type(":Cost Category._main_XLineEdit_13", "01-01-2480-01");
    waitForObject(":Cost Category.Save_QPushButton");
    clickButton(":Cost Category.Save_QPushButton");
    waitForObject(":List Cost Categories._costcat_XTreeWidget_2");
    if(!clickItem(":List Cost Categories._costcat_XTreeWidget_2", "CCWH1", 5, 5, 1, Qt.LeftButton))
        test.pass("Cost Category: CCWH1 created");
    waitForObject(":List Cost Categories.Close_QPushButton_2");
    clickButton(":List Cost Categories.Close_QPushButton_2");
    
     //----------Inventory-Cost Categories: copy and create for INTRAN------------------
    waitForObjectItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "Inventory");
    activateItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "Inventory");
    waitForObjectItem(":xTuple ERP: OpenMFG Edition.Inventory_QMenu", "Master Information");
    activateItem(":xTuple ERP: OpenMFG Edition.Inventory_QMenu", "Master Information");
    waitForObjectItem(":xTuple ERP: OpenMFG Edition.Master Information_QMenu_3", "Cost Categories...");
    activateItem(":xTuple ERP: OpenMFG Edition.Master Information_QMenu_3", "Cost Categories...");
    waitForObject(":List Cost Categories._costcat_XTreeWidget_2");
    clickItem(":List Cost Categories._costcat_XTreeWidget_2", "CCWH1",0,0,1,Qt.LeftButton);
    waitForObject(":List Cost Categories.Copy_QPushButton_2");
    clickButton(":List Cost Categories.Copy_QPushButton_2");
    waitForObject(":Cost Category._category_XLineEdit");
    type(":Cost Category._category_XLineEdit", "<Ctrl+A>");
    type(":Cost Category._category_XLineEdit", "<Del>");
    type(":Cost Category._category_XLineEdit", "CCINTRAN");
    type(":Cost Category._description_XLineEdit", "<Del");
    type(":Cost Category._description_XLineEdit", "Intransit Warehouse");
    type(":Cost Category._main_XLineEdit", "<Ctrl+A>");
    type(":Cost Category._main_XLineEdit", "<Del>");
    type(":Cost Category._main_XLineEdit", "01-01-1252-01");
    type(":Cost Category._main_XLineEdit", "<Tab>");
    waitForObject(":Cost Category.Save_QPushButton");
    clickButton(":Cost Category.Save_QPushButton");
    waitForObject(":List Cost Categories.Close_QPushButton_2");
    if(!clickItem(":List Cost Categories._costcat_XTreeWidget_2", "CCINTRAN", 5, 5, 1, Qt.LeftButton))
        test.pass("Cost Category: CCINTRAN created");
    clickButton(":List Cost Categories.Close_QPushButton_2");
    test.log("Inventory Cost Category CCINTRAN created");
    
    
    //----------Inventory-Cost Categories: copy and create for WH2------------------
    waitForObjectItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "Inventory");
    activateItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "Inventory");
    waitForObjectItem(":xTuple ERP: OpenMFG Edition.Inventory_QMenu", "Master Information");
    activateItem(":xTuple ERP: OpenMFG Edition.Inventory_QMenu", "Master Information");
    waitForObjectItem(":xTuple ERP: OpenMFG Edition.Master Information_QMenu_3", "Cost Categories...");
    activateItem(":xTuple ERP: OpenMFG Edition.Master Information_QMenu_3", "Cost Categories...");
    waitForObject(":List Cost Categories._costcat_XTreeWidget_2");
    clickItem(":List Cost Categories._costcat_XTreeWidget_2", "CCWH1",0,0,1,Qt.LeftButton);
    waitForObject(":List Cost Categories.Copy_QPushButton_2");
    clickButton(":List Cost Categories.Copy_QPushButton_2");
    waitForObject(":Cost Category._category_XLineEdit");
    type(":Cost Category._category_XLineEdit", "<Ctrl+A>");
    type(":Cost Category._category_XLineEdit", "<Del>");
    type(":Cost Category._category_XLineEdit", "CCWH2");
    type(":Cost Category._description_XLineEdit", "<Del>");
    type(":Cost Category._description_XLineEdit", "Warehouse 2");
    type(":Cost Category._main_XLineEdit", "<Del>");
    type(":Cost Category._main_XLineEdit", "01-01-1254-01");
    type(":Cost Category._main_XLineEdit", "<Tab>");
    waitForObject(":Cost Category.Save_QPushButton");
    clickButton(":Cost Category.Save_QPushButton");
    waitForObject(":List Cost Categories._costcat_XTreeWidget_2");
    if(!clickItem(":List Cost Categories._costcat_XTreeWidget_2", "CCWH2", 26, 9, 1, Qt.LeftButton))
        test.pass("Cost Category: CCWH2 created");
    clickButton(":List Cost Categories.Close_QPushButton_2");
    
     

    //----------------------Inventory: create Expense Categories---------------------
    waitForObjectItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "Inventory");
    activateItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "Inventory");
    waitForObjectItem(":xTuple ERP: OpenMFG Edition.Inventory_QMenu", "Master Information");
    activateItem(":xTuple ERP: OpenMFG Edition.Inventory_QMenu", "Master Information");
    waitForObjectItem(":xTuple ERP: OpenMFG Edition.Master Information_QMenu_3", "Expense Categories...");
    activateItem(":xTuple ERP: OpenMFG Edition.Master Information_QMenu_3", "Expense Categories...");
    waitForObject(":List Expense Categories.New_QPushButton_2");
    clickButton(":List Expense Categories.New_QPushButton_2");
    waitForObject(":_category_XLineEdit_2");
    type(":_category_XLineEdit_2", "OFFICE-SUPPLIES");
    type(":_description_XLineEdit_13", "Print Paper");
    type(":Expense Category._main_XLineEdit", "01-01-6000-01");
    type(":Expense Category._main_XLineEdit_2", "01-01-8980-01");
    type(":Expense Category._main_XLineEdit_3", "01-01-2490-01");
    type(":Expense Category._main_XLineEdit_4", "01-01-6550-01");
    type(":Expense Category._main_XLineEdit_4", "<Tab>");
    waitForObject(":Expense Category.Save_QPushButton");
    clickButton(":Expense Category.Save_QPushButton");
    waitForObject(":List Expense Categories._expcat_XTreeWidget");
    if(!clickItem(":List Expense Categories._expcat_XTreeWidget", "OFFICE-SUPPLIES", 5,5, 1, Qt.LeftButton))
        test.pass("Expense Category: OFFICE-SUPPLIES created");
    
    waitForObject(":List Expense Categories.New_QPushButton_2");
    clickButton(":List Expense Categories.New_QPushButton_2");
    waitForObject(":_category_XLineEdit_2");
    type(":_category_XLineEdit_2", "SALES_TAX");
    type(":_description_XLineEdit_13", "Sales Tax");
    type(":Expense Category._main_XLineEdit", "01-01-2510-01");
    type(":Expense Category._main_XLineEdit_2", "01-01-8980-01");
    type(":Expense Category._main_XLineEdit_3", "01-01-2490-01");
    type(":Expense Category._main_XLineEdit_4", "01-01-6550-01");
    type(":Expense Category._main_XLineEdit_4", "<Tab>");
    waitForObject(":Expense Category.Save_QPushButton");
    clickButton(":Expense Category.Save_QPushButton");
    waitForObject(":List Expense Categories._expcat_XTreeWidget");
    if(!clickItem(":List Expense Categories._expcat_XTreeWidget", "SALES\\_TAX", 5,5, 1, Qt.LeftButton))
        test.pass("Expense Category: SALES_TAX created");

    
    waitForObject(":List Expense Categories.New_QPushButton_2");
    clickButton(":List Expense Categories.New_QPushButton_2");
    waitForObject(":_category_XLineEdit_2");
    type(":_category_XLineEdit_2", "SHIPPING_CHARGES");
    type(":_description_XLineEdit_13", "Shipping Charges Expense");
    type(":Expense Category._main_XLineEdit", "01-01-6060-01");
    type(":Expense Category._main_XLineEdit_2", "01-01-8980-01");
    type(":Expense Category._main_XLineEdit_3", "01-01-2490-01");
    type(":Expense Category._main_XLineEdit_4", "01-01-6550-01");
    type(":Expense Category._main_XLineEdit_4", "<Tab>");
    waitForObject(":Expense Category.Save_QPushButton");
    clickButton(":Expense Category.Save_QPushButton");
    waitForObject(":List Expense Categories._expcat_XTreeWidget");
    if(!clickItem(":List Expense Categories._expcat_XTreeWidget", "SHIPPING\\_CHARGES", 5,5, 1, Qt.LeftButton))
        test.pass("Expense Category: SALES_TAX created");

    waitForObject(":List Expense Categories.Close_QPushButton_2");
    clickButton(":List Expense Categories.Close_QPushButton_2");
  

  
    //------------------Inventor: create site Locations--------------------
    waitForObjectItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "Inventory");
    activateItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "Inventory");
    waitForObjectItem(":xTuple ERP: OpenMFG Edition.Inventory_QMenu", "Site");
    activateItem(":xTuple ERP: OpenMFG Edition.Inventory_QMenu", "Site");
    waitForObjectItem(":xTuple ERP: OpenMFG Edition.Site_QMenu", "Locations...");
    activateItem(":xTuple ERP: OpenMFG Edition.Site_QMenu", "Locations...");
    waitForObject(":List Site Locations.New_QPushButton_2");
    if(appVersion=="manufacturing"||appVersion=="standard")
    if(findObject(":_warehouse._warehouses_WComboBox_3").currentText!= "WH1")
       clickItem(":_warehouse._warehouses_WComboBox_3", "WH1", 0, 0, 1, Qt.LeftButton);    
    clickButton(":List Site Locations.New_QPushButton_2");
    waitForObject(":_whsezone_XComboBox_2");
    clickItem(":_whsezone_XComboBox_2", "RM1", 0, 0, 1, Qt.LeftButton);
    if(!findObject(":Location.Netable_QCheckBox").checked)
    findObject(":Location.Netable_QCheckBox").checked=true;
    if(findObject(":Location.Restricted_QCheckBox").checked)
    findObject(":Location.Restricted_QCheckBox").checked=false;
    type(":Location._aisle_XLineEdit", "01");
    type(":Location._rack_XLineEdit", "01");
    type(":Location._bin_XLineEdit", "01");
    type(":_location_XLineEdit_2", "01");
    type(":_description_QTextEdit_3", "Location 01-01-01-01 in Zone RM1");
    clickButton(":Location.Save_QPushButton"); 
    waitForObject(":List Site Locations._location_XTreeWidget");
    if(!clickItem(":List Site Locations._location_XTreeWidget", "Location 01-01-01-01 in Zone RM1", 5, 5, 1, Qt.LeftButton))
        test.pass("Location 01-01-01-01 in Zone RM1 created");
    waitForObject(":List Site Locations.New_QPushButton_2");
    clickButton(":List Site Locations.New_QPushButton_2");
    waitForObject(":_whsezone_XComboBox_2");
    clickItem(":_whsezone_XComboBox_2", "RM1", 0, 0, 1, Qt.LeftButton);
    if(!findObject(":Location.Netable_QCheckBox").checked)
    findObject(":Location.Netable_QCheckBox").checked=true;
    if(findObject(":Location.Restricted_QCheckBox").checked)
    findObject(":Location.Restricted_QCheckBox").checked=false;
    type(":Location._aisle_XLineEdit", "01");
    type(":Location._rack_XLineEdit", "01");
    type(":Location._bin_XLineEdit", "01");
    type(":_location_XLineEdit_2", "02");
    type(":_description_QTextEdit_3", "Location 01-01-01-02 in Zone RM1");
    clickButton(":Location.Save_QPushButton");
    waitForObject(":List Site Locations._location_XTreeWidget");
    if(!clickItem(":List Site Locations._location_XTreeWidget", "Location 01-01-01-02 in Zone RM1", 5, 5, 1, Qt.LeftButton))
        test.pass("Location 01-01-01-02 in Zone RM1 created");
   
    waitForObject(":List Site Locations.New_QPushButton_2");
    clickButton(":List Site Locations.New_QPushButton_2");
    waitForObject(":_whsezone_XComboBox_2");
    clickItem(":_whsezone_XComboBox_2", "RM1", 0, 0, 1, Qt.LeftButton);
    if(!findObject(":Location.Netable_QCheckBox").checked)
    findObject(":Location.Netable_QCheckBox").checked=true;
    if(findObject(":Location.Restricted_QCheckBox").checked)
    findObject(":Location.Restricted_QCheckBox").checked=false;
    type(":Location._aisle_XLineEdit", "01");
    type(":Location._rack_XLineEdit", "01");
    type(":Location._bin_XLineEdit", "01");
    type(":_location_XLineEdit_2", "03");
    type(":_description_QTextEdit_3", "Location 01-01-01-03 in Zone RM1");
    clickButton(":Location.Save_QPushButton");
    waitForObject(":List Site Locations._location_XTreeWidget");
    if(!clickItem(":List Site Locations._location_XTreeWidget", "Location 01-01-01-03 in Zone RM1", 5, 5, 1, Qt.LeftButton))
        test.pass("Location 01-01-01-03 in Zone RM1 created");
 
    
    
    waitForObject(":List Site Locations.New_QPushButton_2");
    clickButton(":List Site Locations.New_QPushButton_2");
    waitForObject(":_whsezone_XComboBox_2");
    clickItem(":_whsezone_XComboBox_2", "FG1", 0, 0, 1, Qt.LeftButton);
    if(!findObject(":Location.Netable_QCheckBox").checked)
    findObject(":Location.Netable_QCheckBox").checked=true;
    if(findObject(":Location.Restricted_QCheckBox").checked)
    findObject(":Location.Restricted_QCheckBox").checked=false;
    type(":Location._aisle_XLineEdit", "99");
    type(":Location._rack_XLineEdit", "01");
    type(":Location._bin_XLineEdit", "01");
    type(":_location_XLineEdit_2", "01");
    type(":_description_QTextEdit_3", "Location 01-01-01-01 in Zone FG1");
    clickButton(":Location.Save_QPushButton");
    waitForObject(":List Site Locations._location_XTreeWidget");
    if(!clickItem(":List Site Locations._location_XTreeWidget", "Location 01-01-01-01 in Zone FG1", 5, 5, 1, Qt.LeftButton))
        test.pass("Location 01-01-01-01 in Zone FG1 created");
 
    
    waitForObject(":List Site Locations.New_QPushButton_2");
    clickButton(":List Site Locations.New_QPushButton_2");
    waitForObject(":_whsezone_XComboBox_2");
    clickItem(":_whsezone_XComboBox_2", "FG1", 0, 0, 1, Qt.LeftButton);
    if(!findObject(":Location.Netable_QCheckBox").checked)
    findObject(":Location.Netable_QCheckBox").checked=true;
    if(findObject(":Location.Restricted_QCheckBox").checked)
    findObject(":Location.Restricted_QCheckBox").checked=false;
    type(":Location._aisle_XLineEdit", "99");
    type(":Location._rack_XLineEdit", "01");
    type(":Location._bin_XLineEdit", "01");
    type(":_location_XLineEdit_2", "02");
    type(":_description_QTextEdit_3", "Location 01-01-01-02 in Zone FG1");
    clickButton(":Location.Save_QPushButton");
    waitForObject(":List Site Locations._location_XTreeWidget");
    if(!clickItem(":List Site Locations._location_XTreeWidget", "Location 01-01-01-02 in Zone FG1", 5, 5, 1, Qt.LeftButton))
        test.pass("Location 01-01-01-02 in Zone FG1 created");
    waitForObject(":List Site Locations.New_QPushButton_2");
    clickButton(":List Site Locations.New_QPushButton_2");
    waitForObject(":_whsezone_XComboBox_2");
    clickItem(":_whsezone_XComboBox_2", "FG1", 0, 0, 1, Qt.LeftButton);
    if(!findObject(":Location.Netable_QCheckBox").checked)
    findObject(":Location.Netable_QCheckBox").checked=true;
    if(findObject(":Location.Restricted_QCheckBox").checked)
    findObject(":Location.Restricted_QCheckBox").checked=false;
    type(":Location._aisle_XLineEdit", "99");
    type(":Location._rack_XLineEdit", "01");
    type(":Location._bin_XLineEdit", "01");
    type(":_location_XLineEdit_2", "03");
    type(":_description_QTextEdit_3", "Location 01-01-01-03 in Zone FG1");
    clickButton(":Location.Save_QPushButton");
     waitForObject(":List Site Locations._location_XTreeWidget");
    if(!clickItem(":List Site Locations._location_XTreeWidget", "Location 01-01-01-03 in Zone FG1", 5, 5, 1, Qt.LeftButton))
        test.pass("Location 01-01-01-03 in Zone FG1 created");
 
    waitForObject(":List Site Locations.Close_QPushButton_2");
    clickButton(":List Site Locations.Close_QPushButton_2");
    test.log("Inventory Site Locations created");
  
  
  
  
    //----------Define: Unit of Measure---------------
    waitForObjectItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "Products");
    activateItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "Products");
    waitForObjectItem(":xTuple ERP: OpenMFG Edition.Products_QMenu", "Master Information");
    activateItem(":xTuple ERP: OpenMFG Edition.Products_QMenu", "Master Information");
    waitForObjectItem(":xTuple ERP: OpenMFG Edition.Master Information_QMenu_4", "Units of Measure...");
    activateItem(":xTuple ERP: OpenMFG Edition.Master Information_QMenu_4", "Units of Measure...");
 
    waitForObject(":List Units of Measure.New_QPushButton_2");
    clickButton(":List Units of Measure.New_QPushButton_2");
    waitForObject(":_name_XLineEdit_5");
    type(":_name_XLineEdit_5", "EA");
    type(":_description_XLineEdit_14", "Each");
    clickButton(":Unit of Measure.Save_QPushButton");
    waitForObject(":List Units of Measure._uoms_XTreeWidget_2");
    if(!clickItem(":List Units of Measure._uoms_XTreeWidget_2", "EA", 5, 5, 1, Qt.LeftButton))
        test.pass("UOM: EA created");

    
    waitForObject(":List Units of Measure.New_QPushButton_2");
    clickButton(":List Units of Measure.New_QPushButton_2");
    waitForObject(":_name_XLineEdit_5");    
    type(":_name_XLineEdit_5", "CA");
    type(":_description_XLineEdit_14", "Case");
    clickButton(":Unit of Measure.Save_QPushButton");
    waitForObject(":List Units of Measure._uoms_XTreeWidget_2");
    if(!clickItem(":List Units of Measure._uoms_XTreeWidget_2", "CA", 5, 5, 1, Qt.LeftButton))
        test.pass("UOM: CA created");

    
    
    waitForObject(":List Units of Measure.New_QPushButton_2");
    clickButton(":List Units of Measure.New_QPushButton_2");
    waitForObject(":_name_XLineEdit_5");
    type(":_name_XLineEdit_5", "PL");
    type(":_description_XLineEdit_14", "Pallet");
    waitForObject(":Unit of Measure.Save_QPushButton");
    clickButton(":Unit of Measure.Save_QPushButton");
    waitForObject(":List Units of Measure._uoms_XTreeWidget_2");
    if(!clickItem(":List Units of Measure._uoms_XTreeWidget_2", "PL", 5, 5, 1, Qt.LeftButton))
        test.pass("UOM: PL created");

    
    waitForObject(":List Units of Measure.New_QPushButton_2");
    clickButton(":List Units of Measure.New_QPushButton_2");
    waitForObject(":_name_XLineEdit_5");
    type(":_name_XLineEdit_5", "GL");
    type(":_description_XLineEdit_14", "Gallon");
    waitForObject(":Unit of Measure.Save_QPushButton");
    clickButton(":Unit of Measure.Save_QPushButton");
     waitForObject(":List Units of Measure._uoms_XTreeWidget_2");
    if(!clickItem(":List Units of Measure._uoms_XTreeWidget_2", "GL", 5, 5, 1, Qt.LeftButton))
        test.pass("UOM: GL created");

    
    waitForObject(":List Units of Measure.New_QPushButton_2");
    clickButton(":List Units of Measure.New_QPushButton_2");
    waitForObject(":_name_XLineEdit_5");
    type(":_name_XLineEdit_5", "LB");
    type(":_description_XLineEdit_14", "Pound");
    waitForObject(":Unit of Measure.Save_QPushButton");
    clickButton(":Unit of Measure.Save_QPushButton");
    waitForObject(":List Units of Measure._uoms_XTreeWidget_2");
    if(!clickItem(":List Units of Measure._uoms_XTreeWidget_2", "LB", 5, 5, 1, Qt.LeftButton))
        test.pass("UOM: LB created");

    
    waitForObject(":List Units of Measure.New_QPushButton_2");
    clickButton(":List Units of Measure.New_QPushButton_2");
    waitForObject(":_name_XLineEdit_5");
    type(":_name_XLineEdit_5", "KG");
    type(":_description_XLineEdit_14", "Kilo");
    waitForObject(":Unit of Measure.Save_QPushButton");
    clickButton(":Unit of Measure.Save_QPushButton");
    waitForObject(":List Units of Measure._uoms_XTreeWidget_2");
    if(!clickItem(":List Units of Measure._uoms_XTreeWidget_2", "KG", 5, 5, 1, Qt.LeftButton))
        test.pass("UOM: KG created");

 
    doubleClickItem(":List Units of Measure._uoms_XTreeWidget_2","KG",0,0,1,Qt.LeftButton);
      
    waitForObject(":Global Conversion Ratios:.New_QPushButton");
    clickButton(":Global Conversion Ratios:.New_QPushButton");
    waitForObject(":Conversion._uomFrom_XComboBox");
    clickItem(":Conversion._uomFrom_XComboBox", "KG", 0, 0, 1, Qt.LeftButton);
    waitForObject(":Conversion._uomTo_XComboBox");
    clickItem(":Conversion._uomTo_XComboBox", "LB", 0, 0, 1, Qt.LeftButton);
    waitForObject(":Conversion._toValue_XLineEdit");
    type(":Conversion._toValue_XLineEdit", "2.20462262");
    if(!findObject(":Conversion.Fractional_QCheckBox").checked)
        findObject(":Conversion.Fractional_QCheckBox").checked=true;
    
    waitForObject(":Conversion.Save_QPushButton");
    clickButton(":Conversion.Save_QPushButton");
    
    waitForObject(":Unit of Measure.Save_QPushButton");
    clickButton(":Unit of Measure.Save_QPushButton");
    waitForObject(":List Units of Measure.Close_QPushButton_2");
    clickButton(":List Units of Measure.Close_QPushButton_2");
    test.log("Unit of Measures created");
  
  
  
    //----------Define: Class Codes------------
    waitForObjectItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "Products");
    activateItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "Products");
    waitForObjectItem(":xTuple ERP: OpenMFG Edition.Products_QMenu", "Master Information");
    activateItem(":xTuple ERP: OpenMFG Edition.Products_QMenu", "Master Information");
    waitForObjectItem(":xTuple ERP: OpenMFG Edition.Master Information_QMenu_4", "Class Codes...");
    activateItem(":xTuple ERP: OpenMFG Edition.Master Information_QMenu_4", "Class Codes...");
    
    waitForObject(":List Class Codes.New_QPushButton_2");
    clickButton(":List Class Codes.New_QPushButton_2");
    waitForObject(":_classCode_XLineEdit_2");
    type(":_classCode_XLineEdit_2", "TOY-TRUCKS");
    type(":_description_XLineEdit_15", "Toy Trucks");
    waitForObject(":Class Code.Save_QPushButton");
    clickButton(":Class Code.Save_QPushButton");
    waitForObject(":List Class Codes._classcode_XTreeWidget");
    if(!clickItem(":List Class Codes._classcode_XTreeWidget", "TOY-TRUCKS", 5, 5, 1, Qt.LeftButton))
        test.pass("Class Code: TOY-TRUCKS created");

    
    waitForObject(":List Class Codes.New_QPushButton_2");
    clickButton(":List Class Codes.New_QPushButton_2");
    waitForObject(":_classCode_XLineEdit_2");
    type(":_classCode_XLineEdit_2", "TOYS-CARS");
    type(":_description_XLineEdit_15", "Toy Cars");
    waitForObject(":Class Code.Save_QPushButton");
    clickButton(":Class Code.Save_QPushButton");
    waitForObject(":List Class Codes._classcode_XTreeWidget");
    if(!clickItem(":List Class Codes._classcode_XTreeWidget", "TOYS-CARS", 5, 5, 1, Qt.LeftButton))
        test.pass("Class Code: TOYS-CARS created");

    
    waitForObject(":List Class Codes.New_QPushButton_2");
    clickButton(":List Class Codes.New_QPushButton_2");
    waitForObject(":_classCode_XLineEdit_2");
    type(":_classCode_XLineEdit_2", "TOYS-PLANES");
    type(":_description_XLineEdit_15", "Toy Planes");
    waitForObject(":Class Code.Save_QPushButton");
    clickButton(":Class Code.Save_QPushButton");
    waitForObject(":List Class Codes._classcode_XTreeWidget");
    if(!clickItem(":List Class Codes._classcode_XTreeWidget", "TOYS-PLANES", 5, 5, 1, Qt.LeftButton))
        test.pass("Class Code: TOYS-PLANES created");
    
    waitForObject(":List Class Codes.Close_QPushButton_2");
    clickButton(":List Class Codes.Close_QPushButton_2");
  
  
    //-----------Define: Product Categories----------------
    waitForObject(":xTuple ERP: OpenMFG Edition_QWorkspace");
    waitForObjectItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "Products");
    activateItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "Products");
    waitForObjectItem(":xTuple ERP: OpenMFG Edition.Products_QMenu", "Master Information");
    activateItem(":xTuple ERP: OpenMFG Edition.Products_QMenu", "Master Information");
    waitForObjectItem(":xTuple ERP: OpenMFG Edition.Master Information_QMenu_4", "Product Categories...");
    activateItem(":xTuple ERP: OpenMFG Edition.Master Information_QMenu_4", "Product Categories...");
 
    waitForObject(":List Product Categories.New_QPushButton_2");
    clickButton(":List Product Categories.New_QPushButton_2");
    waitForObject(":Product Category._category_XLineEdit");
    type(":Product Category._category_XLineEdit", "CLASSIC-METAL");
    type(":Product Category._description_XLineEdit", "Classic Metal Product Line");
    waitForObject(":Product Category.Save_QPushButton");
    clickButton(":Product Category.Save_QPushButton");
    waitForObject(":List Product Categories._prodcat_XTreeWidget");
    if(!clickItem(":List Product Categories._prodcat_XTreeWidget", "CLASSIC-METAL", 5, 5, 1, Qt.LeftButton))
        test.pass("Product Category: CLASSIC-METAL created");

    
    waitForObject(":List Product Categories.New_QPushButton_2");
    clickButton(":List Product Categories.New_QPushButton_2");
    waitForObject(":Product Category._category_XLineEdit");
    type(":Product Category._category_XLineEdit", "CLASSIC-WOOD");
    type(":Product Category._description_XLineEdit", "Classic Wood Product Line");
    waitForObject(":Product Category.Save_QPushButton");
    clickButton(":Product Category.Save_QPushButton");
    waitForObject(":List Product Categories._prodcat_XTreeWidget");
    if(!clickItem(":List Product Categories._prodcat_XTreeWidget", "CLASSIC-WOOD", 5, 5, 1, Qt.LeftButton))
        test.pass("Product Category: CLASSIC-WOOD created");
    
    
    waitForObject(":List Product Categories.New_QPushButton_2");
    clickButton(":List Product Categories.New_QPushButton_2");
    waitForObject(":Product Category._category_XLineEdit");
    type(":Product Category._category_XLineEdit", "COLLECTORS-METAL");
    type(":Product Category._description_XLineEdit", "Collectors Metal Product Line");
    waitForObject(":Product Category.Save_QPushButton");
    clickButton(":Product Category.Save_QPushButton");
    waitForObject(":List Product Categories._prodcat_XTreeWidget");
    if(!clickItem(":List Product Categories._prodcat_XTreeWidget", "COLLECTORS-METAL", 5, 5, 1, Qt.LeftButton))
        test.pass("Product Category: COLLECTORS-METAL created");
    
    
    waitForObject(":List Product Categories.New_QPushButton_2");
    clickButton(":List Product Categories.New_QPushButton_2");
    waitForObject(":Product Category._category_XLineEdit");
    type(":Product Category._category_XLineEdit", "COLLECTORS-WOOD");
    type(":Product Category._description_XLineEdit", "Collectors Wood Product Line");
    waitForObject(":Product Category.Save_QPushButton");
    clickButton(":Product Category.Save_QPushButton");
    waitForObject(":List Product Categories._prodcat_XTreeWidget");
    if(!clickItem(":List Product Categories._prodcat_XTreeWidget", "COLLECTORS-WOOD", 5, 5, 1, Qt.LeftButton))
        test.pass("Product Category: COLLECTORS-WOOD created");
        
    waitForObject(":List Product Categories.Close_QPushButton_2");
    clickButton(":List Product Categories.Close_QPushButton_2");
    test.log("Product Categories created");
     

    
    //---------Create Freight Classes-----------
    waitForObjectItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "Products");
    activateItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "Products");
    waitForObjectItem(":xTuple ERP: OpenMFG Edition.Products_QMenu", "Master Information");
    activateItem(":xTuple ERP: OpenMFG Edition.Products_QMenu", "Master Information");
    waitForObjectItem(":xTuple ERP: OpenMFG Edition.Master Information_QMenu_4", "Freight Classes...");
    activateItem(":xTuple ERP: OpenMFG Edition.Master Information_QMenu_4", "Freight Classes...");
    waitForObject(":List Freight Classes.New_QPushButton_2");
    clickButton(":List Freight Classes.New_QPushButton_2");
    waitForObject(":_freightClass_XLineEdit_2");
    type(":_freightClass_XLineEdit_2", "BULK");
    type(":_description_XLineEdit_34", "Bulk Freight");
    clickButton(":Freight Class.Save_QPushButton");
    waitForObject(":List Freight Classes.Close_QPushButton_2");
    clickButton(":List Freight Classes.Close_QPushButton_2");
    test.log("Freight Class: BULK created");
    
    
    //-----------Products: create Characteristics--------------------    
    waitForObjectItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "Products");
    activateItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "Products");
    waitForObjectItem(":xTuple ERP: OpenMFG Edition.Products_QMenu", "Master Information");
    activateItem(":xTuple ERP: OpenMFG Edition.Products_QMenu", "Master Information");
    waitForObjectItem(":xTuple ERP: OpenMFG Edition.Master Information_QMenu_4", "Characteristics...");
    activateItem(":xTuple ERP: OpenMFG Edition.Master Information_QMenu_4", "Characteristics...");
   
    waitForObject(":List Characteristics.New_QPushButton_2");
    clickButton(":List Characteristics.New_QPushButton_2");
    waitForObject(":_name_XLineEdit_6");
    type(":_name_XLineEdit_6", "I-COLOR");
    if(!findObject(":May be used for:.Item Characteristics_QCheckBox_2").checked)
        findObject(":May be used for:.Item Characteristics_QCheckBox_2").checked=true;
    waitForObject(":_description_QTextEdit_4");
    type(":_description_QTextEdit_4", "Product Color");
    waitForObject(":Characteristic.Save_QPushButton");
    clickButton(":Characteristic.Save_QPushButton");
    waitForObject(":List Characteristics._char_XTreeWidget");
    if(!clickItem(":List Characteristics._char_XTreeWidget", "I-COLOR", 5, 5, 1, Qt.LeftButton))
        test.pass("Characteristics: I-COLOR created");
 
    
    waitForObject(":List Characteristics.New_QPushButton_2");
    clickButton(":List Characteristics.New_QPushButton_2");
    waitForObject(":_name_XLineEdit_6");
    type(":_name_XLineEdit_6", "SUPPORT-PLAN");
    if(!findObject(":May be used for:.Customer Characteristics_QCheckBox_2").checked)
        findObject(":May be used for:.Customer Characteristics_QCheckBox_2").checked=true;
    waitForObject(":_description_QTextEdit_4");
    type(":_description_QTextEdit_4", "Customer Feedback");
    waitForObject(":Characteristic.Save_QPushButton");
    clickButton(":Characteristic.Save_QPushButton");
    waitForObject(":List Characteristics._char_XTreeWidget");
    if(!clickItem(":List Characteristics._char_XTreeWidget", "SUPPORT-PLAN", 5, 5, 1, Qt.LeftButton))
        test.pass("Characteristics: SUPPORT-PLAN created");

    
    waitForObject(":List Characteristics.New_QPushButton_2");
    clickButton(":List Characteristics.New_QPushButton_2");
    waitForObject(":_name_XLineEdit_6");
    type(":_name_XLineEdit_6", "SALES-VOLUME");
    if(!findObject(":May be used for:.Customer Characteristics_QCheckBox_2").checked)
        findObject(":May be used for:.Customer Characteristics_QCheckBox_2").checked=true;
    waitForObject(":_description_QTextEdit_4");
    type(":_description_QTextEdit_4", "Customer Sales Volume");
    waitForObject(":Characteristic.Save_QPushButton");
    clickButton(":Characteristic.Save_QPushButton");
    waitForObject(":List Characteristics._char_XTreeWidget");
    if(!clickItem(":List Characteristics._char_XTreeWidget", "SALES-VOLUME", 5, 5, 1, Qt.LeftButton))
        test.pass("Characteristics: SALES-VOLUME created");
    
    waitForObject(":List Characteristics.New_QPushButton_2");
    clickButton(":List Characteristics.New_QPushButton_2");
    waitForObject(":_name_XLineEdit_6");
    type(":_name_XLineEdit_6", "CRM-ACCOUNT-REGION");
    if(!findObject(":May be used for:.CRM Account Characteristics_QCheckBox_2").checked)
        findObject(":May be used for:.CRM Account Characteristics_QCheckBox_2").checked=true;
    waitForObject(":_description_QTextEdit_4");
    type(":_description_QTextEdit_4", "Account Region");
    waitForObject(":Characteristic.Save_QPushButton");
    clickButton(":Characteristic.Save_QPushButton");
    waitForObject(":List Characteristics._char_XTreeWidget");
    if(!clickItem(":List Characteristics._char_XTreeWidget", "CRM-ACCOUNT-REGION", 5, 5, 1, Qt.LeftButton))
        test.pass("Characteristics: CRM-ACCOUNT-REGION created");
    
    
    waitForObject(":List Characteristics.New_QPushButton_2");
    clickButton(":List Characteristics.New_QPushButton_2");
    waitForObject(":_name_XLineEdit_6");
    type(":_name_XLineEdit_6", "ADR-ROUTE");
    if(!findObject(":May be used for:.Address Characteristics_QCheckBox_2").checked)
        findObject(":May be used for:.Address Characteristics_QCheckBox_2").checked=true;
    waitForObject(":_description_QTextEdit_4");
    type(":_description_QTextEdit_4", "Delivery Route");
    waitForObject(":Characteristic.Save_QPushButton");
    clickButton(":Characteristic.Save_QPushButton");
    waitForObject(":List Characteristics._char_XTreeWidget");
    if(!clickItem(":List Characteristics._char_XTreeWidget", "ADR-ROUTE", 5, 5, 1, Qt.LeftButton))
        test.pass("Characteristics: ADR-ROUTE created");
    
    
    waitForObject(":List Characteristics.New_QPushButton_2");
    clickButton(":List Characteristics.New_QPushButton_2");
    waitForObject(":_name_XLineEdit_6");
    type(":_name_XLineEdit_6", "CTC-BDAY");
    if(!findObject(":May be used for:.Contact Characteristics_QCheckBox_2").checked)
        findObject(":May be used for:.Contact Characteristics_QCheckBox_2").checked=true;
    waitForObject(":_description_QTextEdit_4");
    type(":_description_QTextEdit_4", "Birthday");
    waitForObject(":Characteristic.Save_QPushButton");
    clickButton(":Characteristic.Save_QPushButton"); 
    waitForObject(":List Characteristics._char_XTreeWidget");
    if(!clickItem(":List Characteristics._char_XTreeWidget", "CTC-BDAY", 5, 5, 1, Qt.LeftButton))
        test.pass("Characteristics: CTC-BDAY created");
    
    
    waitForObject(":List Characteristics.New_QPushButton_2");
    clickButton(":List Characteristics.New_QPushButton_2");
    waitForObject(":_name_XLineEdit_6");
    type(":_name_XLineEdit_6", "LOT-QA-TEST1");
    if(!findObject(":May be used for:.Lot/Serial Characteristics_QCheckBox_2").checked)
        findObject(":May be used for:.Lot/Serial Characteristics_QCheckBox_2").checked=true;
    waitForObject(":_description_QTextEdit_4");
    type(":_description_QTextEdit_4", "QA Results for Test Type 1");
    waitForObject(":Characteristic.Save_QPushButton");
    clickButton(":Characteristic.Save_QPushButton"); 
    waitForObject(":List Characteristics._char_XTreeWidget");
    if(!clickItem(":List Characteristics._char_XTreeWidget", "LOT-QA-TEST1", 5, 5, 1, Qt.LeftButton))
        test.pass("Characteristics: LOT-QA-TEST1 created");
    
    waitForObject(":List Characteristics.Close_QPushButton_2");
    clickButton(":List Characteristics.Close_QPushButton_2");
    
    
  if(appVersion=="manufacturing")
  {
    
        //----------------Schedule: Create Planner Code----------------
        waitForObjectItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "Schedule");
        activateItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "Schedule");
        waitForObjectItem(":xTuple ERP: OpenMFG Edition.Schedule_QMenu", "Master Information");
        activateItem(":xTuple ERP: OpenMFG Edition.Schedule_QMenu", "Master Information");
        waitForObjectItem(":xTuple ERP: OpenMFG Edition.Master Information_QMenu_5", "Planner Codes...");
        activateItem(":xTuple ERP: OpenMFG Edition.Master Information_QMenu_5", "Planner Codes...");
        
        waitForObject(":List Planner Codes.New_QPushButton_2");
        clickButton(":List Planner Codes.New_QPushButton_2");
        waitForObject(":_code_XLineEdit_6");
        type(":_code_XLineEdit_6", "MPS-ITEMS");
        type(":_description_XLineEdit_16", "MPS Items");
        if(!findObject(":Planner Code.Automatically Explode Planned Orders_QCheckBox").checked)
            findObject(":Planner Code.Automatically Explode Planned Orders_QCheckBox").checked=true;
        if(!findObject(":_explosionGroup.Multiple Level Explosion_QRadioButton_2").checked);
        findObject(":_explosionGroup.Multiple Level Explosion_QRadioButton_2").checked=true;
        waitForObject(":Planner Code.Save_QPushButton");
        clickButton(":Planner Code.Save_QPushButton");
        waitForObject(":List Planner Codes._plancode_XTreeWidget");
        if(!clickItem(":List Planner Codes._plancode_XTreeWidget", "MPS-ITEMS", 5, 5, 1, Qt.LeftButton))
            test.pass("Planner Code: MPS-ITEMS created");
        
        
        waitForObject(":List Planner Codes.New_QPushButton_2");
        clickButton(":List Planner Codes.New_QPushButton_2");
        waitForObject(":_code_XLineEdit_6");
        type(":_code_XLineEdit_6", "MRP-ITEMS");
        type(":_description_XLineEdit_16", "MRP Items");
        if(!findObject(":Planner Code.Automatically Explode Planned Orders_QCheckBox").checked)
            findObject(":Planner Code.Automatically Explode Planned Orders_QCheckBox").checked=true;
        if(!findObject(":_explosionGroup.Multiple Level Explosion_QRadioButton_2").checked);
        findObject(":_explosionGroup.Multiple Level Explosion_QRadioButton_2").checked=true;
        waitForObject(":Planner Code.Save_QPushButton");
        clickButton(":Planner Code.Save_QPushButton");
        waitForObject(":List Planner Codes._plancode_XTreeWidget");
        if(!clickItem(":List Planner Codes._plancode_XTreeWidget", "MRP-ITEMS", 5, 5, 1, Qt.LeftButton))
            test.pass("Planner Code: MRP-ITEMS created");
        
        waitForObject(":List Planner Codes.Close_QPushButton_2");
        clickButton(":List Planner Codes.Close_QPushButton_2");
        test.log("Planner Codes created");
        
        
        //--------------Schedule: Site week--------------
        waitForObjectItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "Schedule");
        activateItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "Schedule");
        waitForObjectItem(":xTuple ERP: OpenMFG Edition.Schedule_QMenu", "Master Information");
        activateItem(":xTuple ERP: OpenMFG Edition.Schedule_QMenu", "Master Information");
        waitForObjectItem(":xTuple ERP: OpenMFG Edition.Master Information_QMenu_5", "Site Week...");
        activateItem(":xTuple ERP: OpenMFG Edition.Master Information_QMenu_5", "Site Week...");
        waitForObject(":_warehouse.Selected:_QRadioButton_3");
        clickButton(":_warehouse.Selected:_QRadioButton_3");
        waitForObject(":_warehouse._warehouses_WComboBox_4");
        clickItem(":_warehouse._warehouses_WComboBox_4", "WH1", 0, 0, 1, Qt.LeftButton);
        waitForObject(":Site Work Week.Sunday_QCheckBox_2");
        if(findObject(":Site Work Week.Sunday_QCheckBox_2").checked)
            findObject(":Site Work Week.Sunday_QCheckBox_2").checked=false;
        if(!findObject(":Site Work Week.Monday_QCheckBox_2").checked)
            findObject(":Site Work Week.Monday_QCheckBox_2").checked=true;
        if(!findObject(":Site Work Week.Monday_QCheckBox_2").checked)
            findObject(":Site Work Week.Monday_QCheckBox_2").checked=true;
        if(!findObject(":Site Work Week.Tuesday_QCheckBox_2").checked)
            findObject(":Site Work Week.Tuesday_QCheckBox_2").checked=true;
        if(!findObject(":Site Work Week.Wednesday_QCheckBox_2").checked)
            findObject(":Site Work Week.Wednesday_QCheckBox_2").checked=true;
        if(!findObject(":Site Work Week.Thursday_QCheckBox_2").checked)
            findObject(":Site Work Week.Thursday_QCheckBox_2").checked=true;
        if(!findObject(":Site Work Week.Friday_QCheckBox_2").checked)
            findObject(":Site Work Week.Friday_QCheckBox_2").checked=true;
        if(findObject(":Site Work Week.Saturday_QCheckBox_2").checked)
            findObject(":Site Work Week.Saturday_QCheckBox_2").checked=false;
        waitForObject(":Site Work Week.Save_QPushButton_2");
        clickButton(":Site Work Week.Save_QPushButton_2");
        test.log("Site Week created");
        
        
        //----------Schedule: Site Calendar Exceptions---------------
        waitForObjectItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "Schedule");
        activateItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "Schedule");
        waitForObjectItem(":xTuple ERP: OpenMFG Edition.Schedule_QMenu", "Master Information");
        activateItem(":xTuple ERP: OpenMFG Edition.Schedule_QMenu", "Master Information");
        waitForObjectItem(":xTuple ERP: OpenMFG Edition.Master Information_QMenu_5", "Site Calendar Exceptions...");
        activateItem(":xTuple ERP: OpenMFG Edition.Master Information_QMenu_5", "Site Calendar Exceptions...");
        
        waitForObject(":List Site Calendar Exceptions.New_QPushButton_2");
        clickButton(":List Site Calendar Exceptions.New_QPushButton_2");
        waitForObject(":_warehouse.Selected:_QRadioButton_4");
        clickButton(":_warehouse.Selected:_QRadioButton_4");
        waitForObject(":_warehouse._warehouses_WComboBox_5");
        clickItem(":_warehouse._warehouses_WComboBox_5", "WH1", 0, 0, 1, Qt.LeftButton);
        var d = new Date();
        var CurrentYearFull = d.getFullYear();
        var CurrentYear = CurrentYearFull.toString().slice(2);
        
        waitForObject(":_description_QLineEdit_2");
        type(":_description_QLineEdit_2", "Christmas "+CurrentYearFull);
        waitForObject(":Site Calendar Exception.XDateEdit_XDateEdit");
        type(":Site Calendar Exception.XDateEdit_XDateEdit", "12/25/"+CurrentYear);
        type(":Site Calendar Exception.XDateEdit_XDateEdit_2", "12/26/"+CurrentYear);
        type(":Site Calendar Exception.XDateEdit_XDateEdit_2", "<Tab>");
        waitForObject(":Exception Type.Closed_QRadioButton_2");
        clickButton(":Exception Type.Closed_QRadioButton_2");
        waitForObject(":Site Calendar Exception.Save_QPushButton");
        clickButton(":Site Calendar Exception.Save_QPushButton");
        waitForObject(":List Site Calendar Exceptions.Close_QPushButton_2");
        if(!clickItem(":List Site Calendar Exceptions._whsecal_XTreeWidget", "Christmas "+CurrentYearFull, 5, 5, 1, Qt.LeftButton))
            test.pass("Calendar Exception: Christmas "+CurrentYearFull+" created");
        clickButton(":List Site Calendar Exceptions.Close_QPushButton_2");
 
    }
    
    if(appVersion=="postbooks"||appVersion=="standard")
    {
            waitForObjectItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "Purchase");
            activateItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "Purchase");
            waitForObjectItem(":xTuple ERP: OpenMFG Edition.Purchase_QMenu", "Master Information");
            activateItem(":xTuple ERP: OpenMFG Edition.Purchase_QMenu", "Master Information");
            waitForObjectItem(":xTuple ERP: OpenMFG Edition.Master Information_QMenu_6", "Planner Codes...");
            activateItem(":xTuple ERP: OpenMFG Edition.Master Information_QMenu_6", "Planner Codes...");
            waitForObject(":List Planner Codes.New_QPushButton_2");
            clickButton(":List Planner Codes.New_QPushButton_2");
            waitForObject(":_code_XLineEdit_6");
            type(":_code_XLineEdit_6", "MRP-Items");
            type(":_description_XLineEdit_16", "MRP Items");
            clickButton(":Planner Code.Automatically Explode Planned Orders_QCheckBox");
            clickButton(":_explosionGroup.Multiple Level Explosion_QRadioButton_2");
            clickButton(":Planner Code.Save_QPushButton");
            waitForObject(":List Planner Codes.New_QPushButton_2");
            clickButton(":List Planner Codes.New_QPushButton_2");
            waitForObject(":_code_XLineEdit_6");
            type(":_code_XLineEdit_6", "MPS-Items");
            type(":_description_XLineEdit_16", "MPS Items");
            clickButton(":Planner Code.Automatically Explode Planned Orders_QCheckBox");
            clickButton(":_explosionGroup.Multiple Level Explosion_QRadioButton_2");
            clickButton(":Planner Code.Save_QPushButton");
            waitForObject(":List Planner Codes._plancode_XTreeWidget");
            if(!clickItem(":List Planner Codes._plancode_XTreeWidget", "MRP-ITEMS", 5, 5, 1, Qt.LeftButton))
                test.pass("Planner Code: MRP-ITEMS created");
            
            waitForObject(":List Planner Codes.Close_QPushButton_2");
            clickButton(":List Planner Codes.Close_QPushButton_2");
            test.log("Planner Codes created");
    }
    
   
}
