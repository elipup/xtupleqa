function main()
{
    

     //-----includes--------
    source(findFile("scripts","functions.js"));
        
    //---login Application--------
    loginAppl("CONFIGURE"); 
    
    //---Variable declaration---
    var sonumber, ponumber, vounumber, invoice, amount;
    
    //---Creation of Items---
    waitForObjectItem(":xTuple ERP:*_QMenuBar_2", "Products");
    activateItem(":xTuple ERP:*_QMenuBar_2", "Products");
    waitForObjectItem(":xTuple ERP:*.Products_QMenu", "Item");
    activateItem(":xTuple ERP:*.Products_QMenu", "Item");
    waitForObjectItem(":xTuple ERP:*.Item_QMenu", "List...");
    activateItem(":xTuple ERP:*.Item_QMenu", "List...");
    
    
    //--- (UC_BPF_CI_01:AF1) Co-Product Item Type---
    waitForObject(":List Items.New_QPushButton");
    clickButton(":List Items.New_QPushButton");
    
    waitForObject(":_itemNumber_XLineEdit");
    type(":_itemNumber_XLineEdit", "zen co-product");
    waitForObject(":_description1_XLineEdit");
    type(":_description1_XLineEdit", "Zen Co-Product Item Type");
    waitForObjectItem(":_itemtype_QComboBox", "Co-Product");
    clickItem(":_itemtype_QComboBox", "Co-Product", 5, 5, 1, Qt.LeftButton);
    waitForObjectItem(":_itemGroup._classcode_XComboBox", "TOYS-COMP-Toy Components");
    clickItem(":_itemGroup._classcode_XComboBox", "TOYS-COMP-Toy Components", 5, 5, 1, Qt.LeftButton);
    waitForObjectItem(":_inventoryUOM_XComboBox", "EA");
    clickItem(":_inventoryUOM_XComboBox", "EA", 5, 5, 1, Qt.LeftButton);
    waitForObjectItem(":_prodcat_XComboBox", "CLASSIC-METAL - Classic Metal Product Line");
    clickItem(":_prodcat_XComboBox", "CLASSIC-METAL - Classic Metal Product Line", 5, 5, 1, Qt.LeftButton);
    waitForObject(":Item is Sold._listprice_XLineEdit");
    type(":Item is Sold._listprice_XLineEdit", "5.66");
    waitForObject(":_prodWeight_XLineEdit");
    type(":_prodWeight_XLineEdit", "2");
    waitForObject(":_packWeight_XLineEdit");
    type(":_packWeight_XLineEdit", "0.5");
    waitForObject(":Item.Save_QPushButton");
    clickButton(":Item.Save_QPushButton");
    
    waitForObject(":Item.Yes_QPushButton");
    clickButton(":Item.Yes_QPushButton");
   
    waitForObjectItem(":_warehouse_WComboBox", "WH1");
    clickItem(":_warehouse_WComboBox", "WH1", 5, 5, 1, Qt.LeftButton);
    waitForObjectItem(":Control._controlMethod_XComboBox", "Regular");
    clickItem(":Control._controlMethod_XComboBox", "Regular", 5, 5, 1, Qt.LeftButton);
    waitForObjectItem(":_plannerCode_XComboBox", "MRP-MRP Items");
    clickItem(":_plannerCode_XComboBox", "MRP-MRP Items", 5, 5, 1, Qt.LeftButton);
    waitForObjectItem(":_costcat_XComboBox", "FINISHED-Finished Product - WH1");
    clickItem(":_costcat_XComboBox", "FINISHED-Finished Product - WH1", 5, 5, 1, Qt.LeftButton);
    
    waitForObject(":Item.Save_QPushButton_2");
    clickButton(":Item.Save_QPushButton_2");
    waitForObject(":Item.Cancel_QPushButton");
    clickButton(":Item.Cancel_QPushButton");
      
    //---(UC_BPF_CI_01:AF1) By-Product Item Type---
    waitForObject(":List Items.New_QPushButton");
    clickButton(":List Items.New_QPushButton");
    
    waitForObject(":_itemNumber_XLineEdit");
    type(":_itemNumber_XLineEdit", "zen by-product");
    waitForObject(":_description1_XLineEdit");
    type(":_description1_XLineEdit", "Zen By-Product Item Type");
    waitForObjectItem(":_itemtype_QComboBox", "By-Product");
    clickItem(":_itemtype_QComboBox", "By-Product", 5, 5, 1, Qt.LeftButton);
    waitForObjectItem(":_itemGroup._classcode_XComboBox", "TOYS-COMP-Toy Components");
    clickItem(":_itemGroup._classcode_XComboBox", "TOYS-COMP-Toy Components", 5, 5, 1, Qt.LeftButton);
    waitForObjectItem(":_inventoryUOM_XComboBox", "EA");
    clickItem(":_inventoryUOM_XComboBox", "EA", 5, 5, 1, Qt.LeftButton);
    waitForObjectItem(":_prodcat_XComboBox", "CLASSIC-METAL - Classic Metal Product Line");
    clickItem(":_prodcat_XComboBox", "CLASSIC-METAL - Classic Metal Product Line", 5, 5, 1, Qt.LeftButton);
    waitForObject(":Item is Sold._listprice_XLineEdit");
    type(":Item is Sold._listprice_XLineEdit", "10.8"); 
    waitForObject(":_prodWeight_XLineEdit");
    type(":_prodWeight_XLineEdit", "3");
    waitForObject(":_packWeight_XLineEdit");
    type(":_packWeight_XLineEdit", "0.2");
    waitForObject(":Item.Save_QPushButton");
    clickButton(":Item.Save_QPushButton");
   
    waitForObject(":Item.Yes_QPushButton");
    clickButton(":Item.Yes_QPushButton");
    
    waitForObjectItem(":_warehouse_WComboBox", "WH1");
    clickItem(":_warehouse_WComboBox", "WH1", 5, 5, 1, Qt.LeftButton);
    waitForObjectItem(":Control._controlMethod_XComboBox", "Regular");
    clickItem(":Control._controlMethod_XComboBox", "Regular", 5, 5, 1, Qt.LeftButton);
    waitForObjectItem(":_plannerCode_XComboBox", "MRP-MRP Items");
    clickItem(":_plannerCode_XComboBox", "MRP-MRP Items", 5, 5, 1, Qt.LeftButton);
    waitForObjectItem(":_costcat_XComboBox", "FINISHED-Finished Product - WH1");
    clickItem(":_costcat_XComboBox", "FINISHED-Finished Product - WH1", 5, 5, 1, Qt.LeftButton);
   
    waitForObject(":Item.Save_QPushButton_2");
    clickButton(":Item.Save_QPushButton_2");
    waitForObject(":Item.Cancel_QPushButton");
    clickButton(":Item.Cancel_QPushButton");
     
    
    //---(UC_BPF_CI_01:AF2) Job Item Type---
    waitForObject(":List Items.New_QPushButton");
    clickButton(":List Items.New_QPushButton");
    
    waitForObject(":_itemNumber_XLineEdit");
    type(":_itemNumber_XLineEdit", "Zen Job");
    waitForObject(":_description1_XLineEdit");
    type(":_description1_XLineEdit", "Zen Job Item Type");
    waitForObjectItem(":_itemtype_QComboBox", "Job");
    clickItem(":_itemtype_QComboBox", "Job", 5, 5, 1, Qt.LeftButton);
    waitForObjectItem(":_itemGroup._classcode_XComboBox", "TOYS-COMP-Toy Components");
    clickItem(":_itemGroup._classcode_XComboBox", "TOYS-COMP-Toy Components", 5, 5, 1, Qt.LeftButton);
    waitForObjectItem(":_inventoryUOM_XComboBox", "EA");
    clickItem(":_inventoryUOM_XComboBox", "EA", 5, 5, 1, Qt.LeftButton);
    waitForObjectItem(":_prodcat_XComboBox", "CLASSIC-METAL - Classic Metal Product Line");
    clickItem(":_prodcat_XComboBox", "CLASSIC-METAL - Classic Metal Product Line", 5, 5, 1, Qt.LeftButton);
    waitForObject(":Item is Sold._listprice_XLineEdit");
    type(":Item is Sold._listprice_XLineEdit", "7");
    waitForObject(":_prodWeight_XLineEdit");
    type(":_prodWeight_XLineEdit", "5");
    waitForObject(":_packWeight_XLineEdit");
    type(":_packWeight_XLineEdit", "1");
    waitForObject(":Item.Save_QPushButton");
    clickButton(":Item.Save_QPushButton");
   
    waitForObject(":Item.Yes_QPushButton");
    clickButton(":Item.Yes_QPushButton");
    
    waitForObjectItem(":_warehouse_WComboBox", "WH1");
    clickItem(":_warehouse_WComboBox", "WH1", 5, 5, 1, Qt.LeftButton);
    waitForObjectItem(":_plannerCode_XComboBox", "MRP-MRP Items");
    clickItem(":_plannerCode_XComboBox", "MRP-MRP Items", 5, 5, 1, Qt.LeftButton);
    waitForObjectItem(":_costcat_XComboBox", "FINISHED-Finished Product - WH1");
    clickItem(":_costcat_XComboBox", "FINISHED-Finished Product - WH1", 5, 5, 1, Qt.LeftButton);
     
    waitForObject(":Item.Save_QPushButton_2");
    clickButton(":Item.Save_QPushButton_2");
    waitForObject(":Item.Cancel_QPushButton");
    clickButton(":Item.Cancel_QPushButton");
    
    
     //---(UC_BPF_CI_01:AF3) Refernce Item Type---
    waitForObject(":List Items.New_QPushButton");
    clickButton(":List Items.New_QPushButton");
    
    waitForObject(":_itemNumber_XLineEdit");
    type(":_itemNumber_XLineEdit", "zen reference");
    waitForObject(":_description1_XLineEdit");
    type(":_description1_XLineEdit", "Zen Reference Item Type");
    waitForObjectItem(":_itemtype_QComboBox", "Reference");
    clickItem(":_itemtype_QComboBox", "Reference", 5, 5, 1, Qt.LeftButton);
    waitForObjectItem(":_itemGroup._classcode_XComboBox", "TOYS-OTHER-Toys Other Items");
    clickItem(":_itemGroup._classcode_XComboBox", "TOYS-OTHER-Toys Other Items", 5, 5, 1, Qt.LeftButton);
    waitForObjectItem(":_inventoryUOM_XComboBox", "EA");
    clickItem(":_inventoryUOM_XComboBox", "EA", 5, 5, 1, Qt.LeftButton);
    waitForObjectItem(":_prodcat_XComboBox", "CLASSIC-METAL - Classic Metal Product Line");
    clickItem(":_prodcat_XComboBox", "CLASSIC-METAL - Classic Metal Product Line", 5, 5, 1, Qt.LeftButton);
    waitForObject(":Item is Sold._listprice_XLineEdit");
    type(":Item is Sold._listprice_XLineEdit", "6");
    waitForObject(":_prodWeight_XLineEdit");
    type(":_prodWeight_XLineEdit", "5");
    waitForObject(":_packWeight_XLineEdit");
    type(":_packWeight_XLineEdit", "2");
    waitForObject(":Item.Save_QPushButton");
    clickButton(":Item.Save_QPushButton");
    
    waitForObject(":Item.Yes_QPushButton");
    clickButton(":Item.Yes_QPushButton");
    
    waitForObjectItem(":_warehouse_WComboBox", "WH1");
    clickItem(":_warehouse_WComboBox", "WH1", 5, 5, 1, Qt.LeftButton);
    waitForObjectItem(":_plannerCode_XComboBox", "MRP-MRP Items");
    clickItem(":_plannerCode_XComboBox", "MRP-MRP Items", 5, 5, 1, Qt.LeftButton);
    waitForObjectItem(":_costcat_XComboBox", "FINISHED-Finished Product - WH1");
    clickItem(":_costcat_XComboBox", "FINISHED-Finished Product - WH1", 5, 5, 1, Qt.LeftButton);
    
    waitForObject(":Item.Save_QPushButton_2");
    clickButton(":Item.Save_QPushButton_2");
    waitForObject(":Item.Cancel_QPushButton");
    clickButton(":Item.Cancel_QPushButton");
   
    
    //---(UC_BPF_CI_01:AF4) Costing Item Type---
    waitForObject(":List Items.New_QPushButton");
    clickButton(":List Items.New_QPushButton");
    
    waitForObject(":_itemNumber_XLineEdit");
    type(":_itemNumber_XLineEdit", "zen costing");
    waitForObject(":_description1_XLineEdit");
    type(":_description1_XLineEdit", "Zen Costing Item Type");
    waitForObjectItem(":_itemtype_QComboBox", "Costing");
    clickItem(":_itemtype_QComboBox", "Costing", 5, 5, 1, Qt.LeftButton);
    waitForObjectItem(":_itemGroup._classcode_XComboBox", "TOYS-OTHER-Toys Other Items");
    clickItem(":_itemGroup._classcode_XComboBox", "TOYS-OTHER-Toys Other Items", 5, 5, 1, Qt.LeftButton);
    waitForObjectItem(":_inventoryUOM_XComboBox", "EA");
    clickItem(":_inventoryUOM_XComboBox", "EA", 5, 5, 1, Qt.LeftButton);
    waitForObject(":Item.Save_QPushButton");
    clickButton(":Item.Save_QPushButton");
    
    waitForObject(":Item.Yes_QPushButton");
    clickButton(":Item.Yes_QPushButton");
    
    waitForObjectItem(":_warehouse_WComboBox", "WH1");
    clickItem(":_warehouse_WComboBox", "WH1", 5, 5, 1, Qt.LeftButton);
    waitForObjectItem(":Control._controlMethod_XComboBox", "Regular");
    clickItem(":Control._controlMethod_XComboBox", "Regular", 5, 5, 1, Qt.LeftButton);
    waitForObjectItem(":_plannerCode_XComboBox", "MRP-MRP Items");
    clickItem(":_plannerCode_XComboBox", "MRP-MRP Items", 5,5, 1, Qt.LeftButton);
    waitForObjectItem(":_costcat_XComboBox", "FINISHED-Finished Product - WH1");
    clickItem(":_costcat_XComboBox", "FINISHED-Finished Product - WH1", 5, 5, 1, Qt.LeftButton);
    
    waitForObject(":Item.Save_QPushButton_2");
    clickButton(":Item.Save_QPushButton_2");
    waitForObject(":Item.Cancel_QPushButton");
    clickButton(":Item.Cancel_QPushButton");
       
   
    //---(UC_BPF_CI_01:AF5) Tooling Item Type---
    waitForObject(":List Items.New_QPushButton");
    clickButton(":List Items.New_QPushButton");
    
    waitForObject(":_itemNumber_XLineEdit");
    type(":_itemNumber_XLineEdit", "zen tooling");
    waitForObject(":_description1_XLineEdit");
    type(":_description1_XLineEdit", "Zen Tooling Item Type");
    waitForObjectItem(":_itemtype_QComboBox", "Tooling");
    clickItem(":_itemtype_QComboBox", "Tooling", 5, 5, 1, Qt.LeftButton);
    waitForObjectItem(":_itemGroup._classcode_XComboBox", "TOYS-COMP-Toy Components");
    clickItem(":_itemGroup._classcode_XComboBox", "TOYS-COMP-Toy Components", 5, 5, 1, Qt.LeftButton);
    waitForObjectItem(":_inventoryUOM_XComboBox", "EA");
    clickItem(":_inventoryUOM_XComboBox", "EA", 5, 5, 1, Qt.LeftButton);
    waitForObject(":_prodWeight_XLineEdit");
    type(":_prodWeight_XLineEdit", "3");
    waitForObject(":_packWeight_XLineEdit");
    type(":_packWeight_XLineEdit", "0.5");
    waitForObject(":Item.Save_QPushButton");
    clickButton(":Item.Save_QPushButton");
    
    waitForObject(":Item.Yes_QPushButton");
    clickButton(":Item.Yes_QPushButton");
    
    waitForObjectItem(":_warehouse_WComboBox", "WH1");
    clickItem(":_warehouse_WComboBox", "WH1", 5, 5, 1, Qt.LeftButton);
    waitForObjectItem(":Control._controlMethod_XComboBox", "Regular");
    clickItem(":Control._controlMethod_XComboBox", "Regular", 5, 5, 1, Qt.LeftButton);
    waitForObjectItem(":_plannerCode_XComboBox", "MRP-MRP Items");
    clickItem(":_plannerCode_XComboBox", "MRP-MRP Items", 5, 5, 1, Qt.LeftButton);
    waitForObjectItem(":_costcat_XComboBox", "MATERIALS-Materials - WH1");
    clickItem(":_costcat_XComboBox", "MATERIALS-Materials - WH1", 5, 5, 1, Qt.LeftButton);
    
    waitForObject(":Item.Save_QPushButton_2");
    clickButton(":Item.Save_QPushButton_2");
    waitForObject(":Item.Cancel_QPushButton");
    clickButton(":Item.Cancel_QPushButton");
    
    
    //---(UC_BPF_CI_01:AF6) Outside Process Item Type---
    waitForObject(":List Items.New_QPushButton");
    clickButton(":List Items.New_QPushButton");
    
    waitForObject(":_itemNumber_XLineEdit");
    type(":_itemNumber_XLineEdit", "zen outside process");
    waitForObject(":_description1_XLineEdit");
    type(":_description1_XLineEdit", "Zen Outisde Process Item Type");
    waitForObjectItem(":_itemtype_QComboBox", "Outside Process");
    clickItem(":_itemtype_QComboBox", "Outside Process", 5, 5, 1, Qt.LeftButton);
    waitForObjectItem(":_itemGroup._classcode_XComboBox", "TOYS-COMP-Toy Components");
    clickItem(":_itemGroup._classcode_XComboBox", "TOYS-COMP-Toy Components", 5, 5, 1, Qt.LeftButton);
    waitForObjectItem(":_inventoryUOM_XComboBox", "EA");
    clickItem(":_inventoryUOM_XComboBox", "EA", 5, 5, 1, Qt.LeftButton);
    waitForObject(":Item.Save_QPushButton");
    clickButton(":Item.Save_QPushButton");
    
    waitForObject(":Item.Yes_QPushButton");
    clickButton(":Item.Yes_QPushButton");
    
    waitForObjectItem(":_warehouse_WComboBox", "WH1");
    clickItem(":_warehouse_WComboBox", "WH1", 5, 5, 1, Qt.LeftButton);
    waitForObjectItem(":Control._controlMethod_XComboBox", "Regular");
    clickItem(":Control._controlMethod_XComboBox", "Regular", 5, 5, 1, Qt.LeftButton);
    waitForObjectItem(":_plannerCode_XComboBox", "MRP-MRP Items");
    clickItem(":_plannerCode_XComboBox", "MRP-MRP Items", 5, 5, 1, Qt.LeftButton);
    waitForObjectItem(":_costcat_XComboBox", "FINISHED-Finished Product - WH1");
    clickItem(":_costcat_XComboBox", "FINISHED-Finished Product - WH1", 5, 5, 1, Qt.LeftButton);
    
    waitForObject(":Item.Save_QPushButton_2");
    clickButton(":Item.Save_QPushButton_2");
    waitForObject(":Item.Cancel_QPushButton");
    clickButton(":Item.Cancel_QPushButton");
     
    
    //---(UC_BPF_CI_01:AF7) Breeder Item Type---
    waitForObject(":List Items.New_QPushButton");
    clickButton(":List Items.New_QPushButton");
   
    waitForObject(":_itemNumber_XLineEdit");
    type(":_itemNumber_XLineEdit", "zen breeder");
    waitForObject(":_description1_XLineEdit");
    type(":_description1_XLineEdit", "Zen Breeder Item Type");
    waitForObjectItem(":_itemtype_QComboBox", "Breeder");
    clickItem(":_itemtype_QComboBox", "Breeder", 5, 5, 1, Qt.LeftButton);
    waitForObjectItem(":_itemGroup._classcode_XComboBox", "TOYS-COMP-Toy Components");
    clickItem(":_itemGroup._classcode_XComboBox", "TOYS-COMP-Toy Components", 5, 5, 1, Qt.LeftButton);
    waitForObjectItem(":_inventoryUOM_XComboBox", "EA");
    clickItem(":_inventoryUOM_XComboBox", "EA", 5, 5, 1, Qt.LeftButton);
    waitForObject(":Item.Save_QPushButton");
    clickButton(":Item.Save_QPushButton");
   
    waitForObject(":Item.Yes_QPushButton");
    clickButton(":Item.Yes_QPushButton");
    
    waitForObjectItem(":_warehouse_WComboBox", "WH1");
    clickItem(":_warehouse_WComboBox", "WH1", 5, 5, 1, Qt.LeftButton);
    waitForObjectItem(":_plannerCode_XComboBox", "MRP-MRP Items");
    clickItem(":_plannerCode_XComboBox", "MRP-MRP Items", 5, 5, 1, Qt.LeftButton);
    waitForObjectItem(":_plannerCode_XComboBox", "OP-Outside Processing Items");
    clickItem(":_plannerCode_XComboBox", "OP-Outside Processing Items", 5, 5, 1, Qt.LeftButton);
    waitForObjectItem(":_costcat_XComboBox", "MATERIALS-Materials - WH1");
    clickItem(":_costcat_XComboBox", "MATERIALS-Materials - WH1", 5, 5, 1, Qt.LeftButton);
    
    waitForObject(":Item.Save_QPushButton_2");
    clickButton(":Item.Save_QPushButton_2");
    waitForObject(":Item.Cancel_QPushButton");
    clickButton(":Item.Cancel_QPushButton");
   
    
    //---(UC_BPF_CI_01:AF8) Planning Item Type---
    waitForObject(":List Items.New_QPushButton");
    clickButton(":List Items.New_QPushButton");
    
    waitForObject(":_itemNumber_XLineEdit");
    type(":_itemNumber_XLineEdit", "zen planning");
    waitForObject(":_description1_XLineEdit");
    type(":_description1_XLineEdit", "Zen Planning Item Type");
    waitForObjectItem(":_itemtype_QComboBox", "Planning");
    clickItem(":_itemtype_QComboBox", "Planning", 5, 5, 1, Qt.LeftButton);
    waitForObjectItem(":_itemGroup._classcode_XComboBox", "TOYS-COMP-Toy Components");
    clickItem(":_itemGroup._classcode_XComboBox", "TOYS-COMP-Toy Components", 5, 5, 1, Qt.LeftButton);
    waitForObjectItem(":_inventoryUOM_XComboBox", "EA");
    clickItem(":_inventoryUOM_XComboBox", "EA", 5, 5, 1, Qt.LeftButton);
    waitForObject(":Item.Save_QPushButton");
    clickButton(":Item.Save_QPushButton");
    
    waitForObject(":Item.Yes_QPushButton");
    clickButton(":Item.Yes_QPushButton");
    
    waitForObjectItem(":_warehouse_WComboBox", "WH1");
    clickItem(":_warehouse_WComboBox", "WH1", 5, 5, 1, Qt.LeftButton);
    waitForObjectItem(":_plannerCode_XComboBox", "MRP-MRP Items");
    clickItem(":_plannerCode_XComboBox", "MRP-MRP Items", 5, 5, 1, Qt.LeftButton);
    waitForObjectItem(":_costcat_XComboBox", "FINISHED-Finished Product - WH1");
    clickItem(":_costcat_XComboBox", "FINISHED-Finished Product - WH1", 5, 5, 1, Qt.LeftButton);
   
    waitForObject(":Item.Save_QPushButton_2");
    clickButton(":Item.Save_QPushButton_2");
    waitForObject(":Item.Cancel_QPushButton");
    clickButton(":Item.Cancel_QPushButton");
    
    
    //---(UC_BPF_CI_01:AF9) Phantom Item Type---
    waitForObject(":List Items.New_QPushButton");
    clickButton(":List Items.New_QPushButton");
    
    waitForObject(":_itemNumber_XLineEdit");
    type(":_itemNumber_XLineEdit", "zen phantom");
    waitForObject(":_description1_XLineEdit");
    type(":_description1_XLineEdit", "Zen Phantom Item Type");
    waitForObjectItem(":_itemtype_QComboBox", "Phantom");
    clickItem(":_itemtype_QComboBox", "Phantom", 5, 5, 1, Qt.LeftButton);
    waitForObjectItem(":_itemGroup._classcode_XComboBox", "TOYS-COMP-Toy Components");
    clickItem(":_itemGroup._classcode_XComboBox", "TOYS-COMP-Toy Components", 5, 5, 1, Qt.LeftButton);
    waitForObjectItem(":_inventoryUOM_XComboBox", "EA");
    clickItem(":_inventoryUOM_XComboBox", "EA", 5, 5, 1, Qt.LeftButton);
    waitForObject(":Item.Save_QPushButton");
    clickButton(":Item.Save_QPushButton");
   
    waitForObject(":Item.Yes_QPushButton");
    clickButton(":Item.Yes_QPushButton");
    
    waitForObjectItem(":_warehouse_WComboBox", "WH1");
    clickItem(":_warehouse_WComboBox", "WH1", 5, 5, 1, Qt.LeftButton);
    waitForObjectItem(":_plannerCode_XComboBox", "MRP-MRP Items");
    clickItem(":_plannerCode_XComboBox", "MRP-MRP Items", 5, 5, 1, Qt.LeftButton);
    waitForObjectItem(":_costcat_XComboBox", "FINISHED-Finished Product - WH1");
    clickItem(":_costcat_XComboBox", "FINISHED-Finished Product - WH1", 5, 5, 1, Qt.LeftButton);
    
    waitForObject(":Item.Save_QPushButton_2");
    clickButton(":Item.Save_QPushButton_2");
    waitForObject(":Item.Cancel_QPushButton");
    clickButton(":Item.Cancel_QPushButton");
   
    waitForObject(":List Items.Close_QPushButton");
    clickButton(":List Items.Close_QPushButton");
    
    
    //---(UC_BPF_CI_01:AF10) Bill of Materials---
     waitForObjectItem(":xTuple ERP:*_QMenuBar_2", "Products");
    activateItem(":xTuple ERP:*_QMenuBar_2", "Products");
    waitForObjectItem(":xTuple ERP:*.Products_QMenu", "Bill Of Materials");
    activateItem(":xTuple ERP:*.Products_QMenu", "Bill Of Materials");
    waitForObjectItem(":xTuple ERP:*.Bill Of Materials_QMenu", "List...");
    activateItem(":xTuple ERP:*.Bill Of Materials_QMenu", "List...");
    
    waitForObject(":Bills of Materials.New_QPushButton");
    clickButton(":Bills of Materials.New_QPushButton");
    waitForObject(":_itemGroup...._QPushButton_3");
    clickButton(":_itemGroup...._QPushButton_3");
    waitForObject(":_item_XTreeWidget_4");
    doubleClickItem(":_item_XTreeWidget_4", "ZEN BREEDER", 64, 6, 0, Qt.LeftButton);
    
    waitForObject(":frame_2.New_QPushButton");
    clickButton(":frame_2.New_QPushButton");
    waitForObject(":Bill of Materials...._QPushButton");
    clickButton(":Bill of Materials...._QPushButton");
    waitForObject(":_item_XTreeWidget_5");
    doubleClickItem(":_item_XTreeWidget_5", "ZEN CO-PRODUCT", 74, 6, 0, Qt.LeftButton);
    waitForObject(":_qtyPer_XLineEdit");
    type(":_qtyPer_XLineEdit", "6");
    waitForObject(":_scrap_XLineEdit");
    type(":_scrap_XLineEdit", "1");
    waitForObject(":Bill of Materials.Save_QPushButton");
    clickButton(":Bill of Materials.Save_QPushButton");
    
    waitForObject(":Bill of Materials.Save_QPushButton_2");
    clickButton(":Bill of Materials.Save_QPushButton_2");
    
    waitForObject(":Bills of Materials.Close_QPushButton");
    clickButton(":Bills of Materials.Close_QPushButton");
    
    
    //---(UC_BPF_CI_02) Update Actual Costs---
     waitForObjectItem(":xTuple ERP:*_QMenuBar_2", "Products");
    activateItem(":xTuple ERP:*_QMenuBar_2", "Products");
    waitForObjectItem(":xTuple ERP:*.Products_QMenu", "Costing ");
    activateItem(":xTuple ERP:*.Products_QMenu", "Costing");
    waitForObjectItem(":xTuple ERP:*.Costing_QMenu", "Update Actual Costs ");
    activateItem(":xTuple ERP:*.Costing_QMenu", "Update Actual Costs");
    waitForObjectItem(":xTuple ERP:*.Update Actual Costs_QMenu", "by Class Code...");
    activateItem(":xTuple ERP:*.Update Actual Costs_QMenu", "by Class Code...");
    
    waitForObject(":Update Actual Costs by Class Code.Select all Costs_QPushButton");
    clickButton(":Update Actual Costs by Class Code.Select all Costs_QPushButton");
    waitForObject(":Update Actual Costs by Class Code.Roll Up Actual Costs_QCheckBox");
    clickButton(":Update Actual Costs by Class Code.Roll Up Actual Costs_QCheckBox");
    waitForObject(":Update Actual Costs by Class Code.Update_QPushButton");
    clickButton(":Update Actual Costs by Class Code.Update_QPushButton");
    
    //---(UC_BPF_CI_03) Post Actual Costs---
    waitForObjectItem(":xTuple ERP:*_QMenuBar_2", "Products");
    activateItem(":xTuple ERP:*_QMenuBar_2", "Products");
    waitForObjectItem(":xTuple ERP:*.Products_QMenu", "Costing ");
    activateItem(":xTuple ERP:*.Products_QMenu", "Costing"); 
    waitForObjectItem(":xTuple ERP:*.Costing_QMenu", "Post Actual Costs");
    waitForObjectItem(":xTuple ERP:*.Costing_QMenu", "Post Actual Costs");
    activateItem(":xTuple ERP:*.Costing_QMenu", "Post Actual Costs");
    waitForObjectItem(":xTuple ERP:*.Post Actual Costs_QMenu", "by Class Code...");
    activateItem(":xTuple ERP:*.Post Actual Costs_QMenu", "by Class Code...");
    
    waitForObject(":Post Actual Costs by Class Code.Select all Costs_QPushButton");
    clickButton(":Post Actual Costs by Class Code.Select all Costs_QPushButton");
    waitForObject(":Post Actual Costs by Class Code.Roll Up Standard Costs_QCheckBox");
    clickButton(":Post Actual Costs by Class Code.Roll Up Standard Costs_QCheckBox");
    waitForObject(":Post Actual Costs by Class Code.Post_QPushButton");
    clickButton(":Post Actual Costs by Class Code.Post_QPushButton");
    
    //---(UC_BPF_CI_04) Post Standard Costs---
     waitForObjectItem(":xTuple ERP:*_QMenuBar_2", "Products");
    activateItem(":xTuple ERP:*_QMenuBar_2", "Products");
    waitForObjectItem(":xTuple ERP:*.Products_QMenu", "Costing ");
    activateItem(":xTuple ERP:*.Products_QMenu", "Costing");
    waitForObjectItem(":xTuple ERP:*.Costing_QMenu", "Post Standard Costs");
    activateItem(":xTuple ERP:*.Costing_QMenu", "Post Standard Costs");
    waitForObjectItem(":xTuple ERP:*.Post Standard Costs_QMenu", "by Class Code...");
    activateItem(":xTuple ERP:*.Post Standard Costs_QMenu", "by Class Code...");
  
    waitForObject(":Update Standard Costs By Class Code.Select all Costs_QPushButton");
    clickButton(":Update Standard Costs By Class Code.Select all Costs_QPushButton");
    waitForObject(":Update Standard Costs By Class Code.Roll Up Standard Costs_QCheckBox");
    clickButton(":Update Standard Costs By Class Code.Roll Up Standard Costs_QCheckBox");
    waitForObject(":Update Standard Costs By Class Code.Update_QPushButton");
    clickButton(":Update Standard Costs By Class Code.Update_QPushButton");
    
    //---Creating a Sales Order---
    waitForObjectItem(":xTuple ERP:*_QMenuBar_2", "Sales");
    activateItem(":xTuple ERP:*_QMenuBar_2", "Sales");
    waitForObjectItem(":xTuple ERP:*.Sales_QMenu_2", "Sales Order");
    activateItem(":xTuple ERP:*.Sales_QMenu_2", "Sales Order");
    waitForObjectItem(":xTuple ERP:*.Sales Order_QMenu_2", "New...");
    activateItem(":xTuple ERP:*.Sales Order_QMenu_2", "New...");
    
    sonumber= findObject(":_headerPage._orderNumber_XLineEdit_2").text;
    
    waitForObject(":_headerPage...._QPushButton");
    clickButton(":_headerPage...._QPushButton");
    waitForObject(":_listTab_XTreeWidget");
    doubleClickItem(":_listTab_XTreeWidget", "Mike", 5, 5, 0, Qt.LeftButton);
    waitForObject(":Sales Order.qt_tabwidget_tabbar_QTabBar");
    clickTab(":Sales Order.qt_tabwidget_tabbar_QTabBar", "Line Items");
    waitForObject(":_lineItemsPage.New_QPushButton_2");
    clickButton(":_lineItemsPage.New_QPushButton_2");
    waitForObject(":_itemGroup...._QPushButton");
    clickButton(":_itemGroup...._QPushButton");
    waitForObject(":_item_XTreeWidget");
    doubleClickItem(":_item_XTreeWidget", "YTRUCK1", 5, 5 , 0, Qt.LeftButton);
    waitForObject(":_qtyOrdered_XLineEdit_2");
    type(":_qtyOrdered_XLineEdit_2", "100");
    waitForObject(":_amountGroup. ... _QPushButton_2");
    clickButton(":_amountGroup. ... _QPushButton_2");
    waitForObject(":_price_XTreeWidget_2");
    doubleClickItem(":_price_XTreeWidget_2", "USD - $_3", 5, 5 , 0, Qt.LeftButton);
    waitForObject(":_schedGroup.XDateEdit_XDateEdit_3");
    type(":_schedGroup.XDateEdit_XDateEdit_3", "+7");  
    waitForObject(":_schedGroup.XDateEdit_XDateEdit_4");
    type(":_schedGroup.XDateEdit_XDateEdit_4", "+8"); 
    waitForObject(":Sales Order.Save_QPushButton");
    clickButton(":Sales Order.Save_QPushButton");
    waitForObject(":Sales Order.Close_QPushButton");
    clickButton(":Sales Order.Close_QPushButton");
    waitForObject(":Sales Order.Save_QPushButton_2");
    clickButton(":Sales Order.Save_QPushButton_2");
    waitForObject(":Sales Order.Cancel_QPushButton");
    clickButton(":Sales Order.Cancel_QPushButton");
    
    //---Scheduling MRP by Planner Code---
    waitForObjectItem(":xTuple ERP:*_QMenuBar_2", "Schedule");
    activateItem(":xTuple ERP:*_QMenuBar_2", "Schedule");
    waitForObjectItem(":xTuple ERP:*.Schedule_QMenu", "Scheduling");
    activateItem(":xTuple ERP:*.Schedule_QMenu", "Scheduling");
    waitForObjectItem(":xTuple ERP:*.Scheduling_QMenu", "Run MRP");
    activateItem(":xTuple ERP:*.Scheduling_QMenu", "Run MRP");
    waitForObjectItem(":xTuple ERP:*.Run MRP_QMenu", "by Planner Code...");
    activateItem(":xTuple ERP:*.Run MRP_QMenu", "by Planner Code...");
   
    waitForObject(":_plannerCode.All Planner Codes_QRadioButton");
    clickButton(":_plannerCode.All Planner Codes_QRadioButton");
    waitForObject(":_warehouse.Selected:_QRadioButton");
    clickButton(":_warehouse.Selected:_QRadioButton");
    waitForObjectItem(":_warehouse._warehouses_WComboBox", "WH1");
    clickItem(":_warehouse._warehouses_WComboBox", "WH1", 5, 5, 0, Qt.LeftButton);
    waitForObject(":Run MRP by Planner Code.XDateEdit_XDateEdit");
    type(":Run MRP by Planner Code.XDateEdit_XDateEdit", "+30");
    waitForObject(":Run MRP by Planner Code.Create_QPushButton");
    clickButton(":Run MRP by Planner Code.Create_QPushButton");
    
    //---MRP Results---
    waitForObjectItem(":xTuple ERP:*_QMenuBar_2", "Schedule");
    activateItem(":xTuple ERP:*_QMenuBar_2", "Schedule");
    waitForObjectItem(":xTuple ERP:*.Schedule_QMenu", "Reports");
    activateItem(":xTuple ERP:*.Schedule_QMenu", "Reports");
    waitForObjectItem(":xTuple ERP:*.Reports_QMenu_2", "Planned Orders");
    activateItem(":xTuple ERP:*.Reports_QMenu_2", "Planned Orders");
    waitForObjectItem(":xTuple ERP:*.Planned Orders_QMenu", "by Planner Code...");
    activateItem(":xTuple ERP:*.Planned Orders_QMenu", "by Planner Code...");
    
    waitForObject(":_plannerCode.All Planner Codes_QRadioButton_2");
    clickButton(":_plannerCode.All Planner Codes_QRadioButton_2");
    waitForObject(":_warehouse.Selected:_QRadioButton_2");
    clickButton(":_warehouse.Selected:_QRadioButton_2");
    waitForObjectItem(":_warehouse._warehouses_WComboBox_2", "WH1");
    clickItem(":_warehouse._warehouses_WComboBox_2", "WH1", 5, 5, 1, Qt.LeftButton);
    waitForObject(":Planned Orders by Planner Code.Query_QPushButton");
    clickButton(":Planned Orders by Planner Code.Query_QPushButton");
    waitForObject(":Planned Orders by Planner Code.Close_QPushButton");
    clickButton(":Planned Orders by Planner Code.Close_QPushButton");
      
    //---Release Planned P/Os to Purchasing---
    waitForObjectItem(":xTuple ERP:*_QMenuBar_2", "Schedule");
    activateItem(":xTuple ERP:*_QMenuBar_2", "Schedule");
    waitForObjectItem(":xTuple ERP:*.Schedule_QMenu", "Scheduling");
    activateItem(":xTuple ERP:*.Schedule_QMenu", "Scheduling");
    waitForObjectItem(":xTuple ERP:*.Scheduling_QMenu", "Release Planned Orders...");
    activateItem(":xTuple ERP:*.Scheduling_QMenu", "Release Planned Orders...");
   
    waitForObject(":_plannerCode.All Planner Codes_QRadioButton_4");
    clickButton(":_plannerCode.All Planner Codes_QRadioButton_4");
    waitForObject(":_warehouse.Selected:_QRadioButton_3");
    clickButton(":_warehouse.Selected:_QRadioButton_3");
    waitForObjectItem(":_warehouse._warehouses_WComboBox_4", "WH1");
    clickItem(":_warehouse._warehouses_WComboBox_4", "WH1", 5, 5, 0, Qt.LeftButton);
    waitForObject(":Release Planned Orders by Planner Code.XDateEdit_XDateEdit");
    type(":Release Planned Orders by Planner Code.XDateEdit_XDateEdit", "+30");
    waitForObject(":Release Planned Orders by Planner Code.Release_QPushButton");
    clickButton(":Release Planned Orders by Planner Code.Release_QPushButton");
    
    //---Update Buffer Status---
    waitForObjectItem(":xTuple ERP:*_QMenuBar_2", "Schedule");
    activateItem(":xTuple ERP:*_QMenuBar_2", "Schedule");
    waitForObjectItem(":xTuple ERP:*.Schedule_QMenu", "Constraint Management");
    activateItem(":xTuple ERP:*.Schedule_QMenu", "Constraint Management");
    waitForObjectItem(":xTuple ERP:*.Constraint Management_QMenu", "Update Status");
    activateItem(":xTuple ERP:*.Constraint Management_QMenu", "Update Status");
    waitForObjectItem(":xTuple ERP:*.Update Status_QMenu", "by Planner Code...");
    activateItem(":xTuple ERP:*.Update Status_QMenu", "by Planner Code...");
    
    waitForObject(":_plannerCode.All Planner Codes_QRadioButton_6");
    clickButton(":_plannerCode.All Planner Codes_QRadioButton_6");
    waitForObject(":_warehouse.All Sites_QRadioButton_3");
    clickButton(":_warehouse.All Sites_QRadioButton_3");
    waitForObject(":Run Buffer Status by Planner Code.Create_QPushButton");
    clickButton(":Run Buffer Status by Planner Code.Create_QPushButton");
  
    //---Converting P/Rs to P/Os---
    waitForObjectItem(":xTuple ERP:*_QMenuBar_2", "Purchase");
    activateItem(":xTuple ERP:*_QMenuBar_2", "Purchase");
    waitForObjectItem(":xTuple ERP:*.Purchase_QMenu", "Purchase Requests");
    activateItem(":xTuple ERP:*.Purchase_QMenu", "Purchase Requests");
    waitForObjectItem(":xTuple ERP:*.Purchase Requests_QMenu", "by Planner Code...");
    activateItem(":xTuple ERP:*.Purchase Requests_QMenu", "by Planner Code..."); 
   
    waitForObjectItem(":_warehouse._warehouses_WComboBox_3", "WH1");
    clickItem(":_warehouse._warehouses_WComboBox_3", "WH1", 5, 5, 1, Qt.LeftButton);
    waitForObject(":_plannerCode.All Planner Codes_QRadioButton_3");
    clickButton(":_plannerCode.All Planner Codes_QRadioButton_3");   
    waitForObject(":Purchase Requests by Planner Code.Query_QPushButton");
    clickButton(":Purchase Requests by Planner Code.Query_QPushButton");
        
    
    while(findObject(":Purchase Requests by Planner Code._pr_XTreeWidget").topLevelItemCount >= 1)
    {
        waitForObject(":Purchase Requests by Planner Code.Query_QPushButton");
        type(":Purchase Requests by Planner Code.Query_QPushButton", "<Down>");
        waitForObject(":Purchase Requests by Planner Code._pr_XTreeWidget");
        type(":Purchase Requests by Planner Code._pr_XTreeWidget", " ");
        waitForObject(":Purchase Requests by Planner Code._pr_XTreeWidget");
        sendEvent("QContextMenuEvent", ":Purchase Requests by Planner Code._pr_XTreeWidget", QContextMenuEvent.Keyboard, 5, 5, 0);
        waitForObjectItem(":xTuple ERP:*._menu_QMenu", "Release P/R...");
        activateItem(":xTuple ERP:*._menu_QMenu", "Release P/R...");
        waitForObjectItem(":_frame._itemsrc_XTreeWidget", "1");
        doubleClickItem(":_frame._itemsrc_XTreeWidget", "1", 5, 5, 0, Qt.LeftButton);
            
        waitForObject(":Purchase Order Item.Save_QPushButton");
        clickButton(":Purchase Order Item.Save_QPushButton");
        
        ponumber = findObject(":_headerPage._orderNumber_XLineEdit").text;
        
        waitForObject(":Purchase Order.qt_tabwidget_tabbar_QTabBar");
        clickTab(":Purchase Order.qt_tabwidget_tabbar_QTabBar", "Line Items");
        waitForObjectItem(":_lineItemsPage._poitem_XTreeWidget", "Product Box Type 1 Product Box");
        clickItem(":_lineItemsPage._poitem_XTreeWidget", "Product Box Type 1 Product Box", 5, 5, 1, Qt.LeftButton);
        waitForObject(":Purchase Order.Save_QPushButton");
        clickButton(":Purchase Order.Save_QPushButton");
                           
        waitForObject(":Purchase Requests by Planner Code.Query_QPushButton");
        clickButton(":Purchase Requests by Planner Code.Query_QPushButton");
        
    }
    
    waitForObject(":Purchase Order.Close_QPushButton");
    clickButton(":Purchase Order.Close_QPushButton");
    
    waitForObject(":Purchase Requests by Planner Code.Close_QPushButton");
    clickButton(":Purchase Requests by Planner Code.Close_QPushButton");
    
    //---Posting Purchase Orders---
    waitForObjectItem(":xTuple ERP:*_QMenuBar_2", "Purchase");
    activateItem(":xTuple ERP:*_QMenuBar_2", "Purchase");
    waitForObjectItem(":xTuple ERP:*.Purchase_QMenu", "Purchase Order");
    activateItem(":xTuple ERP:*.Purchase_QMenu", "Purchase Order");
    waitForObjectItem(":xTuple ERP:*.Purchase Order_QMenu", "List Unposted...");
    activateItem(":xTuple ERP:*.Purchase Order_QMenu", "List Unposted...");
    
    waitForObject(":List Unposted Purchase Orders._pohead_XTreeWidget");
    clickItem(":List Unposted Purchase Orders._pohead_XTreeWidget", ponumber, 5, 5, 1, Qt.LeftButton);
    waitForObject(":List Unposted Purchase Orders.Post P/O_QPushButton");
    clickButton(":List Unposted Purchase Orders.Post P/O_QPushButton");
    waitForObject(":List Unposted Purchase Orders.Yes_QPushButton");
    clickButton(":List Unposted Purchase Orders.Yes_QPushButton");
    waitForObject(":List Unposted Purchase Orders.Close_QPushButton");
    clickButton(":List Unposted Purchase Orders.Close_QPushButton");
    
    //---Receiving Purchase Goods---
    waitForObjectItem(":xTuple ERP:*_QMenuBar_2", "Inventory");
    activateItem(":xTuple ERP:*_QMenuBar_2", "Inventory");
    waitForObjectItem(":xTuple ERP:*.Inventory_QMenu", "Receiving");
    activateItem(":xTuple ERP:*.Inventory_QMenu", "Receiving");
    
    waitForObjectItem(":xTuple ERP:*.Receiving_QMenu", "New Receipt...");
    activateItem(":xTuple ERP:*.Receiving_QMenu", "New Receipt...");
    waitForObject(":Enter Order Receipts...._QPushButton");
    clickButton(":Enter Order Receipts...._QPushButton");
    waitForObject(":_listTab_XTreeWidget_3");
    doubleClickItem(":_listTab_XTreeWidget_3", ponumber, 5, 5, 0, Qt.LeftButton);
    waitForObject(":Enter Order Receipts.Receive All_QPushButton");
    clickButton(":Enter Order Receipts.Receive All_QPushButton");
    waitForObject(":Enter Order Receipts.Post_QPushButton");
    clickButton(":Enter Order Receipts.Post_QPushButton");
    waitForObject(":Enter Order Receipts.Close_QPushButton");
    clickButton(":Enter Order Receipts.Close_QPushButton");

    //---Entering a Voucher---
    waitForObjectItem(":xTuple ERP:*_QMenuBar_2", "Accounting");
    activateItem(":xTuple ERP:*_QMenuBar_2", "Accounting");
    waitForObjectItem(":xTuple ERP:*.Accounting_QMenu", "Accounts Payable");
    activateItem(":xTuple ERP:*.Accounting_QMenu", "Accounts Payable");
    waitForObjectItem(":xTuple ERP:*.Accounts Payable_QMenu", "Voucher");
    activateItem(":xTuple ERP:*.Accounts Payable_QMenu", "Voucher");
    waitForObjectItem(":xTuple ERP:*.Voucher_QMenu", "New...");
    activateItem(":xTuple ERP:*.Voucher_QMenu", "New...");
    
    vounumber = findObject(":_voucherNumber_XLineEdit").text; 
   
    waitForObject(":_voucherGroup...._QPushButton");
    clickButton(":_voucherGroup...._QPushButton");
    waitForObject(":_pohead_XTreeWidget");
    doubleClickItem(":_pohead_XTreeWidget", ponumber, 5, 5, 0, Qt.LeftButton);
    waitForObject(":_poitems._poitem_XTreeWidget");
    doubleClickItem(":_poitems._poitem_XTreeWidget", "EA", 5, 5, 0, Qt.LeftButton);
    waitForObject(":frame_2._uninvoiced_XTreeWidget");
    doubleClickItem(":frame_2._uninvoiced_XTreeWidget", "Receiving", 5, 5, 0, Qt.LeftButton);
    waitForObject(":frame.New_QPushButton");
    clickButton(":frame.New_QPushButton"); 
    waitForObject(":Voucher_XLineEdit");
    type(":Voucher_XLineEdit", "25");
    waitForObject(":Voucher.Save_QPushButton");
    clickButton(":Voucher.Save_QPushButton");
    waitForObject(":Voucher.Save_QPushButton_2");
    clickButton(":Voucher.Save_QPushButton_2");
    waitForObject(":_amount_XLineEdit");
    type(":_amount_XLineEdit", findObject(":_amount_XLineEdit_3").text);
    waitForObject(":_dateGroup.XDateEdit_XDateEdit");
    type(":_dateGroup.XDateEdit_XDateEdit", "+7");
    waitForObject(":_invoiceNum_XLineEdit");
    type(":_invoiceNum_XLineEdit", "VO for ");
    waitForObject(":Voucher.Save_QPushButton_3");
    clickButton(":Voucher.Save_QPushButton_3");
    waitForObject(":Voucher.Cancel_QPushButton");
    clickButton(":Voucher.Cancel_QPushButton");
          
    //---Posting Vouchers---
    waitForObjectItem(":xTuple ERP:*_QMenuBar_2", "Accounting");
    activateItem(":xTuple ERP:*_QMenuBar_2", "Accounting");
    waitForObjectItem(":xTuple ERP:*.Accounting_QMenu", "Accounts Payable");
    activateItem(":xTuple ERP:*.Accounting_QMenu", "Accounts Payable");
    waitForObjectItem(":xTuple ERP:*.Accounts Payable_QMenu", "Voucher");
    activateItem(":xTuple ERP:*.Accounts Payable_QMenu", "Voucher");
    waitForObjectItem(":xTuple ERP:*.Voucher_QMenu", "List Unposted...");
    activateItem(":xTuple ERP:*.Voucher_QMenu", "List Unposted...");
  
    waitForObject(":List Open Vouchers._vohead_XTreeWidget");
    clickItem(":List Open Vouchers._vohead_XTreeWidget", vounumber, 5, 5, 1, Qt.LeftButton);
    waitForObject(":List Open Vouchers.Post_QPushButton");
    clickButton(":List Open Vouchers.Post_QPushButton");
    waitForObject(":List Open Vouchers.Continue_QPushButton");
    clickButton(":List Open Vouchers.Continue_QPushButton");
    waitForObject(":List Open Vouchers.Close_QPushButton");
    clickButton(":List Open Vouchers.Close_QPushButton");
    
    //---Selecting Voucher for payment---
    waitForObjectItem(":xTuple ERP:*_QMenuBar_2", "Accounting");
    activateItem(":xTuple ERP:*_QMenuBar_2", "Accounting");
    waitForObjectItem(":xTuple ERP:*.Accounting_QMenu", "Accounts Payable");
    activateItem(":xTuple ERP:*.Accounting_QMenu", "Accounts Payable");
    waitForObjectItem(":xTuple ERP:*.Accounts Payable_QMenu", "Payments");
    activateItem(":xTuple ERP:*.Accounts Payable_QMenu", "Payments");
    waitForObjectItem(":xTuple ERP:*.Payments_QMenu", "Select...");
    activateItem(":xTuple ERP:*.Payments_QMenu", "Select...");
    
    waitForObjectItem(":Select Payments._select_XComboBox", "All Vendors");
    clickItem(":Select Payments._select_XComboBox", "All Vendors", 5, 5, 1, Qt.LeftButton);
    waitForObjectItem(":Select Payments._selectDate_XComboBox", "All");
    clickItem(":Select Payments._selectDate_XComboBox", "All", 5, 5, 1, Qt.LeftButton);
    waitForObject(":frame._apopen_XTreeWidget");
    clickItem(":frame._apopen_XTreeWidget", vounumber, 5, 5, 1, Qt.LeftButton);
    waitForObject(":frame.Select..._QPushButton");
    clickButton(":frame.Select..._QPushButton");
    waitForObjectItem(":_bankaccnt_XComboBox", "EBANK-eBank Checking Account");
    clickItem(":_bankaccnt_XComboBox", "EBANK-eBank Checking Account", 5, 5, 1, Qt.LeftButton);
    waitForObject(":Select Payments.Save_QPushButton");
    clickButton(":Select Payments.Save_QPushButton");
    waitForObject(":Select Payments.Close_QPushButton");
    clickButton(":Select Payments.Close_QPushButton");
    
    //---Prepare a Check run---
    waitForObjectItem(":xTuple ERP:*_QMenuBar_2", "Accounting");
    activateItem(":xTuple ERP:*_QMenuBar_2", "Accounting");
    waitForObjectItem(":xTuple ERP:*.Accounting_QMenu", "Accounts Payable");
    activateItem(":xTuple ERP:*.Accounting_QMenu", "Accounts Payable");
    waitForObjectItem(":xTuple ERP:*.Accounts Payable_QMenu", "Payments");
    activateItem(":xTuple ERP:*.Accounts Payable_QMenu", "Payments");
    
    waitForObjectItem(":xTuple ERP:*.Payments_QMenu", "Prepare Check Run...");
    activateItem(":xTuple ERP:*.Payments_QMenu", "Prepare Check Run...");
    waitForObjectItem(":Prepare Check Run._bankaccnt_XComboBox", "EBANK-eBank Checking Account");
    clickItem(":Prepare Check Run._bankaccnt_XComboBox", "EBANK-eBank Checking Account", 5, 5, 1, Qt.LeftButton);
    waitForObject(":Prepare Check Run.Prepare_QPushButton");
    clickButton(":Prepare Check Run.Prepare_QPushButton");
    
    //---Post Checks---
    waitForObjectItem(":xTuple ERP:*_QMenuBar_2", "Accounting");
    activateItem(":xTuple ERP:*_QMenuBar_2", "Accounting");
    waitForObjectItem(":xTuple ERP:*.Accounting_QMenu", "Accounts Payable");
    activateItem(":xTuple ERP:*.Accounting_QMenu", "Accounts Payable");
    waitForObjectItem(":xTuple ERP:*.Accounts Payable_QMenu", "Payments");
    activateItem(":xTuple ERP:*.Accounts Payable_QMenu", "Payments");
    
    waitForObjectItem(":xTuple ERP:*.Payments_QMenu", "Post Checks...");
    activateItem(":xTuple ERP:*.Payments_QMenu", "Post Checks...");
    waitForObjectItem(":Post Checks._bankaccnt_XComboBox", "EBANK-eBank Checking Account");
    clickItem(":Post Checks._bankaccnt_XComboBox", "EBANK-eBank Checking Account", 5, 5, 1, Qt.LeftButton);
    waitForObject(":Post Checks.Print Check Journal_XCheckBox");
    clickButton(":Post Checks.Print Check Journal_XCheckBox");
    waitForObject(":Post Checks.Post_QPushButton");
    clickButton(":Post Checks.Post_QPushButton");
    
    //---Releasing WorkOrders---
    waitForObjectItem(":xTuple ERP:*_QMenuBar_2", "Manufacture");
    activateItem(":xTuple ERP:*_QMenuBar_2", "Manufacture");
    waitForObjectItem(":xTuple ERP:*.Manufacture_QMenu", "Work Order");
    activateItem(":xTuple ERP:*.Manufacture_QMenu", "Work Order");
    waitForObjectItem(":xTuple ERP:*.Work Order_QMenu", "Release...");
    activateItem(":xTuple ERP:*.Work Order_QMenu", "Release...");
    
    waitForObject(":_plannerCode.All Planner Codes_QRadioButton_5");
    clickButton(":_plannerCode.All Planner Codes_QRadioButton_5");
    waitForObjectItem(":_warehouse._warehouses_WComboBox_5", "WH1");
    clickItem(":_warehouse._warehouses_WComboBox_5", "WH1", 5, 5, 1, Qt.LeftButton);
    waitForObject(":_dateGroup.XDateEdit_XDateEdit_4");
    type(":_dateGroup.XDateEdit_XDateEdit_4", "+30");
    waitForObject(":Release Work Orders by Planner Code.Release_QPushButton");
    clickButton(":Release Work Orders by Planner Code.Release_QPushButton");
    
    //---Issuing Work Order Materials---
    waitForObjectItem(":xTuple ERP:*_QMenuBar_2", "Manufacture");
    activateItem(":xTuple ERP:*_QMenuBar_2", "Manufacture");
    waitForObjectItem(":xTuple ERP:*.Manufacture_QMenu", "Transactions");
    activateItem(":xTuple ERP:*.Manufacture_QMenu", "Transactions");
    waitForObjectItem(":xTuple ERP:*.Transactions_QMenu", "Issue Material");
    activateItem(":xTuple ERP:*.Transactions_QMenu", "Issue Material");
    waitForObjectItem(":xTuple ERP:*.Issue Material_QMenu", "Batch...");
    activateItem(":xTuple ERP:*.Issue Material_QMenu", "Batch...");
    
    waitForObject(":Issue Work Order Material Batch...._QPushButton");
    clickButton(":Issue Work Order Material Batch...._QPushButton");
    waitForObject(":Work Orders._wo_XTreeWidget");
    doubleClickItem(":Work Orders._wo_XTreeWidget", "TKIT1", 5, 5, 0, Qt.LeftButton); 
    waitForObject(":Issue Work Order Material Batch.Post_QPushButton");
    clickButton(":Issue Work Order Material Batch.Post_QPushButton");
        
    //---Post Production and Close Work order---
    waitForObjectItem(":xTuple ERP:*_QMenuBar_2", "Manufacture");
    activateItem(":xTuple ERP:*_QMenuBar_2", "Manufacture");
    waitForObjectItem(":xTuple ERP:*.Manufacture_QMenu", "Transactions");
    activateItem(":xTuple ERP:*.Manufacture_QMenu", "Transactions");
    waitForObjectItem(":xTuple ERP:*.Transactions_QMenu", "Post Production...");
    activateItem(":xTuple ERP:*.Transactions_QMenu", "Post Production...");
    
    waitForObject(":Post Production...._QPushButton");
    clickButton(":Post Production...._QPushButton");
    waitForObject(":Work Orders._wo_XTreeWidget");
    doubleClickItem(":Work Orders._wo_XTreeWidget", "I", 5, 5, 0, Qt.LeftButton);
    waitForObject(":_qty_XLineEdit");
    type(":_qty_XLineEdit",findObject(":_qtyGroup.100.00_XLabel").text);
    waitForObject(":_optionsGroup.Close W/O after Posting_XCheckBox");
    clickButton(":_optionsGroup.Close W/O after Posting_XCheckBox");
    waitForObject(":Post Production.Post_QPushButton");
    clickButton(":Post Production.Post_QPushButton");
    waitForObject(":Close Work Order.Post Comment_XCheckBox");
    clickButton(":Close Work Order.Post Comment_XCheckBox");
   
    waitForObject(":Close Work Order.Close W/O_QPushButton");
    clickButton(":Close Work Order.Close W/O_QPushButton");
    waitForObject(":Close Work Order.Close Work Order_QPushButton");
    clickButton(":Close Work Order.Close Work Order_QPushButton");
    waitForObject(":Post Production.Close_QPushButton");
    clickButton(":Post Production.Close_QPushButton");
    
    //---BackFlush Items and Close Work Order---
    waitForObjectItem(":xTuple ERP:*_QMenuBar_2", "Manufacture");
    activateItem(":xTuple ERP:*_QMenuBar_2", "Manufacture");
    waitForObjectItem(":xTuple ERP:*.Manufacture_QMenu", "Transactions");
    activateItem(":xTuple ERP:*.Manufacture_QMenu", "Transactions");
    waitForObjectItem(":xTuple ERP:*.Transactions_QMenu", "Post Production...");
    activateItem(":xTuple ERP:*.Transactions_QMenu", "Post Production...");
   
    waitForObject(":Post Production...._QPushButton");
    clickButton(":Post Production...._QPushButton");
    waitForObject(":Work Orders._wo_XTreeWidget");
    doubleClickItem(":Work Orders._wo_XTreeWidget", "YTRUCK1", 5, 5, 0, Qt.LeftButton);
   
    waitForObject(":_qty_XLineEdit");
    type(":_qty_XLineEdit",findObject(":_qtyGroup.100.00_XLabel").text);
   
    waitForObject(":_optionsGroup.Close W/O after Posting_XCheckBox");
    clickButton(":_optionsGroup.Close W/O after Posting_XCheckBox");
    waitForObject(":Post Production.Post_QPushButton");
    clickButton(":Post Production.Post_QPushButton");
    waitForObject(":Distribute Stock To/From Site Locations._itemloc_XTreeWidget");
    doubleClick(":Distribute Stock To/From Site Locations._itemloc_XTreeWidget", 5, 5, 0, Qt.LeftButton);
    waitForObject(":Distribute to Location.Distribute_QPushButton");
    clickButton(":Distribute to Location.Distribute_QPushButton");
    waitForObject(":Distribute Stock To/From Site Locations.Post_QPushButton");
    clickButton(":Distribute Stock To/From Site Locations.Post_QPushButton");
    waitForObject(":Close Work Order.Close W/O_QPushButton");
    clickButton(":Close Work Order.Close W/O_QPushButton");
    waitForObject(":Close Work Order.Close Work Order_QPushButton");
    clickButton(":Close Work Order.Close Work Order_QPushButton");
    waitForObject(":Post Production.Close_QPushButton");
    clickButton(":Post Production.Close_QPushButton");
    
    //---Issue Stock to Shipping---
    waitForObjectItem(":xTuple ERP:*_QMenuBar_2", "Inventory");
    activateItem(":xTuple ERP:*_QMenuBar_2", "Inventory");
    waitForObjectItem(":xTuple ERP:*.Inventory_QMenu", "Shipping");
    activateItem(":xTuple ERP:*.Inventory_QMenu", "Shipping");
    waitForObjectItem(":xTuple ERP:*.Shipping_QMenu", "Issue to Shipping...");
    activateItem(":xTuple ERP:*.Shipping_QMenu", "Issue to Shipping...");
   
    waitForObject(":Issue to Shipping...._QPushButton");
    clickButton(":Issue to Shipping...._QPushButton");
    waitForObject(":_listTab_XTreeWidget_5");
    doubleClickItem(":_listTab_XTreeWidget_5", sonumber, 5, 5, 0, Qt.LeftButton);
    waitForObject(":frame.Issue All Bal._QPushButton");
    clickButton(":frame.Issue All Bal._QPushButton");
    waitForObject(":Issue to Shipping.Ship Order_QPushButton");
    clickButton(":Issue to Shipping.Ship Order_QPushButton");
    waitForObject(":groupBox.Select for Billing_QCheckBox");
    clickButton(":groupBox.Select for Billing_QCheckBox");
    waitForObject(":groupBox.Print Packing List_XCheckBox");
    clickButton(":groupBox.Print Packing List_XCheckBox");
    waitForObject(":Issue to Shipping.Ship_QPushButton");
    clickButton(":Issue to Shipping.Ship_QPushButton");
    waitForObject(":Issue to Shipping.Close_QPushButton");
    clickButton(":Issue to Shipping.Close_QPushButton");
   
    //---Select Order for Billing---
    waitForObjectItem(":xTuple ERP:*_QMenuBar_2", "Sales");
    activateItem(":xTuple ERP:*_QMenuBar_2", "Sales");
    waitForObjectItem(":xTuple ERP:*.Sales_QMenu_2", "Billing");
    activateItem(":xTuple ERP:*.Sales_QMenu_2", "Billing");
    waitForObjectItem(":xTuple ERP:*.Billing_QMenu", "Invoice");
    activateItem(":xTuple ERP:*.Billing_QMenu", "Invoice");
    waitForObjectItem(":xTuple ERP:*.Invoice_QMenu", "Select Order for Billing...");
    activateItem(":xTuple ERP:*.Invoice_QMenu", "Select Order for Billing...");
    
    waitForObject(":Select Order for Billing...._QPushButton");
    clickButton(":Select Order for Billing...._QPushButton");
    waitForObject(":Select Order for Billing._so_XTreeWidget");
    doubleClickItem(":Select Order for Billing._so_XTreeWidget", sonumber, 5, 5, 0, Qt.LeftButton);
    waitForObject(":_lineitemsTab._soitem_XTreeWidget");
    doubleClickItem(":_lineitemsTab._soitem_XTreeWidget", "EA", 5, 5, 0, Qt.LeftButton);
    waitForObject(":Select Order for Billing.Save_QPushButton");
    clickButton(":Select Order for Billing.Save_QPushButton");
    waitForObject(":Select Order for Billing.Save_QPushButton_2");
    clickButton(":Select Order for Billing.Save_QPushButton_2");
    waitForObject(":Select Order for Billing.Close_QPushButton");
    clickButton(":Select Order for Billing.Close_QPushButton");
   
    //---Creating Invoices---
    waitForObjectItem(":xTuple ERP:*_QMenuBar_2", "Sales");
    activateItem(":xTuple ERP:*_QMenuBar_2", "Sales");
    waitForObjectItem(":xTuple ERP:*.Sales_QMenu_2", "Billing");
    activateItem(":xTuple ERP:*.Sales_QMenu_2", "Billing");
    waitForObjectItem(":xTuple ERP:*.Billing_QMenu", "Invoice");
    activateItem(":xTuple ERP:*.Billing_QMenu", "Invoice");
    waitForObjectItem(":xTuple ERP:*.Invoice_QMenu", "Billing Selections...");
    activateItem(":xTuple ERP:*.Invoice_QMenu", "Billing Selections...");
    
    waitForObject(":Billing Selections._cobill_XTreeWidget");
    clickItem(":Billing Selections._cobill_XTreeWidget", sonumber, 5, 5, 0, Qt.LeftButton);
    waitForObject(":Billing Selections.Create Invoice_QPushButton");
    clickButton(":Billing Selections.Create Invoice_QPushButton");
    waitForObject(":Billing Selections.Close_QPushButton");
    clickButton(":Billing Selections.Close_QPushButton");
    
    //---Posting Invoices---
    waitForObjectItem(":xTuple ERP:*_QMenuBar_2", "Sales");
    activateItem(":xTuple ERP:*_QMenuBar_2", "Sales");
    waitForObjectItem(":xTuple ERP:*.Sales_QMenu_2", "Billing");
    activateItem(":xTuple ERP:*.Sales_QMenu_2", "Billing");
    waitForObjectItem(":xTuple ERP:*.Billing_QMenu", "Invoice");
    activateItem(":xTuple ERP:*.Billing_QMenu", "Invoice");
    waitForObjectItem(":xTuple ERP:*.Invoice_QMenu", "List Unposted Invoices...");
    activateItem(":xTuple ERP:*.Invoice_QMenu", "List Unposted Invoices...");
    
    waitForObject(":_invchead_XTreeWidget");
    doubleClickItem(":_invchead_XTreeWidget", sonumber, 5, 5, 0, Qt.LeftButton);
    waitForObject(":Invoice.Close_QPushButton");
    
    invoice = findObject(":_invoiceNumber_XLineEdit").text;
    
    clickButton(":Invoice.Close_QPushButton");
    waitForObject(":List Unposted Invoices.Post_QPushButton");
    clickButton(":List Unposted Invoices.Post_QPushButton");
    waitForObject(":List Unposted Invoices.Continue_QPushButton");
    clickButton(":List Unposted Invoices.Continue_QPushButton");
    waitForObject(":List Unposted Invoices.Close_QPushButton");
    clickButton(":List Unposted Invoices.Close_QPushButton");

    //---Entering Cash Receipts---
    waitForObjectItem(":xTuple ERP:*_QMenuBar_2", "Accounting");
    activateItem(":xTuple ERP:*_QMenuBar_2", "Accounting");
    waitForObjectItem(":xTuple ERP:*.Accounting_QMenu", "Accounts Receivable");
    activateItem(":xTuple ERP:*.Accounting_QMenu", "Accounts Receivable");
    waitForObjectItem(":xTuple ERP:*.Accounts Receivable_QMenu", "Workbench...");
    activateItem(":xTuple ERP:*.Accounts Receivable_QMenu", "Workbench...");
    
    waitForObjectItem(":frame._select_XComboBox", "All Customers");
    clickItem(":frame._select_XComboBox", "All Customers", 5, 5, 1, Qt.LeftButton);
    waitForObject(":Receivables Workbench.Query_QPushButton");
    clickButton(":Receivables Workbench.Query_QPushButton");
    waitForObject(":Receivables Workbench.qt_tabwidget_tabbar_QTabBar");
    clickTab(":Receivables Workbench.qt_tabwidget_tabbar_QTabBar", "Cash Receipts");
    waitForObject(":_cashRecptTab.New_QPushButton");
    clickButton(":_cashRecptTab.New_QPushButton");
    waitForObject(":Cash Receipt...._QPushButton");
    clickButton(":Cash Receipt...._QPushButton");
    waitForObject(":_listTab_XTreeWidget_6");
    doubleClickItem(":_listTab_XTreeWidget_6", "TTOYS", 37, 14, 0, Qt.LeftButton);
    waitForObject(":_applicationsTab._aropen_XTreeWidget");
    doubleClickItem(":_applicationsTab._aropen_XTreeWidget", sonumber, 5, 5, 0, Qt.LeftButton);
    waitForObject(":Cash Receipt_XLineEdit");
    
    amount = findObject(":Cash Receipt_XLineEdit_2").text;
    
    type(":Cash Receipt_XLineEdit", amount);
    waitForObject(":Cash Receipt.Save_QPushButton");
    clickButton(":Cash Receipt.Save_QPushButton");
    waitForObject(":_amountGroup_XLineEdit");
    type(":_amountGroup_XLineEdit", amount);
    waitForObject(":Cash Receipt.Save_QPushButton_2");
    clickButton(":Cash Receipt.Save_QPushButton_2");
    
    //---Posting Cash Receipts---
    waitForObject(":_cashRecptTab._cashrcpt_XTreeWidget");
    clickItem(":_cashRecptTab._cashrcpt_XTreeWidget" ,"TTOYS", 5, 5, 1, Qt.LeftButton);
    waitForObject(":_cashRecptTab.Post_QPushButton");
    clickButton(":_cashRecptTab.Post_QPushButton");
    waitForObject(":Receivables Workbench.Close_QPushButton");
    clickButton(":Receivables Workbench.Close_QPushButton");
  
    //---Customer Information Workbench---
    waitForObjectItem(":xTuple ERP:*_QMenuBar_2", "Sales");
    activateItem(":xTuple ERP:*_QMenuBar_2", "Sales");
    waitForObjectItem(":xTuple ERP:*.Sales_QMenu_2", "Customer");
    activateItem(":xTuple ERP:*.Sales_QMenu_2", "Customer");
    waitForObjectItem(":xTuple ERP:*.Customer_QMenu", "Workbench...");
    activateItem(":xTuple ERP:*.Customer_QMenu", "Workbench...");
    
    waitForObject(":Customer Information Workbench...._QPushButton");
    clickButton(":Customer Information Workbench...._QPushButton");
    waitForObject(":_listTab_XTreeWidget_7");
    doubleClickItem(":_listTab_XTreeWidget_7", "TTOYS", 5, 5, 0, Qt.LeftButton);
    waitForObject(":Customer Information Workbench.Query_QPushButton");
    clickButton(":Customer Information Workbench.Query_QPushButton");
    waitForObject(":Customer Information Workbench.qt_tabwidget_tabbar_QTabBar");
    clickTab(":Customer Information Workbench.qt_tabwidget_tabbar_QTabBar", "Invoices");
     waitForObject(":_invoicesTab.Show Closed_XCheckBox");
    clickButton(":_invoicesTab.Show Closed_XCheckBox");
    waitForObject(":Customer Information Workbench.Close_QPushButton");
    clickButton(":Customer Information Workbench.Close_QPushButton");
  

}
