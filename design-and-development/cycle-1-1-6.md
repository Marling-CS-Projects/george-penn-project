# Cycle 8

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

```javascript
onKeyPress("up", () => {
  if (player.isGrounded()) {
    player.jump(450);
  }
  else {
    if (dub == true) {
      player.jump(450)
      dub = false
    }
    else{
      return
    }
  }
  
});		
		
 add([
    text(("HIGHSCORE:" + highscore), { size: 25 }),
    pos(vec2(160, 200)),
    origin("center"),
    color(255, 0, 0),
    ])
    
function spawnScore() {

		// add tree obj
	add([
		rect(20, 20),
		area(),
		pos(rand(0,255), 0),
		origin("botleft"),
		color(0, 180, 255),
		move(DOWN, SPEED5),
    layer("game"),
		cleanup(),
		"scorebox",
     
		

		// wait a random amount of time to spawn next tree
		wait( (10), spawnScore)

	]);}

	// start spawning trees
	if (ready == true) {
    wait(5, spawnScore)
  }

   function spawnSpeed() {

		// add tree obj
	add([
		rect(20, 20),
		area(),
		pos(rand(0,255), 0),
		origin("botleft"),
		color(255, 255, 0),
		move(DOWN, SPEED5),
    layer("game"),
		cleanup(),
		"speedbox",
     
		

		// wait a random amount of time to spawn next tree
		wait( rand((30 / bird) , (40 / bird)), spawnSpeed)

	]);}

	// start spawning trees
	if (ready == true) {
    wait(20 / bird, spawnSpeed)
  }
  
   player.onCollide("scorebox", (scorebox) => {
    score = (score * 1.1)
    score = Math.floor(score)
    play("speedit", {
      volume:1.2
    })
    destroy(scorebox)
 
  });

  player.onCollide("speedbox", (speedbox) => {
    play("rising", {
      volume:1.8
    })
    speedytime = true
    destroy(speedbox)
    
 
  });
  
  onUpdate(() => {
    if (speedytime == true) {
        speder = 3
        sframes += 1
        SPEED = 300
        spedo = true
      if (sframes == 600 / bird) {
         speder = 0
         SPEED = 200
         speedytime = false
         sframes = 0
        spedo = false
      }
    }
  
  })
  onUpdate(() => {
    if (player.isGrounded()) {
      dub = true
    }
  })

   


```

### Other Notes

The speed powerup enemy spawn rate reduction works by changing a number variable that is always added onto the timer for enemy spawn rates. By default it is zero but it is temporarily changed to a positive number when the powerup is active.
