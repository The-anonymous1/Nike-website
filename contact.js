document.addEventListener('DOMContentLoaded', function() {
        
    var tween1 = KUTE.to('#blob2', { path: '#blob1' }, { repeat: 999, duration: 5000, yoyo: true });
    var tween2 = KUTE.to('#blob3', { path: '#blob2' }, { repeat: 999, duration: 5000, yoyo: true });
    var tween3 = KUTE.to('#blob4', { path: '#blob3' }, { repeat: 999, duration: 5000, yoyo: true });
    var tween4 = KUTE.to('#blob5', { path: '#blob4' }, { repeat: 999, duration: 5000, yoyo: true });
    var tween5 = KUTE.to('#blob6', { path: '#blob5' }, { repeat: 999, duration: 5000, yoyo: true });
    var tween6 = KUTE.to('#blob7', { path: '#blob6' }, { repeat: 999, duration: 5000, yoyo: true });
    var tween7 = KUTE.to('#blob8', { path: '#blob7' }, { repeat: 999, duration: 5000, yoyo: true });
    var tween8 = KUTE.to('#blob9', { path: '#blob8' }, { repeat: 999, duration: 5000, yoyo: true });
    var tween9 = KUTE.to('#blob10', { path: '#blob9' }, { repeat: 999, duration: 5000, yoyo: true });
    var tween10 = KUTE.to('#blob11', { path: '#blob10' }, { repeat: 999, duration: 5000, yoyo: true });
    var tween11 = KUTE.to('#blob12', { path: '#blob11' }, { repeat: 999, duration: 5000, yoyo: true });
    var tween12 = KUTE.to('#blob1', { path: '#blob12' }, { repeat: 999, duration: 5000, yoyo: true });

  
    tween1.start();
    tween2.start();
    tween3.start();
    tween4.start();
    tween5.start();
    tween6.start();
    tween7.start();
    tween8.start();
    tween9.start();
    tween10.start();
    tween11.start();
    tween12.start();
});