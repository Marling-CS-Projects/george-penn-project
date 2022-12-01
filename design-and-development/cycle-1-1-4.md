# Cycle 6

## Design

### Objectives

* [x] Create the boss and add them to the game.
* [x] Give them movement and collision with the player.

### Usability Features

This will be the first step to adding the actual 'boss' element to the game. The boss will be a constant threat, making the player have to stay aware of their location at all times to plan their movements.

### Key Variables

| Variable Name | Use                                                                                                                                       |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| solid()       | Gives the boss object the solid property, allowing it to collide into other solid objects.                                                |
| spawnBoss()   | Calls the boss to be spawned in with all the properties assigned to it. This can be used to make the boss disappear, the come back later. |

### Pseudocode

```
   spawnBoss:
    properties:
      sprite(boss)
      area(same as sprite),
      solid,
      starting position(160, 120),
      direction(forward),
      patrol,
      layer(background),
      name: "boss"
  

```

## Development

### Outcome

Boss spawning function works. The boss moves from side to side in a straight line and bounces off of the walls. Upon colliding with the player, it bounces off and moves the other direction. However, there are a few issues such as the boss being frozen in place if the player holds the inputs for the character to run into the boss, and the boss being able to be used as a platform and even clipped through the stage if the player jumps at certain times.



### Challenges

It was fairly difficult to get the boss to collide with the side walls, as i had to go back and make sure all the objects in the scene were in the correct layers for the collisions to work correctly.

## Testing

I needed to test multiple instances of collision and how the boss would react.

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

