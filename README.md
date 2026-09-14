# 🩺 Docly — Doctor Appointment Booking System

Docly is a full-stack **Doctor Appointment Booking System** built using the **MERN Stack**. It allows patients to discover doctors, view doctor profiles, book appointments, manage appointments, and make online payments.

The project also includes a dedicated **Admin Panel** for managing doctors, appointments, and doctor availability.

---

## 🌐 Live Demo

### 👤 Patient Application
https://docly-frontend.vercel.app

### 🔐 Admin Panel
https://docly-sigma.vercel.app

### ⚙️ Backend API
https://docly-backend-pvon.onrender.com

### 💻 GitHub Repository
https://github.com/iashishhsingh/docly

---

## 🔑 Admin Login

You can access the Docly Admin Panel using the demo administrator account.

### Admin Panel

https://docly-sigma.vercel.app

### Demo Credentials

**Email:** `admin@docly.com`

**Password:** `adminpassword`

> 💡 Use these credentials to explore the Admin Dashboard, doctor management, appointment management, and doctor availability features.

---

## 📌 Features

### 👤 Patient Features

- User registration and login
- JWT-based authentication
- Browse available doctors
- Search and filter doctors
- View doctor profiles
- View doctor specialization and information
- Book doctor appointments
- Select available appointment slots
- View booked appointments
- Cancel appointments
- Manage user profile
- Upload profile picture
- Online appointment payments
- Responsive user interface

### 🛡️ Admin Features

- Admin authentication
- Admin dashboard
- View application statistics
- Add doctors
- Manage doctors
- View doctor list
- Change doctor availability
- View appointments
- Manage appointments
- Cancel appointments
- Manage doctor information

---

## 🛠️ Tech Stack

### Frontend

- React.js
- Vite
- Tailwind CSS
- React Router
- Axios
- React Toastify

### Admin Panel

- React.js
- Vite
- Tailwind CSS
- React Router
- Axios

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt
- Multer
- Validator

### Third-Party Services

- **MongoDB Atlas** — Database
- **Cloudinary** — Image Storage
- **Razorpay** — Payment Gateway
- **Vercel** — Frontend & Admin Deployment
- **Render** — Backend Deployment

---

## 🏗️ Project Structure

```text
docly/
│
├── admin/                 # Admin Panel
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── frontend/              # Patient Application
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── backend/               # Node.js + Express API
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
├── .gitignore
├── package.json
└── README.md
```

---

## 🔄 Application Architecture

```text
                    ┌─────────────────────┐
                    │   Patient Frontend  │
                    │    React + Vite     │
                    └──────────┬──────────┘
                               │
                               │ API Requests
                               ▼
                    ┌─────────────────────┐
                    │      Backend        │
                    │ Node.js + Express   │
                    └──────┬───────┬──────┘
                           │       │
              ┌────────────┘       └────────────┐
              ▼                                 ▼
     ┌─────────────────┐                ┌─────────────────┐
     │  MongoDB Atlas  │                │   Cloudinary    │
     │    Database     │                │ Image Storage   │
     └─────────────────┘                └─────────────────┘

                    ┌─────────────────────┐
                    │     Admin Panel     │
                    │    React + Vite     │
                    └──────────┬──────────┘
                               │
                               │ API Requests
                               ▼
                    ┌─────────────────────┐
                    │      Backend        │
                    └─────────────────────┘

                         Razorpay
                      Payment Gateway
```

---

## 🔐 Authentication & Security

Docly uses authentication mechanisms to protect user and admin functionality.

- JWT-based authentication
- Password hashing using bcrypt
- Protected API routes
- Environment variables for sensitive configuration
- `.env` files excluded from Git
- Separate frontend and backend environments
- Secure third-party API configuration

Sensitive credentials such as database passwords, API keys, JWT secrets, Cloudinary credentials, and Razorpay secrets are **not stored in the GitHub repository**.

---

## 💳 Payment Integration — Razorpay Test Mode

Docly integrates **Razorpay** for online appointment payments.

The application currently uses **Razorpay Test Mode**, so all payments are simulated and **no real money is deducted**.

