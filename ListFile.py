import os
import random

# Define some color codes
COLORS = {
    "server": "\033[91m",  # Red for server-side (backend)
    "client": "\033[94m",  # Blue for client-side (frontend)
    "default": "\033[97m", # Default color for other files
}
RESET_COLOR = "\033[0m"  # Reset to default color

def list_directory_contents(path, indent=0, include_files=True):
    """Recursively lists the contents of a directory with different colors for server and client side."""
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
        # Skip __pycache__, .git, node_modules directories
        if item in ['__pycache__', '.git', 'node_modules']:
            continue  # Ignore node_modules and similar directories

        item_path = os.path.join(path, item)

        # Determine the color based on whether the file is server-side or client-side
        if 'server' in item_path or 'backend' in item_path:
            color = COLORS['server']  # Red for server-side
        elif 'public' in item_path or 'client' in item_path:
            color = COLORS['client']  # Blue for client-side
        else:
            color = COLORS['default']  # Default color for anything else

        if os.path.isdir(item_path):
            # Print the directory and apply the correct color
            print(color + ' ' * indent + f'[DIR]  {item}/' + RESET_COLOR)
            # Recurse into the directory
            list_directory_contents(item_path, indent + 4, include_files)
        elif include_files:
            # Print the file and apply the correct color
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
