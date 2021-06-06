var Dr = [];

function setup() {
    noCanvas();
    Dr = [
      
        '../imagine/Pag 3/DJI_0015.jpg',
        '../imagine/Pag 3/DJI_0006.jpg',
        '../imagine/Pag 3/DJI_0076.jpg',
        '../imagine/Pag 3/DJI_0090.jpg',
        '../imagine/Pag 3/DJI_0109.jpg',
        '../imagine/Pag 3/DJI_0110.jpg',
        '../imagine/Pag 3/DJI_0114.jpg',
        '../imagine/Pag 3/DJI_0115.jpg',
        '../imagine/Pag 3/DJI_0116.jpg',
        '../imagine/Pag 3/DJI_0118.jpg',
        '../imagine/Pag 3/DJI_0119.jpg',
        '../imagine/Pag 3/DJI_0120.jpg',
        '../imagine/Pag 3/DJI_0121.jpg',
        '../imagine/Pag 3/DJI_0123.jpg',
        '../imagine/Pag 3/DJI_0124.jpg',
        '../imagine/Pag 3/DJI_0124.jpg',
        '../imagine/Pag 3/DJI_0125.jpg',
        '../imagine/Pag 3/DJI_0127.jpg',
        '../imagine/Pag 3/DJI_0128.jpg',
        '../imagine/Pag 3/DJI_0129.jpg',
        '../imagine/Pag 3/DJI_0130.jpg',
    ];
    for (let i = 0; i < Dr.length; i++) {
        let link = createA(Dr[i], '');
        link.attribute('data-lightbox', 'Dr');
        link.parent(document.getElementById('Drone'));
        let imm = createImg(Dr[i], '');
        if (i < 1) {
            imm.addClass('Dr');
       } else {
            imm.addClass('Dr');
        }
        imm.parent(link);
    }
   
}