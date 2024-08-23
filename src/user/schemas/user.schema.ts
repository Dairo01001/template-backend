import { object, string, TypeOf } from 'zod';

export const createUserSchema = object({
  body: object({
    name: string({
      required_error: 'Name is required',
    }).min(4, 'Name must be at least 4 characters'),
  }),
});

export type CreateUserSchema = TypeOf<typeof createUserSchema>;
