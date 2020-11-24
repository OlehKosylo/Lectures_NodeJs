module.exports = {
    PHOTO_MIMETYPES: ['image/gif', 'image/jpeg', 'image/pjpeg', 'image/png', 'image/webp'],
    DOC_MIMETYPES: [
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'application/vnd.ms-excel',
        'application/pdf'
    ],

    MAX_PHOTO_SIZE: 5 * 1024* 1024 , // 5MB
    MAX_DOC_SIZE: 10 * 1024* 1024 , // 10MB
}
