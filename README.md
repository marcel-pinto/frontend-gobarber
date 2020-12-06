[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/marcel-pinto/frontend-gobarber">
    <img src="./.github/logo.svg" alt="Logo"height="150">
  </a>

  <h3 align="center">GoBarber</h3>

  <p align="center">
    The best way to get experts hands to make your style
    <br />
    <a href="https://github.com/marcel-pinto/frontend-gobarber">View Demo</a>
    ·
    <a href="https://github.com/marcel-pinto/frontend-gobarber/issues">Report Bug</a>
    ·
    <a href="https://github.com/marcel-pinto/frontend-gobarber/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![GoBarber cover][gobarber-cover]]()
Gobarber is a marketplace developed in the bootcamp GoStack. This application consists of two clients that consumes an [restfull api](https://github.com/marcel-pinto/backend-go-barber). The [web client](https://github.com/marcel-pinto/frontend-gobarber) is build for the providers, where the barbers can check their daily schedule. The [mobile client](https://github.com/marcel-pinto/mobile-go-barber) is build for the barbers' clients. There, the user can book an appointement and check the daily and monthly availability of all barbers.

### Built With

- [Typescript](https://www.typescriptlang.org/)
- [ReactJS](https://reactjs.org/)
- [StyledComponents](https://styled-components.com/)

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

First, you will need NodeJS and Yarn, both with versions:

[NodeJS](https://nodejs.org/en/) >= v12.18.3

[Yarn](https://classic.yarnpkg.com/en/docs/install/#debian-stable) >= 1.22.10

Next, you'll need the api. Go to the [backend repository](https://github.com/marcel-pinto/backend-go-barber) and follow the getting started instructions to get the api server up and running. After that, follow the installation instructions bellow.

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/marcel-pinto/frontend-gobarber.git
    ```
2.  Go to the project folder
    ```sh
    cd frontend-gobarber
    ```
3.  Install the dependencies

    ```sh
    yarn
    ```

4.  Start the React development server

    ```sh
    yarn start
    ```

    <!-- USAGE EXAMPLES -->

## Usage

You can create an account by clicking in "Criar conta"
[![Create user screenshot][create-user-screenshot]]()
After creation you will be redirected to the login page
[![Login screenshot][login-screenshot]]()
In the logged area, you have access to all your scheduled appointments. Use the calendar on the right side to check other days.

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/marcel-pinto/frontend-gobarber/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

Made with 🧡 by [Marcel Pinto](https://github.com/marcel-pinto)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[gobarber-cover]: ./.github/cover.png
[login-screenshot]: ./.github/login.gif
[create-user-screenshot]: ./.github/create-account.gif
[forks-shield]: https://img.shields.io/github/forks/marcel-pinto/frontend-gobarber?color=%23ff9000&style=for-the-badge
[forks-url]: https://github.com/marcel-pinto/frontend-gobarber/network/members
[stars-shield]: https://img.shields.io/github/stars/marcel-pinto/frontend-gobarber?color=%23ff9000&style=for-the-badge
[stars-url]: https://github.com/marcel-pinto/frontend-gobarber/stargazers
[issues-shield]: https://img.shields.io/github/issues/marcel-pinto/frontend-gobarber?color=%23ff9000&style=for-the-badge
[issues-url]: https://github.com/marcel-pinto/frontend-gobarber/issues
[license-shield]: https://img.shields.io/github/license/marcel-pinto/frontend-gobarber?color=%23ff9000&style=for-the-badge
[license-url]: https://github.com/marcel-pinto/frontend-gobarber/blob/master/LICENSE.txt
