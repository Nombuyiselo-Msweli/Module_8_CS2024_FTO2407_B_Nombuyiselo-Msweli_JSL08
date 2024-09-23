// This one will be a little tricky. So check out this overview first: https://www.youtube.com/watch?v=sJ-c3BA-Ypo

// 1. Create a variable to store the singleton instance of the bank branch. "bankBranchInstance"
let bankBranchInstance = null; //will store the singleton instance of the BankBranch class.

// 2. Define a class called `BankBranch` for managing branch information.
class BankBranch {
// 3. In the `BankBranch` class:
//    - Create a constructor that takes `branchInfo` as a parameter.
//    - Inside the constructor, check if the `bankBranchInstance` variable is null (indicating no instance exists).
//    - If `bankBranchInstance` is null, create a new instance with the provided `branchInfo` and assign it to `bankBranchInstance`.
//    - Return the `bankBranchInstance` whether it's newly created or existing.
constructor(branchInfo) {
    // Check if bankBranchInstance is null (no instance exists)
    if (!bankBranchInstance) {
        this.branchInfo = branchInfo;  // Store branch info
        bankBranchInstance = this;  // Assign new instance to bankBranchInstance
    }
    
    // Return the existing or newly created instance
    return bankBranchInstance;
}

// 4. Add methods to the `BankBranch` class for managing branch-related information. For example, you can add a method like `getBranchInfo` to retrieve branch details.
getBranchInfo() {
    return this.branchInfo;
}
}
//NOTE NOTE NOTE
//Two instances, branchA and branchB, are created with different branch information.
//Despite passing different information, the second instance (branchB) still returns the original instance's branch info (branchA), demonstrating that both refer to the same object.

// 5. In the usage section:
// Create instances with different branch information
const branchA = new BankBranch({ name: "Main Branch", location: "City Center" });
const branchB = new BankBranch({ name: "Second Branch", location: "Suburb" });

// Retrieve branch information
console.log(branchA.getBranchInfo()); // Output: { name: "Main Branch", location: "City Center" }
console.log(branchB.getBranchInfo()); // Output: { name: "Main Branch", location: "City Center" }

// Verify that branchA and branchB refer to the same instance
console.log(branchA === branchB); // Output: true

// This pseudo-code provides a step-by-step explanation of how to implement the Singleton Pattern for managing a single instance of the `BankBranch` class throughout the application, ensuring that multiple instances refer to the same object.

// NOTES:
// This example demonstrates the Singleton pattern by creating a single instance of the `BankBranch` class.
// Even if we attempt to create another instance of the branch, we receive the original instance,
// ensuring that there is only one set of branch information throughout the application.

// - We define a `BankBranch` class that represents bank branch information.
// - We use the Singleton pattern to ensure that there is only one instance of the `BankBranch` class.
// - The `bankBranchInstance` variable is used to hold the single instance of the class.
// - When a new `BankBranch` instance is created, it checks if `bankBranchInstance` already exists.
//   If it does, it returns the existing instance; otherwise, it creates a new one.
// - The `getBranchInfo` method allows us to retrieve the branch information from the singleton instance.
// - We demonstrate the Singleton pattern by creating two instances (`branchA` and `branchB`) and show that they both point to the same instance,
//   ensuring that there is only one set of branch information throughout the application.
