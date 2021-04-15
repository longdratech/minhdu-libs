
//! generateCode.js
//! version : 1.0
//! authors : Xuan Khang
//! license : KMA Soft

function countWhiteSpace(s) {
    if (s === undefined || s.length === 0) {
        return "";
    }
    return s.match(/([\s]+)/g) == null ? 0 : s.match(/([\s]+)/g).length;
}

function generateCode(department){
    let departmentCode;
    let depFormatted;

    if (department !== undefined && department.length > 0) {
        depFormatted = department.trim();
    }

    switch (countWhiteSpace(depFormatted)) {
        case 0:
            switch (depFormatted.length) {
                case 1:
                    departmentCode = (depFormatted + '11').toUpperCase();
                    break;
                case 2:
                    departmentCode = (depFormatted + '1').toUpperCase();
                    break;
                default:
                    departmentCode = depFormatted.substring(0, 3).toUpperCase();
            }
            break;
        case 1:
            let wordSubLength = depFormatted.split(" ");
            switch (wordSubLength[1].trim().length) {
                case 1:
                    departmentCode = (depFormatted.substring(0, 1) + wordSubLength[1].substring(0,1) + "1").toUpperCase();
                    break;
                default:
                    departmentCode = (depFormatted.substring(0, 1) + wordSubLength[1].substring(0, 2)).toUpperCase();
            }
            break;
        case 2:
            let splitDep = depFormatted.split(' ');
            departmentCode = (depFormatted.substring(0, 1) + splitDep[1].substring(0, 1) + splitDep[2].substring(0, 1)).toUpperCase();
            break;
        default:
            departmentCode = (depFormatted.substring(0, 1) + depFormatted.split(' ')[1].substring(0, 1) + depFormatted.split(' ')[2].substring(0, 1)).toUpperCase();
    }

    return departmentCode;

}