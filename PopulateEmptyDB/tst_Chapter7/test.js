function main()
{


    source(findFile("scripts","functions.js"));

     //---login Application--------
     loginAppl("user01");     

    //--------Configure: Purchase Module-------------------
    waitForObjectItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "System");
    activateItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "System");
    waitForObjectItem(":xTuple ERP: OpenMFG Edition.System_QMenu", "Configure Modules");
    activateItem(":xTuple ERP: OpenMFG Edition.System_QMenu", "Configure Modules");
    waitForObjectItem(":xTuple ERP: OpenMFG Edition.Configure Modules_QMenu", "Purchase...");
    activateItem(":xTuple ERP: OpenMFG Edition.Configure Modules_QMenu", "Purchase...");
    waitForObject(":_orderNumGeneration_QComboBox");
    if(findObject(":_orderNumGeneration_QComboBox").currentText!="Automatic")
        clickItem(":_orderNumGeneration_QComboBox", "Automatic",0,0,1,Qt.LeftButton);
    type(":_nextPoNumber_XLineEdit", "<Ctrl+A>");
    type(":_nextPoNumber_XLineEdit", "<Del>");
    type(":_nextPoNumber_XLineEdit", "20000");
    type(":_nextVcNumber_XLineEdit", "<Ctrl+A>");
    type(":_nextVcNumber_XLineEdit", "<Del>");
    type(":_nextVcNumber_XLineEdit", "30000");
    if(findObject(":_prNumberGeneration_QComboBox").currentText!="Automatic")
        type(":_prNumberGeneration_QComboBox", "Automatic");
    type(":_nextPrNumber_XLineEdit", "<Ctrl+A>");
    type(":_nextPrNumber_XLineEdit", "<Del>");
    type(":_nextPrNumber_XLineEdit", "10000");
    if(!findObject(":Default P/O Copies:.Vendor_QCheckBox").checked)
        clickButton(":Default P/O Copies:.Vendor_QCheckBox");
    if(findObject(":Default P/O Copies:.Internal_QCheckBox").checked)
        clickButton(":Default P/O Copies:.Internal_QCheckBox");
    if(!findObject(":Purchase Configuration.Post P/O Changes to the Change Log_QCheckBox"))
        clickButton(":Purchase Configuration.Post P/O Changes to the Change Log_QCheckBox");
    if(!findObject(":Purchase Configuration.Post Vendor Changes to the Change Log_QCheckBox"))
        clickButton(":Purchase Configuration.Post Vendor Changes to the Change Log_QCheckBox");
    if(!findObject(":Purchase Configuration.Use Earliest Avail. as Due Date for P/O Item_QCheckBox"))
        clickButton(":Purchase Configuration.Use Earliest Avail. as Due Date for P/O Item_QCheckBox");
    if(!findObject(":Purchase Configuration.Prevent P/O Items when no Std. Cost Exists_QCheckBox"))
        clickButton(":Purchase Configuration.Prevent P/O Items when no Std. Cost Exists_QCheckBox");
    if(!findObject(":Purchase Configuration.Check Print P/O on Save by Default_QCheckBox"))
        clickButton(":Purchase Configuration.Check Print P/O on Save by Default_QCheckBox");
    type(":_defaultShipVia_XLineEdit", "<Ctrl+A>");    
    type(":_defaultShipVia_XLineEdit", "<Del>");
    type(":_defaultShipVia_XLineEdit", "UPS Account 1234567");
    clickButton(":Purchase Configuration.Save_QPushButton");
    test.log("Purchase Module Configured");
  
    
    //-------------Configure: Inventory Module---------------------
    waitForObjectItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "System");
    activateItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "System");
    waitForObjectItem(":xTuple ERP: OpenMFG Edition.System_QMenu", "Configure Modules");
    activateItem(":xTuple ERP: OpenMFG Edition.System_QMenu", "Configure Modules");
    waitForObjectItem(":xTuple ERP: OpenMFG Edition.Configure Modules_QMenu", "Inventory...");
    activateItem(":xTuple ERP: OpenMFG Edition.Configure Modules_QMenu", "Inventory...");
    waitForObject(":Inventory Configuration.qt_tabwidget_tabbar_QTabBar");
    clickTab(":Inventory Configuration.qt_tabwidget_tabbar_QTabBar", "Shipping and Receiving");
    waitForObject(":_nextShipmentNum_XLineEdit");
    type(":_nextShipmentNum_XLineEdit", "<Ctrl+A>");
    type(":_nextShipmentNum_XLineEdit", "<Del>");
    type(":_nextShipmentNum_XLineEdit", "10000");
    if(findObject(":tab_2.Disallow P/O Receipt of Qty greater than ordered_QCheckBox").checked)
        clickButton(":tab_2.Disallow P/O Receipt of Qty greater than ordered_QCheckBox");
    if(!findObject(":tab_2.Warn if P/O Receipt Qty differs from receivable Qty_QCheckBox").checked)
        clickButton(":tab_2.Warn if P/O Receipt Qty differs from receivable Qty_QCheckBox");
    waitForObject(":_tolerance_QLineEdit");
    type(":_tolerance_QLineEdit", "5");
    type(":_shipformNumOfCopies_QSpinBox", "<Ctrl+A>");
    type(":_shipformNumOfCopies_QSpinBox", "<Del>");
    type(":_shipformNumOfCopies_QSpinBox", "2");
    doubleClickItem(":Default Shipping Form Copies:._shipformWatermarks_XTreeWidget", "Copy #1",5,5,0,Qt.LeftButton);
    waitForObject(":Invoice/Credit Memo Watermark._watermark_XLineEdit");
    type(":Invoice/Credit Memo Watermark._watermark_XLineEdit", "Customer");
    if(!findObject(":Invoice/Credit Memo Watermark.Show Prices_QCheckBox").checked)
        clickButton(":Invoice/Credit Memo Watermark.Show Prices_QCheckBox");
    clickButton(":Invoice/Credit Memo Watermark.Save_QPushButton");
    waitForObject(":Default Shipping Form Copies:._shipformWatermarks_XTreeWidget");
    doubleClickItem(":Default Shipping Form Copies:._shipformWatermarks_XTreeWidget", "Copy #2",5,5,0,Qt.LeftButton);
    waitForObject(":Invoice/Credit Memo Watermark._watermark_XLineEdit");
    type(":Invoice/Credit Memo Watermark._watermark_XLineEdit", "Internal");
    if(!findObject(":Invoice/Credit Memo Watermark.Show Prices_QCheckBox"))
        clickButton(":Invoice/Credit Memo Watermark.Show Prices_QCheckBox");
    clickButton(":Invoice/Credit Memo Watermark.Save_QPushButton");
    
    waitForObject(":Inventory Configuration.Save_QPushButton");
    clickButton(":Inventory Configuration.Save_QPushButton");
    test.log("Inventory Module configured");
    
    //---------Configure: Accounting-Account Payble---------------
    waitForObjectItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "System");
    activateItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "System");
    waitForObjectItem(":xTuple ERP: OpenMFG Edition.System_QMenu", "Configure Modules");
    activateItem(":xTuple ERP: OpenMFG Edition.System_QMenu", "Configure Modules");
    waitForObjectItem(":xTuple ERP: OpenMFG Edition.Configure Modules_QMenu", "Accounting...");
    activateItem(":xTuple ERP: OpenMFG Edition.Configure Modules_QMenu", "Accounting...");
    waitForObject(":Accounting Configuration.qt_tabwidget_tabbar_QTabBar");
    clickTab(":Accounting Configuration.qt_tabwidget_tabbar_QTabBar", "Accounts Payable");
    waitForObject(":_nextAPMemoNumber_XLineEdit");
    type(":_nextAPMemoNumber_XLineEdit", "<Ctrl>");
    type(":_nextAPMemoNumber_XLineEdit", "<Del>");
    type(":_nextAPMemoNumber_XLineEdit", "39000");
    clickButton(":Accounting Configuration.Save_QPushButton");
    test.log("Account-Accounts Payable configured");
  
 
    //----------Define Vendor types--------------
    waitForObjectItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "Purchase");
    activateItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "Purchase");
    waitForObjectItem(":xTuple ERP: OpenMFG Edition.Purchase_QMenu", "Vendor");
    activateItem(":xTuple ERP: OpenMFG Edition.Purchase_QMenu", "Vendor");
    waitForObjectItem(":xTuple ERP: OpenMFG Edition.Vendor_QMenu", "Types...");
    activateItem(":xTuple ERP: OpenMFG Edition.Vendor_QMenu", "Types...");
    waitForObject(":List Vendor Types.New_QPushButton");
    clickButton(":List Vendor Types.New_QPushButton");
    waitForObject(":_code_XLineEdit_8");
    type(":_code_XLineEdit_8", "STANDARD");
    type(":_description_XLineEdit_18", "Standard Vendor");
    clickButton(":Vendor Type.Save_QPushButton");
    waitForObject(":List Vendor Types._vendtype_XTreeWidget");
    if(!clickItem(":List Vendor Types._vendtype_XTreeWidget", "STANDARD", 5, 5 ,1, Qt.LeftButton))
        test.pass("Vendor Types Created: STANDARD");
    
    waitForObject(":List Vendor Types.Close_QPushButton");
    clickButton(":List Vendor Types.Close_QPushButton");
  
  
    
    //---------Purchase: define Terms--------------
    waitForObjectItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "Purchase");
    activateItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "Purchase");
    waitForObjectItem(":xTuple ERP: OpenMFG Edition.Purchase_QMenu", "Master Information");
    activateItem(":xTuple ERP: OpenMFG Edition.Purchase_QMenu", "Master Information");
    waitForObjectItem(":xTuple ERP: OpenMFG Edition.Master Information_QMenu_6", "Terms...");
    activateItem(":xTuple ERP: OpenMFG Edition.Master Information_QMenu_6", "Terms...");
    waitForObject(":List Terms.New_QPushButton");
    clickButton(":List Terms.New_QPushButton");
    waitForObject(":_code_XLineEdit_9");
    type(":_code_XLineEdit_9", "2-10N30");
    type(":_description_XLineEdit_19", "2% Discount in 10 Days - Net 30 Days");
    if(!findObject(":_typeGroup.Days_QRadioButton").checked)
        clickButton(":_typeGroup.Days_QRadioButton");
    if(!findObject(":Terms.Used in A/P_QCheckBox").checked)
        clickButton(":Terms.Used in A/P_QCheckBox");
    if(!findObject(":Terms.Used in A/R_QCheckBox").checked)
        clickButton(":Terms.Used in A/R_QCheckBox");
    type(":_dueDays_QSpinBox", "<Ctrl+A>");
    type(":_dueDays_QSpinBox", "<Del>");
    type(":_dueDays_QSpinBox", "30");
    type(":_discountDays_QSpinBox", "<Ctrl+A>");
    type(":_discountDays_QSpinBox", "<Del>");
    type(":_discountDays_QSpinBox", "10");
    type(":_discountPercent_XLineEdit", "<Ctrl+A>");
    type(":_discountPercent_XLineEdit", "<Del>");
    type(":_discountPercent_XLineEdit", "2");
    waitForObject(":Terms.Save_QPushButton");
    clickButton(":Terms.Save_QPushButton");
    waitForObject(":List Terms._terms_XTreeWidget");
    if(!clickItem(":List Terms._terms_XTreeWidget", "2-10N30", 5, 5, 1, Qt.LeftButton))
        test.pass("Terms Created: 2-10N30");
    waitForObject(":List Terms.Close_QPushButton");
    clickButton(":List Terms.Close_QPushButton");

    
    //-------------Define: Reject Codes-----------------
    waitForObjectItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "Purchase");
    activateItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "Purchase");
    waitForObjectItem(":xTuple ERP: OpenMFG Edition.Purchase_QMenu", "Master Information");
    activateItem(":xTuple ERP: OpenMFG Edition.Purchase_QMenu", "Master Information");
    waitForObjectItem(":xTuple ERP: OpenMFG Edition.Master Information_QMenu_6", "Reject Codes...");
    activateItem(":xTuple ERP: OpenMFG Edition.Master Information_QMenu_6", "Reject Codes...");
    
    waitForObject(":List Reject Codes.New_QPushButton");
    clickButton(":List Reject Codes.New_QPushButton");
    waitForObject(":_code_XLineEdit_10");
    type(":_code_XLineEdit_10", "PO-DAMAGED-RETURNED");
    type(":_description_XLineEdit_20", "Damaged Purchased Material - Returned");
    waitForObject(":Reject Code.Save_QPushButton");
    clickButton(":Reject Code.Save_QPushButton");
    waitForObject(":List Reject Codes._rjctcode_XTreeWidget");
    if(!clickItem(":List Reject Codes._rjctcode_XTreeWidget", "PO-DAMAGED-RETURNED", 5, 5, 1, Qt.LeftButton))
        test.pass("Reject Codes Created: PO-DAMAGED-RETURNED");

    
    waitForObject(":List Reject Codes.New_QPushButton");
    clickButton(":List Reject Codes.New_QPushButton");
    waitForObject(":_code_XLineEdit_10");
    type(":_code_XLineEdit_10", "PO-WRONG-RETURNED");
    type(":_description_XLineEdit_20", "Wrong Purchased Product - Returned");
    waitForObject(":Reject Code.Save_QPushButton");
    clickButton(":Reject Code.Save_QPushButton");
    waitForObject(":List Reject Codes._rjctcode_XTreeWidget");
    if(!clickItem(":List Reject Codes._rjctcode_XTreeWidget", "PO-WRONG-RETURNED", 5, 5, 1, Qt.LeftButton))
        test.pass("Reject Codes Created: PO-WRONG-RETURNED");
    
    waitForObject(":List Reject Codes.Close_QPushButton");
    clickButton(":List Reject Codes.Close_QPushButton");

    
    //-----------Chart Of Accounts-------------------------------
    waitForObjectItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "Accounting");
    activateItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "Accounting");
    waitForObjectItem(":xTuple ERP: OpenMFG Edition.Accounting_QMenu", "Account");
    activateItem(":xTuple ERP: OpenMFG Edition.Accounting_QMenu", "Account");
    waitForObjectItem(":xTuple ERP: OpenMFG Edition.Account_QMenu", "Chart of Accounts...");
    activateItem(":xTuple ERP: OpenMFG Edition.Account_QMenu", "Chart of Accounts...");
    
    COA("01","01","2000","01","Accounts Payable","Liability","AP");
    waitForObject(":_account_XTreeWidget_2");
    if(!clickItem(":_account_XTreeWidget_2", "Accounts Payable", 5, 5, 1, Qt.LeftButton))
        test.pass("COA Created for: Accounts Payable");

    COA("01","01","1400","01","Prepaid Account - Purchasing","Asset","CAS");
    waitForObject(":_account_XTreeWidget_2");
    if(!clickItem(":_account_XTreeWidget_2", "Prepaid Account - Purchasing", 5, 5, 1, Qt.LeftButton))
        test.pass("COA Created for: Prepaid Account - Purchasing");
    
    COA("01","01","4900","01","Promotions and Discounts Taken","Revenue","SI");
    waitForObject(":_account_XTreeWidget_2");
    if(!clickItem(":_account_XTreeWidget_2", "Promotions and Discounts Taken", 5, 5, 1, Qt.LeftButton))
        test.pass("COA Created for: Promotions and Discounts Taken");
    
    
    COA("01","01","4060","01","Shipping Charges Revenue","Revenue","SO");
    waitForObject(":_account_XTreeWidget_2");
    if(!clickItem(":_account_XTreeWidget_2", "Shipping Charges Revenue", 5, 5, 1, Qt.LeftButton))
        test.pass("COA Created for: Shipping Charges Revenue");
    
    waitForObject(":Chart of Accounts.Close_QPushButton_2");
    clickButton(":Chart of Accounts.Close_QPushButton_2");
  
    
     //----------Purchase: A/P Account Assignments-----------
    waitForObjectItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "Purchase");
    activateItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "Purchase");
    waitForObjectItem(":xTuple ERP: OpenMFG Edition.Purchase_QMenu", "Master Information");
    activateItem(":xTuple ERP: OpenMFG Edition.Purchase_QMenu", "Master Information");
    waitForObjectItem(":xTuple ERP: OpenMFG Edition.Master Information_QMenu_6", "A/P Account Assignments...");
    activateItem(":xTuple ERP: OpenMFG Edition.Master Information_QMenu_6", "A/P Account Assignments...");
   
    waitForObject(":List A/P Account Assignments.New_QPushButton");
    clickButton(":List A/P Account Assignments.New_QPushButton");
    waitForObject(":_vendorTypeGroup.All Vendor Types:_QRadioButton");
    clickButton(":_vendorTypeGroup.All Vendor Types:_QRadioButton");
    type(":A/P Account Assignment._main_XLineEdit", "01-01-2000-01");
    type(":A/P Account Assignment._main_XLineEdit_2", "01-01-1400-01");
    type(":A/P Account Assignment._main_XLineEdit_3", "01-01-4900-01");
    type(":A/P Account Assignment._main_XLineEdit_3", "<Tab>");
    clickButton(":A/P Account Assignment.Save_QPushButton");
    waitForObject(":List A/P Account Assignments._apaccnt_XTreeWidget");
    if(!clickItem(":List A/P Account Assignments._apaccnt_XTreeWidget", "All", 5, 5, 1, Qt.LeftButton))
        test.pass("Accounts(A/P) Assignment created for: All");
     
    waitForObject(":List A/P Account Assignments.Close_QPushButton");
    clickButton(":List A/P Account Assignments.Close_QPushButton");
 

  
    //--------------Create new Vendor-------------
    waitForObjectItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "Purchase");
    activateItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "Purchase");
    waitForObjectItem(":xTuple ERP: OpenMFG Edition.Purchase_QMenu", "Vendor");
    activateItem(":xTuple ERP: OpenMFG Edition.Purchase_QMenu", "Vendor");
    waitForObjectItem(":xTuple ERP: OpenMFG Edition.Vendor_QMenu", "List...");
    activateItem(":xTuple ERP: OpenMFG Edition.Vendor_QMenu", "List...");
    waitForObject(":List Vendors.New_QPushButton");
    clickButton(":List Vendors.New_QPushButton");
    waitForObject(":_number_XLineEdit_4");
    findObject(":_number_XLineEdit_4").clear();
    type(":_number_XLineEdit_4", "TPARTS");
    if(findObject(":_vendtype_XComboBox").currentText!="STANDARD-Standard Vendor")
        clickItem(":_vendtype_XComboBox", "STANDARD-Standard Vendor",0,0,1,Qt.LeftButton);
    type(":_name_XLineEdit_8", "Toy Parts Inc");
    type(":_accountNumber_XLineEdit", "110022");
    if(findObject(":Default._defaultTerms_XComboBox").currentText!="2-10N30-2% Discount in 10 Days - Net 30 Days")
        clickItem(":Default._defaultTerms_XComboBox", "2-10N30-2% Discount in 10 Days - Net 30 Days",0,0,1,Qt.LeftButton);
    clickButton(":Default FOB.Receiving Site_QRadioButton");
    if(findObject(":_settingsGroup.Sells Purchase Order Items_QCheckBox").checked)
        clickButton(":_settingsGroup.Sells Purchase Order Items_QCheckBox");
    if(findObject(":_settingsGroup.Qualified_QCheckBox").checked)
        clickButton(":_settingsGroup.Qualified_QCheckBox");
    if(!findObject(":_settingsGroup.Check for matching Voucher and Purchase Order amounts_QCheckBox").checked)
        clickButton(":_settingsGroup.Check for matching Voucher and Purchase Order amounts_QCheckBox");
    if(findObject(":_settingsGroup.May only Sell Items defined by an Item Source_QCheckBox").checked)
        clickButton(":_settingsGroup.May only Sell Items defined by an Item Source_QCheckBox");
    clickTab(":Vendor.qt_tabwidget_tabbar_QTabBar", "Contacts");
    waitForObject(":_contact1Box._honorific_XComboBox");
    clickItem(":_contact1Box._honorific_XComboBox", "Mr",0,0,1,Qt.LeftButton);
    type(":_contact1Box._first_XLineEdit", "Ramesh");
    type(":_contact1Box._middle_XLineEdit", "K");
    type(":_contact1Box._last_XLineEdit", "Thapar");
    type(":_contact1Box._title_XLineEdit", "Senior Executive");
    type(":_contact1Box._phone_XLineEdit", "124645987");
    type(":_contact1Box._fax_XLineEdit", "435433434");
    type(":_contact1Box._email_XLineEdit", "thappar@testing.com");
    clickItem(":_contact2Box._honorific_XComboBox", "Miss",0,0,1,Qt.LeftButton);
    type(":_contact2Box._first_XLineEdit", "Sunita");
    type(":_contact2Box._middle_XLineEdit", "S");
    type(":_contact2Box._last_XLineEdit", "Bhaglani");
    type(":_contact2Box._title_XLineEdit", "Financial Advisor");
    type(":_contact2Box._phone_XLineEdit", "234533534");
    type(":_contact2Box._fax_XLineEdit", "5436735654");
    type(":_contact2Box._email_XLineEdit", "sunita@testing.com");
    clickTab(":Vendor.qt_tabwidget_tabbar_QTabBar", "Order Notes");
    waitForObject(":ponotesTab._poComments_QTextEdit");
    type(":ponotesTab._poComments_QTextEdit", "Default Vendor Notes From Vendor Master");
 
    clickTab(":Vendor.qt_tabwidget_tabbar_QTabBar", "Transmission");
    waitForObject(":_transmitStack.Email Purchase Order Delivery_QGroupBox");
    if(!findObject(":_transmitStack.Email Purchase Order Delivery_QGroupBox").checked)
        type(":_transmitStack.Email Purchase Order Delivery_QGroupBox"," ");
    waitForObject(":Email Purchase Order Delivery._ediEmail_XLineEdit_2");
    type(":Email Purchase Order Delivery._ediEmail_XLineEdit_2", "demo@openmfg.com");
    type(":Email Purchase Order Delivery._ediCC_XLineEdit_2", "matherton@openmfg.com");
    type(":Email Purchase Order Delivery._ediSubject_XLineEdit_2", "Purchase Order </docnumber> Enclosed");
    type(":Email Purchase Order Delivery._ediFilename_XLineEdit_2", "PO</docnumber>");
    type(":Email Purchase Order Delivery._ediEmailBody_QTextEdit_2", "Dear TPARTS: Attached please find PO </docnumber>. Sincerely - Prodiem Toys");

    clickTab(":Vendor.qt_tabwidget_tabbar_QTabBar", "Addresses"); 
    waitForObject(":_addressStack.Street\nAddress:_XLineEdit");
    type(":_addressStack.Street\nAddress:_XLineEdit", "#522, Park Lane");
    type(":_addressStack.Street\nAddress:_XLineEdit_2", "Alpha Industries PVt ltd");
    type(":_addressStack.Street\nAddress:_XLineEdit_3", "Vengal Rao  Nagar");
    type(":_addressStack.City:_XLineEdit", "Kolkata");
    type(":_addressStack.State:_XComboBox", "WB");
    waitForObject(":_addressStack.Postal Code:_XLineEdit");
    type(":_addressStack.Postal Code:_XLineEdit", "300838");
    waitForObject(":_addressStack.Country:_XComboBox");
    clickItem(":_addressStack.Country:_XComboBox", "India",0,0,1,Qt.LeftButton);
    waitForObject(":Vendor.Save_QPushButton");
    clickButton(":Vendor.Save_QPushButton");
    waitForObject(":List Vendors._vendor_XTreeWidget");
    if(!clickItem(":List Vendors._vendor_XTreeWidget", "TPARTS", 5, 5, 1, Qt.LeftButton))
        test.pass("Accounts Assignment created for: All");

    waitForObject(":List Vendors.Close_QPushButton");
    clickButton(":List Vendors.Close_QPushButton");
  
  
    
    //------------Create Item Sources------------------
    waitForObjectItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "Purchase");
    activateItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "Purchase");
    waitForObjectItem(":xTuple ERP: OpenMFG Edition.Purchase_QMenu", "Item Source");
    activateItem(":xTuple ERP: OpenMFG Edition.Purchase_QMenu", "Item Source");
    waitForObjectItem(":xTuple ERP: OpenMFG Edition.Item Source_QMenu", "List...");
    activateItem(":xTuple ERP: OpenMFG Edition.Item Source_QMenu", "List...");
    
    //----Item source for TBOX1--------------
    waitForObject(":_frame.New_QPushButton");
    clickButton(":_frame.New_QPushButton");
    waitForObject(":Item Source._itemNumber_ItemLineEdit");
    type(":Item Source._itemNumber_ItemLineEdit", "TBOX1");
    type(":_vendorGroup._vendor_VendorLineEdit", "TPARTS");
    type(":_venditemGroup._vendorItemNumber_XLineEdit", "TPBOX01");
    type(":_vendorUOM_XLineEdit", "PCS");
    type(":_venditemGroup._invVendorUOMRatio_XLineEdit", "1");
    type(":_venditemGroup._minOrderQty_XLineEdit", "0");
    type(":_multOrderQty_XLineEdit", "1");
    type(":_venditemGroup._vendorRanking_QSpinBox", "<Ctrl+A>");
    type(":_venditemGroup._vendorRanking_QSpinBox", "<Del>");
    type(":_venditemGroup._vendorRanking_QSpinBox", "1");
    type(":_venditemGroup._leadTime_QSpinBox", "<Ctrl+A>");
    type(":_venditemGroup._leadTime_QSpinBox", "<Del>");
    type(":_venditemGroup._leadTime_QSpinBox", "1");
    waitForObject(":Item Source.qt_tabwidget_tabbar_QTabBar");
    clickTab(":Item Source.qt_tabwidget_tabbar_QTabBar", "Prices");
    
    waitForObject(":widget1.Add_QPushButton");
    clickButton(":widget1.Add_QPushButton");
    waitForObject(":_qtyBreak_XLineEdit");
    type(":_qtyBreak_XLineEdit", "0");
    type(":Item Source Price_XLineEdit", ".25");
    clickButton(":Item Source Price.Save_QPushButton");
    
    waitForObject(":widget1.Add_QPushButton");
    clickButton(":widget1.Add_QPushButton");
    waitForObject(":_qtyBreak_XLineEdit");
    type(":_qtyBreak_XLineEdit", "1000");
    type(":Item Source Price_XLineEdit", ".20");
    waitForObject(":Item Source Price.Save_QPushButton");
    clickButton(":Item Source Price.Save_QPushButton");
    
    waitForObject(":Item Source.qt_tabwidget_tabbar_QTabBar");
    clickTab(":Item Source.qt_tabwidget_tabbar_QTabBar", "Vendor Description");
    waitForObject(":tab._vendorItemDescrip_QTextEdit");
    type(":tab._vendorItemDescrip_QTextEdit", "ProDiem Box For Truck Type 1");
    waitForObject(":Item Source.Save_QPushButton");
    clickButton(":Item Source.Save_QPushButton");
    waitForObject(":_frame._itemsrc_XTreeWidget");
    if(!clickItem(":_frame._itemsrc_XTreeWidget", "TBOX1", 5, 5, 1, Qt.LeftButton))
        test.pass("Item Source created for: TBOX1");

    
    
    //----Item source for TBODY1--------------
    waitForObject(":_frame.New_QPushButton");
    clickButton(":_frame.New_QPushButton");
    waitForObject(":Item Source._itemNumber_ItemLineEdit");
    type(":Item Source._itemNumber_ItemLineEdit", "TBODY1");
    type(":_vendorGroup._vendor_VendorLineEdit", "TPARTS");
    type(":_venditemGroup._vendorItemNumber_XLineEdit", "TPBODY01");
    type(":_vendorUOM_XLineEdit", "PCS");
    type(":_venditemGroup._invVendorUOMRatio_XLineEdit", "1");
    type(":_venditemGroup._minOrderQty_XLineEdit", "0");
    type(":_multOrderQty_XLineEdit", "1");
    type(":_venditemGroup._vendorRanking_QSpinBox", "<Ctrl+A>");
    type(":_venditemGroup._vendorRanking_QSpinBox", "<Del>");
    type(":_venditemGroup._vendorRanking_QSpinBox", "1");
    type(":_venditemGroup._leadTime_QSpinBox", "<Ctrl+A>");
    type(":_venditemGroup._leadTime_QSpinBox", "<Del>");
    type(":_venditemGroup._leadTime_QSpinBox", "1");
    waitForObject(":Item Source.qt_tabwidget_tabbar_QTabBar");
    clickTab(":Item Source.qt_tabwidget_tabbar_QTabBar", "Prices");
    
    waitForObject(":widget1.Add_QPushButton");
    clickButton(":widget1.Add_QPushButton");
    waitForObject(":_qtyBreak_XLineEdit");
    type(":_qtyBreak_XLineEdit", "0");
    type(":Item Source Price_XLineEdit", "1");
    clickButton(":Item Source Price.Save_QPushButton");
    waitForObject(":Item Source.Save_QPushButton");
    clickButton(":Item Source.Save_QPushButton");
    waitForObject(":_frame._itemsrc_XTreeWidget");
    if(!clickItem(":_frame._itemsrc_XTreeWidget", "TBODY1", 5, 5, 1, Qt.LeftButton))
        test.pass("Item Source created for: TBODY1");

    
    
    //----Item source for TINSERT1--------------
    waitForObject(":_frame.New_QPushButton");
    clickButton(":_frame.New_QPushButton");
    waitForObject(":Item Source._itemNumber_ItemLineEdit");
    type(":Item Source._itemNumber_ItemLineEdit", "TINSERT1");
    type(":_vendorGroup._vendor_VendorLineEdit", "TPARTS");
    type(":_venditemGroup._vendorItemNumber_XLineEdit", "TPINSERT01");
    type(":_vendorUOM_XLineEdit", "PCS");
    type(":_venditemGroup._invVendorUOMRatio_XLineEdit", "1");
    type(":_venditemGroup._minOrderQty_XLineEdit", "0");
    type(":_multOrderQty_XLineEdit", "1");
    type(":_venditemGroup._vendorRanking_QSpinBox", "<Ctrl+A>");
    type(":_venditemGroup._vendorRanking_QSpinBox", "<Del>");
    type(":_venditemGroup._vendorRanking_QSpinBox", "1");
    type(":_venditemGroup._leadTime_QSpinBox", "<Ctrl+A>");
    type(":_venditemGroup._leadTime_QSpinBox", "<Del>");
    type(":_venditemGroup._leadTime_QSpinBox", "1");
    waitForObject(":Item Source.qt_tabwidget_tabbar_QTabBar");
    clickTab(":Item Source.qt_tabwidget_tabbar_QTabBar", "Prices");
    
    waitForObject(":widget1.Add_QPushButton");
    clickButton(":widget1.Add_QPushButton");
    waitForObject(":_qtyBreak_XLineEdit");
    type(":_qtyBreak_XLineEdit", "0");
    type(":Item Source Price_XLineEdit", ".25");
    clickButton(":Item Source Price.Save_QPushButton");
    waitForObject(":Item Source.Save_QPushButton");
    clickButton(":Item Source.Save_QPushButton");
    waitForObject(":_frame._itemsrc_XTreeWidget");
    if(!clickItem(":_frame._itemsrc_XTreeWidget", "TINSERT1", 5, 5, 1, Qt.LeftButton))
        test.pass("Item Source created for: TINSERT1");

    
    
    //----Item source for TWHEEL1--------------
    waitForObject(":_frame.New_QPushButton");
    clickButton(":_frame.New_QPushButton");
    waitForObject(":Item Source._itemNumber_ItemLineEdit");
    type(":Item Source._itemNumber_ItemLineEdit", "TWHEEL1");
    type(":_vendorGroup._vendor_VendorLineEdit", "TPARTS");
    type(":_venditemGroup._vendorItemNumber_XLineEdit", "TPWHEEL01");
    type(":_vendorUOM_XLineEdit", "PCS");
    type(":_venditemGroup._invVendorUOMRatio_XLineEdit", "1");
    type(":_venditemGroup._minOrderQty_XLineEdit", "0");
    type(":_multOrderQty_XLineEdit", "1");
    type(":_venditemGroup._vendorRanking_QSpinBox", "<Ctrl+A>");
    type(":_venditemGroup._vendorRanking_QSpinBox", "<Del>");
    type(":_venditemGroup._vendorRanking_QSpinBox", "1");
    type(":_venditemGroup._leadTime_QSpinBox", "<Ctrl+A>");
    type(":_venditemGroup._leadTime_QSpinBox", "<Del>");
    type(":_venditemGroup._leadTime_QSpinBox", "1");
    waitForObject(":Item Source.qt_tabwidget_tabbar_QTabBar");
    clickTab(":Item Source.qt_tabwidget_tabbar_QTabBar", "Prices");
    
    waitForObject(":widget1.Add_QPushButton");
    clickButton(":widget1.Add_QPushButton");
    waitForObject(":_qtyBreak_XLineEdit");
    type(":_qtyBreak_XLineEdit", "0");
    type(":Item Source Price_XLineEdit", ".10");
    clickButton(":Item Source Price.Save_QPushButton");
    waitForObject(":Item Source.Save_QPushButton");
    clickButton(":Item Source.Save_QPushButton");
    waitForObject(":_frame._itemsrc_XTreeWidget");
    if(!clickItem(":_frame._itemsrc_XTreeWidget", "TWHEEL1", 5, 5, 1, Qt.LeftButton))
        test.pass("Item Source created for: TWHEEL1");
    
    //----Item source for YPAINT1--------------
    waitForObject(":_frame.New_QPushButton");
    clickButton(":_frame.New_QPushButton");
    waitForObject(":Item Source._itemNumber_ItemLineEdit");
    type(":Item Source._itemNumber_ItemLineEdit", "YPAINT1");
    type(":_vendorGroup._vendor_VendorLineEdit", "TPARTS");
    type(":_venditemGroup._vendorItemNumber_XLineEdit", "TPPAINT01");
    type(":_vendorUOM_XLineEdit", "PCS");
    type(":_venditemGroup._invVendorUOMRatio_XLineEdit", "1");
    type(":_venditemGroup._minOrderQty_XLineEdit", "0");
    type(":_multOrderQty_XLineEdit", "1");
    type(":_venditemGroup._vendorRanking_QSpinBox", "<Ctrl+A>");
    type(":_venditemGroup._vendorRanking_QSpinBox", "<Del>");
    type(":_venditemGroup._vendorRanking_QSpinBox", "1");
    type(":_venditemGroup._leadTime_QSpinBox", "<Ctrl+A>");
    type(":_venditemGroup._leadTime_QSpinBox", "<Del>");
    type(":_venditemGroup._leadTime_QSpinBox", "1");
    waitForObject(":Item Source.qt_tabwidget_tabbar_QTabBar");
    clickTab(":Item Source.qt_tabwidget_tabbar_QTabBar", "Prices");
    
    waitForObject(":widget1.Add_QPushButton");
    clickButton(":widget1.Add_QPushButton");
    waitForObject(":_qtyBreak_XLineEdit");
    type(":_qtyBreak_XLineEdit", "0");
    type(":Item Source Price_XLineEdit", ".10");
    clickButton(":Item Source Price.Save_QPushButton");
    waitForObject(":Item Source.Save_QPushButton");
    clickButton(":Item Source.Save_QPushButton");
    waitForObject(":_frame._itemsrc_XTreeWidget");
    if(!clickItem(":_frame._itemsrc_XTreeWidget", "YPAINT1", 5, 5, 1, Qt.LeftButton))
        test.pass("Item Source created for: YPAINT1");
    waitForObject(":List Item Sources.Close_QPushButton");
    clickButton(":List Item Sources.Close_QPushButton");
    
    

}
