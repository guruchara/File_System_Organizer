// We will be creating a File System Organizer//
//Features of the Project -
//If you have numerous Files in a folder and they are not Properly arranged
//So you can use this tool to arrange them in specific directory according to their extension
// like text files will go into text File Folder .exe files will go into application folder and so on
// so at the end you will have a arranged set of files in specific folders


const helpmodule=require('../command/help')

const orgranizemodule=require('../command/organizer')

const treemodule=require('../command/tree')

// let input=process.argv[2];                   index           // 0          1
let input=process.argv.slice(2); // it takes only two element like organize filepath
// console.log(input)

let command=input[0]

  

switch(command){
   case 'Organize' : 
//    console.log('organizer')
     orgranizemodule.organizeFnKey(input[1])
       break
   case 'Tree' :
    //    console.log('Tree increase ')
    treemodule.treeFnKey(input[1])
       break
   case 'Help':
       helpmodule.helpFnKey()
       break
   default :
   console.log('pleaee enter valid command')
   break
}



