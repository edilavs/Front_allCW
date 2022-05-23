let fileInput = document.getElementById('fileInput');

fileInput.addEventListener('change', function() {
    [...this.files].forEach(
        item => {
            if (fileInput.type.startsWith('image/')) {
                let reader = new FileReader();

                reader.onload = function() {
                    let image = document.createElement('img');

                    image.setAttribute('src', reader.result);

                    document.body.appendChild(image);

                };
                reader.readAsDataURL(item);
            }
        }
    )
})



let image = document.querySelector('.img-box');
image.addEventListener('click', function() {
    fileInput.click();
})