  
  // ATQA AWAN 
  // 28-may- 2024


//- ASSIGNMENT NO 01 ----------------------Building Your Friend List--------------------
//1. Define an object named people containing an empty array called friends.

let people ={
    friends:[]
}

//2. Create three separate objects, each representing a friend, with properties like firstName,
//lastName, and optionally id.

let friend1 ={
    firstName: "MAHAM",
    LastName : "FAISAL",
    Id: 124
};

let friend2 ={
   firstname : "AISHA",
   LastName : "HANIF",
   Id: 223
};

let friend3 ={
   firstName : "FATIMA",
   LastName : "SUJHAT",
   Id : 339
};

//3. Add these friend objects to the friends array within the people object.

let peopleadd ={
    friends:[friend1,friend2,friend3]
};

//4. Output the entire people object to the console, displaying your information and your
//friend list.
       console.log (peopleadd);

//  ASSIGNMENT NO 02 ----------------------Manipulating an Array: Rearranging Words-----------------
//1. Scrambled Array:
//  o Start with an array of elements in a scrambled order, like:               
//• Use methods like split(), join(), push(), pop(), shift(), and unshift() to:
//o Convert non-strings (booleans, numbers) to strings if needed.
//o Split elements into character arrays (optional).
//o Rearrange characters or elements in the desired order (modify original array or
//create temporary arrays).

   const scrambledArray = ["student", "of",true, 123, "am", "a", "GIAIC", "I"];
    
   scrambledArray.pop();
   scrambledArray.shift();
   scrambledArray.unshift("I");
   scrambledArray.splice (1,3);
   scrambledArray.splice(2,3,"student","of");
   scrambledArray.splice(4,1, "GIAIC");
      console.log(scrambledArray.join(""));
    
    
    // ASSIGNMENT NO 03-------------------------Company Product Catalog------------
       
   // 1. Define an array named inventory to store product information.
      
        const inventory =[];

   //      2. Create three separate objects, each representing a product, with properties like name,
   //  model, cost, and quantity.
      
         let product1 ={
             name : "FAN",
             model : "abc123",
             cost : 5000,
             quantity : 2,

         };
           
         let product2 ={
            name : "FRIDGE",
            model :"YXC234",
            cost : 50000,
            quantity :4
         };

          let product3 ={
            name : "DESPENSER",
            model : "WER456",
            cost :   14000,
            quantity : 2,

          };
            
   //  3. Add these product objects to the inventory array using an appropriate array method.    
      
        const inventoryadd=[product1,product2,product3];
           
  //  4. Access and log the quantity property of a specific product (e.g., third product) in the
    //  inventory array.
      
        console.log (inventoryadd [2].quantity);
          
 //  5. Explore adding and accessing more elements within the inventory array to understand
 //  how to manage product data.
       
        let product4 ={
            name :"IRON",
            model : "QSE678",
            cost : 7000,
            quantity : 4

        }
   
       inventoryadd.push(product4);    
           
           console.log(inventoryadd[1].name);
   
// ASSIGNMENT NO 04 --------------------------------Student List Organizer------------
//1. Student Data: The provided code defines an interface named Student that describes
//student information like name, senior status (true/false), and whether they've completed
//their assignments (true/false).
//o Imagine this as a template for organizing student details.
   
     type student ={
         name : string,
         seniorstatus: boolean;
         completeAssignment :boolean;
     };

     //   ========student data =========
      
      let Student1 : student[]=[

        {name:"atqa", seniorstatus:true , completeAssignment:true},
        {name:"qirat", seniorstatus:false, completeAssignment:true},
        {name:"areesh", seniorstatus:false, completeAssignment:false},
        {name:"arham", seniorstatus:true ,completeAssignment:true},
      ]
//Find Senior Students with Assignments (Optional):
// o The code (not shown here) has a function that might find students who are seniors
// and have completed their assignments.
// o Can you guess why this information might be helpful?

      function findSeniorStudentsWithAssignments(student1: student[]): student[]{
        return student1.filter(student2 => student2.seniorstatus && student2.completeAssignment);
      }

          const seniorStudentsWithAssignments = findSeniorStudentsWithAssignments(Student1);
        console.log("Senior Students with Assignments :",seniorStudentsWithAssignments);
    
     
        function removeIncompleteAssignments(Student1: student[]): student[] {
          return Student1.filter(student2 => student2.seniorstatus && student2.completeAssignment);  
        }

        const updatedClassList = removeIncompleteAssignments(Student1);
        console.log("Updated Class List :",updatedClassList);
        
