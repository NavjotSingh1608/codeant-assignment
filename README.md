# Dashboard Project

A responsive and dynamic dashboard application built with React.js. This project includes authentication, a customizable sidebar, and interactive UI components for managing repositories.

---

## Features

- **Authentication:** Secure login and logout functionality with route protection.
- **Responsive Design:** Sidebar persists for screens larger than `md` and adapts seamlessly for smaller devices.
- **Repository Management:** Add, display, and manage repositories with data persistence using `localStorage`.
- **Dynamic Navigation:** Interactive sidebar with tabs for easy navigation.
- **Support for Modal Dialogs:** Add repositories via a modal interface.
- **Routing:** Managed via `react-router-dom` for a smooth navigation experience.

---

## Installation

Follow these steps to set up the project locally:

### Prerequisites
- Node.js and npm installed.
- Git installed.

### Steps
1. Clone the repository:
   ```bash
   git clone <repository-URL>
   ```

2. Navigate to the project directory:
   ```bash
   cd dashboard-project
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and visit:
   ```
   http://localhost:3000
   ```

---

## Folder Structure

```
.
├── public
│   ├── logo.png
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── components
│   │   ├── Authentication.jsx
│   │   ├── Dashboard.jsx
│   │   └── Modal.jsx
│   ├── App.js
│   ├── index.js
│   └── styles
│       └── App.css
└── package.json
```

---

## Usage

### Authentication
Navigate to `/authentication` to access the login page. Unauthorized users are redirected here.

### Dashboard
Once authenticated, navigate to `/dashboard` to interact with the application. 

- Use the sidebar to switch between tabs.
- Add repositories through the "Add Repository" button.

---

## Deployment

This project is deployed on Netlify:

- URL: [Dashboard Project on Netlify](https://codeant-navjot.netlify.app)

To deploy updates:
1. Push changes to the GitHub repository.
2. Ensure Netlify is configured to build and deploy automatically.

---

## Troubleshooting

### Issue: "Page not found" on refresh
This occurs because React Router requires additional configuration on deployment platforms. On Netlify:
- Add a `_redirects` file in the `public` folder with the following content:
  ```
  /*    /index.html   200
  ```

### Issue: "Could not read from remote repository"
Ensure the remote is configured correctly:
```bash
git remote add origin <repository-URL>
```

---

## Contributing

Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch for your feature:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes and push:
   ```bash
   git commit -m "Description of changes"
   git push origin feature-name
   ```
4. Open a pull request.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Contact

For any inquiries or support, visit [Contact Us](https://navjotsinghportfolio.netlify.app).
