import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import type { ImcPresenterViewModel } from '../presenters/useImcPresenter';

const CATEGORY_ROWS = [
  'IMC < 18.5  ->  Bajo peso',
  '18.5 a 24.9  ->  Peso normal',
  '25.0 a 29.9  ->  Sobrepeso',
  'IMC >= 30.0  ->  Obesidad',
];

export function ImcCalculatorView({
  weight,
  height,
  result,
  error,
  onWeightChange,
  onHeightChange,
  onCalculate,
}: ImcPresenterViewModel) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
        <View style={styles.card}>
          <Text style={styles.title}>Calculadora de IMC</Text>
          <Text style={styles.subtitle}>
            Ingresa tu peso y tu altura para calcular tu indice de masa corporal.
          </Text>

          <View style={styles.form}>
            <Text style={styles.label}>Peso (kg)</Text>
            <TextInput
              value={weight}
              onChangeText={onWeightChange}
              placeholder="Ej. 70"
              keyboardType="decimal-pad"
              style={styles.input}
            />

            <Text style={styles.label}>Altura (m)</Text>
            <TextInput
              value={height}
              onChangeText={onHeightChange}
              placeholder="Ej. 1.72"
              keyboardType="decimal-pad"
              style={styles.input}
            />
            <Text style={styles.helperText}>Ingresa la altura en metros. Ejemplo: 1.72</Text>

            <TouchableOpacity style={styles.button} onPress={onCalculate} activeOpacity={0.85}>
              <Text style={styles.buttonText}>Calcular IMC</Text>
            </TouchableOpacity>
          </View>

          {error ? <Text style={styles.errorText}>{error}</Text> : null}

          {/* Results are rendered only after a successful calculation. */}
          {result ? (
            <View style={styles.resultCard}>
              <Text style={styles.resultTitle}>Tu IMC es: {result.value.toFixed(2)}</Text>
              <Text style={styles.resultCategory}>Categoria: {result.category}</Text>
            </View>
          ) : null}

          <View style={styles.tableCard}>
            <Text style={styles.tableTitle}>Categorias de referencia</Text>
            {CATEGORY_ROWS.map((row) => (
              <Text key={row} style={styles.tableRow}>
                {row}
              </Text>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f4efe9',
  },
  content: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#fffaf6',
    borderRadius: 24,
    padding: 24,
    shadowColor: '#a88f72',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.12,
    shadowRadius: 24,
    elevation: 8,
  },
  title: {
    color: '#3d2a1a',
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
  },
  subtitle: {
    color: '#7b6655',
    fontSize: 16,
    lineHeight: 24,
    marginTop: 12,
    textAlign: 'center',
  },
  form: {
    marginTop: 24,
  },
  label: {
    color: '#5c4533',
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#fff',
    borderColor: '#d4c4b6',
    borderRadius: 16,
    borderWidth: 1,
    color: '#35261b',
    fontSize: 16,
    marginBottom: 18,
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  helperText: {
    color: '#8a7562',
    fontSize: 13,
    marginTop: -8,
    marginBottom: 14,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#8f6f4f',
    borderRadius: 16,
    marginTop: 8,
    paddingVertical: 16,
  },
  buttonText: {
    color: '#fffaf6',
    fontSize: 16,
    fontWeight: '700',
  },
  errorText: {
    color: '#b53d2f',
    fontSize: 15,
    fontWeight: '600',
    marginTop: 18,
    textAlign: 'center',
  },
  resultCard: {
    backgroundColor: '#f7ede3',
    borderRadius: 20,
    marginTop: 22,
    padding: 20,
  },
  resultTitle: {
    color: '#2c2118',
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
  },
  resultCategory: {
    color: '#5a4331',
    fontSize: 22,
    fontWeight: '600',
    marginTop: 8,
    textAlign: 'center',
  },
  tableCard: {
    backgroundColor: '#fff',
    borderColor: '#eadfce',
    borderRadius: 18,
    borderWidth: 1,
    marginTop: 24,
    padding: 18,
  },
  tableTitle: {
    color: '#3d2a1a',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10,
  },
  tableRow: {
    color: '#6d5643',
    fontSize: 15,
    lineHeight: 24,
  },
});
