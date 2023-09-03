import mongoose from 'mongoose';

interface AddressMode {
  productId: mongoose.Schema.Types.ObjectId;
  longitude?: string;
  latitude?: string;
  city: string;
  Neighborhood: string;
}

const addressSchema = new mongoose.Schema<AddressMode>({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  longitude: { type: String },
  latitude: { type: String },
  city: { type: String, required: true },
  Neighborhood: { type: String, required: true },
});

export const Address = mongoose.model<AddressMode>('Address', addressSchema);
