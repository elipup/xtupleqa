function main()
{
    //-----declarations------
    source(findFile("scripts","functions.js"));
    
    
    //-----Log into Applicaiton---    
    var set = testData.dataset("login.tsv");
    var url, db, port, pwd,realname,username;
    db=pwd=port=url=realname=username="";
    var userrole="CONFIGURE";
    for(var records in set)
    {
        url=testData.field(set[records],"HOST");
        db=testData.field(set[records],"DB");
        port=testData.field(set[records],"PORT");
        pwd=testData.field(set[records],"PASSWORD");
        role=testData.field(set[records],"ROLE");
        username=testData.field(set[records],"USERNAME");
        realname=testData.field(set[records],"REALNAME");
        if(userrole==role) break;
              
    }

    if(userrole!=role)
    {
        test.fatal("Please enter user details in login.tsv for the role: "+userrole);
        exit(1);
    }
      
    waitForObject(":Log In.Options..._QPushButton");
    clickButton(":Log In.Options..._QPushButton");
    waitForObject(":_server_QLineEdit");
    if(findObject(":_server_QLineEdit").text!= url)
    {
        findObject(":_server_QLineEdit").text=url;
        test.log("URL Changed to: "+url);
    }
    if(findObject(":_database_QLineEdit").text!=db)
    {
        findObject(":_database_QLineEdit").text=db;
        test.log("Database Changed to: "+db);
    }
    if(findObject(":_port_QLineEdit").text!=port)
    {
        findObject(":_port_QLineEdit").text=port;
        test.log("Port Changed to:" + port);
    }
    clickButton(":Login Options.Save_QPushButton");
    waitForObject(":_username_QLineEdit");    
    type(":_username_QLineEdit", username);
    waitForObject(":_password_QLineEdit");
    type(":_password_QLineEdit", pwd);
    waitForObject(":Log In.Login_QPushButton");
    clickButton(":Log In.Login_QPushButton");
    test.log("Logged in Application");


    DelPlanOrdrs();
    DelAllWO();
    DelAllSO();
    DelAllPO();
    
    QOHZero("TBOX1");
    
    MRP("+999");
    MPS("+999");
    
    //--------View Planned Orders-----
    waitForObjectItem(":xTuple ERP:*_QMenuBar", "Schedule");
    activateItem(":xTuple ERP:*_QMenuBar", "Schedule");
    type(":xTuple ERP:*.Schedule_QMenu", "<Down>");
    type(":xTuple ERP:*.Schedule_QMenu", "<Down>");
    type(":xTuple ERP:*.Schedule_QMenu", "<Down>");
    type(":xTuple ERP:*.Schedule_QMenu", "<Down>");
    type(":xTuple ERP:*.Schedule_QMenu", "<Down>");
    type(":xTuple ERP:*.Schedule_QMenu", "<Right>");
    type(":xTuple ERP:*.Reports_QMenu", "<Right>");
    type(":xTuple ERP:*.Planned Orders_QMenu", "<Return>");

    waitForObject(":_warehouse.All Sites_QRadioButton_2");
    clickButton(":_warehouse.All Sites_QRadioButton_2");
    waitForObject(":Planned Orders by Planner Code.Query_QPushButton");
    clickButton(":Planned Orders by Planner Code.Query_QPushButton");
    waitForObject(":frame._planord_XTreeWidget");
    if((findObject(":frame._planord_XTreeWidget").topLevelItemCount)==0)
        test.pass("No Planned Order generated");
    else test.fail("Planned Order generated");
    waitForObject(":Planned Orders by Planner Code.Close_QPushButton");
    clickButton(":Planned Orders by Planner Code.Close_QPushButton");

    
    //---Update site: WH1-----
    waitForObjectItem(":xTuple ERP:*_QMenuBar", "Inventory");
    activateItem(":xTuple ERP:*_QMenuBar", "Inventory");
    waitForObjectItem(":xTuple ERP:*.Inventory_QMenu", "Site");
    activateItem(":xTuple ERP:*.Inventory_QMenu", "Site");
    waitForObjectItem(":xTuple ERP:*.Site_QMenu", "List...");
    activateItem(":xTuple ERP:*.Site_QMenu", "List...");
    waitForObject(":List Sites._warehouse_XTreeWidget");
    doubleClickItem(":List Sites._warehouse_XTreeWidget", "WH1", 0, 0, 0, Qt.LeftButton);
    waitForObject(":_planGroup._sequence_XSpinBox");
    findObject(":_planGroup._sequence_XSpinBox").clear();
    type(":_planGroup._sequence_XSpinBox", "99");
    waitForObject(":Save_QPushButton");
    clickButton(":Save_QPushButton");
    test.log("Warehouse WH1 update");
    
    //---Update site: WH2-----
    waitForObject(":List Sites._warehouse_XTreeWidget");
    doubleClickItem(":List Sites._warehouse_XTreeWidget", "WH2", 0, 0, 0, Qt.LeftButton);
    waitForObject(":_optionsGroup.Shipping Site_QCheckBox");
    clickButton(":_optionsGroup.Shipping Site_QCheckBox");
    waitForObject(":_planGroup._sequence_XSpinBox");
    findObject(":_planGroup._sequence_XSpinBox").clear();
    type(":_planGroup._sequence_XSpinBox", "20");
    waitForObject(":Save_QPushButton");
    clickButton(":Save_QPushButton");
    test.log("Warehouse WH2 update");    
    
    //---Create new Site: WH3----
    waitForObject(":List Sites.New_QPushButton");
    clickButton(":List Sites.New_QPushButton");
    waitForObject(":_code_XLineEdit");
    type(":_code_XLineEdit", "WH3");
    waitForObject(":_sitetype_XComboBox");
    type(":_sitetype_XComboBox", "WHSE");
    waitForObject(":_description_XLineEdit");
    type(":_description_XLineEdit", "Warehouse 3");
    waitForObject(":_addressGroup...._QPushButton");
    clickButton(":_addressGroup...._QPushButton");
    waitForObject(":_listTab_XTreeWidget_5");
    doubleClickItem(":_listTab_XTreeWidget_5", "112 Landsdowne Lane", 0, 0, 0, Qt.LeftButton);
    waitForObject(":_optionsGroup.Shipping Site_QCheckBox");
    clickButton(":_optionsGroup.Shipping Site_QCheckBox");
    waitForObject(":_planGroup._sequence_XSpinBox");
    findObject(":_planGroup._sequence_XSpinBox").clear();
    type(":_planGroup._sequence_XSpinBox", "30");
    waitForObject(":_accountGroup...._QPushButton");
    clickButton(":_accountGroup...._QPushButton");
    waitForObject(":_accountGroup._accnt_XTreeWidget");
    doubleClickItem(":_accountGroup._accnt_XTreeWidget", "1950", 51, 7, 0, Qt.LeftButton);
    waitForObject(":_numberGroup._bolNumber_XLineEdit");
    type(":_numberGroup._bolNumber_XLineEdit", "1000");
    waitForObject(":_numberGroup._countTagNumber_XLineEdit");
    type(":_numberGroup._countTagNumber_XLineEdit", "1000");
    waitForObject(":Save_QPushButton");
    clickButton(":Save_QPushButton");
    
    waitForObject(":List Sites.Close_QPushButton");
    clickButton(":List Sites.Close_QPushButton");
    test.log("Warehouse WH3 created");
    
    
    //-------Create new Planner Code: DRP-----
    waitForObjectItem(":xTuple ERP:*_QMenuBar", "Schedule");
    activateItem(":xTuple ERP:*_QMenuBar", "Schedule");
    waitForObjectItem(":xTuple ERP:*.Schedule_QMenu", "Master Information");
    activateItem(":xTuple ERP:*.Schedule_QMenu", "Master Information");
    waitForObjectItem(":xTuple ERP:*.Master Information_QMenu", "Planner Codes...");
    activateItem(":xTuple ERP:*.Master Information_QMenu", "Planner Codes...");
    waitForObject(":List Planner Codes.New_QPushButton");
    clickButton(":List Planner Codes.New_QPushButton");
    waitForObject(":_code_XLineEdit_2");
    type(":_code_XLineEdit_2", "DRP");
    type(":_description_XLineEdit_2", "DRP");
    waitForObject(":List Planner Codes.Automatically Explode Planned Orders_QCheckBox");
    clickButton(":List Planner Codes.Automatically Explode Planned Orders_QCheckBox");
    waitForObject(":_explosionGroup.Multiple Level Explosion_QRadioButton");
    clickButton(":_explosionGroup.Multiple Level Explosion_QRadioButton");
    waitForObject(":List Planner Codes.Save_QPushButton");
    clickButton(":List Planner Codes.Save_QPushButton");
    waitForObject(":List Planner Codes.Close_QPushButton");
    clickButton(":List Planner Codes.Close_QPushButton");
    test.log("New Planner Code created: DRP");
    
    
    //----------Copy YTRUCK1 to DTRUCK1-------
    waitForObjectItem(":xTuple ERP:*_QMenuBar", "Products");
    activateItem(":xTuple ERP:*_QMenuBar", "Products");
    waitForObjectItem(":xTuple ERP:*.Products_QMenu", "Item");
    activateItem(":xTuple ERP:*.Products_QMenu", "Item");
    waitForObjectItem(":xTuple ERP:*.Item_QMenu", "List...");
    activateItem(":xTuple ERP:*.Item_QMenu", "List...");
    waitForObjectItem(":List Items._item_XTreeWidget", "YTRUCK1");
    clickItem(":List Items._item_XTreeWidget", "YTRUCK1", 0, 0, 1, Qt.LeftButton);
    waitForObject(":List Items.Copy_QPushButton");
    clickButton(":List Items.Copy_QPushButton");
    waitForObject(":_targetItemNumber_XLineEdit");
    type(":_targetItemNumber_XLineEdit", "DTRUCK1");
    waitForObject(":List Items.Copy_QPushButton_2");
    clickButton(":List Items.Copy_QPushButton_2");
    waitForObject(":List Items.Yes_QPushButton");
    clickButton(":List Items.Yes_QPushButton");
    waitForObject(":Supply Rules.Site can purchase this Item_QCheckBox");
    clickButton(":Supply Rules.Site can purchase this Item_QCheckBox");
    waitForObject(":Supply Rules.Site can manufacture this Item_QCheckBox");
    clickButton(":Supply Rules.Site can manufacture this Item_QCheckBox");
    waitForObjectItem(":_warehouse_WComboBox", "WH1");
    clickItem(":_warehouse_WComboBox", "WH1", 0, 0, 1, Qt.LeftButton);
    waitForObjectItem(":_plannerCode_XComboBox", "MRP-MRP Items");
    clickItem(":_plannerCode_XComboBox", "MRP-MRP Items", 41, 5, 1, Qt.LeftButton);
    waitForObjectItem(":_costcat_XComboBox", "GREEN-VALLEY-Green Valley - WH2");
    clickItem(":_costcat_XComboBox", "GREEN-VALLEY-Green Valley - WH2", 48, 7, 1, Qt.LeftButton);
    waitForObject(":List Items.qt_tabwidget_tabbar_QTabBar");
    clickTab(":List Items.qt_tabwidget_tabbar_QTabBar", "Planning");
    waitForObject(":_planningTab.Enforce Order Parameters_QGroupBox_2");
    type(":_planningTab.Enforce Order Parameters_QGroupBox_2"," ");
    waitForObject(":Scheduling._orderGroup_QSpinBox_2");
    findObject(":Scheduling._orderGroup_QSpinBox_2").clear();
    type(":Scheduling._orderGroup_QSpinBox_2", "7");
    waitForObject(":_leadTime_QSpinBox_2");
    findObject(":_leadTime_QSpinBox_2").clear();
    type(":_leadTime_QSpinBox_2", "3");
    waitForObject(":Scheduling.First Group_QCheckBox_2");
    clickButton(":Scheduling.First Group_QCheckBox_2");
    waitForObject(":List Items.Save_QPushButton");
    clickButton(":List Items.Save_QPushButton");
    waitForObject(":List Items.Cancel_QPushButton");
    clickButton(":List Items.Cancel_QPushButton");
    waitForObject(":List Items.Close_QPushButton");
    clickButton(":List Items.Close_QPushButton");
    test.log("New Item created: DTRUCK1");

    
    //-------Create Item Sites for DTRUCK1-----
    waitForObjectItem(":xTuple ERP:*_QMenuBar", "Inventory");
    activateItem(":xTuple ERP:*_QMenuBar", "Inventory");
    waitForObjectItem(":xTuple ERP:*.Inventory_QMenu", "Item Site");
    activateItem(":xTuple ERP:*.Inventory_QMenu", "Item Site");
    waitForObjectItem(":xTuple ERP:*.Item Site_QMenu", "List...");
    activateItem(":xTuple ERP:*.Item Site_QMenu", "List...");
    waitForObjectItem(":_itemSite_XTreeWidget", "DTRUCK1");
    clickItem(":_itemSite_XTreeWidget", "DTRUCK1", 0, 0, 1, Qt.LeftButton);
    waitForObject(":_frame.Copy_QPushButton");
    clickButton(":_frame.Copy_QPushButton");
    waitForObject(":_warehouse_WComboBox_3");
    clickItem(":_warehouse_WComboBox_3", "WH2", 0, 0, 1, Qt.LeftButton);
    waitForObject(":Supply Rules.Site can purchase this Item_QCheckBox_2");
    if(findObject(":Supply Rules.Site can purchase this Item_QCheckBox_2").checked)
        clickButton(":Supply Rules.Site can purchase this Item_QCheckBox_2");
    waitForObject(":Supply Rules.Site can manufacture this Item_QCheckBox_2");
    if(findObject(":Supply Rules.Site can manufacture this Item_QCheckBox_2").checked)
        clickButton(":Supply Rules.Site can manufacture this Item_QCheckBox_2");
    waitForObjectItem(":Control._controlMethod_XComboBox", "None");
    clickItem(":Control._controlMethod_XComboBox", "None", 0, 0, 1, Qt.LeftButton);
    waitForObjectItem(":Control._controlMethod_XComboBox", "Regular");
    clickItem(":Control._controlMethod_XComboBox", "Regular", 0, 0, 1, Qt.LeftButton);
    waitForObjectItem(":_plannerCode_XComboBox_2", "DRP-DRP");
    clickItem(":_plannerCode_XComboBox_2", "DRP-DRP", 0, 0, 1, Qt.LeftButton);
    waitForObject(":List Item Sites.qt_tabwidget_tabbar_QTabBar");
    clickTab(":List Item Sites.qt_tabwidget_tabbar_QTabBar", "Planning");
    waitForObject(":List Item Sites.Save_QPushButton");
    clickButton(":List Item Sites.Save_QPushButton");
    
    waitForObjectItem(":_itemSite_XTreeWidget", "DTRUCK1");
    clickItem(":_itemSite_XTreeWidget", "DTRUCK1", 0, 0, 1, Qt.LeftButton);
    waitForObject(":_frame.Copy_QPushButton");
    clickButton(":_frame.Copy_QPushButton");
    waitForObjectItem(":_warehouse_WComboBox_3", "WH3");
    clickItem(":_warehouse_WComboBox_3", "WH3", 0, 0, 1, Qt.LeftButton);
    waitForObjectItem(":_plannerCode_XComboBox_2", "DRP-DRP");
    clickItem(":_plannerCode_XComboBox_2", "DRP-DRP", 0, 0, 1, Qt.LeftButton);
    waitForObject(":List Item Sites.Save_QPushButton");
    clickButton(":List Item Sites.Save_QPushButton");
    waitForObject(":List Item Sites.Close_QPushButton");
    clickButton(":List Item Sites.Close_QPushButton");

    
    //DRP NO DEMAND / REORDER POINT / SAFETY STOCK TEST
    test.log("DRP NO DEMAND / REORDER POINT / SAFETY STOCK TEST");
    
    MRP("+99");
    
    //--------View Planned Orders-----
    waitForObjectItem(":xTuple ERP:*_QMenuBar", "Schedule");
    activateItem(":xTuple ERP:*_QMenuBar", "Schedule");
    type(":xTuple ERP:*.Schedule_QMenu", "<Down>");
    type(":xTuple ERP:*.Schedule_QMenu", "<Down>");
    type(":xTuple ERP:*.Schedule_QMenu", "<Down>");
    type(":xTuple ERP:*.Schedule_QMenu", "<Down>");
    type(":xTuple ERP:*.Schedule_QMenu", "<Down>");
    type(":xTuple ERP:*.Schedule_QMenu", "<Right>");
    type(":xTuple ERP:*.Reports_QMenu", "<Right>");
    type(":xTuple ERP:*.Planned Orders_QMenu", "<Return>");

    waitForObject(":_warehouse.All Sites_QRadioButton_2");
    clickButton(":_warehouse.All Sites_QRadioButton_2");
    waitForObject(":Planned Orders by Planner Code.Query_QPushButton");
    clickButton(":Planned Orders by Planner Code.Query_QPushButton");
    waitForObject(":frame._planord_XTreeWidget");
    if((findObject(":frame._planord_XTreeWidget").topLevelItemCount)==0)
        test.pass("No Planned Order generated");
    else test.fail("Planned Order generated");
    waitForObject(":Planned Orders by Planner Code.Close_QPushButton");
    clickButton(":Planned Orders by Planner Code.Close_QPushButton");

    
    //----Setup Item site------
    waitForObjectItem(":xTuple ERP:*_QMenuBar", "Inventory");
    activateItem(":xTuple ERP:*_QMenuBar", "Inventory");
    waitForObjectItem(":xTuple ERP:*.Inventory_QMenu", "Item Site");
    activateItem(":xTuple ERP:*.Inventory_QMenu", "Item Site");
    waitForObjectItem(":xTuple ERP:*.Item Site_QMenu", "List...");
    activateItem(":xTuple ERP:*.Item Site_QMenu", "List...");

    waitForObject(":_warehouse.Selected:_QRadioButton");
    clickButton(":_warehouse.Selected:_QRadioButton");
    waitForObject(":_warehouse._warehouses_WComboBox");
    if(findObject(":_warehouse._warehouses_WComboBox").currentText!="WH2")
        clickItem(":_warehouse._warehouses_WComboBox", "WH2", 0, 0, 1, Qt.LeftButton);
    waitForObject(":_itemSite_XTreeWidget");
    doubleClickItem(":_itemSite_XTreeWidget", "DTRUCK1", 0, 0, 0, Qt.LeftButton);
    waitForObject(":Supply Rules.Create Work Orders linked to Sales Orders_QCheckBox");
    if(findObject(":Supply Rules.Create Work Orders linked to Sales Orders_QCheckBox").checked)
        clickButton(":Supply Rules.Create Work Orders linked to Sales Orders_QCheckBox");
    waitForObject(":List Item Sites.qt_tabwidget_tabbar_QTabBar");
    clickTab(":List Item Sites.qt_tabwidget_tabbar_QTabBar", "Planning");
    waitForObject(":_planningTab.Enforce Order Parameters_QGroupBox");
    if(!findObject(":_planningTab.Enforce Order Parameters_QGroupBox").checked)
        type(":_planningTab.Enforce Order Parameters_QGroupBox"," ");
    findObject(":_reorderLevel_XLineEdit").clear();
    type(":_reorderLevel_XLineEdit", "100");
    findObject(":_orderUpToQty_XLineEdit").clear();
    type(":_orderUpToQty_XLineEdit", "0");
    findObject(":_minimumOrder_XLineEdit").clear();
    type(":_minimumOrder_XLineEdit", "0");
    findObject(":_maximumOrder_XLineEdit").clear();
    type(":_maximumOrder_XLineEdit", "0");
    findObject(":_orderMultiple_XLineEdit").clear();
    type(":_orderMultiple_XLineEdit", "0");
    findObject(":Scheduling._safetyStock_XLineEdit").clear();
    type(":Scheduling._safetyStock_XLineEdit", "0");
    findObject(":Scheduling.qt_spinbox_lineedit_QLineEdit_5").clear();
    type(":Scheduling.qt_spinbox_lineedit_QLineEdit_5","1");
    findObject(":Scheduling.qt_spinbox_lineedit_QLineEdit").clear();
    type(":Scheduling.qt_spinbox_lineedit_QLineEdit","1");
    waitForObject(":Scheduling._orderGroup_QSpinBox_2");
    findObject(":Scheduling._orderGroup_QSpinBox_2").clear();
    type(":Scheduling._orderGroup_QSpinBox_2", "7");
    findObject(":_leadTime_QSpinBox").clear();
    type(":_leadTime_QSpinBox", "3");
    waitForObject(":Scheduling.First Group_QCheckBox");
    if(!findObject(":Scheduling.First Group_QCheckBox").checked)
        clickButton(":Scheduling.First Group_QCheckBox");
    waitForObject(":List Item Sites.Save_QPushButton");
    clickButton(":List Item Sites.Save_QPushButton");
    waitForObject(":List Item Sites.Close_QPushButton");
    clickButton(":List Item Sites.Close_QPushButton");
    test.log("Item Site setup for: DTRUCK1");

    MRP("+99");
    
    //------Verify generated Planned Orders-----
    waitForObjectItem(":xTuple ERP:*_QMenuBar", "Schedule");
    activateItem(":xTuple ERP:*_QMenuBar", "Schedule");
    type(":xTuple ERP:*.Schedule_QMenu", "<Down>");
    type(":xTuple ERP:*.Schedule_QMenu", "<Down>");
    type(":xTuple ERP:*.Schedule_QMenu", "<Down>");
    type(":xTuple ERP:*.Schedule_QMenu", "<Down>");
    type(":xTuple ERP:*.Schedule_QMenu", "<Down>");
    type(":xTuple ERP:*.Schedule_QMenu", "<Right>");
    type(":xTuple ERP:*.Reports_QMenu", "<Right>");
    type(":xTuple ERP:*.Planned Orders_QMenu", "<Return>");
    waitForObject(":_warehouse.All Sites_QRadioButton_2");
    clickButton(":_warehouse.All Sites_QRadioButton_2");
    waitForObject(":Planned Orders by Planner Code.Query_QPushButton");
    clickButton(":Planned Orders by Planner Code.Query_QPushButton");
    
    waitForObject(":frame._planord_XTreeWidget");
    var sWidgetTreeControl = ":frame._planord_XTreeWidget";
    var obj_TreeWidget = findObject(sWidgetTreeControl);
    var obj_TreeRootItem=obj_TreeWidget.invisibleRootItem();
    var iNumberOfRootItems = obj_TreeRootItem.childCount();
    if(iNumberOfRootItems>0)
    {
        if(iNumberOfRootItems==4)
        {
            
            obj_TreeTopLevelItem = obj_TreeRootItem.child(0);
            if(obj_TreeTopLevelItem.text(4)=="DTRUCK1" && obj_TreeTopLevelItem.text(1)=="T/O" && obj_TreeTopLevelItem.text(9)=="100.00" && obj_TreeTopLevelItem.text(8)==getForwardDate(3) && obj_TreeTopLevelItem.text(7)==getForwardDate(0))
                test.pass("Expected Planned Order generated");
            else 
                test.fail("Incorrect Planned Order generated");
            
            
            obj_TreeTopLevelItem = obj_TreeRootItem.child(1);
            if(obj_TreeTopLevelItem.text(4)=="DTRUCK1" && obj_TreeTopLevelItem.text(1)=="W/O" && obj_TreeTopLevelItem.text(9)=="100.00" && obj_TreeTopLevelItem.text(8)==getForwardDate(3) && obj_TreeTopLevelItem.text(7)==getForwardDate(0))
                test.pass("Expected Planned Order generated");
            else 
                test.fail("Incorrect Planned Order generated");
            
            obj_TreeTopLevelItem = obj_TreeRootItem.child(2);
            if(obj_TreeTopLevelItem.text(4)=="TSUB1" && obj_TreeTopLevelItem.text(1)=="P/O")
                test.pass("Expected Planned Order generated");
            else 
                test.fail("Incorrect Planned Order generated");

            obj_TreeTopLevelItem = obj_TreeRootItem.child(3);
            if(obj_TreeTopLevelItem.text(4)=="TBOX1" && obj_TreeTopLevelItem.text(1)=="W/O")
                test.pass("Expected Planned Order generated");
            else 
                test.fail("Incorrect Planned Order generated");

            
        }        
        else test.fail("Incorrect Planned Order generated");
        
    }        
    else test.fail("No Planned Order generated");   
    waitForObject(":Planned Orders by Planner Code.Close_QPushButton");
    clickButton(":Planned Orders by Planner Code.Close_QPushButton");
    
    
    
    //DRP REORDER POINT TEST 2
    test.log("DRP REORDER POINT TEST 2");
    DelPlanOrdrs();
    QOHZeroWh("DTRUCK1","WH1");
    QOHZeroWh("DTRUCK1","WH2");
    QOHZeroWh("DTRUCK1","WH3");
    
    //----Setup Item site------
    waitForObjectItem(":xTuple ERP:*_QMenuBar", "Inventory");
    activateItem(":xTuple ERP:*_QMenuBar", "Inventory");
    waitForObjectItem(":xTuple ERP:*.Inventory_QMenu", "Item Site");
    activateItem(":xTuple ERP:*.Inventory_QMenu", "Item Site");
    waitForObjectItem(":xTuple ERP:*.Item Site_QMenu", "List...");
    activateItem(":xTuple ERP:*.Item Site_QMenu", "List...");

    waitForObject(":_warehouse.Selected:_QRadioButton");
    clickButton(":_warehouse.Selected:_QRadioButton");
    waitForObject(":_warehouse._warehouses_WComboBox");
    if(findObject(":_warehouse._warehouses_WComboBox").currentText!="WH1")
        clickItem(":_warehouse._warehouses_WComboBox", "WH1", 0, 0, 1, Qt.LeftButton);
    waitForObject(":_itemSite_XTreeWidget");
    doubleClickItem(":_itemSite_XTreeWidget", "DTRUCK1", 0, 0, 0, Qt.LeftButton);
    waitForObject(":Supply Rules.Create Work Orders linked to Sales Orders_QCheckBox");
    if(findObject(":Supply Rules.Create Work Orders linked to Sales Orders_QCheckBox").checked)
        clickButton(":Supply Rules.Create Work Orders linked to Sales Orders_QCheckBox");
    waitForObject(":List Item Sites.qt_tabwidget_tabbar_QTabBar");
    clickTab(":List Item Sites.qt_tabwidget_tabbar_QTabBar", "Planning");
    waitForObject(":_planningTab.Enforce Order Parameters_QGroupBox");
    if(!findObject(":_planningTab.Enforce Order Parameters_QGroupBox").checked)
        type(":_planningTab.Enforce Order Parameters_QGroupBox"," ");
    findObject(":_reorderLevel_XLineEdit").clear();
    type(":_reorderLevel_XLineEdit", "0");
    findObject(":_orderUpToQty_XLineEdit").clear();
    type(":_orderUpToQty_XLineEdit", "0");
    findObject(":_minimumOrder_XLineEdit").clear();
    type(":_minimumOrder_XLineEdit", "0");
    findObject(":_maximumOrder_XLineEdit").clear();
    type(":_maximumOrder_XLineEdit", "0");
    findObject(":_orderMultiple_XLineEdit").clear();
    type(":_orderMultiple_XLineEdit", "1000");
    findObject(":Scheduling._safetyStock_XLineEdit").clear();
    type(":Scheduling._safetyStock_XLineEdit", "0");
    findObject(":Scheduling.qt_spinbox_lineedit_QLineEdit_5").clear();
    type(":Scheduling.qt_spinbox_lineedit_QLineEdit_5","1");
    findObject(":Scheduling.qt_spinbox_lineedit_QLineEdit").clear();
    type(":Scheduling.qt_spinbox_lineedit_QLineEdit","1");
    waitForObject(":Scheduling._orderGroup_QSpinBox_2");
    findObject(":Scheduling._orderGroup_QSpinBox_2").clear();
    type(":Scheduling._orderGroup_QSpinBox_2", "7");
    findObject(":_leadTime_QSpinBox").clear();
    type(":_leadTime_QSpinBox", "3");
    waitForObject(":Scheduling.First Group_QCheckBox");
    if(!findObject(":Scheduling.First Group_QCheckBox").checked)
        clickButton(":Scheduling.First Group_QCheckBox");
    waitForObject(":List Item Sites.Save_QPushButton");
    clickButton(":List Item Sites.Save_QPushButton");
    waitForObject(":List Item Sites.Close_QPushButton");
    clickButton(":List Item Sites.Close_QPushButton");
    test.log("Item Site setup for: DTRUCK1");

    MRP("+99");

    //------Verify generated Planned Orders-----
    waitForObjectItem(":xTuple ERP:*_QMenuBar", "Schedule");
    activateItem(":xTuple ERP:*_QMenuBar", "Schedule");
    type(":xTuple ERP:*.Schedule_QMenu", "<Down>");
    type(":xTuple ERP:*.Schedule_QMenu", "<Down>");
    type(":xTuple ERP:*.Schedule_QMenu", "<Down>");
    type(":xTuple ERP:*.Schedule_QMenu", "<Down>");
    type(":xTuple ERP:*.Schedule_QMenu", "<Down>");
    type(":xTuple ERP:*.Schedule_QMenu", "<Right>");
    type(":xTuple ERP:*.Reports_QMenu", "<Right>");
    type(":xTuple ERP:*.Planned Orders_QMenu", "<Return>");
    waitForObject(":_warehouse.All Sites_QRadioButton_2");
    clickButton(":_warehouse.All Sites_QRadioButton_2");
    waitForObject(":Planned Orders by Planner Code.Query_QPushButton");
    clickButton(":Planned Orders by Planner Code.Query_QPushButton");
    
    waitForObject(":frame._planord_XTreeWidget");
    var sWidgetTreeControl = ":frame._planord_XTreeWidget";
    var obj_TreeWidget = findObject(sWidgetTreeControl);
    var obj_TreeRootItem=obj_TreeWidget.invisibleRootItem();
    var iNumberOfRootItems = obj_TreeRootItem.childCount();
    if(iNumberOfRootItems>0)
    {
        if(iNumberOfRootItems==4)
        {
            
            obj_TreeTopLevelItem = obj_TreeRootItem.child(0);
            if(obj_TreeTopLevelItem.text(4)=="DTRUCK1" && obj_TreeTopLevelItem.text(1)=="T/O" && obj_TreeTopLevelItem.text(9)=="100.00" && obj_TreeTopLevelItem.text(8)==getForwardDate(3) && obj_TreeTopLevelItem.text(7)==getForwardDate(0))
                test.pass("Expected Planned Order generated");
            else 
                test.fail("Incorrect Planned Order generated");
            
            
            obj_TreeTopLevelItem = obj_TreeRootItem.child(1);
            if(obj_TreeTopLevelItem.text(4)=="DTRUCK1" && obj_TreeTopLevelItem.text(1)=="W/O" && obj_TreeTopLevelItem.text(9)=="1,000.00" && obj_TreeTopLevelItem.text(8)==getForwardDate(3) && obj_TreeTopLevelItem.text(7)==getForwardDate(0))
                test.pass("Expected Planned Order generated");
            else 
                test.fail("Incorrect Planned Order generated");
            
            
            obj_TreeTopLevelItem = obj_TreeRootItem.child(2);
            if(obj_TreeTopLevelItem.text(4)=="TSUB1" && obj_TreeTopLevelItem.text(1)=="P/O")
                test.pass("Expected Planned Order generated");
            else 
                test.fail("Incorrect Planned Order generated");

            obj_TreeTopLevelItem = obj_TreeRootItem.child(3);
            if(obj_TreeTopLevelItem.text(4)=="TBOX1" && obj_TreeTopLevelItem.text(1)=="W/O")
                test.pass("Expected Planned Order generated");
            else 
                test.fail("Incorrect Planned Order generated");

            
        }        
        else test.fail("Incorrect Planned Order generated");
        
    }        
    else test.fail("No Planned Order generated");   
    waitForObject(":Planned Orders by Planner Code.Close_QPushButton");
    clickButton(":Planned Orders by Planner Code.Close_QPushButton");

    
    //DRP REORDER POINT TEST 3
    test.log("DRP REORDER POINT TEST 3");
    
    
    //----Setup Item site------
    waitForObjectItem(":xTuple ERP:*_QMenuBar", "Inventory");
    activateItem(":xTuple ERP:*_QMenuBar", "Inventory");
    waitForObjectItem(":xTuple ERP:*.Inventory_QMenu", "Item Site");
    activateItem(":xTuple ERP:*.Inventory_QMenu", "Item Site");
    waitForObjectItem(":xTuple ERP:*.Item Site_QMenu", "List...");
    activateItem(":xTuple ERP:*.Item Site_QMenu", "List...");

    waitForObject(":_warehouse.Selected:_QRadioButton");
    clickButton(":_warehouse.Selected:_QRadioButton");
    waitForObject(":_warehouse._warehouses_WComboBox");
    if(findObject(":_warehouse._warehouses_WComboBox").currentText!="WH3")
        clickItem(":_warehouse._warehouses_WComboBox", "WH3", 0, 0, 1, Qt.LeftButton);
    waitForObject(":_itemSite_XTreeWidget");
    doubleClickItem(":_itemSite_XTreeWidget", "DTRUCK1", 0, 0, 0, Qt.LeftButton);
    waitForObject(":Supply Rules.Create Work Orders linked to Sales Orders_QCheckBox");
    if(findObject(":Supply Rules.Create Work Orders linked to Sales Orders_QCheckBox").checked)
        clickButton(":Supply Rules.Create Work Orders linked to Sales Orders_QCheckBox");
    waitForObject(":List Item Sites.qt_tabwidget_tabbar_QTabBar");
    clickTab(":List Item Sites.qt_tabwidget_tabbar_QTabBar", "Planning");
    waitForObject(":_planningTab.Enforce Order Parameters_QGroupBox");
    if(!findObject(":_planningTab.Enforce Order Parameters_QGroupBox").checked)
        type(":_planningTab.Enforce Order Parameters_QGroupBox"," ");
    findObject(":_reorderLevel_XLineEdit").clear();
    type(":_reorderLevel_XLineEdit", "200");
    findObject(":_orderUpToQty_XLineEdit").clear();
    type(":_orderUpToQty_XLineEdit", "0");
    findObject(":_minimumOrder_XLineEdit").clear();
    type(":_minimumOrder_XLineEdit", "0");
    findObject(":_maximumOrder_XLineEdit").clear();
    type(":_maximumOrder_XLineEdit", "0");
    findObject(":_orderMultiple_XLineEdit").clear();
    type(":_orderMultiple_XLineEdit", "0");
    findObject(":Scheduling._safetyStock_XLineEdit").clear();
    type(":Scheduling._safetyStock_XLineEdit", "0");
    findObject(":Scheduling.qt_spinbox_lineedit_QLineEdit_5").clear();
    type(":Scheduling.qt_spinbox_lineedit_QLineEdit_5","1");
    findObject(":Scheduling.qt_spinbox_lineedit_QLineEdit").clear();
    type(":Scheduling.qt_spinbox_lineedit_QLineEdit","1");
    waitForObject(":Scheduling._orderGroup_QSpinBox_2");
    findObject(":Scheduling._orderGroup_QSpinBox_2").clear();
    type(":Scheduling._orderGroup_QSpinBox_2", "7");
    findObject(":_leadTime_QSpinBox").clear();
    type(":_leadTime_QSpinBox", "3");
    waitForObject(":Scheduling.First Group_QCheckBox");
    if(!findObject(":Scheduling.First Group_QCheckBox").checked)
        clickButton(":Scheduling.First Group_QCheckBox");
    waitForObject(":List Item Sites.Save_QPushButton");
    clickButton(":List Item Sites.Save_QPushButton");
    waitForObject(":List Item Sites.Close_QPushButton");
    clickButton(":List Item Sites.Close_QPushButton");
    test.log("Item Site setup for: DTRUCK1");

    MRP("+99");

    //------Verify generated Planned Orders-----
    waitForObjectItem(":xTuple ERP:*_QMenuBar", "Schedule");
    activateItem(":xTuple ERP:*_QMenuBar", "Schedule");
    type(":xTuple ERP:*.Schedule_QMenu", "<Down>");
    type(":xTuple ERP:*.Schedule_QMenu", "<Down>");
    type(":xTuple ERP:*.Schedule_QMenu", "<Down>");
    type(":xTuple ERP:*.Schedule_QMenu", "<Down>");
    type(":xTuple ERP:*.Schedule_QMenu", "<Down>");
    type(":xTuple ERP:*.Schedule_QMenu", "<Right>");
    type(":xTuple ERP:*.Reports_QMenu", "<Right>");
    type(":xTuple ERP:*.Planned Orders_QMenu", "<Return>");
    waitForObject(":_warehouse.All Sites_QRadioButton_2");
    clickButton(":_warehouse.All Sites_QRadioButton_2");
    waitForObject(":Planned Orders by Planner Code.Query_QPushButton");
    clickButton(":Planned Orders by Planner Code.Query_QPushButton");
    
    waitForObject(":frame._planord_XTreeWidget");
    var sWidgetTreeControl = ":frame._planord_XTreeWidget";
    var obj_TreeWidget = findObject(sWidgetTreeControl);
    var obj_TreeRootItem=obj_TreeWidget.invisibleRootItem();
    var iNumberOfRootItems = obj_TreeRootItem.childCount();
    if(iNumberOfRootItems>0)
    {
        if(iNumberOfRootItems==5)
        {
            
            obj_TreeTopLevelItem = obj_TreeRootItem.child(0);
            if(obj_TreeTopLevelItem.text(4)=="DTRUCK1" && obj_TreeTopLevelItem.text(1)=="T/O" && obj_TreeTopLevelItem.text(9)=="100.00" && obj_TreeTopLevelItem.text(8)==getForwardDate(3) && obj_TreeTopLevelItem.text(7)==getForwardDate(0))
                test.pass("Expected Planned Order generated");
            else 
                test.fail("Incorrect Planned Order generated");
            
            
            obj_TreeTopLevelItem = obj_TreeRootItem.child(1);
            if(obj_TreeTopLevelItem.text(4)=="DTRUCK1" && obj_TreeTopLevelItem.text(1)=="T/O" && obj_TreeTopLevelItem.text(9)=="200.00" && obj_TreeTopLevelItem.text(8)==getForwardDate(3) && obj_TreeTopLevelItem.text(7)==getForwardDate(0))
                test.pass("Expected Planned Order generated");
            else 
                test.fail("Incorrect Planned Order generated");
            
            
            obj_TreeTopLevelItem = obj_TreeRootItem.child(1);
            if(obj_TreeTopLevelItem.text(4)=="DTRUCK1" && obj_TreeTopLevelItem.text(1)=="W/O" && obj_TreeTopLevelItem.text(9)=="1000.00" && obj_TreeTopLevelItem.text(8)==getForwardDate(3) && obj_TreeTopLevelItem.text(7)==getForwardDate(0))
                test.pass("Expected Planned Order generated");
            else 
                test.fail("Incorrect Planned Order generated");

            
            
            obj_TreeTopLevelItem = obj_TreeRootItem.child(2);
            if(obj_TreeTopLevelItem.text(4)=="TSUB1" && obj_TreeTopLevelItem.text(1)=="P/O")
                test.pass("Expected Planned Order generated");
            else 
                test.fail("Incorrect Planned Order generated");

            obj_TreeTopLevelItem = obj_TreeRootItem.child(3);
            if(obj_TreeTopLevelItem.text(4)=="TBOX1" && obj_TreeTopLevelItem.text(1)=="W/O")
                test.pass("Expected Planned Order generated");
            else 
                test.fail("Incorrect Planned Order generated");

            
        }        
        else test.fail("Incorrect Planned Order generated");
        
    }        
    else test.fail("No Planned Order generated");   
    waitForObject(":Planned Orders by Planner Code.Close_QPushButton");
    clickButton(":Planned Orders by Planner Code.Close_QPushButton");

    
    //DRP REORDER POINT TEST MULTIPLE DESTINATION AGGREGATION TEST
    test.log("DRP REORDER POINT TEST MULTIPLE DESTINATION AGGREGATION TEST");
    
    
    //----Setup Item site------
    waitForObjectItem(":xTuple ERP:*_QMenuBar", "Inventory");
    activateItem(":xTuple ERP:*_QMenuBar", "Inventory");
    waitForObjectItem(":xTuple ERP:*.Inventory_QMenu", "Item Site");
    activateItem(":xTuple ERP:*.Inventory_QMenu", "Item Site");
    waitForObjectItem(":xTuple ERP:*.Item Site_QMenu", "List...");
    activateItem(":xTuple ERP:*.Item Site_QMenu", "List...");

    waitForObject(":_warehouse.Selected:_QRadioButton");
    clickButton(":_warehouse.Selected:_QRadioButton");
    waitForObject(":_warehouse._warehouses_WComboBox");
    if(findObject(":_warehouse._warehouses_WComboBox").currentText!="WH1")
        clickItem(":_warehouse._warehouses_WComboBox", "WH1", 0, 0, 1, Qt.LeftButton);
    waitForObject(":_itemSite_XTreeWidget");
    doubleClickItem(":_itemSite_XTreeWidget", "DTRUCK1", 0, 0, 0, Qt.LeftButton);
    waitForObject(":Supply Rules.Create Work Orders linked to Sales Orders_QCheckBox");
    if(findObject(":Supply Rules.Create Work Orders linked to Sales Orders_QCheckBox").checked)
        clickButton(":Supply Rules.Create Work Orders linked to Sales Orders_QCheckBox");
    waitForObject(":List Item Sites.qt_tabwidget_tabbar_QTabBar");
    clickTab(":List Item Sites.qt_tabwidget_tabbar_QTabBar", "Planning");
    waitForObject(":_planningTab.Enforce Order Parameters_QGroupBox");
    if(!findObject(":_planningTab.Enforce Order Parameters_QGroupBox").checked)
        type(":_planningTab.Enforce Order Parameters_QGroupBox"," ");
    findObject(":_reorderLevel_XLineEdit").clear();
    type(":_reorderLevel_XLineEdit", "0");
    findObject(":_orderUpToQty_XLineEdit").clear();
    type(":_orderUpToQty_XLineEdit", "0");
    findObject(":_minimumOrder_XLineEdit").clear();
    type(":_minimumOrder_XLineEdit", "0");
    findObject(":_maximumOrder_XLineEdit").clear();
    type(":_maximumOrder_XLineEdit", "0");
    findObject(":_orderMultiple_XLineEdit").clear();
    type(":_orderMultiple_XLineEdit", "0");
    findObject(":Scheduling._safetyStock_XLineEdit").clear();
    type(":Scheduling._safetyStock_XLineEdit", "0");
    findObject(":Scheduling.qt_spinbox_lineedit_QLineEdit_5").clear();
    type(":Scheduling.qt_spinbox_lineedit_QLineEdit_5","1");
    findObject(":Scheduling.qt_spinbox_lineedit_QLineEdit").clear();
    type(":Scheduling.qt_spinbox_lineedit_QLineEdit","1");
    waitForObject(":Scheduling._orderGroup_QSpinBox_2");
    findObject(":Scheduling._orderGroup_QSpinBox_2").clear();
    type(":Scheduling._orderGroup_QSpinBox_2", "7");
    findObject(":_leadTime_QSpinBox").clear();
    type(":_leadTime_QSpinBox", "3");
    waitForObject(":Scheduling.First Group_QCheckBox");
    if(!findObject(":Scheduling.First Group_QCheckBox").checked)
        clickButton(":Scheduling.First Group_QCheckBox");
    waitForObject(":List Item Sites.Save_QPushButton");
    clickButton(":List Item Sites.Save_QPushButton");
    waitForObject(":List Item Sites.Close_QPushButton");
    clickButton(":List Item Sites.Close_QPushButton");
    test.log("Item Site setup for: DTRUCK1");

    MRP("+99");

    //------Verify generated Planned Orders-----
    waitForObjectItem(":xTuple ERP:*_QMenuBar", "Schedule");
    activateItem(":xTuple ERP:*_QMenuBar", "Schedule");
    type(":xTuple ERP:*.Schedule_QMenu", "<Down>");
    type(":xTuple ERP:*.Schedule_QMenu", "<Down>");
    type(":xTuple ERP:*.Schedule_QMenu", "<Down>");
    type(":xTuple ERP:*.Schedule_QMenu", "<Down>");
    type(":xTuple ERP:*.Schedule_QMenu", "<Down>");
    type(":xTuple ERP:*.Schedule_QMenu", "<Right>");
    type(":xTuple ERP:*.Reports_QMenu", "<Right>");
    type(":xTuple ERP:*.Planned Orders_QMenu", "<Return>");
    waitForObject(":_warehouse.All Sites_QRadioButton_2");
    clickButton(":_warehouse.All Sites_QRadioButton_2");
    waitForObject(":Planned Orders by Planner Code.Query_QPushButton");
    clickButton(":Planned Orders by Planner Code.Query_QPushButton");
    
    waitForObject(":frame._planord_XTreeWidget");
    var sWidgetTreeControl = ":frame._planord_XTreeWidget";
    var obj_TreeWidget = findObject(sWidgetTreeControl);
    var obj_TreeRootItem=obj_TreeWidget.invisibleRootItem();
    var iNumberOfRootItems = obj_TreeRootItem.childCount();
    if(iNumberOfRootItems>0)
    {
        if(iNumberOfRootItems==5)
        {
            
            obj_TreeTopLevelItem = obj_TreeRootItem.child(0);
            if(obj_TreeTopLevelItem.text(4)=="DTRUCK1" && obj_TreeTopLevelItem.text(1)=="T/O" && obj_TreeTopLevelItem.text(9)=="100.00" && obj_TreeTopLevelItem.text(8)==getForwardDate(3) && obj_TreeTopLevelItem.text(7)==getForwardDate(0))
                test.pass("Expected Planned Order generated");
            else 
                test.fail("Incorrect Planned Order generated");
            
            
            obj_TreeTopLevelItem = obj_TreeRootItem.child(1);
            if(obj_TreeTopLevelItem.text(4)=="DTRUCK1" && obj_TreeTopLevelItem.text(1)=="T/O" && obj_TreeTopLevelItem.text(9)=="200.00" && obj_TreeTopLevelItem.text(8)==getForwardDate(3) && obj_TreeTopLevelItem.text(7)==getForwardDate(0))
                test.pass("Expected Planned Order generated");
            else 
                test.fail("Incorrect Planned Order generated");
            
            
            obj_TreeTopLevelItem = obj_TreeRootItem.child(1);
            if(obj_TreeTopLevelItem.text(4)=="DTRUCK1" && obj_TreeTopLevelItem.text(1)=="W/O" && obj_TreeTopLevelItem.text(9)=="300.00" && obj_TreeTopLevelItem.text(8)==getForwardDate(3) && obj_TreeTopLevelItem.text(7)==getForwardDate(0))
                test.pass("Expected Planned Order generated");
            else 
                test.fail("Incorrect Planned Order generated");

            
            
            obj_TreeTopLevelItem = obj_TreeRootItem.child(2);
            if(obj_TreeTopLevelItem.text(4)=="TSUB1" && obj_TreeTopLevelItem.text(1)=="P/O")
                test.pass("Expected Planned Order generated");
            else 
                test.fail("Incorrect Planned Order generated");

            obj_TreeTopLevelItem = obj_TreeRootItem.child(3);
            if(obj_TreeTopLevelItem.text(4)=="TBOX1" && obj_TreeTopLevelItem.text(1)=="W/O")
                test.pass("Expected Planned Order generated");
            else 
                test.fail("Incorrect Planned Order generated");

            
        }        
        else test.fail("Incorrect Planned Order generated");
        
    }        
    else test.fail("No Planned Order generated");   
    waitForObject(":Planned Orders by Planner Code.Close_QPushButton");
    clickButton(":Planned Orders by Planner Code.Close_QPushButton");

    
    
    
}//END MAIN