function main()
{
    //-----declarations------
    source(findFile("scripts","functions.js"));
    
    loginAppl("CONFIGURE");
    
    waitForObject(":Registration Key.Yes_QPushButton");
    clickButton(":Registration Key.Yes_QPushButton");
  
    DelAllWO();
    DelAllSO();
    DelAllPO();
    
    
    QOHZero("TBOX1");
    
    MRP("+999");
    MPS("+999");
    DelPlanOrdrs();
    
    //--------View Planned Orders-----
    try
    {
        waitForObjectItem(":xTuple ERP:*_QMenuBar", "Schedule");
        activateItem(":xTuple ERP:*_QMenuBar", "Schedule");
        waitForObjectItem(":xTuple ERP:*.Schedule_QMenu", "Reports");
        activateItem(":xTuple ERP:*.Schedule_QMenu", "Reports");
        waitForObjectItem(":xTuple ERP:*.Reports_QMenu", "Planned Orders...");
        activateItem(":xTuple ERP:*.Reports_QMenu", "Planned Orders...");
        waitForObject(":Planned Orders.Query_QToolButton");
        clickButton(":Planned Orders.Query_QToolButton"); 
        waitForObject(":_list_XTreeWidget_10");
        if((findObject(":_list_XTreeWidget_10").topLevelItemCount)==0)
            test.pass("No Planned Order generated");
        else test.fail("Planned Order generated");
        waitForObject(":Planned Orders.Close_QToolButton");
        clickButton(":Planned Orders.Close_QToolButton");
    }
    catch(e)
    {
        test.fail("Error in viewing planned orders" + e);
    }
    
    //---Update site: WH1-----
    try
    {
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
    }
    catch(e)
    {
        test.fail("Error in updating site WH1" + e);
    }
    
    
    //---Update site: WH2-----
    try
    {
        waitForObject(":List Sites._warehouse_XTreeWidget");
        doubleClickItem(":List Sites._warehouse_XTreeWidget", "WH2", 0, 0, 0, Qt.LeftButton);
        waitForObject(":_optionsGroup.Shipping Site_QCheckBox");
        clickButton(":_optionsGroup.Shipping Site_QCheckBox");
        waitForObject(":_planGroup._sequence_XSpinBox");
        findObject(":_planGroup._sequence_XSpinBox").clear();
        type(":_planGroup._sequence_XSpinBox", "20");
        waitForObject(":List Sites.qt_tabwidget_tabbar_QTabBar");
        clickTab(":List Sites.qt_tabwidget_tabbar_QTabBar", "Site Locations");
        waitForObject(":_locationsTab.Enforce ARBL Naming Convention_QGroupBox");
        if(!findObject(":_locationsTab.Enforce ARBL Naming Convention_QGroupBox").checked)
            type(":_locationsTab.Enforce ARBL Naming Convention_QGroupBox"," ");
        waitForObject(":Enforce ARBL Naming Convention.Allow Alpha Characters_QCheckBox");
        clickButton(":Enforce ARBL Naming Convention.Allow Alpha Characters_QCheckBox");
        waitForObject(":Enforce ARBL Naming Convention.Allow Alpha Characters_QCheckBox_2");
        clickButton(":Enforce ARBL Naming Convention.Allow Alpha Characters_QCheckBox_2");
        waitForObject(":Enforce ARBL Naming Convention.Allow Alpha Characters_QCheckBox_3");
        clickButton(":Enforce ARBL Naming Convention.Allow Alpha Characters_QCheckBox_3");
        waitForObject(":Enforce ARBL Naming Convention.Allow Alpha Characters_QCheckBox_4");
        clickButton(":Enforce ARBL Naming Convention.Allow Alpha Characters_QCheckBox_4");
        waitForObject(":Enforce ARBL Naming Convention._aisleSize_QSpinBox");
        findObject(":Enforce ARBL Naming Convention._aisleSize_QSpinBox").clear();
        type(":Enforce ARBL Naming Convention._aisleSize_QSpinBox", "2");
        waitForObject(":Enforce ARBL Naming Convention._rackSize_QSpinBox");
        findObject(":Enforce ARBL Naming Convention._rackSize_QSpinBox").clear();
        type(":Enforce ARBL Naming Convention._rackSize_QSpinBox", "2");
        waitForObject(":Enforce ARBL Naming Convention._binSize_QSpinBox");
        findObject(":Enforce ARBL Naming Convention._binSize_QSpinBox").clear();
        type(":Enforce ARBL Naming Convention._binSize_QSpinBox", "2");
        waitForObject(":Enforce ARBL Naming Convention._locationSize_QSpinBox");
        findObject(":Enforce ARBL Naming Convention._locationSize_QSpinBox").clear();
        type(":Enforce ARBL Naming Convention._locationSize_QSpinBox", "2");
        waitForObject(":Save_QPushButton");
        clickButton(":Save_QPushButton");
        test.log("Warehouse WH2 updated");    
    }
    catch(e)
    {
        test.fail("Error in updating site WH2" + e);
    }
    
    //---Create new Site: WH3----
    try
    {
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
        waitForObject(":_accountGroup_QLabel");
        sendEvent("QMouseEvent", ":_accountGroup_QLabel", QEvent.MouseButtonPress, 15, 8, Qt.LeftButton, 0);
        waitForObjectItem(":_QMenu", "List...");
        activateItem(":_QMenu", "List...");
        waitForObject(":_listTab_XTreeWidget_7");
        doubleClickItem(":_listTab_XTreeWidget_7","1950",10,10,0,Qt.LeftButton);
        waitForObject(":_numberGroup._bolNumber_XLineEdit");
        type(":_numberGroup._bolNumber_XLineEdit", "1000");
        waitForObject(":_numberGroup._countTagNumber_XLineEdit");
        type(":_numberGroup._countTagNumber_XLineEdit", "1000");
        waitForObject(":List Sites.qt_tabwidget_tabbar_QTabBar");
        clickTab(":List Sites.qt_tabwidget_tabbar_QTabBar", "Site Locations");
        waitForObject(":_locationsTab.Enforce ARBL Naming Convention_QGroupBox");
        if(!findObject(":_locationsTab.Enforce ARBL Naming Convention_QGroupBox").checked)
            type(":_locationsTab.Enforce ARBL Naming Convention_QGroupBox"," ");
        waitForObject(":Enforce ARBL Naming Convention.Allow Alpha Characters_QCheckBox");
        clickButton(":Enforce ARBL Naming Convention.Allow Alpha Characters_QCheckBox");
        waitForObject(":Enforce ARBL Naming Convention.Allow Alpha Characters_QCheckBox_2");
        clickButton(":Enforce ARBL Naming Convention.Allow Alpha Characters_QCheckBox_2");
        waitForObject(":Enforce ARBL Naming Convention.Allow Alpha Characters_QCheckBox_3");
        clickButton(":Enforce ARBL Naming Convention.Allow Alpha Characters_QCheckBox_3");
        waitForObject(":Enforce ARBL Naming Convention.Allow Alpha Characters_QCheckBox_4");
        clickButton(":Enforce ARBL Naming Convention.Allow Alpha Characters_QCheckBox_4");
        waitForObject(":Enforce ARBL Naming Convention._aisleSize_QSpinBox");
        findObject(":Enforce ARBL Naming Convention._aisleSize_QSpinBox").clear();
        type(":Enforce ARBL Naming Convention._aisleSize_QSpinBox", "2");
        waitForObject(":Enforce ARBL Naming Convention._rackSize_QSpinBox");
        findObject(":Enforce ARBL Naming Convention._rackSize_QSpinBox").clear();
        type(":Enforce ARBL Naming Convention._rackSize_QSpinBox", "2");
        waitForObject(":Enforce ARBL Naming Convention._binSize_QSpinBox");
        findObject(":Enforce ARBL Naming Convention._binSize_QSpinBox").clear();
        type(":Enforce ARBL Naming Convention._binSize_QSpinBox", "2");
        waitForObject(":Enforce ARBL Naming Convention._locationSize_QSpinBox");
        findObject(":Enforce ARBL Naming Convention._locationSize_QSpinBox").clear();
        type(":Enforce ARBL Naming Convention._locationSize_QSpinBox", "2");
        waitForObject(":Save_QPushButton");
        clickButton(":Save_QPushButton");
        
        waitForObject(":List Sites.Close_QPushButton");
        clickButton(":List Sites.Close_QPushButton");
        test.log("Warehouse WH3 created");
    }
    catch(e)
    {
        test.fail("Error in creating new site WH3" + e);
    }
    
    
    //-------Create new Planner Code: DRP-----
    try
    {
        waitForObjectItem(":xTuple ERP:*_QMenuBar", "Schedule");
        activateItem(":xTuple ERP:*_QMenuBar", "Schedule");
        waitForObjectItem(":xTuple ERP:*.Schedule_QMenu", "Setup...");
        activateItem(":xTuple ERP:*.Schedule_QMenu", "Setup...");
        waitForObject(":Master Information.Planner Codes_QModelIndex");
        mouseClick(":Master Information.Planner Codes_QModelIndex", 42, 4, 0, Qt.LeftButton);
        waitForObject(":_stack.New_QPushButton");
        clickButton(":_stack.New_QPushButton");
        waitForObject(":_code_XLineEdit_3");
        type(":_code_XLineEdit_3", "DRP");
        waitForObject(":_description_XLineEdit_3");
        mouseClick(":_description_XLineEdit_3", 151, 9, 0, Qt.LeftButton);
        waitForObject(":_description_XLineEdit_3");
        type(":_description_XLineEdit_3", "DRP");
        waitForObject(":_stack.Automatically Explode Planned Orders_QCheckBox");
        clickButton(":_stack.Automatically Explode Planned Orders_QCheckBox");
        waitForObject(":_explosionGroup.Multiple Level Explosion_QRadioButton_2");
        clickButton(":_explosionGroup.Multiple Level Explosion_QRadioButton_2");
        waitForObject(":_stack.Save_QPushButton");
        clickButton(":_stack.Save_QPushButton");
        waitForObject(":Setup.Save_QPushButton");
        clickButton(":Setup.Save_QPushButton");
        test.log("New Planner Code created: DRP");
    }
    catch(e)
    {
        test.fail("Error in creating new planner code" + e);
    }
    
    //----------Copy YTRUCK1 to DTRUCK2-------
    try
    {
        waitForObjectItem(":xTuple ERP:*_QMenuBar", "Products");
        activateItem(":xTuple ERP:*_QMenuBar", "Products");
        waitForObjectItem(":xTuple ERP:*.Products_QMenu", "Item");
        activateItem(":xTuple ERP:*.Products_QMenu", "Item");
        waitForObjectItem(":xTuple ERP:*.Item_QMenu", "List...");
        activateItem(":xTuple ERP:*.Item_QMenu", "List...");
        waitForObject(":Items.Query_QToolButton");
        clickButton(":Items.Query_QToolButton");
        waitForObject(":_list_XTreeWidget_7");
        openItemContextMenu(":_list_XTreeWidget_7","YTRUCK1",5,5, Qt.LeftButton);
        waitForObjectItem(":xTuple ERP:*._menu_QMenu", "Copy...");
        activateItem(":xTuple ERP:*._menu_QMenu", "Copy...");
        waitForObject(":_targetItemNumber_XLineEdit_2");
        type(":_targetItemNumber_XLineEdit_2", "DTRUCK2");
        waitForObject(":Items.Copy_QPushButton");
        clickButton(":Items.Copy_QPushButton");
        waitForObject(":Items.Yes_QPushButton");
        clickButton(":Items.Yes_QPushButton");
        waitForObject(":Items.Site can purchase this Item_QGroupBox");
        type(":Items.Site can purchase this Item_QGroupBox", " ");
        waitForObject(":Items.Site can manufacture this Item_QGroupBox");
        type(":Items.Site can manufacture this Item_QGroupBox"," ");
        waitForObjectItem(":_warehouse_WComboBox_6", "WH1");
        clickItem(":_warehouse_WComboBox_6", "WH1", 0, 0, 1, Qt.LeftButton);
        waitForObjectItem(":_plannerCode_XComboBox_3", "MRP-MRP Items");
        clickItem(":_plannerCode_XComboBox_3", "MRP-MRP Items", 41, 5, 1, Qt.LeftButton);
        waitForObjectItem(":_costcat_XComboBox_2", "DISTRIBUTION-Distribution - WH2");
        clickItem(":_costcat_XComboBox_2", "DISTRIBUTION-Distribution - WH2", 48, 7, 1, Qt.LeftButton);
        waitForObject(":Items.qt_tabwidget_tabbar_QTabBar");
        clickTab(":Items.qt_tabwidget_tabbar_QTabBar", "Planning");
        
        waitForObject(":_planningTab.Enforce Order Parameters_QGroupBox_3");
        type(":_planningTab.Enforce Order Parameters_QGroupBox_3"," ");
        waitForObject(":Scheduling._planningType_XComboBox_3");
        if(findObject(":Scheduling._planningType_XComboBox_3").currentText!="MRP")
            clickItem(":Scheduling._planningType_XComboBox_3", "MRP", 0, 0, 1, Qt.LeftButton);
        
        waitForObject(":Scheduling.qt_spinbox_lineedit_QLineEdit_6");
        findObject(":Scheduling.qt_spinbox_lineedit_QLineEdit_6").clear();
        type(":Scheduling.qt_spinbox_lineedit_QLineEdit_6", "7");
        waitForObject(":Scheduling.qt_spinbox_lineedit_QLineEdit_7");
        findObject(":Scheduling.qt_spinbox_lineedit_QLineEdit_7").clear();
        type(":Scheduling.qt_spinbox_lineedit_QLineEdit_7", "3");
        waitForObject(":Scheduling.First Group_QCheckBox_3");
        clickButton(":Scheduling.First Group_QCheckBox_3");
        waitForObject(":Items.Save_QPushButton");
        clickButton(":Items.Save_QPushButton");
        waitForObject(":Items.Cancel_QPushButton");
        clickButton(":Items.Cancel_QPushButton");
        waitForObject(":Items.Close_QToolButton");
        clickButton(":Items.Close_QToolButton");
        test.log("New Item created: DTRUCK2");
    }
    catch(e)
    {
        test.fail("Error in creating item DTRUCK2" + e);
    }
    
    //-------Create Item Sites for DTRUCK2 at WH2 -----
    try
    {
        waitForObjectItem(":xTuple ERP:*_QMenuBar", "Inventory");
        activateItem(":xTuple ERP:*_QMenuBar", "Inventory");
        waitForObjectItem(":xTuple ERP:*.Inventory_QMenu", "Item Site");
        activateItem(":xTuple ERP:*.Inventory_QMenu", "Item Site");
        waitForObjectItem(":_QMenu", "List...");
        activateItem(":_QMenu", "List...");
        waitForObject(":Item Sites.More_QToolButton");
        clickButton(":Item Sites.More_QToolButton");
        waitForObject(":_filterGroup.xcomboBox1_XComboBox");
        clickItem(":_filterGroup.xcomboBox1_XComboBox","Site", 10, 10, 0, Qt.LeftButton);
        waitForObject(":_filterGroup.widget1_WComboBox");
        clickItem(":_filterGroup.widget1_WComboBox","WH1", 10, 10, 0, Qt.LeftButton);
        waitForObject(":_filterGroup.+_QToolButton");
        clickButton(":_filterGroup.+_QToolButton");
        waitForObject(":_filterGroup.xcomboBox2_XComboBox");
        clickItem(":_filterGroup.xcomboBox2_XComboBox","Item", 10, 10, 0, Qt.LeftButton);
        waitForObject(":_filterGroup.VirtualClusterLineEdit_ItemLineEdit");
        type(":_filterGroup.VirtualClusterLineEdit_ItemLineEdit", "DTRUCK2");
        nativeType("<Tab>");
        snooze(2);
        
        waitForObject(":Item Sites.Query_QToolButton");
        clickButton(":Item Sites.Query_QToolButton");
        waitForObject(":_list_XTreeWidget_11");
        clickItem(":_list_XTreeWidget_11", "DTRUCK2", 0, 0, 0, Qt.LeftButton);
        openItemContextMenu(":_list_XTreeWidget_11", "DTRUCK2", 0, 0, 0);
        waitForObjectItem(":xTuple ERP:*._menu_QMenu", "Copy...");
        activateItem(":xTuple ERP:*._menu_QMenu", "Copy...");
        waitForObject(":_warehouse_WComboBox_8");
        clickItem(":_warehouse_WComboBox_8","WH2",10,10,0,Qt.LeftButton);
        waitForObject(":Item Sites.Sold from this Site_QGroupBox");
        if(!findObject(":Item Sites.Sold from this Site_QGroupBox").checked)
            type(":Item Sites.Sold from this Site_QGroupBox"," ");
        waitForObject(":Item Sites.Site can manufacture this Item_QGroupBox");
        if(findObject(":Item Sites.Site can manufacture this Item_QGroupBox").checked)
            type(":Item Sites.Site can manufacture this Item_QGroupBox"," ");
        waitForObject(":Item Sites.Site can purchase this Item_QGroupBox");
        if(findObject(":Item Sites.Site can purchase this Item_QGroupBox").checked)
            type(":Item Sites.Site can purchase this Item_QGroupBox"," ");
        waitForObject(":Control._controlMethod_XComboBox_2");
        clickItem(":Control._controlMethod_XComboBox_2","Regular",10,10,0,Qt.LeftButton);
        waitForObject(":_plannerCode_XComboBox_4");
        clickItem(":_plannerCode_XComboBox_4","DRP-DRP",10,10,0,Qt.LeftButton);
        waitForObject(":_costcat_XComboBox_3");
        clickItem(":_costcat_XComboBox_3","DISTRIBUTION-Distribution - WH2",10,10,0,Qt.LeftButton);
        waitForObject(":_plannerCode_XComboBox_4");
        clickItem(":_plannerCode_XComboBox_4","DRP-DRP",10,10,0,Qt.LeftButton);
        
        waitForObject(":Item Sites.qt_tabwidget_tabbar_QTabBar");
        clickTab(":Item Sites.qt_tabwidget_tabbar_QTabBar", "Planning");
        waitForObject(":Scheduling._planningType_XComboBox_4");
        clickItem(":Scheduling._planningType_XComboBox_4","MRP",10,10,0,Qt.LeftButton);
        waitForObject(":_planningTab.Enforce Order Parameters_QGroupBox_4");
        if(!findObject(":_planningTab.Enforce Order Parameters_QGroupBox_4").checked)
            type(":_planningTab.Enforce Order Parameters_QGroupBox_4"," ");
        
        waitForObject(":_reorderLevel_XLineEdit_4");
        findObject(":_reorderLevel_XLineEdit_4").clear();
        type(":_reorderLevel_XLineEdit_4", "0");
        findObject(":_orderUpToQty_XLineEdit_4").clear();
        type(":_orderUpToQty_XLineEdit_4", "0");
        findObject(":_minimumOrder_XLineEdit_4").clear();
        type(":_minimumOrder_XLineEdit_4", "0");
        findObject(":_maximumOrder_XLineEdit_4").clear();
        type(":_maximumOrder_XLineEdit_4", "0");
        findObject(":_orderMultiple_XLineEdit_4").clear();
        type(":_orderMultiple_XLineEdit_4", "0");
        findObject(":Scheduling._safetyStock_XLineEdit_4").clear();
        type(":Scheduling._safetyStock_XLineEdit_4", "0");
        findObject(":Scheduling.qt_spinbox_lineedit_QLineEdit_9").clear();
        type(":Scheduling.qt_spinbox_lineedit_QLineEdit_9", "3");
        
        waitForObject(":Scheduling.First Group_QCheckBox_4");
        if(!findObject(":Scheduling.First Group_QCheckBox_4").checked)
            type(":Scheduling.First Group_QCheckBox_4"," ");
        waitForObject(":Scheduling.Create Planned Transfer Orders_QGroupBox_2");
        if(!findObject(":Scheduling.Create Planned Transfer Orders_QGroupBox_2").checked)
            type(":Scheduling.Create Planned Transfer Orders_QGroupBox_2"," ");
        waitForObject(":Create Planned Transfer Orders._suppliedFromSite_WComboBox_2");
        clickItem(":Create Planned Transfer Orders._suppliedFromSite_WComboBox_2","WH1",10,10,0,Qt.LeftButton);
        waitForObject(":Item Sites.Save_QPushButton");
        clickButton(":Item Sites.Save_QPushButton");
        
        
        //-------Create Item Site for DTRUCK2 at WH3-----
        
        waitForObject(":Item Sites.Query_QToolButton");
        clickButton(":Item Sites.Query_QToolButton");
        
        
        waitForObject(":_list_XTreeWidget_11");
        clickItem(":_list_XTreeWidget_11", "DTRUCK2", 0, 0, 0, Qt.LeftButton);
        openItemContextMenu(":_list_XTreeWidget_11", "DTRUCK2", 0, 0, 0);
        waitForObjectItem(":xTuple ERP:*._menu_QMenu", "Copy...");
        activateItem(":xTuple ERP:*._menu_QMenu", "Copy...");
        waitForObject(":_warehouse_WComboBox_8");
        clickItem(":_warehouse_WComboBox_8","WH3",10,10,0,Qt.LeftButton);
        waitForObject(":Item Sites.Sold from this Site_QGroupBox");
        if(!findObject(":Item Sites.Sold from this Site_QGroupBox").checked)
            type(":Item Sites.Sold from this Site_QGroupBox"," ");
        waitForObject(":Item Sites.Site can manufacture this Item_QGroupBox");
        if(findObject(":Item Sites.Site can manufacture this Item_QGroupBox").checked)
            type(":Item Sites.Site can manufacture this Item_QGroupBox"," ");
        waitForObject(":Item Sites.Site can purchase this Item_QGroupBox");
        if(findObject(":Item Sites.Site can purchase this Item_QGroupBox").checked)
            type(":Item Sites.Site can purchase this Item_QGroupBox"," ");
        waitForObject(":Control._controlMethod_XComboBox_2");
        clickItem(":Control._controlMethod_XComboBox_2","Regular",10,10,0,Qt.LeftButton);
        waitForObject(":_plannerCode_XComboBox_4");
        clickItem(":_plannerCode_XComboBox_4","DRP-DRP",10,10,0,Qt.LeftButton);
        waitForObject(":_costcat_XComboBox_3");
        clickItem(":_costcat_XComboBox_3","DISTRIBUTION-Distribution - WH2",10,10,0,Qt.LeftButton);
        waitForObject(":_plannerCode_XComboBox_4");
        clickItem(":_plannerCode_XComboBox_4","DRP-DRP",10,10,0,Qt.LeftButton);
        
        waitForObject(":Item Sites.qt_tabwidget_tabbar_QTabBar");
        clickTab(":Item Sites.qt_tabwidget_tabbar_QTabBar", "Planning");
        waitForObject(":Scheduling._planningType_XComboBox_4");
        clickItem(":Scheduling._planningType_XComboBox_4","MRP",10,10,0,Qt.LeftButton);
        waitForObject(":_planningTab.Enforce Order Parameters_QGroupBox_4");
        if(!findObject(":_planningTab.Enforce Order Parameters_QGroupBox_4").checked)
            type(":_planningTab.Enforce Order Parameters_QGroupBox_4"," ");
        
        waitForObject(":_reorderLevel_XLineEdit_4");
        findObject(":_reorderLevel_XLineEdit_4").clear();
        type(":_reorderLevel_XLineEdit_4", "0");
        findObject(":_orderUpToQty_XLineEdit_4").clear();
        type(":_orderUpToQty_XLineEdit_4", "0");
        findObject(":_minimumOrder_XLineEdit_4").clear();
        type(":_minimumOrder_XLineEdit_4", "0");
        findObject(":_maximumOrder_XLineEdit_4").clear();
        type(":_maximumOrder_XLineEdit_4", "0");
        findObject(":_orderMultiple_XLineEdit_4").clear();
        type(":_orderMultiple_XLineEdit_4", "0");
        findObject(":Scheduling._safetyStock_XLineEdit_4").clear();
        type(":Scheduling._safetyStock_XLineEdit_4", "0");
        findObject(":Scheduling.qt_spinbox_lineedit_QLineEdit_9").clear();
        type(":Scheduling.qt_spinbox_lineedit_QLineEdit_9", "3");
        
        waitForObject(":Scheduling.First Group_QCheckBox_4");
        if(!findObject(":Scheduling.First Group_QCheckBox_4").checked)
            type(":Scheduling.First Group_QCheckBox_4"," ");
        waitForObject(":Scheduling.Create Planned Transfer Orders_QGroupBox_2");
        if(!findObject(":Scheduling.Create Planned Transfer Orders_QGroupBox_2").checked)
            type(":Scheduling.Create Planned Transfer Orders_QGroupBox_2"," ");
        waitForObject(":Create Planned Transfer Orders._suppliedFromSite_WComboBox_2");
        clickItem(":Create Planned Transfer Orders._suppliedFromSite_WComboBox_2","WH1",10,10,0,Qt.LeftButton);
        waitForObject(":Item Sites.Save_QPushButton");
        clickButton(":Item Sites.Save_QPushButton");
        
        waitForObject(":Item Sites.Close_QToolButton");
        clickButton(":Item Sites.Close_QToolButton");
    }
    catch(e)
    {
        test.fail("Error in creating Item Sites for DTRUCK2" + e);
    }
    
    
    //DRP NO DEMAND / REORDER POINT / SAFETY STOCK TEST
    test.log("DRP NO DEMAND / REORDER POINT / SAFETY STOCK TEST");
    
    MRP("+99");
    
    //--------View Planned Orders-----
    try
    {
        waitForObjectItem(":xTuple ERP:*_QMenuBar", "Schedule");
        activateItem(":xTuple ERP:*_QMenuBar", "Schedule");
        waitForObjectItem(":xTuple ERP:*.Schedule_QMenu", "Reports");
        activateItem(":xTuple ERP:*.Schedule_QMenu", "Reports");
        waitForObjectItem(":xTuple ERP:*.Reports_QMenu", "Planned Orders...");
        activateItem(":xTuple ERP:*.Reports_QMenu", "Planned Orders...");
        waitForObject(":Planned Orders.Query_QToolButton");
        clickButton(":Planned Orders.Query_QToolButton"); 
        
        waitForObject(":_list_XTreeWidget_10");
        if((findObject(":_list_XTreeWidget_10").topLevelItemCount)==0)
            test.pass("No Planned Order generated");
        else test.fail("Planned Order generated");
        waitForObject(":Planned Orders.Close_QToolButton");
        clickButton(":Planned Orders.Close_QToolButton");
    }
    catch(e)
    {
        test.fail("Error in viewing planned orders" + e);
    }
    
    
    //--------DRP REORDER POINT TEST1--------------
    test.log("DRP REORDER POINT TEST1"); 
    //----Setup Item site------
    try
    {
        waitForObjectItem(":xTuple ERP:*_QMenuBar", "Inventory");
        activateItem(":xTuple ERP:*_QMenuBar", "Inventory");
        waitForObjectItem(":xTuple ERP:*.Inventory_QMenu", "Item Site");
        activateItem(":xTuple ERP:*.Inventory_QMenu", "Item Site");
        waitForObjectItem(":_QMenu", "List...");
        activateItem(":_QMenu", "List...");
        waitForObject(":Item Sites.More_QToolButton");
        clickButton(":Item Sites.More_QToolButton");
        waitForObject(":_filterGroup.xcomboBox1_XComboBox");
        clickItem(":_filterGroup.xcomboBox1_XComboBox","Site", 10, 10, 0, Qt.LeftButton);
        waitForObject(":_filterGroup.widget1_WComboBox");
        clickItem(":_filterGroup.widget1_WComboBox","WH1", 10, 10, 0, Qt.LeftButton);
        
        waitForObject(":Item Sites.Query_QToolButton");
        clickButton(":Item Sites.Query_QToolButton");
        waitForObject(":_list_XTreeWidget_11");
        doubleClickItem(":_list_XTreeWidget_11", "DTRUCK2", 0, 0, 0, Qt.LeftButton);       
        
        waitForObject(":Item Sites.qt_tabwidget_tabbar_QTabBar");
        clickTab(":Item Sites.qt_tabwidget_tabbar_QTabBar", "Planning");  
        
        waitForObject(":_planningTab.Enforce Order Parameters_QGroupBox_4");
        if(!findObject(":_planningTab.Enforce Order Parameters_QGroupBox_4").checked)
            type(":_planningTab.Enforce Order Parameters_QGroupBox_4"," ");        
        
        waitForObject(":_reorderLevel_XLineEdit_4");
        findObject(":_reorderLevel_XLineEdit_4").clear();
        type(":_reorderLevel_XLineEdit_4", "0");
        findObject(":_orderUpToQty_XLineEdit_4").clear();
        type(":_orderUpToQty_XLineEdit_4", "0");
        findObject(":_minimumOrder_XLineEdit_4").clear();
        type(":_minimumOrder_XLineEdit_4", "0");
        findObject(":_maximumOrder_XLineEdit_4").clear();
        type(":_maximumOrder_XLineEdit_4", "0");
        findObject(":_orderMultiple_XLineEdit_4").clear();
        type(":_orderMultiple_XLineEdit_4", "0");
        findObject(":Scheduling._safetyStock_XLineEdit_4").clear();
        type(":Scheduling._safetyStock_XLineEdit_4", "0");
        findObject(":Scheduling.qt_spinbox_lineedit_QLineEdit_8").clear();
        type(":Scheduling.qt_spinbox_lineedit_QLineEdit_8", "7");
        findObject(":Scheduling.qt_spinbox_lineedit_QLineEdit_9").clear();
        type(":Scheduling.qt_spinbox_lineedit_QLineEdit_9", "3");
        waitForObject(":Scheduling.First Group_QCheckBox_4");
        if(!findObject(":Scheduling.First Group_QCheckBox_4").checked)
            clickButton(":Scheduling.First Group_QCheckBox_4");
        waitForObject(":Item Sites.Save_QPushButton");
        clickButton(":Item Sites.Save_QPushButton");
        waitForObject(":Item Sites.Close_QToolButton");
        clickButton(":Item Sites.Close_QToolButton");
        test.log("Item Site setup for: DTRUCK2");
        
        
        
        waitForObjectItem(":xTuple ERP:*_QMenuBar", "Inventory");
        activateItem(":xTuple ERP:*_QMenuBar", "Inventory");
        waitForObjectItem(":xTuple ERP:*.Inventory_QMenu", "Item Site");
        activateItem(":xTuple ERP:*.Inventory_QMenu", "Item Site");
        waitForObjectItem(":_QMenu", "List...");
        activateItem(":_QMenu", "List...");
        waitForObject(":Item Sites.More_QToolButton");
        clickButton(":Item Sites.More_QToolButton");
        waitForObject(":_filterGroup.xcomboBox1_XComboBox");
        clickItem(":_filterGroup.xcomboBox1_XComboBox","Site", 10, 10, 0, Qt.LeftButton);
        waitForObject(":_filterGroup.widget1_WComboBox");
        clickItem(":_filterGroup.widget1_WComboBox","WH2", 10, 10, 0, Qt.LeftButton);
        
        waitForObject(":Item Sites.Query_QToolButton");
        clickButton(":Item Sites.Query_QToolButton");
        waitForObject(":_list_XTreeWidget_11");
        doubleClickItem(":_list_XTreeWidget_11", "DTRUCK2", 0, 0, 0, Qt.LeftButton);       
        
        waitForObject(":Item Sites.qt_tabwidget_tabbar_QTabBar");
        clickTab(":Item Sites.qt_tabwidget_tabbar_QTabBar", "Planning");  
        
        waitForObject(":_planningTab.Enforce Order Parameters_QGroupBox_4");
        if(!findObject(":_planningTab.Enforce Order Parameters_QGroupBox_4").checked)
            type(":_planningTab.Enforce Order Parameters_QGroupBox_4"," ");        
        
        waitForObject(":_reorderLevel_XLineEdit_4");
        findObject(":_reorderLevel_XLineEdit_4").clear();
        type(":_reorderLevel_XLineEdit_4", "100");
        findObject(":_orderUpToQty_XLineEdit_4").clear();
        type(":_orderUpToQty_XLineEdit_4", "0");
        findObject(":_minimumOrder_XLineEdit_4").clear();
        type(":_minimumOrder_XLineEdit_4", "0");
        findObject(":_maximumOrder_XLineEdit_4").clear();
        type(":_maximumOrder_XLineEdit_4", "0");
        findObject(":_orderMultiple_XLineEdit_4").clear();
        type(":_orderMultiple_XLineEdit_4", "0");
        findObject(":Scheduling._safetyStock_XLineEdit_4").clear();
        type(":Scheduling._safetyStock_XLineEdit_4", "0");
        findObject(":Scheduling.qt_spinbox_lineedit_QLineEdit_8").clear();
        type(":Scheduling.qt_spinbox_lineedit_QLineEdit_8", "7");
        findObject(":Scheduling.qt_spinbox_lineedit_QLineEdit_9").clear();
        type(":Scheduling.qt_spinbox_lineedit_QLineEdit_9", "3");
        waitForObject(":Scheduling.First Group_QCheckBox_4");
        if(!findObject(":Scheduling.First Group_QCheckBox_4").checked)
            clickButton(":Scheduling.First Group_QCheckBox_4");
        waitForObject(":Item Sites.Save_QPushButton");
        clickButton(":Item Sites.Save_QPushButton");
        waitForObject(":Item Sites.Close_QToolButton");
        clickButton(":Item Sites.Close_QToolButton");
        test.log("Item Site setup for: DTRUCK2");
        
        
        waitForObjectItem(":xTuple ERP:*_QMenuBar", "Inventory");
        activateItem(":xTuple ERP:*_QMenuBar", "Inventory");
        waitForObjectItem(":xTuple ERP:*.Inventory_QMenu", "Item Site");
        activateItem(":xTuple ERP:*.Inventory_QMenu", "Item Site");
        waitForObjectItem(":_QMenu", "List...");
        activateItem(":_QMenu", "List...");
        waitForObject(":Item Sites.More_QToolButton");
        clickButton(":Item Sites.More_QToolButton");
        waitForObject(":_filterGroup.xcomboBox1_XComboBox");
        clickItem(":_filterGroup.xcomboBox1_XComboBox","Site", 10, 10, 0, Qt.LeftButton);
        waitForObject(":_filterGroup.widget1_WComboBox");
        clickItem(":_filterGroup.widget1_WComboBox","WH3", 10, 10, 0, Qt.LeftButton);
        
        waitForObject(":Item Sites.Query_QToolButton");
        clickButton(":Item Sites.Query_QToolButton");
        waitForObject(":_list_XTreeWidget_11");
        doubleClickItem(":_list_XTreeWidget_11", "DTRUCK2", 0, 0, 0, Qt.LeftButton);       
        
        waitForObject(":Item Sites.qt_tabwidget_tabbar_QTabBar");
        clickTab(":Item Sites.qt_tabwidget_tabbar_QTabBar", "Planning");  
        
        waitForObject(":_planningTab.Enforce Order Parameters_QGroupBox_4");
        if(!findObject(":_planningTab.Enforce Order Parameters_QGroupBox_4").checked)
            type(":_planningTab.Enforce Order Parameters_QGroupBox_4"," ");        
        
        waitForObject(":_reorderLevel_XLineEdit_4");
        findObject(":_reorderLevel_XLineEdit_4").clear();
        type(":_reorderLevel_XLineEdit_4", "0");
        findObject(":_orderUpToQty_XLineEdit_4").clear();
        type(":_orderUpToQty_XLineEdit_4", "0");
        findObject(":_minimumOrder_XLineEdit_4").clear();
        type(":_minimumOrder_XLineEdit_4", "0");
        findObject(":_maximumOrder_XLineEdit_4").clear();
        type(":_maximumOrder_XLineEdit_4", "0");
        findObject(":_orderMultiple_XLineEdit_4").clear();
        type(":_orderMultiple_XLineEdit_4", "0");
        findObject(":Scheduling._safetyStock_XLineEdit_4").clear();
        type(":Scheduling._safetyStock_XLineEdit_4", "0");
        findObject(":Scheduling.qt_spinbox_lineedit_QLineEdit_8").clear();
        type(":Scheduling.qt_spinbox_lineedit_QLineEdit_8", "7");
        findObject(":Scheduling.qt_spinbox_lineedit_QLineEdit_9").clear();
        type(":Scheduling.qt_spinbox_lineedit_QLineEdit_9", "3");
        waitForObject(":Scheduling.First Group_QCheckBox_4");
        if(!findObject(":Scheduling.First Group_QCheckBox_4").checked)
            clickButton(":Scheduling.First Group_QCheckBox_4");
        waitForObject(":Item Sites.Save_QPushButton");
        clickButton(":Item Sites.Save_QPushButton");
        waitForObject(":Item Sites.Close_QToolButton");
        clickButton(":Item Sites.Close_QToolButton");
        test.log("Item Site setup for: DTRUCK2");
    }
    catch(e)
    {
        test.fail("Error in setting up Item Site of DTRUCK2 " + e);
    }
    
    
    MRP("+99");
    
    //------Verify generated Planned Orders-----
    try
    {
        waitForObjectItem(":xTuple ERP:*_QMenuBar", "Schedule");
        activateItem(":xTuple ERP:*_QMenuBar", "Schedule");
        waitForObjectItem(":xTuple ERP:*.Schedule_QMenu", "Reports");
        activateItem(":xTuple ERP:*.Schedule_QMenu", "Reports");
        waitForObjectItem(":xTuple ERP:*.Reports_QMenu", "Planned Orders...");
        activateItem(":xTuple ERP:*.Reports_QMenu", "Planned Orders...");
        waitForObject(":Planned Orders.Query_QToolButton");
        clickButton(":Planned Orders.Query_QToolButton"); 
        waitForObject(":Order #_HeaderViewItem");
        mouseClick(":Order #_HeaderViewItem", 10, 10, 0, Qt.LeftButton);
        if(findObject(":_planord.Col1_QModelIndex").text> findObject(":_planord.Col2_QModelIndex").text)
            mouseClick(":Order #_HeaderViewItem", 10, 10, 0, Qt.LeftButton);
        
        waitForObject(":_list_XTreeWidget_10");
        var sWidgetTreeControl = ":_list_XTreeWidget_10";
        var obj_TreeWidget = findObject(sWidgetTreeControl);
        var obj_TreeRootItem=obj_TreeWidget.invisibleRootItem();
        var iNumberOfRootItems = obj_TreeRootItem.childCount();
        if(iNumberOfRootItems>0)
        {
            if(iNumberOfRootItems==4)
            {
                
                obj_TreeTopLevelItem = obj_TreeRootItem.child(0);
                if(obj_TreeTopLevelItem.text(4)=="DTRUCK2" && obj_TreeTopLevelItem.text(1)=="T/O" && obj_TreeTopLevelItem.text(9)=="100.00" && obj_TreeTopLevelItem.text(8)==getForwardDate(3) && obj_TreeTopLevelItem.text(7)==getForwardDate(0))
                    test.pass("Expected Planned Order generated");
                else 
                    test.fail("Incorrect Planned Order generated");
                
                
                obj_TreeTopLevelItem = obj_TreeRootItem.child(1);
                if(obj_TreeTopLevelItem.text(4)=="DTRUCK2" && obj_TreeTopLevelItem.text(1)=="W/O" && obj_TreeTopLevelItem.text(9)=="100.00" && obj_TreeTopLevelItem.text(8)==getForwardDate(3) && obj_TreeTopLevelItem.text(7)==getForwardDate(0))
                    test.pass("Expected Planned Order generated");
                else 
                    test.fail("Incorrect Planned Order generated");
                
                obj_TreeTopLevelItem = obj_TreeRootItem.child(2);
                if(obj_TreeTopLevelItem.text(4)=="TSUB1" && obj_TreeTopLevelItem.text(1)=="W/O")
                    test.pass("Expected Planned Order generated");
                else 
                    test.fail("Incorrect Planned Order generated");
                
                obj_TreeTopLevelItem = obj_TreeRootItem.child(3);
                if(obj_TreeTopLevelItem.text(4)=="TBOX1" && obj_TreeTopLevelItem.text(1)=="P/O")
                    test.pass("Expected Planned Order generated");
                else 
                    test.fail("Incorrect Planned Order generated");
                
                
            }        
            else test.fail("Incorrect Planned Order generated");
            
        }        
        else test.fail("No Planned Order generated");   
        waitForObject(":Planned Orders.Close_QToolButton");
        clickButton(":Planned Orders.Close_QToolButton");
    }
    catch(e)
    {
        test.fail("Error in viewing planned orders" + e);
    }
    
    
    //DRP REORDER POINT TEST 2
    test.log("DRP REORDER POINT TEST 2");
    DelPlanOrdrs();
    QOHZeroWh("DTRUCK2","WH1");
    QOHZeroWh("DTRUCK2","WH2");
    QOHZeroWh("DTRUCK2","WH3");
    
    //----Setup Item site------
    try
    {
        waitForObjectItem(":xTuple ERP:*_QMenuBar", "Inventory");
        activateItem(":xTuple ERP:*_QMenuBar", "Inventory");
        waitForObjectItem(":xTuple ERP:*.Inventory_QMenu", "Item Site");
        activateItem(":xTuple ERP:*.Inventory_QMenu", "Item Site");
        waitForObjectItem(":_QMenu", "List...");
        activateItem(":_QMenu", "List...");
        waitForObject(":Item Sites.More_QToolButton");
        clickButton(":Item Sites.More_QToolButton");
        waitForObject(":_filterGroup.xcomboBox1_XComboBox");
        clickItem(":_filterGroup.xcomboBox1_XComboBox","Site", 10, 10, 0, Qt.LeftButton);
        waitForObject(":_filterGroup.widget1_WComboBox");
        clickItem(":_filterGroup.widget1_WComboBox","WH1", 10, 10, 0, Qt.LeftButton);
        
        waitForObject(":Item Sites.Query_QToolButton");
        clickButton(":Item Sites.Query_QToolButton");
        waitForObject(":_list_XTreeWidget_11");
        doubleClickItem(":_list_XTreeWidget_11", "DTRUCK2", 0, 0, 0, Qt.LeftButton);       
        
        waitForObject(":Item Sites.qt_tabwidget_tabbar_QTabBar");
        clickTab(":Item Sites.qt_tabwidget_tabbar_QTabBar", "Planning");  
        
        waitForObject(":_planningTab.Enforce Order Parameters_QGroupBox_4");
        if(!findObject(":_planningTab.Enforce Order Parameters_QGroupBox_4").checked)
            type(":_planningTab.Enforce Order Parameters_QGroupBox_4"," ");        
        
        waitForObject(":_reorderLevel_XLineEdit_4");
        findObject(":_reorderLevel_XLineEdit_4").clear();
        type(":_reorderLevel_XLineEdit_4", "0");
        findObject(":_orderUpToQty_XLineEdit_4").clear();
        type(":_orderUpToQty_XLineEdit_4", "0");
        findObject(":_minimumOrder_XLineEdit_4").clear();
        type(":_minimumOrder_XLineEdit_4", "0");
        findObject(":_maximumOrder_XLineEdit_4").clear();
        type(":_maximumOrder_XLineEdit_4", "0");
        findObject(":_orderMultiple_XLineEdit_4").clear();
        type(":_orderMultiple_XLineEdit_4", "1000");
        findObject(":Scheduling._safetyStock_XLineEdit_4").clear();
        type(":Scheduling._safetyStock_XLineEdit_4", "0");
        findObject(":Scheduling.qt_spinbox_lineedit_QLineEdit_8").clear();
        type(":Scheduling.qt_spinbox_lineedit_QLineEdit_8", "7");
        findObject(":Scheduling.qt_spinbox_lineedit_QLineEdit_9").clear();
        type(":Scheduling.qt_spinbox_lineedit_QLineEdit_9", "3");
        waitForObject(":Scheduling.First Group_QCheckBox_4");
        if(!findObject(":Scheduling.First Group_QCheckBox_4").checked)
            clickButton(":Scheduling.First Group_QCheckBox_4");
        waitForObject(":Item Sites.Save_QPushButton");
        clickButton(":Item Sites.Save_QPushButton");
        waitForObject(":Item Sites.Close_QToolButton");
        clickButton(":Item Sites.Close_QToolButton");
        test.log("Item Site setup for: DTRUCK2");
    }
    catch(e)
    {
        test.fail("Error in setting up Item site of DTRUCK2" + e);
    }
    
    MRP("+99");
    
    //------Verify generated Planned Orders-----
    try
    {
        waitForObjectItem(":xTuple ERP:*_QMenuBar", "Schedule");
        activateItem(":xTuple ERP:*_QMenuBar", "Schedule");
        waitForObjectItem(":xTuple ERP:*.Schedule_QMenu", "Reports");
        activateItem(":xTuple ERP:*.Schedule_QMenu", "Reports");
        waitForObjectItem(":xTuple ERP:*.Reports_QMenu", "Planned Orders...");
        activateItem(":xTuple ERP:*.Reports_QMenu", "Planned Orders...");
        waitForObject(":Planned Orders.Query_QToolButton");
        clickButton(":Planned Orders.Query_QToolButton"); 
        waitForObject(":Order #_HeaderViewItem");
        mouseClick(":Order #_HeaderViewItem", 10, 10, 0, Qt.LeftButton);
        if(findObject(":_planord.Col1_QModelIndex").text> findObject(":_planord.Col2_QModelIndex").text)
            mouseClick(":Order #_HeaderViewItem", 10, 10, 0, Qt.LeftButton);
        
        
        waitForObject(":_list_XTreeWidget_10");
        var sWidgetTreeControl = ":_list_XTreeWidget_10";
        var obj_TreeWidget = findObject(sWidgetTreeControl);
        var obj_TreeRootItem=obj_TreeWidget.invisibleRootItem();
        var iNumberOfRootItems = obj_TreeRootItem.childCount();
        if(iNumberOfRootItems>0)
        {
            if(iNumberOfRootItems==4)
            {
                
                obj_TreeTopLevelItem = obj_TreeRootItem.child(0);
                if(obj_TreeTopLevelItem.text(4)=="DTRUCK2" && obj_TreeTopLevelItem.text(1)=="T/O" && obj_TreeTopLevelItem.text(9)=="100.00" && obj_TreeTopLevelItem.text(8)==getForwardDate(3) && obj_TreeTopLevelItem.text(7)==getForwardDate(0))
                    test.pass("Expected Planned Order generated");
                else 
                    test.fail("Incorrect Planned Order generated");
                
                
                obj_TreeTopLevelItem = obj_TreeRootItem.child(1);
                if(obj_TreeTopLevelItem.text(4)=="DTRUCK2" && obj_TreeTopLevelItem.text(1)=="W/O" && obj_TreeTopLevelItem.text(9)=="1,000.00" && obj_TreeTopLevelItem.text(8)==getForwardDate(3) && obj_TreeTopLevelItem.text(7)==getForwardDate(0))
                    test.pass("Expected Planned Order generated");
                else 
                    test.fail("Incorrect Planned Order generated");
                
                
                obj_TreeTopLevelItem = obj_TreeRootItem.child(2);
                if(obj_TreeTopLevelItem.text(4)=="TSUB1" && obj_TreeTopLevelItem.text(1)=="W/O")
                    test.pass("Expected Planned Order generated");
                else 
                    test.fail("Incorrect Planned Order generated");
                
                obj_TreeTopLevelItem = obj_TreeRootItem.child(3);
                if(obj_TreeTopLevelItem.text(4)=="TBOX1" && obj_TreeTopLevelItem.text(1)=="P/O")
                    test.pass("Expected Planned Order generated");
                else 
                    test.fail("Incorrect Planned Order generated");
                
                
            }        
            else test.fail("Incorrect Planned Order generated");
            
        }        
        else test.fail("No Planned Order generated");   
        waitForObject(":Planned Orders.Close_QToolButton");
        clickButton(":Planned Orders.Close_QToolButton");
    }
    catch(e)
    {
        test.fail("Error in viewing planned orders" + e);
    }
    
    
    //DRP REORDER POINT TEST 3
    test.log("DRP REORDER POINT TEST 3");
    
    DelPlanOrdrs();
    
    
    //----Setup Item site------
    try
    {
        waitForObjectItem(":xTuple ERP:*_QMenuBar", "Inventory");
        activateItem(":xTuple ERP:*_QMenuBar", "Inventory");
        waitForObjectItem(":xTuple ERP:*.Inventory_QMenu", "Item Site");
        activateItem(":xTuple ERP:*.Inventory_QMenu", "Item Site");
        waitForObjectItem(":_QMenu", "List...");
        activateItem(":_QMenu", "List...");
        waitForObject(":Item Sites.More_QToolButton");
        clickButton(":Item Sites.More_QToolButton");
        waitForObject(":_filterGroup.xcomboBox1_XComboBox");
        clickItem(":_filterGroup.xcomboBox1_XComboBox","Site", 10, 10, 0, Qt.LeftButton);
        waitForObject(":_filterGroup.widget1_WComboBox");
        clickItem(":_filterGroup.widget1_WComboBox","WH3", 10, 10, 0, Qt.LeftButton);
        
        waitForObject(":Item Sites.Query_QToolButton");
        clickButton(":Item Sites.Query_QToolButton");
        waitForObject(":_list_XTreeWidget_11");
        doubleClickItem(":_list_XTreeWidget_11", "DTRUCK2", 0, 0, 0, Qt.LeftButton);       
        
        waitForObject(":Item Sites.qt_tabwidget_tabbar_QTabBar");
        clickTab(":Item Sites.qt_tabwidget_tabbar_QTabBar", "Planning");  
        
        waitForObject(":_planningTab.Enforce Order Parameters_QGroupBox_4");
        if(!findObject(":_planningTab.Enforce Order Parameters_QGroupBox_4").checked)
            type(":_planningTab.Enforce Order Parameters_QGroupBox_4"," ");        
        
        waitForObject(":_reorderLevel_XLineEdit_4");
        findObject(":_reorderLevel_XLineEdit_4").clear();
        type(":_reorderLevel_XLineEdit_4", "200");
        findObject(":_orderUpToQty_XLineEdit_4").clear();
        type(":_orderUpToQty_XLineEdit_4", "0");
        findObject(":_minimumOrder_XLineEdit_4").clear();
        type(":_minimumOrder_XLineEdit_4", "0");
        findObject(":_maximumOrder_XLineEdit_4").clear();
        type(":_maximumOrder_XLineEdit_4", "0");
        findObject(":_orderMultiple_XLineEdit_4").clear();
        type(":_orderMultiple_XLineEdit_4", "0");
        findObject(":Scheduling._safetyStock_XLineEdit_4").clear();
        type(":Scheduling._safetyStock_XLineEdit_4", "0");
        findObject(":Scheduling.qt_spinbox_lineedit_QLineEdit_8").clear();
        type(":Scheduling.qt_spinbox_lineedit_QLineEdit_8", "7");
        findObject(":Scheduling.qt_spinbox_lineedit_QLineEdit_9").clear();
        type(":Scheduling.qt_spinbox_lineedit_QLineEdit_9", "3");
        waitForObject(":Scheduling.First Group_QCheckBox_4");
        if(!findObject(":Scheduling.First Group_QCheckBox_4").checked)
            clickButton(":Scheduling.First Group_QCheckBox_4");
        waitForObject(":Item Sites.Save_QPushButton");
        clickButton(":Item Sites.Save_QPushButton");
        waitForObject(":Item Sites.Close_QToolButton");
        clickButton(":Item Sites.Close_QToolButton");
        test.log("Item Site setup for: DTRUCK2");
    }
    catch(e)
    {
        test.fail("Error in setting up Item Site of DTRUCK2" + e);
    }
    
    MRP("+99");
    
    //------Verify generated Planned Orders-----
    try
    {
        waitForObjectItem(":xTuple ERP:*_QMenuBar", "Schedule");
        activateItem(":xTuple ERP:*_QMenuBar", "Schedule");
        waitForObjectItem(":xTuple ERP:*.Schedule_QMenu", "Reports");
        activateItem(":xTuple ERP:*.Schedule_QMenu", "Reports");
        waitForObjectItem(":xTuple ERP:*.Reports_QMenu", "Planned Orders...");
        activateItem(":xTuple ERP:*.Reports_QMenu", "Planned Orders...");
        waitForObject(":Planned Orders.Query_QToolButton");
        clickButton(":Planned Orders.Query_QToolButton"); 
        waitForObject(":Order #_HeaderViewItem");
        mouseClick(":Order #_HeaderViewItem", 10, 10, 0, Qt.LeftButton);
        if(findObject(":_planord.Col1_QModelIndex").text> findObject(":_planord.Col2_QModelIndex").text)
            mouseClick(":Order #_HeaderViewItem", 10, 10, 0, Qt.LeftButton);
        
        waitForObject(":_list_XTreeWidget_10");
        var sWidgetTreeControl = ":_list_XTreeWidget_10";
        var obj_TreeWidget = findObject(sWidgetTreeControl);
        var obj_TreeRootItem=obj_TreeWidget.invisibleRootItem();
        var iNumberOfRootItems = obj_TreeRootItem.childCount();
        if(iNumberOfRootItems>0)
        {
            if(iNumberOfRootItems==5)
            {
                
                obj_TreeTopLevelItem = obj_TreeRootItem.child(0);
                if(obj_TreeTopLevelItem.text(4)=="DTRUCK2" && obj_TreeTopLevelItem.text(1)=="T/O" && obj_TreeTopLevelItem.text(9)=="100.00" && obj_TreeTopLevelItem.text(8)==getForwardDate(3) && obj_TreeTopLevelItem.text(7)==getForwardDate(0))
                    test.pass("Expected Planned Order generated");
                else 
                    test.fail("Incorrect Planned Order generated");
                
                
                obj_TreeTopLevelItem = obj_TreeRootItem.child(1);
                if(obj_TreeTopLevelItem.text(4)=="DTRUCK2" && obj_TreeTopLevelItem.text(1)=="T/O" && obj_TreeTopLevelItem.text(9)=="200.00" && obj_TreeTopLevelItem.text(8)==getForwardDate(3) && obj_TreeTopLevelItem.text(7)==getForwardDate(0))
                    test.pass("Expected Planned Order generated");
                else 
                    test.fail("Incorrect Planned Order generated");
                
                
                obj_TreeTopLevelItem = obj_TreeRootItem.child(2);
                if(obj_TreeTopLevelItem.text(4)=="DTRUCK2" && obj_TreeTopLevelItem.text(1)=="W/O" && obj_TreeTopLevelItem.text(9)=="1,000.00" && obj_TreeTopLevelItem.text(8)==getForwardDate(3) && obj_TreeTopLevelItem.text(7)==getForwardDate(0))
                    test.pass("Expected Planned Order generated");
                else 
                    test.fail("Incorrect Planned Order generated");
                
                
                
                obj_TreeTopLevelItem = obj_TreeRootItem.child(3);
                if(obj_TreeTopLevelItem.text(4)=="TSUB1" && obj_TreeTopLevelItem.text(1)=="W/O")
                    test.pass("Expected Planned Order generated");
                else 
                    test.fail("Incorrect Planned Order generated");
                
                obj_TreeTopLevelItem = obj_TreeRootItem.child(4);
                if(obj_TreeTopLevelItem.text(4)=="TBOX1" && obj_TreeTopLevelItem.text(1)=="P/O")
                    test.pass("Expected Planned Order generated");
                else 
                    test.fail("Incorrect Planned Order generated");
                
                
            }        
            else test.fail("Incorrect Planned Order generated");
            
        }        
        else test.fail("No Planned Order generated");   
        waitForObject(":Planned Orders.Close_QToolButton");
        clickButton(":Planned Orders.Close_QToolButton");
    }
    catch(e)
    {
        test.fail("Error in viewing planned orders" + e);
    }
    
    
    //DRP REORDER POINT TEST MULTIPLE DESTINATION AGGREGATION TEST
    test.log("DRP REORDER POINT TEST MULTIPLE DESTINATION AGGREGATION TEST");
    
    DelPlanOrdrs();
    
    //----Setup Item site------
    try
    {
        waitForObjectItem(":xTuple ERP:*_QMenuBar", "Inventory");
        activateItem(":xTuple ERP:*_QMenuBar", "Inventory");
        waitForObjectItem(":xTuple ERP:*.Inventory_QMenu", "Item Site");
        activateItem(":xTuple ERP:*.Inventory_QMenu", "Item Site");
        waitForObjectItem(":_QMenu", "List...");
        activateItem(":_QMenu", "List...");
        waitForObject(":Item Sites.More_QToolButton");
        clickButton(":Item Sites.More_QToolButton");
        waitForObject(":_filterGroup.xcomboBox1_XComboBox");
        clickItem(":_filterGroup.xcomboBox1_XComboBox","Site", 10, 10, 0, Qt.LeftButton);
        waitForObject(":_filterGroup.widget1_WComboBox");
        clickItem(":_filterGroup.widget1_WComboBox","WH1", 10, 10, 0, Qt.LeftButton);
        
        waitForObject(":Item Sites.Query_QToolButton");
        clickButton(":Item Sites.Query_QToolButton");
        waitForObject(":_list_XTreeWidget_11");
        doubleClickItem(":_list_XTreeWidget_11", "DTRUCK2", 0, 0, 0, Qt.LeftButton);       
        
        waitForObject(":Item Sites.qt_tabwidget_tabbar_QTabBar");
        clickTab(":Item Sites.qt_tabwidget_tabbar_QTabBar", "Planning");  
        
        waitForObject(":_planningTab.Enforce Order Parameters_QGroupBox_4");
        if(!findObject(":_planningTab.Enforce Order Parameters_QGroupBox_4").checked)
            type(":_planningTab.Enforce Order Parameters_QGroupBox_4"," ");        
        
        waitForObject(":_reorderLevel_XLineEdit_4");
        findObject(":_reorderLevel_XLineEdit_4").clear();
        type(":_reorderLevel_XLineEdit_4", "0");
        findObject(":_orderUpToQty_XLineEdit_4").clear();
        type(":_orderUpToQty_XLineEdit_4", "0");
        findObject(":_minimumOrder_XLineEdit_4").clear();
        type(":_minimumOrder_XLineEdit_4", "0");
        findObject(":_maximumOrder_XLineEdit_4").clear();
        type(":_maximumOrder_XLineEdit_4", "0");
        findObject(":_orderMultiple_XLineEdit_4").clear();
        type(":_orderMultiple_XLineEdit_4", "0");
        findObject(":Scheduling._safetyStock_XLineEdit_4").clear();
        type(":Scheduling._safetyStock_XLineEdit_4", "0");
        findObject(":Scheduling.qt_spinbox_lineedit_QLineEdit_8").clear();
        type(":Scheduling.qt_spinbox_lineedit_QLineEdit_8", "7");
        findObject(":Scheduling.qt_spinbox_lineedit_QLineEdit_9").clear();
        type(":Scheduling.qt_spinbox_lineedit_QLineEdit_9", "3");
        waitForObject(":Scheduling.First Group_QCheckBox_4");
        if(!findObject(":Scheduling.First Group_QCheckBox_4").checked)
            clickButton(":Scheduling.First Group_QCheckBox_4");
        waitForObject(":Item Sites.Save_QPushButton");
        clickButton(":Item Sites.Save_QPushButton");
        waitForObject(":Item Sites.Close_QToolButton");
        clickButton(":Item Sites.Close_QToolButton");
        test.log("Item Site setup for: DTRUCK2");
    }
    catch(e)
    {
        test.fail("Error in setting up Item Site of DTRUCK2" + e);
    }
    
    MRP("+99");
    
    //------Verify generated Planned Orders-----
    try
    {
        waitForObjectItem(":xTuple ERP:*_QMenuBar", "Schedule");
        activateItem(":xTuple ERP:*_QMenuBar", "Schedule");
        waitForObjectItem(":xTuple ERP:*.Schedule_QMenu", "Reports");
        activateItem(":xTuple ERP:*.Schedule_QMenu", "Reports");
        waitForObjectItem(":xTuple ERP:*.Reports_QMenu", "Planned Orders...");
        activateItem(":xTuple ERP:*.Reports_QMenu", "Planned Orders...");
        waitForObject(":Planned Orders.Query_QToolButton");
        clickButton(":Planned Orders.Query_QToolButton"); 
        waitForObject(":Order #_HeaderViewItem");
        mouseClick(":Order #_HeaderViewItem", 10, 10, 0, Qt.LeftButton);
        if(findObject(":_planord.Col1_QModelIndex").text> findObject(":_planord.Col2_QModelIndex").text)
            mouseClick(":Order #_HeaderViewItem", 10, 10, 0, Qt.LeftButton);
        waitForObject(":_list_XTreeWidget_10");
        var sWidgetTreeControl = ":_list_XTreeWidget_10";
        var obj_TreeWidget = findObject(sWidgetTreeControl);
        var obj_TreeRootItem=obj_TreeWidget.invisibleRootItem();
        var iNumberOfRootItems = obj_TreeRootItem.childCount();
        if(iNumberOfRootItems>0)
        {
            if(iNumberOfRootItems==5)
            {
                
                obj_TreeTopLevelItem = obj_TreeRootItem.child(0);
                if(obj_TreeTopLevelItem.text(4)=="DTRUCK2" && obj_TreeTopLevelItem.text(1)=="T/O" && obj_TreeTopLevelItem.text(9)=="100.00" && obj_TreeTopLevelItem.text(8)==getForwardDate(3) && obj_TreeTopLevelItem.text(7)==getForwardDate(0))
                    test.pass("Expected Planned Order generated");
                else 
                    test.fail("Incorrect Planned Order generated");
                
                
                obj_TreeTopLevelItem = obj_TreeRootItem.child(1);
                if(obj_TreeTopLevelItem.text(4)=="DTRUCK2" && obj_TreeTopLevelItem.text(1)=="T/O" && obj_TreeTopLevelItem.text(9)=="200.00" && obj_TreeTopLevelItem.text(8)==getForwardDate(3) && obj_TreeTopLevelItem.text(7)==getForwardDate(0))
                    test.pass("Expected Planned Order generated");
                else 
                    test.fail("Incorrect Planned Order generated");
                
                
                obj_TreeTopLevelItem = obj_TreeRootItem.child(2);
                if(obj_TreeTopLevelItem.text(4)=="DTRUCK2" && obj_TreeTopLevelItem.text(1)=="W/O" && obj_TreeTopLevelItem.text(9)=="300.00" && obj_TreeTopLevelItem.text(8)==getForwardDate(3) && obj_TreeTopLevelItem.text(7)==getForwardDate(0))
                    test.pass("Expected Planned Order generated");
                else 
                    test.fail("Incorrect Planned Order generated");
                
                
                
                obj_TreeTopLevelItem = obj_TreeRootItem.child(3);
                if(obj_TreeTopLevelItem.text(4)=="TSUB1" && obj_TreeTopLevelItem.text(1)=="W/O")
                    test.pass("Expected Planned Order generated");
                else 
                    test.fail("Incorrect Planned Order generated");
                
                obj_TreeTopLevelItem = obj_TreeRootItem.child(4);
                if(obj_TreeTopLevelItem.text(4)=="TBOX1" && obj_TreeTopLevelItem.text(1)=="P/O")
                    test.pass("Expected Planned Order generated");
                else 
                    test.fail("Incorrect Planned Order generated");
                
                
            }        
            else test.fail("Incorrect Planned Order generated");
            
        }        
        else test.fail("No Planned Order generated");   
        waitForObject(":Planned Orders.Close_QToolButton");
        clickButton(":Planned Orders.Close_QToolButton");
    }
    catch(e)
    {
        test.fail("Error in viewing planned orders" + e);
    }
    
    //DRP QOH NETTING TEST
    test.log("DRP QOH NETTING TEST");
    
    DelPlanOrdrs();
    UpdateQOHWh("DTRUCK2",50,"WH2");
    UpdateQOHWh("DTRUCK2",50,"WH3");
    
    
    //----Setup Item site------
    try
    {
        waitForObjectItem(":xTuple ERP:*_QMenuBar", "Inventory");
        activateItem(":xTuple ERP:*_QMenuBar", "Inventory");
        waitForObjectItem(":xTuple ERP:*.Inventory_QMenu", "Item Site");
        activateItem(":xTuple ERP:*.Inventory_QMenu", "Item Site");
        waitForObjectItem(":_QMenu", "List...");
        activateItem(":_QMenu", "List...");
        waitForObject(":Item Sites.More_QToolButton");
        clickButton(":Item Sites.More_QToolButton");
        waitForObject(":_filterGroup.xcomboBox1_XComboBox");
        clickItem(":_filterGroup.xcomboBox1_XComboBox","Site", 10, 10, 0, Qt.LeftButton);
        waitForObject(":_filterGroup.widget1_WComboBox");
        clickItem(":_filterGroup.widget1_WComboBox","WH1", 10, 10, 0, Qt.LeftButton);
        
        waitForObject(":Item Sites.Query_QToolButton");
        clickButton(":Item Sites.Query_QToolButton");
        waitForObject(":_list_XTreeWidget_11");
        doubleClickItem(":_list_XTreeWidget_11", "DTRUCK2", 0, 0, 0, Qt.LeftButton);       
        
        waitForObject(":Item Sites.qt_tabwidget_tabbar_QTabBar");
        clickTab(":Item Sites.qt_tabwidget_tabbar_QTabBar", "Planning");  
        
        waitForObject(":_planningTab.Enforce Order Parameters_QGroupBox_4");
        if(!findObject(":_planningTab.Enforce Order Parameters_QGroupBox_4").checked)
            type(":_planningTab.Enforce Order Parameters_QGroupBox_4"," ");        
        
        waitForObject(":_reorderLevel_XLineEdit_4");
        findObject(":_reorderLevel_XLineEdit_4").clear();
        type(":_reorderLevel_XLineEdit_4", "0");
        findObject(":_orderUpToQty_XLineEdit_4").clear();
        type(":_orderUpToQty_XLineEdit_4", "0");
        findObject(":_minimumOrder_XLineEdit_4").clear();
        type(":_minimumOrder_XLineEdit_4", "0");
        findObject(":_maximumOrder_XLineEdit_4").clear();
        type(":_maximumOrder_XLineEdit_4", "0");
        findObject(":_orderMultiple_XLineEdit_4").clear();
        type(":_orderMultiple_XLineEdit_4", "0");
        findObject(":Scheduling._safetyStock_XLineEdit_4").clear();
        type(":Scheduling._safetyStock_XLineEdit_4", "0");
        findObject(":Scheduling.qt_spinbox_lineedit_QLineEdit_8").clear();
        type(":Scheduling.qt_spinbox_lineedit_QLineEdit_8", "7");
        findObject(":Scheduling.qt_spinbox_lineedit_QLineEdit_9").clear();
        type(":Scheduling.qt_spinbox_lineedit_QLineEdit_9", "3");
        waitForObject(":Scheduling.First Group_QCheckBox_4");
        if(!findObject(":Scheduling.First Group_QCheckBox_4").checked)
            clickButton(":Scheduling.First Group_QCheckBox_4");
        waitForObject(":Item Sites.Save_QPushButton");
        clickButton(":Item Sites.Save_QPushButton");
        waitForObject(":Item Sites.Close_QToolButton");
        clickButton(":Item Sites.Close_QToolButton");
        test.log("Item Site setup for: DTRUCK2");
    }
    catch(e)
    {
        test.fail("Error in setting up Item site of DTRUCK2" + e);
    } 
    
    
    MRP("+99");
    
    //------Verify generated Planned Orders-----
    try
    {
        waitForObjectItem(":xTuple ERP:*_QMenuBar", "Schedule");
        activateItem(":xTuple ERP:*_QMenuBar", "Schedule");
        waitForObjectItem(":xTuple ERP:*.Schedule_QMenu", "Reports");
        activateItem(":xTuple ERP:*.Schedule_QMenu", "Reports");
        waitForObjectItem(":xTuple ERP:*.Reports_QMenu", "Planned Orders...");
        activateItem(":xTuple ERP:*.Reports_QMenu", "Planned Orders...");
        waitForObject(":Planned Orders.Query_QToolButton");
        clickButton(":Planned Orders.Query_QToolButton"); 
        waitForObject(":Order #_HeaderViewItem");
        mouseClick(":Order #_HeaderViewItem", 10, 10, 0, Qt.LeftButton);
        if(findObject(":_planord.Col1_QModelIndex").text> findObject(":_planord.Col2_QModelIndex").text)
            mouseClick(":Order #_HeaderViewItem", 10, 10, 0, Qt.LeftButton);
        
        waitForObject(":_list_XTreeWidget_10");
        var sWidgetTreeControl = ":_list_XTreeWidget_10";
        var obj_TreeWidget = findObject(sWidgetTreeControl);
        var obj_TreeRootItem=obj_TreeWidget.invisibleRootItem();
        var iNumberOfRootItems = obj_TreeRootItem.childCount();
        if(iNumberOfRootItems>0)
        {
            if(iNumberOfRootItems==5)
            {
                
                obj_TreeTopLevelItem = obj_TreeRootItem.child(0);
                if(obj_TreeTopLevelItem.text(4)=="DTRUCK2" && obj_TreeTopLevelItem.text(1)=="T/O" && obj_TreeTopLevelItem.text(9)=="50.00" && obj_TreeTopLevelItem.text(8)==getForwardDate(3) && obj_TreeTopLevelItem.text(7)==getForwardDate(0))
                    test.pass("Expected Planned Order generated");
                else 
                    test.fail("Incorrect Planned Order generated");
                
                
                obj_TreeTopLevelItem = obj_TreeRootItem.child(1);
                if(obj_TreeTopLevelItem.text(4)=="DTRUCK2" && obj_TreeTopLevelItem.text(1)=="T/O" && obj_TreeTopLevelItem.text(9)=="150.00" && obj_TreeTopLevelItem.text(8)==getForwardDate(3) && obj_TreeTopLevelItem.text(7)==getForwardDate(0))
                    test.pass("Expected Planned Order generated");
                else 
                    test.fail("Incorrect Planned Order generated");
                
                
                obj_TreeTopLevelItem = obj_TreeRootItem.child(2);
                if(obj_TreeTopLevelItem.text(4)=="DTRUCK2" && obj_TreeTopLevelItem.text(1)=="W/O" && obj_TreeTopLevelItem.text(9)=="200.00" && obj_TreeTopLevelItem.text(8)==getForwardDate(3) && obj_TreeTopLevelItem.text(7)==getForwardDate(0))
                    test.pass("Expected Planned Order generated");
                else 
                    test.fail("Incorrect Planned Order generated");
                
                
                
                obj_TreeTopLevelItem = obj_TreeRootItem.child(3);
                if(obj_TreeTopLevelItem.text(4)=="TSUB1" && obj_TreeTopLevelItem.text(1)=="W/O")
                    test.pass("Expected Planned Order generated");
                else 
                    test.fail("Incorrect Planned Order generated");
                
                obj_TreeTopLevelItem = obj_TreeRootItem.child(4);
                if(obj_TreeTopLevelItem.text(4)=="TBOX1" && obj_TreeTopLevelItem.text(1)=="P/O")
                    test.pass("Expected Planned Order generated");
                else 
                    test.fail("Incorrect Planned Order generated");
                
                
            }        
            else test.fail("Incorrect Planned Order generated");
            
        }        
        else test.fail("No Planned Order generated");   
        waitForObject(":Planned Orders.Close_QToolButton");
        clickButton(":Planned Orders.Close_QToolButton");
    }
    catch(e)
    {
        test.fail("Error in viewing planned orders" + e);
    }
    
    //DRP S/O DEMAND AGREGATING TEST
    test.log("DRP S/O DEMAND AGREGATING TEST");
    
    DelPlanOrdrs();
    QOHZeroWh("DTRUCK2","WH2");
    QOHZeroWh("DTRUCK2","WH3");
    
    //----Setup Item site------
    try
    {
        waitForObjectItem(":xTuple ERP:*_QMenuBar", "Inventory");
        activateItem(":xTuple ERP:*_QMenuBar", "Inventory");
        waitForObjectItem(":xTuple ERP:*.Inventory_QMenu", "Item Site");
        activateItem(":xTuple ERP:*.Inventory_QMenu", "Item Site");
        waitForObjectItem(":_QMenu", "List...");
        activateItem(":_QMenu", "List...");
        waitForObject(":Item Sites.More_QToolButton");
        clickButton(":Item Sites.More_QToolButton");
        waitForObject(":_filterGroup.xcomboBox1_XComboBox");
        clickItem(":_filterGroup.xcomboBox1_XComboBox","Site", 10, 10, 0, Qt.LeftButton);
        waitForObject(":_filterGroup.widget1_WComboBox");
        clickItem(":_filterGroup.widget1_WComboBox","WH2", 10, 10, 0, Qt.LeftButton);
        
        waitForObject(":Item Sites.Query_QToolButton");
        clickButton(":Item Sites.Query_QToolButton");
        waitForObject(":_list_XTreeWidget_11");
        doubleClickItem(":_list_XTreeWidget_11", "DTRUCK2", 0, 0, 0, Qt.LeftButton);       
        
        waitForObject(":Item Sites.qt_tabwidget_tabbar_QTabBar");
        clickTab(":Item Sites.qt_tabwidget_tabbar_QTabBar", "Planning");  
        
        waitForObject(":_planningTab.Enforce Order Parameters_QGroupBox_4");
        if(!findObject(":_planningTab.Enforce Order Parameters_QGroupBox_4").checked)
            type(":_planningTab.Enforce Order Parameters_QGroupBox_4"," ");        
        
        waitForObject(":_reorderLevel_XLineEdit_4");
        findObject(":_reorderLevel_XLineEdit_4").clear();
        type(":_reorderLevel_XLineEdit_4", "0");
        findObject(":_orderUpToQty_XLineEdit_4").clear();
        type(":_orderUpToQty_XLineEdit_4", "0");
        findObject(":_minimumOrder_XLineEdit_4").clear();
        type(":_minimumOrder_XLineEdit_4", "0");
        findObject(":_maximumOrder_XLineEdit_4").clear();
        type(":_maximumOrder_XLineEdit_4", "0");
        findObject(":_orderMultiple_XLineEdit_4").clear();
        type(":_orderMultiple_XLineEdit_4", "0");
        findObject(":Scheduling._safetyStock_XLineEdit_4").clear();
        type(":Scheduling._safetyStock_XLineEdit_4", "0");
        findObject(":Scheduling.qt_spinbox_lineedit_QLineEdit_8").clear();
        type(":Scheduling.qt_spinbox_lineedit_QLineEdit_8", "7");
        findObject(":Scheduling.qt_spinbox_lineedit_QLineEdit_9").clear();
        type(":Scheduling.qt_spinbox_lineedit_QLineEdit_9", "3");
        waitForObject(":Scheduling.First Group_QCheckBox_4");
        if(!findObject(":Scheduling.First Group_QCheckBox_4").checked)
            clickButton(":Scheduling.First Group_QCheckBox_4");
        waitForObject(":Item Sites.Save_QPushButton");
        clickButton(":Item Sites.Save_QPushButton");
        waitForObject(":Item Sites.Close_QToolButton");
        clickButton(":Item Sites.Close_QToolButton");
        test.log("Item Site setup for: DTRUCK2");
        
    }
    catch(e)
    {
        test.fail("Error in setting up Item site of DTRUCK2" + e);
    } 
    
    //----Setup Item site------
    try
    {
        waitForObjectItem(":xTuple ERP:*_QMenuBar", "Inventory");
        activateItem(":xTuple ERP:*_QMenuBar", "Inventory");
        waitForObjectItem(":xTuple ERP:*.Inventory_QMenu", "Item Site");
        activateItem(":xTuple ERP:*.Inventory_QMenu", "Item Site");
        waitForObjectItem(":_QMenu", "List...");
        activateItem(":_QMenu", "List...");
        waitForObject(":Item Sites.More_QToolButton");
        clickButton(":Item Sites.More_QToolButton");
        waitForObject(":_filterGroup.xcomboBox1_XComboBox");
        clickItem(":_filterGroup.xcomboBox1_XComboBox","Site", 10, 10, 0, Qt.LeftButton);
        waitForObject(":_filterGroup.widget1_WComboBox");
        clickItem(":_filterGroup.widget1_WComboBox","WH3", 10, 10, 0, Qt.LeftButton);
        
        waitForObject(":Item Sites.Query_QToolButton");
        clickButton(":Item Sites.Query_QToolButton");
        waitForObject(":_list_XTreeWidget_11");
        doubleClickItem(":_list_XTreeWidget_11", "DTRUCK2", 0, 0, 0, Qt.LeftButton);       
        
        waitForObject(":Item Sites.qt_tabwidget_tabbar_QTabBar");
        clickTab(":Item Sites.qt_tabwidget_tabbar_QTabBar", "Planning");  
        
        waitForObject(":_planningTab.Enforce Order Parameters_QGroupBox_4");
        if(!findObject(":_planningTab.Enforce Order Parameters_QGroupBox_4").checked)
            type(":_planningTab.Enforce Order Parameters_QGroupBox_4"," ");        
        
        waitForObject(":_reorderLevel_XLineEdit_4");
        findObject(":_reorderLevel_XLineEdit_4").clear();
        type(":_reorderLevel_XLineEdit_4", "0");
        findObject(":_orderUpToQty_XLineEdit_4").clear();
        type(":_orderUpToQty_XLineEdit_4", "0");
        findObject(":_minimumOrder_XLineEdit_4").clear();
        type(":_minimumOrder_XLineEdit_4", "0");
        findObject(":_maximumOrder_XLineEdit_4").clear();
        type(":_maximumOrder_XLineEdit_4", "0");
        findObject(":_orderMultiple_XLineEdit_4").clear();
        type(":_orderMultiple_XLineEdit_4", "0");
        findObject(":Scheduling._safetyStock_XLineEdit_4").clear();
        type(":Scheduling._safetyStock_XLineEdit_4", "0");
        findObject(":Scheduling.qt_spinbox_lineedit_QLineEdit_8").clear();
        type(":Scheduling.qt_spinbox_lineedit_QLineEdit_8", "7");
        findObject(":Scheduling.qt_spinbox_lineedit_QLineEdit_9").clear();
        type(":Scheduling.qt_spinbox_lineedit_QLineEdit_9", "3");
        waitForObject(":Scheduling.First Group_QCheckBox_4");
        if(!findObject(":Scheduling.First Group_QCheckBox_4").checked)
            clickButton(":Scheduling.First Group_QCheckBox_4");
        waitForObject(":Item Sites.Save_QPushButton");
        clickButton(":Item Sites.Save_QPushButton");
        waitForObject(":Item Sites.Close_QToolButton");
        clickButton(":Item Sites.Close_QToolButton");
        test.log("Item Site setup for: DTRUCK2");
    }
    catch(e)
    {
        test.fail("Error in setting up Item site of DTRUCK2" + e);
    }
    
    NewSOWh("DTRUCK2",150,"WH2");
    NewSOWh("DTRUCK2",100,"WH3");
    
    MRP("+99");
    
    //------Verify generated Planned Orders-----
    try
    {
        waitForObjectItem(":xTuple ERP:*_QMenuBar", "Schedule");
        activateItem(":xTuple ERP:*_QMenuBar", "Schedule");
        waitForObjectItem(":xTuple ERP:*.Schedule_QMenu", "Reports");
        activateItem(":xTuple ERP:*.Schedule_QMenu", "Reports");
        waitForObjectItem(":xTuple ERP:*.Reports_QMenu", "Planned Orders...");
        activateItem(":xTuple ERP:*.Reports_QMenu", "Planned Orders...");
        waitForObject(":Planned Orders.Query_QToolButton");
        clickButton(":Planned Orders.Query_QToolButton"); 
        waitForObject(":Order #_HeaderViewItem");
        mouseClick(":Order #_HeaderViewItem", 10, 10, 0, Qt.LeftButton);
        if(findObject(":_planord.Col1_QModelIndex").text> findObject(":_planord.Col2_QModelIndex").text)
            mouseClick(":Order #_HeaderViewItem", 10, 10, 0, Qt.LeftButton);
        
        waitForObject(":_list_XTreeWidget_10");
        var sWidgetTreeControl = ":_list_XTreeWidget_10";
        var obj_TreeWidget = findObject(sWidgetTreeControl);
        var obj_TreeRootItem=obj_TreeWidget.invisibleRootItem();
        var iNumberOfRootItems = obj_TreeRootItem.childCount();
        if(iNumberOfRootItems>0)
        {
            if(iNumberOfRootItems==5)
            {
                
                obj_TreeTopLevelItem = obj_TreeRootItem.child(0);
                if(obj_TreeTopLevelItem.text(4)=="DTRUCK2" && obj_TreeTopLevelItem.text(1)=="T/O" && obj_TreeTopLevelItem.text(9)=="150.00" && obj_TreeTopLevelItem.text(8)==getForwardDate(3) && obj_TreeTopLevelItem.text(7)==getForwardDate(0))
                    test.pass("Expected Planned Order generated");
                else 
                    test.fail("Incorrect Planned Order generated");
                
                
                obj_TreeTopLevelItem = obj_TreeRootItem.child(1);
                if(obj_TreeTopLevelItem.text(4)=="DTRUCK2" && obj_TreeTopLevelItem.text(1)=="T/O" && obj_TreeTopLevelItem.text(9)=="100.00" && obj_TreeTopLevelItem.text(8)==getForwardDate(3) && obj_TreeTopLevelItem.text(7)==getForwardDate(0))
                    test.pass("Expected Planned Order generated");
                else 
                    test.fail("Incorrect Planned Order generated");
                
                
                obj_TreeTopLevelItem = obj_TreeRootItem.child(2);
                if(obj_TreeTopLevelItem.text(4)=="DTRUCK2" && obj_TreeTopLevelItem.text(1)=="W/O" && obj_TreeTopLevelItem.text(9)=="250.00" && obj_TreeTopLevelItem.text(8)==getForwardDate(3) && obj_TreeTopLevelItem.text(7)==getForwardDate(0))
                    test.pass("Expected Planned Order generated");
                else 
                    test.fail("Incorrect Planned Order generated");
                
                
                
                obj_TreeTopLevelItem = obj_TreeRootItem.child(3);
                if(obj_TreeTopLevelItem.text(4)=="TSUB1" && obj_TreeTopLevelItem.text(1)=="W/O")
                    test.pass("Expected Planned Order generated");
                else 
                    test.fail("Incorrect Planned Order generated");
                
                obj_TreeTopLevelItem = obj_TreeRootItem.child(4);
                if(obj_TreeTopLevelItem.text(4)=="TBOX1" && obj_TreeTopLevelItem.text(1)=="P/O")
                    test.pass("Expected Planned Order generated");
                else 
                    test.fail("Incorrect Planned Order generated");
                
                
            }        
            else test.fail("Incorrect Planned Order generated");
            
        }        
        else test.fail("No Planned Order generated");   
        waitForObject(":Planned Orders.Close_QToolButton");
        clickButton(":Planned Orders.Close_QToolButton");
    }
    catch(e)
    {
        test.fail("Error in viewing planned orders" + e);
    }
    
    
    //DRP S/O DEMAND P/O SUPPLY NETTING TEST
    test.log("DRP S/O DEMAND P/O SUPPLY NETTING TEST");
    
    DelPlanOrdrs();
    DelAllSO();
    DelAllPO();
    
    NewSOWh("DTRUCK2",150,"WH2");
    NewSOWh("DTRUCK2",100,"WH3");
    
    newPOWh("DTRUCK2",25,"0","WH2");
    
    
    
    //----Setup Item site------
    try
    {
        waitForObjectItem(":xTuple ERP:*_QMenuBar", "Inventory");
        activateItem(":xTuple ERP:*_QMenuBar", "Inventory");
        waitForObjectItem(":xTuple ERP:*.Inventory_QMenu", "Item Site");
        activateItem(":xTuple ERP:*.Inventory_QMenu", "Item Site");
        waitForObjectItem(":_QMenu", "List...");
        activateItem(":_QMenu", "List...");
        waitForObject(":Item Sites.More_QToolButton");
        clickButton(":Item Sites.More_QToolButton");
        waitForObject(":_filterGroup.xcomboBox1_XComboBox");
        clickItem(":_filterGroup.xcomboBox1_XComboBox","Site", 10, 10, 0, Qt.LeftButton);
        waitForObject(":_filterGroup.widget1_WComboBox");
        clickItem(":_filterGroup.widget1_WComboBox","WH2", 10, 10, 0, Qt.LeftButton);
        
        waitForObject(":Item Sites.Query_QToolButton");
        clickButton(":Item Sites.Query_QToolButton");
        waitForObject(":_list_XTreeWidget_11");
        doubleClickItem(":_list_XTreeWidget_11", "DTRUCK2", 0, 0, 0, Qt.LeftButton);       
        waitForObject(":Item Sites.Site can purchase this Item_QGroupBox");
        if(!findObject(":Item Sites.Site can purchase this Item_QGroupBox").checked)
            type(":Item Sites.Site can purchase this Item_QGroupBox"," ");
        waitForObject(":Item Sites.qt_tabwidget_tabbar_QTabBar");
        clickTab(":Item Sites.qt_tabwidget_tabbar_QTabBar", "Planning");  
        
        waitForObject(":_planningTab.Enforce Order Parameters_QGroupBox_4");
        if(!findObject(":_planningTab.Enforce Order Parameters_QGroupBox_4").checked)
            type(":_planningTab.Enforce Order Parameters_QGroupBox_4"," ");        
        
        waitForObject(":_reorderLevel_XLineEdit_4");
        findObject(":_reorderLevel_XLineEdit_4").clear();
        type(":_reorderLevel_XLineEdit_4", "0");
        findObject(":_orderUpToQty_XLineEdit_4").clear();
        type(":_orderUpToQty_XLineEdit_4", "0");
        findObject(":_minimumOrder_XLineEdit_4").clear();
        type(":_minimumOrder_XLineEdit_4", "0");
        findObject(":_maximumOrder_XLineEdit_4").clear();
        type(":_maximumOrder_XLineEdit_4", "0");
        findObject(":_orderMultiple_XLineEdit_4").clear();
        type(":_orderMultiple_XLineEdit_4", "0");
        findObject(":Scheduling._safetyStock_XLineEdit_4").clear();
        type(":Scheduling._safetyStock_XLineEdit_4", "0");
        findObject(":Scheduling.qt_spinbox_lineedit_QLineEdit_8").clear();
        type(":Scheduling.qt_spinbox_lineedit_QLineEdit_8", "7");
        findObject(":Scheduling.qt_spinbox_lineedit_QLineEdit_9").clear();
        type(":Scheduling.qt_spinbox_lineedit_QLineEdit_9", "3");
        waitForObject(":Scheduling.First Group_QCheckBox_4");
        if(!findObject(":Scheduling.First Group_QCheckBox_4").checked)
            clickButton(":Scheduling.First Group_QCheckBox_4");
        waitForObject(":Item Sites.Save_QPushButton");
        clickButton(":Item Sites.Save_QPushButton");
        waitForObject(":Item Sites.Close_QToolButton");
        clickButton(":Item Sites.Close_QToolButton");
        test.log("Item Site setup for: DTRUCK2");
    }
    catch(e)
    {
        test.fail("Error in setting up Item Site of DTRUCK2" + e);
    }
    
    MRP("+99");
    
    //------Verify generated Planned Orders-----
    try
    {
        waitForObjectItem(":xTuple ERP:*_QMenuBar", "Schedule");
        activateItem(":xTuple ERP:*_QMenuBar", "Schedule");
        waitForObjectItem(":xTuple ERP:*.Schedule_QMenu", "Reports");
        activateItem(":xTuple ERP:*.Schedule_QMenu", "Reports");
        waitForObjectItem(":xTuple ERP:*.Reports_QMenu", "Planned Orders...");
        activateItem(":xTuple ERP:*.Reports_QMenu", "Planned Orders...");
        waitForObject(":Planned Orders.Query_QToolButton");
        clickButton(":Planned Orders.Query_QToolButton"); 
        waitForObject(":Order #_HeaderViewItem");
        mouseClick(":Order #_HeaderViewItem", 10, 10, 0, Qt.LeftButton);
        if(findObject(":_planord.Col1_QModelIndex").text> findObject(":_planord.Col2_QModelIndex").text)
            mouseClick(":Order #_HeaderViewItem", 10, 10, 0, Qt.LeftButton);
        
        waitForObject(":_list_XTreeWidget_10");
        var sWidgetTreeControl = ":_list_XTreeWidget_10";
        var obj_TreeWidget = findObject(sWidgetTreeControl);
        var obj_TreeRootItem=obj_TreeWidget.invisibleRootItem();
        var iNumberOfRootItems = obj_TreeRootItem.childCount();
        if(iNumberOfRootItems>0)
        {
            if(iNumberOfRootItems==5)
            {
                
                obj_TreeTopLevelItem = obj_TreeRootItem.child(0);
                if(obj_TreeTopLevelItem.text(4)=="DTRUCK2" && obj_TreeTopLevelItem.text(1)=="T/O" && obj_TreeTopLevelItem.text(9)=="125.00" && obj_TreeTopLevelItem.text(8)==getForwardDate(3) && obj_TreeTopLevelItem.text(7)==getForwardDate(0))
                    test.pass("Expected Planned Order generated");
                else 
                    test.fail("Incorrect Planned Order generated");
                
                
                obj_TreeTopLevelItem = obj_TreeRootItem.child(1);
                if(obj_TreeTopLevelItem.text(4)=="DTRUCK2" && obj_TreeTopLevelItem.text(1)=="T/O" && obj_TreeTopLevelItem.text(9)=="100.00" && obj_TreeTopLevelItem.text(8)==getForwardDate(3) && obj_TreeTopLevelItem.text(7)==getForwardDate(0))
                    test.pass("Expected Planned Order generated");
                else 
                    test.fail("Incorrect Planned Order generated");
                
                
                
                obj_TreeTopLevelItem = obj_TreeRootItem.child(2);
                if(obj_TreeTopLevelItem.text(4)=="DTRUCK2" && obj_TreeTopLevelItem.text(1)=="W/O" && obj_TreeTopLevelItem.text(9)=="225.00" && obj_TreeTopLevelItem.text(8)==getForwardDate(3) && obj_TreeTopLevelItem.text(7)==getForwardDate(0))
                    test.pass("Expected Planned Order generated");
                else 
                    test.fail("Incorrect Planned Order generated");
                
                
                obj_TreeTopLevelItem = obj_TreeRootItem.child(3);
                if(obj_TreeTopLevelItem.text(4)=="TSUB1" && obj_TreeTopLevelItem.text(1)=="W/O")
                    test.pass("Expected Planned Order generated");
                else 
                    test.fail("Incorrect Planned Order generated");
                
                obj_TreeTopLevelItem = obj_TreeRootItem.child(4);
                if(obj_TreeTopLevelItem.text(4)=="TBOX1" && obj_TreeTopLevelItem.text(1)=="P/O")
                    test.pass("Expected Planned Order generated");
                else 
                    test.fail("Incorrect Planned Order generated");
                
                
            }        
            else test.fail("Incorrect Planned Order generated");
            
        }        
        else test.fail("No Planned Order generated");   
        waitForObject(":Planned Orders.Close_QToolButton");
        clickButton(":Planned Orders.Close_QToolButton");    
    }
    catch(e)
    {
        test.fail("Error in viewing planned orders" + e);
    }
    
    //DRP S/O DEMAND P/O AND W/O SUPPLY NETTING TEST
    test.log("DRP S/O DEMAND P/O AND W/O SUPPLY NETTING TEST");
    
    DelPlanOrdrs();
    DelAllSO();
    DelAllWO();
    NewSOWh("DTRUCK2",100,"WH2");
    
    //----Setup Item site for TWHEEL1------
    try
    {
        waitForObjectItem(":xTuple ERP:*_QMenuBar", "Inventory");
        activateItem(":xTuple ERP:*_QMenuBar", "Inventory");
        waitForObjectItem(":xTuple ERP:*.Inventory_QMenu", "Item Site");
        activateItem(":xTuple ERP:*.Inventory_QMenu", "Item Site");
        waitForObjectItem(":_QMenu", "List...");
        activateItem(":_QMenu", "List...");
        waitForObject(":Item Sites.More_QToolButton");
        clickButton(":Item Sites.More_QToolButton");
        waitForObject(":_filterGroup.xcomboBox1_XComboBox");
        clickItem(":_filterGroup.xcomboBox1_XComboBox","Site", 10, 10, 0, Qt.LeftButton);
        waitForObject(":_filterGroup.widget1_WComboBox");
        clickItem(":_filterGroup.widget1_WComboBox","WH1", 10, 10, 0, Qt.LeftButton);
        waitForObject(":_filterGroup.+_QToolButton");
        clickButton(":_filterGroup.+_QToolButton");
        waitForObject(":_filterGroup.xcomboBox2_XComboBox");
        clickItem(":_filterGroup.xcomboBox2_XComboBox","Item", 10, 10, 0, Qt.LeftButton);
        waitForObject(":_filterGroup.VirtualClusterLineEdit_ItemLineEdit");
        type(":_filterGroup.VirtualClusterLineEdit_ItemLineEdit", "TWHEEL1");
        nativeType("<Tab>");
        snooze(2);
        
        waitForObject(":Item Sites.Query_QToolButton");
        clickButton(":Item Sites.Query_QToolButton");
        waitForObject(":_list_XTreeWidget_11");
        clickItem(":_list_XTreeWidget_11", "TWHEEL1", 0, 0, 0, Qt.LeftButton);
        openItemContextMenu(":_list_XTreeWidget_11", "TWHEEL1", 0, 0, 0);
        waitForObjectItem(":xTuple ERP:*._menu_QMenu", "Copy...");
        activateItem(":xTuple ERP:*._menu_QMenu", "Copy...");
        waitForObject(":_warehouse_WComboBox_8");
        clickItem(":_warehouse_WComboBox_8","WH2",10,10,0,Qt.LeftButton);
        waitForObject(":Item Sites.Active_QCheckBox");
        if(!findObject(":Item Sites.Active_QCheckBox").checked)
            clickButton(":Item Sites.Active_QCheckBox");
        waitForObject(":Item Sites.qt_tabwidget_tabbar_QTabBar");
        clickTab(":Item Sites.qt_tabwidget_tabbar_QTabBar", "Planning");
        waitForObject(":Scheduling._planningType_XComboBox_4");
        clickItem(":Scheduling._planningType_XComboBox_4","None",10,10,0,Qt.LeftButton);
        
        waitForObject(":Item Sites.Save_QPushButton");
        clickButton(":Item Sites.Save_QPushButton");
        waitForObject(":Item Sites.Close_QToolButton");
        clickButton(":Item Sites.Close_QToolButton");
        
        test.log("Planning set to NONE for TWHEEL1");
    }
    catch(e)
    {
        test.fail("Error in setting up Item Site of TWHEEl1" + e);
    }
    
    
    //----Setup Item site------
    try
    {
        waitForObjectItem(":xTuple ERP:*_QMenuBar", "Inventory");
        activateItem(":xTuple ERP:*_QMenuBar", "Inventory");
        waitForObjectItem(":xTuple ERP:*.Inventory_QMenu", "Item Site");
        activateItem(":xTuple ERP:*.Inventory_QMenu", "Item Site");
        waitForObjectItem(":_QMenu", "List...");
        activateItem(":_QMenu", "List...");
        waitForObject(":Item Sites.More_QToolButton");
        clickButton(":Item Sites.More_QToolButton");
        waitForObject(":_filterGroup.xcomboBox1_XComboBox");
        clickItem(":_filterGroup.xcomboBox1_XComboBox","Site", 10, 10, 0, Qt.LeftButton);
        waitForObject(":_filterGroup.widget1_WComboBox");
        clickItem(":_filterGroup.widget1_WComboBox","WH2", 10, 10, 0, Qt.LeftButton);
        
        waitForObject(":Item Sites.Query_QToolButton");
        clickButton(":Item Sites.Query_QToolButton");
        waitForObject(":_list_XTreeWidget_11");
        doubleClickItem(":_list_XTreeWidget_11", "DTRUCK2", 0, 0, 0, Qt.LeftButton);       
        waitForObject(":Item Sites.Site can manufacture this Item_QGroupBox");
        if(!findObject(":Item Sites.Site can manufacture this Item_QGroupBox").checked)
            type(":Item Sites.Site can manufacture this Item_QGroupBox"," ");
        waitForObject(":Item Sites.qt_tabwidget_tabbar_QTabBar");
        clickTab(":Item Sites.qt_tabwidget_tabbar_QTabBar", "Planning");  
        
        waitForObject(":_planningTab.Enforce Order Parameters_QGroupBox_4");
        if(!findObject(":_planningTab.Enforce Order Parameters_QGroupBox_4").checked)
            type(":_planningTab.Enforce Order Parameters_QGroupBox_4"," ");        
        
        waitForObject(":_reorderLevel_XLineEdit_4");
        findObject(":_reorderLevel_XLineEdit_4").clear();
        type(":_reorderLevel_XLineEdit_4", "0");
        findObject(":_orderUpToQty_XLineEdit_4").clear();
        type(":_orderUpToQty_XLineEdit_4", "0");
        findObject(":_minimumOrder_XLineEdit_4").clear();
        type(":_minimumOrder_XLineEdit_4", "0");
        findObject(":_maximumOrder_XLineEdit_4").clear();
        type(":_maximumOrder_XLineEdit_4", "0");
        findObject(":_orderMultiple_XLineEdit_4").clear();
        type(":_orderMultiple_XLineEdit_4", "0");
        findObject(":Scheduling._safetyStock_XLineEdit_4").clear();
        type(":Scheduling._safetyStock_XLineEdit_4", "0");
        findObject(":Scheduling.qt_spinbox_lineedit_QLineEdit_8").clear();
        type(":Scheduling.qt_spinbox_lineedit_QLineEdit_8", "7");
        findObject(":Scheduling.qt_spinbox_lineedit_QLineEdit_9").clear();
        type(":Scheduling.qt_spinbox_lineedit_QLineEdit_9", "3");
        waitForObject(":Scheduling.First Group_QCheckBox_4");
        if(!findObject(":Scheduling.First Group_QCheckBox_4").checked)
            clickButton(":Scheduling.First Group_QCheckBox_4");
        waitForObject(":Item Sites.Save_QPushButton");
        clickButton(":Item Sites.Save_QPushButton");
        waitForObject(":Item Sites.Close_QToolButton");
        clickButton(":Item Sites.Close_QToolButton");
        test.log("Item Site setup for: DTRUCK2");
    }
    catch(e)
    {
        test.fail("Error in setting up Item Site of DTRUCK2" + e);
    }
    
    //------Copy Item Sites and set planning to None---
    try
    {
        //------------Item Site for TBODY1---------------
        waitForObjectItem(":xTuple ERP:*_QMenuBar", "Inventory");
        activateItem(":xTuple ERP:*_QMenuBar", "Inventory");
        waitForObjectItem(":xTuple ERP:*.Inventory_QMenu", "Item Site");
        activateItem(":xTuple ERP:*.Inventory_QMenu", "Item Site");
        waitForObjectItem(":_QMenu", "List...");
        activateItem(":_QMenu", "List...");
        waitForObject(":Item Sites.More_QToolButton");
        clickButton(":Item Sites.More_QToolButton");
        waitForObject(":_filterGroup.xcomboBox1_XComboBox");
        clickItem(":_filterGroup.xcomboBox1_XComboBox","Site", 10, 10, 0, Qt.LeftButton);
        waitForObject(":_filterGroup.widget1_WComboBox");
        clickItem(":_filterGroup.widget1_WComboBox","WH1", 10, 10, 0, Qt.LeftButton);
        waitForObject(":_filterGroup.+_QToolButton");
        clickButton(":_filterGroup.+_QToolButton");
        waitForObject(":_filterGroup.xcomboBox2_XComboBox");
        clickItem(":_filterGroup.xcomboBox2_XComboBox","Item", 10, 10, 0, Qt.LeftButton);
        waitForObject(":_filterGroup.VirtualClusterLineEdit_ItemLineEdit");
        type(":_filterGroup.VirtualClusterLineEdit_ItemLineEdit", "TBODY1");
        nativeType("<Tab>");
        snooze(2);
        
        waitForObject(":Item Sites.Query_QToolButton");
        clickButton(":Item Sites.Query_QToolButton");
        waitForObject(":_list_XTreeWidget_11");
        clickItem(":_list_XTreeWidget_11", "TBODY1", 0, 0, 0, Qt.LeftButton);
        openItemContextMenu(":_list_XTreeWidget_11", "TBODY1", 0, 0, 0);
        waitForObjectItem(":xTuple ERP:*._menu_QMenu", "Copy...");
        activateItem(":xTuple ERP:*._menu_QMenu", "Copy...");
        waitForObject(":_warehouse_WComboBox_8");
        clickItem(":_warehouse_WComboBox_8","WH2",10,10,0,Qt.LeftButton);
        
        waitForObject(":Item Sites.qt_tabwidget_tabbar_QTabBar");
        clickTab(":Item Sites.qt_tabwidget_tabbar_QTabBar", "Planning");
        waitForObject(":Scheduling._planningType_XComboBox_4");
        clickItem(":Scheduling._planningType_XComboBox_4","None",10,10,0,Qt.LeftButton);
        
        waitForObject(":Item Sites.Save_QPushButton");
        clickButton(":Item Sites.Save_QPushButton");
        waitForObject(":Item Sites.Close_QToolButton");
        clickButton(":Item Sites.Close_QToolButton");
        
        
        
        //------------Item Site for TSUB1---------------
        waitForObjectItem(":xTuple ERP:*_QMenuBar", "Inventory");
        activateItem(":xTuple ERP:*_QMenuBar", "Inventory");
        waitForObjectItem(":xTuple ERP:*.Inventory_QMenu", "Item Site");
        activateItem(":xTuple ERP:*.Inventory_QMenu", "Item Site");
        waitForObjectItem(":_QMenu", "List...");
        activateItem(":_QMenu", "List...");
        waitForObject(":Item Sites.More_QToolButton");
        clickButton(":Item Sites.More_QToolButton");
        waitForObject(":_filterGroup.xcomboBox1_XComboBox");
        clickItem(":_filterGroup.xcomboBox1_XComboBox","Site", 10, 10, 0, Qt.LeftButton);
        waitForObject(":_filterGroup.widget1_WComboBox");
        clickItem(":_filterGroup.widget1_WComboBox","WH1", 10, 10, 0, Qt.LeftButton);
        waitForObject(":_filterGroup.+_QToolButton");
        clickButton(":_filterGroup.+_QToolButton");
        waitForObject(":_filterGroup.xcomboBox2_XComboBox");
        clickItem(":_filterGroup.xcomboBox2_XComboBox","Item", 10, 10, 0, Qt.LeftButton);
        waitForObject(":_filterGroup.VirtualClusterLineEdit_ItemLineEdit");
        type(":_filterGroup.VirtualClusterLineEdit_ItemLineEdit", "TSUB1");
        nativeType("<Tab>");
        snooze(2);
        
        waitForObject(":Item Sites.Query_QToolButton");
        clickButton(":Item Sites.Query_QToolButton");
        waitForObject(":_list_XTreeWidget_11");
        clickItem(":_list_XTreeWidget_11", "TSUB1", 0, 0, 0, Qt.LeftButton);
        openItemContextMenu(":_list_XTreeWidget_11", "TSUB1", 0, 0, 0);
        waitForObjectItem(":xTuple ERP:*._menu_QMenu", "Copy...");
        activateItem(":xTuple ERP:*._menu_QMenu", "Copy...");
        waitForObject(":_warehouse_WComboBox_8");
        clickItem(":_warehouse_WComboBox_8","WH2",10,10,0,Qt.LeftButton);
        
        waitForObject(":Item Sites.qt_tabwidget_tabbar_QTabBar");
        clickTab(":Item Sites.qt_tabwidget_tabbar_QTabBar", "Planning");
        waitForObject(":Scheduling._planningType_XComboBox_4");
        clickItem(":Scheduling._planningType_XComboBox_4","None",10,10,0,Qt.LeftButton);
        
        waitForObject(":Item Sites.Save_QPushButton");
        clickButton(":Item Sites.Save_QPushButton");
        waitForObject(":Item Sites.Close_QToolButton");
        clickButton(":Item Sites.Close_QToolButton");
        
        //------------Item Site for YPAINT1---------------
        waitForObjectItem(":xTuple ERP:*_QMenuBar", "Inventory");
        activateItem(":xTuple ERP:*_QMenuBar", "Inventory");
        waitForObjectItem(":xTuple ERP:*.Inventory_QMenu", "Item Site");
        activateItem(":xTuple ERP:*.Inventory_QMenu", "Item Site");
        waitForObjectItem(":_QMenu", "List...");
        activateItem(":_QMenu", "List...");
        waitForObject(":Item Sites.More_QToolButton");
        clickButton(":Item Sites.More_QToolButton");
        waitForObject(":_filterGroup.xcomboBox1_XComboBox");
        clickItem(":_filterGroup.xcomboBox1_XComboBox","Site", 10, 10, 0, Qt.LeftButton);
        waitForObject(":_filterGroup.widget1_WComboBox");
        clickItem(":_filterGroup.widget1_WComboBox","WH1", 10, 10, 0, Qt.LeftButton);
        waitForObject(":_filterGroup.+_QToolButton");
        clickButton(":_filterGroup.+_QToolButton");
        waitForObject(":_filterGroup.xcomboBox2_XComboBox");
        clickItem(":_filterGroup.xcomboBox2_XComboBox","Item", 10, 10, 0, Qt.LeftButton);
        waitForObject(":_filterGroup.VirtualClusterLineEdit_ItemLineEdit");
        type(":_filterGroup.VirtualClusterLineEdit_ItemLineEdit", "YPAINT1");
        nativeType("<Tab>");
        snooze(2);
        
        waitForObject(":Item Sites.Query_QToolButton");
        clickButton(":Item Sites.Query_QToolButton");
        waitForObject(":_list_XTreeWidget_11");
        clickItem(":_list_XTreeWidget_11", "YPAINT1", 0, 0, 0, Qt.LeftButton);
        openItemContextMenu(":_list_XTreeWidget_11", "YPAINT1", 0, 0, 0);
        waitForObjectItem(":xTuple ERP:*._menu_QMenu", "Copy...");
        activateItem(":xTuple ERP:*._menu_QMenu", "Copy...");
        waitForObject(":_warehouse_WComboBox_8");
        clickItem(":_warehouse_WComboBox_8","WH2",10,10,0,Qt.LeftButton);
        
        waitForObject(":Item Sites.qt_tabwidget_tabbar_QTabBar");
        clickTab(":Item Sites.qt_tabwidget_tabbar_QTabBar", "Planning");
        waitForObject(":Scheduling._planningType_XComboBox_4");
        clickItem(":Scheduling._planningType_XComboBox_4","None",10,10,0,Qt.LeftButton);
        
        waitForObject(":Item Sites.Save_QPushButton");
        clickButton(":Item Sites.Save_QPushButton");
        waitForObject(":Item Sites.Close_QToolButton");
        clickButton(":Item Sites.Close_QToolButton");
        
        
    }
    catch(e)
    {
        test.fail("Error in Item Sites set up" + e);
    }
    
    NewWOWh("DTRUCK2",33,0,0,"WH2");
    
    MRP("+99");
    
    //------Verify generated Planned Orders-----
    try
    {
        waitForObjectItem(":xTuple ERP:*_QMenuBar", "Schedule");
        activateItem(":xTuple ERP:*_QMenuBar", "Schedule");
        waitForObjectItem(":xTuple ERP:*.Schedule_QMenu", "Reports");
        activateItem(":xTuple ERP:*.Schedule_QMenu", "Reports");
        waitForObjectItem(":xTuple ERP:*.Reports_QMenu", "Planned Orders...");
        activateItem(":xTuple ERP:*.Reports_QMenu", "Planned Orders...");
        waitForObject(":Planned Orders.Query_QToolButton");
        clickButton(":Planned Orders.Query_QToolButton"); 
        waitForObject(":Order #_HeaderViewItem");
        mouseClick(":Order #_HeaderViewItem", 10, 10, 0, Qt.LeftButton);
        if(findObject(":_planord.Col1_QModelIndex").text> findObject(":_planord.Col2_QModelIndex").text)
            mouseClick(":Order #_HeaderViewItem", 10, 10, 0, Qt.LeftButton);
        
        waitForObject(":_list_XTreeWidget_10");
        var sWidgetTreeControl = ":_list_XTreeWidget_10";
        var obj_TreeWidget = findObject(sWidgetTreeControl);
        var obj_TreeRootItem=obj_TreeWidget.invisibleRootItem();
        var iNumberOfRootItems = obj_TreeRootItem.childCount();
        if(iNumberOfRootItems>0)
        {
            if(iNumberOfRootItems==4)
            {
                
                obj_TreeTopLevelItem = obj_TreeRootItem.child(0);
                if(obj_TreeTopLevelItem.text(4)=="DTRUCK2" && obj_TreeTopLevelItem.text(1)=="T/O" && obj_TreeTopLevelItem.text(9)=="42.00" && obj_TreeTopLevelItem.text(8)==getForwardDate(3) && obj_TreeTopLevelItem.text(7)==getForwardDate(0))
                    test.pass("Expected Planned Order generated");
                else 
                    test.fail("Incorrect Planned Order generated");
                
                
                
                
                obj_TreeTopLevelItem = obj_TreeRootItem.child(1);
                if(obj_TreeTopLevelItem.text(4)=="DTRUCK2" && obj_TreeTopLevelItem.text(1)=="W/O" && obj_TreeTopLevelItem.text(9)=="42.00" && obj_TreeTopLevelItem.text(8)==getForwardDate(3) && obj_TreeTopLevelItem.text(7)==getForwardDate(0))
                    test.pass("Expected Planned Order generated");
                else 
                    test.fail("Incorrect Planned Order generated");
                
                
                obj_TreeTopLevelItem = obj_TreeRootItem.child(2);
                if(obj_TreeTopLevelItem.text(4)=="TSUB1" && obj_TreeTopLevelItem.text(1)=="W/O")
                    test.pass("Expected Planned Order generated");
                else 
                    test.fail("Incorrect Planned Order generated");
                
                obj_TreeTopLevelItem = obj_TreeRootItem.child(3);
                if(obj_TreeTopLevelItem.text(4)=="TBOX1" && obj_TreeTopLevelItem.text(1)=="P/O")
                    test.pass("Expected Planned Order generated");
                else 
                    test.fail("Incorrect Planned Order generated");
                
                
            }        
            else test.fail("Incorrect Planned Order generated");
            
        }        
        else test.fail("No Planned Order generated");   
        waitForObject(":Planned Orders.Close_QToolButton");
        clickButton(":Planned Orders.Close_QToolButton");    
    }
    catch(e)
    {
        test.fail("Error in viewing planned orders" + e);
    }    
    
    //DRP MULTILEVEL TEST
    
    test.log("DRP MULTILEVEL TEST");
    
    DelPlanOrdrs();
    DelAllSO();
    
    
    //-------Item site - change supplied from Site----
    try
    {
        waitForObjectItem(":xTuple ERP:*_QMenuBar", "Inventory");
        activateItem(":xTuple ERP:*_QMenuBar", "Inventory");
        waitForObjectItem(":xTuple ERP:*.Inventory_QMenu", "Item Site");
        activateItem(":xTuple ERP:*.Inventory_QMenu", "Item Site");
        waitForObjectItem(":_QMenu", "List...");
        activateItem(":_QMenu", "List...");
        waitForObject(":Item Sites.More_QToolButton");
        clickButton(":Item Sites.More_QToolButton");
        waitForObject(":_filterGroup.xcomboBox1_XComboBox");
        clickItem(":_filterGroup.xcomboBox1_XComboBox","Site", 10, 10, 0, Qt.LeftButton);
        waitForObject(":_filterGroup.widget1_WComboBox");
        clickItem(":_filterGroup.widget1_WComboBox","WH3", 10, 10, 0, Qt.LeftButton);
        
        waitForObject(":Item Sites.Query_QToolButton");
        clickButton(":Item Sites.Query_QToolButton");
        waitForObject(":_list_XTreeWidget_11");
        doubleClickItem(":_list_XTreeWidget_11", "DTRUCK2", 0, 0, 0, Qt.LeftButton);       
        
        waitForObject(":Item Sites.qt_tabwidget_tabbar_QTabBar");
        clickTab(":Item Sites.qt_tabwidget_tabbar_QTabBar", "Planning");  
        
        waitForObject(":_planningTab.Enforce Order Parameters_QGroupBox_4");
        if(!findObject(":_planningTab.Enforce Order Parameters_QGroupBox_4").checked)
            type(":_planningTab.Enforce Order Parameters_QGroupBox_4"," ");        
        
        waitForObject(":_reorderLevel_XLineEdit_4");
        findObject(":_reorderLevel_XLineEdit_4").clear();
        type(":_reorderLevel_XLineEdit_4", "0");
        findObject(":_orderUpToQty_XLineEdit_4").clear();
        type(":_orderUpToQty_XLineEdit_4", "0");
        findObject(":_minimumOrder_XLineEdit_4").clear();
        type(":_minimumOrder_XLineEdit_4", "0");
        findObject(":_maximumOrder_XLineEdit_4").clear();
        type(":_maximumOrder_XLineEdit_4", "0");
        findObject(":_orderMultiple_XLineEdit_4").clear();
        type(":_orderMultiple_XLineEdit_4", "0");
        findObject(":Scheduling._safetyStock_XLineEdit_4").clear();
        type(":Scheduling._safetyStock_XLineEdit_4", "0");
        findObject(":Scheduling.qt_spinbox_lineedit_QLineEdit_8").clear();
        type(":Scheduling.qt_spinbox_lineedit_QLineEdit_8", "7");
        findObject(":Scheduling.qt_spinbox_lineedit_QLineEdit_9").clear();
        type(":Scheduling.qt_spinbox_lineedit_QLineEdit_9", "3");
        waitForObject(":Scheduling.First Group_QCheckBox_4");
        
        waitForObject(":Scheduling.First Group_QCheckBox_4");
        if(!findObject(":Scheduling.First Group_QCheckBox_4").checked)
            type(":Scheduling.First Group_QCheckBox_4"," ");
        waitForObject(":Scheduling.Create Planned Transfer Orders_QGroupBox_2");
        if(!findObject(":Scheduling.Create Planned Transfer Orders_QGroupBox_2").checked)
            type(":Scheduling.Create Planned Transfer Orders_QGroupBox_2"," ");
        waitForObject(":Create Planned Transfer Orders._suppliedFromSite_WComboBox_2");
        clickItem(":Create Planned Transfer Orders._suppliedFromSite_WComboBox_2","WH2",10,10,0,Qt.LeftButton);
        waitForObject(":Item Sites.Save_QPushButton");
        clickButton(":Item Sites.Save_QPushButton");
        
        waitForObject(":Item Sites.Close_QToolButton");
        clickButton(":Item Sites.Close_QToolButton");
    }
    catch(e)
    {
        test.fail("Error in set up of Item sites" + e);
    }
    
    NewSOWh("DTRUCK2",100,"WH3");
    
    
    MRP("+99");
    MRP("+99");
    
    //------Verify generated Planned Orders-----
    try
    {
        waitForObjectItem(":xTuple ERP:*_QMenuBar", "Schedule");
        activateItem(":xTuple ERP:*_QMenuBar", "Schedule");
        waitForObjectItem(":xTuple ERP:*.Schedule_QMenu", "Reports");
        activateItem(":xTuple ERP:*.Schedule_QMenu", "Reports");
        waitForObjectItem(":xTuple ERP:*.Reports_QMenu", "Planned Orders...");
        activateItem(":xTuple ERP:*.Reports_QMenu", "Planned Orders...");
        waitForObject(":Planned Orders.Query_QToolButton");
        clickButton(":Planned Orders.Query_QToolButton"); 
        waitForObject(":Order #_HeaderViewItem");
        mouseClick(":Order #_HeaderViewItem", 10, 10, 0, Qt.LeftButton);
        if(findObject(":_planord.Col1_QModelIndex").text> findObject(":_planord.Col2_QModelIndex").text)
            mouseClick(":Order #_HeaderViewItem", 10, 10, 0, Qt.LeftButton);
        
        waitForObject(":_list_XTreeWidget_10");
        var sWidgetTreeControl = ":_list_XTreeWidget_10";
        var obj_TreeWidget = findObject(sWidgetTreeControl);
        var obj_TreeRootItem=obj_TreeWidget.invisibleRootItem();
        var iNumberOfRootItems = obj_TreeRootItem.childCount();
        if(iNumberOfRootItems>0)
        {
            if(iNumberOfRootItems==5)
            {
                
                obj_TreeTopLevelItem = obj_TreeRootItem.child(0);
                if(obj_TreeTopLevelItem.text(4)=="DTRUCK2" && obj_TreeTopLevelItem.text(1)=="T/O" && obj_TreeTopLevelItem.text(9)=="42.00" && obj_TreeTopLevelItem.text(8)==getForwardDate(3) && obj_TreeTopLevelItem.text(7)==getForwardDate(0))
                    test.pass("Expected Planned Order generated");
                else 
                    test.fail("Incorrect Planned Order generated");
                
                
                obj_TreeTopLevelItem = obj_TreeRootItem.child(1);
                if(obj_TreeTopLevelItem.text(4)=="DTRUCK2" && obj_TreeTopLevelItem.text(1)=="T/O" && obj_TreeTopLevelItem.text(9)=="100.00" && obj_TreeTopLevelItem.text(8)==getForwardDate(3) && obj_TreeTopLevelItem.text(7)==getForwardDate(0))
                    test.pass("Expected Planned Order generated");
                else 
                    test.fail("Incorrect Planned Order generated");
                
                
                
                obj_TreeTopLevelItem = obj_TreeRootItem.child(2);
                if(obj_TreeTopLevelItem.text(4)=="DTRUCK2" && obj_TreeTopLevelItem.text(1)=="W/O" && obj_TreeTopLevelItem.text(9)=="42.00" && obj_TreeTopLevelItem.text(8)==getForwardDate(3) && obj_TreeTopLevelItem.text(7)==getForwardDate(0))
                    test.pass("Expected Planned Order generated");
                else 
                    test.fail("Incorrect Planned Order generated");
                
                
                obj_TreeTopLevelItem = obj_TreeRootItem.child(3);
                if(obj_TreeTopLevelItem.text(4)=="TSUB1" && obj_TreeTopLevelItem.text(1)=="W/O")
                    test.pass("Expected Planned Order generated");
                else 
                    test.fail("Incorrect Planned Order generated");
                
                obj_TreeTopLevelItem = obj_TreeRootItem.child(4);
                if(obj_TreeTopLevelItem.text(4)=="TBOX1" && obj_TreeTopLevelItem.text(1)=="P/O")
                    test.pass("Expected Planned Order generated");
                else 
                    test.fail("Incorrect Planned Order generated");
                
                
            }        
            else test.fail("Incorrect Planned Order generated");
            
        }        
        else test.fail("No Planned Order generated");   
        waitForObject(":Planned Orders.Close_QToolButton");
        clickButton(":Planned Orders.Close_QToolButton");    
    }
    catch(e)
    {
        test.fail("Error in viewing planned orders" + e);
    }
    
    
    
    
}//END MAIN
