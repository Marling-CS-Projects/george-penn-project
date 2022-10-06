# Cycle 5

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



### Tests

| Test | Instructions | What I expect | What actually happens | Pass/Fail |
| ---- | ------------ | ------------- | --------------------- | --------- |
| 1    |              |               |                       |           |
| 2    |              |               |                       |           |

### Evidence

```
```

### Other Notes

