<br />
<p align="center">
  <div align="center">
    <img height="150" src="./public/tickitz.svg" alt="recipe-mama" border="0"/>
  </div>
  <h3 align="center">Tickitz</h3>
  <p align="center">
    <a href="https://github.com/abubakar-adeni/tickitz"><strong>Explore the docs »</strong></a>
    <br />
    <a href="https://tickitz-kappa.vercel.app/">View Demo</a>
  </p>
</p>

## Table of Contents

- [About The Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Screenshots](#screenshots)
- [Related Project](#related-project)

# About The Project

Recipe Mama is a recipe website that makes it easy for users to access food recipes with a delightful experience. Users can create an account and post their own recipes, and they can also bookmark their favorite recipes.

## Built With

These are the libraries and service used for building this backend API

- ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
- ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
- ![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
- ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
- ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
- [Sweetalert2](https://sweetalert2.github.io)

# Getting Started

## Prerequisites

You'll need these programs installed before proceeding to installation

- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/en/download)

This project requires [pijar-food-be](https://github.com/abubakar-adeni/tickitz-be) to function properly, follow the steps provided in the readme to install and run the backend API

## Installation

Follow this steps to run the server locally

1. Clone this repository

```sh
git clone https://github.com/abubakar-adeni/tickitz.git
```

2. Change directory to tickitz

```sh
cd tickitz
```

3. Install all of the required modules

```sh
npm install
```

4. Create and configure `.env.local` file in the root directory, example env are provided in [.env.local.example](./.env.local.example)

```env
NEXT_PUBLIC_HOST=[ Backend URL ]
```

5. Run this command to run the server in development environment

```sh
npm run start
```

- Run this command to build this website into production ready

```sh
npm run build
```

# Screenshots

<img width="840" src="./documentation/all-devices-black.png" border="0" alt="Landing Page" />
<br>

<table>
 <tr>
    <td><img width="350px" src="./documentation/login.png" border="0" alt="Login" /></td>
    <td> <img width="350px" src="./documentation/register.png" border="0"  alt="Register" /></td>
  </tr>
  <tr>
    <td>Login Page</td>
    <td>Register Page</td>
  </tr>
  <tr>
    <td><img width="350px" src="./documentation/nowshowing.png" border="0" alt="Now Showing Movie" /> </td>
    <td><img width="350px" src="./documentation/landing-page.png" border="0" alt="Landing Page" /> </td>
  </tr>
   <tr>
    <td>Now Showing Page</td>
    <td>Landing Page</td>
  </tr>
  <tr>
    <td><img width="350px" src="./documentation/details-movie.png" border="0" alt="Details Movie" /> </td>
    <td><img width="350px" src="./documentation/profile.png" border="0" alt="Profile" /> </td>
    </tr>
  <tr>
    <td>Details Movie Page</td>
    <td>Profile Page</td>
  </tr>
  <tr> 
 <td><img width="350px" src="./documentation/seat.png" border="0" alt="seat" /> </td>
     <td><img width="350px" src="./documentation/payment.png" border="0" alt="payment" /> </td>
    </tr>
  <tr>
    <td>Seat Page</td>
    <td> Payment Page</td>
      <tr> 
     <td><img width="350px" src="./documentation/ticket.png" border="0" alt="payment" /> </td>
    </tr>
  <tr>
    <td>Ticket result Page</td>
</table>

# Related Project

:rocket: [`Frontend Recipe Food`](https://github.com/abubakar-adeni/food-recipev1)

:rocket: [`Backend Recipe Food`](https://github.com/abubakar-adeni/backend-recipes)

:rocket: [`Demo Recipe Food`](https://food-recipev1.vercel.app/)
