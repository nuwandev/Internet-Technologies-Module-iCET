const page = document.body.dataset.page;

if (page == "customers") {
  const customers = JSON.parse(localStorage.getItem("customers")) || [];

  if (customers.length !== 0) {
    reloadCustomerDetails();
  }

  document
    .querySelector('.add-customer-form input[type="submit"]')
    ?.addEventListener("click", () => {
      const name = document.querySelector(
        '.add-customer-form input[type="text"]'
      ).value;
      const email = document.querySelector(
        '.add-customer-form input[type="email"]'
      ).value;
      const phone = document.querySelector(
        '.add-customer-form input[type="tel"]'
      ).value;

      customers.push({ name, email, phone });

      Swal.fire({
        title: "Success!",
        text: "Customer Added successfully",
        icon: "success",
      });

      reloadCustomerDetails();
      localStorage.setItem("customers", JSON.stringify(customers));
    });

  function reloadCustomerDetails() {
    const informationContainer = document.querySelector(".customersInfo");

    let body = `
  <tr>
        <td>Name</td>
        <td>Email</td>
        <td>Phone</td>
      </tr>`;

    customers.forEach((customer) => {
      body += `
    <tr>
        <td>${customer.name}</td>
        <td>${customer.email}</td>
        <td>${customer.phone}</td>
      </tr>`;
    });

    informationContainer.innerHTML = body;
  }
}

if (page == "items") {
  const items = JSON.parse(localStorage.getItem("items")) || [];

  if (items.length !== 0) {
    reloadItemsTable();
  }

  document.querySelector("#addItemBtn")?.addEventListener("click", () => {
    const name = document.querySelector("#name").value;
    const qty = document.querySelector("#qty").value;
    const price = document.querySelector("#price").value;
    const desc = document.querySelector("#desc").value;

    items.push({ name, qty, price, desc });

    Swal.fire({
      title: "Success!",
      text: "Item Added successfully",
      icon: "success",
    });

    reloadItemsTable();
    localStorage.setItem("items", JSON.stringify(items));
  });

  function reloadItemsTable() {
    let body = `
  <tr>
        <td>Name</td>
        <td>Quantity</td>
        <td>Price</td>
        <td>Description</td>
      </tr>`;

    items.forEach((item) => {
      body += `
    <tr>
        <td>${item.name}</td>
        <td>${item.qty}</td>
        <td>${item.price}</td>
        <td>${item.desc}</td>
      </tr>
    `;
    });

    document.querySelector(".itemInfo").innerHTML = body;
  }
}
