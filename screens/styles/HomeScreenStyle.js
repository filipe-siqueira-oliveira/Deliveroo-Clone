import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    padding: 10,
  },
  headerContainer: {
    flexDirection: "row",
    paddingBottom: 6,
    alignItems: "center",
    marginHorizontal: 8,
    marginLeft: 8,
  },
  imageLogo: {
    height: 35,
    width: 35,
    backgroundColor: "rgb(209 213 219)",
    padding: 8,
    borderRadius: 50,
  },
  headerTitle: {
    flex: "1 1 0%"
  },
  deliverNow: {
    fontWeight: "bold",
    color: "rgb(156 163 175)",
    fontSize: 16,
    lineHeight: 20,
  },
  currentLocation: {
    fontWeight: "bold",
    fontSize: 24,
    lineHeight: 32,
  }
});