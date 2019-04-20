import { IMultiSelectTexts, IMultiSelectSettings } from 'angular-2-dropdown-multiselect';
export class Arraysbindings {
    // public static Category = [
    //     { 'name': 'Select', 'id': '' },
    //     { 'name': 'Login', 'id': '374' },
    //     { 'name': 'Siteerror', 'id': '375' },
    //     { 'name': 'Feed Back', 'id': '376' },
    //     { 'name': 'Registration', 'id': '401' },
    //     { 'name': 'Fees Details', 'id': '402' },
    //     { 'name': 'Success Stories', 'id': '403' },
    //     { 'name': 'Other', 'id': '404' },
    // ];
    // public static educationcategorywithoutselect = [
    //     { 'name': 'Bachelors in Engineering', 'id': 1 },
    //     { 'name': 'Bachelors in Degree', 'id': 2 },
    //     { 'name': 'Diploma', 'id': 3 },
    //     { 'name': 'Doctorate/phd', 'id': 4 },
    //     { 'name': 'Masters in Engineering', 'id': 5 },
    //     { 'name': 'Bachelors in Medicine', 'id': 6 },
    //     { 'name': 'Masters in Degree', 'id': 7 },
    //     { 'name': 'Finance - ICWAI/CA/CS', 'id': 10 },
    // ];
    // public static MaritalStatussearch = [
    //     { 'name': 'Unmarried', 'id': 43 },
    //     { 'name': 'Divorce', 'id': 44 },
    //     { 'name': 'Widow/Widower', 'id': 45 },
    //     { 'name': 'Separated', 'id': 46 }
    // ];
    // public static childStayingWith = [
    //     { 'label': 'Select ', 'title': 'Select', 'value': '' },
    //     { 'label': 'Father', 'title': 'Father', 'value': 39 },
    //     { 'label': 'Mother', 'title': 'Mother', 'value': 40 },
    //     { 'label': 'YoungerBrother', 'title': 'YoungerBrother', 'value': 41 },
    //     { 'label': 'ElderBrother', 'title': 'ElderBrother', 'value': 42 },
    //     { 'label': 'Self', 'title': 'Self', 'value': 283 },
    //     { 'label': 'YoungerSister', 'title': 'YoungerSister', 'value': 321 },
    // ];
    // public static visastatus = [
    //     { 'name': 'Select', 'id': '' },
    //     { 'name': 'Student Visa', 'id': 284 },
    //     { 'name': 'Work Permit', 'id': 285 },
    //     { 'name': 'Temporary Visa', 'id': 286 },
    //     { 'name': 'Citizen', 'id': 521 },
    //     { 'name': 'Permanent Resident', 'id': 522 },
    //     { 'name': 'Green Card', 'id': 553 }
    // ];
    public static numbersBind(str, from, to) {
        const numArr = [];
        numArr.push({ 'name': 'select', 'title': 'select', 'id': '' });
        for (let i = from; i <= to; i++) {
            numArr.push({ 'name': i + ' ' + str, 'title': i + ' ' + str, 'id': i });
        }
        return numArr;
    }

    public static mySettings: IMultiSelectSettings = {
        enableSearch: true,
        checkedStyle: 'checkboxes',
        buttonClasses: 'btn btn-default btn-block multiselect',
        dynamicTitleMaxItems: 2,
        displayAllSelectedText: true,
        showUncheckAll: true,
        showCheckAll: true,
        pullRight: true,
        containerClasses: 'containerwidth',
        closeOnClickOutside: true
    };
    public static mysingleSettings: IMultiSelectSettings = {
        enableSearch: true,
        checkedStyle: 'glyphicon',
        buttonClasses: 'btn btn-default btn-block multiselect',
        dynamicTitleMaxItems: 1,
        displayAllSelectedText: true,
        showUncheckAll: false,
        showCheckAll: false,
        pullRight: true,
        containerClasses: 'containerwidth',
        selectionLimit: 1,
        autoUnselect: true,
        closeOnSelect: true,
        closeOnClickOutside: true
    };
    public static myTexts: IMultiSelectTexts = {
        checkAll: 'Select all',
        uncheckAll: 'Unselect all',
        checked: 'item selected',
        checkedPlural: 'items selected',
        searchPlaceholder: 'Find',
        searchEmptyResult: 'Nothing found...',
        searchNoRenderText: 'Type in search box to see results...',
        defaultTitle: 'Select',
        allSelected: 'All selected'
    };
    public static myTextsSingle: IMultiSelectTexts = {
        checkAll: 'Select all',
        uncheckAll: 'Unselect all',
        checked: 'item selected',
        checkedPlural: 'items selected',
        searchPlaceholder: 'Find',
        searchEmptyResult: 'Nothing found...',
        searchNoRenderText: 'Type in search box to see results...',
        defaultTitle: 'Select',
        allSelected: 'Select'
    };
}



// npm install angular - 2 - dropdown - multiselect--save (or) npm install angular-2-dropdown-multiselect --save