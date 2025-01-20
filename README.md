# E-Commerce Platform

This project is an e-commerce platform for selling laptops, built with modern web technologies. The application includes user authentication, product management, a shopping cart, and order tracking.

## Tech Stack

- **Backend**: Express.js (TypeScript)
- **Database**: MongoDB
- **Frontend**: React.js (TypeScript)
- **UI Framework**: Material-UI (MUI)
- **Build Tool**: Vite

## Features

1. **Authentication**:
   - User registration and login functionality.
   - Secure authentication with encrypted passwords.

2. **Product Management**:
   - Display a list of available laptops on the homepage.
   - Detailed product information.

3. **Shopping Cart**:
   - Add products to the cart.
   - Update product quantities or remove products from the cart.

4. **Checkout**:
   - Complete the purchase process.

5. **Order History**:
   - View purchased products in the "My Products" section.

## Installation

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Install Backend Dependencies**:
   ```bash
   cd backend
   npm install
   ```

3. **Install Frontend Dependencies**:
   ```bash
   cd frontend
   npm install
   ```

4. **Set Up Environment Variables**:
   Create a `.env` file in the `backend` directory and add the following:
   ```env
   PORT=5000
   MONGO_URI=<your-mongodb-connection-string>
   JWT_SECRET=<your-jwt-secret>
   ```

5. **Run the Application**:
   - Start the backend server:
     ```bash
     cd backend
     npm run dev
     ```
   - Start the frontend development server:
     ```bash
     cd frontend
     npm run dev
     ```

6. **Access the Application**:
   Open your browser and navigate to `http://localhost:3000`.

## Project Structure

### Backend
```
BackEnd
├── src
│   ├── middlewares
│   │   └── validateJWT.ts
│   ├── models
│   │   ├── cartModel.ts
│   │   ├── orderModel.ts
│   │   ├── productModel.ts
│   │   └── userModel.ts
│   ├── routes
│   │   ├── cartRoute.ts
│   │   ├── productRoute.ts
│   │   └── userRoute.ts
│   ├── services
│   │   ├── cartService.ts
│   │   ├── productService.ts
│   │   └── userService.ts
│   ├── types
│   └── index.ts
├── .env
├── .env.example
├── nodemon.json
├── package.json
├── tsconfig.json
└── README.md
```

### Frontend
```
frontend
├── public
├── src
│   ├── components
│   │   ├── NavBar.tsx
│   │   ├── ProductCart.tsx
│   │   └── ProtectedRoute.tsx
│   ├── constants
│   │   └── baseUrl.ts
│   ├── Context
│   │   ├── Auth
│   │   │   ├── AuthContext.ts
│   │   │   └── AuthProvider.tsx
│   │   ├── cart
│   │   │   ├── CartContext.ts
│   │   │   └── CartProvider.tsx
│   ├── pages
│   │   ├── CartPage.tsx
│   │   ├── CheckoutPage.tsx
│   │   ├── HomePage.tsx
│   │   ├── LoginPage.tsx
│   │   ├── MyOrderPage.tsx
│   │   ├── OrderSuccessPage.tsx
│   │   └── RegisterPage.tsx
│   ├── types
│   ├── App.tsx
│   └── main.tsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md
```

## Screenshots

### Homepage
_Display of all available laptops._

### Shopping Cart
_Add, update, and remove products._

### My Products
_View your purchase history._

## Future Enhancements

- Add admin panel for managing products and orders.
- Integrate payment gateway for secure transactions.
- Implement product reviews and ratings.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

