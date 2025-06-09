# Whack-a-Mole Game with Arduino Integration

A fun and interactive Whack-a-Mole game that can be played with a mouse, keyboard, or Arduino buttons. The game features a grid of holes where moles pop up randomly, and players must whack them to score points.

## Features
- 6 holes with randomly appearing moles
- Multiple input methods (mouse, keyboard, Arduino)
- Score tracking
- 20-second game duration
- Visual feedback on hits

## Requirements

### Web Game
- Modern web browser

### Arduino Setup
- Arduino board
- 6 push buttons
- USB cable
- Python 3.x
- Required Python packages:
  ```bash
  pip3 install pyautogui pyserial
  ```

## Hardware Setup

### Arduino Connections
1. Connect push buttons to Arduino:
   - Button 1 → Pin 2
   - Button 2 → Pin 3
   - Button 3 → Pin 4
   - Button 4 → Pin 5
   - Button 5 → Pin 6
   - Button 6 → Pin 7
2. Connect each button's other terminal to ground (GND)

## Software Setup

1. Web Game
   - Open `web/index.html` in a web browser

2. Arduino Setup (if using physical buttons)
   - Open Arduino IDE
   - Load `arduino/WhackAMoleButtons.ino`
   - Select your Arduino board and port
   - Upload the sketch

3. Python Bridge (for Arduino)
   - Navigate to the project directory
   - Run: `python3 scripts/arduino_bridge.py`

## Playing the Game

### Mouse Control
1. Open `web/index.html`
2. Click "Start Game"
3. Click moles as they appear

### Keyboard Control
1. Open `web/index.html`
2. Run: `python3 scripts/keyboard_simulator.py`
3. Click "Start Game"
4. Use keys 1-6 to hit moles
5. Press 'q' to quit simulator

### Arduino Control
1. Open `web/index.html`
2. Run: `python3 scripts/arduino_bridge.py`
3. Click "Start Game"
4. Press physical buttons to hit moles

## Project Structure

```
├── web/               # Web game files
│   ├── index.html     # Game HTML structure
│   ├── script.js      # Game logic
│   └── style.css      # Game styling
├── arduino/           # Arduino files
│   └── WhackAMoleButtons.ino  # Arduino button controller
└── scripts/          # Python scripts
    ├── keyboard_simulator.py   # Keyboard simulation for testing
    └── arduino_bridge.py       # Arduino communication bridge
```

## Troubleshooting

1. Arduino Not Detected
   - Check USB connection
   - Verify correct port in `arduino_bridge.py`
   - Ensure Arduino drivers are installed

2. Buttons Not Responding
   - Verify button connections
   - Check Arduino serial output
   - Ensure correct pin assignments

3. Game Not Starting
   - Check browser console for errors
   - Verify all files are in correct locations
   - Try a different browser