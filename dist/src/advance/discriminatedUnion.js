"use strict";
// -------------------------------
// tagged Union
// -------------------------------
// 使える型は、リテラル型, null, undefined
function describeStatus(uploadStatus) {
    switch (uploadStatus.type) {
        case 'Success':
            console.log('upload succeeded.');
            break;
        case 'Failure':
            console.log(`upload failed. error: ${uploadStatus.error}`);
            break;
        case 'InProgress':
            console.log(`uploading... ${uploadStatus.progress}%`);
            break;
        default:
            console.log('不正なステータスです。');
    }
}
const inprogress = {
    type: 'InProgress',
    progress: 30
};
describeStatus(inprogress);
const success = {
    type: 'Success'
};
describeStatus(success);
const failure = {
    type: 'Failure',
    error: new Error('timeout.')
};
describeStatus(failure);
//# sourceMappingURL=discriminatedUnion.js.map