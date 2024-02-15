export default function translateIndex2(row, col) {
  if (row == 0 && col == 0) {
    return 0
  }
  if (row == 0 && col == 1) {
    return 1
  }
  if (row == 0 && col == 2) {
    return 2
  }
  if (row == 1 && col == 0) {
    return 3
  }
  if (row == 1 && col == 1) {
    return 4
  }
  if (row == 1 && col == 2) {
    return 5
  }
  if (row == 2 && col == 0) {
    return 6
  }
  if (row == 2 && col == 1) {
    return 7
  }
  if (row == 2 && col == 2) {
    return 8
  }
}
