const excel = require('exceljs')
const jsonData = require('./JSON Sheet/sheetData.json')

const createSheet = async function (req, res) {
    try {
        const workbook = new excel.Workbook();
        const workSheet = workbook.addWorksheet('Users Data');
        workSheet.columns = [
            {header:'Id',key:'id',width:10},
            {header:'First_Name',key:'first_name',width:20},
            {header:'Last_Name',key:'last_name',width:20},
            {header:'Email',key:'email',width:30},
            {header:'Gender',key:'gender',width:10},
            {header:'Ip_address',key:'ip_address',width:20},
            {header:'Account No',key:'Account No',width:40},
            {header:'Mobile No',key:'mobile no',width:20}
        ]
        jsonData.forEach(user => {
            workSheet.addRow(user)
        })
        
        await workbook.xlsx.writeFile('UsersJsonData.xlsx')
        return res.status(201).send({ msg: "Google Sheet Data Created"})
         
    } catch (err) {
        return res.status(500).send({ msg: err.message })
    }
}

module.exports.createSheet = createSheet