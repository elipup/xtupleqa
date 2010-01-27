function main()
{
    source(findFile("scripts","functions.js"));    
    
    //---login Application--------
    loginAppl("RUNREGISTER");     
    var appEdition = findApplicationEdition();
    
    
    
    //---------Define: User defined costing element----------------
    try{
        waitForObjectItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "Products");
        activateItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "Products");
        waitForObjectItem(":xTuple ERP: OpenMFG Edition.Products_QMenu", "Costing");
        activateItem(":xTuple ERP: OpenMFG Edition.Products_QMenu", "Costing");
        waitForObject(":xTuple ERP: OpenMFG Edition.Costing_QMenu");
        activateItem(":xTuple ERP: OpenMFG Edition.Costing_QMenu", "User-Defined Costing Elements...");
        
        waitForObject(":List User-Defined Costing Elements.New_QPushButton");
        clickButton(":List User-Defined Costing Elements.New_QPushButton");
        waitForObject(":_name_XLineEdit_7");
        type(":_name_XLineEdit_7", "Special Handling");
        clickButton(":User Costing Element.Accept P/O Distributions_QCheckBox");
        clickButton(":User Costing Element.Save_QPushButton");
        waitForObject(":List User-Defined Costing Elements._costelem_XTreeWidget");
        if(object.exists(":_costelem.Special Handling_QModelIndex"))
            test.pass("Costing Element Created: Special Handling");
        else test.fail("Costing Element not Created: Special Handling");
        
        waitForObject(":List User-Defined Costing Elements.Close_QPushButton");
        clickButton(":List User-Defined Costing Elements.Close_QPushButton");
    }catch(e){test.fail("Exception in creating User defined Costing:"+e)}
    
    
    //-------------Maintain Item Costs------------------
    try{
        waitForObjectItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "Products");
        activateItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "Products");
        waitForObjectItem(":xTuple ERP: OpenMFG Edition.Products_QMenu", "Costing");
        activateItem(":xTuple ERP: OpenMFG Edition.Products_QMenu", "Costing");
        waitForObjectItem(":xTuple ERP: OpenMFG Edition.Costing_QMenu", "Maintain Item Costs...");
        activateItem(":xTuple ERP: OpenMFG Edition.Costing_QMenu", "Maintain Item Costs...");
        
        waitForObject(":Maintain Item Costs...._QPushButton");
        clickButton(":Maintain Item Costs...._QPushButton");
        waitForObject(":_item_XTreeWidget_4");
        doubleClickItem(":_item_XTreeWidget_4","TBODY1",0,0,1,Qt.LeftButton);
        
        waitForObject(":Maintain Item Costs.New Cost_QPushButton");
        clickButton(":Maintain Item Costs.New Cost_QPushButton");
        waitForObject(":Create Item Cost._costelem_XComboBox");
        if(findObject(":Create Item Cost._costelem_XComboBox").currentText!="Material")
            clickItem(":Create Item Cost._costelem_XComboBox", "Material",0,0,1,Qt.LeftButton);
        if(findObject(":Create Item Cost._currency_XComboBox").currentText!="USD - $")
            clickItem(":Create Item Cost._currency_XComboBox", "USD - $",0,0,1,Qt.LeftButton);
        type(":Create Item Cost._currency_XLineEdit", "1.0");
        clickButton(":Create Item Cost.Post Cost to Standard_QCheckBox");
        clickButton(":Create Item Cost.Save_QPushButton");
        test.log("Material cost for TBODY1 defined");    
        
        snooze(1);
        waitForObject(":Maintain Item Costs...._QPushButton");
        clickButton(":Maintain Item Costs...._QPushButton");
        snooze(1);
        waitForObject(":_item_XTreeWidget_4");
        doubleClickItem(":_item_XTreeWidget_4","TBOX1",0,0,1,Qt.LeftButton);  
        snooze(1);
        waitForObject(":Maintain Item Costs.New Cost_QPushButton");
        clickButton(":Maintain Item Costs.New Cost_QPushButton");
        snooze(1);
        waitForObject(":Create Item Cost._costelem_XComboBox");
        if(findObject(":Create Item Cost._costelem_XComboBox").currentText!="Material")
            clickItem(":Create Item Cost._costelem_XComboBox", "Material",0,0,1,Qt.LeftButton);
        if(findObject(":Create Item Cost._currency_XComboBox").currentText!="USD - $")
            clickItem(":Create Item Cost._currency_XComboBox", "USD - $",0,0,1,Qt.LeftButton);
        type(":Create Item Cost._currency_XLineEdit", "0.25");
        clickButton(":Create Item Cost.Post Cost to Standard_QCheckBox");
        clickButton(":Create Item Cost.Save_QPushButton");
        test.log("Material cost for TBOX1 defined");    
        snooze(1);  
        waitForObject(":Maintain Item Costs...._QPushButton");
        clickButton(":Maintain Item Costs...._QPushButton");
        waitForObject(":_item_XTreeWidget_4");
        doubleClickItem(":_item_XTreeWidget_4","TINSERT1",0,0,1,Qt.LeftButton);
        snooze(2);
        waitForObject(":Maintain Item Costs.New Cost_QPushButton");
        clickButton(":Maintain Item Costs.New Cost_QPushButton");
        waitForObject(":Create Item Cost._costelem_XComboBox");
        if(findObject(":Create Item Cost._costelem_XComboBox").currentText!="Material")
            clickItem(":Create Item Cost._costelem_XComboBox", "Material",0,0,1,Qt.LeftButton);
        if(findObject(":Create Item Cost._currency_XComboBox").currentText!="USD - $")
            clickItem(":Create Item Cost._currency_XComboBox", "USD - $",0,0,1,Qt.LeftButton);
        type(":Create Item Cost._currency_XLineEdit", "0.5");
        clickButton(":Create Item Cost.Post Cost to Standard_QCheckBox");
        clickButton(":Create Item Cost.Save_QPushButton");
        test.log("Material cost for TINSERT1 defined");    
        
        snooze(1);
        waitForObject(":Maintain Item Costs...._QPushButton");
        clickButton(":Maintain Item Costs...._QPushButton");
        snooze(1);
        waitForObject(":_item_XTreeWidget_4");
        doubleClickItem(":_item_XTreeWidget_4","TWHEEL1",0,0,0,Qt.LeftButton);
        snooze(1);
        waitForObject(":Maintain Item Costs.New Cost_QPushButton");
        clickButton(":Maintain Item Costs.New Cost_QPushButton");
        waitForObject(":Create Item Cost._costelem_XComboBox");
        if(findObject(":Create Item Cost._costelem_XComboBox").currentText!="Material")
            clickItem(":Create Item Cost._costelem_XComboBox", "Material",0,0,1,Qt.LeftButton);
        if(findObject(":Create Item Cost._currency_XComboBox").currentText!="USD - $")
            clickItem(":Create Item Cost._currency_XComboBox", "USD - $",0,0,1,Qt.LeftButton);
        type(":Create Item Cost._currency_XLineEdit", "0.10");
        clickButton(":Create Item Cost.Post Cost to Standard_QCheckBox");
        clickButton(":Create Item Cost.Save_QPushButton");
        test.log("Material cost for TWHEEL1 defined");    
        
        snooze(1);
        waitForObject(":Maintain Item Costs...._QPushButton");
        clickButton(":Maintain Item Costs...._QPushButton");
        snooze(1);
        waitForObject(":_item_XTreeWidget_4");
        doubleClickItem(":_item_XTreeWidget_4","YPAINT1",0,0,1,Qt.LeftButton);    
        waitForObject(":Maintain Item Costs.New Cost_QPushButton");
        clickButton(":Maintain Item Costs.New Cost_QPushButton");
        waitForObject(":Create Item Cost._costelem_XComboBox");
        if(findObject(":Create Item Cost._costelem_XComboBox").currentText!="Material")
            clickItem(":Create Item Cost._costelem_XComboBox", "Material",0,0,1,Qt.LeftButton);
        if(findObject(":Create Item Cost._currency_XComboBox").currentText!="USD - $")
            clickItem(":Create Item Cost._currency_XComboBox", "USD - $",0,0,1,Qt.LeftButton);
        type(":Create Item Cost._currency_XLineEdit", "5.00");
        clickButton(":Create Item Cost.Post Cost to Standard_QCheckBox");
        clickButton(":Create Item Cost.Save_QPushButton");
        test.log("Material cost for YPAINT1 defined");    
        
        snooze(1);
        waitForObject(":Maintain Item Costs...._QPushButton");
        clickButton(":Maintain Item Costs...._QPushButton");
        snooze(1);
        waitForObject(":_item_XTreeWidget_4");
        doubleClickItem(":_item_XTreeWidget_4","YPAINT1",0,0,1,Qt.LeftButton);        
        waitForObject(":Maintain Item Costs.New Cost_QPushButton");
        clickButton(":Maintain Item Costs.New Cost_QPushButton");
        waitForObject(":Create Item Cost._costelem_XComboBox");
        if(findObject(":Create Item Cost._costelem_XComboBox").currentText!="Special Handling")
            clickItem(":Create Item Cost._costelem_XComboBox", "Special Handling",0,0,1,Qt.LeftButton);
        if(findObject(":Create Item Cost._currency_XComboBox").currentText!="USD - $")
            clickItem(":Create Item Cost._currency_XComboBox", "USD - $",0,0,1,Qt.LeftButton);
        type(":Create Item Cost._currency_XLineEdit", "2.00");
        clickButton(":Create Item Cost.Post Cost to Standard_QCheckBox");
        clickButton(":Create Item Cost.Save_QPushButton");
        snooze(1);
        test.log("Special Handling cost for YPAINT1 defined");    
        waitForObject(":Maintain Item Costs.Close_QPushButton");
        clickButton(":Maintain Item Costs.Close_QPushButton");
    }catch(e){test.fail("Exception in creating User defined costing:"+e);}
    
    //---------Update Actual Costs-------------
    try{
        waitForObjectItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "Products");
        activateItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "Products");
        waitForObjectItem(":xTuple ERP: OpenMFG Edition.Products_QMenu", "Costing");
        activateItem(":xTuple ERP: OpenMFG Edition.Products_QMenu", "Costing");
        waitForObjectItem(":xTuple ERP: OpenMFG Edition.Costing_QMenu", "Update Actual Costs");
        activateItem(":xTuple ERP: OpenMFG Edition.Costing_QMenu", "Update Actual Costs");
        waitForObjectItem(":xTuple ERP: OpenMFG Edition.Update Actual Costs_QMenu", "by Class Code...");
        activateItem(":xTuple ERP: OpenMFG Edition.Update Actual Costs_QMenu", "by Class Code...");
        waitForObject(":_classCode.All Class Codes_QRadioButton");
        clickButton(":_classCode.All Class Codes_QRadioButton");
        clickButton(":Update Actual Costs by Class Code.Select all Costs_QPushButton");
        waitForObject(":Update Actual Costs by Class Code.Roll Up Actual Costs_QCheckBox");
        clickButton(":Update Actual Costs by Class Code.Roll Up Actual Costs_QCheckBox");
        waitForObject(":Update Actual Costs by Class Code.Update_QPushButton");
        clickButton(":Update Actual Costs by Class Code.Update_QPushButton");
        test.log("Updated Actual Costs");
    }catch(e){test.fail("Exception in updating Actual Costs");}
    
    //-----------Post Actual Costs------------------
    try{
        waitForObjectItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "Products");
        activateItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "Products");
        waitForObjectItem(":xTuple ERP: OpenMFG Edition.Products_QMenu", "Costing");
        activateItem(":xTuple ERP: OpenMFG Edition.Products_QMenu", "Costing");
        waitForObjectItem(":xTuple ERP: OpenMFG Edition.Costing_QMenu", "Post Actual Costs");
        activateItem(":xTuple ERP: OpenMFG Edition.Costing_QMenu", "Post Actual Costs");
        waitForObjectItem(":xTuple ERP: OpenMFG Edition.Post Actual Costs_QMenu", "by Class Code...");
        activateItem(":xTuple ERP: OpenMFG Edition.Post Actual Costs_QMenu", "by Class Code...");
        waitForObject(":_classCode.All Class Codes_QRadioButton_2");
        clickButton(":_classCode.All Class Codes_QRadioButton_2");
        waitForObject(":Post Actual Costs by Class Code.Select all Costs_QPushButton");
        clickButton(":Post Actual Costs by Class Code.Select all Costs_QPushButton");
        waitForObject(":Post Actual Costs by Class Code.Roll Up Standard Costs_QCheckBox");
        clickButton(":Post Actual Costs by Class Code.Roll Up Standard Costs_QCheckBox");
        waitForObject(":Post Actual Costs by Class Code.Post_QPushButton");
        clickButton(":Post Actual Costs by Class Code.Post_QPushButton");
        test.log("Posted Actual Costs");
    }catch(e){test.fail("Exception in Posting Actual Costs");}
    
    //-------------Verify standard and actual cost in Intended Costed BOM---------------
    try{
        waitForObjectItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "Products");
        activateItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "Products");
        waitForObjectItem(":xTuple ERP: OpenMFG Edition.Products_QMenu", "Costing");
        activateItem(":xTuple ERP: OpenMFG Edition.Products_QMenu", "Costing");
        waitForObjectItem(":xTuple ERP: OpenMFG Edition.Costing_QMenu", "Reports");
        activateItem(":xTuple ERP: OpenMFG Edition.Costing_QMenu", "Reports");
        waitForObjectItem(":xTuple ERP: OpenMFG Edition.Reports_QMenu", "Costed BOM");
        activateItem(":xTuple ERP: OpenMFG Edition.Reports_QMenu", "Costed BOM");
        waitForObjectItem(":xTuple ERP: OpenMFG Edition.Costed BOM_QMenu", "Indented...");
        activateItem(":xTuple ERP: OpenMFG Edition.Costed BOM_QMenu", "Indented...");
        waitForObject(":Costed Indented Bill of Materials._itemNumber_ItemLineEdit");
        type(":Costed Indented Bill of Materials._itemNumber_ItemLineEdit", "ytruck1");
        waitForObject(":Costed Indented Bill of Materials._itemNumber_ItemLineEdit");
        type(":Costed Indented Bill of Materials._itemNumber_ItemLineEdit", "<Tab>");
        waitForObject(":_costsGroup.Use Actual Costs_QRadioButton");
        clickButton(":_costsGroup.Use Actual Costs_QRadioButton");
        
        var actlcost= grabWidget(findObject(":Costed Bill of Materials._bomitem_XTreeWidget"));
        actlcost.save("actlcost.png");
        waitForObject(":_costsGroup.Use Standard Costs_QRadioButton");
        clickButton(":_costsGroup.Use Standard Costs_QRadioButton");
        var strdcost= grabWidget(findObject(":Costed Bill of Materials._bomitem_XTreeWidget"));
        strdcost.save("strdcost.png");
        if(actlcost.toImage()==strdcost.toImage()) test.pass("Actual costs are equal to Standard costs");
        else test.fail("Actual costs are not equal to Standard costs");
        waitForObject(":Costed Indented Bill of Materials.Close_QPushButton");
        clickButton(":Costed Indented Bill of Materials.Close_QPushButton");
    }catch(e){test.fail("Exception in verifying standard and actual costs:"+e)}
    
}