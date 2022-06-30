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
onKeyDown(right arrow key):
  player flip = facing right
  player moves at speed 800



});

onKeyDown(left arrow key):
  player flip = facing left
  player moves at speed -800 //(800 in the opposite direction)
  }
  
  
});
onKeyPress(
  if (player.grounded()) {
    player.jump();
  }
});
```

## Development

### Outcome

All objectives achieved 👍🏻

### Challenges

Creating the code for using the right key worked almost instantly but coding right turned out to be more challenging due to flipping, reverse speed etc. and required some more proper testing before it worked properly

## Testing

Evidence for testing

![](<../.gitbook/assets/Screenshot 2022-06-30 at 12.40.42.png>)



### Tests

| Test | Instructions                                                                                                         | What I expect                                                                             | What actually happens                                                                                                         | Pass/Fail |
| ---- | -------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | --------- |
| 1    | Run code and click enter on menu screen to get to the game scene, then use arrow keys and space key to test movement | Player sprite should have horizontal movement and a jump.                                 | Player can move right and jump, but pressing left causes the sprite to teleport off the screen for a reason i don't yet know. | Fail      |
| 2    | Run code and click enter on menu screen to get to the game scene, then use arrow keys and space key to test movement | After changing some code and indentation, all 3 movement inputs should now work properly. | Left, right and jump are all now working correctly.                                                                           | Pass      |

### Evidence

const SPEED = 800;

onKeyDown("right", () => { player.flipX(false) player.move(SPEED, 0);

}); onKeyDown("left", () => { player.flipX(true) if (toScreen(player.pos).x > 20) { player.move(-SPEED, 0); }

}); onKeyPress("space", () => { if (player.grounded()) { player.jump(); }

### Other Notes

Player jump height will need adjusting as it is currently too low to reach the platforms.
