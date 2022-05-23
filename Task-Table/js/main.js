let fileInput = document.querySelector('#fileInput');

fileInput.addEventListener('change', function() {
    [...this.files].forEach(file => {
        if (file.type.startsWith('image/')) {
            let fReader = new FileReader();

            fReader.onload = function() {
                let image = document.createElement('img');
                image.setAttribute('src', fReader.result);
                document.body.appendChild(image);
            }
            fReader.readAsDataURL(file);
        }

    })
})


let imgBox = document.querySelector('.img-box')

imgBox.addEventListener('click', function(e) {
    fileInput.click();
})






let removeAll = document.querySelector('.remove');
removeAll.addEventListener('click', function() {
    removeAll.nextElementSibling.remove();
})