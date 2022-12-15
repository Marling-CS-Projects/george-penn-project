# Cycle 9

## Design

### Objectives

* [x] Add music and sound effects to the game.
* [x] Add an info screen accessible at the start of the game that tells players the objective of the game and gives them information on the mechanics of the game.&#x20;
* [x] Add an optional HARD MODE to the game, with its own separate high score.

### NOTE:

This will be the final segment of features that I develop for the game, finishing fleshing it out as a finished product.

### Usability Features

These changes, especially the sound effects and music, will finish building the player experience and make the game feel complete.



### Key Variables

| Variable Name | Use                                                                                                                                                                      |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| hmscore       | Works similarly to the high score variable, except it only counts a score that is achieved in hard mode, and displays separately from the high score on the end screen.  |
| hm            | Activates all hardmode functions when true, deactivates them when false.                                                                                                 |

### Pseudocode

```


```

## Development

### Outcome

* Game now has SFX and music
* Player can access an info screen with plenty of information on how to play the game.
* Game now has an optional hard mode that modifies factors such as enemy spawn rate and speed.





### Challenges

Implementing the changes for hard mode took a long time as it required me to go and add lots of extra values to equations involving obstacle characteristics.



## Testing



### Tests

| Test | Instructions                                                                                                            | What I expect                                                                                                      | What actually happens                                                       | Pass/Fail |
| ---- | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------- | --------- |
| 1    | Play game and check for sound effects and music.                                                                        | Music should change between end/start screen and game screen, sound effects should play upon appropriate triggers. | All sound effects trigger at the correct time and music functions properly. | Pass      |
| 2    | Run similar test to the highscore test but with hardmode. Get a highscore in normal mode and check for differentiation. | Highscore and Hardmode highscore should display seperate values.                                                   | Highscore and Hardmode highscore display seperately and work properly.      | Pass      |
| 3    | Press shift on start screen, then press enter to return to start screen.                                                | Info screen should appear with a working option to return to start screen.                                         | Switching between info and start screen works.                              | Pass      |
| 4    | Enter hardmode and check for changes in game behaviour, then enter normal mode.                                         | Hardmode should have hardmode functions, then switching to normal mode should return game behaviour to normal.     | Hardmode and normal mode function correctly and seperatley.                 | Pass      |

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
  
   add([
    text(("HM HIGHSCORE:" + hmscore), { size: 18 }),
    pos(vec2(160, 220)),
    origin("center"),
    color(255, 0, 0),
    ])
    shake(30)
  }

  
  
 

       
//This makes the scene change to the game scene when the enter key is pressed.
  onKeyRelease("enter", () => {
    bird = 1
    go("game");
    ready = true
    score = 0
    menmusic.stop()
    music.play()
    play("gamestart", {
      volume:2
    })
    
  })

  onKeyRelease("shift", () => {
    go("info");
    
  })



  onKeyRelease("h", () => {
    go("game");
    ready = true
    score = 0
    menmusic.stop()
    music.play()
    bird = 2
    hard = 0.5
    epic = true
    play("gamestart", {
      volume:2
      
    })
    
  })
}),

go("start"),


scene("info", () => {
  add([
    text("Your goal is to survive as long as you can and rack up the highest score you can, by dodging the GREEN obstacles and the BOSS, while collecting the BLUE score boxes to boost your total! PINK boxes will heal your HEALTH, but each one you collect will ramp the difficulty up slightly! YELLOW boxes will grant you a temporary speed boost, and cause less hazards to spawn for some time. You will be INVINCIBLE for a short time after taking damage or being healed, but the BOSS can break through invincibility. The BOSS will always take your health down to 1, unless you were already at 1, in which case youre DEAD! Feeling dangerous? Try out HARD MODE, where everything is FASTER!!!", { size: 12, width: 300}),
    pos(vec2(160, 110)),
    origin("center"),
    color(200, 0, 255),
   
   
  ]);
  add([
    text("PRESS SHIFT TO RETURN TO MENU", { size: 12, width: 300}),
    pos(vec2(160, 230)),
    origin("center"),
    color(255, 0, 0),
   
   
  ]);

  onKeyRelease("shift", () => {
    go("start")
  })

})
  
