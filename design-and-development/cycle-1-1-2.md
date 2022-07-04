# Cycle 4

## Design

### Objectives

* [x] Change the sizes and scales of different aspects of the current games. Im not happy with the current feel of the game as the player sprite is too small, and the jump height is not great enough for the player to reach the platforms. I may also alter the layout of the level by adding more platforms.

### Usability Features

This will make the game feel more smooth and interactive with the platforms and will make the player more comfortable using the platforms and movement to dodge enemy attacks.

### Key Variables

| Variable Name                | Use                                                                                                        |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------- |
| pos(vec2())                  | Decides the position of something on screen by using the XY coordinates. Useful for adding on-screen text. |
| grid size (width and height) | Decides the size of each space in the grid. It's important to create sprites with the grid size in mind.   |

### Pseudocode

```
const levelConf = {
  grid space width: 16
  grid space height: 16
  grid starting postion: X0, Y0
```

## Development

### Outcome

Objective met and level layout altered.



### Challenges

There was quite a bit of maths involved with the process of resizing everything. I decided that changing the grid space to 16x16 might suit the game better, and for that to happen i first had to resize the platform and player sprite in Photoshop, which included having to redraw them, as Photoshop doesn't like when you try to shrink pixel art.&#x20;

## Testing



![](<../.gitbook/assets/Screenshot 2022-07-01 at 10.42.44.png>)

### Tests

| Test | Instructions | What I expect | What actually happens | Pass/Fail |
| ---- | ------------ | ------------- | --------------------- | --------- |
| 1    |              |               |                       |           |
| 2    |              |               |                       |           |

### Evidence

```
```

### Other Notes

