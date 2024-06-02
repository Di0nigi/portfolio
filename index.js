
let urlList =['https://drive.google.com/thumbnail?id=1I2jsO_q-NaQF4b6VgmZdiG5nbhiTxGVC&sz=w1000','https://drive.google.com/thumbnail?id=1I2jsO_q-NaQF4b6VgmZdiG5nbhiTxGVC&sz=w1000','https://drive.google.com/thumbnail?id=1I2jsO_q-NaQF4b6VgmZdiG5nbhiTxGVC&sz=w1000','https://drive.google.com/thumbnail?id=1I2jsO_q-NaQF4b6VgmZdiG5nbhiTxGVC&sz=w1000']


for (i =0; i< urlList.length; i++ ){

    var img = document.createElement('img');
            // Set the src attribute to the image URL
    img.src = urlList[i];
            // Optionally set other attributes like alt, width, height, etc.
    img.alt = 'Description of the image';
    img.width= 540;
    img.style.paddingRight = '0px';
    img.style.paddingLeft = '8px';
    
    var imageContainer = document.getElementById('FilmphotoContainer');
    
 // Clear any existing content
    imageContainer.appendChild(img);
}


