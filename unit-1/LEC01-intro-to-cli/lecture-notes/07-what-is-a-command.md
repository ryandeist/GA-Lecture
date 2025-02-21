# Intro to CLI - What is a Command?

**Learning objective:** By the end of this lesson, students will understand the different types of commands used in the command line, including built-in commands, executable programs, functions, and aliases.

This question is harder to answer than you might initially hope, but in short, a command is anything you can execute directly from the command line.

What makes this difficult to define is that there are four main types of commands you might use:

- **Built-in Commands:** These are commands directly integrated into the shell. For example, when you run `cd`, the shell handles these commands internally without invoking external programs.
- **Executable Programs:** These commands correspond to external apps or scripts on the system. The `ls` command is an example of this, along with any other application run from the terminal. When these apps are run, the shell spawns a new process to execute this external program.
- **Functions:** These are user-defined, callable mini-scripts, typically set in shell configuration files. Once a function is defined, it can be executed directly like any other command.
- **Aliases:** These are user-defined shortcuts for other commands. They're a way to reduce typing, standardize complex commands, or even correct common typos. When an alias is defined, it acts as a substitute for another command.

The varying types of commands add some complexity to working with them. For example, the `man` command won't be able to tell you anything about functions or aliases. This can make the behaviors of some commands feel inconsistent.

Another thing that may make commands feel inconsistent is also one of the things that makes the command line feel powerful - anyone can write a command. But, because anyone can write commands, they may not consistently follow the best possible practices, such as writing help documentation for that command.