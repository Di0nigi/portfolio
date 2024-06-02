


var img = document.createElement('img');
            // Set the src attribute to the image URL
img.src = 'https://drive.google.com/thumbnail?id=1I2jsO_q-NaQF4b6VgmZdiG5nbhiTxGVC&sz=w1000';
            // Optionally set other attributes like alt, width, height, etc.
img.alt = 'Description of the image';
img.width= 540;


            // Append the img element to the imageContainer div
var imageContainer = document.getElementById('photoContainer');
 // Clear any existing content
imageContainer.appendChild(img);