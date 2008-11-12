function main()
{
     source(findFile("scripts","functions.js"));

     loginAppl("3.1.0", "empty310-chapter2","user01");
     
     //-----------Chart Of Accounts-------------------------------
     waitForObjectItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "Accounting");
     activateItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "Accounting");
     waitForObjectItem(":xTuple ERP: OpenMFG Edition.Accounting_QMenu", "Account");
     activateItem(":xTuple ERP: OpenMFG Edition.Accounting_QMenu", "Account");
     waitForObjectItem(":xTuple ERP: OpenMFG Edition.Account_QMenu", "Chart of Accounts...");
     activateItem(":xTuple ERP: OpenMFG Edition.Account_QMenu", "Chart of Accounts...");

     COA("01","01","1250","01","Warehouse 1 Asset","Asset","IN");
     COA("01","01","1252","01","Intransit Asset","Asset","IN");
     COA("01","01","1254","01","Warehouse 2 Asset","Asset","IN");
     COA("01","01","1210","01","WIP Asset","Asset","IN");
     COA("01","01","1620","01","Inventory Cost Variance","Asset","IN");     
     COA("01","01","1470","01","Material Usage Variance","Asset","IN");     
     COA("01","01","1930","01","Transform Clearing","Asset","IN");     
     COA("01","01","1460","01","Purchase Price Variance","Asset","IN");
     COA("01","01","8910","01","Inventory Adjustment","Expense","EXP");     
     COA("01","01","8920","01","Inventory Scrap","Expense","EXP");          
     COA("01","01","8930","01","Manufacturing Scrap","Expense","EXP");          
     COA("01","01","8980","01","Purchase Expense Variance","Expense","EXP");        
     COA("01","01","2320","01","Labor and Overhead Costs Accrued","Liability","CL");
     COA("01","01","2490","01","P/O Liability Clearing","Liability","CL");
     COA("01","01","2510","01","Sales Tax Liability","Liability","CL");     
     COA("01","01","1260","01","Shipping Asset","Asset","IN");
     COA("01","01","6000","01","Office Supplies","Expense","EXP");          
     COA("01","01","6550","01","P/O Line Freight Expense","Expense","EXP");
     COA("01","01","2480","01","Transfer Order Liability Clearing","Liability","CL");	  
     COA("01","01","6050","01","State Sales Tax Expense","Expense","EXP");          
     COA("01","01","6060","01","Shipping Charge Expense","Expense","EXP");          
     
    waitForObject(":Chart of Accounts.Close_QPushButton_2");
    clickButton(":Chart of Accounts.Close_QPushButton_2");
   
   
     
    //---------------Create Inventory - new Cost Catergory------------
    waitForObjectItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "Inventory");
    activateItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "Inventory");
    waitForObjectItem(":xTuple ERP: OpenMFG Edition.Inventory_QMenu", "Master Information");
    activateItem(":xTuple ERP: OpenMFG Edition.Inventory_QMenu", "Master Information");
    waitForObjectItem(":xTuple ERP: OpenMFG Edition.Master Information_QMenu_3", "Cost Categories...");
    activateItem(":xTuple ERP: OpenMFG Edition.Master Information_QMenu_3", "Cost Categories...");
    waitForObject(":List Cost Categories.New_QPushButton");
    clickButton(":List Cost Categories.New_QPushButton");
    waitForObject(":List Cost Categories._category_XLineEdit");
    type(":List Cost Categories._category_XLineEdit", "CCWH1");
    type(":List Cost Categories._description_XLineEdit", "Warehouse 1");
    type(":List Cost Categories._main_XLineEdit", "01-01-1250-01");
    type(":List Cost Categories._main_XLineEdit_2", "01-01-1210-01");
    type(":List Cost Categories._main_XLineEdit_3", "01-01-1620-01");
    type(":List Cost Categories._main_XLineEdit_4", "01-01-1930-01");
    type(":List Cost Categories._main_XLineEdit_5", "01-01-1460-01");
    type(":List Cost Categories._main_XLineEdit_6", "01-01-8910-01");
    type(":List Cost Categories._main_XLineEdit_7", "01-01-8920-01");
    type(":List Cost Categories._main_XLineEdit_8", "01-01-8930-01");
    type(":List Cost Categories._main_XLineEdit_9", "01-01-2320-01");
    type(":List Cost Categories._main_XLineEdit_10", "01-01-2490-01");
    type(":List Cost Categories._main_XLineEdit_11", "01-01-1260-01");
    type(":List Cost Categories._main_XLineEdit_12", "01-01-6550-01");
    type(":List Cost Categories._main_XLineEdit_13", "01-01-2480-01");
    type(":List Cost Categories._main_XLineEdit_13", "<Tab>");    
    waitForObject(":List Cost Categories.Save_QPushButton");
    clickButton(":List Cost Categories.Save_QPushButton");
    test.log("Inventory Cost Category CCWH1 created");
    waitForObject(":List Cost Categories.Close_QPushButton");
    clickButton(":List Cost Categories.Close_QPushButton");
    
    
    //----------Inventory-Cost Categories: copy and create for WH2------------------
    waitForObjectItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "Inventory");
    activateItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "Inventory");
    waitForObjectItem(":xTuple ERP: OpenMFG Edition.Inventory_QMenu", "Master Information");
    activateItem(":xTuple ERP: OpenMFG Edition.Inventory_QMenu", "Master Information");
    waitForObjectItem(":xTuple ERP: OpenMFG Edition.Master Information_QMenu_3", "Cost Categories...");
    activateItem(":xTuple ERP: OpenMFG Edition.Master Information_QMenu_3", "Cost Categories...");
    waitForObject(":List Cost Categories._costcat_XTreeWidget");
    type(":List Cost Categories._costcat_XTreeWidget", " ");
    waitForObject(":List Cost Categories.Copy_QPushButton");
    clickButton(":List Cost Categories.Copy_QPushButton");
    type(":List Cost Categories._category_XLineEdit", "<Del>");
    type(":List Cost Categories._category_XLineEdit", "CCWH2");
    type(":List Cost Categories._description_XLineEdit", "<Del>");
    type(":List Cost Categories._description_XLineEdit", "Warehouse 2");
    type(":List Cost Categories._main_XLineEdit", "<Del>");
    type(":List Cost Categories._main_XLineEdit", "01-01-1254-01");
    type(":List Cost Categories._main_XLineEdit", "<Tab>");
    waitForObject(":List Cost Categories.Save_QPushButton");
    clickButton(":List Cost Categories.Save_QPushButton");
    waitForObject(":List Cost Categories.Close_QPushButton");
    clickButton(":List Cost Categories.Close_QPushButton");
    test.log("Inventory Cost Category CCWH2 created");
    waitForObjectItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "Inventory");
    activateItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "Inventory");
     

         //----------------------Inventory: create Expense Categories---------------------
    waitForObjectItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "Inventory");
    activateItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "Inventory");
    waitForObjectItem(":xTuple ERP: OpenMFG Edition.Inventory_QMenu", "Master Information");
    activateItem(":xTuple ERP: OpenMFG Edition.Inventory_QMenu", "Master Information");
    waitForObjectItem(":xTuple ERP: OpenMFG Edition.Master Information_QMenu_3", "Expense Categories...");
    activateItem(":xTuple ERP: OpenMFG Edition.Master Information_QMenu_3", "Expense Categories...");
    waitForObject(":List Expense Categories.New_QPushButton");
    clickButton(":List Expense Categories.New_QPushButton");
    waitForObject(":_category_XLineEdit");
    type(":_category_XLineEdit", "OFFICE-SUPPLIES");
    type(":_description_XLineEdit_7", "Print Paper");
    type(":List Expense Categories._main_XLineEdit", "01-01-6000-01");
    type(":List Expense Categories._main_XLineEdit_2", "01-01-8980-01");
    type(":List Expense Categories._main_XLineEdit_3", "01-01-2490-01");
    type(":List Expense Categories._main_XLineEdit_4", "01-01-6550-01");
    type(":List Expense Categories._main_XLineEdit_4", "<Tab>");
    waitForObject(":List Expense Categories.Save_QPushButton");
    clickButton(":List Expense Categories.Save_QPushButton");
    test.log("Expense Categorie:OFFICE-SUPPLIES  created");
    
    waitForObject(":List Expense Categories.New_QPushButton");
    clickButton(":List Expense Categories.New_QPushButton");
    waitForObject(":_category_XLineEdit");
    type(":_category_XLineEdit", "SALES_TAX");
    type(":_description_XLineEdit_7", "Sales Tax");
    type(":List Expense Categories._main_XLineEdit", "01-01-2510-01");
    type(":List Expense Categories._main_XLineEdit_2", "01-01-8980-01");
    type(":List Expense Categories._main_XLineEdit_3", "01-01-2490-01");
    type(":List Expense Categories._main_XLineEdit_4", "01-01-6550-01");
    type(":List Expense Categories._main_XLineEdit_4", "<Tab>");
    waitForObject(":List Expense Categories.Save_QPushButton");
    clickButton(":List Expense Categories.Save_QPushButton");
    
    waitForObject(":List Expense Categories.New_QPushButton");
    clickButton(":List Expense Categories.New_QPushButton");
    waitForObject(":_category_XLineEdit");
    type(":_category_XLineEdit", "SHIPPING_CHARGES");
    type(":_description_XLineEdit_7", "Shipping Charges Expense");
    type(":List Expense Categories._main_XLineEdit", "01-01-6060-01");
    type(":List Expense Categories._main_XLineEdit_2", "01-01-8980-01");
    type(":List Expense Categories._main_XLineEdit_3", "01-01-2490-01");
    type(":List Expense Categories._main_XLineEdit_4", "01-01-6550-01");
    type(":List Expense Categories._main_XLineEdit_4", "<Tab>");
    waitForObject(":List Expense Categories.Save_QPushButton");
    clickButton(":List Expense Categories.Save_QPushButton");
    waitForObject(":List Expense Categories.Close_QPushButton");
    clickButton(":List Expense Categories.Close_QPushButton");
    test.log("Expense Categorie:SHIPPING_CHARGES  created");
    

    
    //------------------Inventor: create site Locations--------------------
    waitForObjectItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "Inventory");
    activateItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "Inventory");
    waitForObjectItem(":xTuple ERP: OpenMFG Edition.Inventory_QMenu", "Site");
    activateItem(":xTuple ERP: OpenMFG Edition.Inventory_QMenu", "Site");
    waitForObjectItem(":xTuple ERP: OpenMFG Edition.Site_QMenu", "Locations...");
    activateItem(":xTuple ERP: OpenMFG Edition.Site_QMenu", "Locations...");
    waitForObject(":List Site Locations.New_QPushButton");
    clickButton(":List Site Locations.New_QPushButton");
    waitForObject(":_warehouse_WComboBox");
    while(findObject(":_warehouse_WComboBox").currentText!="WH1")
    {
        type(":_warehouse_WComboBox", "<Down>");
        waitForObject(":_warehouse_WComboBox");
    }
    waitForObject(":_whsezone_XComboBox");
    while(findObject(":_whsezone_XComboBox").currentText!="RM1")
    {    
        type(":_whsezone_XComboBox", "<Down>");
        waitForObject(":_whsezone_XComboBox");
    }
    if(!findObject(":List Site Locations.Netable_QCheckBox").checked)
    findObject(":List Site Locations.Netable_QCheckBox").checked=true;
    if(findObject(":List Site Locations.Restricted_QCheckBox").checked)
    findObject(":List Site Locations.Restricted_QCheckBox").checked=false;
    type(":List Site Locations._aisle_XLineEdit", "01");
    type(":List Site Locations._rack_XLineEdit", "01");
    type(":List Site Locations._bin_XLineEdit", "01");
    type(":_location_XLineEdit", "01");
    type(":_description_QTextEdit", "Location 01-01-01-01 in Zone RM1");
    clickButton(":List Site Locations.Save_QPushButton");
    
    waitForObject(":List Site Locations.New_QPushButton");
    clickButton(":List Site Locations.New_QPushButton");
    waitForObject(":_warehouse_WComboBox");
    while(findObject(":_warehouse_WComboBox").currentText!="WH1")
    {
        type(":_warehouse_WComboBox", "<Down>");
        waitForObject(":_warehouse_WComboBox");
    }
    waitForObject(":_whsezone_XComboBox");
    while(findObject(":_whsezone_XComboBox").currentText!="RM1")
    {    
        type(":_whsezone_XComboBox", "<Down>");
        waitForObject(":_whsezone_XComboBox");
    }
    if(!findObject(":List Site Locations.Netable_QCheckBox").checked)
    findObject(":List Site Locations.Netable_QCheckBox").checked=true;
    if(findObject(":List Site Locations.Restricted_QCheckBox").checked)
    findObject(":List Site Locations.Restricted_QCheckBox").checked=false;
    type(":List Site Locations._aisle_XLineEdit", "01");
    type(":List Site Locations._rack_XLineEdit", "01");
    type(":List Site Locations._bin_XLineEdit", "01");
    type(":_location_XLineEdit", "02");
    type(":_description_QTextEdit", "Location 01-01-01-02 in Zone RM1");
    clickButton(":List Site Locations.Save_QPushButton");
    
    waitForObject(":List Site Locations.New_QPushButton");
    clickButton(":List Site Locations.New_QPushButton");
    waitForObject(":_warehouse_WComboBox");
    while(findObject(":_warehouse_WComboBox").currentText!="WH1")
    {
        type(":_warehouse_WComboBox", "<Down>");
        waitForObject(":_warehouse_WComboBox");
    }
    waitForObject(":_whsezone_XComboBox");
    while(findObject(":_whsezone_XComboBox").currentText!="RM1")
    {    
        type(":_whsezone_XComboBox", "<Down>");
        waitForObject(":_whsezone_XComboBox");
    }
    if(!findObject(":List Site Locations.Netable_QCheckBox").checked)
    findObject(":List Site Locations.Netable_QCheckBox").checked=true;
    if(findObject(":List Site Locations.Restricted_QCheckBox").checked)
    findObject(":List Site Locations.Restricted_QCheckBox").checked=false;
    type(":List Site Locations._aisle_XLineEdit", "01");
    type(":List Site Locations._rack_XLineEdit", "01");
    type(":List Site Locations._bin_XLineEdit", "01");
    type(":_location_XLineEdit", "03");
    type(":_description_QTextEdit", "Location 01-01-01-03 in Zone RM1");
    clickButton(":List Site Locations.Save_QPushButton");
    waitForObject(":List Site Locations.New_QPushButton");
    clickButton(":List Site Locations.New_QPushButton");
    waitForObject(":_warehouse_WComboBox");
    while(findObject(":_warehouse_WComboBox").currentText!="WH1")
    {
        type(":_warehouse_WComboBox", "<Down>");
        waitForObject(":_warehouse_WComboBox");
    }
    waitForObject(":_whsezone_XComboBox");
    while(findObject(":_whsezone_XComboBox").currentText!="FG1")
    {    
        type(":_whsezone_XComboBox", "<Down>");
        waitForObject(":_whsezone_XComboBox");
    }
    if(!findObject(":List Site Locations.Netable_QCheckBox").checked)
    findObject(":List Site Locations.Netable_QCheckBox").checked=true;
    if(findObject(":List Site Locations.Restricted_QCheckBox").checked)
    findObject(":List Site Locations.Restricted_QCheckBox").checked=false;
    type(":List Site Locations._aisle_XLineEdit", "99");
    type(":List Site Locations._rack_XLineEdit", "01");
    type(":List Site Locations._bin_XLineEdit", "01");
    type(":_location_XLineEdit", "01");
    type(":_description_QTextEdit", "Location 01-01-01-01 in Zone FG1");
    clickButton(":List Site Locations.Save_QPushButton");
    
    waitForObject(":List Site Locations.New_QPushButton");
    clickButton(":List Site Locations.New_QPushButton");
    waitForObject(":_warehouse_WComboBox");
    while(findObject(":_warehouse_WComboBox").currentText!="WH1")
    {
        type(":_warehouse_WComboBox", "<Down>");
        waitForObject(":_warehouse_WComboBox");
    }
    waitForObject(":_whsezone_XComboBox");
    while(findObject(":_whsezone_XComboBox").currentText!="FG1")
    {    
        type(":_whsezone_XComboBox", "<Down>");
        waitForObject(":_whsezone_XComboBox");
    }
    if(!findObject(":List Site Locations.Netable_QCheckBox").checked)
    findObject(":List Site Locations.Netable_QCheckBox").checked=true;
    if(findObject(":List Site Locations.Restricted_QCheckBox").checked)
    findObject(":List Site Locations.Restricted_QCheckBox").checked=false;
    type(":List Site Locations._aisle_XLineEdit", "99");
    type(":List Site Locations._rack_XLineEdit", "01");
    type(":List Site Locations._bin_XLineEdit", "01");
    type(":_location_XLineEdit", "02");
    type(":_description_QTextEdit", "Location 01-01-01-02 in Zone FG1");
    clickButton(":List Site Locations.Save_QPushButton");
    
    waitForObject(":List Site Locations.New_QPushButton");
    clickButton(":List Site Locations.New_QPushButton");
    waitForObject(":_warehouse_WComboBox");
    while(findObject(":_warehouse_WComboBox").currentText!="WH1")
    {
        type(":_warehouse_WComboBox", "<Down>");
        waitForObject(":_warehouse_WComboBox");
    }
    waitForObject(":_whsezone_XComboBox");
    while(findObject(":_whsezone_XComboBox").currentText!="FG1")
    {    
        type(":_whsezone_XComboBox", "<Down>");
        waitForObject(":_whsezone_XComboBox");
    }
    if(!findObject(":List Site Locations.Netable_QCheckBox").checked)
    findObject(":List Site Locations.Netable_QCheckBox").checked=true;
    if(findObject(":List Site Locations.Restricted_QCheckBox").checked)
    findObject(":List Site Locations.Restricted_QCheckBox").checked=false;
    type(":List Site Locations._aisle_XLineEdit", "99");
    type(":List Site Locations._rack_XLineEdit", "01");
    type(":List Site Locations._bin_XLineEdit", "01");
    type(":_location_XLineEdit", "03");
    type(":_description_QTextEdit", "Location 01-01-01-03 in Zone FG1");
    clickButton(":List Site Locations.Save_QPushButton");
          
    waitForObject(":List Site Locations.Close_QPushButton");
    clickButton(":List Site Locations.Close_QPushButton");
    test.log("Inventory Site Locations created");
    
    
    
    
    //----------Define: Unit of Measure---------------
    waitForObjectItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "Products");
    activateItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "Products");
    waitForObjectItem(":xTuple ERP: OpenMFG Edition.Products_QMenu", "Master Information");
    activateItem(":xTuple ERP: OpenMFG Edition.Products_QMenu", "Master Information");
    waitForObjectItem(":xTuple ERP: OpenMFG Edition.Master Information_QMenu_4", "Units of Measure...");
    activateItem(":xTuple ERP: OpenMFG Edition.Master Information_QMenu_4", "Units of Measure...");
    waitForObject(":List Units of Measure.New_QPushButton");
    clickButton(":List Units of Measure.New_QPushButton");
    type(":_name_XLineEdit_3", "EA");
    type(":_description_XLineEdit_8", "Each");
    waitForObject(":List Units of Measure.Save_QPushButton");
    clickButton(":List Units of Measure.Save_QPushButton");
    
    waitForObject(":List Units of Measure.New_QPushButton");
    clickButton(":List Units of Measure.New_QPushButton");
    type(":_name_XLineEdit_3", "CA");
    type(":_description_XLineEdit_8", "Case");
    waitForObject(":List Units of Measure.Save_QPushButton");
    clickButton(":List Units of Measure.Save_QPushButton");
    
    waitForObject(":List Units of Measure.New_QPushButton");
    clickButton(":List Units of Measure.New_QPushButton");
    waitForObject(":_name_XLineEdit_3");
    type(":_name_XLineEdit_3", "PL");
    type(":_description_XLineEdit_8", "Pallet");
    waitForObject(":List Units of Measure.Save_QPushButton");
    clickButton(":List Units of Measure.Save_QPushButton");
    
    waitForObject(":List Units of Measure.New_QPushButton");
    clickButton(":List Units of Measure.New_QPushButton");
    waitForObject(":_name_XLineEdit_3");
    type(":_name_XLineEdit_3", "GL");
    type(":_description_XLineEdit_8", "Gallon");
    waitForObject(":List Units of Measure.Save_QPushButton");
    clickButton(":List Units of Measure.Save_QPushButton");
    
    waitForObject(":List Units of Measure.New_QPushButton");
    clickButton(":List Units of Measure.New_QPushButton");
    waitForObject(":_name_XLineEdit_3");
    type(":_name_XLineEdit_3", "LB");
    type(":_description_XLineEdit_8", "Pound");
    waitForObject(":List Units of Measure.Save_QPushButton");
    clickButton(":List Units of Measure.Save_QPushButton");
    
    waitForObject(":List Units of Measure.New_QPushButton");
    clickButton(":List Units of Measure.New_QPushButton");
    waitForObject(":_name_XLineEdit_3");
    type(":_name_XLineEdit_3", "KG");
    type(":_description_XLineEdit_8", "Kilo");
    waitForObject(":List Units of Measure.Save_QPushButton");
    clickButton(":List Units of Measure.Save_QPushButton");
    
    var sWidgetTreeControl = ":List Units of Measure._uoms_XTreeWidget";
    waitForObject(sWidgetTreeControl);
    var obj_TreeWidget = findObject(sWidgetTreeControl);
    var obj_TreeRootItem=obj_TreeWidget.invisibleRootItem();
    var iNumberOfRootItems = obj_TreeRootItem.childCount();
    type(sWidgetTreeControl,"<Space>");
    var obj_TreeTopLevelItem = obj_TreeRootItem.child(0);
    var sNameOfRootItem = obj_TreeTopLevelItem.text(0);
    for(i=1;sNameOfRootItem!="KG" || i<iNumberOfRootItems ;i++)
    {
        type(sWidgetTreeControl,"<Down>");           
        obj_TreeTopLevelItem = obj_TreeRootItem.child(i);
        sNameOfRootItem = obj_TreeTopLevelItem.text(0);
    }
    type(sWidgetTreeControl,"<Down>");           
    waitForObject(":List Units of Measure.Edit_QPushButton");
    clickButton(":List Units of Measure.Edit_QPushButton");
    waitForObject(":frame.New_QPushButton");
    clickButton(":frame.New_QPushButton");
    waitForObject(":List Units of Measure._uomFrom_XComboBox");
    while(findObject(":List Units of Measure._uomFrom_XComboBox").currentText!="KG")
    {
        type(":List Units of Measure_QComboBoxListView","<Down>");
        waitForObject(":List Units of Measure_QComboBoxListView");
    }
    waitForObject(":List Units of Measure._uomTo_XComboBox");
    while(findObject(":List Units of Measure._uomTo_XComboBox").currentText!="LB")
    {
        type(":List Units of Measure._uomTo_XComboBox","<Down>");
        waitForObject(":List Units of Measure._uomTo_XComboBox");
    }
    waitForObject(":List Units of Measure._toValue_XLineEdit");
    type(":List Units of Measure._toValue_XLineEdit", "2.20462262");
    if(!findObject(":List Units of Measure.Fractional_QCheckBox").checked)
        findObject(":List Units of Measure.Fractional_QCheckBox").checked=true;
    waitForObject(":List Units of Measure.Save_QPushButton_2");
    clickButton(":List Units of Measure.Save_QPushButton_2");
    waitForObject(":List Units of Measure.Save_QPushButton");
    clickButton(":List Units of Measure.Save_QPushButton");
    waitForObject(":List Units of Measure.Close_QPushButton");
    clickButton(":List Units of Measure.Close_QPushButton");
    test.log("Unit of Measures created");
    
    
    
    //----------Define: Class Codes------------
    waitForObjectItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "Products");
    activateItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "Products");
    waitForObjectItem(":xTuple ERP: OpenMFG Edition.Products_QMenu", "Master Information");
    activateItem(":xTuple ERP: OpenMFG Edition.Products_QMenu", "Master Information");
    waitForObjectItem(":xTuple ERP: OpenMFG Edition.Master Information_QMenu_4", "Class Codes...");
    activateItem(":xTuple ERP: OpenMFG Edition.Master Information_QMenu_4", "Class Codes...");
    
    waitForObject(":List Class Codes.New_QPushButton");
    clickButton(":List Class Codes.New_QPushButton");
    waitForObject(":_classCode_XLineEdit");
    type(":_classCode_XLineEdit", "TOY-TRUCKS");
    type(":_description_XLineEdit_9", "Toy Trucks");
    waitForObject(":List Class Codes.Save_QPushButton");
    clickButton(":List Class Codes.Save_QPushButton");
    
    waitForObject(":List Class Codes.New_QPushButton");
    clickButton(":List Class Codes.New_QPushButton");
    waitForObject(":_classCode_XLineEdit");
    type(":_classCode_XLineEdit", "TOYS-CARS");
    type(":_description_XLineEdit_9", "Toy Cars");
    waitForObject(":List Class Codes.Save_QPushButton");
    clickButton(":List Class Codes.Save_QPushButton");
    
    waitForObject(":List Class Codes.New_QPushButton");
    clickButton(":List Class Codes.New_QPushButton");
    waitForObject(":_classCode_XLineEdit");
    type(":_classCode_XLineEdit", "TOYS-PLANES");
    type(":_description_XLineEdit_9", "Toy Planes");
    waitForObject(":List Class Codes.Save_QPushButton");
    clickButton(":List Class Codes.Save_QPushButton");
        
    waitForObject(":List Class Codes.Close_QPushButton");
    clickButton(":List Class Codes.Close_QPushButton");
    test.log("Class Codes defined");
    
    
    //-----------Define: Product Categories----------------
    waitForObject(":xTuple ERP: OpenMFG Edition_QWorkspace");
    waitForObjectItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "Products");
    activateItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "Products");
    waitForObjectItem(":xTuple ERP: OpenMFG Edition.Products_QMenu", "Master Information");
    activateItem(":xTuple ERP: OpenMFG Edition.Products_QMenu", "Master Information");
    waitForObjectItem(":xTuple ERP: OpenMFG Edition.Master Information_QMenu_4", "Product Categories...");
    activateItem(":xTuple ERP: OpenMFG Edition.Master Information_QMenu_4", "Product Categories...");
    
    waitForObject(":List Product Categories.New_QPushButton");
    clickButton(":List Product Categories.New_QPushButton");
    waitForObject(":List Product Categories._category_XLineEdit");
    type(":List Product Categories._category_XLineEdit", "CLASSIC-METAL");
    type(":List Product Categories._description_XLineEdit", "Classic Metal Product Line");
    waitForObject(":List Product Categories.Save_QPushButton");
    clickButton(":List Product Categories.Save_QPushButton");
    
    waitForObject(":List Product Categories.New_QPushButton");
    clickButton(":List Product Categories.New_QPushButton");
    waitForObject(":List Product Categories._category_XLineEdit");
    type(":List Product Categories._category_XLineEdit", "CLASSIC-WOOD");
    type(":List Product Categories._description_XLineEdit", "Classic Wood Product Line");
    waitForObject(":List Product Categories.Save_QPushButton");
    clickButton(":List Product Categories.Save_QPushButton");
    
    waitForObject(":List Product Categories.New_QPushButton");
    clickButton(":List Product Categories.New_QPushButton");
    waitForObject(":List Product Categories._category_XLineEdit");
    type(":List Product Categories._category_XLineEdit", "COLLECTORS-METAL");
    type(":List Product Categories._description_XLineEdit", "Collectors Metal Product Line");
    waitForObject(":List Product Categories.Save_QPushButton");
    clickButton(":List Product Categories.Save_QPushButton");
    
    waitForObject(":List Product Categories.New_QPushButton");
    clickButton(":List Product Categories.New_QPushButton");
    waitForObject(":List Product Categories._category_XLineEdit");
    type(":List Product Categories._category_XLineEdit", "COLLECTORS-WOOD");
    type(":List Product Categories._description_XLineEdit", "Collectors Wood Product Line");
    waitForObject(":List Product Categories.Save_QPushButton");
    clickButton(":List Product Categories.Save_QPushButton");
    
    waitForObject(":List Product Categories.Close_QPushButton");
    clickButton(":List Product Categories.Close_QPushButton");
    test.log("Product Categories created");
     
    
    //-----------Products: create Characteristics--------------------    
    waitForObjectItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "Products");
    activateItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "Products");
    waitForObjectItem(":xTuple ERP: OpenMFG Edition.Products_QMenu", "Master Information");
    activateItem(":xTuple ERP: OpenMFG Edition.Products_QMenu", "Master Information");
    waitForObjectItem(":xTuple ERP: OpenMFG Edition.Master Information_QMenu_4", "Characteristics...");
    activateItem(":xTuple ERP: OpenMFG Edition.Master Information_QMenu_4", "Characteristics...");
   
    waitForObject(":List Characteristics.New_QPushButton");
    clickButton(":List Characteristics.New_QPushButton");
    waitForObject(":_name_XLineEdit_4");
    type(":_name_XLineEdit_4", "I-COLOR");
    if(!findObject(":May be used for:.Item Characteristics_QCheckBox").checked)
        findObject(":May be used for:.Item Characteristics_QCheckBox").checked=true;
    waitForObject(":_description_QTextEdit_2");
    type(":_description_QTextEdit_2", "Product Color");
    waitForObject(":List Characteristics.Save_QPushButton");
    clickButton(":List Characteristics.Save_QPushButton");
    
    waitForObject(":List Characteristics.New_QPushButton");
    clickButton(":List Characteristics.New_QPushButton");
    waitForObject(":_name_XLineEdit_4");
    type(":_name_XLineEdit_4", "SUPPORT-PLAN");
    if(!findObject(":May be used for:.Customer Characteristics_QCheckBox").checked)
        findObject(":May be used for:.Customer Characteristics_QCheckBox").checked=true;
    waitForObject(":_description_QTextEdit_2");
    type(":_description_QTextEdit_2", "Customer Feedback");
    waitForObject(":List Characteristics.Save_QPushButton");
    clickButton(":List Characteristics.Save_QPushButton");

    waitForObject(":List Characteristics.New_QPushButton");
    clickButton(":List Characteristics.New_QPushButton");
    waitForObject(":_name_XLineEdit_4");
    type(":_name_XLineEdit_4", "CRM-ACCOUNT-REGION");
    if(!findObject(":May be used for:.CRM Account Characteristics_QCheckBox").checked)
        findObject(":May be used for:.CRM Account Characteristics_QCheckBox").checked=true;
    waitForObject(":_description_QTextEdit_2");
    type(":_description_QTextEdit_2", "Account Region");
    waitForObject(":List Characteristics.Save_QPushButton");
    clickButton(":List Characteristics.Save_QPushButton");
    
    waitForObject(":List Characteristics.New_QPushButton");
    clickButton(":List Characteristics.New_QPushButton");
    waitForObject(":_name_XLineEdit_4");
    type(":_name_XLineEdit_4", "ADR-ROUTE");
    if(!findObject(":May be used for:.Address Characteristics_QCheckBox").checked)
        findObject(":May be used for:.Address Characteristics_QCheckBox").checked=true;
    waitForObject(":_description_QTextEdit_2");
    type(":_description_QTextEdit_2", "Delivery Route");
    waitForObject(":List Characteristics.Save_QPushButton");
    clickButton(":List Characteristics.Save_QPushButton");
    
    waitForObject(":List Characteristics.New_QPushButton");
    clickButton(":List Characteristics.New_QPushButton");
    waitForObject(":_name_XLineEdit_4");
    type(":_name_XLineEdit_4", "CTC-BDAY");
    if(!findObject(":May be used for:.Contact Characteristics_QCheckBox").checked)
        findObject(":May be used for:.Contact Characteristics_QCheckBox").checked=true;
    waitForObject(":_description_QTextEdit_2");
    type(":_description_QTextEdit_2", "Birthday");
    waitForObject(":List Characteristics.Save_QPushButton");
    clickButton(":List Characteristics.Save_QPushButton");   
    
    waitForObject(":List Characteristics.New_QPushButton");
    clickButton(":List Characteristics.New_QPushButton");
    waitForObject(":_name_XLineEdit_4");
    type(":_name_XLineEdit_4", "LOT-QA-TEST1");
    if(!findObject(":May be used for:.Lot/Serial Characteristics_QCheckBox").checked)
        findObject(":May be used for:.Lot/Serial Characteristics_QCheckBox").checked=true;
    waitForObject(":_description_QTextEdit_2");
    type(":_description_QTextEdit_2", "QA Results for Test Type 1");
    waitForObject(":List Characteristics.Save_QPushButton");
    clickButton(":List Characteristics.Save_QPushButton");  
    waitForObject(":List Characteristics.Close_QPushButton");
    clickButton(":List Characteristics.Close_QPushButton");
    
     //----------------Schedule: Create Planner Code----------------
    waitForObjectItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "Schedule");
    activateItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "Schedule");
    waitForObjectItem(":xTuple ERP: OpenMFG Edition.Schedule_QMenu", "Master Information");
    activateItem(":xTuple ERP: OpenMFG Edition.Schedule_QMenu", "Master Information");
    waitForObjectItem(":xTuple ERP: OpenMFG Edition.Master Information_QMenu_5", "Planner Codes...");
    activateItem(":xTuple ERP: OpenMFG Edition.Master Information_QMenu_5", "Planner Codes...");
    
    waitForObject(":List Planner Codes.New_QPushButton");
    clickButton(":List Planner Codes.New_QPushButton");
    waitForObject(":_code_XLineEdit_4");
    type(":_code_XLineEdit_4", "MPS-ITEMS");
    type(":_description_XLineEdit_10", "MRP Items");
    if(!findObject(":List Planner Codes.Automatically Explode Planned Orders_QCheckBox").checked)
        findObject(":List Planner Codes.Automatically Explode Planned Orders_QCheckBox").checked=true;
    if(!findObject(":_explosionGroup.Multiple Level Explosion_QRadioButton").checked);
    findObject(":_explosionGroup.Multiple Level Explosion_QRadioButton").checked=true;
    waitForObject(":List Planner Codes.Save_QPushButton");
    clickButton(":List Planner Codes.Save_QPushButton");
    
    waitForObject(":List Planner Codes.New_QPushButton");
    clickButton(":List Planner Codes.New_QPushButton");
    waitForObject(":_code_XLineEdit_4");
    type(":_code_XLineEdit_4", "MRP-ITEMS");
    type(":_description_XLineEdit_10", "MRP Items");
    if(!findObject(":List Planner Codes.Automatically Explode Planned Orders_QCheckBox").checked)
        findObject(":List Planner Codes.Automatically Explode Planned Orders_QCheckBox").checked=true;
    if(!findObject(":_explosionGroup.Multiple Level Explosion_QRadioButton").checked);
    findObject(":_explosionGroup.Multiple Level Explosion_QRadioButton").checked=true;
    waitForObject(":List Planner Codes.Save_QPushButton");
    clickButton(":List Planner Codes.Save_QPushButton");
    
    waitForObject(":List Planner Codes.Close_QPushButton");
    clickButton(":List Planner Codes.Close_QPushButton");
    test.log("Planner Codes created");
    
    
    //--------------Schedule: Site week--------------
    waitForObjectItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "Schedule");
    activateItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "Schedule");
    waitForObjectItem(":xTuple ERP: OpenMFG Edition.Schedule_QMenu", "Master Information");
    activateItem(":xTuple ERP: OpenMFG Edition.Schedule_QMenu", "Master Information");
    waitForObjectItem(":xTuple ERP: OpenMFG Edition.Master Information_QMenu_5", "Site Week...");
    activateItem(":xTuple ERP: OpenMFG Edition.Master Information_QMenu_5", "Site Week...");
    waitForObject(":_warehouse.Selected:_QRadioButton");
    clickButton(":_warehouse.Selected:_QRadioButton");
    waitForObject(":_warehouse._warehouses_WComboBox");
    while(findObject(":_warehouse._warehouses_WComboBox").currentText!="WH1")
    {
        type(":_warehouse._warehouses_WComboBox", "<Down>");
        waitForObject(":_warehouse._warehouses_WComboBox");
    }
    waitForObject(":Site Work Week.Sunday_QCheckBox");
    if(findObject(":Site Work Week.Sunday_QCheckBox").checked)
        findObject(":Site Work Week.Sunday_QCheckBox").checked=false;
    if(!findObject(":Site Work Week.Monday_QCheckBox").checked)
        findObject(":Site Work Week.Monday_QCheckBox").checked=true;
    if(!findObject(":Site Work Week.Monday_QCheckBox").checked)
        findObject(":Site Work Week.Monday_QCheckBox").checked=true;
    if(!findObject(":Site Work Week.Tuesday_QCheckBox").checked)
        findObject(":Site Work Week.Tuesday_QCheckBox").checked=true;
    if(!findObject(":Site Work Week.Wednesday_QCheckBox").checked)
        findObject(":Site Work Week.Wednesday_QCheckBox").checked=true;
    if(!findObject(":Site Work Week.Thursday_QCheckBox").checked)
        findObject(":Site Work Week.Thursday_QCheckBox").checked=true;
    if(!findObject(":Site Work Week.Friday_QCheckBox").checked)
        findObject(":Site Work Week.Friday_QCheckBox").checked=true;
    if(findObject(":Site Work Week.Saturday_QCheckBox").checked)
        findObject(":Site Work Week.Saturday_QCheckBox").checked=false;
    waitForObject(":Site Work Week.Save_QPushButton");
    clickButton(":Site Work Week.Save_QPushButton");
    test.log("Site Week created");
   
    
    //----------Schedule: Site Calendar Exceptions---------------
    waitForObjectItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "Schedule");
    activateItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "Schedule");
    waitForObjectItem(":xTuple ERP: OpenMFG Edition.Schedule_QMenu", "Master Information");
    activateItem(":xTuple ERP: OpenMFG Edition.Schedule_QMenu", "Master Information");
    waitForObjectItem(":xTuple ERP: OpenMFG Edition.Master Information_QMenu_5", "Site Calendar Exceptions...");
    activateItem(":xTuple ERP: OpenMFG Edition.Master Information_QMenu_5", "Site Calendar Exceptions...");
    waitForObject(":List Site Calendar Exceptions.New_QPushButton");
    clickButton(":List Site Calendar Exceptions.New_QPushButton");
    waitForObject(":_warehouse.Selected:_QRadioButton_2");
    clickButton(":_warehouse.Selected:_QRadioButton_2");
    waitForObject(":_warehouse._warehouses_WComboBox_2");
    while(findObject(":_warehouse._warehouses_WComboBox_2").currentText!="WH1")
    {
        type(":_warehouse._warehouses_WComboBox_2", "<Down>");
        waitForObject(":_warehouse._warehouses_WComboBox_2");
    }
    waitForObject(":_description_QLineEdit");
    type(":_description_QLineEdit", "Christmas 2008");
    waitForObject(":List Site Calendar Exceptions.XDateEdit_XDateEdit");
    type(":List Site Calendar Exceptions.XDateEdit_XDateEdit", "25-11-2008");
    type(":List Site Calendar Exceptions.XDateEdit_XDateEdit_2", "26-11-2008");
    type(":List Site Calendar Exceptions.XDateEdit_XDateEdit_2", "<Tab>");
    waitForObject(":Exception Type.Closed_QRadioButton");
    clickButton(":Exception Type.Closed_QRadioButton");
    waitForObject(":List Site Calendar Exceptions.Save_QPushButton");
    clickButton(":List Site Calendar Exceptions.Save_QPushButton");
    waitForObject(":List Site Calendar Exceptions.Close_QPushButton");
    clickButton(":List Site Calendar Exceptions.Close_QPushButton");
    test.log("Calendar Exception created");
     
    exitAppl();
}