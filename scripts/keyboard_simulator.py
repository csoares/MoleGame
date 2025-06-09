import pyautogui
import sys
import tty
import termios

def get_key():
    old_settings = termios.tcgetattr(sys.stdin)
    try:
        tty.setraw(sys.stdin.fileno())
        ch = sys.stdin.read(1)
    finally:
        termios.tcsetattr(sys.stdin, termios.TCSADRAIN, old_settings)
    return ch

def print_instructions():
    print("Keyboard Simulator for Whack-a-Mole")
    print("Press keys 1-6 to simulate button presses")
    print("Press 'q' to quit")
    print("Waiting for input...")

def main():
    print_instructions()
    while True:
        key = get_key()
        if key == 'q':
            print("\nQuitting simulator...")
            break
        elif key in '123456':
            print(f"\nButton {key} pressed")
            pyautogui.press(key)

if __name__ == '__main__':
    try:
        main()
    except KeyboardInterrupt:
        print("\nSimulator stopped")