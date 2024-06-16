import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new mongoose.Schema(
    {
        videoFile: {
            type: String,
            required: true,
            trim: true
        },
        thumbnail: {
            type: String,
            required: true,
            trim: true,
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        title: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            required: true,
        },
        duration: {
            type: Number,
            required: true,
        },
        views: {
            type: Number,
            default: 0
        },
        isPublished: {
            type: Boolean,
            required: true,
            // enum: ["DRAFT", "PUBLISHED"],
            default: true,
        }
    }
    , {timestamps: true});

videoSchema.plugin(mongooseAggregatePaginate);
    
export const Video = mongoose.model('Video', videoSchema);