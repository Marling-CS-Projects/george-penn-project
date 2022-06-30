# Cycle 3

## Design

### Objectives

Start development by creating the scene for the game's start menu.

* [x] Create the basic working movement controls for the player (left, right, jump)

### Usability Features

These controls are at the core of any 2d game with platforms, and are the minimum required controls for a platform game to function.

### Key Variables

| Variable Name | Use                                                                                                                                                                           |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| OnKeyDown()   | Triggers during every frame that a key is pressed down. This is helpful for controls such as moving right or left, where the player is holding a key down.                    |
| OnKeyPress    | Triggers each time a key is pressed. This is better for controls that require a single key press to activate, such as a jump with a fixed height like as planned for my game. |

### Pseudocode

```
const LEVELS = [
  

        ========     ========        
                                  
                                  
                                  
    ==============================
 

const levelConf = {
  // grid size
  width: 64,
  height: 64,
  pos: vec2(0, 0),
  // define each object as a list of components
  
  Platform:
  "=":
    sprite("block"),
    area(),
    solid(),
    origin("bot"),
    "block",
  
  Player Sprite:
  "p":
    sprite("melon boy"),
    area(),
    body(),
    origin("bot"),
    "melon boy"
     
game scene:
//defines the layers of objects in the game
  layers([
    "bg",
    "game",
    "ui",
  ], "game");

  level = number of level player is on (in this game's case there is only one level)

  player = level spawn("p", (length along level)1, (height)10)
  
});

```

## Development

### Outcome

All objectives achieved 👍🏻

### Challenges

I ran into a lot of errors involving indentations and adding characters in certain spaces, such as colons, commas, different bracket types, etc. This would always cause the whole game to not work until fixed. Luckily, this means that i can always be sure that there are none of these mistakes, when the game actually does run.

It took a while for me to get my head around exactly how Kaboom's level drawing system worked. I also needed to precisely work out the dimensions of my level in order to work with the sprites i had made.

## Testing

Evidence for testing

![Game not working due to bracketing error in code](<../.gitbook/assets/Screenshot 2022-06-30 at 10.16.23.png>)

![Level layout visible](<../.gitbook/assets/Screenshot 2022-06-30 at 10.17.40.png>)

![Player spawned into level](<../.gitbook/assets/Screenshot 2022-06-30 at 10.18.09.png>)

### Tests

| Test | Instructions                                                     | What I expect                                                   | What actually happens                                                                                                             | Pass/Fail |
| ---- | ---------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------- |
| 1    | Run code and click enter on menu screen to get to the game scene | Level layout should appear as drawn out, using correct sprites. | Game doesn't work at all due to multiple issues with indentation and bracketing that urgently need fixing                         | Fail      |
| 2    | Run code and click enter on menu screen to get to the game scene | Level layout should appear as drawn out, using correct sprites. | Game works and level layout shows up exactly as drawn out in the code                                                             | Pass      |
| 3    | Run code and click enter on menu screen to get to the game scene | Level layout should appear as drawn out, using correct sprites. | Level layout is still working as expected, and sprite spawns in. It also doesn't fall through the platform which is a nice bonus. | Pass      |

### Evidence

![](<../.gitbook/assets/Screenshot 2022-06-30 at 10.27.30.png>)

![](<../.gitbook/assets/Screenshot 2022-06-30 at 10.27.20.png>)



### Other Notes

I feel that the player sprite is a little too small to focus on and its scale needs slight adjusting. I will work on this in the very near future.
