export default function useForm<T extends object>() {
  const getData = (form: HTMLFormElement) => {
    return Object.fromEntries(new FormData(form)) as T
  }

  const validateStringFields = (data: T): boolean => {
    const keys = Object.keys(data) as Array<keyof T>;
    for (const key of keys) {
      if (typeof data[key] === 'string' && (data[key] as string).trim() === '') {
        return false;
      }
    }
    return true;
  }

  return { getData, validateStringFields };
}