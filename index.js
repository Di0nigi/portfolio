
let urlList =[['https://drive.google.com/thumbnail?id=1I2jsO_q-NaQF4b6VgmZdiG5nbhiTxGVC&sz=w1000', 'https://drive.google.com/thumbnail?id=1iruvCZxXR3lVjE6LNOoMOxUhvzV7O7SF&sz=w1000', 'https://drive.google.com/thumbnail?id=1dtjGZ7JmfjWRCynsFvtMzxDEECkNNwff&sz=w1000', 'https://drive.google.com/thumbnail?id=1MimckjxzfjkxmDRmkttcjr7g3fkf0CIg&sz=w1000', 'https://drive.google.com/thumbnail?id=19GWI0oPTe5CT0pHJEe1dZIkAisoUWUx7&sz=w1000', 'https://drive.google.com/thumbnail?id=1UdEY7dEs1aXr-mWK0QfUj4SwIrnmYVhq&sz=w1000', 'https://drive.google.com/thumbnail?id=1LbDVhev08pT4WICOzPfxQwU1BzJSVVxp&sz=w1000', 'https://drive.google.com/thumbnail?id=1putUMMUOkkcnPj4ZHkpwS4Jcvw-xkIBq&sz=w1000', 'https://drive.google.com/thumbnail?id=1tx2xoP5JFpxBmEMFAoz_udWZxrOgY3uW&sz=w1000', 'https://drive.google.com/thumbnail?id=1-NZ0_55zgD12tlkYwdNA1N2NsN9sMZHD&sz=w1000'],
['https://drive.google.com/thumbnail?id=1K6V0-yEEKYQ8KDo1VJdHtAYPJ7xK8V9q&sz=w1000', 'https://drive.google.com/thumbnail?id=1eYiF6aOOtF9-Aqfxb8I_zq3gkikC9gxa&sz=w1000', 'https://drive.google.com/thumbnail?id=1ykcntUO9SWC9qR6K4HG6oAHHcqTBhTpc&sz=w1000', 'https://drive.google.com/thumbnail?id=1q4v9tNRngH6A0wxpnf_u4Hjv509_X1VC&sz=w1000', 'https://drive.google.com/thumbnail?id=1r8HsYfp_a4tsgdjtC7L5aEyfKYIexVhX&sz=w1000', 'https://drive.google.com/thumbnail?id=1zPYvdrjk2SLTTDK0QT8rJ9xIhCvjdBz6&sz=w1000', 'https://drive.google.com/thumbnail?id=1mOhORTyQXY-Jf4aJI1htMwWBrK6g_phA&sz=w1000', 'https://drive.google.com/thumbnail?id=1Aek9aZPDFkAGsHZGvi8VMJG6zQ1NyPoK&sz=w1000'],
[]];

let namelist=["FilmphotoContainer","PortraitphotoContainer"];



for (i =0; i< urlList.length; i++ ){
        for(j =0; j<urlList[i].length; j++){

    var img = document.createElement('img');
            // Set the src attribute to the image URL
    img.src = urlList[i][j];
            // Optionally set other attributes like alt, width, height, etc.
    img.alt = 'Description of the image';
    img.width= 480;
    img.style.paddingRight = '0px';
    img.style.paddingLeft = '10px';
    
    var imageContainer = document.getElementById(namelist[i]);
    
 // Clear any existing content
    imageContainer.appendChild(img);
}
}


