import { IMC_RANGES } from './entities/ImcCategory';
import type { ImcFormData, ImcMetrics } from './entities/ImcInput';
import type { ImcResult } from './entities/ImcResult';

export interface ImcValidationResult {
  metrics?: ImcMetrics;
  error?: string;
}

// Keeps only digits and a single decimal separator to avoid invalid numeric input.
export function sanitizeNumericInput(value: string) {
  let sanitizedValue = '';
  let hasDecimalSeparator = false;

  for (const char of value.trim()) {
    if (/\d/.test(char)) {
      sanitizedValue += char;
      continue;
    }

    if ((char === '.' || char === ',') && !hasDecimalSeparator) {
      sanitizedValue += '.';
      hasDecimalSeparator = true;
    }
  }

  return sanitizedValue;
}

function normalizeDecimal(value: string) {
  return value.replace(',', '.').trim();
}

export function validateImcForm(form: ImcFormData): ImcValidationResult {
  const weightValue = normalizeDecimal(form.weight);
  const heightValue = normalizeDecimal(form.height);

  if (!weightValue || !heightValue) {
    return { error: 'Debes ingresar tu peso y tu altura.' };
  }

  const weight = Number(weightValue);
  const height = Number(heightValue);

  if (Number.isNaN(weight) || Number.isNaN(height)) {
    return { error: 'Los valores ingresados deben ser numeros validos.' };
  }

  if (weight <= 0 || height <= 0) {
    return { error: 'El peso y la altura deben ser mayores que cero.' };
  }

  // Height must be entered in meters, not centimeters.
  if (height >= 3) {
    return { error: 'Ingresa la altura en metros. Si mides 172 cm, escribe 1.72.' };
  }

  return {
    metrics: {
      weight,
      height,
    },
  };
}

export function calculateImc(metrics: ImcMetrics): ImcResult {
  const value = metrics.weight / (metrics.height * metrics.height);
  // The first matching range determines the category shown to the user.
  const category =
    IMC_RANGES.find((range) => value >= range.min && (range.max === undefined || value < range.max))
      ?.category ?? 'Obesidad';

  return {
    value,
    category,
  };
}
