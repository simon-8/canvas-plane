// import './js/libs/weapp-adapter';

var canvas = wx.createCanvas(),
    context = canvas.getContext('2d'),
    mouseX = 0,
    mouseY = 0,
    planeFixedX = 0,
    planeFixedY = 0,
    canvasWidth,
    canvasHeight;

var init = function() {

};

// 绘制背景图片
var bgimage = wx.createImage();
bgimage.src = 'images/bg.jpg';

bgimage.onload = function() {
    var scaleW = canvas.width / this.width;
    var scaleH = canvas.height / this.height;
    bgimage.refresh();
};
bgimage.refresh = function() {
    var scaleW = canvas.width / this.width;
    var scaleH = canvas.height / this.height;
    context.drawImage(bgimage, 0, 0, this.width * scaleW, this.height * scaleH);
}

// 绘制飞机
var plane = wx.createImage();
plane.src = 'images/hero.png';
plane.width = 130;
plane.height = 100;
plane.onload = function() {
    planeFixedX = this.width/2;
    // planeFixedY = this.
    plane.refresh();
};
plane.refresh = function() {
    // if (x && y) {
    //     context.drawImage(plane, x - offsetX, y - offsetY, 130, 100);
    // } else {
        context.drawImage(plane, 0, 0);
    // }
};

// 显示子弹
var bullet = wx.createImage();
bullet.src = './images/bullet.png';
bullet.onload = function() {
    // bgimage.refresh();
    var step = canvas.height / 10;
    for (var i = 0; i < 10; i++) {
        if (mouseX && mouseY) {
            context.drawImage(bullet, mouseX, mouseY - offsetY, 20, 30);
        } else {
            context.drawImage(bullet, 0, 0, 20, 30);
        }
        // context.drawImage(bullet, 100, canvas.height - (i * step), 20, 30);
    }
    bgimage.refresh();
    
};
bullet.send = function() {
    var step = canvas.height / 10;
    for (var i = 0; i < 10; i++) {
        context.drawImage(bullet, mouseX - 35, mouseY - (i * step), 20, 30);
    }
    console.log(mouseX, width);
};

wx.onTouchMove(function (e) {
    mouseX = e.touches[0].pageX;
    mouseY = e.touches[0].pageY;
    bgimage.refresh();
    plane.refresh();
    // bullet.send();
});

