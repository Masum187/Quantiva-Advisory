declare module 'elasticlunr' {
  interface SearchOptions {
    fields?: Record<string, { boost?: number }>;
    expand?: boolean;
  }

  type SearchResult<T> = {
    ref: string;
    score: number;
    doc: T;
  };

  interface Index<T> {
    setRef(fieldName: keyof T | string): void;
    addField(fieldName: keyof T | string): void;
    addDoc(doc: T): void;
    search(query: string, options?: SearchOptions): Array<SearchResult<T>>;
  }

  function elasticlunr<T>(config: (this: Index<T>) => void): Index<T>;

  export = elasticlunr;
}
