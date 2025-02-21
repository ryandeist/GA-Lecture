# Intro to CLI - The Shell

**Learning objective:** By the end of this lesson, students will understand the role of the `shell` in the command line interface, distinguish it from the terminal, and explain how it interacts with user commands and the operating system.

There's more to our interaction with the command line than we covered in the main content - the shell.

As a reminder, we know about these two components of the CLI so far:

- **Command line:** The space where we input text commands
- **The Terminal:** A program that provides a graphical interface to type commands and output the results of running those commands.

The third component in this is the shell. This program takes your executed commands and decides what to do with them. When there are results to show the user, the shell sends that information to be displayed to the user inside the terminal. The shell acts as an intermediary between the user and the system.

Here's a step-by-step walkthrough of a potential interaction loop:

1. You open a terminal application on your computer. A graphical interface is displayed for you to type and view text.
2. Inside the terminal is a shell. It waits to receive executed commands.
3. You type a command on the command line and then execute the command by pressing `Enter`.
4. The shell processes the command. Depending on the command, it might handle it directly or call on the OS or another external program to execute it.
5. The results are displayed back in the terminal for the user to see.

There are a variety of shells available, in this course we will use Zsh.