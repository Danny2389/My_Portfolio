# Portfolio Website

<div align="center">

[![Visit Portfolio](https://img.shields.io/badge/Visit-Portfolio-blue?style=for-the-badge&logo=google-chrome)](https://svsdineshportfolio.netlify.app/)

![GitHub repo size](https://img.shields.io/github/repo-size/Danny2389/portfolio?color=yellow) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![Open Source Love svg2](https://badges.frapsoft.com/os/v2/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)

</div>

---

## 📖 Introduction
This is a fully responsive personal portfolio website built using **React.js**. It serves as a showcase of my skills, projects, and professional experience. The application features a modern, interactive user interface with smooth animations and a clean design.

## ✨ Features

-   **Responsive Design**: Fully responsive layout compatible with desktops, tablets, and mobile devices (powered by Bootstrap).
-   **Interactive UI**:
    -   Particle background effects using `react-tsparticles`.
    -   Dynamic text animations with `typewriter-effect`.
    -   Interactive tilt effects on project cards using `react-parallax-tilt`.
-   **Multi-Page Navigation**: Smooth client-side routing with `react-router-dom`.
    -   **Home**: Introduction and hero section.
    -   **Skillset**: Visual representation of technical skills and GitHub contribution calendar.
    -   **Projects**: Showcase of personal and professional projects using GitHub API/manual entries.
    -   **Resume**: Integrated PDF viewer to display and download my resume (`react-pdf`).
    -   **Contact**: Functional contact form integrated with **EmailJS**.
-   **GitHub Integration**: Displays real-time GitHub stats and contributions.

## 🛠 Tech Stack

| Category | Technologies |
| :--- | :--- |
| **Frontend** | React.js, React Router v6 |
| **Styling** | CSS3, Bootstrap 5, React Bootstrap |
| **Animations** | Framer Motion, Tilt.js, Typewriter Effect |
| **Utilities** | React PDF, React GitHub Calendar, React Icons |
| **Deployment** | Netlify / Vercel (Configured) |

## 🚀 Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

-   **Node.js** (v14 or higher recommended)
-   **npm** (Node Package Manager)
-   **Git**

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/Danny2389/portfolio.git
    cd portfolio
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

### Running the App

Start the development server:
```bash
npm start
```
The app will open automatically at `http://localhost:3000`.

### Building for Production

To create an optimized build for deployment:
```bash
npm run build
```

## 📂 Project Structure

```bash
src/
├── assets/         # Images, PDFs, and static assets
├── components/     # Reusable components (Navbar, Footer, Cards, etc.)
├── pages/          # Main page views (Home, Projects, Resume, etc.)
├── App.js          # Main application component & Routing logic
├── index.js        # Entry point
└── style.css       # Global styles and variables
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to check the [issues page](https://github.com/Danny2389/portfolio/issues).

## 📄 License

This project is licensed under the **ISC License** - see the [LICENSE](LICENSE) file for details.

## ✍️ Author

**Dinesh**
- GitHub: [@Danny2389](https://github.com/Danny2389)

---
<div align="center">
    <p>⭐️ Star this repo if you find it useful!</p>
</div>
