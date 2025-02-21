# Intro to CLI - Flags

**Learning objective:** By the end of this lesson, students will be able to effectively use and combine flags with the `ls` command to modify its output.

As demonstrated in `Navigating the File System` we can use the `ls` command to see the files in a directory.

The default behavior of this command does not display hidden files (files that start with a `.`, like a `.gitignore-global` file). So, how do we view files like this? We can add what is called a *flag* to the `ls` command. Let's do this now!

```bash
ls -a
```

Here, the letter `a` is a flag, indicated by the `-`. Flags are extra modifiers you can optionally add to commands. They change the behavior of the command.

The `ls` command has several other flags, such as `-l`. This flag lists the directories and files in a directory in a longer format with more details. Let's test it!

```bash
ls -l
```

We can even combine these two flags and run both simultaneously:

```bash
ls -a -l
```

Or use a nifty shortcut by writing one dash `-` followed by the two options:

```bash
ls -al
```

We can write the flags in any order:

```bash
ls -la
```

Some applications also have long flags. These commands are spelled-out words and are preceded by two dashes `--`. A common long flag is `--help`, which some applications will have as a flag to display help information.