function main()
{
    waitForObject(":_username_QLineEdit");
    type(":_username_QLineEdit", "admin");
    
    waitForObject(":_password_QLineEdit");
    type(":_password_QLineEdit", "1zenqa1");
    
//    waitForObject(":_password_QLineEdit");
    type(":_password_QLineEdit", "<Return>");
//    waitForObjectItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "Products");
//    activateItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "Products");
//    waitForObjectItem(":xTuple ERP: OpenMFG Edition.Products_QMenu", "Master Information");
//    activateItem(":xTuple ERP: OpenMFG Edition.Products_QMenu", "Master Information");
//    waitForObjectItem(":xTuple ERP: OpenMFG Edition.Master Information_QMenu_4", "Standard Labor Rates...");
//    activateItem(":xTuple ERP: OpenMFG Edition.Master Information_QMenu_4", "Standard Labor Rates...");
    
//    waitForObject(":List Standard Labor Rates.New_QPushButton");
//    clickButton(":List Standard Labor Rates.New_QPushButton");
//    waitForObject(":_code_XLineEdit_5");
//    type(":_code_XLineEdit_5", "Assembly");
//    type(":_description_XLineEdit_12", "Assembly Rate");
//    type(":_rate_XLineEdit", "12.00");
//    waitForObject(":List Standard Labor Rates.Save_QPushButton");
//    clickButton(":List Standard Labor Rates.Save_QPushButton");
//    test.log("Standard Labor rate for 'Assembly' created");
//    
//    waitForObject(":List Standard Labor Rates.New_QPushButton");
//    clickButton(":List Standard Labor Rates.New_QPushButton");
//    waitForObject(":_code_XLineEdit_5");
//    type(":_code_XLineEdit_5", "SETUP");
//    type(":_description_XLineEdit_12", "Setup Rate");
//    type(":_rate_XLineEdit", "15.00");
//    waitForObject(":List Standard Labor Rates.Save_QPushButton");
//    clickButton(":List Standard Labor Rates.Save_QPushButton");
//    test.log("Standard Labor rate for 'Setup' created");
//    
//    waitForObject(":List Standard Labor Rates.Close_QPushButton");
//    clickButton(":List Standard Labor Rates.Close_QPushButton");
//    
    waitForObjectItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "Products");
    activateItem(":xTuple ERP: OpenMFG Edition_QMenuBar", "Products");
    waitForObjectItem(":xTuple ERP: OpenMFG Edition.Products_QMenu", "Master Information");
    activateItem(":xTuple ERP: OpenMFG Edition.Products_QMenu", "Master Information");
    waitForObjectItem(":xTuple ERP: OpenMFG Edition.Master Information_QMenu_4", "Work Centers...");
    activateItem(":xTuple ERP: OpenMFG Edition.Master Information_QMenu_4", "Work Centers...");
