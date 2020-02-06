import { useState } from 'react';

export function useOposity() {
  const [oposity, setOposity] = useState(false);
  return [oposity, setOposity];
}
