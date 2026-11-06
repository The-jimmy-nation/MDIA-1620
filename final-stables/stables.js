// Welcome!

//                ::                                                                       +#*:                            
//            *        %                                                                +#     =%                          
//              -*=-*-                                                               +*.  +*.=*:  =*:                      
//             =     .*                         .==                               **   **       :%:  :%:                   
//             =     .+                     ::#.    -=::                      .*+  .*+             :#-  :#=                
//              :*++*:                   +-              *.                .#=  .#=                   :#+  :%*             
//            *        #:                *               :-             .%+  .%+   #%%%%%%%%%%%%%%%%%%.   %+   #*          
//                ::          .*-.:*-                                :#=  :%=      *     *=:  *==    -:      **.  +*.      
//                        :#           #:                         :%:  :%:         *    :=*   -:#    -:         *%   *%    
//                        *             #                      :#-  -#:            *    :=+   =.#    -:            =*:  +*:
//                          ...........                     :%:  =%:               *     -= =..*     -:               -%#* 
//                                                         *. -#:                  #*******#%%*******#:                  * 
//                                                          ===%+++++++++++++++++++++++++++++++++++++++++++++++++++++++++# 
//            ::::.                                            %  +                       :=--*                       #  * 
//   .=*=:            .:=*=:                      .::----::.   %  +=======================*:  *=======================#  * 
// +                         :#*         .+%#=                 %  + =%%%%%%%%%%%%%%%%%%%%:::  * #%%%%%%%%%%%%%%%%%%%= #  * 
//                                =*+*=.                       %  + =%%%%%= +#%%%%%%%%%%%:::  * #%%%%%- *#%%%%%%%%%%= #  * 
//                                    :*=                      %  + =%%%* .   *.%%%%%%%%%:::  * #%%%+:   .+-%%%%%%%%= #  * 
//                            .           .            .       %  + =%%-   =.  =-*%%%%%%%:::  * #%%:   =   *:%%%%%%%= #  * 
// **%.#*********%:%*********%:%*********%:%**********%.%******%  + =%%#*%%%:          ##:::  * #%%*+#%%.         :%= #  #*
//   %.=         %:=     **= %:=         #:*          +.%      %  + =%%%%%%%=           %:::  * #%%%%%%%:          -= #  * 
// ##%.%#%%%%%%%%@:%%%%** =%%@:%%%%%%%%%%@:%########%##:%******%  +                       -:  *                       #  * 
//   * :         +-::#=   = %*.:         = :     *=*  ==-      %  +  #*#             :%== ::  *  %#*             ##%  #  * 
//            .:   =**  :-   =:                :*+:   ::*      %  +  #   :*=     :*+   := ::  *  #   =#-     -*-   %  #  * 
//   : .  :#*           =- =#*         :%+=#%%%=.   #=   *     %  +  #       =#%:      := ::  *  #       *%+       %  #  * 
//       * %            #           +=*            -:  *=      %  +  #    .#+    *=    := ::  *  #    :%:   -%:    %  #  * 
//      := @   =       =:          -:.*            @           %  +  # =*:          =#-:= ::  *  %.*+.         .+* %  #  * 
//      *  %  *:%*%%%: +           %  *   *=      %        .***************************************************************
//        :::% *    ---.    :--=  :=:+..= *    --:=                                                                        
//        .=+-+=    -=*              + %#:=    -==      .  :                                                        -      
//  =--:   #*-=**   :#*:             +:%=-*    -=+.                    ==.:                         +++            :.:                                                                                                                      
//
//
//
// Assignment 1 - Stables.js //
// These three horse objects are also used in Assignments 2 and 3.
const horses = [
  {
    name: "Thunder",
    nickname: "Thor",
    favouriteTreat: "🍎 Apples",
    age: 8,
    monthlyRent: 500,
    location: true,
    colour: "Black",
    breed: "Friesian",
    likesJumping: true
  },
  {
    name: "Willow",
    nickname: "Willy",
    favouriteTreat: "🥕 Carrots",
    age: 5,
    monthlyRent: 750,
    location: false,
    colour: "Chestnut",
    breed: "Belgian",
    likesJumping: false
  },
  {
    name: "Starboy",
    nickname: "Starry",
    favouriteTreat: "🍬 Candy Cane",
    age: 7,
    monthlyRent: 600,
    location: true,
    colour: "Dark Grey",
    breed: "Caspian",
    likesJumping: true
  }
];

const stableName = "Ice bear Stables";
const visitorMessage = "Welcome to " + stableName + "!";

function getLateRent(horse) {
  return horse.monthlyRent * 1.2;
}

const latePaymentMessage = horses[0].name + "'s monthly payment is late. Amount owing: $" + getLateRent(horses[0]) + ".";
console.log(visitorMessage);
console.log(latePaymentMessage);

// End of Assignment 1 - Stables.js //

// Assignment 2 - Stables.js //