//    waitForObject(":List Work Centers.New_QPushButton");
//    clickButton(":List Work Centers.New_QPushButton");
//    
//    waitForObject(":Work Center._code_XLineEdit");
//    type(":Work Center._code_XLineEdit", "ASSEMBLY1");
//    waitForObject(":Work Center._warehouse_WComboBox");
//    type(":Work Center._warehouse_WComboBox", "WH1");
//    type(":Work Center._description_XLineEdit", "MFG");
//    type(":Work Center._description_XLineEdit", "Assembly Work Center#1");
//    waitForObject(":Work Center.qt_tabwidget_tabbar_QTabBar");
//    clickTab(":Work Center.qt_tabwidget_tabbar_QTabBar", "Scheduling");
//    waitForObject(":Department.VirtualClusterLineEdit_DeptClusterLineEdit");
//    type(":Department.VirtualClusterLineEdit_DeptClusterLineEdit", "MFG");
////    waitForObject(":_schedulingTab.Average_QGroupBox");
////    mouseClick(":_schedulingTab.Average_QGroupBox", 154, 36, 1, Qt.LeftButton);
//    waitForObject(":Work Center.qt_tabwidget_tabbar_QTabBar");
//    clickTab(":Work Center.qt_tabwidget_tabbar_QTabBar", "Costs");
//    waitForObject(":Overhead._numOfMachines_QSpinBox");
//    type(":Overhead._numOfMachines_QSpinBox", "<Ctrl+A>");
//    type(":Overhead._numOfMachines_QSpinBox", "<Del>");
//    type(":Overhead._numOfMachines_QSpinBox", "1");
//    waitForObject(":Overhead._numOfPeople_QSpinBox");
//    type(":Overhead._numOfPeople_QSpinBox", "<Ctrl+A>");
//    type(":Overhead._numOfPeople_QSpinBox", "<Del>");
//    type(":Overhead._numOfPeople_QSpinBox", "1");
//    waitForObject(":Run Labor Rate._runRate_XLineEdit");
//    type(":Run Labor Rate._runRate_XLineEdit", "<Ctrl+A>");
//    type(":Run Labor Rate._runRate_XLineEdit", "<Del>");
//    type(":Run Labor Rate._runRate_XLineEdit", "10.00");
//    waitForObject(":Setup Labor Rate._setupRate_XLineEdit");
//    type(":Setup Labor Rate._setupRate_XLineEdit", "<Ctrl+A>");
//    type(":Setup Labor Rate._setupRate_XLineEdit", "<Del>");
//    type(":Setup Labor Rate._setupRate_XLineEdit", "10.00");
//    waitForObject(":Overhead._overheadPrcntOfLabor_XLineEdit");
//    type(":Overhead._overheadPrcntOfLabor_XLineEdit", "10.00");
//    waitForObject(":Overhead._overheadPerLaborHour_XLineEdit");
//    type(":Overhead._overheadPerLaborHour_XLineEdit", "0.00");
//    waitForObject(":Overhead._overheadPerMachHour_XLineEdit");
//    type(":Overhead._overheadPerMachHour_XLineEdit", "0.00");
//    waitForObject(":Overhead._overheadPerUnit_XLineEdit");
//    type(":Overhead._overheadPerUnit_XLineEdit", "0.00");
//    waitForObject(":Work Center.qt_tabwidget_tabbar_QTabBar");
//    clickTab(":Work Center.qt_tabwidget_tabbar_QTabBar", "Scheduling");
//    waitForObject(":Average._avgQueueDays_QSpinBox");
//    type(":Average._avgQueueDays_QSpinBox", "<Del>");
//    waitForObject(":Average._avgQueueDays_QSpinBox");
//    type(":Average._avgQueueDays_QSpinBox", "0");
//    waitForObject(":Average._avgQueueDays_QSpinBox");
//    type(":Average._avgQueueDays_QSpinBox", "<Tab>");
//    waitForObject(":Average._avgSetup_XLineEdit");
//    type(":Average._avgSetup_XLineEdit", "6");
//    waitForObjectItem(":Average._setupType_XComboBox", "Labor Time");
//    clickItem(":Average._setupType_XComboBox", "Labor Time", 5, 5, 1, Qt.LeftButton);
//    waitForObject(":Capacity._dailyCapacity_XLineEdit");
//    type(":Capacity._dailyCapacity_XLineEdit", "480.0");
//    waitForObject(":Capacity._dailyCapacity_XLineEdit");
//    type(":Capacity._dailyCapacity_XLineEdit", "<Tab>");
//    waitForObject(":Capacity._efficiencyFactor_XLineEdit");
//    type(":Capacity._efficiencyFactor_XLineEdit", "100.00");
//    waitForObject(":Work Center.qt_tabwidget_tabbar_QTabBar");
//    clickTab(":Work Center.qt_tabwidget_tabbar_QTabBar", "Notes");
//    waitForObject(":Work Center.qt_tabwidget_tabbar_QTabBar");
//    clickTab(":Work Center.qt_tabwidget_tabbar_QTabBar", "Scheduling");
//    waitForObject(":Work Center.qt_tabwidget_tabbar_QTabBar");
//    clickTab(":Work Center.qt_tabwidget_tabbar_QTabBar", "Notes");
//    waitForObject(":_notesTab._comments_QTextEdit");
//    type(":_notesTab._comments_QTextEdit", "Assembly Work Center Number 1");
//    waitForObject(":Work Center.Save_QPushButton");
//    clickButton(":Work Center.Save_QPushButton");
    
    waitForObjectItem(":List Work Centers._wrkcnt_XTreeWidget", "Assembly Work Center#1");
    clickItem(":List Work Centers._wrkcnt_XTreeWidget", "Assembly Work Center#1", 5, 5, 1, Qt.LeftButton);
    waitForObject(":List Work Centers.Copy_QPushButton");
    clickButton(":List Work Centers.Copy_QPushButton");
    waitForObject(":Work Center._code_XLineEdit");
    type(":Work Center._code_XLineEdit", "SHIPPING1");
    type(":Work Center._description_XLineEdit", "Shipping Work Center #1");
    clickTab(":Work Center.qt_tabwidget_tabbar_QTabBar", "Costs");
    waitForObject(":Run Labor Rate.Select Standard Rate:_QRadioButton");
    clickButton(":Run Labor Rate.Select Standard Rate:_QRadioButton");
    waitForObject(":Setup Labor Rate.Select Standard Rate:_QRadioButton");
    clickButton(":Setup Labor Rate.Select Standard Rate:_QRadioButton");
    type(":Setup Labor Rate._stdSetupRate_XComboBox", "SETUP");
    clickTab(":Work Center.qt_tabwidget_tabbar_QTabBar", "Notes");
    waitForObject(":_notesTab._comments_QTextEdit");
    type(":_notesTab._comments_QTextEdit", "<Del>");
    waitForObject(":_notesTab._comments_QTextEdit");
    type(":_notesTab._comments_QTextEdit", "Shipping Work Center Number 1");
    waitForObject(":Work Center.Save_QPushButton");
    clickButton(":Work Center.Save_QPushButton");
    waitForObject(":List Work Centers.Close_QPushButton");
    clickButton(":List Work Centers.Close_QPushButton");

}
