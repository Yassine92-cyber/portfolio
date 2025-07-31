# Dr. Yassine Kaddouri - Portfolio Hero

A responsive, full-screen Hero component built with React and Tailwind CSS featuring animated typewriter effects and modern design.

## Features

- **Responsive Design**: Mobile-first approach with breakpoints for all screen sizes
- **Animated Typewriter**: Uses `react-simple-typewriter` for dynamic tagline animation
- **Smooth Animations**: Framer Motion for entrance animations and hover effects
- **Modern UI**: Clean design with gradient backgrounds and glass morphism effects
- **CTA Buttons**: Interactive "View CV" and "Contact Me" buttons
- **Typography**: Uses Inter font for clean, professional appearance

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Customization

### Update Personal Information
Edit the `src/components/Hero.jsx` file to update:
- Your name and title
- Typewriter phrases
- CV link and contact email

### Styling
- Modify colors in `src/index.css` for the gradient background
- Adjust animations in `tailwind.config.js`
- Update button styles in the Hero component

## Technologies Used

- React 18
- Tailwind CSS
- Framer Motion
- react-simple-typewriter
- Inter Font (Google Fonts)

## Project Structure

```
src/
├── components/
│   └── Hero.jsx          # Main Hero component
├── App.js               # Main App component
├── index.js             # React entry point
└── index.css            # Global styles and Tailwind imports
```

## License

MIT License 