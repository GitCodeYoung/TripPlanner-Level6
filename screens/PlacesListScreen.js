// import React, { useEffect } from "react";
// import { Platform, FlatList } from "react-native";
// import { HeaderButtons, Item } from "react-navigation-header-buttons";
// import HeaderButton from "../components/HeaderButton";
// import { useSelector } from "react-redux";
// import PlaceItem from "../components/PlaceItem";


// const PlacesListScreen = props => {
//   const places = useSelector(state => state.places.places);
//   return (
//     <FlatList
//       data={places}
//       keyExtractor={item => item.id}
//       renderItem={itemData => (
//         <PlaceItem
//           image={itemData.item.imageUri}
//           title={itemData.item.title}
//           address={itemData.item.address}
//           onSelect={() => {
//             props.navigation.navigate("PlaceDetail", {
//               placeTitle: itemData.item.title,
//               placeId: itemData.item.id
//             });
//           }}
//         />
//       )}
//     />
//   );
// };
// PlacesListScreen.navigationOptions = navData => {
//   return {
//     headerTitle: "All Places",
//     headerRight: () => {
//       return (
//         <HeaderButtons HeaderButtonComponent={HeaderButton}>
//           <Item
//             title="Add Place"
//             iconName={Platform.OS === "android" ? "md-add" : "ios-add"}
//             onPress={() => {
//               navData.navigation.navigate("NewPlace");
//             }}
//           />
//         </HeaderButtons>
//       );
//     }
//   };
// };

// export default PlacesListScreen;

import React, { useEffect } from "react";
import { Platform, FlatList } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import { useSelector, useDispatch } from "react-redux";
import PlaceItem from "../components/PlaceItem";
import * as placesAction from "../store/places-actions";

const PlacesListScreen = props => {
  const places = useSelector(state => state.places.places);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(placesAction.loadPlaces());
  }, [dispatch]); 


  return (
    <FlatList
      data={places}
      keyExtractor={item => item.id}
      renderItem={itemData => (
        <PlaceItem
          image={itemData.item.imageUri}
          title={itemData.item.title}
          address={itemData.item.address}
          onSelect={() => {
            props.navigation.navigate("PlaceDetail", {
              placeTitle: itemData.item.title,
              placeId: itemData.item.id
            });
          }}
        />
      )}
    />
  );
};

PlacesListScreen.navigationOptions = navData => {
  return {
    headerTitle: "All Places",
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Add Place"
            iconName={Platform.OS === "android" ? "md-add" : "ios-add"}
            onPress={() => {
              navData.navigation.navigate("NewPlace");
            }}
          />
        </HeaderButtons>
      );
    }
  };
};

export default PlacesListScreen;
