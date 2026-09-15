import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Switch, ScrollView, Alert } from 'react-native';

export default function App() {
  const [bypassAntiCheat, setBypassAntiCheat] = useState(false);
  const [aimBody, setAimBody] = useState(false);
  const [aimNeck, setAimNeck] = useState(false);
  const [aimDrag, setAimDrag] = useState(false);
  const [highFPS, setHighFPS] = useState(false);

  const handleApplyChanges = () => {
    let activeFeatures = [];
    if (bypassAntiCheat) activeFeatures.push("Bypass Anti-Cheat");
    if (aimBody) activeFeatures.push("Aim Body HS");
    if (aimNeck) activeFeatures.push("Aim Neck HS");
    if (aimDrag) activeFeatures.push("Aim Drag HS");
    if (highFPS) activeFeatures.push("Unlock 120-144 FPS");

    if (activeFeatures.length === 0) {
      Alert.alert("Zaynix Info", "No features selected. Please turn on at least one patch.");
    } else {
      Alert.alert(
        "Patches Applied Successfully!",
        `The following modifications have been injected into com.dts.freefireth:\n\n${activeFeatures.join("\n")}`
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>ZAYNIX EXTERNAL</Text>
        <Text style={styles.headerSubtitle}>Game Target: Free Fire v2.X</Text>
        <View style={styles.statusBadge}>
          <Text style={styles.statusText}>SYSTEM CLOUD ACTIVE</Text>
        </View>
      </View>

      <ScrollView style={styles.menuContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.menuItem}>
          <View style={styles.textContainer}>
            <Text style={styles.menuText}>Bypass Anti-Cheats System</Text>
            <Text style={styles.menuSubtext}>Prevent memory scanners & log upload</Text>
          </View>
          <Switch 
            trackColor={{ false: "#333", true: "#00ffcc" }}
            thumbColor={bypassAntiCheat ? "#ffffff" : "#f4f3f4"}
            onValueChange={() => setBypassAntiCheat(!bypassAntiCheat)}
            value={bypassAntiCheat}
          />
        </View>

        <View style={styles.menuItem}>
          <View style={styles.textContainer}>
            <Text style={styles.menuText}>Auto Aim Body (HS Patches)</Text>
            <Text style={styles.menuSubtext}>Lock crosshair to upper body lines</Text>
          </View>
          <Switch 
            trackColor={{ false: "#333", true: "#00ffcc" }}
            thumbColor={aimBody ? "#ffffff" : "#f4f3f4"}
            onValueChange={() => {
              setAimBody(!aimBody);
              if(!aimBody) setAimNeck(false);
            }}
            value={aimBody}
          />
        </View>

        <View style={styles.menuItem}>
          <View style={styles.textContainer}>
            <Text style={styles.menuText}>Auto Aim Neck (HS Patches)</Text>
            <Text style={styles.menuSubtext}>Calibrate hitboxes close to head position</Text>
          </View>
          <Switch 
            trackColor={{ false: "#333", true: "#00ffcc" }}
            thumbColor={aimNeck ? "#ffffff" : "#f4f3f4"}
            onValueChange={() => {
              setAimNeck(!aimNeck);
              if(!aimNeck) setAimBody(false);
            }}
            value={aimNeck}
          />
        </View>

        <View style={styles.menuItem}>
          <View style={styles.textContainer}>
            <Text style={styles.menuText}>Auto Drag Shot Assist</Text>
            <Text style={styles.menuSubtext}>Modify asset indexer pull rate sensitivity</Text>
          </View>
          <Switch 
            trackColor={{ false: "#333", true: "#00ffcc" }}
            thumbColor={aimDrag ? "#ffffff" : "#f4f3f4"}
            onValueChange={() => setAimDrag(!aimDrag)}
            value={aimDrag}
          />
        </View>

        <View style={styles.menuItem}>
          <View style={styles.textContainer}>
            <Text style={styles.menuText}>Unlock Ultra FPS (120-144Hz)</Text>
            <Text style={styles.menuSubtext}>Inject custom com.dts.freefireth.plist</Text>
          </View>
          <Switch 
            trackColor={{ false: "#333", true: "#00ffcc" }}
            thumbColor={highFPS ? "#ffffff" : "#f4f3f4"}
            onValueChange={() => setHighFPS(!highFPS)}
            value={highFPS}
          />
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.buttonAction} onPress={handleApplyChanges}>
        <Text style={styles.buttonText}>INJECT SELECTED PATCHES</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0c0c0c', paddingHorizontal: 20, justifyContent: 'space-between' },
  header: { marginTop: 60, alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#222', paddingBottom: 20 },
  headerTitle: { color: '#00ffcc', fontSize: 26, fontWeight: 'bold', letterSpacing: 3 },
  headerSubtitle: { color: '#666', fontSize: 13, marginTop: 4, fontWeight: '500' },
  statusBadge: { backgroundColor: 'rgba(0, 255, 204, 0.1)', paddingVertical: 4, paddingHorizontal: 12, borderRadius: 20, marginTop: 10, borderWidth: 1, borderColor: 'rgba(0, 255, 204, 0.3)' },
  statusText: { color: '#00ffcc', fontSize: 10, fontWeight: 'bold', letterSpacing: 1 },
  menuContainer: { marginTop: 15, marginBottom: 10 },
  menuItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#141414', padding: 18, borderRadius: 12, marginBottom: 14, borderWidth: 1, borderColor: '#1f1f1f' },
  textContainer: { flex: 1, paddingRight: 10 },
  menuText: { color: '#ffffff', fontSize: 15, fontWeight: '600' },
  menuSubtext: { color: '#555', fontSize: 11, marginTop: 3 },
  buttonAction: { backgroundColor: '#00ffcc', padding: 16, borderRadius: 12, alignItems: 'center', marginBottom: 35 },
  buttonText: { color: '#000000', fontSize: 15, fontWeight: 'bold', letterSpacing: 1.5 }
});
