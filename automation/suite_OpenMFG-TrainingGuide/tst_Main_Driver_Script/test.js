function main()
{

    source(findFile("scripts","functions.js"));
    source(findFile("scripts","Chapter1.js"));
    source(findFile("scripts","Chapter2.js"));
    source(findFile("scripts","Chapter3.js"));
    source(findFile("scripts","Chapter4.js"));
    source(findFile("scripts","Chapter5.js"));
    
    loginAppl("3.2.0", "1empty320alpha","admin");
    executeChapter1();
    exitAppl();
    loginAppl("3.2.0", "1empty320alpha","user01");
    executeChapter2();
    executeChapter3();
    executeChapter4();
//    executeChapter5();
}
