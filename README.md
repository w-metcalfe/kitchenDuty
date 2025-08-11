# Kitchen Duty Calendar

A modern web application for tracking kitchen cleaning responsibilities on a weekly alternating basis between Giant and Take 5.

## Features

- **Monthly Calendar View**: Clean, responsive calendar interface showing the current month
- **Weekly Alternating Responsibilities**: Automatically alternates between Giant and Take 5 every week
- **Visual Indicators**: Each day shows a logo (G for Giant, T for Take 5) indicating who is responsible
- **Today's Responsibility**: Prominently displays who is responsible for today's kitchen duty
- **Responsibility List**: Clear checklist of all kitchen cleaning tasks
- **Year Navigation**: Browse through different months and years
- **Responsive Design**: Works on desktop and mobile devices

## How It Works

The calendar automatically calculates responsibilities based on a weekly rotation:
- Week 1: Giant
- Week 2: Take 5
- Week 3: Giant
- Week 4: Take 5
- And so on...

The rotation starts from January 1, 2024, with Giant being responsible for the first week.

## Kitchen Duties

When it's your turn, you are responsible for:
- Wipe counters and tables
- Empty the dishwasher and load any dirty dishes
- Clear and wipe the sink
- Put things back where they belong
- Toss any trash or recycling

## Usage

1. Open `index.html` in any modern web browser
2. The calendar will automatically show the current month
3. Use the left/right arrow buttons to navigate between months
4. Today's date is highlighted with a special border
5. Each day shows a logo indicating responsibility (G for Giant, T for Take 5)
6. The top section shows who is responsible for today
7. The right sidebar lists all kitchen cleaning responsibilities

## Technical Details

- Built with vanilla HTML, CSS, and JavaScript
- No external dependencies required
- Responsive design with CSS Grid and Flexbox
- Modern CSS features including gradients, shadows, and backdrop filters
- Clean, maintainable code structure

## Browser Support

Works in all modern browsers that support:
- CSS Grid
- CSS Flexbox
- ES6 Classes
- CSS Custom Properties

## File Structure

```
kitchenDuty/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Customization

To modify the rotation or add more people:
1. Edit the `startWeek` variable in `script.js`
2. Modify the `getResponsibilityForDate` method
3. Update the CSS classes and colors as needed
4. Adjust the responsibility list in `index.html`

## Getting Started

Simply open `index.html` in your web browser to start using the calendar!
# kitchenDuty
