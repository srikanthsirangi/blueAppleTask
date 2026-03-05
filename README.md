# Seat Booking Backend

## Setup Instructions

1. Install dependencies:
```
npm install
```

2. Make sure MongoDB is running on your system

3. Seed the database with initial seats:
```
node seedSeats.js
```

4. Start the server:
```
npm start
```

Server will run on: http://localhost:3300

## API Endpoints

### 1. Get All Seats
- **URL**: `GET /api/seats`
- **Description**: Fetch all available seats
- **Response**: Array of seat objects

### 2. Create Seats
- **URL**: `POST /api/seats`
- **Description**: Create multiple seats (for admin)
- **Body**:
```json
{
  "seats": [
    { "seatNumber": "A1", "row": "A", "isBooked": false },
    { "seatNumber": "A2", "row": "A", "isBooked": false }
  ]
}
```

### 3. Book a Seat
- **URL**: `POST /api/book`
- **Description**: Book a specific seat
- **Body**:
```json
{
  "seatNumber": "A1"
}
```
- **Response**: Success message with booked seat details

## Database Schema

**Seat Model:**
- seatNumber: String (unique)
- isBooked: Boolean (default: false)
- row: String
