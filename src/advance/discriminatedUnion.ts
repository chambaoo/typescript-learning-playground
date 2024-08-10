// -------------------------------
// tagged Union
// -------------------------------
// 使える型は、リテラル型, null, undefined

type InProgress = { type: 'InProgress'; progress: number };
type Success = { type: 'Success' };
type Failure = { type: 'Failure'; error: Error };

type UploadStatus = InProgress | Success | Failure;

function describeStatus(uploadStatus: UploadStatus) {
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

const inprogress: InProgress = {
    type: 'InProgress',
    progress: 30
}

describeStatus(inprogress);


const success: Success = {
    type: 'Success'
}

describeStatus(success);


const failure: Failure = {
    type: 'Failure',
    error: new Error('timeout.')
}

describeStatus(failure);

