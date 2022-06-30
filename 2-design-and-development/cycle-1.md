# 2.2.1 Cycle 1

## Design

### Objectives

Start development by creating the scene for the game's start menu.

* [x] Load Kaboom
* [x] Create a background
* [x] Create a scene

### Usability Features

This scene will serve as the first menu the player sees when starting up the game.&#x20;

### Key Variables

| Variable Name | Use                                                                                                                                                                                                                                                                                                |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| scene()       | The 'scene' functions as defining different fundamental parts of the game, which separates code for certain parts. For example, the start screen for my game has scene("start"). A helpful benefit of this is being able to bind buttons to different functions depending on the area of the game. |

### Pseudocode

```
kaboom(
  background: R, G, B
  width: 1920
  height: 1024
  scale: 2,
  stretches to fit screen size: true
  border lines: true
)

scene("start")
//This adds the text.
  add(
    text("PRESS ENTER TO START" size(96)
    position on screen:(X 970,Y 540)),
    origin("center")
    color(R 200,G 0, B 255),
  ]);
//This makes the scene change to the game scene when the enter key is pressed.
  onKeyRelease("enter"):
   //Takes the player to the scene where the game is actually played.
    go("game");
  })
}),

go("start")
```

## Development

### Outcome

### Challenges

Working out the size of the screen and game i wanted was difficult, especially when taking into consideration the fact that it would need to work corresponding to the size of my sprites.

## Testing

Evidence for testing

### Tests

| Test | Instructions | What I expect                                                                                                                                 | What actually happens                                                                                                                                  | Pass/Fail |
| ---- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- |
| 1    | Run code     | Text should appear in the centre of the screen in a clear enough size, and the purple colour i have chosen. Background should also be purple. | Background and text are coloured as expected. Text appears but it is off in the corner of the screen which doesn't look right at all and needs fixing. | Fail      |
| 2    | Run code     | Same desired outcome of previous test. This time, the text should appear in the centre of the screen.                                         | Text appears in the correct size and position now and everything else is still working as expected.                                                    | Pass      |

### Evidence
