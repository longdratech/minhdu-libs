//! generateCode.js
//! version : 1.0
//! authors : Xuan Khang
//! license : Uranus Solutions Team

function countWhiteSpace(s: string) {
    if (s === undefined || s.length === 0) {
        return "";
    }
    return s.match(/([\s]+)/g) == null ? 0 : s?.match(/([\s]+)/g)?.length;
}

export function generateCodeDepartment(department: string) {
    let departmentCode!: string;
    let depFormatted!: string;

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
        default:
            departmentCode = (depFormatted.substring(0, 1) + depFormatted.split(' ')[1].substring(0, 1) + depFormatted.split(' ')[2].substring(0, 1)).toUpperCase();
    }
    return departmentCode;
}
