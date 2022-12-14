# Cycle 9

## Design

### Objectives

* [x] Create a double jump function to give the player more movement options against the many obstacles.
* [x] Add 2 new item blocks: One that boosts the player's score, and one that serves as a powerup that heightens the player's abilities.&#x20;
* [x] Add a highscore feature that displays at the end of each round.

### NOTE:

Being finished creating the most basic finished version of the game, I wanted to add some more elements to the game that add some more depth and fun to the game.

### Usability Features

Being able to double jump will make the player more capable of dodging obstacles and will increase the skill cap of the game. The new items will give the player more scoring opportunities and add more variation to the game.



### Key Variables

| Variable Name | Use                                                                                                                                                                                                                   |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| dub           | Allows the player to jump in mid-air when true. Changes to false after a double jump is performed. Changes to true when the player touches a floor. This prevents the player from having more than 2 jumps at a time. |
| ready         | Sets to true when a round starts and sets to false when a round ends. This is used for starting timers for spawning items.                                                                                            |
| speedytime    | Activates the functions of the speed block powerup and also begins a timer that deactivates the powerup when the timer ends.                                                                                          |

### Pseudocode

```
when UP key pressed:
  if player is grounded:
     jump
  if player is in air AND dub is true:
  jump
  set dub to false

when player hits ground:
set dub to true
  
add text ("HIGHSCORE:" + player's highscore 
    

when ready is true:
wait 10
spawn score
wait(5, spawn score)

when ready is true:
wait 20
spawn score
wait(5, spawn score)

   
when player hits score box:
Multiply score by 1.1
destroy score box
 
when player hits speed box:
set speedytime to true
destory speed box
 

  
when speedytime becomes true:
activate speed boost and enemy spawn reduction
start timer
when timer ends:
set speedytime to false
 

```

## Development

### Outcome

* Score boxes spawn occasionally and give the player a score boost that multiplies their current score by 1.1. This is important because it means that each scoring box collected is exponentially more valuable than the last, which gives the player reason to collect every single one.
* Speed boxes serve as a power-up that temporarily makes dodging attacks much easier by lowering obstacle spawn rate and boosting player speed.
* Player can now double jump.
* Highscore function works and is displayed on the death screen.





### Challenges

Unfortunately, the high score does not save across game start-ups and is reset when closing the game. This was not an issue I was able to resolve. Deciding the exact effect of the score box was difficult to do, needing to get it to a spot that wasnt obselete or overpowered.&#x20;



## Testing



### Tests

| Test | Instructions                                                                                          | What I expect                                                                    | What actually happens                                         | Pass/Fail |
| ---- | ----------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | ------------------------------------------------------------- | --------- |
| 1    | Enter game and try to double jump. Try to jump more than twice at one time.                           | Player sprite should be able to jump twice, but never more than twice at a time. | All expected functions happened properly.                     | Pass      |
| 2    | Get a score, then get a higher score, then get a lower score. Check for HIGHSCORE changes each round. | Highscore should change ach time a new highest score is reached.                 | Highscore functions properly.                                 | Pass      |
| 3    | Collect several scoreboxes and watch the score.                                                       | Score should increase by exponential amounts with each score box.                | Score increases by the correct amount with each box collected | Pass      |
| 4    | Collect a speedbox and view results                                                                   | Player should recieve speedboost and decreased obstacle spawn rate               | Powerup works correctly                                       | Pass      |

### Evidence

```
loadRoot("sounds/");
loadSound("menumusic", "menu.mp3");

loadSound("mainmusic", "MUSIC!.mp3");
loadSound("jumper", "jumper.mp3");
loadSound("bosshit", "bosshit.mp3");
loadSound("end", "end2.mp3");
loadSound("gamestart", "gamestart.mp3");
loadSound("healing", "healing.mp3");
loadSound("hurt", "hurt.mp3");
loadSound("hurt2", "hurt2.mp3");
loadSound("respawn", "respawn.mp3");
loadSound("rising", "rising.mp3");
loadSound("speedit", "speedit.mp3");
loadSound("hardmode", "freebird.mp3");


const menmusic = play("menumusic", {
    volume: 0.7,
    loop: true
}) 

const music = play("mainmusic", {
    volume: 0.7,
    loop: true
}) 

const hardmusic = play("hardmode", {
    volume: 1.2,
    loop: true
    
}) 

let highscore = 0

let bird = 1

let hmscore = 0

let hm = 0

let epic = false

scene("start", () => {
//This adds the text.
  music.stop()
  hardmusic.stop()

  add([
    text("MELON FLATLINER 2077", { size: 15 }),
    pos(vec2(160, 15)),
    origin("center"),
    color(0, 255, 0),
  ]);
  add([
    text("PRESS ENTER TO START!", { size: 24 }),
    pos(vec2(160, 80)),
    origin("center"),
    color(200, 0, 255),
   
  ]);
  add([
    text("H FOR HARD MODE", { size: 15 }),
    pos(vec2(160, 100)),
    origin("center"),
    color(200, 0, 255),
   
  ]);

   add([
    text("PRESS SHIFT FOR INFO SCREEN", { size: 10 }),
    pos(vec2(160, 230)),
    origin("center"),
    color(200, 0, 255),
   
  ])


```

### Other Notes

