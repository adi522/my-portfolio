# Custom Cursor with Trace Effect

This project demonstrates a custom mouse cursor with a smooth movement and a trace effect that follows the cursor when the user moves it. The cursor increases in size based on the speed of movement, and it leaves a trail that fades out as it moves.

## Features
- **Smooth Cursor Movement**: The cursor smoothly follows the mouse movement with a customizable speed.
- **Trace Effect**: A trail of circular "traces" follow the cursor and fade out after a brief animation.


## Live Demo
You can see the live demo of the project here:
https://adi522.github.io/my-portfolio

## Files in this Project

- `index.html`: Contains the basic structure of the page.
- `script.js`: JavaScript code that controls the behavior of the custom cursor and trace effect.
- `style.css`: Inline styles for the cursor and trace animations.

## How to Use

1. **Clone or Download the repository**.
2. **Open `index.html` in a browser** to see the cursor effect in action.

### HTML
The HTML structure contains a body with no specific elements. The cursor and trace elements are dynamically created and positioned using JavaScript.

### JavaScript
The JavaScript code:
- Tracks mouse movements and updates the position of the custom cursor.
- Dynamically creates and positions a `div` element as the cursor.
- Adds a "trace" effect where circles appear at the mouse's position and shrink/fade out.

### CSS
The styles include:
- The cursor is styled as a small white circle that follows the mouse.
- The trace effect is created by adding small circles that fade and shrink.

## Dependencies
This project does not require any external libraries or frameworks. It's written entirely in vanilla JavaScript and CSS.

## Customization
You can customize the following aspects of the cursor:
- **Cursor size**: Adjust the size in the `cursor.style.width` and `cursor.style.height` properties.
- **Trace size**: Modify the trace size in the `trace.style.width` and `trace.style.height` properties.
- **Transition speed**: Adjust the `transition` durations for smoothness or effect timing.

## License
This project is open source and available under the MIT License.

---

Enjoy customizing and experimenting with the cursor effect!
