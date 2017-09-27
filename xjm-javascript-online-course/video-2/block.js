var Block = function (position) {
    var p = position
    var image = imageFromPath('block.png')
    var o = {
        image: image,
        x: p[0],
        y: p[1],
        w: 50,
        h: 20,
        alive: true,
        lifes: p[2] || 1,
    }

    o.kill = function() {
        o.lifes--
        if (!o.lifes) {
            o.alive = false
        }
    }

    o.collide = function(ball) {
        return o.alive && (rectIntersets(o, ball) || rectIntersets(ball, o))
    }

    return o
}