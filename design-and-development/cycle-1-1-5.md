# Cycle 7

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





### Challenges



## Testing



### Tests

| Test | Instructions                                  | What I expect                                                                                     | What actually happens                                                                                                            | Pass/Fail |
| ---- | --------------------------------------------- | ------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | --------- |
| 1    | Run game and check for boss sprite movement.  | Boss should immediately start moving, and changing direction when coming into contact with walls. | Boss moves and bounces off of walls and the player. There are some bugs with player - boss collision.                            | Pass      |
| 2    | Jump on top of boss and see what happens      | Boss should have collision from the top.                                                          | Boss has collision, but is treated like a platform and the boss can clip through platforms if the player jumps at the right time | Pass      |

### Evidence

```
function patrol(distance = 100, speed = 50, dir = 1) {
  return {
    id: "patrol",
    require: ["pos", "area",],
    startingPos: vec2(0, 0),
    add() {
      this.startingPos = this.pos;
      this.on("collide", (obj, side) => {
        
          dir = -dir;
        }
      );
    },
    update() {
      if (Math.abs(this.pos.x - this.startingPos.x) >= distance) {
        dir = -dir;
      }
      this.move(speed * dir, 0);
    },
  };
}

```

### Other Notes

