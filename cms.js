Here's an example of a JavaScript code that meets the criteria you mentioned. The code creates a Customer Management System, which includes features such as creating and managing customer profiles, recording purchases, and generating reports.

```
// cms.js - Customer Management System

// Customer class
class Customer {
  constructor(name, email, phone) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.id = Math.random().toString(36).substring(2, 15);
  }
}

// CMS class
class CMS {
  constructor() {
    this.customers = [];
  }
  
  // Create new customer profile
  createCustomer(name, email, phone) {
    const newCustomer = new Customer(name, email, phone);
    this.customers.push(newCustomer);
    console.log('New customer profile created!');
  }
  
  // Retrieve customer by ID
  getCustomerById(id) {
    for (const customer of this.customers) {
      if (customer.id === id) {
        return customer;
      }
    }
    return null;
  }
  
  // Record purchase for customer
  recordPurchase(customerId, item, price) {
    const customer = this.getCustomerById(customerId);
    if (customer) {
      if (!customer.purchases) {
        customer.purchases = [];
      }
      customer.purchases.push({ item, price });
      console.log(`Purchase recorded for customer ${customer.name}`);
    } else {
      console.log('Customer not found!');
    }
  }
  
  // Generate report for customer purchases
  generateReport(customerId) {
    const customer = this.getCustomerById(customerId);
    if (customer) {
      console.log(`Report for customer ${customer.name} (ID: ${customer.id}):`);
      console.log('-----');
      if (customer.purchases) {
        let totalAmount = 0;
        for (const purchase of customer.purchases) {
          console.log(`Item: ${purchase.item}`);
          console.log(`Price: $${purchase.price.toFixed(2)}`);
          console.log('-----');
          totalAmount += purchase.price;
        }
        console.log(`Total Amount: $${totalAmount.toFixed(2)}`);
      } else {
        console.log('No purchases recorded.');
      }
      console.log('-----');
    } else {
      console.log('Customer not found!');
    }
  }
}

// Usage example

const customerManagementSystem = new CMS();

customerManagementSystem.createCustomer('John Doe', 'john.doe@example.com', '555-1234');
customerManagementSystem.createCustomer('Jane Smith', 'jane.smith@example.com', '555-5678');

customerManagementSystem.recordPurchase(customerManagementSystem.customers[0].id, 'Product A', 25.99);
customerManagementSystem.recordPurchase(customerManagementSystem.customers[0].id, 'Product B', 19.99);
customerManagementSystem.recordPurchase(customerManagementSystem.customers[1].id, 'Product C', 9.99);
customerManagementSystem.recordPurchase(customerManagementSystem.customers[1].id, 'Product D', 14.99);

customerManagementSystem.generateReport(customerManagementSystem.customers[0].id);
customerManagementSystem.generateReport(customerManagementSystem.customers[1].id);
```

This code is an implementation of a Customer Management System (CMS), which includes several classes and methods to manage customer profiles, record purchases, and generate reports based on customer activity. It demonstrates the usage of classes, constructors, arrays, loops, conditional statements, and more.