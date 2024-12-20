# PingPong Game

## Overview
This project is a simple Ping Pong game implemented using HTML, CSS, and JavaScript. It consists of a ball bouncing on a table and a paddle controlled by the player. The goal is to interact with the ball using the paddle by preventing it from passing beyond the paddle's boundary.

## File Descriptions

### 1. `index.html`
This file provides the structure of the game.
- It includes a heading welcoming users to the Ping Pong game.
- Contains a `div` element representing the Ping Pong table.
- Nested inside the table are `div` elements for the paddle and the ball.
- Links the external CSS (`style.css`) for styling and JavaScript (`script.js`) for game functionality.

#### Key Components:
- **Heading**: A title welcoming users to the game.
- **Ping Pong Table**: A container for the game elements (paddle and ball).
- **External Scripts**: Links to `style.css` for styling and `script.js` for interactivity.

### 2. `style.css`
This file defines the styling for the Ping Pong game.

#### Styling Highlights:
- **General Settings**:
  - `box-sizing` applied globally to ensure consistent dimensions.
- **Ping Pong Table**:
  - Defined dimensions (700px by 400px) with a black border.
  - Positioned relative to serve as a container for the paddle and ball.
- **Paddle**:
  - Blue rectangle (10px wide, 75px tall) positioned at the left edge of the table.
- **Ball**:
  - Red circle (20px diameter) positioned within the table with rounded corners (`border-radius: 50%`).

### 3. `script.js`
This file handles the game logic and interactivity.

#### Features:
- **Ball Movement**:
  - The ball moves across the table with constant displacement factors (`dx` and `dy`) in x and y directions.
  - Changes direction upon collision with table boundaries or the paddle.
- **Collision Detection**:
  - Detects when the ball hits the paddle and reverses its horizontal direction (`dx`).
- **Paddle Control**:
  - Controlled using:
    - **Keyboard**: Up (`ArrowUp`) and Down (`ArrowDown`) keys.
    - **Mouse**: Paddle follows the vertical position of the mouse within the table.

#### Key Variables:
- `ballX`, `ballY`: Current position of the ball.
- `dx`, `dy`: Displacement values for ball movement in x and y directions.
- `paddleY`: Current vertical position of the paddle.

#### Event Listeners:
- `keydown`: Moves the paddle using the keyboard.
- `mousemove`: Moves the paddle to follow the mouse pointer.

## How to Run
1. Ensure all three files (`index.html`, `style.css`, `script.js`) are in the same directory.
2. Open `index.html` in any modern web browser.
3. Use the keyboard or mouse to control the paddle and interact with the ball.

## Game Controls
- **Keyboard Controls**:
  - Press `ArrowUp` to move the paddle up.
  - Press `ArrowDown` to move the paddle down.
- **Mouse Control**:
  - Move the mouse vertically within the table to control the paddle.


