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

// Assignment 1 - Stables.js //
let horses = [
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

horses.push(newHorse);

horses[0].isHungry = true;
horses[1].isHungry = false;
horses[2].isHungry = true;

const totalStalls = 20;

function showAvailableStalls() {
  const availableStalls = totalStalls - horses.length;

  if (availableStalls > 0) {
    console.log("Available stalls: " + availableStalls);
  } else {
    console.log("There are no stalls available.");
  }
}

showAvailableStalls();


function showRentOwed(horse, isLate) {
  if (isLate) {
    console.log(horse.name + " owes " + (horse.monthlyRent * 1.1));
  } else {
    console.log(horse.name + " owes " + horse.monthlyRent);
  }
}

showRentOwed(horses[0], true);

function getNickname(horse) {
  return horse.nickname;
};

const nickname = getNickname(horses[1]);
console.log(nickname);

// End of Assignment 1 - Stables.js //

// Assignments 2 - Stables.js //

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
    console.log(horse.name + " owes " + (horse.monthlyRent * 1.2) + " (including late fee)");
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

// End of Assignment 2 - Stables.js //


// Add loop that checks to find out if a certain horse likes a particular treat. If the horse does not like
// the treat, log out their disatisfaction and check the next horse. Exit the loop when you find
// the horse that likes the treat.

// Create a function references one of your unique horse properties. It should
// contain a conditional or a loop. Invoke it for each horse.

// Morning! Create and invoke a function that moves any number horses of your choice outside. It should
// log out statement indicating the horses have been moved to spend time in the sun. 
// (The function should be able to move a single horse, or multiple horses, depending on the parameters specified)

// Food! Create and invoke a function that feeds your horses. If the horse is outside, it
// should call them in, and then all horses should be fed a treat. Log the activity of
// the horses.

// Bedtime! Update the function that lets your horses outside so that it also calls them
// in if it is getting dark. Only the horses that moved should log out a message. Invoke the function.

//------------------------- Bonus -------------------------//

// Replace the ascii art at the top of the file with art representing your stable.
// Initialize a method on your horses that moves them inside if they are outside, and
// vice versa.