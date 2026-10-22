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
// ------------------------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------------------------- //
//                               *+-+%.       .%==#=                                       
//                             :.    .-.     =:   ..*                                      
//                             -    .:-#::...=    ...@                                     
//                             *@+..         -     ..%                                     
//                         +*.                    ...:#+                                   
//                      :%                          .....@.                                
//                    -*                              .....#.                              
//                   %                                  ....=+                             
//                 :+                                    .....#                            
//                =-                                      .....*.                          
//               -=                                         ....*.                         
//              .*                                           ....*                         
//              *                                             ....#                        
//             .- .%@-                                        .....@                       
//          =@+   :@@#          :@@@                           .....%                      
//      .#=                      :=.                            ....:-                     
//    :#      ....                                               ....#                     
//   #.    +@@@@@@@@-                                             ....@                    
//  #      %@@@@@@@@+                                             ....:=                   
// *         .::::.                                                ....#.                  
// #                                                               .....#                  
// #                                                                ....=-                 
// #                                                                .....%                 
// +.                                                                .....+                
//  #                                                                .....*.               
//  .#                                                                .....*               
//    #                                                               .....+:              
//     +:        =#=#*                                                 .....#              
//       @.                                                            .....+:             
//         #.                                                          ......#             
//           *                                                          .....+.            
//             -                                                        ......#            
//             +                                                         .....+            
//            --                                                         .....:*           
//            *                                                          ......#           
//           #.                                                           .....--          
//          -:                                                            ......@          
//          *                                                             ......+          
//         %.                                                      ..:     .....:*         
//        -.                                 -                     ..*     ......%         
//        #                                  -                     ..%     ......-.        
//       @.                                  =                     ..@      ......%        
//      .-                                   +                    ...@      ......#        
//      @                                    +                    ...@      ......::       
//     =.                                    *                    ...%       ......@       
//    .#                                     *                    ...#       ......%       
//    *                                      *                    ...=        .....::      
//   :=                                      *                   ...:.        ......%      
//   #                                       *                   ...*.        ......@      
//  --                                       *                   ...@         ......-.     
//  *                                        *                  ....#          ......+     
//  #                                        *                  ...:.          ......@     
// --                                        +.                 ...%           ......#.    
// +.                                        =:                ...:#            .....=:    
// *                                         :=                ...+             ......=    
// *                                          *               ....@             ......+    
// #                                          *               ...-.             ......#    
// #                                          +.             ....%              ......%    
// *                                          :=             ...=:              ......%-   
// *                                           *            ....%               ......%.:# 
// =:                                          --           ...+.               ......#:..*
//  *                                           #          ...:*                ......#:..*
//  *                                           .#   =     ...#                .......#:..*
//  :=                                           --  #    #..#                 .......%:.+-
//   #                                            =:.*    *:#                  .......%.#. 
//   :=                                            .@%. .=@.                   .......#    
//    #                                                                        ......:-    
//     #                                                                      .......#.    
//     :=                                                                     .......*     
//      :-                                                                   .......*.     
//       .=                                                                  .......#      
//         #                                                                .......@       
//          %.                                                             .......%        
//           :*                                                           .......%         
//            +++.                                                       .......%          
//            :- -#                                                    ........%           
//             =   .#:                                                .......:#            
//             *      :@:                                            .......-*             
//             *         .#+.                                        ......+-              
//             *.             -%:                                   ......:-               
//             :-                 .===:                             ......+                
//              =                     ..*                           ......*                
//              =                     ..@.                          ......*                
//              ::                    ..:-                          ......*                
//               *                    ...%.                         ......*                
//               -=                   ....+                         .....:+                
//                *                   ....%.                        .....=-                
//                +.                   ....=                        .....#.                
//               =-                    ....*                        .....%                 
//               *  :.                 .....-                       .....+                 
//               :+.%      .=          .....=                      .....*.                 
//                  -==:   -:         .....*    -          .       ....:=                  
//                          .-+*#%%@@@@@@%##.   #          +      ....-=                   
//                                           =##@+=--:::...#.:::-+*#%*                     
// ------------------------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------------------------- //
//
// Stable.js Assignment: 
// Create an array of horse objects.
const horses = [
    {
        name: "Thunder",
        age: 6,
        snack: "Carrots",
        monthlyCost: 1350
    },
    {
        name: "Lightning",
        age: 4,
        snack: "Apples",
        monthlyCost: 1200
    },
    {
        name: "Storm",
        age: 8,
        snack: "Pancakes",
        monthlyCost: 1500
    }
];

// Create the stable object.
const stable = {
    name: "IceBear Stables",
    horses: horses
};

// Store a reference to each horse.
const firstHorse = stable.horses[0];
const secondHorse = stable.horses[1];
const thirdHorse = stable.horses[2];

// Calculate each horse's total with a 20% late fee.
firstHorse.latePaymentTotal = firstHorse.monthlyCost * 1.2;
secondHorse.latePaymentTotal = secondHorse.monthlyCost * 1.2;
thirdHorse.latePaymentTotal = thirdHorse.monthlyCost * 1.2;

// Display each horse's information.
console.log(
    "Horse name: " + firstHorse.name +
    ", age: " + firstHorse.age +
    ", snack: " + firstHorse.snack +
    ", monthly cost: $" + firstHorse.monthlyCost +
    ", late payment total: $" + firstHorse.latePaymentTotal
);

console.log(
    "Horse name: " + secondHorse.name +
    ", age: " + secondHorse.age +
    ", snack: " + secondHorse.snack +
    ", monthly cost: $" + secondHorse.monthlyCost +
    ", late payment total: $" + secondHorse.latePaymentTotal
);

console.log(
    "Horse name: " + thirdHorse.name +
    ", age: " + thirdHorse.age +
    ", snack: " + thirdHorse.snack +
    ", monthly cost: $" + thirdHorse.monthlyCost +
    ", late payment total: $" + thirdHorse.latePaymentTotal
);

// Display a welcome message.
const stableMessage = "Welcome to " + stable.name +
    "! We have a variety of horses for you to meet and enjoy!";

console.log(stableMessage);

// Display a late payment notice for the first horse.
const latePaymentMessage =
    "Hello there, this is a late payment notice for " + firstHorse.name +
    ". The total amount due is $" + firstHorse.latePaymentTotal +
    ". Please make your payment as soon as possible to avoid any further fees, thank you!";

// Console log the late payment message.
console.log(latePaymentMessage);

//------------------------- End of Assignment 1 -------------------------//