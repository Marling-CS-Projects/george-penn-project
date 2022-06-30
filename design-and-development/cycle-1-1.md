# Cycle 2

## Design

### Objectives

Start development by creating the scene for the game's start menu.

* [x] Create two sprites; A platform sprite and a player sprite. (These will most likely be placeholders for development that i can improve on in the future)
* [x] Create a game scene with a visible level layout
* [x] Spawn in the player sprite into the level

### Usability Features

This scene will serve as the medium for the action of the game to take place.

### Key Variables

| Variable Name | Use                                                                                   |
| ------------- | ------------------------------------------------------------------------------------- |
| LoadSprite()  | Loads sprites from the Sprite folder so that they can be coded into the game.         |
| LEVELS = \[]  | Kaboom lets you draw a  layout using characters that you assign to different sprites. |

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

![1st test result](<../.gitbook/assets/Screenshot 2022-06-30 at 09.34.05.png>)

![2nd test result (success!)](<../.gitbook/assets/Screenshot 2022-06-30 at 09.33.01.png>)

### Tests

| Test | Instructions | What I expect                                                                                                                                 | What actually happens                                                                                                                                  | Pass/Fail |
| ---- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- |
| 1    | Run code     | Text should appear in the centre of the screen in a clear enough size, and the purple colour i have chosen. Background should also be purple. | Background and text are coloured as expected. Text appears but it is off in the corner of the screen which doesn't look right at all and needs fixing. | Fail      |
| 2    | Run code     | Same desired outcome of previous test. This time, the text should appear in the centre of the screen.                                         | Text appears in the correct size and position now and everything else is still working as expected.                                                    | Pass      |

### Evidence

![](<../.gitbook/assets/Screenshot 2022-06-30 at 09.37.20.png>)
