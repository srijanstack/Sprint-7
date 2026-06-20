# Sprint-7
## This is an assignment for Prodesk IT internship

---

# Multi-Step Form with React Hook Form & Zod

## Overview

This project is a responsive three-step form built using React. It demonstrates form state management, schema-based validation, reusable components, and step-wise navigation using modern React practices.

The application prevents users from proceeding to the next step until all required fields in the current step are valid.

---

## Features

### Step 1 - Basic Information

* First Name
* Last Name
* Date of Birth

Validation:

* First Name must be at least 3 characters.
* Last Name must be at least 3 characters.
* Date of Birth is required.

---

### Step 2 - Account Details

* Email Address
* Password
* Confirm Password

Validation:

* Valid email format required.
* Password must:

  * Be at least 8 characters long.
  * Contain at least one uppercase letter.
  * Contain at least one number.
  * Contain at least one special character.
* Confirm Password must match Password.

Additional Features:

* Show / Hide password toggle using an eye icon.
* Validation messages displayed on blur.

---

### Step 3 - Review Details

Displays all the information entered by the user before final submission.

---

## Technologies Used

* React
* React Hook Form
* Zod
* @hookform/resolvers
* Tailwind CSS
* Lucide React Icons

---

## Project Structure

```text
src/

├── Components/
│   ├── Header.jsx
│   ├── Input.jsx
│   ├── StepOne.jsx
│   ├── StepTwo.jsx
│   ├── StepThree.jsx
│   └── FormNavigation.jsx
│
├── Validator/
│   └── schema.js
│
├──Services/
|    └── form.js
├── App.jsx
└── main.jsx
```

---

## Preview

![Preview1](/Preview/Screenshot%202026-06-20%20143339.png)
![Preview2](/Preview/Screenshot%202026-06-20%20143356.png)
![Preview3](/Preview/Screenshot%202026-06-20%20143407.png)


