let saturate = document.getElementById("saturate");
let contrast = document.getElementById("contrast");
let brightness = document.getElementById("brightness");
let sepia = document.getElementById("sepia");
let grayscale = document.getElementById("grayscale");
let blur = document.getElementById("blur");
let hueRotate = document.getElementById("hue-rotate");

let upload = document.getElementById("upload");
let download = document.getElementById("download");
let img = document.getElementById("img");

let reset = document.querySelector('span');
let imgBox = document.querySelector('.img-box');

//لمن اظبط صورة واجيب صورة جديدة لا تظهر لي بفلاتر الصورة السابقة + كل الفلاتر ترجع لي الديفولت فاليو الاصلية
function resetValue(){
    img.style.filter = 'none';
    saturate.value = '100';
    contrast.value = '100';
    brightness.value = '100';
    sepia.value = '0';
    grayscale.value = '0';
    blur.value = '0';
    hueRotate.value = '0';
}


window.onload = function (){
    download.style.display = 'none'; //hidde for button download
    reset.style.display = 'none';    //hidde for button reset
    imgBox.style.display = 'none';   //hidde for button imgbox
}
// عايز لمن اضغط ع زر اب لوود واختر صورة يتم رفعها
upload.onchange = function(){
    resetValue();
    download.style.display = 'block'; //show for button download
    reset.style.display = 'block';    //show for button reset
    imgBox.style.display = 'block';   //show for button imgbox
    let file = new FileReader();      // عبارة عن كلاس يقرأ الملفات
    file.readAsDataURL(upload.files[0]); //لمن ترفع ملف الملف ده بتحط في المصفوفة الاسمو فايل الاندكس صفر
    file.onload = function(){
        img.src = file.result;   //بعد ما اتاكدت انو الملف اتحمل او الصوره
    }
}

let filters = document.querySelectorAll("ul li input");
filters.forEach( filter =>{
    filter.addEventListener('input', function(){
        img.style.filter = `
            saturate(${saturate.value}%)
            contrast(${contrast.value}%) 
            brightness(${brightness.value}%)  
            sepia(${sepia.value}%)
            grayscale(${grayscale.value})
            blur(${blur.value}px)
            hue-rotate(${hueRotate.value}deg)
        `
    })
})

// button download
download.onclick = function(){
    download.href = img.src;
}