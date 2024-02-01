import { configureStore } from "@reduxjs/toolkit"
import itemSlice from "./itemSlice"
import fetchSlice from "./fetchStatusSlice";
import bagSlice from "./bagSlice";
import categorySlice from "./CategorySlice";
import searchSlice from "./SearchSlice";
import detailsPageSlice from "./ItemDetailsPage";


const amazonStore = configureStore({
    reducer: {
        item: itemSlice.reducer,
        fetchingStatus: fetchSlice.reducer,
        bag: bagSlice.reducer,
        filterBtn:categorySlice.reducer,
        searchItem:searchSlice.reducer,
        detailsPage:detailsPageSlice.reducer
        
        
    }
})

export default amazonStore;