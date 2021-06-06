var Ve = [];
var Bb = [];
var Cl = [];
var St = [];
var Ps = [];
var Pr = [];
var En = [];
var Dt = [];
var Wd = [];
var Bw = [];
var Tl = [];
var Bs = [];

function setup() {
    noCanvas();
    Ve = [
        '../imagine/Pag 2/City/Venezia/DSC_0427.jpg',
        '../imagine/Pag 2/City/Venezia/DSC_0441.jpg',
        '../imagine/Pag 2/City/Venezia/DSC_0444.jpg',
        '../imagine/Pag 2/City/Venezia/DSC_0446.jpg'
    ];
    for (let i = 0; i < Ve.length; i++) {
        let link = createA(Ve[i], '');
        link.attribute('data-lightbox', 'Ve');
        link.parent(document.getElementById('Venezia'));
        let imm = createImg(Ve[i], '');
        if (i < 1) {
            imm.addClass('Ve1');
        } else {
            imm.addClass('Ve');
        }
        imm.parent(link);
    }
    Bb = [
        '../imagine/Pag 2/City/Bibione/DSC_0359.jpg',
        '../imagine/Pag 2/City/Bibione/DSC_0350.jpg',
        '../imagine/Pag 2/City/Bibione/DSC_0354.jpg',
        '../imagine/Pag 2/City/Bibione/DSC_0376.jpg'
    ];
    for (let i = 0; i < Bb.length; i++) {
        let link = createA(Bb[i], '');
        link.attribute('data-lightbox', 'Bb');
        link.parent(document.getElementById('Bibione'));
        let imm = createImg(Bb[i], '');
        if (i < 1) {
            imm.addClass('Bb1');
        } else {
            imm.addClass('Bb');
        }
        imm.parent(link);
    }
    Cl = [
        '../imagine/Pag 2/City/Caorle/DSC_0290.jpg',
        '../imagine/Pag 2/City/Caorle/DSC_0297.jpg',
        '../imagine/Pag 2/City/Caorle/DSC_0312.jpg'
    ];
    for (let i = 0; i < Cl.length; i++) {
        let link = createA(Cl[i], '');
        link.attribute('data-lightbox', 'Cl');
        link.parent(document.getElementById('Caorle'));
        let imm = createImg(Cl[i], '');
        if (i < 1) {
            imm.addClass('Cl1');
        } else {
            imm.addClass('Cl');
        }
        imm.parent(link);
    }
    St = [
        '../imagine/Pag 2/Sunset/DSC_0199.jpg',
        '../imagine/Pag 2/Sunset/DSC_0202.jpg',
        '../imagine/Pag 2/Sunset/DSC_0210.jpg',
        '../imagine/Pag 2/Sunset/DSC_0211.jpg',
        '../imagine/Pag 2/Sunset/DSC_0227.jpg',
        '../imagine/Pag 2/Sunset/DSC_0230.jpg',
        '../imagine/Pag 2/Sunset/DSC_0235.jpg',
        '../imagine/Pag 2/Sunset/DSC_0241.jpg',
        '../imagine/Pag 2/Sunset/DSC_0248.jpg'
    ];
    for (let i = 0; i < St.length; i++) {
        let link = createA(St[i], '');
        link.attribute('data-lightbox', 'St');
        link.parent(document.getElementById('Sunset'));
        let imm = createImg(St[i], '');
        if (i < 1) {
            imm.addClass('St1');
        } else {
            imm.addClass('St');
        }
        imm.parent(link);
    }
    Ps = [
        '../imagine/Pag 2/Animals/Pet/DSC_0037.JPG',
        '../imagine/Pag 2/Animals/Pet/DSC_0046.JPG',
        '../imagine/Pag 2/Animals/Pet/DSC_0570.JPG'
    ];
    for (let i = 0; i < Ps.length; i++) {
        let link = createA(Ps[i], '');
        link.attribute('data-lightbox', 'Ps');
        link.parent(document.getElementById('Pets'));
        let imm = createImg(Ps[i], '');
        if (i < 1) {
            imm.addClass('Ps1');
        } else {
            imm.addClass('Ps');
        }
        imm.parent(link);
    }
    Pr = [
        '../imagine/Pag 2/City/Portogruaro/DSC_0185.jpg',
        '../imagine/Pag 2/City/Portogruaro/DSC_0194.jpg',
        '../imagine/Pag 2/City/Portogruaro/DSC_0599.jpg',
        '../imagine/Pag 2/City/Portogruaro/DSC_0602.jpg',
        '../imagine/Pag 2/City/Portogruaro/DSC_0605.jpg',
        '../imagine/Pag 2/City/Portogruaro/DSC_0674.jpg',
        '../imagine/Pag 2/City/Portogruaro/DSC_0680.jpg',
        '../imagine/Pag 2/City/Portogruaro/DSC_0699.jpg'

    ];
    for (let i = 0; i < Pr.length; i++) {
        let link = createA(Pr[i], '');
        link.attribute('data-lightbox', 'Pr');
        link.parent(document.getElementById('Portogruaro'));
        let imm = createImg(Pr[i], '');
        if (i < 1) {
            imm.addClass('Pr1');
        } else {
            imm.addClass('Pr');
        }
        imm.parent(link);
    }
    En = [
        '../imagine/Pag 2/Enviroment/DSC_0492.jpg',
        '../imagine/Pag 2/Enviroment/DSC_0535.jpg',
        '../imagine/Pag 2/Enviroment/DSC_0537.jpg',
        '../imagine/Pag 2/Enviroment/DSC_0543.jpg',
        '../imagine/Pag 2/Enviroment/DSC_0592.jpg',
        '../imagine/Pag 2/Enviroment/DSC_0597.jpg'
    ];
    for (let i = 0; i < En.length; i++) {
        let link = createA(En[i], '');
        link.attribute('data-lightbox', 'En');
        link.parent(document.getElementById('Enviroment'));
        let imm = createImg(En[i], '');
        if (i < 1) {
            imm.addClass('En1');
        } else {
            imm.addClass('En');
        }
        imm.parent(link);
    }
    Dt = [
        '../imagine/Pag 2/Details/DSC_0449.jpg',
        '../imagine/Pag 2/Details/DSC_0207.jpg',
        '../imagine/Pag 2/Details/DSC_0208.jpg',
        '../imagine/Pag 2/Details/DSC_0209.jpg',
        '../imagine/Pag 2/Details/DSC_0453.jpg',
        '../imagine/Pag 2/Details/DSC_0455.jpg',
        '../imagine/Pag 2/Details/DSC_0490.jpg',
        '../imagine/Pag 2/Details/DSC_0577.jpg',
        '../imagine/Pag 2/Details/DSC_0586.jpg'
    ];
    for (let i = 0; i < Dt.length; i++) {
        let link = createA(Dt[i], '');
        link.attribute('data-lightbox', 'Dt');
        link.parent(document.getElementById('Details'));
        let imm = createImg(Dt[i], '');
        if (i < 1) {
            imm.addClass('Dt1');
        } else {
            imm.addClass('Dt');
        }
        imm.parent(link);
    }
    Wd = [
        '../imagine/Pag 2/Animals/wild/DSC_0148.jpg',
        '../imagine/Pag 2/Animals/wild/DSC_0150.jpg',
        '../imagine/Pag 2/Animals/wild/DSC_0311.jpg',
        '../imagine/Pag 2/Animals/wild/DSC_0526.jpg',
        '../imagine/Pag 2/Animals/wild/DSC_0530.jpg',
        '../imagine/Pag 2/Animals/wild/DSC_0531.jpg',
        '../imagine/Pag 2/Animals/wild/DSC_0579.jpg',
        '../imagine/Pag 2/Animals/wild/DSC_0583.jpg',
        '../imagine/Pag 2/Animals/wild/DSC_0695.jpg'
    ];
    for (let i = 0; i < Wd.length; i++) {
        let link = createA(Wd[i], '');
        link.attribute('data-lightbox', 'Wd');
        link.parent(document.getElementById('Wild'));
        let imm = createImg(Wd[i], '');
        if (i < 1) {
            imm.addClass('Wd1');
        } else {
            imm.addClass('Wd');
        }
        imm.parent(link);
    }
    Bw = [
        '../imagine/Pag 2/BlackandWhite/DSC_0575.jpg',
        '../imagine/Pag 2/BlackandWhite/DSC_0575.jpg'
    ];
    for (let i = 0; i < Bw.length; i++) {
        let link = createA(Bw[i], '');
        link.attribute('data-lightbox', 'Bw');
        link.parent(document.getElementById('BlackandWhite'));
        let imm = createImg(Bw[i], '');
        if (i < 1) {
            imm.addClass('Bw1');
        } else {
            imm.addClass('Bw');
        }
        imm.parent(link);
    }
    Tl = [
        '../imagine/Pag 2/The light/DSC_0609.jpg',
    ];
    for (let i = 0; i < Tl.length; i++) {
        let link = createA(Tl[i], '');
        link.attribute('data-lightbox', 'Tl');
        link.parent(document.getElementById('Thelight'));
        let imm = createImg(Tl[i], '');
        if (i < 1) {
            imm.addClass('Tl1');
        } else {
            imm.addClass('Tl');
        }
        imm.parent(link);
    }

    Bs = [
        '../imagine/Pag 2/City/Barcis/DSC_0869.jpg',
        '../imagine/Pag 2/City/Barcis/DSC_0870.jpg',
        '../imagine/Pag 2/City/Barcis/DSC_0871.jpg',
        '../imagine/Pag 2/City/Barcis/DSC_0872.jpg',
        '../imagine/Pag 2/City/Barcis/DSC_0873.jpg',
        '../imagine/Pag 2/City/Barcis/DSC_0874.jpg',
        '../imagine/Pag 2/City/Barcis/DSC_0875.jpg',
        '../imagine/Pag 2/City/Barcis/DSC_0876.jpg',
        '../imagine/Pag 2/City/Barcis/DSC_0877.jpg',
        '../imagine/Pag 2/City/Barcis/DSC_0878.jpg'
    ];
    for (let i = 0; i < Bs.length; i++) {
        let link = createA(Bs[i], '');
        link.attribute('data-lightbox', 'Bs');
        link.parent(document.getElementById('Barcis'));
        let imm = createImg(Bs[i], '');
        if (i < 1) {
            imm.addClass('Bs1');
        } else {
            imm.addClass('Bs');
        }
        imm.parent(link);
    }


}