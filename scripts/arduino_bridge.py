import serial
import pyautogui
import time

class ArduinoBridge:
    def __init__(self, port='/dev/tty.usbmodem1101', baud_rate=9600):
        self.port = port
        self.baud_rate = baud_rate
        self.serial = None

    def connect(self):
        try:
            self.serial = serial.Serial(self.port, self.baud_rate)
            print(f"Connected to Arduino on {self.port}")
            return True
        except serial.SerialException as e:
            print(f"Error connecting to Arduino: {e}")
            return False

    def run(self):
        if not self.serial:
            if not self.connect():
                return

        print("Listening for Arduino button presses...")
        print("Press Ctrl+C to stop")

        try:
            while True:
                if self.serial.in_waiting > 0:
                    button = self.serial.readline().decode('utf-8').strip()
                    if button in '123456':
                        print(f"Button {button} pressed")
                        pyautogui.press(button)
                time.sleep(0.01)  # Small delay to prevent CPU overuse

        except KeyboardInterrupt:
            print("\nStopping Arduino bridge...")
        finally:
            self.serial.close()
            print("Serial connection closed")

if __name__ == '__main__':
    bridge = ArduinoBridge()
    bridge.run()