const newHorse = {
  name: "Clover",
  nickname: "Clo",
  favouriteTreat: "🌾 Hay Cubes",
  age: 6,
  monthlyRent: 550,
  location: true,
  colour: "Bay",
  breed: "Morgan",
  likesJumping: false
};

horses.push(newHorse);

horses[0].isHungry = true;
horses[1].isHungry = false;
horses[2].isHungry = true;
horses[3].isHungry = true;

const totalHorseStalls = 20;

function showAvailableStalls() {
  const availableStalls = totalHorseStalls - horses.length;

  if (availableStalls > 0) {
    console.log("Available stalls: " + availableStalls);
  } else {
    console.log("There are no stalls available.");
  }
}

showAvailableStalls();

function showRentOwed(horse, isLate) {
  if (isLate) {
    console.log(horse.name + " owes $" + getLateRent(horse) + " (including late fee).");
  } else {
    console.log(horse.name + " owes $" + horse.monthlyRent + ".");
  }
}

showRentOwed(horses[0], true);

function getNickname(horse) {
  return horse.nickname;
}

const nickname = getNickname(horses[1]);
console.log(nickname);

// End of Assignment 2 - Stables.js //

// Assignment 3 - Final - Stables.js //

// Add loop that checks to find out if a certain horse likes a particular treat. If the horse does not like
// the treat, log out their disatisfaction and check the next horse. Exit the loop when you find
// the horse that likes the treat.

// Today's treat is carrots 🥕.

horses[0].likesCarrots = false;
horses[1].likesCarrots = true;
horses[2].likesCarrots = false;
horses[3].likesCarrots = false;

function offerCarrots(index) {
  if (horses.length > index) {
    const horse = horses[index];
    if (horse.likesCarrots) {
      console.log(horse.name + " happily takes the carrots.");
      return true;
    } else {
      console.log(horse.name + " turns away from the carrots.");
      return offerCarrots(index + 1);
    }
  } else {
    console.log("None of the horses wanted carrots.");
    return false;
  }
}

offerCarrots(0);

// Create a function references one of your unique horse properties. It should
// contain a conditional or a loop. Invoke it for each horse.

function showJumpingPreference(horse) {
  if (horse.likesJumping) {
    console.log(horse.name + " likes jumping.");
  } else {
    console.log(horse.name + " prefers to stay on the ground.");
  }
}

showJumpingPreference(horses[0]);
showJumpingPreference(horses[1]);
showJumpingPreference(horses[2]);
showJumpingPreference(horses[3]);

// Morning! Create and invoke a function that moves any number horses of your choice outside. It should
// log out statement indicating the horses have been moved to spend time in the sun.
// (The function should be able to move a single horse, or multiple horses, depending on the parameters specified)

// A location of true means inside. A location of false means outside.

function moveHorse(horse, isDark) {
  if (isDark) {
    if (horse.location) {
      return;
    }
    horse.location = true;
    console.log(horse.name + " comes inside for the night.");
  } else if (horse.location) {
    horse.location = false;
    console.log(horse.name + " goes outside to spend time in the sun.");
  }
}

function moveHorses(selectedHorses, isDark, index) {
  if (selectedHorses.length > index) {
    moveHorse(selectedHorses[index], isDark);
    moveHorses(selectedHorses, isDark, index + 1);
  }
}

moveHorses([horses[0], horses[2]], false, 0);

// Food! Create and invoke a function that feeds your horses. If the horse is outside, it
// should call them in, and then all horses should be fed a treat. Log the activity of
// the horses.

function feedHorse(horse) {
  if (horse.location) {
    console.log(horse.name + " is ready for a treat inside.");
  } else {
    horse.location = true;
    console.log(horse.name + " comes inside for a treat.");
  }

  horse.isHungry = false;
  console.log(horse.name + " eats a treat: " + horse.favouriteTreat + ".");
}

feedHorse(horses[0]);
feedHorse(horses[1]);
feedHorse(horses[2]);
feedHorse(horses[3]);

// Bedtime! Update the function that lets your horses outside so that it also calls them
// in if it is getting dark. Only the horses that moved should log out a message. Invoke the function.

// Starboy goes back outside after feeding. At bedtime only Starboy needs to come in.

moveHorses([horses[2]], false, 0);
moveHorses(horses, true, 0);

// Bonus: Initialize a method on your horses that moves them inside if they are outside, and
// vice versa.

function addMoveMethod(horse) {
  function switchLocation() {
    if (horse.location) {
      horse.location = false;
    } else {
      horse.location = true;
    }
  }

  horse.switchLocation = switchLocation;
}

addMoveMethod(horses[0]);
addMoveMethod(horses[1]);
addMoveMethod(horses[2]);
addMoveMethod(horses[3]);

// Example: horses[0].switchLocation() moves Thunder to the opposite location.

// End of Assignment 3 - Stables.js //
