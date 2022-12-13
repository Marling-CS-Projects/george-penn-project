# Cycle 7

## Design

### Objectives

* [x] Add moving obstacles to work alongside the boss to complete the element of danger to the game.&#x20;
* [x] Add an item that can increase the player's health
* [x] Fix the issues with boss collision by making the boss despawn and come back after a few seconds. Also, increase the danger of the boss by making it able to deal more damage and ignore invincibility frames.
* [x] Implement a screen shake effect upon being damaged, with a bigger one occuring when being damaged by the boss.

### NOTE:

With adding all the other obstacles for the player, i wanted to make the boss still seem more dangerous above everything else.  I also wanted to make rounds of the game last longer by adding an opportunity to gain health back, or even get more health than 3.&#x20;

### Usability Features

This dev cycle will top off the obstacle elements of the game and will complete the most basic form of the game before adding extra features.



### Key Variables

| Variable Name | Use                                                                                                                        |
| ------------- | -------------------------------------------------------------------------------------------------------------------------- |
| health()      | Starts at 3 and decreases by 1 each time the player takes damage. Reaching 0 causes the player to 'die' and the game ends. |
| score()       | starts at zero and increases over time. Resets for each new game.                                                          |

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
