import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  plan: 'community' | 'legacy_builder';
  stripeCustomerId?: string;
  stripeSubscriptionId?: string;
  subscriptionStatus: 'active' | 'inactive' | 'trialing' | 'canceled';
  // Email sequence tracking
  onboardingStartedAt?: Date;      // Set when subscription activates
  leadNurtureStartedAt?: Date;     // Set when account is created (community plan)
  canceledAt?: Date;               // Set when subscription is canceled
  reengagementStartedAt?: Date;    // Set when canceledAt is recorded
  emailSequenceLog: string[];      // e.g. ['onboarding_1', 'nurture_2', 'reengagement_1']
  workshopNotifiedAt?: Date;       // Last workshop promo sent
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true, minlength: 6 },
    plan: { type: String, enum: ['community', 'legacy_builder'], default: 'community' },
    stripeCustomerId: { type: String },
    stripeSubscriptionId: { type: String },
    subscriptionStatus: {
      type: String,
      enum: ['active', 'inactive', 'trialing', 'canceled'],
      default: 'inactive',
    },
    // Email sequence tracking
    onboardingStartedAt: { type: Date },
    leadNurtureStartedAt: { type: Date },
    canceledAt: { type: Date },
    reengagementStartedAt: { type: Date },
    emailSequenceLog: { type: [String], default: [] },
    workshopNotifiedAt: { type: Date },
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model<IUser>('User', UserSchema);