### 🧪 Test Payment Credentials

For testing a successful UPI payment:

**UPI ID:** `success@razorpay`

For testing a failed payment:

**UPI ID:** `failure@razorpay`

### How to Test

1. Open the Patient Application:
   https://docly-frontend.vercel.app

2. Login/Register as a patient.

3. Select a doctor and book an appointment.

4. Proceed to payment.

5. Select **UPI** as the payment method.

6. Enter:

   `success@razorpay`

7. Complete the test payment flow.

### ⚠️ Important

This project is currently configured with Razorpay **Test Mode** credentials.

- No real money is involved.
- Payments are simulated.
- Test Mode is intended for development and demonstration.
- Razorpay Test Mode uses separate test API keys from Live Mode.
- Razorpay secret keys are stored securely as environment variables and are **not included in this public repository**.

Official Razorpay Test Payment Documentation:

https://razorpay.com/docs/payments/payments/test-upi-details/

---

## ☁️ Image Management

Doctor and user images are managed using **Cloudinary**.

Cloudinary provides cloud-based image storage and allows the application to upload and retrieve images efficiently.

---

## 🗄️ Database

Docly uses **MongoDB Atlas** as its cloud database.

Mongoose is used to:

- Define database schemas
- Create and manage models
- Perform CRUD operations
- Connect the Node.js application with MongoDB

---

## 🔌 API Routes

The backend provides the following main API route groups:

```text
/api/admin
/api/doctor
/api/user
```

Backend API:

https://docly-backend-pvon.onrender.com

---

## 🚀 Run Locally

### 1. Clone the Repository

```bash
git clone https://github.com/iashishhsingh/docly.git
```

```bash
cd docly
```

---

### 2. Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` folder:

```env
MONGODB_URI=your_mongodb_connection_string
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret
ADMIN_EMAIL=your_admin_email
ADMIN_PASSWORD=your_admin_password
JWT_SECRET=your_jwt_secret
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_secret
CURRENCY=INR
```

Start the backend:

```bash
npm run server
```

Backend:

```text
http://localhost:4000
```

---

### 3. Setup Patient Frontend

Open a new terminal:

```bash
cd frontend
npm install
```

Create a `.env` file:

```env
VITE_BACKEND_URL=http://localhost:4000
```

Start the frontend:

```bash
npm run dev
```

---

### 4. Setup Admin Panel

Open another terminal:

```bash
cd admin
npm install
```

Create a `.env` file:

```env
VITE_BACKEND_URL=http://localhost:4000
```

Start the admin panel:

```bash
npm run dev
```

---

## 🌍 Deployment

| Component | Platform |
|---|---|
| Patient Frontend | Vercel |
| Admin Panel | Vercel |
| Backend API | Render |
| Database | MongoDB Atlas |
| Image Storage | Cloudinary |
| Payment Gateway | Razorpay |

---

## 📱 Responsive Design

The application is designed to work across:

- Desktop
- Laptop
- Tablet
- Mobile devices

---

## 🎯 What I Learned

Building Docly helped me gain practical experience in:

- Full-stack MERN development
- React component development
- React Context API
- REST API development
- Express.js backend architecture
- MongoDB and Mongoose
- JWT authentication
- Password hashing
- File uploads
- Cloudinary integration
- Razorpay payment integration
- Admin dashboard development
- Axios API integration
- Environment variable management
- Git and GitHub
- Vercel deployment
- Render deployment
- Debugging production applications

---

## 🔮 Future Improvements

- Doctor-side dashboard
- Email/SMS appointment notifications
- Doctor reviews and ratings
- Prescription management
- Appointment reminders
- Payment history
- Advanced analytics
- Role-based access control
- Enhanced security and validation

---

## 👨‍💻 Author

### Ashish Singh

**Full-Stack Developer | MERN Stack**

GitHub:  
https://github.com/iashishhsingh

---

## ⭐ Support

If you find this project useful, consider giving the repository a ⭐ on GitHub.

---

## 📄 License

This project is created for **learning, portfolio, and demonstration purposes**.
