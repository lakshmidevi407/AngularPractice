import { IMultiSelectTexts, IMultiSelectSettings } from 'angular-2-dropdown-multiselect';
export class Arraysbindings {
    public static Category = [
        { 'name': 'Select', 'id': '' },
        { 'name': 'Login', 'id': '374' },
        { 'name': 'Siteerror', 'id': '375' },
        { 'name': 'Feed Back', 'id': '376' },
        { 'name': 'Registration', 'id': '401' },
        { 'name': 'Fees Details', 'id': '402' },
        { 'name': 'Success Stories', 'id': '403' },
        { 'name': 'Other', 'id': '404' },
    ];
    public static educationcategorywithoutselect = [
        { 'name': 'Bachelors in Engineering', 'id': 1 },
        { 'name': 'Bachelors in Degree', 'id': 2 },
        { 'name': 'Diploma', 'id': 3 },
        { 'name': 'Doctorate/phd', 'id': 4 },
        { 'name': 'Masters in Engineering', 'id': 5 },
        { 'name': 'Bachelors in Medicine', 'id': 6 },
        { 'name': 'Masters in Degree', 'id': 7 },
        { 'name': 'Finance - ICWAI/CA/CS', 'id': 10 },
    ];
    public static MaritalStatussearch = [
        { 'name': 'Unmarried', 'id': 43 },
        { 'name': 'Divorce', 'id': 44 },
        { 'name': 'Widow/Widower', 'id': 45 },
        { 'name': 'Separated', 'id': 46 }
    ];
    public static childStayingWith = [
        { 'label': 'Select ', 'title': 'Select', 'value': '' },
        { 'label': 'Father', 'title': 'Father', 'value': 39 },
        { 'label': 'Mother', 'title': 'Mother', 'value': 40 },
        { 'label': 'YoungerBrother', 'title': 'YoungerBrother', 'value': 41 },
        { 'label': 'ElderBrother', 'title': 'ElderBrother', 'value': 42 },
        { 'label': 'Self', 'title': 'Self', 'value': 283 },
        { 'label': 'YoungerSister', 'title': 'YoungerSister', 'value': 321 },
    ];
    public static visastatus = [
        { 'name': 'Select', 'id': '' },
        { 'name': 'Student Visa', 'id': 284 },
        { 'name': 'Work Permit', 'id': 285 },
        { 'name': 'Temporary Visa', 'id': 286 },
        { 'name': 'Citizen', 'id': 521 },
        { 'name': 'Permanent Resident', 'id': 522 },
        { 'name': 'Green Card', 'id': 553 }
    ];
    public static heightsearch = [
        { 'name': `Select`, 'id': '' },
        { 'name': `4'8 in - 142 cms`, 'id': 9 },
        { 'name': `4'9 in - 144 cms`, 'id': 10 },
        { 'name': `4'10 in - 147 cms`, 'id': 11 },
        { 'name': `4'11 in - 150 cms`, 'id': 12 },
        { 'name': `5'0 in - 152 cms`, 'id': 13 },
        { 'name': `5'1 in - 155 cms`, 'id': 14 },
        { 'name': `5'2 in - 157 cms`, 'id': 15 },
        { 'name': `5'3 in - 160 cms`, 'id': 16 },
        { 'name': `5'4 in - 162 cms`, 'id': 17 },
        { 'name': `5'5 in - 165 cms`, 'id': 18 },
        { 'name': `5'6 in - 167 cms`, 'id': 19 },
        { 'name': `5'7 in - 170 cms`, 'id': 20 },
        { 'name': `5'8 in - 172 cms`, 'id': 21 },
        { 'name': `5'9 in - 175 cms`, 'id': 22 },
        { 'name': `5'10 in - 177 cms`, 'id': 23 },
        { 'name': `5'11 in - 180 cms`, 'id': 24 },
        { 'name': `6'0 in - 183 cms`, 'id': 25 },
        { 'name': `6'1 in - 185 cms`, 'id': 26 },
        { 'name': `6'2 in - 188 cms`, 'id': 27 },
        { 'name': `6'3 in - 190 cms`, 'id': 28 },
        { 'name': `6'4 in - 193 cms`, 'id': 29 },
        { 'name': `6'5 in - 195 cms`, 'id': 30 },
        { 'name': `6'6 in - 198 cms`, 'id': 31 },
        { 'name': `6'7 in - 200 cms`, 'id': 32 },
        { 'name': `6'8 in - 203 cms`, 'id': 33 },
        { 'name': `6'9 in - 205 cms`, 'id': 34 },
        { 'name': `6'10 in - 208 cms`, 'id': 35 },
        { 'name': `6'11 in - 210 cms`, 'id': 36 },
        { 'name': `7'0 in - 213 cms`, 'id': 37 },
        { 'name': `7'1 in - 215 cms`, 'id': 38 },
        { 'name': `7'2 in - 218 cms`, 'id': 39 }
    ];
    public static numbersBind(str, from, to) {
        const numArr = [];
        numArr.push({ 'name': 'select', 'title': 'select', 'id': '' });
        for (let i = from; i <= to; i++) {
            numArr.push({ 'name': i + ' ' + str, 'title': i + ' ' + str, 'id': i });
        }
        return numArr;
    }
    public static partnerAgebind(type) {
        const Arr: any[] = [];
        if (type === 'select') {
            Arr.push({ 'id': '', 'name': 'Select' });
        }
        for (let i = 0; i < 11; i++) {
            if (type === 'select') {
                Arr.push({ 'id': i, 'name': i + ' Years' });
            } else {
                Arr.push({ 'label': i, 'title': i, 'value': i });
            }
        }
        return Arr;
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