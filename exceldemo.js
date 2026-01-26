const Exceljs = require('exceljs');

async function readExcelFile() {
const workbook = new Exceljs.Workbook();
await workbook.xlsx.readFile("C:/Users/admin/Downloads/download.xlsx");

const worksheet = workbook.getWorksheet('Sheet1');
worksheet.eachRow((row, rownumber) => 
    
    {
row.eachCell((cell, colnumber) => 
    
    {
    if(cell.value==="Yellow")
    {
        console.log(rownumber);
        console.log(colnumber);
    }
})
    })
 worksheet.getCell(3,4).value = "Pineapple";
 await workbook.xlsx.writeFile("C:/Users/admin/Downloads/download.xlsx");

}
    

readExcelFile();

