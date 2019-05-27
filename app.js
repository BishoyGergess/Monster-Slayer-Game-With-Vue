
    var app= new Vue({
        el:'#app',
        data:{
            gameStarted:false,
            player:100,
            monster:100,
            attacks:[],
        },
        methods:{
            //Functions Built on ES5 Synatx cause ES6 still not stable in all browswers 
            gameStarting:function(){
                this.gameStarted = true;
                this.player = 100;
                this.monster = 100;
            },
            attack:function(){
                var damage  = this.calculateDamage(3,10);
                this.monster -= damage;
                this.attacks.unshift({
                    isPlayer:true,
                    text:'The Monster Lost ' + damage + 'Points'
                });
                this.checkWin();
                this.monsterAttack();
            },
            specialAttack:function(){
                var damage = this.calculateDamage(10,20);
                this.monster -= damage;
                this.attacks.unshift({
                    isPlayer:true,
                    text:'The Monster Lost ' + damage + 'Points'
                });
                this.checkWin();
                this.monsterAttack();
            },
            heal:function(){
                if(this.player<=90){
                var playerHealed = this.calculateDamage(3,15);
                this.player += playerHealed;
                this.attacks.unshift({
                    isPlayer:true,
                    text:'The player Healed by ' + playerHealed
                });
                this.monsterAttack();}
                else if(this.player>=90 && this.player<=99){
                    this.player = 100;
                    this.attacks.unshift({
                        isPlayer:true,
                        text:'Player Has full health'
                    });
                    this.monsterAttack();
                }
                else{
                    alert('You Have a good health');
                }
            },
            giveUp:function(){
                alert('you lose');
                this.resetGame();

            },
            resetGame:function(){
                this.gameStarted = false;
                this.player      =  100;
                this.monster     =  100;
                this.playerLose  =  0;
                this.monsterLose =  0;
                this.attacks     = [];
            },
            calculateDamage:function(min,max){
                return Math.max(Math.floor(Math.random()*max),min);
            },
            monsterAttack:function(){
                var damage = this.calculateDamage(3,15);
                this.player -= damage;               
                this.attacks.unshift({
                    isPlayer:false,
                    text:'The Player Lost ' + damage + 'Points'
                });
                this.checkWin();
            },
            checkWin:function(){
                if(this.player<=0){
                    alert("you lose");
                    if(confirm('Do you want to play Again !!')){
                    this.resetGame();
                    }
                    else{
                    return;
                    }
                }
                else if(this.monster<=0){
                    alert("you Won");
                    if(confirm('Do you want to play Again !!')){
                    this.resetGame();
                    }
                    else{
                    return;
                    }

                }
            }

        }
    })
