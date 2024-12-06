# Intro to Node - Setting up a Node Application

## Initializing a Node project

1. **Ensure you're in the root of your project**: In your terminal, you should be inside the `intro-to-node` directory.

2. **Project initialization**:

   From here you have two options. The first is a more customized initialization which walks you through each step and allows you to fill in details. The second is a quick initialization which automatically provides the default values.

   You can change any of these details later, no matter which option you choose. Continue with either **a.** or **b.** below. Choose only one path.

   a. **Custom initialization**:

      - Run the following command in your project's root directory:

        ```bash
        npm init
        ```

      - This initializes your project, prompting you to fill in details like project name and version. For this project, press `Enter` to accept each of the default values.

   b. **Quick initialization**:

      - Run the following command in your project's root directory:

        ```bash
        npm init -y
        ```

      - This automatically accepts all default values without prompting.

   > 🧠 The result of either sequence is the creation of a `package.json` file in your project. Open the file and check out the default values that were included. For example, the `name` of our project is `intro-to-node`, and the `version` is `1.0.0`.

## Understanding `package.json`

The `package.json` file in a Node project fills many roles, but has two primary purposes that we'll concern ourselves with for now:

- **Lists project metadata**: Details like your project's name, version, and description.
- **Lists *dependencies***: It lists all the external packages your project needs to function.

> 📚 A *dependency* is an external library or module essential for your project to function. When you install a package and use its methods in your code, your application relies on that package to operate correctly, hence the term 'dependency'. Dependencies offer pre-built functions, making development more efficient and reducing the need to write duplicate code.

Think of `package.json` in your Node project like a collection of details about a party. It holds all of the details like the name of the party, a description, where the party is, and who's throwing it. A party might also have collection of things it needs to actually be a party (its dependencies) - fun banners, food, and drinks.