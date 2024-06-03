
let urlList =[
['https://drive.google.com/thumbnail?id=1stq3uoD9tgmKfSSioj4sFh6uVVQruyc2&sz=w1000','https://drive.google.com/thumbnail?id=1Tvsx7dcrmRWyvnGqyFgne1BRxgDXjdIN&sz=w1000', 'https://drive.google.com/thumbnail?id=12KNMmYYfM9b6cnvXZKsIj1MqJZ8c8-ob&sz=w1000', 'https://drive.google.com/thumbnail?id=1AyDje0N3T2x0AGZZqGhLGCzwUNAcKqn4&sz=w1000', 'https://drive.google.com/thumbnail?id=1GImRiA5UcKw2C9QqONljRGMRgGL4LoqF&sz=w1000', 'https://drive.google.com/thumbnail?id=1VWV2KZRwKJYU1zMjtocA7hmlHAh_gYHD&sz=w1000','https://drive.google.com/thumbnail?id=1R1egJiXT930OLWfOdgcOWDnttu6bwxij&sz=w1000', 'https://drive.google.com/thumbnail?id=1JkHjLcUGKx6_yyhvH6ZkoJ_wQ38fTg0_&sz=w1000','https://drive.google.com/thumbnail?id=1rkwHJ5G7e6twepOGK9pmMMm-csL1b7Y-&sz=w1000', 'https://drive.google.com/thumbnail?id=1Cn8X0pUSJE2O_3jyIuKqsOpXJX4ceBv7&sz=w1000'],
['https://drive.google.com/thumbnail?id=1I2jsO_q-NaQF4b6VgmZdiG5nbhiTxGVC&sz=w1000', 'https://drive.google.com/thumbnail?id=19GWI0oPTe5CT0pHJEe1dZIkAisoUWUx7&sz=w1000', 'https://drive.google.com/thumbnail?id=1UdEY7dEs1aXr-mWK0QfUj4SwIrnmYVhq&sz=w1000','https://drive.google.com/thumbnail?id=1dtjGZ7JmfjWRCynsFvtMzxDEECkNNwff&sz=w1000','https://drive.google.com/thumbnail?id=1MimckjxzfjkxmDRmkttcjr7g3fkf0CIg&sz=w1000','https://drive.google.com/thumbnail?id=1iruvCZxXR3lVjE6LNOoMOxUhvzV7O7SF&sz=w1000',   'https://drive.google.com/thumbnail?id=1LbDVhev08pT4WICOzPfxQwU1BzJSVVxp&sz=w1000','https://drive.google.com/thumbnail?id=1-NZ0_55zgD12tlkYwdNA1N2NsN9sMZHD&sz=w1000',  'https://drive.google.com/thumbnail?id=1putUMMUOkkcnPj4ZHkpwS4Jcvw-xkIBq&sz=w1000', 'https://drive.google.com/thumbnail?id=1tx2xoP5JFpxBmEMFAoz_udWZxrOgY3uW&sz=w1000'],
['https://drive.google.com/thumbnail?id=1eYiF6aOOtF9-Aqfxb8I_zq3gkikC9gxa&sz=w1000','https://drive.google.com/thumbnail?id=1K6V0-yEEKYQ8KDo1VJdHtAYPJ7xK8V9q&sz=w1000','https://drive.google.com/thumbnail?id=1zPYvdrjk2SLTTDK0QT8rJ9xIhCvjdBz6&sz=w1000',  'https://drive.google.com/thumbnail?id=1ykcntUO9SWC9qR6K4HG6oAHHcqTBhTpc&sz=w1000','https://drive.google.com/thumbnail?id=1r8HsYfp_a4tsgdjtC7L5aEyfKYIexVhX&sz=w1000','https://drive.google.com/thumbnail?id=1Aek9aZPDFkAGsHZGvi8VMJG6zQ1NyPoK&sz=w1000', 'https://drive.google.com/thumbnail?id=1q4v9tNRngH6A0wxpnf_u4Hjv509_X1VC&sz=w1000',   'https://drive.google.com/thumbnail?id=1mOhORTyQXY-Jf4aJI1htMwWBrK6g_phA&sz=w1000','https://drive.google.com/thumbnail?id=1LbDVhev08pT4WICOzPfxQwU1BzJSVVxp&sz=w1000',],
];

let namelist=["GeneralphotoContainer","FilmphotoContainer","PortraitphotoContainer"];



for (i =0; i< urlList.length; i++ ){
        for(j =0; j<urlList[i].length; j++){


        var imgBt = document.createElement('button');
        (function(i, j) {
        imgBt.addEventListener("click", function() {
                /*var imgCont = document.createElement('button');
                var img1 = document.createElement('img');
                // Set the src attribute to the image URL
                img1.src = urlList[i][j];
                // Optionally set other attributes like alt, width, height, etc.
                img1.alt = 'Description of the image';
                img1.width= 600;
                imgCont.appendChild(img1)
                imgCont.addEventListener("click", function(){
                        console.log("eo");
                })
                var imageContainer = document.getElementById("floatingContainer");
                imageContainer.appendChild(imgCont);*/
                var newPageUrl = "display.html?image=" + encodeURIComponent(urlList[i][j]);
                window.location.href = newPageUrl;

            });
        })(i, j);
        imgBt.style.border="none";
        imgBt.style.background="none"; 
        var img = document.createElement('img');
            // Set the src attribute to the image URL
        img.src = urlList[i][j];
            // Optionally set other attributes like alt, width, height, etc.
        img.alt = 'Description of the image';
        img.width= 480;
        img.style.paddingRight = '0px';
        img.style.paddingLeft = '10px';

        imgBt.appendChild(img)
    
        var imageContainer = document.getElementById(namelist[i]);
    
 // Clear any existing content
        imageContainer.appendChild(imgBt);
}
}


