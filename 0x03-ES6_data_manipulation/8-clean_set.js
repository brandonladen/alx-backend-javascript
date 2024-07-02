export default function cleanSet(set, startString) {
  if (typeof set !== 'object') return '';
  if (typeof startString !== 'string') return '';
  if (startString.length === 0) return '';
  const results = [];
  for (const value of set) {
    if (value.startsWith(startString)) {
      results.push(value.slice(startString.length));
    }
  }
  return results.join('-');
}
