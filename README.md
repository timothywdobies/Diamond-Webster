# Diamond Webster Equities & Securities

A clean, modern marketing website for Diamond Webster Equities & Securities, a holding company operating across five divisions: Equities & Securities, Umpiring, Attire, Sustainable Agriculture, and Offshore Wind Farms.

## Tech Stack

- **React** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **React Router** - Client-side routing

## Features

- Fully responsive design (mobile and desktop)
- Clean, minimal aesthetic with lots of white space
- Six main pages: Home, Divisions, About, Team, News, Contact
- Sticky header navigation
- News section with sustainability updates
- Contact form with validation

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone or navigate to the project directory:
   ```bash
   cd diamond-webster
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit the URL shown in the terminal (typically `http://localhost:5173`)

### Build for Production

To create a production-ready build:

```bash
npm run build
```

The built files will be in the `dist` directory.

To preview the production build locally:

```bash
npm run preview
```

## Deployment

This project can be easily deployed to Netlify:

### Deploy to Netlify

1. **Option 1: Drag and Drop**
   - Run `npm run build`
   - Drag the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)

2. **Option 2: Connect to Git**
   - Push your code to GitHub
   - Import your repository in Netlify
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`

3. **Option 3: Netlify CLI**
   ```bash
   npm install -g netlify-cli
   npm run build
   netlify deploy --prod
   ```

## Project Structure

```
diamond-webster/
├── src/
│   ├── components/       # Reusable components
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Layout.jsx
│   │   └── Section.jsx
│   ├── data/            # Static data
│   │   └── newsData.js
│   ├── pages/           # Page components
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Divisions.jsx
│   │   ├── Home.jsx
│   │   ├── News.jsx
│   │   └── Team.jsx
│   ├── App.jsx          # Main app with routing
│   ├── main.jsx         # Entry point
│   └── index.css        # Tailwind imports
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Routes

- `/` - Home page with hero, divisions preview, and news
- `/divisions` - Detailed overview of all five divisions
- `/about` - Company information and values
- `/team` - Leadership team profiles
- `/news` - News and sustainability updates
- `/contact` - Contact form

## Design System

### Colors
- Background: White (`bg-white`)
- Text: Dark gray (`text-slate-900`)
- Borders: Light gray (`border-slate-200`)
- Accent: Emerald (`text-emerald-700`)
- Buttons: Dark (`bg-slate-900`)

### Components
- Cards: Rounded corners, subtle shadows, hover effects
- Layout: Centered content with max-width of 5xl
- Typography: Clean sans-serif font

## Customization

### Adding News Items

Edit `src/data/newsData.js` to add or modify news items:

```javascript
export const newsItems = [
  {
    id: 1,
    title: 'Your news title',
    date: 'January 1, 2025',
    category: 'Sustainable Agriculture',
    summary: 'Brief description of the news item...'
  },
  // Add more items...
];
```

### Modifying Team Members

Edit the `teamMembers` array in `src/pages/Team.jsx`.

### Changing Colors

Edit `tailwind.config.js` to customize the color scheme or extend Tailwind's default configuration.

## License

Private - Diamond Webster Equities & Securities

## Contact

For questions or support, contact: info@diamondwebster.com