//game scene
  
scene("game", (levelNumber = 0) => {
//defines the layers of objects in the game

   function spawnBoss(){
    add([
      sprite("boss"),
      area(),
      solid(),
      pos(160, 120),
      dir(),
      patrol(1),
      layer("bg"),
      origin("bot"),
      "boss"
  ])}

  


   
  
  layers([
    "bg",
    "game",
    "ui",
  ], "game");

  const level = addLevel(LEVELS[levelNumber], levelConf);

    
  


  const player = level.spawn("p", 1, 10)

  player.play("default")

  let hard = 1

  let SPEED = 200 

  let speder = 0

  let speedytime = false

  let SPEED2 = 80

  let SPEED3 = 70

  let SPEED5 = 50

  let spedo = false

   onUpdate(() => {
  SPEED2 = (80 * hard * bird)
  })

   onUpdate(() => {
  SPEED = (200 * bird)
  })

    onUpdate(() => {
  SPEED3 = (70 * bird)
  })

    onUpdate(() => {
  SPEED4 = (40 * bird)
  })

  let SPEED4 = 40

  let health = 3;

  let invincible = false;

  let sframes = 0

  let iframes = 0;

  let dub = true 

  

  
 add([
      sprite("boss"),
      area(),
      solid(),
      pos(160, 120),
      dir(),
      patrol(1),
      layer("ui"),
      origin("bot"),
      "boss"
  ]);
      
  function spawnEvil() {

		// add tree obj
		add([
			rect(10, rand(100)),
			area(),
			pos(300, 240),
			origin("botleft"),
			color(0, 255, 150),
			move(LEFT, SPEED2),
      layer("game"),
			cleanup(),
			"evil",
     
		

		// wait a random amount of time to spawn next tree
		wait(rand(((1 / bird) + speder), ((4 / bird) + speder)), spawnEvil)

	]);}

	// start spawning trees
		if (ready == true) {
    wait(2, spawnEvil)
  }

    function spawnEvil2() {

		// add tree obj
		add([
			rect(10, 50),
			area(),
			pos(0, 40),
			origin("botleft"),
			color(0, 255, 150),
			move(RIGHT, SPEED2),
      layer("game"),
			cleanup(),
			"evil",
     
		

		// wait a random amount of time to spawn next tree
		wait( (((7 / bird) + speder) - hard) , spawnEvil2)

	]);}

	// start spawning trees
		if (ready == true) {
    wait(2, spawnEvil2)
  }

  

    function spawnEvil3() {

		// add tree obj
		add([
			rect(10, 10),
			area(),
			pos(rand(0,255), 0),
			origin("botleft"),
			color(0, 255, 150),
			move(DOWN, SPEED3),
      layer("game"),
			cleanup(),
			"evil",
     
		

		// wait a random amount of time to spawn next tree
		wait( rand(((7 / bird) + speder) - hard), spawnEvil3)

	]);}

	// start spawning trees
		if (ready == true) {
    wait(2, spawnEvil3)
  }

     function spawnEvil4() {

		// add tree obj
		add([
			rect(10, 10),
			area(),
			pos(rand(0,255), 250),
			origin("botleft"),
			color(0, 255, 150),
			move(UP, SPEED3),
      layer("game"),
			cleanup(),
			"evil",
     
		

		// wait a random amount of time to spawn next tree
		wait( rand(((5 / bird) + speder) - hard), spawnEvil4)

	]);}

	// start spawning trees
	if (ready == true) {
    wait(2, spawnEvil4)
  }

  function spawnHeal() {

		// add tree obj
		add([
			rect(20, 20),
			area(),
			pos(300, rand(0,220)),
			origin("botleft"),
			color(255, 200, 200),
			move(LEFT, SPEED4),
      layer("game"),
			cleanup(),
			"heal",
     
		

		// wait a random amount of time to spawn next tree
		wait( rand(10, 15), spawnHeal)

    ]);}

	

	// start spawning trees
	if (ready == true) {
    wait(15, spawnHeal)
  }


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

  function spawnScreen() {
  
  add([
			rect(3000, 3000),
			area(),
			pos(0, 250),
			origin("botleft"),
			color(255, 255, 0),
      layer("bg"),
			cleanup(),
			"speedscreen",



    ])}
    

    




  player.onCollide("boss", (boss) => {
    shake(80)
    play("bosshit")
    invincible = true
    player.play("invin")
    if (health > 1) {
      health = 1
    }
    else {
      health -=1
    }
    destroy(boss)
    wait(3, () => {
    spawnBoss()
    play("respawn", {
      volume:2
    })
})
    
    
    }
    
  )
  
  

   player.onCollide("evil", (evil) => {
  if (invincible == false) {
    play("hurt", {
      volume:2
    })
    play("hurt2", {
      volume:2
    })
    shake (5)
    health -= 1
    invincible = true
    player.play("invin")
    destroy(evil)
  }
  else{
    return;
  };
  });

     player.onCollide("heal", (heal) => {
    health += 1
    hard += (0.1 / bird)
    invincible = true
    player.play("invin")
    destroy(heal)
    play("healing", {
      volume:1.5
    })
 
  });


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
    if (invincible == true) {
        iframes += 1
      if (iframes == (90)) {
         invincible = false
          player.play("default")
          iframes = 0
      }
    }
  })

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

   player.onCollide("speedscreen", (speedscreen) => {
    wait(10, destroy(speedscreen))
 
  });
      
    
  

  
  
