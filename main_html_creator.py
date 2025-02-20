#!/usr/bin/env python3
import tkinter as tk
from tkinter import filedialog, messagebox
import markdown

def convert_markdown():
    """
    Retrieve Markdown text from the text widget, convert it to HTML,
    and prompt the user to save the HTML file.
    """
    md_text = text_area.get("1.0", tk.END).strip()  # Get the text and remove extra whitespace
    html_text = markdown.markdown(md_text)
    
    file_path = filedialog.asksaveasfilename(
        defaultextension=".html",
        filetypes=[("HTML Files", "*.html"), ("All Files", "*.*")]
    )
    
    if file_path:
        try:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(html_text)
            messagebox.showinfo("Success", f"HTML file saved to:\n{file_path}")
        except Exception as e:
            messagebox.showerror("Error", f"Failed to save file:\n{e}")

# Set up the main Tkinter window
root = tk.Tk()
root.title("Markdown to HTML Converter")
root.geometry("600x400")  # Set an initial window size

# Create and pack the text area for Markdown input
text_area = tk.Text(root, wrap="word", width=80, height=20)
text_area.pack(padx=10, pady=10, expand=True, fill="both")
text_area.focus_set()  # Set focus to the text area so you can type immediately

# Create and pack the conversion button
convert_button = tk.Button(root, text="Convert and Save", command=convert_markdown)
convert_button.pack(pady=10)

# Start the Tkinter event loop
root.mainloop()
