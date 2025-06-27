export function cleanInput(input: string): string[] {
    const lowerCaseInput = input.toLowerCase();
    const cleanOutput: string[] = lowerCaseInput.split(" ");
    return cleanOutput;
}