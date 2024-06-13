import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    Image,
  } from "@react-pdf/renderer";
  
  // Create styles
  const styles = StyleSheet.create({
    page: {
      flexDirection: "row",
      backgroundColor: "#E4E4E4",
      padding: 40,
      justifyContent: "center",
      alignItems: "center"
    },
    section: {
      margin: 10,
      padding: 20,
      flexGrow: 1,
      textAlign: "center",
      backgroundColor: "#FFF",
      borderRadius: 10,
      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)"
    },
    title:{
      fontSize: 24,
      marginBottom: 20,
      fontWeight: "bold",
      color: "#333",
      textDecoration: "underline",
      textDecorationColor: "#FF5733",
    },
    label: {
      fontSize: 16,
      fontWeight: "bold",
      color: "#FF5733",
      marginBottom: 10,
    },
    field: {
      fontSize: 14,
      marginBottom: 20,
      borderBottomWidth: 1,
      borderBottomColor: "#999",
      paddingBottom: 5,
      color: "#666",
    },
  });
  
  const PetPdf = ({ petregistration }) => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>Pet Information</Text>
          <View style={{ marginBottom: 20 }}>
            <Text style={styles.label}>PetName:</Text>
            <Text style={styles.field}>{petregistration.petname}</Text>
          </View>
          <View style={{ marginBottom: 20 }}>
            <Text style={styles.label}>Breed:</Text>
            <Text style={styles.field}>{petregistration.breed}</Text>
          </View>
          <View style={{ marginBottom: 20 }}>
            <Text style={styles.label}>PetType:</Text>
            <Text style={styles.field}>{petregistration.pettype}</Text>
          </View>
          <View style={{ marginBottom: 20 }}>
            <Text style={styles.label}>Gender:</Text>
            <Text style={styles.field}>{petregistration.gender}</Text>
          </View>
          <View style={{ marginBottom: 20 }}>
            <Text style={styles.label}>Age:</Text>
            <Text style={styles.field}>{petregistration.age}</Text>
          </View>
        </View> 
      </Page>
    </Document>
  );
export default PetPdf;
  