let healthtext = add([
  text(("HEALTH:" + health), { size: 19}),
  pos(vec2(255, 233)),
  origin("center"),
  color(200, 0, 255),
]);
  
   
 onUpdate(() => {
	healthtext.text = ("HEALTH:" + health);
  readd(healthtext);
})

onKeyDown("right", () => {
  player.flipX(false)
  player.move(SPEED, 0);

});

onKeyDown("d", () => {
  player.flipX(false)
  player.move(SPEED, 0);

});


  
onKeyDown("left", () => {
  player.flipX(true)
  player.move(-SPEED, 0);
});

    
onKeyDown("a", () => {
  player.flipX(true)
  player.move(-SPEED, 0);
});

  
onKeyPress("shift", () => {
  if (player.isGrounded()) {
    player.jump(10000);
  }
});
  
onKeyPress("up", () => {
  if (player.isGrounded()) {
    player.jump(450);
    play("jumper")
  }
  else {
    if (dub == true) {
      player.jump(450)
      dub = false
      play("jumper")
    }
    else{
      return
    }
  }
  
});

  onUpdate(() => {
	if (bird == 2){
    hm = score
  }
  
})

  

onKeyPress("w", () => {
  if (player.isGrounded()) {
    player.jump(450);
    play("jumper")
  }
   else {
    if (dub == true) {
      player.jump(450)
      dub = false
      play("jumper")
    }
    else{
      return
    }
  }
  
});
  


	const scoreLabel = add([
		text(("SCORE" + score), { size: 19 }),
		pos(vec2(70, 233)),
    origin("center"),
    color(200, 0, 255),
  ]);
	

	// increment score every frame
	onUpdate(() => {
		score++
    
    
		scoreLabel.text = ("SCORE:" + score)
	})



 

// triggers when hp reaches 0


  /*if (invincible == false) {
    player.play("default")
 
  }
  else {
    if (invincible == true) {
    player.play("invin")
 
  }}*/


  




onUpdate(() => {
 if (health == 0) {
   died = true
   ready = false
   hard = 1
   go("start")
   if (score > highscore) {
     highscore = score
   }
   if (score > hmscore) {
     if (bird == 2) {
       hmscore = score
     }
   }
   play("end")
   music.stop()
   menmusic.play()
   bluescore = 500
   
}
})
})


```

### Other Notes

