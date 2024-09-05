import os
import random

# Define some color codes
COLORS = [
    "\033[91m",  # Red
    "\033[92m",  # Green
    "\033[93m",  # Yellow
    "\033[94m",  # Blue
    "\033[95m",  # Magenta
    "\033[96m",  # Cyan
    "\033[97m"   # White
]
RESET_COLOR = "\033[0m"  # Reset to default color

def list_directory_contents(path, indent=0, color=RESET_COLOR, include_files=True):
    """Recursively lists the contents of a directory with indentation, using the same color for all children of a directory."""
    try:
        items = os.listdir(path)
    except PermissionError:
        print(' ' * indent + f'[Permission Denied] {path}')
        return
    except FileNotFoundError:
        print(' ' * indent + f'[File Not Found] {path}')
        return

    items.sort()  # Sort items for consistent output order
    
    for item in items:
        if item == '__pycache__' or item.startswith('.git'):
            continue  # Skip __pycache__ directories and Git-related files

        item_path = os.path.join(path, item)
        if os.path.isdir(item_path):
            # Choose a color for the directory and pass it to its contents
            folder_color = random.choice(COLORS)
            print(folder_color + ' ' * indent + f'[DIR]  {item}/' + RESET_COLOR)
            list_directory_contents(item_path, indent + 4, folder_color, include_files)  # Pass the color to contents
        elif include_files:
            # Apply the parent's color to the file
            print(color + ' ' * indent + f'[FILE] {item}' + RESET_COLOR)

def main():
    """Main function to get user input and list directory contents."""
    directory = input("Enter the directory path to list (leave blank for current directory): ").strip()
    if not directory:
        directory = os.getcwd()
    
    # Ensure the directory exists
    if not os.path.exists(directory):
        print(f"The directory '{directory}' does not exist.")
        return

    # Ask whether to include files or just directories
    include_files = input("Do you want to include files? (y/n): ").strip().lower() == 'y'

    print(f"\nListing contents of '{directory}':\n")
    list_directory_contents(directory, include_files=include_files)
    print("\n[End of Directory Listing]\n")

if __name__ == "__main__":
    main()