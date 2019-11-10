Quill.register("modules/imageCompressor", imageCompressor);
        const toolbarOption = [
            ['bold', 'italic'],
            ['link', 'image'],
            [{ 'header': [1, 2, 3, 4, false] }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            // [{ size: ['small', false, 'large', 'huge'] }],
            // ['blockquote', 'code-block'],
            // [{ 'script': 'sub' }, { 'script': 'super' }],
            // [{ 'indent': '-1' }, { 'indent': '+1' }],
            // [{ 'direction': 'rtl' }],
            // [{ 'color': [] }, { 'background': [] }],
            // [{ 'font': [] }],
            // [{ 'align': [] }],
            // //    [ 'undo','redo'],
            // ['clean']
        ];

        console.log('Demo loaded...')

        var quill = new Quill('#editor', {

            theme: "snow",
            modules: {
                toolbar: toolbarOption,
                imageCompressor: {
                    quality: 0.7,
                    maxWidth: 1000,
                    imageType: 'image/jpeg',
                    //debug: true,
                }
                //magicUrl: true
            }
        });