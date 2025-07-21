import mongoose from "mongoose";


const roomSchema = mongoose.Schema({
    roomType: { type: String, required: true },
    roomNumber: { type: String, required: true},
    capacity: { type: Number, required: true},
    pricePerNight: { type: Number, required: true},
    amenities: [String],
    images: [String],
    isActive: { type: Boolean, default: true },
    description: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})


const Room = mongoose.model('Room', roomSchema);

export default Room;