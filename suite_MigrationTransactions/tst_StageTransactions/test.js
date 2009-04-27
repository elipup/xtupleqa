function main()
{
   
    //---User role -----
    var userrole="CONFIGURE";
   
    
    //--------Login into Appl----------
    var set = testData.dataset("login.tsv");
    var url, db, port, pwd,realname,username;
    db=pwd=port=url=realname=username="";
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
       
    waitForObject(":Log In.Options_QPushButton");
    clickButton(":Log In.Options_QPushButton");
    waitForObject(":_server_QLineEdit");
    if(findObject(":_server_QLineEdit").text!= url)
    {findObject(":_server_QLineEdit").text=url;
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
    waitForObject(":_username_QLineEdit");
    type(":_username_QLineEdit", "<Tab>");
    waitForObject(":_password_QLineEdit");
    type(":_password_QLineEdit", pwd);
    waitForObject(":_password_QLineEdit");
    type(":_password_QLineEdit", "<Return>");
    test.log("Logged in Application");
    waitForObject(":xTuple ERP:*.Products Tools_QWorkspace");

    

    
    
    
    
    //---Create Quote----
    waitForObjectItem(":xTuple ERP:*_QMenuBar_2", "Sales");
    activateItem(":xTuple ERP:*_QMenuBar_2", "Sales");
    waitForObjectItem(":xTuple ERP:*.Sales_QMenu", "Quote");
    activateItem(":xTuple ERP:*.Sales_QMenu", "Quote");
    waitForObjectItem(":xTuple ERP:*.Quote_QMenu", "List...");
    activateItem(":xTuple ERP:*.Quote_QMenu", "List...");
    
    waitForObject(":frame.New_QPushButton_3");
    clickButton(":frame.New_QPushButton_3");
    waitForObject(":_headerPage._customerNumber_CLineEdit");
    mouseClick(":_headerPage._customerNumber_CLineEdit", 5, 5, 1, Qt.LeftButton);
    waitForObject(":_headerPage...._QPushButton_3");
    clickButton(":_headerPage...._QPushButton_3");
    waitForObject(":_listTab_XTreeWidget_3");
    doubleClickItem(":_listTab_XTreeWidget_3", "TTOYS", 5, 5, 0, Qt.LeftButton);
    waitForObject(":Quote.qt_tabwidget_tabbar_QTabBar");
    clickTab(":Quote.qt_tabwidget_tabbar_QTabBar", "Line Items");
    waitForObject(":_lineItemsPage.New_QPushButton_3");
    clickButton(":_lineItemsPage.New_QPushButton_3");
    waitForObject(":_itemGroup...._QPushButton_3");
    clickButton(":_itemGroup...._QPushButton_3");
    waitForObject(":_item_XTreeWidget_3");
    doubleClickItem(":_item_XTreeWidget_3", "YTRUCK1", 5, 5, 0, Qt.LeftButton);
    waitForObject(":_qtyOrdered_XLineEdit_3");
    type(":_qtyOrdered_XLineEdit_3", "100");
    waitForObject(":_schedGroup.XDateEdit_XDateEdit_3");
    type(":_schedGroup.XDateEdit_XDateEdit_3", "+9");
    waitForObject(":_schedGroup.XDateEdit_XDateEdit_3");
    type(":_schedGroup.XDateEdit_XDateEdit_3", "<Tab>");
    waitForObject(":Quote.Save_QPushButton");
    clickButton(":Quote.Save_QPushButton");
    waitForObject(":Quote.Close_QPushButton");
    clickButton(":Quote.Close_QPushButton");
    waitForObject(":Quote.Save_QPushButton_2");
    clickButton(":Quote.Save_QPushButton_2");
    waitForObject(":Quote.Cancel_QPushButton");
    clickButton(":Quote.Cancel_QPushButton");
        
    waitForObject(":_quote_XTreeWidget");
    clickItem(":_quote_XTreeWidget", "40011", 5, 5, 1, Qt.LeftButton);
    waitForObject(":List Quotes.Close_QPushButton");
    clickButton(":List Quotes.Close_QPushButton");
    
    
    //---Create Sales Order---
    waitForObjectItem(":xTuple ERP:*_QMenuBar_2", "Sales");
    activateItem(":xTuple ERP:*_QMenuBar_2", "Sales");
    waitForObjectItem(":xTuple ERP:*.Sales_QMenu", "Sales Order");
    activateItem(":xTuple ERP:*.Sales_QMenu", "Sales Order");
    waitForObjectItem(":xTuple ERP:*.Sales Order_QMenu", "List Open...");
    activateItem(":xTuple ERP:*.Sales Order_QMenu", "List Open...");
    
    waitForObject(":frame.New_QPushButton_2");
    clickButton(":frame.New_QPushButton_2");
    waitForObject(":_headerPage...._QPushButton_2");
    clickButton(":_headerPage...._QPushButton_2");
    waitForObject(":_listTab_XTreeWidget_2");
    doubleClickItem(":_listTab_XTreeWidget_2", "TTOYS", 5, 5, 0, Qt.LeftButton);
    waitForObject(":Sales Order.qt_tabwidget_tabbar_QTabBar_2");
    clickTab(":Sales Order.qt_tabwidget_tabbar_QTabBar_2", "Line Items");
    waitForObject(":_lineItemsPage.New_QPushButton_2");
    clickButton(":_lineItemsPage.New_QPushButton_2");
    waitForObject(":_itemGroup...._QPushButton_2");
    clickButton(":_itemGroup...._QPushButton_2");
    waitForObject(":_item_XTreeWidget_2");
    doubleClickItem(":_item_XTreeWidget_2", "YTRUCK1", 5, 5, 0, Qt.LeftButton);
    waitForObject(":_qtyOrdered_XLineEdit_2");
    type(":_qtyOrdered_XLineEdit_2", "100");
    waitForObject(":_schedGroup.XDateEdit_XDateEdit_2");
    type(":_schedGroup.XDateEdit_XDateEdit_2", "+9");
    waitForObject(":_schedGroup.XDateEdit_XDateEdit_2");
    type(":_schedGroup.XDateEdit_XDateEdit_2", "<Tab>");
    waitForObject(":Sales Order.Save_QPushButton_3");
    clickButton(":Sales Order.Save_QPushButton_3");
    waitForObject(":Sales Order.Close_QPushButton_2");
    clickButton(":Sales Order.Close_QPushButton_2");
    waitForObject(":Sales Order.Save_QPushButton_4");
    clickButton(":Sales Order.Save_QPushButton_4");
    waitForObject(":Sales Order.Cancel_QPushButton_2");
    clickButton(":Sales Order.Cancel_QPushButton_2");
    waitForObject(":frame._so_XTreeWidget_2");
    clickItem(":frame._so_XTreeWidget_2", "50194", 5, 5, 1, Qt.LeftButton);
    
    waitForObject(":frame.New_QPushButton_2");
    clickButton(":frame.New_QPushButton_2");
    waitForObject(":_headerPage...._QPushButton_2");
    clickButton(":_headerPage...._QPushButton_2");
    waitForObject(":_listTab_XTreeWidget_2");
    doubleClickItem(":_listTab_XTreeWidget_2", "TTOYS", 5, 5, 0, Qt.LeftButton);
    waitForObject(":Sales Order.qt_tabwidget_tabbar_QTabBar_2");
    clickTab(":Sales Order.qt_tabwidget_tabbar_QTabBar_2", "Line Items");
    waitForObject(":_lineItemsPage.New_QPushButton_2");
    clickButton(":_lineItemsPage.New_QPushButton_2");
    waitForObject(":_itemGroup...._QPushButton_2");
    clickButton(":_itemGroup...._QPushButton_2");
    waitForObject(":_item_XTreeWidget_2");
    doubleClickItem(":_item_XTreeWidget_2", "YTRUCK1", 5, 5, 0, Qt.LeftButton);
    waitForObject(":_qtyOrdered_XLineEdit_2");
    type(":_qtyOrdered_XLineEdit_2", "100");
    waitForObject(":_schedGroup.XDateEdit_XDateEdit_2");
    type(":_schedGroup.XDateEdit_XDateEdit_2", "+9");
    waitForObject(":_schedGroup.XDateEdit_XDateEdit_2");
    type(":_schedGroup.XDateEdit_XDateEdit_2", "<Tab>");
    waitForObject(":Sales Order.Save_QPushButton_3");
    clickButton(":Sales Order.Save_QPushButton_3");
    waitForObject(":Sales Order.Close_QPushButton_2");
    clickButton(":Sales Order.Close_QPushButton_2");
    waitForObject(":Sales Order.Save_QPushButton_4");
    clickButton(":Sales Order.Save_QPushButton_4");
    waitForObject(":Sales Order.Cancel_QPushButton_2");
    clickButton(":Sales Order.Cancel_QPushButton_2");
    waitForObject(":frame._so_XTreeWidget_2");
    clickItem(":frame._so_XTreeWidget_2", "50195", 5, 5, 1, Qt.LeftButton);
    
    
    waitForObject(":frame.New_QPushButton_2");
    clickButton(":frame.New_QPushButton_2");
    waitForObject(":_headerPage...._QPushButton_2");
    clickButton(":_headerPage...._QPushButton_2");
    waitForObject(":_listTab_XTreeWidget_2");
    doubleClickItem(":_listTab_XTreeWidget_2", "TTOYS", 5, 5, 0, Qt.LeftButton);
    waitForObject(":Sales Order.qt_tabwidget_tabbar_QTabBar_2");
    clickTab(":Sales Order.qt_tabwidget_tabbar_QTabBar_2", "Line Items");
    waitForObject(":_lineItemsPage.New_QPushButton_2");
    clickButton(":_lineItemsPage.New_QPushButton_2");
    waitForObject(":_itemGroup...._QPushButton_2");
    clickButton(":_itemGroup...._QPushButton_2");
    waitForObject(":_item_XTreeWidget_2");
    doubleClickItem(":_item_XTreeWidget_2", "YTRUCK1", 5, 5, 0, Qt.LeftButton);
    waitForObject(":_qtyOrdered_XLineEdit_2");
    type(":_qtyOrdered_XLineEdit_2", "100");
    waitForObject(":_schedGroup.XDateEdit_XDateEdit_2");
    type(":_schedGroup.XDateEdit_XDateEdit_2", "+9");
    waitForObject(":_schedGroup.XDateEdit_XDateEdit_2");
    type(":_schedGroup.XDateEdit_XDateEdit_2", "<Tab>");
    waitForObject(":Sales Order.Save_QPushButton_3");
    clickButton(":Sales Order.Save_QPushButton_3");
    waitForObject(":Sales Order.Close_QPushButton_2");
    clickButton(":Sales Order.Close_QPushButton_2");
    waitForObject(":Sales Order.Save_QPushButton_4");
    clickButton(":Sales Order.Save_QPushButton_4");
    waitForObject(":Sales Order.Cancel_QPushButton_2");
    clickButton(":Sales Order.Cancel_QPushButton_2");
    waitForObject(":frame._so_XTreeWidget_2");
    clickItem(":frame._so_XTreeWidget_2", "50196", 5, 5, 1, Qt.LeftButton);
    
    
    waitForObject(":frame.New_QPushButton_2");
    clickButton(":frame.New_QPushButton_2");
    waitForObject(":_headerPage...._QPushButton_2");
    clickButton(":_headerPage...._QPushButton_2");
    waitForObject(":_listTab_XTreeWidget_2");
    doubleClickItem(":_listTab_XTreeWidget_2", "TTOYS", 5, 5, 0, Qt.LeftButton);
    waitForObject(":Sales Order.qt_tabwidget_tabbar_QTabBar_2");
    clickTab(":Sales Order.qt_tabwidget_tabbar_QTabBar_2", "Line Items");
    waitForObject(":_lineItemsPage.New_QPushButton_2");
    clickButton(":_lineItemsPage.New_QPushButton_2");
    waitForObject(":_itemGroup...._QPushButton_2");
    clickButton(":_itemGroup...._QPushButton_2");
    waitForObject(":_item_XTreeWidget_2");
    doubleClickItem(":_item_XTreeWidget_2", "YTRUCK1", 5, 5, 0, Qt.LeftButton);
    waitForObject(":_qtyOrdered_XLineEdit_2");
    type(":_qtyOrdered_XLineEdit_2", "100");
    waitForObject(":_schedGroup.XDateEdit_XDateEdit_2");
    type(":_schedGroup.XDateEdit_XDateEdit_2", "+9");
    waitForObject(":_schedGroup.XDateEdit_XDateEdit_2");
    type(":_schedGroup.XDateEdit_XDateEdit_2", "<Tab>");
    waitForObject(":Sales Order.Save_QPushButton_3");
    clickButton(":Sales Order.Save_QPushButton_3");
    waitForObject(":Sales Order.Close_QPushButton_2");
    clickButton(":Sales Order.Close_QPushButton_2");
    waitForObject(":Sales Order.Save_QPushButton_4");
    clickButton(":Sales Order.Save_QPushButton_4");
    waitForObject(":Sales Order.Cancel_QPushButton_2");
    clickButton(":Sales Order.Cancel_QPushButton_2");
    waitForObject(":frame._so_XTreeWidget_2");
    clickItem(":frame._so_XTreeWidget_2", "50197", 5, 5, 1, Qt.LeftButton);
    
    
    waitForObject(":frame.New_QPushButton_2");
    clickButton(":frame.New_QPushButton_2");
    waitForObject(":_headerPage...._QPushButton_2");
    clickButton(":_headerPage...._QPushButton_2");
    waitForObject(":_listTab_XTreeWidget_2");
    doubleClickItem(":_listTab_XTreeWidget_2", "TTOYS", 5, 5, 0, Qt.LeftButton);
    waitForObject(":Sales Order.qt_tabwidget_tabbar_QTabBar_2");
    clickTab(":Sales Order.qt_tabwidget_tabbar_QTabBar_2", "Line Items");
    waitForObject(":_lineItemsPage.New_QPushButton_2");
    clickButton(":_lineItemsPage.New_QPushButton_2");
    waitForObject(":_itemGroup...._QPushButton_2");
    clickButton(":_itemGroup...._QPushButton_2");
    waitForObject(":_item_XTreeWidget_2");
    doubleClickItem(":_item_XTreeWidget_2", "YTRUCK1", 5, 5, 0, Qt.LeftButton);
    waitForObject(":_qtyOrdered_XLineEdit_2");
    type(":_qtyOrdered_XLineEdit_2", "100");
    waitForObject(":_schedGroup.XDateEdit_XDateEdit_2");
    type(":_schedGroup.XDateEdit_XDateEdit_2", "+9");
    waitForObject(":_schedGroup.XDateEdit_XDateEdit_2");
    type(":_schedGroup.XDateEdit_XDateEdit_2", "<Tab>");
    waitForObject(":Sales Order.Save_QPushButton_3");
    clickButton(":Sales Order.Save_QPushButton_3");
    waitForObject(":Sales Order.Close_QPushButton_2");
    clickButton(":Sales Order.Close_QPushButton_2");
    waitForObject(":Sales Order.Save_QPushButton_4");
    clickButton(":Sales Order.Save_QPushButton_4");
    waitForObject(":Sales Order.Cancel_QPushButton_2");
    clickButton(":Sales Order.Cancel_QPushButton_2");
    waitForObject(":frame._so_XTreeWidget_2");
    clickItem(":frame._so_XTreeWidget_2", "50198", 5, 5, 1, Qt.LeftButton);
    
    
    waitForObject(":frame.New_QPushButton_2");
    clickButton(":frame.New_QPushButton_2");
    waitForObject(":_headerPage...._QPushButton_2");
    clickButton(":_headerPage...._QPushButton_2");
    waitForObject(":_listTab_XTreeWidget_2");
    doubleClickItem(":_listTab_XTreeWidget_2", "TTOYS", 5, 5, 0, Qt.LeftButton);
    waitForObject(":Sales Order.qt_tabwidget_tabbar_QTabBar_2");
    clickTab(":Sales Order.qt_tabwidget_tabbar_QTabBar_2", "Line Items");
    waitForObject(":_lineItemsPage.New_QPushButton_2");
    clickButton(":_lineItemsPage.New_QPushButton_2");
    waitForObject(":_itemGroup...._QPushButton_2");
    clickButton(":_itemGroup...._QPushButton_2");
    waitForObject(":_item_XTreeWidget_2");
    doubleClickItem(":_item_XTreeWidget_2", "YTRUCK1", 5, 5, 0, Qt.LeftButton);
    waitForObject(":_qtyOrdered_XLineEdit_2");
    type(":_qtyOrdered_XLineEdit_2", "100");
    waitForObject(":_schedGroup.XDateEdit_XDateEdit_2");
    type(":_schedGroup.XDateEdit_XDateEdit_2", "+9");
    waitForObject(":_schedGroup.XDateEdit_XDateEdit_2");
    type(":_schedGroup.XDateEdit_XDateEdit_2", "<Tab>");
    waitForObject(":Sales Order.Save_QPushButton_3");
    clickButton(":Sales Order.Save_QPushButton_3");
    waitForObject(":Sales Order.Close_QPushButton_2");
    clickButton(":Sales Order.Close_QPushButton_2");
    waitForObject(":Sales Order.Save_QPushButton_4");
    clickButton(":Sales Order.Save_QPushButton_4");
    waitForObject(":Sales Order.Cancel_QPushButton_2");
    clickButton(":Sales Order.Cancel_QPushButton_2");
    waitForObject(":frame._so_XTreeWidget_2");
    clickItem(":frame._so_XTreeWidget_2", "50199", 5, 5, 1, Qt.LeftButton);
    
    waitForObject(":List Open Sales Orders.Close_QPushButton_2");
    clickButton(":List Open Sales Orders.Close_QPushButton_2");
    
    
     //----Issue stock to Shipping----
    waitForObjectItem(":xTuple ERP:*_QMenuBar_2", "Inventory");
    activateItem(":xTuple ERP:*_QMenuBar_2", "Inventory");
    waitForObjectItem(":xTuple ERP:*.Inventory_QMenu", "Shipping");
    activateItem(":xTuple ERP:*.Inventory_QMenu", "Shipping");
    waitForObjectItem(":xTuple ERP:*.Shipping_QMenu", "Issue to Shipping...");
    activateItem(":xTuple ERP:*.Shipping_QMenu", "Issue to Shipping...");
    waitForObject(":Issue to Shipping...._QPushButton");
    clickButton(":Issue to Shipping...._QPushButton");
    waitForObject(":_listTab_XTreeWidget_4");
    doubleClickItem(":_listTab_XTreeWidget_4", "50195", 5, 5, 0, Qt.LeftButton);
    waitForObject(":frame.Issue All Bal._QPushButton");
    clickButton(":frame.Issue All Bal._QPushButton");
    waitForObject(":Issue to Shipping.Ship Order_QPushButton");
    clickButton(":Issue to Shipping.Ship Order_QPushButton");
    aitForObject(":Issue to Shipping.Close_QPushButton");
    clickButton(":Issue to Shipping.Close_QPushButton");
    
    
    //----Issue stock to Shipping and Ship the Order----
    waitForObjectItem(":xTuple ERP:*_QMenuBar_2", "Inventory");
    activateItem(":xTuple ERP:*_QMenuBar_2", "Inventory");
    waitForObjectItem(":xTuple ERP:*.Inventory_QMenu", "Shipping");
    activateItem(":xTuple ERP:*.Inventory_QMenu", "Shipping");
    waitForObjectItem(":xTuple ERP:*.Shipping_QMenu", "Issue to Shipping...");
    activateItem(":xTuple ERP:*.Shipping_QMenu", "Issue to Shipping...");
    waitForObject(":Issue to Shipping...._QPushButton");
    clickButton(":Issue to Shipping...._QPushButton");
    waitForObject(":_listTab_XTreeWidget_4");
    doubleClickItem(":_listTab_XTreeWidget_4", "50196", 13, 7, 0, Qt.LeftButton);
    waitForObject(":frame.Issue All Bal._QPushButton");
    clickButton(":frame.Issue All Bal._QPushButton");
    waitForObject(":Issue to Shipping.Ship Order_QPushButton");
    clickButton(":Issue to Shipping.Ship Order_QPushButton");
    waitForObject(":groupBox.Select for Billing_QCheckBox");
    clickButton(":groupBox.Select for Billing_QCheckBox");
    waitForObject(":groupBox.Create and Print Invoice_XCheckBox");
    clickButton(":groupBox.Create and Print Invoice_XCheckBox");
    waitForObject(":groupBox.Print Packing List_XCheckBox");
    clickButton(":groupBox.Print Packing List_XCheckBox");
    waitForObject(":Issue to Shipping.Ship_QPushButton");
    clickButton(":Issue to Shipping.Ship_QPushButton");
    waitForObject(":Issue to Shipping.Post Invoices after Printing_QCheckBox");
    clickButton(":Issue to Shipping.Post Invoices after Printing_QCheckBox");
    waitForObject(":Issue to Shipping.Cancel_QPushButton");
    clickButton(":Issue to Shipping.Cancel_QPushButton");
    waitForObject(":Issue to Shipping.Close_QPushButton");
    clickButton(":Issue to Shipping.Close_QPushButton");
    
    
    //----Issue stock to Shipping, Select for Billing and Ship the Order----
    waitForObjectItem(":xTuple ERP:*_QMenuBar_2", "Inventory");
    activateItem(":xTuple ERP:*_QMenuBar_2", "Inventory");
    waitForObjectItem(":xTuple ERP:*.Inventory_QMenu", "Shipping");
    activateItem(":xTuple ERP:*.Inventory_QMenu", "Shipping");
    waitForObjectItem(":xTuple ERP:*.Shipping_QMenu", "Issue to Shipping...");
    activateItem(":xTuple ERP:*.Shipping_QMenu", "Issue to Shipping...");
    waitForObject(":Issue to Shipping...._QPushButton");
    clickButton(":Issue to Shipping...._QPushButton");
    waitForObject(":_listTab_XTreeWidget_4");
    doubleClickItem(":_listTab_XTreeWidget_4", "50197", 13, 7, 0, Qt.LeftButton);
    waitForObject(":frame.Issue All Bal._QPushButton");
    clickButton(":frame.Issue All Bal._QPushButton");
    waitForObject(":Issue to Shipping.Ship Order_QPushButton");
    clickButton(":Issue to Shipping.Ship Order_QPushButton");
    waitForObject(":groupBox.Select for Billing_QCheckBox");
    clickButton(":groupBox.Select for Billing_QCheckBox");
    waitForObject(":groupBox.Create and Print Invoice_XCheckBox");
    clickButton(":groupBox.Create and Print Invoice_XCheckBox");
    waitForObject(":groupBox.Print Packing List_XCheckBox");
    clickButton(":groupBox.Print Packing List_XCheckBox");
    waitForObject(":Issue to Shipping.Ship_QPushButton");
    clickButton(":Issue to Shipping.Ship_QPushButton");
    waitForObject(":Issue to Shipping.Post Invoices after Printing_QCheckBox");
    clickButton(":Issue to Shipping.Post Invoices after Printing_QCheckBox");
    waitForObject(":Issue to Shipping.Cancel_QPushButton");
    clickButton(":Issue to Shipping.Cancel_QPushButton");
    waitForObject(":Issue to Shipping.Close_QPushButton");
    clickButton(":Issue to Shipping.Close_QPushButton");
    
    
    
     //----Issue stock to Shipping, Select for Billing and Ship the Order - Create the Invoice----
    waitForObjectItem(":xTuple ERP:*_QMenuBar_2", "Inventory");
    activateItem(":xTuple ERP:*_QMenuBar_2", "Inventory");
    waitForObjectItem(":xTuple ERP:*.Inventory_QMenu", "Shipping");
    activateItem(":xTuple ERP:*.Inventory_QMenu", "Shipping");
    waitForObjectItem(":xTuple ERP:*.Shipping_QMenu", "Issue to Shipping...");
    activateItem(":xTuple ERP:*.Shipping_QMenu", "Issue to Shipping...");
    waitForObject(":Issue to Shipping...._QPushButton");
    clickButton(":Issue to Shipping...._QPushButton");
    waitForObject(":_listTab_XTreeWidget_4");
    doubleClickItem(":_listTab_XTreeWidget_4", "50198", 13, 7, 0, Qt.LeftButton);
    waitForObject(":frame.Issue All Bal._QPushButton");
    clickButton(":frame.Issue All Bal._QPushButton");
    waitForObject(":Issue to Shipping.Ship Order_QPushButton");
    clickButton(":Issue to Shipping.Ship Order_QPushButton");
    waitForObject(":groupBox.Select for Billing_QCheckBox");
    clickButton(":groupBox.Select for Billing_QCheckBox");
    waitForObject(":groupBox.Create and Print Invoice_XCheckBox");
    clickButton(":groupBox.Create and Print Invoice_XCheckBox");
    waitForObject(":groupBox.Print Packing List_XCheckBox");
    clickButton(":groupBox.Print Packing List_XCheckBox");
    waitForObject(":Issue to Shipping.Ship_QPushButton");
    clickButton(":Issue to Shipping.Ship_QPushButton");
    waitForObject(":Issue to Shipping.Post Invoices after Printing_QCheckBox");
    clickButton(":Issue to Shipping.Post Invoices after Printing_QCheckBox");
    waitForObject(":Issue to Shipping.Cancel_QPushButton");
    clickButton(":Issue to Shipping.Cancel_QPushButton");
    waitForObject(":Issue to Shipping.Close_QPushButton");
    clickButton(":Issue to Shipping.Close_QPushButton");
    
    
    //----Issue stock to Shipping, Select for Billing and Ship the Order -Post the Invoice----
    waitForObjectItem(":xTuple ERP:*_QMenuBar_2", "Inventory");
    activateItem(":xTuple ERP:*_QMenuBar_2", "Inventory");
    waitForObjectItem(":xTuple ERP:*.Inventory_QMenu", "Shipping");
    activateItem(":xTuple ERP:*.Inventory_QMenu", "Shipping");
    waitForObjectItem(":xTuple ERP:*.Shipping_QMenu", "Issue to Shipping...");
    activateItem(":xTuple ERP:*.Shipping_QMenu", "Issue to Shipping...");
    waitForObject(":Issue to Shipping...._QPushButton");
    clickButton(":Issue to Shipping...._QPushButton");
    waitForObject(":_listTab_XTreeWidget_4");
    doubleClickItem(":_listTab_XTreeWidget_4", "50198", 13, 7, 0, Qt.LeftButton);
    waitForObject(":frame.Issue All Bal._QPushButton");
    clickButton(":frame.Issue All Bal._QPushButton");
    waitForObject(":Issue to Shipping.Ship Order_QPushButton");
    clickButton(":Issue to Shipping.Ship Order_QPushButton");
    waitForObject(":groupBox.Select for Billing_QCheckBox");
    clickButton(":groupBox.Select for Billing_QCheckBox");
    waitForObject(":groupBox.Create and Print Invoice_XCheckBox");
    clickButton(":groupBox.Create and Print Invoice_XCheckBox");
    waitForObject(":groupBox.Print Packing List_XCheckBox");
    clickButton(":groupBox.Print Packing List_XCheckBox");
    waitForObject(":Issue to Shipping.Ship_QPushButton");
    clickButton(":Issue to Shipping.Ship_QPushButton");
    waitForObject(":Issue to Shipping.Post Invoices after Printing_QCheckBox");
    clickButton(":Issue to Shipping.Post Invoices after Printing_QCheckBox");
    waitForObject(":Issue to Shipping.Cancel_QPushButton");
    clickButton(":Issue to Shipping.Cancel_QPushButton");
    waitForObject(":Issue to Shipping.Close_QPushButton");
    clickButton(":Issue to Shipping.Close_QPushButton");
    
    
    
    
    
    
    //----Create Invoice-----
    waitForObject(":xTuple ERP:*_QMenuBar_2");
    activateItem(":xTuple ERP:*_QMenuBar_2", "Accounting");
    activateItem(":xTuple ERP:*.Accounting_QMenu", "Accounts Receivable");
    activateItem(":xTuple ERP:*.Accounts Receivable_QMenu", "Invoice");
    activateItem(":xTuple ERP:*.Invoice_QMenu", "List Unposted...");
    waitForObject(":List Unposted Invoices.New_QPushButton");
    clickButton(":List Unposted Invoices.New_QPushButton");
    waitForObject(":headerTab...._QPushButton");
    clickButton(":headerTab...._QPushButton");
    waitForObject(":_listTab_XTreeWidget_6");
    clickItem(":_listTab_XTreeWidget_6", "TTOYS", 5, 5, 1, Qt.LeftButton);
    waitForObject(":_listTab_XTreeWidget_6");
    doubleClickItem(":_listTab_XTreeWidget_6", "TTOYS", 5, 5, 0, Qt.LeftButton);
    waitForObject(":Invoice.qt_tabwidget_tabbar_QTabBar");
    clickTab(":Invoice.qt_tabwidget_tabbar_QTabBar", "Line Items");
    waitForObject(":lineItemsTab.New_QPushButton");
    clickButton(":lineItemsTab.New_QPushButton");
    waitForObject(":Item...._QPushButton");
    clickButton(":Item...._QPushButton");
    waitForObject(":_item_XTreeWidget_4");
    doubleClickItem(":_item_XTreeWidget_4", "YTRUCK1", 5, 5, 0, Qt.LeftButton);
    waitForObject(":_ordered_XLineEdit");
    type(":_ordered_XLineEdit", "100");
    waitForObject(":_billed_XLineEdit");
    type(":_billed_XLineEdit", "100");
    waitForObject(":Invoice.Save_QPushButton");
    clickButton(":Invoice.Save_QPushButton");
    waitForObject(":Invoice.Cancel_QPushButton");
    clickButton(":Invoice.Cancel_QPushButton");
    waitForObject(":Invoice.Save_QPushButton_2");
    clickButton(":Invoice.Save_QPushButton_2");
    waitForObject(":_invchead_XTreeWidget");
    clickItem(":_invchead_XTreeWidget", "60080", 5, 5, 1, Qt.LeftButton);
    waitForObject(":List Unposted Invoices.Close_QPushButton");
    clickButton(":List Unposted Invoices.Close_QPushButton");
    
    
    //----Create Receipt----
    waitForObjectItem(":xTuple ERP:*_QMenuBar_2", "Inventory");
    activateItem(":xTuple ERP:*_QMenuBar_2", "Inventory");
    waitForObjectItem(":xTuple ERP:*.Inventory_QMenu", "Receiving");
    activateItem(":xTuple ERP:*.Inventory_QMenu", "Receiving");
    waitForObjectItem(":xTuple ERP:*.Receiving_QMenu", "List Unposted Receipts...");
    activateItem(":xTuple ERP:*.Receiving_QMenu", "List Unposted Receipts...");
    
    waitForObject(":List Unposted Receipts.New_QPushButton");
    clickButton(":List Unposted Receipts.New_QPushButton");
    waitForObject(":Enter Order Receipts...._QPushButton");
    clickButton(":Enter Order Receipts...._QPushButton");
    waitForObject(":_listTab_XTreeWidget_5");
    doubleClick(":_listTab_XTreeWidget_5", 69, 11, 0, Qt.LeftButton);
    waitForObject(":List Unposted Receipts.Close_QPushButton");
    clickButton(":List Unposted Receipts.Close_QPushButton");
    waitForObject(":xTuple ERP:*.Products Tools_QWorkspace");
    mouseClick(":xTuple ERP:*.Products Tools_QWorkspace", 542, 299, 1, Qt.LeftButton);
    
    
     //---Scheduling---
    waitForObjectItem(":xTuple ERP:*_QMenuBar_2", "Schedule");
    activateItem(":xTuple ERP:*_QMenuBar_2", "Schedule");
    waitForObjectItem(":xTuple ERP:*.Schedule_QMenu", "Scheduling");
    activateItem(":xTuple ERP:*.Schedule_QMenu", "Scheduling");
    waitForObjectItem(":xTuple ERP:*.Scheduling_QMenu", "Run MRP");
    activateItem(":xTuple ERP:*.Scheduling_QMenu", "Run MRP");
    waitForObjectItem(":xTuple ERP:*.Run MRP_QMenu", "by Planner Code...");
    activateItem(":xTuple ERP:*.Run MRP_QMenu", "by Planner Code...");
    waitForObject(":Run MRP by Planner Code.XDateEdit_XDateEdit");
    type(":Run MRP by Planner Code.XDateEdit_XDateEdit", "+30");
    waitForObject(":Run MRP by Planner Code.XDateEdit_XDateEdit");
    type(":Run MRP by Planner Code.XDateEdit_XDateEdit", "<Tab>");
    waitForObject(":Run MRP by Planner Code.Create_QPushButton");
    clickButton(":Run MRP by Planner Code.Create_QPushButton");
    
    //---Create Planned Order----
    waitForObject(":xTuple ERP:*_QMenuBar_2");
    activateItem(":xTuple ERP:*_QMenuBar_2", "Schedule");
    waitForObjectItem(":xTuple ERP:*.Schedule_QMenu", "Scheduling");
    activateItem(":xTuple ERP:*.Schedule_QMenu", "Scheduling");
    waitForObjectItem(":xTuple ERP:*.Scheduling_QMenu", "New Planned Order...");
    activateItem(":xTuple ERP:*.Scheduling_QMenu", "New Planned Order...");
    waitForObject(":Planned Order...._QPushButton");
    clickButton(":Planned Order...._QPushButton");
    waitForObject(":_item_XTreeWidget_5");
    doubleClickItem(":_item_XTreeWidget_5", "YTRUCK1", 5, 5, 0, Qt.LeftButton);
    waitForObject(":Planned Order._qty_XLineEdit");
    type(":Planned Order._qty_XLineEdit", "100");
    waitForObject(":Planned Order.XDateEdit_XDateEdit");
    type(":Planned Order.XDateEdit_XDateEdit", "+9");
    waitForObject(":Planned Order.XDateEdit_XDateEdit");
    type(":Planned Order.XDateEdit_XDateEdit", "<Tab>");
    waitForObject(":Planned Order.Create_QPushButton");
    clickButton(":Planned Order.Create_QPushButton");
    waitForObject(":Planned Order.Close_QPushButton");
    clickButton(":Planned Order.Close_QPushButton");
    
    
    
    //------Create Purchase Request-------
    waitForObjectItem(":xTuple ERP:*_QMenuBar_2", "Purchase");
    activateItem(":xTuple ERP:*_QMenuBar_2", "Purchase");
    waitForObjectItem(":xTuple ERP:*.Purchase_QMenu", "Purchase Requests");
    activateItem(":xTuple ERP:*.Purchase_QMenu", "Purchase Requests");
    waitForObjectItem(":xTuple ERP:*.Purchase Requests_QMenu", "by Planner Code...");
    activateItem(":xTuple ERP:*.Purchase Requests_QMenu", "by Planner Code...");
    waitForObject(":Purchase Requests by Planner Code.Query_QPushButton");
    clickButton(":Purchase Requests by Planner Code.Query_QPushButton");
    waitForObject(":Purchase Requests by Planner Code._pr_XTreeWidget");
    openContextMenu(":Purchase Requests by Planner Code._pr_XTreeWidget", 5, 5, 0);
    waitForObjectItem(":xTuple ERP:*._menu_QMenu", "Release P/R...");
    activateItem(":xTuple ERP:*._menu_QMenu", "Release P/R...");
    waitForObject(":_frame._itemsrc_XTreeWidget");
    doubleClickItem(":_frame._itemsrc_XTreeWidget", "Toy Parts Inc\\.", 18, 8, 0, Qt.LeftButton);
    waitForObject(":Purchase Order Item.Save_QPushButton");
    clickButton(":Purchase Order Item.Save_QPushButton");
    waitForObject(":Purchase Order.Save_QPushButton");
    clickButton(":Purchase Order.Save_QPushButton");
    waitForObject(":Purchase Order.Close_QPushButton");
    clickButton(":Purchase Order.Close_QPushButton");
    waitForObject(":Purchase Requests by Planner Code.Close_QPushButton");
    clickButton(":Purchase Requests by Planner Code.Close_QPushButton");
    
    
    //------List Unposted Purchase Order------
    waitForObjectItem(":xTuple ERP:*_QMenuBar_2", "Purchase");
    activateItem(":xTuple ERP:*_QMenuBar_2", "Purchase");
    waitForObjectItem(":xTuple ERP:*.Purchase_QMenu", "Purchase Order");
    activateItem(":xTuple ERP:*.Purchase_QMenu", "Purchase Order");
    waitForObjectItem(":xTuple ERP:*.Purchase Order_QMenu", "List Unposted...");
    activateItem(":xTuple ERP:*.Purchase Order_QMenu", "List Unposted...");
    waitForObjectItem(":List Unposted Purchase Orders._pohead_XTreeWidget", "20064");
    clickItem(":List Unposted Purchase Orders._pohead_XTreeWidget", "20064", 5, 5, 1, Qt.LeftButton);
    waitForObject(":List Unposted Purchase Orders.Post P/O_QPushButton");
    clickButton(":List Unposted Purchase Orders.Post P/O_QPushButton");
    waitForObject(":List Unposted Purchase Orders.Yes_QPushButton");
    clickButton(":List Unposted Purchase Orders.Yes_QPushButton");
    waitForObject(":List Unposted Purchase Orders.Close_QPushButton");
    clickButton(":List Unposted Purchase Orders.Close_QPushButton");
   
    
    //-----Create new Purchase Order--------
    waitForObjectItem(":xTuple ERP:*_QMenuBar_2", "Purchase");
    activateItem(":xTuple ERP:*_QMenuBar_2", "Purchase");
    waitForObjectItem(":xTuple ERP:*.Purchase_QMenu", "Purchase Order");
    activateItem(":xTuple ERP:*.Purchase_QMenu", "Purchase Order");
    waitForObjectItem(":xTuple ERP:*.Purchase Order_QMenu", "List Unposted...");
    activateItem(":xTuple ERP:*.Purchase Order_QMenu", "List Unposted...");
    waitForObject(":List Unposted Purchase Orders.New_QPushButton");
    clickButton(":List Unposted Purchase Orders.New_QPushButton");
    waitForObject(":_headerPage...._QPushButton_4");
    clickButton(":_headerPage...._QPushButton_4");
    waitForObject(":_listTab_XTreeWidget_7");
    doubleClickItem(":_listTab_XTreeWidget_7", "TPARTS", 5, 5, 0, Qt.LeftButton);
    waitForObject(":Purchase Order.qt_tabwidget_tabbar_QTabBar");
    clickTab(":Purchase Order.qt_tabwidget_tabbar_QTabBar", "Line Items");
    waitForObject(":_lineItemsPage.New_QPushButton_4");
    clickButton(":_lineItemsPage.New_QPushButton_4");
    waitForObject(":_typeGroup...._QPushButton");
    clickButton(":_typeGroup...._QPushButton");
    waitForObject(":_item_XTreeWidget_6");
    doubleClickItem(":_item_XTreeWidget_6", "YPAINT1", 5, 5, 0, Qt.LeftButton);
    waitForObject(":_ordered_XLineEdit_2");
    type(":_ordered_XLineEdit_2", "100");
    waitForObject(":Purchase Order.Save_QPushButton_2");
    clickButton(":Purchase Order.Save_QPushButton_2");
    waitForObject(":Purchase Order.Save_QPushButton");
    clickButton(":Purchase Order.Save_QPushButton");
    waitForObject(":Purchase Order.Close_QPushButton");
    clickButton(":Purchase Order.Close_QPushButton");
    waitForObjectItem(":List Unposted Purchase Orders._pohead_XTreeWidget", "Toy Parts Inc\\.");
    clickItem(":List Unposted Purchase Orders._pohead_XTreeWidget", "Toy Parts Inc\\.", 5, 5, 1, Qt.LeftButton);
    waitForObject(":List Unposted Purchase Orders.Close_QPushButton");
    clickButton(":List Unposted Purchase Orders.Close_QPushButton");
    
    

}