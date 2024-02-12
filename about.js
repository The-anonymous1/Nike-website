
    document.addEventListener('DOMContentLoaded', function() {
        
        var tween1 = KUTE.to('#blob1', { path: '#blob2' }, { repeat: 999, duration: 3000, yoyo: true });
        var tween2 = KUTE.to('#blob2', { path: '#blob3' }, { repeat: 999, duration: 3000, yoyo: true });
        var tween3 = KUTE.to('#blob3', { path: '#blob4' }, { repeat: 999, duration: 3000, yoyo: true });
        var tween4 = KUTE.to('#blob4', { path: '#blob1' }, { repeat: 999, duration: 3000, yoyo: true });
    
      
        tween1.start();
        tween2.start();
        tween3.start();
        tween4.start();
    });