import type { InputSignal, OutputEmitterRef } from '@angular/core';

export type InputValue<T> = T extends InputSignal<infer Value> ? Value : never;
export type OutputValue<T> = T extends OutputEmitterRef<infer Value> ? Value : never;
