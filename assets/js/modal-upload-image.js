  // Image preview functionality
  function previewImage(input, previewId) {
    var preview = document.getElementById(previewId);
    var file = input.files[0];
    var reader = new FileReader();

    reader.onloadend = function() {
        preview.src = reader.result;
    }

    if (file) {
        reader.readAsDataURL(file);
    } else {
        preview.src = "";
    }
}

document.getElementById("fileInput1").addEventListener("change", function() {
    previewImage(this, "preview1");
});

document.getElementById("fileInput2").addEventListener("change", function() {
    previewImage(this, "preview2");
});