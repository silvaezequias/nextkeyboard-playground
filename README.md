# NextKeyboard Playground

**NextKeyboard Playground** is an interactive environment for testing and visualizing keyboard events using the **NextKeyboard** library. It features a virtual keyboard that reacts to physical key presses and displays key-specific information.

---

## Features

- **Virtual Keyboard**: A responsive on-screen keyboard synchronized with physical key presses.
- **Key Information**: Displays detailed information for each key:
  - `keyValue`
  - `code` (e.g., "KeyA", "ArrowUp")
- **Code Examples**: Shows how to use the detected keys in integration scenarios.
- **Integration Reference**: Provides a direct link to the **NextKeyboard** library repository for further details.

---

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/silvaezequias/nextkeyboard-playground.git
   cd nextkeyboard-playground
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

   or

   ```bash
   yarn dev
   ```

4. Open the application in your browser:
   ```
   http://localhost:3000
   ```

---

## How It Works

1. Press a key on your physical keyboard, or click a key on the virtual keyboard.
2. The application will display:
   - `keyValue`
   - `code` (event code corresponding to the key pressed).
   - **Code Examples** showing how to use the key in your project.
3. Explore the **NextKeyboard** library to integrate advanced keyboard event handling.

For more details on **NextKeyboard**, visit the official repository:  
[NextKeyboard on GitHub](https://github.com/silvaezequias/nextkeyboard)

---

## Contributing

Contributions are welcome. To propose changes:

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature/my-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add my feature"
   ```
4. Push the changes:
   ```bash
   git push origin feature/my-feature
   ```
5. Open a pull request on GitHub.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
