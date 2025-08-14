# 🧮 Calculator App - Frontend Mentor Challenge

A fully functional and responsive calculator application with **three different themes** built using **HTML, SCSS, and JavaScript**.  
This project is a solution to the [Frontend Mentor Calculator app challenge](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29) — designed to improve front-end skills by building interactive and user-friendly projects.

> 📅 **Note:** This is an old project built on **Monday, ‎‎February 20, 2023** as part of my early front-end learning journey.

---

## 📸 Screenshots

### 🖥️ Desktop View – Theme 1

![Desktop Preview Theme 1](/screencapture-calculator-app-theme-one.png)

### 🖥️ Desktop View – Theme 2

![Desktop Preview Theme 2](/screencapture-calculator-app-theme-two.png)

### 🖥️ Desktop View – Theme 3

![Desktop Preview Theme 3](/screencapture-calculator-app-theme-there.png)

---

## 🛠️ Built With

- **HTML5** – Semantic markup for structure
- **SCSS (Sass)** – Modular styles, variables, and mixins for cleaner CSS
- **CSS3** – Responsive design and grid layout
- **JavaScript (Vanilla JS)** – Logic for calculations and theme switching
- **Font Awesome** – For icons in UI enhancements
- **Google Fonts** – [League Spartan](https://fonts.google.com/specimen/League+Spartan) for typography

---

## 📂 Folder Structure

```
Calculator-app/
├── images/
│   └── favicon-32x32.png
├── Css/
│   ├── style.css
│   └── style.css.map
├── Sass/
│   ├── style.scss
│   ├── \_breakpoints.scss
│   ├── \_Custom-Scrollbars-&-Selection-color.scss
│   └── \_containerScreen.scss
├── Scripts/
│   └── app.js
├── index.html
├── screencapture-calculator-app-theme-one.png
├── screencapture-calculator-app-theme-two.png
├── screencapture-calculator-app-theme-there.png
└── README.md

```

---

## 📋 Features

- 🎨 **Three distinct themes** – Users can toggle between three color schemes instantly
- 🔢 **Full calculator functionality** – Addition, subtraction, multiplication, division, and decimal support
- ⌫ **Delete button** – Removes the last entered digit
- 🔄 **Reset button** – Clears all inputs and resets the calculator
- 🖥️ **Responsive layout** – Works seamlessly across desktop, tablet, and mobile devices
- 💡 **Clean SCSS architecture** – Modular structure for scalability
- 🖱️ **Interactive UI effects** – Button press animations for a realistic feel
- 📜 **Custom scrollbar & text selection styling** – For a polished and modern experience

Here’s a more visually appealing and well-structured version of your section in English:

---

## ⚙️ How It Works

1. 🎨 **Theme Switching**

   - Implemented using radio buttons and JavaScript to update the `<body>` element’s `id`.
   - Applies different SCSS theme styles for a smooth visual change.

2. ➗ **Calculation Logic**

   - Stores **previous** and **current** operands.
   - Handles all basic mathematical operations based on user input.
   - Dynamically updates the display after each interaction.

3. 📱 **Responsive Design**

   - Uses SCSS media queries from `_breakpoints.scss` for various screen sizes.
   - Automatically adjusts grid button sizes for smaller devices.

4. ✨ **Custom Styling**

   - `_Custom-Scrollbars-&-Selection-color.scss` → Styles scrollbars & text selection.
   - `_containerScreen.scss` → Ensures container responsiveness across devices.

---

## 🚀 Live Demo

🔗 [View Live Project](https://maher-elmair.github.io/Calculator-app/)

---

## 🧑‍💻 Author

**Maher Elmair**

📫 [maher.elmair.dev@gmail.com](mailto:maher.elmair.dev@gmail.com)  
🔗 [LinkedIn](https://www.linkedin.com/in/maher-elmair-831042237)  
❤️ Made with passion by [Maher Elmair](https://maher-elmair.github.io/My_Website)

---

## 🙏 Acknowledgments

- 🎯 Challenge by [Frontend Mentor](https://www.frontendmentor.io/)
- 🎨 Design inspired by the original mockups provided in the challenge
- 💻 Built with dedication and attention to detail

---