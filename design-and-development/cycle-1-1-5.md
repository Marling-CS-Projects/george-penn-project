# Cycle 6

## Design

### Objectives

* [x] Add a 'HEALTH' variable that ends the round upon reaching zero. (Must have an on-screen counter).
* [x] Add a 'SCORE' variable that increases over time and stops increasing when the game ends. (Must have an on-screen counter).
* [x] Implement 'invincibility frames' that stop the player from taking more than 1 health point of damage at a time.

### NOTE:

At this point during the game-creating process, I decided that the original plan for my game was perhaps too complex to be feasible to complete. I slightly changed the idea of my game to one in which the boss is invincible, and the goal is to achieve the highest score possible by surviving for as long as possible.&#x20;

### Usability Features

Health and score will be arguably the two most important variables for the player's experience. These two variables go hand in hand to provide the player's main objective: to survive and score big.



### Key Variables

| Variable Name | Use                                                                                                                                                |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| health        | Starts at 3 and decreases by 1 each time the player takes damage. Reaching 0 causes the player to 'die' and the game ends.                         |
| score         | starts at zero and increases over time. Resets for each new game.                                                                                  |
| died          | A true or false variable that determines wether the player is currently dead or not. This helps with ending a round and going to the death screen. |

### Pseudocode

<pre><code><strong>
</strong><strong>let health = 3
</strong><strong>
</strong><strong>let healthtext = 
</strong><strong>"HEALTH:" + health
</strong>
when player collides with boss:
  if player isnt invincible:
    lose 1 health
    invincible = true
  }  

if invincible is true
        iframes constantly increase from 0
      when iframes reaches 100 {
         invincible = false
          iframes go back down to 0

let score = 0

upon start, 
let score = 0
score constantly increases from 0
on death:
  score stops increasing
  
          

  

</code></pre>

## Development

### Outcome

* Working health mechanic that causes 'death' when health reaches zero.
* Working score mechanic
* Invincibility frames correctly prevent damage from being taken when active,



### Challenges

The main challenge of this development cycle was getting the iframes to work and last long enough, with the animation I made for the iframes working correctly. A lot of the time, the animation would either last forever, get stuck, or not trigger at all.



## Testing



### Tests

| Test | Instructions                                                                                        | What I expect                                                                                                                                                                                 | What actually happens                                                                                                                                                                       | Pass/Fail |
| ---- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| 1    | Run into the boss and check for decrease in health. Reach 0 health and check if death screen works. | Player health should decrease by 1 and no more at once due to protection from invincibilty frames. Invincibiltiy animation should also play. Death screen should show up on 0 health reached. | Player health decreases by 1 and does not increase further during the invincibility time which is correctly shown by the animation. Player is sent to death screen when 0 health is reached | Pass      |
| 2    | Start game and check for increase in score. Die, restart and check for reset in score.              | Score should start increasing at game start, pause at game end and reset at next game start.                                                                                                  | Score increases, stops and resets appropriately.                                                                                                                                            | Pass      |

### Evidence

```
let health = 3;

let died = false;

let invincible = false;

let iframes = 0;


//This creates the scene for the start menu.
scene("start", () => {
//This adds the text.
  add([
    text("PRESS ENTER TO START!", { size: 24 }),
    pos(vec2(160, 120)),
    origin("center"),
    color(200, 0, 255),
  ]);

  if (died == true) {
      add([
    text("KNOCKED OUT. KEEP GOING.", { size: 18 }),
    pos(vec2(160, 40)),
    origin("center"),
    color(255, 0, 0),

  ]);
  }
//This makes the scene change to the game scene when the enter key is pressed.
  onKeyRelease("enter", () => {
    go("game");
  })
}),

go("start"),

player.onCollide("boss", (boss) => {
  if (invincible == false) {
    health -= 1
    invincible = true
  }
  else{
    return;
  };
  });
 

  onUpdate(() => {
    if (invincible == true) {
        iframes += 1
      if (iframes == 100) {
         invincible = false
          iframes = 0
      }
    }
  })

let healthtext = add([
  text(("HEALTH:" + health), { size: 24 }),
  pos(vec2(160, 120)),
  origin("center"),
  color(200, 0, 255),
]);
  
   
 onUpdate(() => {
	healthtext.text = ("HEALTH:" + health);
  readd(healthtext);
})

let score = 0

	const scoreLabel = add([
		text(("SCORE" + score), { size: 19 }),
		pos(vec2(70, 232)),
    origin("center"),
    color(200, 0, 255),
  ]);
	

	// increment score every frame
	onUpdate(() => {
		score++
		scoreLabel.text = ("SCORE:" + score)
	})

onUpdate(() => {
 if (health == 0) {
   died = true
   go("start")
}
})})

```

### Other Notes

The onUpdate() function was very useful during this dev cycle. Having the ability to run a check every frame allows things to happen at an exact point without a specific time frame.
