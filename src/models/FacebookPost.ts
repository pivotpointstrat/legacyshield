import mongoose, { Schema, Document } from 'mongoose';

export interface IFacebookPostLog extends Document {
  postId: number;           // ID from JUNE_2026_POSTS
  date: string;             // YYYY-MM-DD
  topic: string;
  type: string;
  facebookPostId: string;   // ID returned by Facebook Graph API
  publishedAt: Date;
  messagePreview: string;   // First 100 chars for reference
}

const FacebookPostLogSchema = new Schema<IFacebookPostLog>(
  {
    postId:          { type: Number, required: true, unique: true },
    date:            { type: String, required: true },
    topic:           { type: String, required: true },
    type:            { type: String, required: true },
    facebookPostId:  { type: String, required: true },
    publishedAt:     { type: Date, default: Date.now },
    messagePreview:  { type: String },
  },
  { timestamps: true }
);

const FacebookPostLog =
  mongoose.models.FacebookPostLog ||
  mongoose.model<IFacebookPostLog>('FacebookPostLog', FacebookPostLogSchema);

export default FacebookPostLog;
