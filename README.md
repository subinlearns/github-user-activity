# GitHub User Activity CLI

A simple Node.js command-line tool that fetches and displays recent GitHub user activity using the public GitHub Events API.

This tool shows events like commits, issues opened/closed, stars, and more — directly from your terminal.

---

## 🚀 Features

- 🔍 Fetch **public GitHub events** for any user  
- 📦 Displays common events:
  - Push events (commits)
  - Issues opened/closed
  - Stars
  - Other minor events
- 👨‍💻 Written using **Node.js native modules** (`https`, `process`)
- 🪶 No external dependencies — lightweight and simple

---

## 📥 Installation

Clone this repository:

```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
```

Make the script executable (optional):

```bash
chmod +x activity.js
```

---

## ▶️ Usage

Run the script with a GitHub username:

```bash
node activity.js <username>
```

Example:

```bash
node activity.js octocat
```

Example output:

```
Pushed commits to octocat/Hello-World
Opened a new issue in octocat/some-repo
Starred anotheruser/cool-project
Other Activity in octocat/test-repo
```

---

## 📁 Project Structure

```
.
├── activity.js      # Main CLI script
└── README.md        # Documentation
```

---

## 📡 How It Works

- The script calls:  
  `https://api.github.com/users/<username>/events`
- GitHub returns the user's latest public activities.
- The tool parses the events and prints human-readable summaries to the terminal.

---

## ⚠️ Notes

- GitHub API rate limits apply for unauthenticated requests (≈ 60/hour).
- Only **public** user activity is visible.

---

## 🛠 Requirements

- Node.js v16+  
- Internet connection  
- A valid GitHub username

---

## 🤝 Contributing

Feel free to open issues or submit pull requests if you'd like to improve this tool!

---

## 📄 License

MIT License  
Free to use, modify, and distribute.

