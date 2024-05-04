player.onChat("tower", function () {
    blocks.place(LAVA, pos(5, 20, 0))
    blocks.place(LAVA, pos(5, 135, 0))
    loops.pause(1000)
    blocks.place(WATER, pos(5, 135, 0))
})
