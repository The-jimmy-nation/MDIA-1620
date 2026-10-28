// Welcome!
//
//                                                  #    #
//                                             %%% ##   ##
//                                          %%%%% ###%🎀###
//                                         %%%%% ### %%% #
//                                       %%%%%% ### %%% ###
//                                        %%%% ## %% #######
//                                       %%%%% # %% #@#####
//                                     %%%%%% # % #########
//                                    %%%%% ##### #########
//                          ###        %% ####### #########
//                 %%% ############    ########### ########
//              %%%% ############################### #######
//            %%%%% ################################## ######
//          %%%%%% #################################### #C###
//         %%%🌸%% #####################################  ###
//         %%%%% #######################################
//        %%%%%% ############### BEANS ##################
//     % %%%%%%% ############### BEANS ##################
//      %%%%%%%%% ############## BEANS ##################
//     %%%%%%%%%% ########################################
//  %%% %%%%%%%%   ###### ################################
//    %%%%%%%%      ###### #################### ##########
// % %%%🌸%%%%        ####### ########### ###### ##########
//  %%%%%%%%%         #######  ########### ###### ########
// %%%%%%%%%%          ##### ###  ######### ####### ######
//  %%%%%%%%%%          #### ##               ####### ####
//  %🌸%%%%%%%%%           ## #                  ##### ###
//   %%  %% % %%         # ##                      ## ###
//     %   %    %        # ###                      # ###
//                        # ###                     ## ###
//                        # ###                     ## ###
//                        # ####                   #### ##
//                       ### ###                  ##### ###
//                      ####  ###                 ####   ##
//                     #####   ###                 ##    ##
//                    #####    ####                      ###
//                     ##        ###                     ###
//                                ####                     ##
//                                 ####                    ###
//                                                         ####
//                                                          ##
//

const horses = [
  {
    name: "Thunder",
    nickname: "Thor",
    favouriteTreat: "Apples",
    age: 8,
    monthlyRent: 500,
    location: true,
    colour: "Black",
    breed: "Friesian",
    likeJumping: true
  },
  {
    name: "Willow",
    nickname: "Willy",
    favouriteTreat: "Carrots",
    age: 5,
    monthlyRent: 750,
    location: false,
    colour: "Chestnut:",
    breed: "Belgian",
    likesJumping: false
  }
];

// Array of horse objects with properties such as name, nickname, favourite treat, age, monthly rent, location, colour, breed, and likes jumping //

const newHorse = {
  name: "Starboy",
  nickname: "Starry",
  favouriteTreat: "Candy Cane",
  age: 7,
  monthlyRent: 600,
  location: true,
  colour: "Dark Grey",
  breed: "Caspian",
  likesJumping: true
};

// const to show new hourse and properties of the new horse. //

horses.push(newHorse);

//adding a new horse to the horses array//

horses[0].isHungry = true;
horses[1].isHungry = false;
horses[2].isHungry = true;

// Add a new property to each horse object that indicates whether the horse is hungry or not. Use dot notation to add this property. //

const totalStalls = 20;

// total of 20 stalls //

function showAvailableStalls() {
  const availableStalls = totalStalls - horses.length;

  if (availableStalls > 0) {
    console.log("Available stalls: " + availableStalls);
  } else {
    console.log("There are no stalls available.");
  }
}

// function to show how many stalls are available with if statements to check if there are any stalls available or not //

showAvailableStalls();

// function to show how many stalls are available, given how many horses you have in your stable //

function showRentOwed(horse, isLate) {
  if (isLate) {
    console.log(horse.name + " owes " + (horse.monthlyRent * 1.2 ) + " (including late fee)");
  } else {
    console.log(horse.name + " owes " + horse.monthlyRent);
  }
}

// function to show how much rent is owed by a horse, and if it is late or not //

showRentOwed(horses[0], true);
// show the horse's rent and if it is late or not //

function getNickname(horse) {
  return horse.nickname;
};

// function to get the nickname of the horse //

const nickname = getNickname(horses[1]);
console.log(nickname);

// console log the nickname of the horse outside of the function //