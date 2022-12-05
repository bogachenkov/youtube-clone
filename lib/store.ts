import { configureStore, createSlice } from '@reduxjs/toolkit';

const videos = [
  ''
];

const VideosStoreData = {
  videos,
  error: null
};

// all
// subscriptions
// your videos
// watch later
// liked videos
// library

const VideosSlice = createSlice({
  name: 'videos',
  initialState: VideosStoreData,
  reducers: {
    
  }
});

const store = configureStore({
  reducer: {
    videos: VideosSlice.reducer
  }
});