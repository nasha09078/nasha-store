import os
import shutil
import subprocess


class FolderManager:
    def __init__(self):
        self.current_dir = os.getcwd()
        self.source_dir = os.path.join(self.current_dir, ".output/public")
        self.dest_dir = os.path.join(
            self.current_dir,
            "../Desktop/htdocs/htdocs/wordpress/wp-content/themes/nasha-store/public"
        )
        self.php_themes = os.path.join(
            self.current_dir,
            "../Desktop/htdocs/htdocs/wordpress/wp-content/themes/nasha-store"
        )
        self.themes_dir = os.path.join(self.current_dir, "themes")

    def generate_static_files(self):
        """Run the 'npm run generate' command."""
        print("Generating static files...")
        subprocess.run(["npm", "run", "generate"], check=True)
        print("Static files generated successfully.")

    def delete_folder(self, folder_path):
        """Delete the folder at the specified path."""
        if os.path.exists(folder_path):
            shutil.rmtree(folder_path)
            print(f"Deleted folder: {folder_path}")
        else:
            print(f"Folder not found, skipping deletion: {folder_path}")

    def copy_folder(self, source, destination):
        """Copy a folder from source to destination."""
        shutil.copytree(source, destination)
        print(f"Copied folder from {source} to {destination}")

    def replace_folder(self):
        """Replace the destination folder with the source folder."""
        self.delete_folder(self.dest_dir)
        self.copy_folder(self.source_dir, self.dest_dir)
        print("Folder has been replaced successfully.")

    def create_php_themes_local(self):
        """Example function for creating PHP themes locally."""
        if not os.path.exists(self.themes_dir):
            os.makedirs(self.themes_dir)
        shutil.copytree(self.php_themes, self.themes_dir)
        print("Local PHP themes have been created.")

    def create_php_themes_production(self):
        """Example function for creating PHP themes for production."""
        production_dir = os.path.join(self.current_dir, "production_themes")
        if not os.path.exists(production_dir):
            os.makedirs(production_dir)
        shutil.copytree(self.php_themes, production_dir)
        print("Production PHP themes have been created.")

    def run(self):
        """Main entry point to execute all tasks."""
        self.generate_static_files()
        self.replace_folder()
        self.create_php_themes_local()
        self.create_php_themes_production()


if __name__ == "__main__":
    manager = FolderManager()
    manager.run()
