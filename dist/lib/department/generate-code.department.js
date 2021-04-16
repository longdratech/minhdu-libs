"use strict";
//! generateCode.js
//! version : 1.0
//! authors : Xuan Khang
//! license : Uranus Solutions Team
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateCodeDepartment = void 0;
function countWhiteSpace(s) {
    var _a;
    if (s === undefined || s.length === 0) {
        return "";
    }
    return s.match(/([\s]+)/g) == null ? 0 : (_a = s === null || s === void 0 ? void 0 : s.match(/([\s]+)/g)) === null || _a === void 0 ? void 0 : _a.length;
}
function generateCodeDepartment(department) {
    var departmentCode;
    var depFormatted;
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
exports.generateCodeDepartment = generateCodeDepartment;
