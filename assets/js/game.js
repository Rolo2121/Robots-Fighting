var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// console.log(playerName, playerHealth, playerAttack);

var enemyNames = ['Calculon', 'Kitten', 'Buckets'];
var enemyHealth = 50;
var enemyAttack = 12;

// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

var fight = function (enemyName) {
	while (playerHealth > 0 && enemyHealth > 0) {
		// ask player if they'd like to fight or run
		var promptFight = window.prompt(
			'Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.'
		);

		// if player picks "skip" confirm and then stop the loop
		if (promptFight === 'skip' || promptFight === 'SKIP') {
			// confirm player wants to skip
			var confirmSkip = window.confirm(
				'Are you sure you want to run? You will lose 10 moneys!'
			);

			// if yes (true), leave fight
			if (confirmSkip) {
				window.alert(playerName + ' has decided to run! HaHaHa!!!');
				// subtract money from playerMoney for skipping
				playerMoney = playerMoney - 10;
				console.log('playerMoney: ', playerMoney);
				break;
			}
		}

		// remove enemy's health by subtracting the amount set in the playerAttack variable
		enemyHealth = enemyHealth - playerAttack;
		console.log(
			playerName +
				' attacked ' +
				enemyName +
				'. ' +
				enemyName +
				' now has ' +
				enemyHealth +
				' health remaining.'
		);

		// check enemy's health
		if (enemyHealth <= 0) {
			window.alert(enemyName + ' has died! He is dead!!!');

			// award player money for winning
			playerMoney = playerMoney + 20;
			// leave while() loop since enemy is dead
			break;
		} else {
			window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
		}

		// remove players's health by subtracting the amount set in the enemyAttack variable
		playerHealth = playerHealth - enemyAttack;
		console.log(
			enemyName +
				' attacked ' +
				playerName +
				'. ' +
				playerName +
				' now has ' +
				playerHealth +
				' health remaining.'
		);

		// check player's health
		if (playerHealth <= 0) {
			window.alert(playerName + ' has died! You dead!!!');
			// leave while() loop if player is dead
			break;
		} else {
			window.alert(playerName + ' still has ' + playerHealth + ' health left.');
		}
	} // end of while loop
}; // end of fight function

var startGame = function () {
	playerHealth = 100;
	playerAttack = 10;
	playerMoney = 10;
	// debugger;
	for (var i = 0; i < enemyNames.length; i++) {
		if (playerHealth > 0) {
			window.alert('Welcome to Robo Dome!!! Round ' + (i + 1));
			var pickedEnemyName = enemyNames[i];
			enemyHealth = 50;
			fight(pickedEnemyName);
			if (playerHealth > 0 && i < enemyNames.length - 1) {
				var storeConfirm = window.confirm(
					'The fighting has stopped, visit store?'
				);
				if (storeConfirm) {
					shop();
				}
			}
		} else {
			window.alert('You out of health, You dead!!!');
			break;
		}
	}
	endGame();
};

var endGame = function () {
	if (playerHealth > 0) {
		window.alert(
			'Wow you have survided! You have a money of ' + playerMoney + '. '
		);
	} else {
		window.alert('Game over!! How did you do? Bad!!');
	}
	var playAgainConfirm = window.confirm('Wanna play again?');
	if (playAgainConfirm) {
		startGame();
	} else {
		window.alert('Get Out of Here Then!!');
	}
};

var shop = function () {
	var shopOptionPrompt = window.prompt(
		"Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
	);
	switch (shopOptionPrompt) {
		case 'refill':
		case 'REFILL':
			if (playerMoney >= 7) {
				window.alert('Refilling health by 20 for 7 moneys.');
				playerHealth = playerHealth + 20;
				playerMoney = playerMoney - 7;
			} else {
				window.alert('You can not afford that!');
			}
			break;
		case 'upgrade':
		case 'UPGRADE':
			if (playerMoney >= 7) {
				window.alert('Upgrading attack by 6 for 7 moneys.');
				playerAttack = playerAttack + 6;
				playerMoney = playerMoney - 7;
			} else {
				window.alert('You can not afford that!');
			}
			break;
		case 'leave':
		case 'LEAVE':
			window.alert('Get out then!');
			break;
		default:
			window.alert('You did not pick a valid option. Try again.');
			shop();
			break;
	}
};

startGame();

// 3.3.3
