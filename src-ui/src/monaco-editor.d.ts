declare module 'monaco-editor/languages/definitions/*/register' {
  const registration: unknown;
  export default registration;
}

declare module 'monaco-editor/languages/features/json/register' {
  const registration: unknown;
  export default registration;
}

declare module 'monaco-editor/languages/features/json/json.worker?worker' {
  const WorkerConstructor: new () => Worker;
  export default WorkerConstructor;
}
