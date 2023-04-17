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

```javascript
//this loads in the sprites needed
loadRoot("sprites/");
loadSprite("melon boy", "melon boy.png");
loadSprite("block", "block.png");

const LEVELS = [
  [
    "                              ",
    "                              ",
    "                              ", 
    "                              ",
    "                              ",
    "                              ",
    "                              ",
    "                              ",
    "                              ",
    "                              ",
    "                              ",
    "                              ",
    "     ========     ========    ",    
    "                              ",
    "                              ",
    "                              ",
    "==============================",
  ]
];

const levelConf = {
  // grid size
  width: 64,
  height: 64,
  pos: vec2(0, 0),
  // define each object as a list of components
  "=": () => [
    sprite("block"),
    area(),
    solid(),
    origin("bot"),
    "block",
  ],
  "p": () => [
    sprite("melon boy"),
    area(),
    body(),
    origin("bot"),
    "player"

  ]
};




//game scene
scene("game", (levelNumber = 0) => {
//defines the layers of objects in the game
  layers([
    "bg",
    "game",
    "ui",
  ], "game");

  const level = addLevel(LEVELS[levelNumber], levelConf);

  const player = level.spawn("p", 1, 10)

  const SPEED = 800;
```

### Other Notes

I feel that the player sprite is a little too small to focus on and its scale needs slight adjusting. I will work on this in the very near future.
