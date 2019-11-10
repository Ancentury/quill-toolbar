var toolbarOption = [
    ['bold', 'italic'],
    ['link', 'image'],
    [{ 'header': [1, 2, 3, 4, false] }],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    [{ size: ['small', false, 'large', 'huge'] }],
    ['blockquote', 'code-block'],
    [{ 'script': 'sub' }, { 'script': 'super' }],
    [{ 'indent': '-1' }, { 'indent': '+1' }],
    [{ 'direction': 'rtl' }],
    [{ 'color': [] }, { 'background': [] }],
    [{ 'font': [] }],
    [{ 'align': [] }],
    //    [ 'undo','redo'],
    ['clean']
];

Quill.register("modules/imageCompressor", imageCompressor);

var quill = new Quill('#editor', {
    modules: {
        toolbar: toolbarOption,
        imageCompress: {
            quality: 0.7,
            maxWidth: 100,
            imageType: 'image/jpeg',
            debug: true,
        },
        magicUrl:true
    },
    theme: 'snow'
});