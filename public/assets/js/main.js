$(document).ready(function () {
    // HomeSlider();
})

// function HomeSlider() {
//     $("#HomeSlider").owlCarousel({
//         navigation: true,
//         items: 1,
//         slideSpeed: 1000,
//         loop: true,
//         autoplay: true,
//         nav: false,
//         dots: false,
//         responsiveClass: true,
//         responsive: {
//             0: {
//                 items: 1,
//             },
//             600: {
//                 items: 1,
//             },
//             1000: {
//                 items: 1,
//             },
//         },
//     });
// }

function downloadDocument(filename, textInput) {
    var element = document.createElement("a");
    element.setAttribute("href", textInput);
    element.setAttribute("target", "_blank");
    element.setAttribute("download", filename);
    document.body.appendChild(element);
    element.click();
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function uploadFile(fileId,returnFileId) {
    if (fileId) {
    var file = document.getElementById(fileId);
    var img = file.files;

    var filename = "";
    var filenames = [];
    for (var i = 0; i < img.length; i++) {
        var guid = CreateGuid();
        var fileExtension = img[i].name.split('.').pop();

        var guidName = guid + "." + fileExtension;
        filenames.push(guidName);

        filename += media_URL + "/Documents/" + guidName;
        if (i < img.length-1) {
            filename += " || ";
        }
    }

    for (var i = 0; i < img.length; i++) {
        var formData = new FormData();
        formData.append('file', img[i]);
        formData.append('filename', filenames[i]);

        var ajax_url = '/Awards/SaveFile';
        $.ajax({
            type: 'POST',
            url: ajax_url,
            data: formData,
            processData: false,
            contentType: false,
            success: function (data) {

            }
        });
    }

        $("#" + returnFileId).val(filename);
    }
}


function CreateGuid() {
    function _p8(s) {
        var p = (Math.random().toString(16) + "000000000").substr(2, 8);
        return s ? "-" + p.substr(0, 4) + "-" + p.substr(4, 4) : p;
    }
    return _p8() + _p8(true) + _p8(true) + _p8();
}