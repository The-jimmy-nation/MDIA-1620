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
// This is a template for your assignments and final project. You'll be setting up a stable and making
// sure it runs smoothly.
//
// Please do not create a new file for each assignment!
// Feel free to keep the headings (e.g.: "Variables"), but please delete any boilerplate
// comments. E.g.: those seen on lines 58 - 68, for example. They are usually providing directions. 
// (Your own comments, where necessary, are acceptable.)
//
// NOTE: UNLESS SPECIFIED, VARIABLE NAMING IS UP TO YOU. THERE SHOULD BE NO HARD-CODED
// NUMBERS OR STRINGS WHERE VARIBALES WOULD BE PREFERRED.

//------------------------- Seting up shop (Assignment 1) -------------------------//

// Store information about three horses in your stables.
// Each horse should have the following information associated with it:
//
// - the name of a horse at your stable
// - the age of the horse
// - what the horse likes to snack on
// - the cost to board the horse monthly
// - the fee for a late payment (monthly rate + 20%)
//
// Create a variable and use it to store the name of your stable.
// Create a variable and use it to store a message for visitors to the stable as a string. It should include the name of your stable.
// Create a variable and use it to store a message that monthly payment is late, and the amount owing. Include the name of one of your horses in the message.

//------------------------- First day (Assignment 2) -------------------------//

// Move the horses in your stables into objects, if they aren't already. Each horse should have its own object.
// (After you are done, your horse variables from Assignment 1 should be deleted)
//
// The horses should have the following properties:
// - name, nickname, favorite treat (string)
// - age, monthly rent (number)
// - location (boolean inside/outside)
// - two unique properties of your choice (use any primitive)

// Store the horses you've just created in a "horses" array.

// Fancy! Another horse wants to be stabled! Create a variable that stores an object
// literal of your new horse, and add it to your "horses" variable.

// Initialize new property to your horses: a boolean that allows you to check if your horse
// is hungry or not. Use dot notation.

// Create a variable that stores your total number of stalls.
// Create a function that logs out how many stalls are available, given how many horses you have in your stable.

// Create a function that logs out how much will an individual horse will owe if rent is
// paid late. Invoke the function.

// Create and invoke a function that returns (not logs) the nickname of a chosen horse. Log out
// the return value outside of the function.

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
    console.log(horse.name + " owes " + (horse.monthlyRent * 1.1));
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