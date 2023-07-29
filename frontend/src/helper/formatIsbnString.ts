export default function formatIsbnString(isbn: string): string {
  return `
    ${isbn.substring(0, 3)}-${isbn.substring(3, 4)}-${isbn.substring(
    4,
    9
  )}-${isbn.substring(9, 12)}-${isbn.substring(12, 13)}
    `;
}

/**
 * 9783110914672 => 978-3-11091-467-2
 */
