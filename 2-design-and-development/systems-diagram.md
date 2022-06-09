# 2.1 Design Frame

## Systems Diagram

![](<../.gitbook/assets/Screenshot 2022-06-09 at 08.57.30.png>)

This diagram shows the different parts of the game that I will focus on creating. I have split each section into smaller sub-sections. Throughout the development stage, I will pick one or two of these sections to focus on at a time to gradually build up and piece together the game. I have broken the project down this way as it roughly corresponds to the success criteria.

## Usability Features

Usability is an important aspect to my game as I want it to be accessible to all. There are 5 key points of usability to create the best user experience that I will be focusing on when developing my project. These are:

### Effective

Users can achieve the goal with completeness and accuracy. To do this, I will make it easy for the players to realise that they will need to defeat the boss again and again in each phase in order to get to the end of the game. I will make this goal clear to see so there is no confusion over why the boss keeps gaining health.

#### Aims

* Create a clear marker of progression in the boss fight.
* Make the player understand that the phases almost serve as levels in the game.

### Efficiency

The speed and accuracy to which a user can complete the goal. To do this, my games menus will be very simple with not too many things going on so that the player can get into the action as soon as possible. I will also display controls in the pause menu so that the player can quickly check what does what, should they forget.

#### Aims

* Create a menu system that is quick and easy to navigate through
* Create a controls system that isn't too complicated but allows the player to do multiple actions, and a clear map of what controls do what.

### Engaging

The solution is engaging for the user to use. To do this, i will make the attacks, player and boss stand out in the surrounding area, along with intense music. This will keep the player fixed on the fight and focused on winning. The level layout will be simple enough that the player doesn't have to think about it too much.

#### Aims

* Create a simple arena for the gameplay to take place
* Create brightly coloured attacks that are easy to recognise.

### Error Tolerant

The solution should have as few errors as possible and if one does occur, it should be able to correct itself. To do this, I will write my code to manage as many different game scenarios as possible so that it will not crash when someone is playing it.

#### Aims

* The game doesn't crash
* The game does not contain any bugs that damage the user experience

### Easy To Learn

The solution should be easy to use and not be over complicated. To do this, I will create simple controls for the game. I will make sure that no more controls are added than are needed in order to keep them as simple as possible for the players.

#### Aims

* Create a list of controls for the game
* Create an in-level guide that helps players learn how to play the game

## Pseudocode for the Game

### Pseudocode for game

This is the basic layout of the object to store the details of the game. This will be what is rendered as it will inherit all important code for the scenes.

```
object Game
    type: Phaser
    parent: id of HTML element
    width: width
    height: height
    physics: set up for physics
    scenes: add all menus, levels and other scenes
end object

render Game to HTML web page
```

### Pseudocode for a level

This shows the basic layout of code for a Phaser scene. It shows where each task will be executed.

```
class Level extends Phaser Scene

    procedure preload
        load all sprites and music
    end procedure
    
    procedure create
        start music
        draw background
        create players
        create platforms
        create puzzle elements
        create enemies
        create obstacles
        create finishing position
        create key bindings
    end procedure
    
    procedure update
        handle key presses
        move player
        move interactable objects
        update animations
        check if player at exit
    end procedure
    
end class
```
