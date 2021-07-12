const clickButton = () => {
  let hamBurgerBtn = document.querySelector(".openSidbarBtn");
  document.querySelector(".mainInnerWrapper").classList.toggle("active");
};

const signup = () => {
  let fullName = document.getElementById("fullName");
  let phoneNumber = document.getElementById("phoneNumber");
  let address = document.getElementById("completeAddress");
  let email = document.getElementById("emailAddress");
  let password = document.getElementById("password");
  let errorMessage = document.getElementById("errorMessage");

  user = {
    fullName: fullName.value,
    phoneNumber: phoneNumber.value,
    address: address.value,
    email: email.value,
    password: password.value,
  };

  // let { fullName1, phoneNumber1, address1, email1, password1 } = user;
  // console.log(user);

  let users = JSON.parse(localStorage.getItem("users")) || [];

  // get user index value
  let userIndex = users.findIndex(function (val) {
    return val.email.toLowerCase() === user.email.toLowerCase();
  });

  if (userIndex === -1) {
    // this user is not exist
    users.push(user);

    // store in local storage
    localStorage.setItem("users", JSON.stringify(users));

    // redirect to login page
    location.href = "login.html";
  } else {
    errorMessage.style = "display: block";
    errorMessage.innerHTML = user.email + " already exists";
  }

  // clear errorMessage state
  setTimeout(() => {
    errorMessage.style = "display: none";
  }, 3000);
};

// LOGIN FUNCTION

const login = () => {
  let email = document.getElementById("emailAddress");
  let password = document.getElementById("password");
  let errorMessage = document.getElementById("errorMessage");

  user = {
    email: email.value,
    password: password.value,
  };
  // console.log(user);

  let users = JSON.parse(localStorage.getItem("users")) || [];

  // get user index value
  let currentUser = users.find(function (val) {
    return (
      val.email.toLowerCase() === user.email.toLowerCase() &&
      val.password === user.password
    );
  });

  if (currentUser) {
    localStorage.setItem("user", JSON.stringify(currentUser));

    // redirect to index package
    location.href = "index.html";
  } else {
    errorMessage.style = "display: block";
    errorMessage.innerHTML = `Invalid user name or password`;
  }

  // clear errorMessage state

  setTimeout(() => {
    errorMessage.style = "display: none";
  }, 3000);
};

//USER LOGOUT FUNCTION

const userLogout = () => {
  let errorMessage = document.getElementById("errorMessage");
  localStorage.removeItem("user");

  errorMessage.style = "display: block";
  errorMessage.innerHTML = `See you soon`;

  setTimeout(() => {
    location.href = "login.html";
  }, 2000);
};

// CURRENT USER LOGED IN

const currentUserLogedIn = () => {
  let currentUser = document.getElementById("userLoggedIn");
  let userPhoneNumber = document.getElementById("userPhone");
  let userAddress = document.getElementById("userAddress");
  let userEmail = document.getElementById("userEmail");
  let user = JSON.parse(localStorage.getItem("user"));
  currentUser.innerHTML = user.fullName;
  userPhoneNumber.innerHTML = user.phoneNumber;
  userAddress.innerHTML = user.address;
  userEmail.innerHTML = user.email;
};

// CARD ADD FUNCTION

const cardAdd = () => {
  let titleInput = document.getElementById("title");
  let descriptionInput = document.getElementById("description");

  const cardDetails = {
    titleInput: titleInput.value,
    descriptionInput: descriptionInput.value,
  };

  let cardRow = document.getElementById("cardRow");

  let cardColum = document.createElement("div");
  cardColum.setAttribute("class", "col-xs-12 col-sm-6 col-md-3");
  cardColum.setAttribute("id", "cardColum");

  let cardWrapper = document.createElement("div");
  cardWrapper.setAttribute("class", "card mt-4");

  let cardImg = document.createElement("img");
  cardImg.src = "assets/images/cardimg.svg";
  cardImg.setAttribute("class", "card-img-top");

  let cardBody = document.createElement("div");
  cardBody.setAttribute("class", "card-body");

  let cardTitle = document.createElement("h5");
  cardTitle.setAttribute("class", "card-title");
  cardTitle.innerHTML = cardDetails.titleInput;

  let cardDescription = document.createElement("p");
  cardDescription.setAttribute("class", "card-text");
  cardDescription.innerHTML = cardDetails.descriptionInput;

  let cardLink = document.createElement("a");
  cardLink.setAttribute("class", "btn btn-primary");
  cardLink.innerHTML = "Read More";

  let cardRemoveButton = document.createElement("button");
  cardRemoveButton.setAttribute("class", "btn btn-primary");
  cardRemoveButton.setAttribute("data-toggle", "modal");
  cardRemoveButton.setAttribute("data-target", "#exampleModal");
  cardRemoveButton.innerHTML = "Delete Card";

  cardRow.appendChild(cardColum);
  cardColum.appendChild(cardWrapper);
  cardWrapper.appendChild(cardImg);
  cardWrapper.appendChild(cardBody);
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardDescription);
  cardBody.appendChild(cardLink);
  cardBody.appendChild(cardRemoveButton);
};

const cardRemove = () => {
  let deleteModal = document.getElementById("cardColum");
  deleteModal.remove();
};

// promises

// const inputAlert = () => {
//   const inputValue = document.getElementById("clickInput").value;
//   alert(inputValue);
// };

const userabcd = {
  name: "zubair",
  number: 1233455,
  address: "bilal colony",
};

let { name, number, address } = userabcd;

console.log(
  `I am ${name} and my number is ${number} and my address is ${address}`
);

// de structring
// temp ltrl
// fate arrow function

const multiplication = (a, b) => {
  const inputValue1 = document.getElementById("clickInput1").value;
  const inputValue2 = document.getElementById("clickInput2").value;
  const result = inputValue1 * inputValue2;
  alert(result);
};
