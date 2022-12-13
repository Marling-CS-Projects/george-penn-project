# Cycle 8

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

| Variable Name | Use                                                                                  |
| ------------- | ------------------------------------------------------------------------------------ |
| spawnEvil()   | Spawns in a moving block that deals 1 damage to the player and disappears on impact. |
| wait()        | Waits a given number of seconds before performing instructions.                      |
| spawnHeal()   | Spawns a moving block that adds 1 health to the player's health count.               |

### Pseudocode

<pre><code><strong>loop:
</strong><strong>  spawnEvil()
</strong><strong>  wait (between 1 and 3 seconds) 
</strong><strong>  
</strong>oop:
  spawnHeal()
  wait (between 10 and 15 seconds) 

When player collides with boss:
    screen shake: large
    invincible = true
    if player has more than 1 health:
      bring health down to 1
    if player health is 1:
      decrease health by 1
    }
    destroy boss
    wait(3 seconds, spawnBoss)
  })

When player collides with evil block:
   screen shake: small
   decrease health by 1
   destroy evil block
   
     
		



          

  

</code></pre>

## Development

### Outcome

* Empty space on the stage is now full with a reasonable amount of moving blocks that damage the player.
* Boss is now much more dangerous and there is much more incentive for the player to steer clear of the boss's path. This also makes the boss feel more like a boss than just a bigger obstacle.&#x20;
* Evil blocks spawn in random patterns with 2 different variants: Small square blocks that float across the stage in any position, and tall sweeping blocks that move sideways across the top or bottom of the stage like hurdles.
* Occasionally a healing block will spawn. It has a similar behaviour to one of the small square evil blocks, but it is larger and a bit slower to give the player an appropriate chance to catch it.



### Challenges

Creating the behaviour for the floating blocks was easily the biggest challenge of this segment. It was difficult to find the correct spawn rate, randomisation, speed, etc for the blocks to make the game feel balanced.&#x20;



## Testing



### Tests

| Test | Instructions                                                                                                             | What I expect                                                                                                                                                                               | What actually happens                                                      | Pass/Fail |
| ---- | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- | --------- |
| 1    | Run into the boss with multiple health points. Run into the boss with 1 health point. Run into the boss when invincible. | Player health should decrease to 1 after being hit by the boss when on multiple health. Player should die when hitting the boss on 1 health. Player still gets hit by boss when invincible. | All expected functions happened properly.                                  | Pass      |
| 2    | Start game and check for evil blocks and heal blocks spawning in. Run into blocks to test if they do the right thing.    | Evil blocks should decrease player health by 1 and vanish. Heal blocks should increase health by 1 and vanish.                                                                              | Evil blocks perform their function and Heal blocks perform their function. | Pass      |

### Evidence

```
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

		

   


```

### Other Notes

