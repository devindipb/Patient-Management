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
  
  const PetOwnerPdf = ({ registration }) => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>Pet Owner Information</Text>
          <View style={{ marginBottom: 20 }}>
            <Text style={styles.label}>Name:</Text>
            <Text style={styles.field}>{registration.name}</Text>
          </View>
          <View style={{ marginBottom: 20 }}>
            <Text style={styles.label}>Email:</Text>
            <Text style={styles.field}>{registration.email}</Text>
          </View>
          <View style={{ marginBottom: 20 }}>
            <Text style={styles.label}>Address:</Text>
            <Text style={styles.field}>{registration.address}</Text>
          </View>
          <View style={{ marginBottom: 20 }}>
            <Text style={styles.label}>PhoneNumber:</Text>
            <Text style={styles.field}>{registration.phonenumber}</Text>
          </View>
        </View> 
      </Page>
    </Document>
  );
  
  export default PetOwnerPdf;
  