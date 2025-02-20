# Intro to SQL - Setup

## Setup
In this lesson, you will use your Terminal application to create and interact with a PostgreSQL database. You will use the `psql` command line tool to interact with the database. Open your Terminal application and use the command `psql` to start the PostgreSQL command line tool:

```bash
psql
```
You should see a prompt that looks like this:

```sql
psql (16.2 (Homebrew))
Type "help" for help.

username=#
```

The version number, `(16.2 (Homebrew))`, may be different on your machine. You are in the PostgreSQL command line tool if you can see your username followed by a `#`.

To close the PostgreSQL command line tool, type `\q` and press `Enter`:

```sql
\q
```

## Optional Setup Instructions
If you would like to save SQL commands for later, open another Terminal window and navigate to your `~/code/ga/lectures` directory:

```bash
cd ~/code/ga/lectures
```

Make a new directory called `intro-to-sql`, then enter this directory:

```bash
mkdir intro-to-sql
cd intro-to-sql
```

Create a SQL file called `queries.sql`:

```bash
touch queries.sql
```

Open the contents of the directory in VSCode:

```bash
code .
```
> 🧠 You can add comments to your SQL file by adding `--` to indicate the start of a comment, which may help to take notes!