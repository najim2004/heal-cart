import LeftSide from "@/components/profile/LeftSide";
import Container from "@/components/ui/Container";
import React from "react";
/*
{
  "_id": ObjectId("..."),
  "profile": {
    "first_name": "John",
    "last_name": "Doe",
    "email": "johndoe@example.com",
    "phone_number": "+880123456789"
  },
  "auth": {
    "password_hash": "hashed_password",
    "password_salt": "random_salt",
    "last_login": ISODate("2024-09-24"),
    "login_attempts": 0,
    "lock_until": null
  },
  "address": {
    "billing": {
      "street": "123 Main St",
      "city": "Dhaka",
      "postal_code": "1205",
      "country": "Bangladesh"
    },
    "shipping": {
      "street": "456 Another St",
      "city": "Dhaka",
      "postal_code": "1206",
      "country": "Bangladesh"
    }
  },
  "orders": [
    {
      "order_id": ObjectId("..."),
      "order_date": ISODate("2024-09-25"),
      "items": [
        {
          "product_id": ObjectId("..."),
          "name": "Paracetamol",
          "unit_type": "tablet",
          "unit_size": "500mg",
          "quantity": 2,
          "price_per_unit": 2.0
        }
      ],
      "total_price": 4.0,
      "payment_status": "paid",
      "delivery_status": "delivered"
    }
  ],
  "cart": {
    "items": [
      {
        "product_id": ObjectId("..."),
        "name": "Paracetamol",
        "unit_type": "syrup",
        "unit_size": "100ml",
        "quantity": 1,
        "price_per_unit": 5.0
      }
    ],
    "last_updated": ISODate("2024-09-25")
  },
  "favorites": [
    {
      "product_id": ObjectId("..."),
      "name": "Paracetamol"
    }
  ],
  "notifications": [
    {
      "message": "Your order #12345 has been delivered.",
      "read": false,
      "createdAt": ISODate("2024-09-25")
    }
  ],
  "role": "user", 
  "settings": {
    "newsletter_subscribed": true,
    "preferred_language": "en"
  },
  "createdAt": ISODate("2024-09-25"),
  "updatedAt": ISODate("2024-09-25")
}
*/

const Profile = ({ children }) => {
  return (
    <div className="w-full min-h-[calc(100vh-100px)] bg-gray-100 p-8">
      <Container className="flex gap-8">
        <LeftSide />
        <div className="flex-grow bg-white min-h-[400px] rounded-2xl">
          {children}
        </div>
      </Container>
    </div>
  );
};

export default Profile;
