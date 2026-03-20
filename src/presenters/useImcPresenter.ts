import { useState } from 'react';

import { calculateImc, sanitizeNumericInput, validateImcForm } from '../models/ImcModel';
import type { ImcFormData } from '../models/entities/ImcInput';
import type { ImcResult } from '../models/entities/ImcResult';

const INITIAL_FORM: ImcFormData = {
  weight: '',
  height: '',
};

export interface ImcPresenterViewModel {
  weight: string;
  height: string;
  result: ImcResult | null;
  error: string | null;
  onWeightChange: (value: string) => void;
  onHeightChange: (value: string) => void;
  onCalculate: () => void;
}

export function useImcPresenter(): ImcPresenterViewModel {
  const [form, setForm] = useState<ImcFormData>(INITIAL_FORM);
  const [result, setResult] = useState<ImcResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  function updateField(field: keyof ImcFormData, value: string) {
    const sanitizedValue = sanitizeNumericInput(value);

    setForm((current) => ({
      ...current,
      [field]: sanitizedValue,
    }));
    // Any new input invalidates the previous result and clears stale errors.
    setError(null);
    setResult(null);
  }

  function onCalculate() {
    // The presenter coordinates validation and calculation before updating the view state.
    const validation = validateImcForm(form);

    if (!validation.metrics) {
      setError(validation.error ?? 'No se pudo calcular el IMC.');
      setResult(null);
      return;
    }

    setResult(calculateImc(validation.metrics));
    setError(null);
  }

  return {
    weight: form.weight,
    height: form.height,
    result,
    error,
    onWeightChange: (value) => updateField('weight', value),
    onHeightChange: (value) => updateField('height', value),
    onCalculate,
  };
}
