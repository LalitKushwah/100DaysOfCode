function getRandomAttackValue (min, max) {
    return Math.floor(Math.random() * (max-min));
}

Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            battleLogs: [],
            winner: null
        }
    },
    watch: {
        playerHealth (value) {
            if (value <= 0 && this.monsterHealth <=0) {
                this.winner = 'draw';
            } else if (value <= 0) {
                this.winner = 'monster';
            }
        },
        monsterHealth (value) {
            if (value <= 0 && this.monsterHealth <=0) {
                this.winner = 'draw'
            } else if (value <= 0) {
                this.winner = 'player';
            }
        }
    },
    computed: {
        monthHealthBarStyle () {
            if (this.monsterHealth < 0) {
                return { width : 0 + '%'};
            }
            return { width : this.monsterHealth + '%'};
        },
        playerHealthBarStyle () {
            if (this.playerHealth < 0) {
                return { width : 0 + '%'};
            }
            return { width: this.playerHealth + '%' };
        },
        mayUseSpecialAttack () {
            return this.currentRound % 3 !== 0;
        }
    },
    methods: {
        attackMonster () {
            this.currentRound++;
            const attackValue = getRandomAttackValue(5,12);
            this.monsterHealth -=attackValue;
            this.attackPlayer();
            this.addBattleLogs('player', 'attack', attackValue);
        },
        attackPlayer () {
            const attackValue = getRandomAttackValue(8, 15);
            this.playerHealth -= attackValue;
            this.addBattleLogs('monster', 'attack', attackValue);
        },
        specialMonsterAttack () {
            const attackValue = getRandomAttackValue(10, 25);
            this.monsterHealth-= attackValue;
            this.attackPlayer();
            this.addBattleLogs('Player', 'Special attack', attackValue);
        },
        healPlayer () {
            const healValue = getRandomAttackValue(8, 20);
            const playerHealthAfterHealing = this.playerHealth + healValue;
            this.playerHealth = playerHealthAfterHealing >= 100 ? 100 : playerHealthAfterHealing;
            this.addBattleLogs('Player', 'heal', healValue);
        },
        playerSurrender () {
            this.playerHealth = 0;
            this.addBattleLogs('Player', 'Surrender', 0);
        },
        startGame () {
            this.playerHealth = 100;
            this.monsterHealth =  100,
            this.currentRound =  0,
            this.battleLogs =  [],
            this.winner =  null
        },
        addBattleLogs(who, what, value) {
            this.battleLogs.unshift({
                actionBy: who,
                action: what,
                actionValue: value
            })
        }
    }
}).mount('#game')